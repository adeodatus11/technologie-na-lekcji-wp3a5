import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { categoryLabels, methods } from "./methods-data.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const methodByTitle = new Map(methods.map((method) => [method.title, method]));

const requiredAdaptationFields = [
  "boundaries",
  "classroom",
  "preparation",
  "lesson",
  "teacherPrompt",
  "vocational",
  "general",
  "engagement",
  "assessment",
  "mistakeFixes"
];

const countWords = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&[a-z0-9#]+;/gi, " ")
  .trim()
  .split(/\s+/)
  .filter(Boolean)
  .length;

const validateMethods = () => {
  if (methods.length !== 16) {
    throw new Error(`Oczekiwano dokładnie 16 metod, otrzymano ${methods.length}.`);
  }

  const files = new Set();
  methods.forEach((method) => {
    if (files.has(method.file)) throw new Error(`Powtórzony adres metody: ${method.file}`);
    files.add(method.file);
    if (!method.sources?.length) throw new Error(`${method.title}: brak źródła.`);
    if (!method.adaptation) throw new Error(`${method.title}: brak adaptacji szkolnej.`);

    requiredAdaptationFields.forEach((field) => {
      if (!method.adaptation[field] || !Object.keys(method.adaptation[field]).length) {
        throw new Error(`${method.title}: brak pola adaptation.${field}.`);
      }
    });

    if (!method.adaptation.preparation.fallback) throw new Error(`${method.title}: brak wariantu awaryjnego.`);
    if (!method.adaptation.tech && !method.tech?.none) throw new Error(`${method.title}: brak wariantu bez technologii.`);
    if (method.adaptation.assessment.criteria?.length < 2) throw new Error(`${method.title}: brak kryteriów produktu.`);
    if (!method.adaptation.vocational.instruction || !method.adaptation.general.product) {
      throw new Error(`${method.title}: scenariusz zawodowy lub przykład ogólny jest niekompletny.`);
    }

    const minutes = method.adaptation.lesson.reduce((sum, step) => sum + Number(step.minutes), 0);
    if (minutes !== 45) throw new Error(`${method.title}: harmonogram ma ${minutes} minut zamiast 45.`);
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
      <p>Praktyczny katalog metod dla nauczycieli zwykłej szkoły stacjonarnej. Technologia jest narzędziem, nie warunkiem wdrożenia.</p>
    </div>
    <nav class="footer-links" aria-label="Nawigacja w stopce">
      <a href="index.html#metody">Katalog metod</a>
      <a href="ewaluacja.html">Ewaluacja</a>
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
<script src="site.js?v=20260817"></script>`;

const documentShell = ({ title, description, body, active = "" }) => `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <title>${escapeHtml(title)}</title>
  <link rel="icon" href="assets/innowacyjna-lekcja-logo.png">
  <link rel="stylesheet" href="styles.css?v=20260817">
</head>
<body>
${header(active)}
${body}
${footer()}
</body>
</html>
`;

const methodCard = (method) => `
<article class="method-card" data-method-card data-categories="${method.categories.join(" ")}" data-search="${escapeHtml([method.title, method.short, method.tags.join(" ")].join(" ").toLocaleLowerCase("pl"))}">
  <div class="method-card-top">
    <span class="source-badge">${escapeHtml(method.sourceBadge)}</span>
    <span class="card-arrow" aria-hidden="true">→</span>
  </div>
  <h3><a href="${method.file}">${escapeHtml(method.title)}</a></h3>
  <p>${escapeHtml(method.short)}</p>
  <ul class="tag-list">
    ${method.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
  </ul>
</article>`;

const indexBody = `
<main id="main">
  <section class="home-hero">
    <div class="container home-hero-inner">
      <p class="context-line">COVE Polska · WIN4SMEs · praktyka nauczycielska</p>
      <h1>Innowacyjna lekcja w praktyce</h1>
      <p class="hero-lead">16 metod organizowania lekcji, angażowania uczniów, utrwalania wiedzy i wykorzystywania technologii w zwykłej szkole stacjonarnej.</p>
      <div class="hero-actions">
        <a class="button primary" href="#metody">Przeglądaj metody</a>
        <a class="button secondary" href="#wybor">Jak wybrać metodę</a>
      </div>
    </div>
  </section>

  <section class="intro-strip" aria-label="Założenia katalogu">
    <div class="container intro-grid">
      <div><strong>Innowacja metodyczna</strong><span>to zmiana sposobu organizacji uczenia się, nie obowiązek użycia nowego sprzętu.</span></div>
      <div><strong>Technologia</strong><span>ma wspierać jasno określony cel, feedback albo dostęp do materiału.</span></div>
      <div><strong>Źródła</strong><span>są opisane na każdej karcie bez rankingów i obietnic gwarantowanego efektu.</span></div>
    </div>
  </section>

  <section class="section catalog-section" id="metody">
    <div class="container">
      <div class="section-heading">
        <h2>Katalog 16 metod</h2>
        <p>Wszystkie metody mają tę samą rangę. Każdy przewodnik zawiera pełny przykład zawodowy, szczegółowy przebieg 45-minutowej lekcji, gotowe komunikaty nauczyciela i równoważny wariant bez technologii.</p>
      </div>
      <div class="catalog-tools" role="search" aria-label="Wyszukiwanie i filtrowanie metod">
        <label class="search-box">
          <span>Znajdź metodę</span>
          <input id="method-search" type="search" placeholder="Np. feedback, pamięć, ZPE" autocomplete="off">
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
        <p>Nie wybieraj metody dlatego, że wygląda nowocześnie. Nazwij trudność, wybierz jeden mechanizm i sprawdź widoczny efekt.</p>
      </div>
      <div class="choice-paths">
        <a href="metoda-retrieval-practice.html"><strong>Uczniowie szybko zapominają</strong><span>Retrieval practice i powtórki rozłożone</span></a>
        <a href="metoda-nauczanie-jawne.html"><strong>Nie wiedzą, jak zacząć</strong><span>Nauczanie jawne i przykłady rozwiązane</span></a>
        <a href="metoda-feedback-poprawa.html"><strong>Oddają pierwszą wersję i kończą</strong><span>Feedback prowadzący do poprawy</span></a>
        <a href="metoda-uczenie-kooperacyjne.html"><strong>Praca grupowa jest pozorna</strong><span>Uczenie kooperacyjne i tutoring rówieśniczy</span></a>
        <a href="metoda-udl.html"><strong>Bariera pojawia się przed treścią</strong><span>UDL i małe kroki</span></a>
        <a href="metoda-problem-projekt-przypadek.html"><strong>Wiedza nie łączy się z praktyką</strong><span>Problem, projekt i przypadek</span></a>
      </div>
    </div>
  </section>

  <section class="section evaluation-teaser">
    <div class="container evaluation-layout">
      <div>
        <h2>Sprawdź efekt po czterech tygodniach</h2>
        <p>Ewaluacja nie pyta tylko, czy lekcja się podobała. Obserwuje start pracy, produkt, typowe błędy, poprawę po feedbacku i powrót wiedzy po czasie.</p>
      </div>
      <a class="button primary" href="ewaluacja.html">Otwórz model ewaluacji</a>
    </div>
  </section>

  <section class="section white">
    <div class="container connected-layout">
      <div class="connected-copy">
        <h2>Dwa powiązane serwisy COVE Polska</h2>
        <p>Ten katalog koncentruje się na organizacji lekcji. Szersze materiały o zaangażowaniu oraz odpowiedzialnym użyciu AI znajdują się w osobnych serwisach.</p>
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
  ["realia-klasy", "Realia klasy"],
  ["przygotowanie", "Przygotowanie"],
  ["lekcja", "Przebieg 45 minut"],
  ["scenariusz-zawodowy", "Scenariusz zawodowy"],
  ["przyklad-ogolny", "Przykład ogólny"],
  ["koncentracja", "Udział i koncentracja"],
  ["technologia", "Technologia"],
  ["ocenianie", "Ocenianie"],
  ["bledy", "Błędy i korekty"],
  ["ewaluacja", "Sprawdzenie efektu"],
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

const methodBody = (method) => {
  const adaptation = method.adaptation;
  return `
<main id="main">
  <section class="method-hero">
    <div class="container method-hero-inner">
      <a class="back-link" href="index.html#metody">← Wszystkie metody</a>
      <span class="source-badge hero-badge">${escapeHtml(method.sourceBadge)}</span>
      <h1>${escapeHtml(method.title)}</h1>
      <p class="method-definition">${escapeHtml(method.definition)}</p>
      <ul class="tag-list hero-tags">${method.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>
    </div>
  </section>
${mobileToc.trim()}
  <div class="container method-layout">
    <aside>${methodToc}</aside>
    <article class="method-content">
      <section id="istota" class="content-section">
        <p class="source-kicker">${escapeHtml(method.sourceType)}</p>
        <h2>Definicja i granice metody</h2>
        <p class="source-note">${escapeHtml(method.sourceNote)}</p>
        <p>${escapeHtml(method.mechanism)}</p>
        <h3>Czym ta metoda nie jest</h3>
        <p>${escapeHtml(adaptation.boundaries.isNot)}</p>
        <h3>Jaki problem lekcyjny może rozwiązać</h3>
        <p>${escapeHtml(adaptation.boundaries.classroomProblem)}</p>
        <div class="evidence-caution"><strong>Granica wnioskowania z badań</strong><p>${escapeHtml(adaptation.boundaries.promiseLimit)}</p></div>
        <h3>Kiedy warto zastosować</h3>
        <ul class="plain-list">${method.uses.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>

      <section id="realia-klasy" class="content-section">
        <p class="source-kicker">Adaptacja do polskiej szkoły stacjonarnej</p>
        <h2>Realia klasy 25-32-osobowej</h2>
        <ul class="classroom-list">${adaptation.classroom.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>

      <section id="przygotowanie" class="content-section">
        <p class="source-kicker">Przed lekcją</p>
        <h2>Przygotowanie nauczyciela</h2>
        <p>${escapeHtml(adaptation.preparation.before)}</p>
        <div class="preparation-grid">
          <div><h3>Materiały</h3><ul>${adaptation.preparation.materials.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
          <div><h3>Tablica i organizacja</h3><p>${escapeHtml(adaptation.preparation.boardSetup)}</p></div>
          <div><h3>Oczekiwany produkt</h3><p>${escapeHtml(adaptation.preparation.successProduct)}</p></div>
          <div><h3>Plan awaryjny</h3><p>${escapeHtml(adaptation.preparation.fallback)}</p></div>
        </div>
      </section>

      <section id="lekcja" class="content-section">
        <p class="source-kicker">Propozycja organizacyjna</p>
        <h2>Przebieg lekcji 45-minutowej</h2>
        <blockquote class="teacher-script">${escapeHtml(adaptation.teacherPrompt)}</blockquote>
        <div class="detailed-lesson-flow">
          ${adaptation.lesson.map((step) => `<section class="lesson-step"><div class="lesson-step-heading"><span>${step.minutes} min</span><h3>${escapeHtml(step.title)}</h3></div><dl><div><dt>Nauczyciel</dt><dd>${escapeHtml(step.teacher)}</dd></div><div><dt>Uczniowie</dt><dd>${escapeHtml(step.students)}</dd></div><div><dt>Dowód uczenia się</dt><dd>${escapeHtml(step.evidence)}</dd></div><div><dt>Decyzja w trakcie</dt><dd>${escapeHtml(step.decision)}</dd></div></dl></section>`).join("")}
        </div>
        <p class="proposal-note">Podane czasy i komunikaty są autorską propozycją organizacyjną. Należy je dopasować do programu, poziomu klasy i warunków lekcji.</p>
      </section>

      <section id="scenariusz-zawodowy" class="content-section">
        <p class="source-kicker">Pełny przykład do adaptacji</p>
        <h2>Scenariusz zawodowy</h2>
        <div class="scenario-lead"><strong>Kontekst</strong><p>${escapeHtml(adaptation.vocational.context)}</p><strong>Cel</strong><p>${escapeHtml(adaptation.vocational.goal)}</p></div>
        <h3>Materiały</h3>
        <ul class="plain-list">${adaptation.vocational.materials.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <h3>Dokładne polecenie dla uczniów</h3>
        <blockquote class="student-task">${escapeHtml(adaptation.vocational.instruction)}</blockquote>
        <h3>Przebieg krok po kroku</h3>
        <ol class="phase-list">${adaptation.vocational.phases.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
        <h3>Spodziewany produkt</h3>
        <p>${escapeHtml(adaptation.vocational.product)}</p>
        <div class="scenario-response-grid">
          <div><h3>Możliwe błędy</h3><ul>${adaptation.vocational.likelyErrors.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
          <div><h3>Reakcje nauczyciela</h3><ul>${adaptation.vocational.teacherResponses.map((item) => `<li>„${escapeHtml(item)}”</li>`).join("")}</ul></div>
        </div>
        <h3>Domknięcie lekcji</h3>
        <p>${escapeHtml(adaptation.vocational.closing)}</p>
      </section>

      <section id="przyklad-ogolny" class="content-section">
        <p class="source-kicker">Krótszy przykład</p>
        <h2>${escapeHtml(adaptation.general.subject)}: ${escapeHtml(adaptation.general.topic)}</h2>
        <div class="general-example"><div><strong>Organizacja</strong><p>${escapeHtml(adaptation.general.setup)}</p></div><div><strong>Przebieg</strong><p>${escapeHtml(adaptation.general.flow)}</p></div><div><strong>Produkt ucznia</strong><p>${escapeHtml(adaptation.general.product)}</p></div><div><strong>Sprawdzenie efektu</strong><p>${escapeHtml(adaptation.general.check)}</p></div></div>
      </section>

      <section id="koncentracja" class="content-section">
        <p class="source-kicker">Wejście w zadanie</p>
        <h2>Uczeń bierny lub łatwo tracący koncentrację</h2>
        <div class="engagement-detail">
          <div><strong>Pierwszy wykonalny krok</strong><p>${escapeHtml(adaptation.engagement.firstStep)}</p></div>
          <div><strong>Krótkie odcinki pracy</strong><p>${escapeHtml(adaptation.engagement.segments)}</p></div>
          <div><strong>Neutralny komunikat powrotu</strong><p>„${escapeHtml(adaptation.engagement.returnPrompt)}”</p></div>
          <div><strong>Rola dająca realny udział</strong><p>${escapeHtml(adaptation.engagement.role)}</p></div>
        </div>
        <p class="caution">${escapeHtml(adaptation.engagement.caution)}</p>
      </section>

      <section id="technologia" class="content-section">
        <p class="source-kicker">Dobór narzędzia do celu</p>
        <h2>Cztery warianty realizacji</h2>
        <div class="tool-variants">
          <div><h3>Bez technologii</h3><p>${escapeHtml(method.tech.none)}</p></div>
          <div><h3>Z wykorzystaniem ZPE</h3><p>${escapeHtml(method.tech.zpe)}</p><a href="https://zpe.gov.pl/o-zpe" target="_blank" rel="noopener noreferrer">Poznaj ZPE</a></div>
          <div><h3>Z krótkim użyciem telefonu</h3><p>${escapeHtml(method.tech.phone)}</p></div>
          <div><h3>AI jako pomoc nauczyciela</h3><p>${escapeHtml(method.tech.ai)}</p><a href="https://ai.covepolska.pl" target="_blank" rel="noopener noreferrer">Materiały o AI</a></div>
        </div>
      </section>

      <section id="ocenianie" class="content-section">
        <p class="source-kicker">Dowód zamiast pozornej aktywności</p>
        <h2>Ocenianie i informacja zwrotna</h2>
        <div class="assessment-grid">
          <div><strong>Co jest dowodem</strong><p>${escapeHtml(adaptation.assessment.evidence)}</p></div>
          <div><strong>Czego nie warto oceniać stopniem</strong><p>${escapeHtml(adaptation.assessment.notGrade)}</p></div>
        </div>
        <h3>Jawne kryteria produktu</h3>
        <ol class="criteria-list">${adaptation.assessment.criteria.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
        <h3>Pierwsza i poprawiona wersja</h3>
        <p>${escapeHtml(adaptation.assessment.revision)}</p>
      </section>

      <section id="bledy" class="content-section">
        <p class="source-kicker">Korekta wdrożenia</p>
        <h2>Najczęstsze błędy i co zrobić zamiast</h2>
        <div class="mistake-fixes">${adaptation.mistakeFixes.map((item) => `<div><h3>${escapeHtml(item.mistake)}</h3><p><strong>Zamiast:</strong> ${escapeHtml(item.instead)}</p></div>`).join("")}</div>
      </section>

      <section id="ewaluacja" class="content-section">
        <p class="source-kicker">Ewaluacja w klasie</p>
        <h2>Jak sprawdzić efekt</h2>
        <div class="evaluation-questions">
          <div><strong>Po jednej lekcji</strong><p>${escapeHtml(method.evaluation.evidence)}</p></div>
          <div><strong>Po 2-4 tygodniach</strong><p>${escapeHtml(method.evaluation.question)}</p></div>
          <div><strong>Decyzja</strong><p>${escapeHtml(method.evaluation.decision)}</p></div>
        </div>
        <a class="text-link" href="ewaluacja.html">Zobacz czterotygodniowy model ewaluacji →</a>
      </section>

      <section id="zrodla" class="content-section">
        <p class="source-kicker">Podstawa opisu</p>
        <h2>Źródła i materiały</h2>
        <div class="source-cards">
          ${method.sources.map((source) => `<a href="${source.url}"${source.url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}><span>${escapeHtml(source.type)}</span><strong>${escapeHtml(source.title)}</strong><p>${escapeHtml(source.note)}</p></a>`).join("")}
        </div>
        <h3>Warto połączyć z</h3>
        <div class="related-links">
          ${method.related.map((title) => {
            const related = methodByTitle.get(title);
            return related ? `<a href="${related.file}">${escapeHtml(title)}</a>` : "";
          }).join("")}
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
        <article><span>Tydzień 2-3</span><h3>Powtarzalna praktyka</h3><p>Powtórz tę samą logikę na podobnych lekcjach. Po każdej zanotuj jeden fakt o pracy uczniów i jedną korektę organizacji.</p></article>
        <article><span>Tydzień 4</span><h3>Porównanie i decyzja</h3><p>Porównaj start, produkt, poprawę i wiedzę po czasie. Zdecyduj: zostawić, uprościć, zmienić warunek albo zrezygnować.</p></article>
      </div>
      <div class="method-note"><strong>Ważne:</strong> takie porównanie jest ewaluacją nauczycielską, nie eksperymentem naukowym. Pomaga podejmować decyzje w konkretnej klasie, ale nie dowodzi uniwersalnej skuteczności metody.</div>
    </div>
  </section>
  <section class="section white">
    <div class="container narrow prose">
      <h2>Minimalny zapis po lekcji</h2>
      <p>Jedna notatka może mieć cztery zdania: jaki był cel, ilu uczniów zaczęło, co powstało i jaki błąd wrócił. Dokumentuj prace uczniów tylko w zakresie potrzebnym do dydaktyki i zgodnie z zasadami szkoły dotyczącymi danych oraz wizerunku.</p>
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
        <article><h3>Nazwij pierwszy ruch</h3><p>Zamiast \"zacznij pracować\" powiedz: \"podkreśl dwie dane i zapisz pierwszą decyzję\".</p><a href="metoda-nauczanie-jawne.html">Nauczanie jawne</a></article>
        <article><h3>Podziel czas na krótkie odcinki</h3><p>Po krótkim wyjaśnieniu następuje działanie, sprawdzenie i kolejny krok.</p><a href="metoda-przyklady-rozwiazane.html">Przykłady rozwiązane</a></article>
        <article><h3>Pokaż widoczny produkt</h3><p>Jedno zdanie, decyzja, schemat lub poprawiony punkt daje uczniowi jasny koniec etapu.</p><a href="metoda-feedback-poprawa.html">Feedback i poprawa</a></article>
        <article><h3>Daj czas przed wypowiedzią</h3><p>Najpierw indywidualny zapis, potem para, dopiero później forum klasy.</p><a href="metoda-nauczanie-dialogowe.html">Nauczanie dialogowe</a></article>
        <article><h3>Ogranicz wybór</h3><p>Dwie sensowne drogi są bardziej dostępne niż otwarte polecenie bez kryteriów.</p><a href="metoda-udl.html">UDL</a></article>
        <article><h3>Wracaj do zadania neutralnie</h3><p>Wskaż krok i działanie, nie oceniaj cechy ucznia. Komunikat ma umożliwić powrót bez zawstydzania.</p><a href="index.html#metody">Zobacz katalog metod</a></article>
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
        <div><strong>Interpretacja</strong><p>Wyjaśnienie, jak wniosek można odczytać w realiach zwykłej polskiej szkoły stacjonarnej.</p></div>
        <div><strong>Przykład</strong><p>Autorska propozycja lekcji, która ilustruje mechanizm i wymaga dopasowania do przedmiotu.</p></div>
        <div><strong>Rekomendacja</strong><p>Ostrożny sposób wdrożenia i sprawdzenia efektu w konkretnej klasie.</p></div>
      </div>
      <p>Nie stosujemy etykiet \"metoda udowodniona\" ani punktowego rankingu. Metaanaliza, niezależna ewaluacja konkretnego programu i rama projektowa odpowiadają na różne pytania. Wynik z jednego kontekstu nie jest gwarancją wyniku w innej klasie.</p>
    </div>
  </section>
  <section class="section">
    <div class="container source-register">
      <div class="section-heading"><h2>Rejestr głównych źródeł</h2><p>Przy każdej metodzie znajduje się krótsza lista źródeł odnoszących się bezpośrednio do jej opisu.</p></div>
      <div class="source-register-list">
        ${uniqueSources.map((source) => `<a href="${source.url}"${source.url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}><span>${escapeHtml(source.type)}</span><strong>${escapeHtml(source.title)}</strong><p>${escapeHtml(source.note)}</p></a>`).join("")}
      </div>
    </div>
  </section>
  <section class="section white">
    <div class="container narrow prose">
      <h2>Materiały instytucjonalne</h2>
      <p><a class="text-link" href="https://zpe.gov.pl/o-zpe" target="_blank" rel="noopener noreferrer">Zintegrowana Platforma Edukacyjna</a> jest wskazywana jako publiczne środowisko materiałów i aktywności, nie jako obowiązkowy element każdej metody.</p>
      <p><a class="text-link" href="https://covepolska.pl/deklaracja-dostepnosci/" target="_blank" rel="noopener noreferrer">Deklaracja dostępności COVE Polska</a> opisuje dostępność serwisów organizatora.</p>
    </div>
  </section>
</main>`;

const projectBody = `
<main id="main">
  <section class="page-hero">
    <div class="container narrow">
      <p class="context-line">COVE Polska · WIN4SMEs</p>
      <h1>O projekcie i inspiracji WP3.A5</h1>
      <p>Katalog łączy materiał projektowy o uczeniu z technologiami z niezależnymi źródłami dotyczącymi praktyki lekcyjnej.</p>
    </div>
  </section>
  <section class="section white" id="wp3a5">
    <div class="container narrow prose">
      <h2>Materiał źródłowy WP3.A5</h2>
      <p>Dokument \"Learning with digital technologies\" został przygotowany przez IBC w Danii w ramach działania WP3.A5. Opisuje 360 E-learning Center, blended learning i flipped classroom. Na tej stronie trzy rozwiązania zostały przełożone na pracę w zwykłej szkole stacjonarnej.</p>
      <p>360 e-learning oznacza tu kompletne środowisko procesu uczenia się, a nie filmy sferyczne, VR ani sprzęt immersyjny. Blended learning łączy funkcje aktywności cyfrowej i stacjonarnej. Klasyczny flipped classroom zakłada kontakt z materiałem przed spotkaniem; wariant klasowy jest świadomie opisaną adaptacją.</p>
      <div class="method-note"><strong>Zakres:</strong> materiał WP3.A5 inspiruje trzy opisy, ale nie jest przedstawiany jako niezależna metaanaliza ani uniwersalny standard terminologiczny.</div>
    </div>
  </section>
  <section class="section">
    <div class="container narrow prose">
      <h2>Dlaczego katalog ma 16 metod</h2>
      <p>Praktyczna innowacja może dotyczyć pamięci, wyjaśniania, feedbacku, współpracy, dostępności lub organizacji problemu. Technologia może wspierać każdy z tych obszarów, ale nie tworzy osobnej hierarchii metod.</p>
      <a class="button primary" href="index.html#metody">Przejdź do katalogu</a>
    </div>
  </section>
</main>`;

const generatedMethodPages = methods.map((method) => {
  const body = methodBody(method);
  const article = body.match(/<article class="method-content">([\s\S]*?)<\/article>/)?.[1] ?? "";
  const words = countWords(article);
  return { method, body, words };
});

const wordCountViolations = generatedMethodPages.filter(({ words }) => words < 1200 || words > 1600);
if (wordCountViolations.length) {
  const report = generatedMethodPages.map(({ method, words }) => `${method.title}: ${words}`).join("\n");
  throw new Error(`Treści metod muszą mieć 1200-1600 słów:\n${report}`);
}

await Promise.all([
  writeFile(resolve(root, "index.html"), documentShell({ title: "Innowacyjna lekcja w praktyce", description: "16 metod organizowania lekcji, angażowania uczniów, utrwalania wiedzy i wykorzystywania technologii w zwykłej szkole stacjonarnej.", body: indexBody, active: "start" })),
  writeFile(resolve(root, "ewaluacja.html"), documentShell({ title: "Ewaluacja metod | Innowacyjna lekcja w praktyce", description: "Czterotygodniowy model sprawdzania, czy metoda lekcyjna pomaga uczniom rozpocząć pracę, poprawiać błędy i utrwalać wiedzę.", body: evaluationBody, active: "evaluation" })),
  writeFile(resolve(root, "inspiracje.html"), documentShell({ title: "Zaangażowanie i koncentracja | Innowacyjna lekcja w praktyce", description: "Praktyczne sposoby ułatwiające uczniom rozpoczęcie zadania, utrzymanie kierunku pracy i ukończenie produktu.", body: engagementBody, active: "engagement" })),
  writeFile(resolve(root, "about.html"), documentShell({ title: "Źródła i metodologia | Innowacyjna lekcja w praktyce", description: "Źródła naukowe, instytucjonalne i projektowe wykorzystane w katalogu 16 metod pracy na lekcji.", body: aboutBody, active: "sources" })),
  writeFile(resolve(root, "projekt.html"), documentShell({ title: "O projekcie | Innowacyjna lekcja w praktyce", description: "Informacje o materiale WP3.A5 Learning with digital technologies i sposobie jego adaptacji do polskiej szkoły stacjonarnej.", body: projectBody })),
  ...generatedMethodPages.map(({ method, body }) => writeFile(resolve(root, method.file), documentShell({ title: `${method.title} | Innowacyjna lekcja w praktyce`, description: method.short, body, active: "methods" })))
]);

console.log(`Wygenerowano ${methods.length} podstron metod i 5 stron serwisu.`);
console.log(generatedMethodPages.map(({ method, words }) => `${method.file}: ${words} słów`).join("\n"));
