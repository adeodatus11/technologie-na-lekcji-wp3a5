import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { categoryLabels, evidenceLabels, groupLabels, legacyRedirects, methods } from "./methods-data.mjs";
import { block90, prepTime } from "./extras.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const findMethod = (name) => methods.find((method) => method.title === name || method.title.startsWith(name));

const validateMethods = () => {
  if (methods.length !== 12) throw new Error(`Oczekiwano 12 metod, otrzymano ${methods.length}.`);
  const files = new Set();
  methods.forEach((method) => {
    if (files.has(method.file)) throw new Error(`Powtórzony adres metody: ${method.file}`);
    files.add(method.file);
    if (!method.sources?.length) throw new Error(`${method.title}: brak źródła.`);
    if (!evidenceLabels[method.evidence?.level]) throw new Error(`${method.title}: nieznany poziom dowodów.`);
    const minutes = method.lesson.reduce((sum, step) => sum + Number(step.min), 0);
    if (minutes < 35 || minutes > 40) console.warn(`Uwaga: ${method.title}: czas roboczy ${minutes} min (zalecane 35-40). Dostosuj plan lekcji.`);
    const kinds = method.scenarios.map((scenario) => scenario.kind);
    if (!kinds.includes("zawodowy") || !kinds.includes("ogolny")) throw new Error(`${method.title}: potrzebny scenariusz zawodowy i ogólnokształcący.`);
    method.scenarios.forEach((scenario) => {
      if (!scenario.materials?.length || !scenario.key) throw new Error(`${method.title}: scenariusz bez materiałów lub klucza.`);
    });
    method.related.forEach((name) => {
      if (!findMethod(name)) throw new Error(`${method.title}: nieznana metoda powiązana "${name}".`);
    });
    Object.keys(legacyRedirects).forEach((old) => {
      if (files.has(old)) throw new Error(`Stary adres ${old} koliduje z nową stroną.`);
    });
  });
  Object.values(legacyRedirects).forEach((target) => {
    if (!methods.some((method) => method.file === target)) throw new Error(`Przekierowanie wskazuje nieistniejącą stronę: ${target}`);
  });
};

validateMethods();

const header = (active = "") => `
<a class="skip-link" href="#main">Przejdź do treści</a>
<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="index.html" aria-label="Innowacyjna lekcja w praktyce, strona główna">
      <img src="assets/innowacyjna-lekcja-logo.png" alt="Innowacyjna lekcja w praktyce">
    </a>
    <nav class="nav-links" id="site-navigation" aria-label="Główna nawigacja">
      <a href="index.html"${active === "start" ? ' class="active" aria-current="page"' : ""}>Start</a>
      <a href="index.html#metody"${active === "methods" ? ' class="active" aria-current="page"' : ""}>Metody</a>
      <a href="index.html#wybor"${active === "choice" ? ' class="active" aria-current="page"' : ""}>Jak wybrać metodę</a>
      <a href="ewaluacja.html"${active === "evaluation" ? ' class="active" aria-current="page"' : ""}>Ewaluacja</a>
      <a href="praktyka-szkolna.html"${active === "practice" ? ' class="active" aria-current="page"' : ""}>Dla nauczyciela</a>
      <a href="inspiracje.html"${active === "engagement" ? ' class="active" aria-current="page"' : ""}>Zaangażowanie</a>
      <a href="about.html"${active === "sources" ? ' class="active" aria-current="page"' : ""}>Źródła</a>
    </nav>
    <button class="menu-toggle" type="button" aria-label="Otwórz menu" aria-expanded="false" aria-controls="site-navigation">
      <span class="menu-icon" aria-hidden="true"></span><span>Menu</span>
    </button>
    <div class="header-project-logos" role="group" aria-label="Partnerzy i finansowanie projektu">
      <a href="https://win4smes.eu" target="_blank" rel="noopener noreferrer" aria-label="WIN4SMEs">
        <img src="assets/Logo-2025.png" alt="WIN4SMEs">
      </a>
      <img src="assets/COVE Polska bez tła.png" alt="COVE Polska">
      <img class="eu-mark" src="assets/PL_Co-fundedbytheEU_RGB_POS.png" alt="Współfinansowane przez Unię Europejską">
    </div>
  </div>
</header>`;

const footer = () => `
<footer class="site-footer">
  <div class="container footer-layout">
    <div>
      <img class="footer-brand" src="assets/innowacyjna-lekcja-logo.png" alt="Innowacyjna lekcja w praktyce">
      <p>Praktyczny katalog metod dla nauczycieli techników i szkół branżowych I stopnia. Technologia jest narzędziem, nie warunkiem wdrożenia.</p>
    </div>
    <nav class="footer-links" aria-label="Nawigacja w stopce">
      <a href="index.html#metody">Katalog metod</a>
      <a href="ewaluacja.html">Ewaluacja</a>
      <a href="praktyka-szkolna.html">Dla nauczyciela</a>
      <a href="projekt.html">O projekcie</a>
      <a href="about.html">Źródła i metodologia</a>
      <a href="https://covepolska.pl/deklaracja-dostepnosci/" target="_blank" rel="noopener noreferrer">Deklaracja dostępności</a>
    </nav>
    <div class="footer-project-logos" role="group" aria-label="Logotypy projektu">
      <img src="assets/Logo-2025.png" alt="WIN4SMEs">
      <img src="assets/COVE Polska bez tła.png" alt="COVE Polska">
      <img class="eu-mark" src="assets/PL_Co-fundedbytheEU_RGB_POS.png" alt="Współfinansowane przez Unię Europejską">
    </div>
  </div>
  <div class="container funding-note">Finansowane ze środków Unii Europejskiej. Wyrażone poglądy nie muszą odzwierciedlać stanowiska Unii Europejskiej.</div>
</footer>
<script src="site.js?v=20260930"></script>`;

