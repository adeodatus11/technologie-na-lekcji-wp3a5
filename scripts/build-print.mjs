// Buduje PDF-y do druku: karty dla uczniów, arkusze dla nauczyciela i arkusze recenzenckie.
// Wymaga Playwrighta z Chromium: NODE_PATH=$(npm root -g) node scripts/build-print.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { methods } from "./methods-data.mjs";
import { block90, branchLabels, prepTime, reviewData } from "./extras.mjs";

const require = createRequire(process.env.NODE_PATH ? `${process.env.NODE_PATH}/` : import.meta.url);
const { chromium } = require("playwright");

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const esc = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const slug = (method) => method.file.replace(/\.html$/, "");

const css = `
@page { size: A4; margin: 14mm 15mm; }
* { box-sizing: border-box; }
body { font-family: "Liberation Sans", "DejaVu Sans", Arial, sans-serif; font-size: 10.5pt; line-height: 1.4; color: #111; margin: 0; }
h1 { font-size: 16pt; margin: 0 0 2mm; color: #0f2d63; }
h2 { font-size: 13pt; margin: 5mm 0 2mm; color: #0f2d63; }
h3 { font-size: 11pt; margin: 4mm 0 1.5mm; }
h4 { font-size: 10.5pt; margin: 0 0 1mm; color: #0f2d63; }
p { margin: 1mm 0 2mm; }
ul, ol { margin: 1mm 0 2mm; padding-left: 5mm; }
.meta { color: #444; font-size: 9pt; margin-bottom: 3mm; }
.who { display: flex; gap: 10mm; margin: 2mm 0 4mm; font-size: 10pt; }
.who span { flex: 1; border-bottom: 1px solid #111; padding-bottom: 1mm; }
.card { border: 1px solid #999; border-radius: 2mm; padding: 2.5mm 3.5mm; margin: 2.5mm 0; break-inside: avoid; }
.key { border-left: 3mm solid #157f5b; background: #eef8f3; padding: 2.5mm 3.5mm; margin: 3mm 0; break-inside: avoid; }
.warn { border-left: 3mm solid #c99a00; background: #fff8d6; padding: 2.5mm 3.5mm; margin: 3mm 0; break-inside: avoid; }
table { width: 100%; border-collapse: collapse; margin: 1mm 0; font-size: 9.5pt; }
th, td { border: 1px solid #888; padding: 1.5mm 2mm; text-align: left; vertical-align: top; }
th { background: #e6edf8; }
.lines { height: 48mm; margin-top: 3mm; background-image: repeating-linear-gradient(to bottom, transparent 0, transparent 7.4mm, #777 7.4mm, #777 7.6mm); }
.pb { break-before: page; }
.check { margin: 1mm 0; }
.small { font-size: 9pt; color: #444; }
.footer-note { margin-top: 6mm; font-size: 8.5pt; color: #555; border-top: 1px solid #bbb; padding-top: 2mm; }
.sign { display: flex; gap: 8mm; margin-top: 6mm; }
.sign span { flex: 1; border-bottom: 1px solid #111; padding-top: 6mm; font-size: 9pt; }
`;

const page = (title, body) => `<!DOCTYPE html><html lang="pl"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${css}</style></head><body>${body}</body></html>`;

