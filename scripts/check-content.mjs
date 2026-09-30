// Kontrola kompletności i jakości treści. Uruchom: node scripts/check-content.mjs
// Błędy przerywają (kod 1). Ostrzeżenia tylko wypisuje.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { methods, legacyRedirects } from "./methods-data.mjs";
import { block90, branchLabels, prepTime, reviewData } from "./extras.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];
const err = (scope, msg) => errors.push(`${scope}: ${msg}`);
const warn = (scope, msg) => warnings.push(`${scope}: ${msg}`);
const filled = (value, min = 1) => typeof value === "string" ? value.trim().length >= min : Array.isArray(value) && value.length >= min;

for (const m of methods) {
  const s = m.file;
  ["title", "short", "definition", "decisionPoint"].forEach((k) => filled(m[k], 10) || err(s, `brak pola ${k}`));
  filled(m.aliases, 2) || err(s, "potrzebne co najmniej 2 synonimy");
  filled(m.how, 2) || err(s, "opis mechanizmu powinien mieć 2 akapity");
  filled(m.differs, 2) || err(s, "potrzebne co najmniej 2 rozróżnienia od innych metod");
  filled(m.when?.good, 2) && filled(m.when?.notFor, 2) || err(s, "sekcja „kiedy tak, kiedy nie” niekompletna");
  filled(m.evidence?.note, 80) || err(s, "opis dowodów zbyt krótki");
  filled(m.sources, 1) || err(s, "brak źródeł");
  filled(m.pitfalls, 3) || err(s, "potrzebne 3 typowe potknięcia");
  filled(m.check?.how, 20) && filled(m.check?.decision, 20) || err(s, "brak sposobu sprawdzenia efektu");
  m.related.length >= 2 || err(s, "potrzebne co najmniej 2 metody powiązane");
  ["none", "computer", "phone", "ai"].forEach((k) => filled(m.tech?.[k], 30) || err(s, `wariant technologii ${k} pusty lub zbyt krótki`));
  new Set(Object.values(m.tech)).size === 4 || err(s, "warianty technologii się powtarzają");
  filled(prepTime[m.file], 20) || err(s, "brak czasu przygotowania (extras.mjs)");
  filled(block90[m.file], 30) || err(s, "brak wariantu na blok 90 minut (extras.mjs)");

  // Plan lekcji
  const n = m.lesson.length;
  (n >= 4 && n <= 6) || err(s, `plan ma ${n} bloków (oczekiwano 4–6)`);
  m.lesson.forEach((b, i) => {
    filled(b.teacher, 20) && filled(b.students, 20) || err(s, `blok ${i + 1}: za krótki opis`);
    if (b.min < 3) err(s, `blok ${i + 1} trwa ${b.min} min (za krótko na sensowną czynność)`);
  });
  const total = m.lesson.reduce((a, b) => a + b.min, 0);
  if (total < 35 || total > 40) err(s, `czas roboczy ${total} min`);

  // Scenariusze
  const kinds = m.scenarios.map((x) => x.kind);
  (kinds.includes("zawodowy") && kinds.includes("ogolny")) || err(s, "brak scenariusza zawodowego lub ogólnokształcącego");
  const review = reviewData[m.file] ?? [];
  review.length === m.scenarios.length || err(s, `recenzje: ${review.length} wpisów na ${m.scenarios.length} scenariuszy`);
  m.scenarios.forEach((sc, i) => {
    const where = `${s} / ${sc.label}`;
    filled(sc.context, 30) && filled(sc.goal, 20) || err(where, "brak kontekstu lub celu");
    filled(sc.key, 80) || err(where, "klucz odpowiedzi zbyt krótki");
    filled(sc.errors, 2) || err(where, "potrzebne co najmniej 2 typowe błędy");
    const student = sc.materials.filter((x) => !x.teacher && !x.later);
    student.length >= 2 || err(where, "mniej niż 2 materiały dla ucznia");
    sc.materials.forEach((x) => { (x.text || x.list || x.table) || err(where, `materiał „${x.t}” jest pusty`); });
    // wyciek klucza do materiałów ucznia
    sc.materials.forEach((x) => {
      if (x.table && !x.studentCols && /odpowied|kluczem/i.test(x.table.head.join(" ") + x.t) && !x.teacher && !x.later) {
        if (x.table.head.some((h) => /^(poprawna )?odpowiedź$/i.test(h))) err(where, `tabela „${x.t}” ma kolumnę odpowiedzi bez studentCols`);
      }
      const inline = (x.list ?? []).some((line) => /\([^)]*\d[^)]*\)$/.test(line) && /\?|=/.test(line) && x.t.toLowerCase().includes("klucz"));
      if (inline) err(where, `lista „${x.t}” zawiera odpowiedzi w nawiasach`);
    });
    if (/\bkart[aęy]\s+(ze|z|do|na)\b/i.test(sc.context) && !sc.materials.some((x) => /kart/i.test(x.t))) err(where, "kontekst wspomina o karcie, ale nie ma jej w materiałach");
    const r = review[i];
    if (!r) return;
    branchLabels[r.branch] || err(where, `nieznana branża recenzji ${r.branch}`);
    filled(r.verify, 2) || err(where, "za mało pytań dla recenzenta");
  });
}