const documentShell = ({ title, description, body, active = "" }) => `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <title>${escapeHtml(title)}</title>
  <link rel="icon" href="assets/innowacyjna-lekcja-logo.png">
  <link rel="stylesheet" href="styles.css?v=20260930">
</head>
<body>
${header(active)}
${body}
${footer()}
</body>
</html>
`;


const projectMark = (method, cls = "project-mark") => method.group === "wp3"
  ? `<a class="${cls}" href="https://win4smes.eu" target="_blank" rel="noopener noreferrer" aria-label="Metoda z projektu WIN4SMEs"><img src="assets/Logo-2025.png" alt="WIN4SMEs"></a>`
  : "";

const methodCard = (method) => `
<article class="method-card" data-method-card data-categories="${method.categories.join(" ")}" data-search="${escapeHtml([method.title, method.short, method.tags.join(" "), method.aliases.join(" ")].join(" ").toLocaleLowerCase("pl"))}">
  <div class="method-card-top">
    <span class="source-badge">${escapeHtml(groupLabels[method.group])}</span>
    ${projectMark(method)}
    <span class="card-arrow" aria-hidden="true">→</span>
  </div>
  <h3><a href="${method.file}">${escapeHtml(method.title)}</a></h3>
  <p>${escapeHtml(method.short)}</p>
  <p class="evidence-line"><span class="evidence-chip evidence-${method.evidence.level}">${escapeHtml(method.evidence.label)}</span></p>
  <ul class="tag-list">
    ${method.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
  </ul>
</article>`;

const choicePaths = [
  ["Uczniowie szybko zapominają", "Przypominanie i powroty"],
  ["Nie wiedzą, jak zacząć nową procedurę", "Modelowanie: jawne nauczanie, przykłady i instruktaż"],
  ["Klasa myli to samo i nie wiem tego przed sprawdzianem", "Ocenianie kształtujące i poprawa"],
  ["Uczniowie zaczynają bez planu i odkrywają błąd na końcu", "Metapoznanie"],
  ["Praca grupowa jest pozorna albo jedna osoba robi wszystko", "Współpraca: grupy z rolami i tutoring w parach"],
  ["Klasa milczy, a na papierze ma zdanie", "Nauczanie dialogowe"],
  ["Instrukcja jest trudniejsza niż sama treść", "UDL"],
  ["Część klasy nie ma warunku potrzebnego do zadania", "Mastery learning"],
  ["Wiedza nie łączy się z praktyką zawodową", "Problem, przypadek, projekt"],
  ["Mam pracownię komputerową i chcę z niej skorzystać", "360 e-learning"],
  ["Temat wymaga przygotowania przed lekcją i powrotu po tygodniach", "Blended learning"],
  ["Mam krótki materiał i chcę więcej czasu na problemy", "Flipped classroom"]
];

const indexBody = `
<main id="main">
  <section class="home-hero">
    <div class="container home-hero-inner">
      <p class="context-line">COVE Polska · WIN4SMEs · praktyka nauczycielska</p>
      <h1>Innowacyjna lekcja w praktyce</h1>
      <p class="hero-lead">${methods.length} metod dla nauczycieli techników i szkół branżowych I stopnia. Przedmioty zawodowe i ogólnokształcące. Lekcja 45 minut.</p>
      <div class="hero-actions">
        <a class="button primary" href="#metody">Przeglądaj metody</a>
        <a class="button secondary" href="#wybor">Jak wybrać metodę</a>
      </div>
    </div>
  </section>

  <section class="intro-strip" aria-label="Założenia katalogu">
    <div class="container intro-grid">
      <div><strong>Czas roboczy</strong><span>Plany zakładają 35–40 minut pracy. Pierwsze około 5 minut to czynności organizacyjne, których nie liczymy.</span></div>
      <div><strong>Gotowe materiały</strong><span>Każda metoda ma scenariusz zawodowy i ogólnokształcący z pytaniami, danymi i kluczem.</span></div>
      <div><strong>Uczciwe dowody</strong><span>Przy każdej metodzie piszemy, co wiadomo z badań, a co jest naszą propozycją.</span></div>
    </div>
  </section>

  <section class="section catalog-section" id="metody">
    <div class="container">
      <div class="section-heading">
        <h2>Katalog ${methods.length} metod</h2>
        <p>Metody są od siebie wyraźnie różne. Te, które opisuje literatura pod wieloma nazwami, zostały połączone, a synonimy są na stronach metod i w wyszukiwarce.</p>
      </div>
      <div class="catalog-tools" role="search" aria-label="Wyszukiwanie i filtrowanie metod">
        <label class="search-box">
          <span>Znajdź metodę</span>
          <input id="method-search" type="search" placeholder="Np. retrieval, jigsaw, flipped, instruktaż" autocomplete="off">
        </label>
        <div class="filter-group" role="group" aria-label="Filtruj według zastosowania">
          ${Object.entries(categoryLabels).map(([key, label], index) => `<button type="button" class="filter-button${index === 0 ? " active" : ""}" data-filter="${key}" aria-pressed="${index === 0 ? "true" : "false"}">${escapeHtml(label)}</button>`).join("")}
        </div>
        <p class="catalog-status" aria-live="polite"><span data-result-count>${methods.length}</span> metod</p>
      </div>
      <div class="method-grid" data-method-grid>
${methods.map((method) => methodCard(method).trim()).join("\n")}
      </div>
      <p class="no-results" data-no-results hidden>Brak metod dla podanego wyszukiwania. Usuń filtr lub użyj innego słowa.</p>
    </div>
  </section>

  <section class="section white" id="wybor">
    <div class="container choice-layout">
      <div class="section-heading compact-heading">
        <h2>Zacznij od problemu lekcyjnego</h2>
        <p>Nazwij trudność, wybierz jedną metodę i sprawdź widoczny efekt. Nie wprowadzaj kilku naraz.</p>
      </div>
      <div class="choice-paths">
        ${choicePaths.map(([problem, name]) => { const m = findMethod(name); return `<a href="${m.file}"><strong>${escapeHtml(problem)}</strong><span>${escapeHtml(m.title)}</span></a>`; }).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section evaluation-teaser">
    <div class="container evaluation-layout">
      <div>
        <h2>Sprawdź efekt po czterech tygodniach</h2>
        <p>Ewaluacja nie pyta, czy lekcja się podobała. Obserwuje start pracy, produkt, typowe błędy, poprawę po informacji zwrotnej i powrót wiedzy po czasie.</p>
      </div>
      <a class="button primary" href="ewaluacja.html">Otwórz model ewaluacji</a>
    </div>
  </section>

  <section class="section white">
    <div class="container connected-layout">
      <div class="connected-copy">
        <h2>Dwa powiązane serwisy COVE Polska</h2>
        <p>Ten katalog dotyczy organizacji lekcji. Szersze materiały o zaangażowaniu oraz o użyciu AI są w osobnych serwisach.</p>
      </div>
      <div class="connected-links">
        <a href="https://zaangazowanie.covepolska.pl" target="_blank" rel="noopener noreferrer"><strong>Zaangażowanie uczniów</strong><span>Praca z niską motywacją, wycofaniem i trudnością utrzymania uwagi.</span></a>
        <a href="https://ai.covepolska.pl" target="_blank" rel="noopener noreferrer"><strong>AI dla nauczyciela</strong><span>Przygotowanie materiałów, weryfikacja i bezpieczne praktyki.</span></a>
      </div>
    </div>
  </section>
</main>`;