const list = (items) => `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;

const table = (data, cols) => {
  const idx = cols ?? data.head.map((_, i) => i);
  return `<table><thead><tr>${idx.map((i) => `<th>${esc(data.head[i])}</th>`).join("")}</tr></thead><tbody>${data.rows.map((row) => `<tr>${idx.map((i) => `<td>${esc(row[i])}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
};

const material = (m, forStudent) => {
  let content = "";
  if (m.text) content = `<p>${esc(m.text)}</p>`;
  if (m.list) content = list(m.list);
  if (m.table) content = table(m.table, forStudent ? m.studentCols : undefined);
  const title = forStudent ? m.t.replace(/\s*z kluczem/i, "").replace(/\s*\(ćwiczenie na etapie 1\)/i, "").trim() : m.t;
  return `<div class="card"><h4>${esc(title)}</h4>${content}</div>`;
};

const footer = `<p class="footer-note">Innowacyjna lekcja w praktyce, COVE Polska · WIN4SMEs. Dane oznaczone jako przykładowe są fikcyjne. Wartości i procedury zawodowe wymagają konsultacji z nauczycielem przedmiotu. Materiał do użytku w klasie.</p>`;

const studentSheet = (method) => {
  const parts = method.scenarios.map((scenario, index) => {
    const now = scenario.materials.filter((m) => !m.teacher && !m.later);
    const later = scenario.materials.filter((m) => !m.teacher && m.later);
    return `
<section class="${index ? "pb" : ""}">
  <h1>${esc(scenario.label)}</h1>
  <p class="meta">${esc(method.title)} · ${scenario.kind === "zawodowy" ? "przedmiot zawodowy" : "przedmiot ogólnokształcący"} · karta dla ucznia</p>
  <div class="who"><span>Imię i nazwisko:</span><span>Klasa:</span><span>Data:</span></div>
  <p><strong>Cel:</strong> ${esc(scenario.goal)}</p>
  ${now.map((m) => material(m, true)).join("")}
  <h3>Miejsce na odpowiedź</h3>
  <div class="lines"></div>
  ${later.length ? `<div class="warn small"><strong>Karta do rozdania później</strong> (nauczyciel pokazuje ją w wyznaczonym momencie lekcji).</div>${later.map((m) => material(m, true)).join("")}` : ""}
  ${footer}
</section>`;
  });
  return page(`${method.title}: karty dla ucznia`, parts.join(""));
};

const teacherSheet = (method) => {
  const total = method.lesson.reduce((sum, step) => sum + step.min, 0);
  let start = 0;
  const rows = method.lesson.map((step) => {
    const from = start;
    start += step.min;
    return `<tr><td>${from}–${start} min</td><td><strong>${esc(step.title)}</strong></td><td>${esc(step.teacher)}</td><td>${esc(step.students)}</td></tr>`;
  }).join("");
  const scenarios = method.scenarios.map((scenario) => {
    const extra = scenario.materials.filter((m) => m.teacher || m.later);
    return `
<div class="pb">
  <h2>${esc(scenario.label)}</h2>
  <p class="meta">${scenario.kind === "zawodowy" ? "Przedmiot zawodowy" : "Przedmiot ogólnokształcący"}</p>
  <p><strong>Kontekst:</strong> ${esc(scenario.context)}</p>
  <p><strong>Cel:</strong> ${esc(scenario.goal)}</p>
  <div class="key"><h4>Klucz i uwagi</h4><p>${esc(scenario.key)}</p></div>
  <h3>Typowe błędy uczniów</h3>${list(scenario.errors)}
  ${scenario.schedule ? `<h3>Karta powrotów</h3><p>${esc(scenario.schedule)}</p>` : ""}
  ${scenario.ladder ? `<h3>Większa skala</h3><p>${esc(scenario.ladder)}</p>` : ""}
  ${extra.length ? `<h3>Materiały tylko dla nauczyciela lub do rozdania później</h3>${extra.map((m) => material(m, false)).join("")}` : ""}
</div>`;
  }).join("");
  return page(`${method.title}: arkusz nauczyciela`, `
<h1>${esc(method.title)}: arkusz nauczyciela</h1>
<p class="meta">${esc(method.definition)}</p>
<p><strong>Czas roboczy:</strong> ${total} minut (pierwsze około 5 minut lekcji to czynności organizacyjne i nie są wliczone).</p>
<p><strong>Przygotowanie:</strong> ${esc(prepTime[method.file])}</p>
<table><thead><tr><th>Czas</th><th>Etap</th><th>Nauczyciel</th><th>Uczniowie</th></tr></thead><tbody>${rows}</tbody></table>
<div class="warn"><strong>Punkt decyzji.</strong> ${esc(method.decisionPoint)}</div>
<p><strong>Blok 90 minut:</strong> ${esc(block90[method.file])}</p>
${scenarios}
${footer}`);
};

const reviewSheet = (branch, entries) => page(`Arkusz recenzji: ${branchLabels[branch]}`, `
<h1>Arkusz recenzji merytorycznej</h1>
<p class="meta">${esc(branchLabels[branch])} · Innowacyjna lekcja w praktyce</p>
<p>Prosimy o przejrzenie poniższych scenariuszy jako osoba uczącą tego przedmiotu lub pracującą w branży. Przy każdym pytaniu zaznacz „poprawne” albo „do poprawy” i wpisz uwagi. Materiały oznaczone jako przykładowe są fikcyjne, więc oceń tylko, czy są realistyczne jako rząd wielkości.</p>
${entries.map(({ method, scenario, verify }, index) => `
<section class="${index ? "pb" : ""}">
  <h2>${esc(scenario.label)}</h2>
  <p class="meta">Metoda: ${esc(method.title)} · ${esc(method.file)}</p>
  <p><strong>Kontekst:</strong> ${esc(scenario.context)}</p>
  <p><strong>Cel:</strong> ${esc(scenario.goal)}</p>
  ${scenario.materials.map((m) => material(m, false)).join("")}
  <div class="key"><h4>Klucz i uwagi autora</h4><p>${esc(scenario.key)}</p></div>
  <h3>Co sprawdzić</h3>
  ${verify.map((question) => `<div class="check">☐ poprawne &nbsp; ☐ do poprawy &nbsp;— ${esc(question)}<div class="lines" style="height:12mm"></div></div>`).join("")}
  <div class="check">☐ scenariusz jest realistyczny na lekcji 45 minut &nbsp; ☐ wymaga zmian: <div class="lines" style="height:12mm"></div></div>
  <div class="check">☐ terminologia i treści zgodne z podstawą programową tego przedmiotu lub zawodu &nbsp; ☐ wymaga zmian: <div class="lines" style="height:12mm"></div></div>
</section>`).join("")}
<div class="sign"><span>Imię i nazwisko recenzenta</span><span>Szkoła / firma</span><span>Data</span><span>Podpis</span></div>
${footer}`);

const sourceSheet = () => page("Arkusz weryfikacji źródeł", `
<h1>Arkusz weryfikacji źródeł</h1>
<p class="meta">Dla osoby z dostępem do pełnych tekstów (EEF, IES, PubMed, Springer, ScienceDirect i inne). Autorzy katalogu nie mogli sprawdzić tych źródeł w oryginałach.</p>
<p>Dla każdej metody sprawdź, czy ocena siły dowodów i opis źródeł zgadzają się z oryginałem. Jeśli nie, wpisz poprawkę.</p>
${methods.map((method, index) => `
<section class="${index ? "" : ""}" style="break-inside: avoid; margin-top: 5mm;">
  <h2>${esc(method.title)}</h2>
  <p class="small">${esc(method.file)} · oznaczenie: <strong>${esc(method.evidence.label)}</strong></p>
  <p>${esc(method.evidence.note)}</p>
  <table><thead><tr><th>Źródło</th><th>Zweryfikowano w oryginale</th><th>Uwagi, poprawka</th></tr></thead><tbody>
  ${method.sources.map((s) => `<tr><td>${esc(s.title)}<br><span class="small">${esc(s.url)}<br>${esc(s.note)}</span></td><td>☐ tak &nbsp; ☐ nie<br>☐ zgodne z opisem</td><td></td></tr>`).join("")}
  </tbody></table>
  <div class="check">Czy oznaczenie „${esc(method.evidence.label)}” jest uzasadnione? ☐ tak &nbsp; ☐ nie, powinno być: ……………………</div>
</section>`).join("")}
<div class="sign"><span>Imię i nazwisko recenzenta</span><span>Data</span><span>Podpis</span></div>
${footer}`);

const browser = await chromium.launch();
const render = async (html, out) => {
  // DUMP_HTML=katalog zapisuje też źródłowy HTML (do kontroli treści i wycieku klucza).
  if (process.env.DUMP_HTML) await writeFile(resolve(process.env.DUMP_HTML, out.split("/").pop().replace(/\.pdf$/, ".html")), html);
  const p = await browser.newPage();
  await p.setContent(html, { waitUntil: "load" });
  await p.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
  await p.close();
};

await mkdir(resolve(root, "wydruki"), { recursive: true });
await mkdir(resolve(root, "przeglad"), { recursive: true });

for (const method of methods) {
  await render(studentSheet(method), resolve(root, "wydruki", `${slug(method)}-uczen.pdf`));
  await render(teacherSheet(method), resolve(root, "wydruki", `${slug(method)}-nauczyciel.pdf`));
}

const byBranch = new Map();
methods.forEach((method) => {
  (reviewData[method.file] ?? []).forEach((entry, index) => {
    const scenario = method.scenarios[index];
    if (!scenario) throw new Error(`${method.file}: brak scenariusza nr ${index} dla danych recenzji.`);
    if (!branchLabels[entry.branch]) throw new Error(`Nieznana branża recenzji: ${entry.branch}`);
    if (!byBranch.has(entry.branch)) byBranch.set(entry.branch, []);
    byBranch.get(entry.branch).push({ method, scenario, verify: entry.verify });
  });
});
for (const [branch, entries] of byBranch) {
  await render(reviewSheet(branch, entries), resolve(root, "przeglad", `recenzja-${branch}.pdf`));
}
await render(sourceSheet(), resolve(root, "przeglad", "weryfikacja-zrodel.pdf"));
await writeFile(resolve(root, "przeglad", "README.md"), `# Arkusze recenzji

Pliki do rozesłania recenzentom. Nie są linkowane ze strony.

${[...byBranch.keys()].map((b) => `- \`recenzja-${b}.pdf\`: ${branchLabels[b]}`).join("\n")}
- \`weryfikacja-zrodel.pdf\`: dla osoby z dostępem do pełnych tekstów źródeł.

Generuje je \`scripts/build-print.mjs\` z danych w \`scripts/methods/\` i \`scripts/extras.mjs\`.
`);
await browser.close();
console.log(`Zbudowano ${methods.length * 2} PDF-ów do druku, ${byBranch.size} arkuszy recenzji i arkusz źródeł.`);