// Powtarzalność (slop): zdania i 9-wyrazowe ciągi
const corpus = methods.map((m) => ({ m: m.file, text: JSON.stringify(m).replace(/\\"/g, "'") }));
const sentenceCount = new Map();
methods.forEach((m) => {
  const strings = [];
  const { related, sources, ...content } = m;
  JSON.stringify(content, (k, v) => { if (typeof v === "string") strings.push(v); return v; });
  strings.forEach((str) => str.split(/(?<=[.!?])\s+/).filter((x) => x.length > 45).forEach((x) => {
    const set = sentenceCount.get(x) ?? new Set();
    set.add(m.file);
    sentenceCount.set(x, set);
  }));
});
for (const [sentence, set] of sentenceCount) if (set.size >= 3) warn("powtórzenie", `zdanie w ${set.size} metodach: „${sentence.slice(0, 80)}…”`);
const grams = new Map();
corpus.forEach(({ m, text }) => {
  const words = text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
  const seen = new Set();
  for (let i = 0; i + 9 <= words.length; i++) {
    const g = words.slice(i, i + 9).join(" ");
    if (seen.has(g)) continue;
    seen.add(g);
    const set = grams.get(g) ?? new Set();
    set.add(m);
    grams.set(g, set);
  }
});
const shared = [...grams].filter(([, set]) => set.size >= 4).map(([g, set]) => `${set.size}× „${g}”`);
shared.slice(0, 10).forEach((x) => warn("powtórzenie", `ciąg 9 wyrazów: ${x}`));
if (shared.length > 10) warn("powtórzenie", `…i ${shared.length - 10} kolejnych ciągów`);

// Typografia i resztki
methods.forEach((m) => {
  const all = JSON.stringify(m);
  [/\s{2,}/, /\s,/, /\b(TODO|XXX)\b|lorem ipsum/, /facilit/i].forEach((re) => {
    if (re.test(all.replace(/\\n/g, " "))) warn(m.file, `podejrzany wzorzec ${re}`);
  });
});

// Wygenerowane strony
const htmlFiles = readdirSync(root).filter((f) => f.endsWith(".html"));
const idsByFile = new Map();
htmlFiles.forEach((f) => {
  const html = readFileSync(resolve(root, f), "utf8");
  idsByFile.set(f, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((x) => x[1])));
});
const isRedirect = (f) => f in legacyRedirects;
htmlFiles.forEach((f) => {
  const html = readFileSync(resolve(root, f), "utf8");
  if (isRedirect(f)) return;
  (html.match(/<h1[\s>]/g) ?? []).length === 1 || err(f, "strona powinna mieć dokładnie jeden h1");
  [...html.matchAll(/<img\b[^>]*>/g)].forEach((x) => /\balt="[^"]+"/.test(x[0]) || err(f, "obrazek bez alt"));
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]);
  new Set(ids).size === ids.length || err(f, "powtórzone id");
  [...html.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].forEach(([, href, label]) => {
    if (!href) err(f, "pusty href");
    if (!label.replace(/<[^>]+>/g, "").trim() && !/aria-label/.test(label) && !/<img/.test(label)) warn(f, `link bez tekstu: ${href}`);
    if (/^https?:|^mailto:/.test(href)) return;
    const [file, hash] = href.split("#");
    const target = file || f;
    if (file && !existsSync(resolve(root, target))) return err(f, `link do nieistniejącego pliku ${target}`);
    if (hash && target.endsWith(".html") && !idsByFile.get(target)?.has(hash)) err(f, `link do nieistniejącej kotwicy ${target}#${hash}`);
  });
});
methods.forEach((m) => {
  const base = m.file.replace(/\.html$/, "");
  ["uczen", "nauczyciel"].forEach((kind) => existsSync(resolve(root, "wydruki", `${base}-${kind}.pdf`)) || err(m.file, `brak wydruku ${base}-${kind}.pdf`));
  const html = readFileSync(resolve(root, m.file), "utf8");
  html.includes(`wydruki/${base}-uczen.pdf`) || err(m.file, "strona nie linkuje do wydruku dla ucznia");
});
Object.keys(legacyRedirects).forEach((old) => existsSync(resolve(root, old)) || err(old, "brak przekierowania"));

console.log(`Sprawdzono ${methods.length} metod, ${methods.reduce((a, m) => a + m.scenarios.length, 0)} scenariuszy, ${htmlFiles.length} stron HTML.`);
warnings.forEach((w) => console.log(`Ostrzeżenie: ${w}`));
errors.forEach((e) => console.log(`BŁĄD: ${e}`));
console.log(`${errors.length} błędów, ${warnings.length} ostrzeżeń.`);
process.exit(errors.length ? 1 : 0);