const methodTocLinks = [
  ["istota", "Na czym polega"],
  ["rozroznienie", "Czym się różni"],
  ["dowody", "Co wiadomo z badań"],
  ["kiedy", "Kiedy tak, kiedy nie"],
  ["lekcja", "Przebieg lekcji"],
  ["scenariusze", "Scenariusze z materiałami"],
  ["technologia", "Technologia"],
  ["bledy", "Typowe potknięcia"],
  ["sprawdzenie", "Jak sprawdzić efekt"],
  ["zrodla", "Źródła"]
];

const methodToc = `
<nav class="method-toc" aria-label="Na tej stronie">
  <strong>Na tej stronie</strong>
  ${methodTocLinks.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("")}
</nav>`;

const mobileToc = `
<details class="mobile-toc">
  <summary>Na tej stronie</summary>
  <div>${methodTocLinks.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("")}</div>
</details>`;

const list = (items, cls = "") => `<ul${cls ? ` class="${cls}"` : ""}>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

const renderMaterial = (material) => {
  let content = "";
  if (material.text) content = `<p>${escapeHtml(material.text)}</p>`;
  if (material.list) content = list(material.list);
  if (material.table) {
    content = `<div class="table-wrap"><table><thead><tr>${material.table.head.map((cell) => `<th scope="col">${escapeHtml(cell)}</th>`).join("")}</tr></thead><tbody>${material.table.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  return `<div class="material-card"><h4>${escapeHtml(material.t)}</h4>${content}</div>`;
};

const renderScenario = (scenario) => `
<article class="scenario">
  <p class="scenario-kind">${scenario.kind === "zawodowy" ? "Przedmiot zawodowy" : "Przedmiot ogólnokształcący"}</p>
  <h3>${escapeHtml(scenario.label)}</h3>
  <div class="scenario-lead"><p><strong>Kontekst.</strong> ${escapeHtml(scenario.context)}</p><p><strong>Cel.</strong> ${escapeHtml(scenario.goal)}</p></div>
  <div class="materials">${scenario.materials.map(renderMaterial).join("")}</div>
  <div class="teacher-key"><h4>Klucz i uwagi dla nauczyciela</h4><p>${escapeHtml(scenario.key)}</p></div>
  <div class="scenario-response-grid"><div><h4>Typowe błędy uczniów</h4>${list(scenario.errors)}</div>${scenario.schedule ? `<div><h4>Karta powrotów</h4><p>${escapeHtml(scenario.schedule)}</p></div>` : ""}${scenario.ladder ? `<div><h4>Większa skala</h4><p>${escapeHtml(scenario.ladder)}</p></div>` : ""}</div>
</article>`;

const methodBody = (method) => {
  const total = method.lesson.reduce((sum, step) => sum + step.min, 0);
  let start = 0;
  const steps = method.lesson.map((step) => {
    const from = start;
    start += step.min;
    return `<section class="lesson-step"><div class="lesson-step-heading"><span>${from}–${start} min</span><h3>${escapeHtml(step.title)}</h3></div><dl><div><dt>Nauczyciel</dt><dd>${escapeHtml(step.teacher)}</dd></div><div><dt>Uczniowie</dt><dd>${escapeHtml(step.students)}</dd></div></dl></section>`;
  }).join("");
  return `
<main id="main">
  <section class="method-hero">
    <div class="container method-hero-inner">
      <a class="back-link" href="index.html#metody">← Wszystkie metody</a>
      <span class="source-badge hero-badge">${escapeHtml(groupLabels[method.group])}</span>${projectMark(method, "project-mark hero-mark")}
      <h1>${escapeHtml(method.title)}</h1>
      <p class="method-definition">${escapeHtml(method.definition)}</p>
      <p class="aliases"><strong>Nazywane też:</strong> ${method.aliases.map(escapeHtml).join(", ")}</p>
    </div>
  </section>
${mobileToc.trim()}
  <div class="container method-layout">
    <aside>${methodToc}</aside>
    <article class="method-content">
      <section id="istota" class="content-section">
        <h2>Na czym polega</h2>
        ${method.how.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </section>

      <section id="rozroznienie" class="content-section">
        <h2>Czym różni się od sąsiednich metod</h2>
        <div class="differs">${method.differs.map((item) => `<div><strong>${escapeHtml(item.with)}</strong><p>${escapeHtml(item.text)}</p></div>`).join("")}</div>
      </section>

      <section id="dowody" class="content-section">
        <h2>Co wiadomo z badań</h2>
        <p><span class="evidence-chip evidence-${method.evidence.level}">${escapeHtml(method.evidence.label)}</span></p>
        <p>${escapeHtml(method.evidence.note)}</p>
        <p class="proposal-note">Oznaczenie siły dowodów jest oceną redakcji katalogu na podstawie cytowanych źródeł, a nie oficjalną klasyfikacją.</p>
      </section>

      <section id="kiedy" class="content-section">
        <h2>Kiedy ma sens, a kiedy nie</h2>
        <div class="when-grid">
          <div><h3>Ma sens, gdy</h3>${list(method.when.good)}</div>
          <div><h3>Lepiej poczekać, gdy</h3>${list(method.when.notFor)}</div>
        </div>
      </section>

      <section id="lekcja" class="content-section">
        <h2>Przebieg lekcji 45-minutowej</h2>
        <p class="time-note">Czas roboczy: ${total} minut. Pierwsze około 5 minut lekcji (obecność, sprawy organizacyjne) nie jest wliczone w poniższy plan. Podane minuty liczone są od rozpoczęcia pracy nad tematem.${total < 40 ? ` Do 40 minut zostaje ${40 - total} min zapasu na przejścia i nieprzewidziane sytuacje.` : ""}</p>
        <p class="prep-note"><strong>Przygotowanie:</strong> ${escapeHtml(prepTime[method.file])}</p>
        <div class="detailed-lesson-flow">${steps}</div>
        <div class="decision-point"><strong>Punkt decyzji</strong><p>${escapeHtml(method.decisionPoint)}</p></div>
        <div class="variant-b"><h3>Wariant na blok 90 minut</h3><p>${escapeHtml(block90[method.file])}</p></div>
        ${method.variantB ? `<div class="variant-b"><h3>${escapeHtml(method.variantB.title)}</h3><ol>${method.variantB.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol></div>` : ""}
      </section>

      <section id="scenariusze" class="content-section">
        <h2>Scenariusze z gotowymi materiałami</h2>
        <p>Materiały można przepisać na kartę lub wydrukować. Dane oznaczone jako przykładowe są fikcyjne. Wartości i procedury zawodowe skonsultuj z nauczycielem przedmiotu przed użyciem w klasie.</p>
        <div class="print-links"><strong>Do druku:</strong>
          <a href="wydruki/${method.file.replace(/\.html$/, "")}-uczen.pdf" target="_blank" rel="noopener noreferrer">Karty dla uczniów (PDF)</a>
          <a href="wydruki/${method.file.replace(/\.html$/, "")}-nauczyciel.pdf" target="_blank" rel="noopener noreferrer">Arkusz nauczyciela z kluczem (PDF)</a>
        </div>
        ${method.scenarios.map(renderScenario).join("")}
      </section>

      <section id="technologia" class="content-section">
        <h2>Technologia: co daje, a bez czego się obejdziesz</h2>
        <div class="tool-variants">
          <div><h3>Bez technologii</h3><p>${escapeHtml(method.tech.none)}</p></div>
          <div><h3>Komputer lub ZPE</h3><p>${escapeHtml(method.tech.computer)}</p><a href="https://zpe.gov.pl/o-zpe" target="_blank" rel="noopener noreferrer">Poznaj ZPE</a></div>
          <div><h3>Telefon ucznia</h3><p>${escapeHtml(method.tech.phone)}</p></div>
          <div><h3>AI po stronie nauczyciela</h3><p>${escapeHtml(method.tech.ai)}</p><a href="https://ai.covepolska.pl" target="_blank" rel="noopener noreferrer">Materiały o AI</a></div>
        </div>
      </section>

      <section id="bledy" class="content-section">
        <h2>Typowe potknięcia</h2>
        <div class="mistake-fixes">${method.pitfalls.map((item) => `<div><h3>${escapeHtml(item.mistake)}</h3><p><strong>Zamiast tego:</strong> ${escapeHtml(item.instead)}</p></div>`).join("")}</div>
      </section>

      <section id="sprawdzenie" class="content-section">
        <h2>Jak sprawdzić efekt</h2>
        <div class="evaluation-questions">
          <div><strong>Co zmierzyć</strong><p>${escapeHtml(method.check.how)}</p></div>
          <div><strong>Decyzja</strong><p>${escapeHtml(method.check.decision)}</p></div>
        </div>
        <a class="text-link" href="ewaluacja.html">Zobacz czterotygodniowy model ewaluacji →</a>
      </section>

      <section id="zrodla" class="content-section">
        <h2>Źródła</h2>
        <div class="source-cards">
          ${method.sources.map((source) => `<a href="${source.url}"${source.url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}><span>${escapeHtml(source.type)}</span><strong>${escapeHtml(source.title)}</strong><p>${escapeHtml(source.note)}</p></a>`).join("")}
        </div>
        <h3>Warto połączyć z</h3>
        <div class="related-links">
          ${method.related.map((name) => { const related = findMethod(name); return `<a href="${related.file}">${escapeHtml(related.title)}</a>`; }).join("")}
        </div>
      </section>
    </article>
  </div>
</main>`;
};

const evaluationBody = `
<main id="main">
  <section class="page-hero">
    <div class="container narrow">
      <p class="context-line">Ewaluacja bez nadmiernej dokumentacji</p>
      <h1>Czy metoda rzeczywiście pomaga uczniom?</h1>
      <p>Prosty model czterotygodniowy mierzy zachowanie i pracę ucznia, nie deklarację, że lekcja była atrakcyjna.</p>
    </div>
  </section>
  <section class="section white">
    <div class="container narrow prose">
      <h2>Pięć obserwacji, które mają znaczenie</h2>
      <div class="evidence-grid">
        <div><strong>Start pracy</strong><p>Ilu uczniów rozpoczyna zadanie w pierwszych trzech minutach bez dodatkowego ponaglania?</p></div>
        <div><strong>Produkt</strong><p>Czy powstaje odpowiedź, plan, decyzja, wykonanie albo poprawiona wersja?</p></div>
        <div><strong>Błędy</strong><p>Które dwa lub trzy błędy powtarzają się w klasie?</p></div>
        <div><strong>Poprawa</strong><p>Czy uczeń wykorzystuje informację zwrotną w kolejnej próbie?</p></div>
        <div><strong>Trwałość</strong><p>Czy kluczowa wiedza wraca po kilku dniach, a nie tylko bezpośrednio po lekcji?</p></div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container narrow prose">
      <h2>Model na cztery tygodnie</h2>
      <div class="week-flow">
        <article><span>Tydzień 0</span><h3>Punkt odniesienia</h3><p>Wybierz jedną klasę, jeden typ lekcji i jeden problem. Zapisz start pracy, przykład typowego produktu oraz dwa najczęstsze błędy.</p></article>
        <article><span>Tydzień 1</span><h3>Pierwsze wdrożenie</h3><p>Wprowadź jedną metodę. Nie zmieniaj jednocześnie sposobu oceniania, narzędzia i całej organizacji działu.</p></article>
        <article><span>Tydzień 2–3</span><h3>Powtarzalna praktyka</h3><p>Powtórz tę samą logikę na podobnych lekcjach. Po każdej zanotuj jeden fakt o pracy uczniów i jedną korektę organizacji.</p></article>
        <article><span>Tydzień 4</span><h3>Porównanie i decyzja</h3><p>Porównaj start, produkt, poprawę i wiedzę po czasie. Zdecyduj: zostawić, uprościć, zmienić warunek albo zrezygnować.</p></article>
      </div>
      <div class="method-note"><strong>Ważne:</strong> takie porównanie jest ewaluacją nauczycielską, nie eksperymentem naukowym. Pomaga podejmować decyzje w konkretnej klasie, ale nie dowodzi uniwersalnej skuteczności metody.</div>
    </div>
  </section>
  <section class="section white">
    <div class="container narrow prose">
      <h2>Minimalny zapis po lekcji</h2>
      <p>Jedna notatka może mieć cztery zdania: jaki był cel, ilu uczniów zaczęło, co powstało i jaki błąd wrócił. Dokumentuj prace uczniów tylko w zakresie potrzebnym do dydaktyki i zgodnie z zasadami szkoły dotyczącymi danych oraz wizerunku.</p>
      <p>WP3.A5 przewiduje ewaluację testowanych metod cyfrowych według szablonu powiązanego z tym pakietem prac. Ten model jest lekkim odpowiednikiem dla pojedynczego nauczyciela.</p>
      <a class="button primary" href="index.html#metody">Wybierz metodę do pilotażu</a>
    </div>
  </section>
</main>`;

const engagementBody = `
<main id="main">
  <section class="page-hero">
    <div class="container narrow">
      <p class="context-line">Zaangażowanie i koncentracja</p>
      <h1>Pomóc uczniowi wejść w zadanie</h1>
      <p>Zaangażowanie nie oznacza nieustannej atrakcyjności. Na lekcji widać je w rozpoczęciu pracy, utrzymaniu kierunku i ukończeniu małego produktu.</p>
    </div>
  </section>
  <section class="section white">
    <div class="container narrow prose">
      <div class="method-note"><strong>Granica interpretacji:</strong> niska koncentracja jest tutaj obserwacją zachowania podczas lekcji, nie rozpoznaniem medycznym ani psychologicznym.</div>
      <h2>Sześć sposobów zmniejszenia bariery wejścia</h2>
      <div class="engagement-practices">
        <article><h3>Nazwij pierwszy ruch</h3><p>Zamiast „zacznij pracować” powiedz: „podkreśl dwie dane i zapisz pierwszą decyzję”.</p><a href="metoda-modelowanie.html">Modelowanie</a></article>
        <article><h3>Podziel czas na krótkie odcinki</h3><p>Po krótkim wyjaśnieniu następuje działanie, sprawdzenie i kolejny krok.</p><a href="metoda-mastery-learning.html">Mastery learning</a></article>
        <article><h3>Pokaż widoczny produkt</h3><p>Jedno zdanie, decyzja, schemat lub poprawiony punkt daje uczniowi jasny koniec etapu.</p><a href="metoda-ocenianie-ksztaltujace.html">Ocenianie kształtujące i poprawa</a></article>
        <article><h3>Daj czas przed wypowiedzią</h3><p>Najpierw indywidualny zapis, potem para, dopiero później forum klasy.</p><a href="metoda-nauczanie-dialogowe.html">Nauczanie dialogowe</a></article>
        <article><h3>Ogranicz wybór</h3><p>Dwie sensowne drogi są bardziej dostępne niż otwarte polecenie bez kryteriów.</p><a href="metoda-udl.html">UDL</a></article>
        <article><h3>Wracaj do zadania neutralnie</h3><p>Wskaż krok i działanie, nie oceniaj cechy ucznia. Komunikat ma umożliwić powrót bez zawstydzania.</p><a href="metoda-metapoznanie.html">Metapoznanie</a></article>
      </div>
    </div>
  </section>
  <section class="section external-service">
    <div class="container narrow external-service-inner">
      <div><h2>Szersze opracowanie o zaangażowaniu</h2><p>Oddzielny serwis COVE Polska rozwija pracę z niską motywacją, biernością i wycofaniem uczniów.</p></div>
      <a class="button primary" href="https://zaangazowanie.covepolska.pl" target="_blank" rel="noopener noreferrer">Przejdź do zaangazowanie.covepolska.pl</a>
    </div>
  </section>
</main>`;

const uniqueSources = [...new Map(methods.flatMap((method) => method.sources).map((source) => [source.url, source])).values()];

const aliasTable = `<div class="table-wrap"><table><thead><tr><th scope="col">Metoda w katalogu</th><th scope="col">Spotkasz ją też pod nazwą</th></tr></thead><tbody>${methods.map((method) => `<tr><td><a href="${method.file}">${escapeHtml(method.title)}</a></td><td>${method.aliases.map(escapeHtml).join(", ")}</td></tr>`).join("")}</tbody></table></div>`;

const aboutBody = `
<main id="main">
  <section class="page-hero">
    <div class="container narrow">
      <p class="context-line">Źródła i metodologia</p>
      <h1>Jak powstał katalog</h1>
      <p>Opis oddziela materiał projektowy, badania, ramy dydaktyczne i autorskie propozycje organizacyjne.</p>
    </div>
  </section>
  <section class="section white">
    <div class="container narrow prose">
      <h2>Cztery poziomy informacji</h2>
      <div class="methodology-grid">
        <div><strong>Źródło</strong><p>Publikacja, przegląd, ewaluacja, wytyczne instytucjonalne albo materiał projektu WP3.A5.</p></div>
        <div><strong>Interpretacja</strong><p>Wyjaśnienie, jak wniosek można odczytać w technikum i szkole branżowej I stopnia.</p></div>
        <div><strong>Scenariusz</strong><p>Autorska propozycja lekcji z materiałami. Wymaga dopasowania do przedmiotu i konsultacji merytorycznej.</p></div>
        <div><strong>Rekomendacja</strong><p>Ostrożny sposób wdrożenia i sprawdzenia efektu w konkretnej klasie.</p></div>
      </div>
      <h2>Oznaczenia siły dowodów</h2>
      <p>Przy każdej metodzie jest krótka ocena: mocne, umiarkowane, ograniczone dowody, rama projektowa albo inspiracja projektowa. To ocena redakcji katalogu na podstawie cytowanych źródeł, a nie oficjalna klasyfikacja. Metaanaliza, niezależna ewaluacja konkretnego programu i rama projektowa odpowiadają na różne pytania. Wynik z jednego kontekstu nie jest gwarancją wyniku w innej klasie. Większość cytowanych badań nie dotyczy polskich szkół zawodowych.</p>
      <h2>Dlaczego 12 metod</h2>
      <p>Część praktyk ma w literaturze kilka nazw albo jest jej dwiema stronami jednej techniki. Połączyliśmy je, żeby każda metoda w katalogu miała inny mechanizm i inne zastosowanie. Poniższa tabela pokazuje synonimy.</p>
      ${aliasTable}
    </div>
  </section>
  <section class="section">
    <div class="container source-register">
      <div class="section-heading"><h2>Rejestr źródeł</h2><p>Przy każdej metodzie znajduje się lista źródeł odnoszących się bezpośrednio do jej opisu.</p></div>
      <div class="source-register-list">
        ${uniqueSources.map((source) => `<a href="${source.url}"${source.url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}><span>${escapeHtml(source.type)}</span><strong>${escapeHtml(source.title)}</strong><p>${escapeHtml(source.note)}</p></a>`).join("")}
      </div>
    </div>
  </section>
  <section class="section white">
    <div class="container narrow prose">
      <h2>Materiały instytucjonalne</h2>
      <p><a class="text-link" href="https://zpe.gov.pl/o-zpe" target="_blank" rel="noopener noreferrer">Zintegrowana Platforma Edukacyjna</a> jest wskazywana jako publiczne środowisko materiałów i aktywności, nie jako obowiązkowy element żadnej metody.</p>
      <p><a class="text-link" href="https://covepolska.pl/deklaracja-dostepnosci/" target="_blank" rel="noopener noreferrer">Deklaracja dostępności COVE Polska</a> opisuje dostępność serwisów organizatora.</p>
    </div>
  </section>
</main>`;

const projectBody = `
<main id="main">
  <section class="page-hero">
    <div class="container narrow">
      <p class="context-line">COVE Polska · WIN4SMEs</p>
      <h1>O projekcie i materiale WP3.A5</h1>
      <p>Katalog łączy materiał projektowy o uczeniu z technologiami z niezależnymi źródłami dotyczącymi praktyki lekcyjnej.</p>
    </div>
  </section>
  <section class="section white" id="wp3a5">
    <div class="container narrow prose">
      <h2>Materiał źródłowy WP3.A5</h2>
      <p>Dokument „Implementation methods and models for learning with digital technologies” (wersja robocza, Kolding, październik 2025) przygotował IBC w Danii w ramach działania WP3.A5 projektu WIN4SMEs. Jest adresowany do szkoleń dorosłych w małych i średnich firmach. Opisuje trzy modele:</p>
      <ul class="plain-list">
        <li><strong>360 E-learning Center w IBC:</strong> środowisko, w którym uczestnicy pracują w pełne dni (7,4 godziny) z samodzielnymi materiałami cyfrowymi. Opiera się na czterech zasadach: uczenie całościowe, interaktywność i informacja zwrotna, praktyczna przydatność oraz kompetencje cyfrowe. Dokument wspomina też SIMU Center, czyli firmy symulacyjne (practice enterprises).</li>
        <li><strong>Blended learning:</strong> połączenie pracy synchronicznej i asynchronicznej. Szablon: cyfrowe przygotowanie (około tydzień przed), warsztat (1 dzień), follow-up (2–3 tygodnie po), ewaluacja.</li>
        <li><strong>Flipped classroom:</strong> materiał przed zajęciami, a czas wspólny na dyskusję, problemy i ćwiczenia.</li>
      </ul>
      <p>Materiał pochodzi z kontekstu firmowego i dorosłych uczestników. Na tej stronie został przełożony na lekcję 45 minut w technikum i szkole branżowej. W przekładzie zachowano mechanizm z dokumentu (np. fazy blended, materiał przed lekcją we flipped), a skalę czasu skrócono do klas szkolnych.</p>
      <div class="method-note"><strong>Zakres:</strong> dokument WP3.A5 jest opisem modeli, a nie badaniem ich skuteczności. Dlatego przy tych trzech metodach piszemy „inspiracja projektowa”.</div>
    </div>
  </section>
  <section class="section">
    <div class="container narrow prose">
      <h2>Dla kogo jest katalog</h2>
      <p>Dla nauczycieli techników i branżowych szkół I stopnia, którzy uczą przedmiotów zawodowych i ogólnokształcących. Każda metoda ma po jednym scenariuszu z obu obszarów i gotowe materiały do wykorzystania.</p>
      <a class="button primary" href="index.html#metody">Przejdź do katalogu</a>
    </div>
  </section>
</main>`;


const practiceBody = `
<main id="main">
  <section class="page-hero">
    <div class="container narrow">
      <p class="context-line">Dla nauczyciela</p>
      <h1>Ocenianie, telefony i dane uczniów</h1>
      <p>Co sprawdzić w swojej szkole, zanim wprowadzisz metodę na lekcji.</p>
    </div>
  </section>
  <section class="section white">
    <div class="container narrow prose">
      <div class="method-note"><strong>To nie jest porada prawna.</strong> Decydują statut i wewnątrzszkolny system oceniania (WZO) Twojej szkoły oraz aktualne przepisy. W razie wątpliwości zapytaj dyrekcję lub inspektora ochrony danych w szkole.</div>

      <h2>Ocenianie</h2>
      <p>Wiele metod w katalogu zaleca, żeby pierwsza próba ucznia nie była oceniana stopniem. To nie znaczy, że nie ma oceniania. Sprawdź w WZO:</p>
      <ul class="plain-list single">
        <li>czy informację zwrotną (komentarz, kod kryterium) można zapisać bez stopnia i gdzie;</li>
        <li>ile ocen bieżących i jakiego rodzaju trzeba mieć w semestrze;</li>
        <li>czy uczeń może poprawić pracę i czy ocena po poprawie zastępuje poprzednią;</li>
        <li>jak ocenia się pracę grupową (w katalogu zawsze jest też indywidualna odpowiedź końcowa, którą można ocenić osobno).</li>
      </ul>
      <p>Trzy sposoby, które pasują do większości systemów oceniania. To propozycje do sprawdzenia w WZO, a nie zalecenia urzędowe.</p>
      <div class="table-wrap"><table>
        <thead><tr><th scope="col">Sposób</th><th scope="col">Co robisz</th><th scope="col">Kiedy pasuje</th></tr></thead>
        <tbody>
          <tr><td>A. Stopień za wersję poprawioną</td><td>Pierwsza wersja bez stopnia, stopień za drugą według jawnych kryteriów.</td><td>WZO dopuszcza poprawę i ocenę po poprawie.</td></tr>
          <tr><td>B. Stopień za jedno kryterium</td><td>Oceniasz tylko kryterium, nad którym uczeń pracował (np. K2).</td><td>WZO dopuszcza oceny cząstkowe.</td></tr>
          <tr><td>C. Informacja bez stopnia</td><td>Komentarz lub kod kryterium w zeszycie, stopień za późniejszą samodzielną pracę.</td><td>WZO dopuszcza ocenianie kształtujące bez stopnia.</td></tr>
        </tbody>
      </table></div>

      <h2>Telefony uczniów</h2>
      <p>Każda metoda ma wariant bez telefonu i nie wymaga telefonu ucznia. Jeśli chcesz go użyć:</p>
      <ul class="plain-list single">
        <li>sprawdź statut i obowiązujące przepisy o telefonach w szkole (zasady w ostatnich latach się zmieniały, więc sprawdź aktualne brzmienie) i uzgodnij to z dyrekcją;</li>
        <li>nie zakładaj, że każdy uczeń ma telefon i pakiet danych: zapewnij komputer szkolny, wydruk albo pracę w parze;</li>
        <li>nie wymagaj zakładania kont w zewnętrznych narzędziach;</li>
        <li>zapisz na tablicy, kiedy telefon jest potrzebny i kiedy wraca do plecaka.</li>
      </ul>

      <h2>Dane uczniów i narzędzia, w tym AI</h2>
      <ul class="plain-list single">
        <li>nie wpisuj do zewnętrznych narzędzi (w tym AI) imion, nazwisk, ocen ani prac uczniów z danymi osobowymi;</li>
        <li>przypadki z prawdziwych firm anonimizuj: bez nazw klientów, pracowników i wyników przedsiębiorstwa;</li>
        <li>do zbierania odpowiedzi używaj narzędzi zatwierdzonych przez szkołę;</li>
        <li>zdjęcia prac rób bez twarzy i nazwisk, a prace przechowuj tylko tak długo, jak potrzebne do informacji zwrotnej;</li>
        <li>w razie wątpliwości zapytaj inspektora ochrony danych (IOD) w swojej szkole.</li>
      </ul>
      <p><a class="text-link" href="https://ai.covepolska.pl" target="_blank" rel="noopener noreferrer">Więcej o bezpiecznym użyciu AI przez nauczyciela →</a></p>

      <h2>BHP i zajęcia praktyczne</h2>
      <p>Scenariusze w katalogu to analiza na papierze. Nie zastępują instruktażu BHP ani nadzoru nad czynnościami wymagającymi uprawnień. Nie stosuj metod opartych na pracy uczniów w parach (tutoring) do czynności, w których błąd może zrobić krzywdę uczniowi lub innym osobom. Decyzje o bezpieczeństwie w pracowni należą do nauczyciela zawodu.</p>
    </div>
  </section>
  <section class="section">
    <div class="container narrow prose">
      <h2>Blok 90 minut i zajęcia w podgrupach</h2>
      <p>Każda strona metody ma wariant na blok 90 minut. W pracowni, gdzie klasa dzieli się na podgrupy, skróć strukturę: mniej grup, mniej przesiadania się i rotacja ról.</p>
      <div class="table-wrap"><table>
        <thead><tr><th scope="col">Metoda</th><th scope="col">Wariant na blok 90 minut</th><th scope="col">Ile trwa przygotowanie</th></tr></thead>
        <tbody>${methods.map((method) => `<tr><td><a href="${method.file}#lekcja">${escapeHtml(method.title)}</a></td><td>${escapeHtml(block90[method.file])}</td><td>${escapeHtml(prepTime[method.file])}</td></tr>`).join("")}</tbody>
      </table></div>
    </div>
  </section>
</main>`;

const redirectPage = (target) => `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="0; url=${target}">
  <link rel="canonical" href="${target}">
  <meta name="robots" content="noindex">
  <title>Strona została przeniesiona</title>
</head>
<body>
  <p>Ta metoda została połączona z inną. <a href="${target}">Przejdź do nowej strony</a>.</p>
</body>
</html>
`;

await Promise.all([
  writeFile(resolve(root, "index.html"), documentShell({ title: "Innowacyjna lekcja w praktyce", description: `${methods.length} metod dla nauczycieli techników i szkół branżowych I stopnia: przedmioty zawodowe i ogólnokształcące, lekcja 45 minut.`, body: indexBody, active: "start" })),
  writeFile(resolve(root, "ewaluacja.html"), documentShell({ title: "Ewaluacja metod | Innowacyjna lekcja w praktyce", description: "Czterotygodniowy model sprawdzania, czy metoda lekcyjna pomaga uczniom rozpocząć pracę, poprawiać błędy i utrwalać wiedzę.", body: evaluationBody, active: "evaluation" })),
  writeFile(resolve(root, "inspiracje.html"), documentShell({ title: "Zaangażowanie i koncentracja | Innowacyjna lekcja w praktyce", description: "Praktyczne sposoby ułatwiające uczniom rozpoczęcie zadania, utrzymanie kierunku pracy i ukończenie produktu.", body: engagementBody, active: "engagement" })),
  writeFile(resolve(root, "praktyka-szkolna.html"), documentShell({ title: "Dla nauczyciela: ocenianie, telefony, dane | Innowacyjna lekcja w praktyce", description: "Co sprawdzić w swojej szkole przed wprowadzeniem metody: WZO, telefony, dane uczniów, BHP, blok 90 minut.", body: practiceBody, active: "practice" })),
  writeFile(resolve(root, "about.html"), documentShell({ title: "Źródła i metodologia | Innowacyjna lekcja w praktyce", description: "Źródła naukowe, instytucjonalne i projektowe wykorzystane w katalogu oraz synonimy nazw metod.", body: aboutBody, active: "sources" })),
  writeFile(resolve(root, "projekt.html"), documentShell({ title: "O projekcie | Innowacyjna lekcja w praktyce", description: "Informacje o materiale WP3.A5 i sposobie jego adaptacji do lekcji w technikum i szkole branżowej.", body: projectBody })),
  ...methods.map((method) => writeFile(resolve(root, method.file), documentShell({ title: `${method.title} | Innowacyjna lekcja w praktyce`, description: method.short, body: methodBody(method), active: "methods" }))),
  ...Object.entries(legacyRedirects).map(([old, target]) => writeFile(resolve(root, old), redirectPage(target)))
]);

console.log(`Wygenerowano ${methods.length} podstron metod, 6 stron serwisu i ${Object.keys(legacyRedirects).length} przekierowań.`);
