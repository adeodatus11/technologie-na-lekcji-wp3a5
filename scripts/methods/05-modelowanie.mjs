export default {
  file: "metoda-modelowanie.html",
  title: "Modelowanie: jawne nauczanie, przykłady i instruktaż",
  group: "core",
  short: "Nauczyciel pokazuje procedurę i nazywa decyzje. Potem przykład z lukami i dopiero samodzielne zadanie, a w pracowni instruktaż w czterech krokach.",
  aliases: ["nauczanie jawne", "explicit instruction", "przykłady rozwiązane", "worked examples", "instruktaż czterostopniowy", "pokaz z objaśnieniem"],
  evidence: { level: "mocne", label: "Mocne", note: "Rosenshine (Principles of Instruction), wytyczne AERO i IES (przeplatanie przykładów rozwiązanych z zadaniami) opierają się na wielu badaniach. Przykłady rozwiązane pomagają początkującym, ale przy większej biegłości zbyt pełny przykład może przeszkadzać. Wsparcie trzeba stopniowo zdejmować." },
  categories: ["modelowanie", "przygotowanie"],
  tags: ["pokaz", "przykład z lukami", "instruktaż"],
  definition: "Nauczyciel rozwiązuje przykład na głos, pokazując dane i decyzje. Potem uczniowie dokańczają przykład z lukami i dopiero wtedy rozwiązują samodzielnie podobne zadanie.",
  how: [
    "Początkujący nie potrafi jednocześnie szukać procedury i pilnować wyniku. Pełny przykład z komentarzem „dlaczego ten krok” pozwala mu zobaczyć strukturę. Przykład z lukami zmusza do własnej decyzji przy wsparciu. Samodzielne zadanie z innymi danymi sprawdza, czy uczeń przeniósł zasadę, a nie tylko odtworzył wzór. Nauczyciel po każdym kroku sprawdza odpowiedzi wszystkich, a nie tylko chętnych.",
    "W zajęciach praktycznych ta sama logika ma swoją nazwę: instruktaż czterostopniowy. Kroki to: (1) przygotowanie: cel, stanowisko, bezpieczeństwo; (2) pokaz z objaśnieniem; (3) próba ucznia, który wykonuje i mówi, co robi; (4) samodzielne ćwiczenie z kontrolą wyniku. To ta sama sekwencja „model, praktyka kierowana, praktyka samodzielna”, zastosowana do czynności manualnej."
  ],
  differs: [
    { with: "Metapoznanie", text: "Tu nauczyciel pokazuje poprawne rozwiązanie i jego uzasadnienie. W metapoznaniu uczeń planuje i kontroluje własną pracę." },
    { with: "Flipped classroom", text: "Tu modelowanie dzieje się na lekcji i na żywo. W flipped pokaz jest przeniesiony do materiału przed lekcją." },
    { with: "Problem, przypadek, projekt", text: "Tu uczeń dostaje wzór i stopniowo go traci. W przypadku uczeń ma rozwiązać problem bez pokazanej procedury, więc musi mieć wiedzę wstępną." }
  ],
  when: {
    good: ["nowa procedura, obliczenie lub typ zadania, którego uczniowie jeszcze nie robili", "czytanie dokumentacji krok po kroku", "przygotowanie do czynności praktycznej w pracowni"],
    notFor: ["uczniowie, którzy już dobrze opanowali procedurę (pełny przykład przeszkadza)", "zadania otwarte bez jednej poprawnej drogi", "cała lekcja w formie wykładu bez odpowiedzi uczniów"]
  },
  lesson: [
    { min: 4, title: "Cel i pierwszy krok", teacher: "Podaje cel i pokazuje dane zadania. Prosi o zapisanie pierwszego kroku bez podpowiedzi.", students: "Zapisują pierwszy krok i podnoszą kartkę. Nauczyciel widzi punkt startowy." },
    { min: 10, title: "Pokaz z głośnym myśleniem", teacher: "Rozwiązuje pełny przykład na tablicy. Przy każdym kroku mówi, którą daną wybiera i dlaczego.", students: "Śledzą i zaznaczają w karcie dane, decyzje i kontrolę różnymi kolorami." },
    { min: 10, title: "Przykład z lukami", teacher: "Daje drugi przykład z dwiema lukami. Sprawdza odpowiedzi wszystkich, nie tylko ochotników.", students: "W parach uzupełniają luki i porównują z sąsiadem." },
    { min: 16, title: "Samodzielne zadanie i klucz", teacher: "Daje zadanie z innymi danymi. Siada przy uczniach z największym kłopotem. Na koniec pokazuje poprawne rozwiązanie i jeden typowy błąd.", students: "Rozwiązują bez wzoru. Na końcu zaznaczają krok, w którym ich rozwiązanie różni się od klucza." }
  ],
  decisionPoint: "Jeżeli w przykładzie z lukami ta sama luka sprawia kłopot połowie klasy, wróć do modelu tego jednego kroku zamiast dawać kolejne zadania.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Technik ekonomista / sprzedawca: faktura netto, VAT, brutto",
      context: "Klasa 1–2. Uczniowie liczą wartość netto, podatek VAT i brutto dla pozycji na fakturze.",
      goal: "Uczeń poprawnie dobiera podstawę obliczenia VAT i kontroluje wynik.",
      materials: [
        { t: "Przykład pełny (model)", table: { head: ["Krok", "Zapis"], rows: [["Dane", "5 szt. po 120,00 zł netto, VAT 23%"], ["Wartość netto", "5 · 120,00 = 600,00 zł"], ["VAT", "600,00 · 0,23 = 138,00 zł"], ["Wartość brutto", "600,00 + 138,00 = 738,00 zł"], ["Kontrola", "738,00 : 1,23 = 600,00 zł"]] } },
        { t: "Przykład z lukami", text: "8 szt. po 45,50 zł netto, VAT 8%. Luki: wartość netto, kwota VAT." },
        { t: "Zadanie samodzielne", text: "12 szt. po 37,80 zł netto, VAT 23%. Oblicz netto, VAT i brutto oraz zapisz, jak sprawdziłeś wynik." },
        { t: "Dokument z błędem (dla szybszych uczniów)", text: "Netto 500,00 zł, VAT 23% = 115,00 zł, brutto 625,00 zł. Znajdź błąd." }
      ],
      key: "Przykład z lukami: netto 364,00 zł, VAT 29,12 zł (brutto 393,12 zł). Zadanie samodzielne: netto 453,60 zł, VAT 104,33 zł, brutto 557,93 zł. Dokument z błędem: brutto powinno wynosić 615,00 zł (500 + 115). Błąd powstał przy dodawaniu, nie przy VAT.",
      errors: ["liczenie VAT od wartości brutto", "pomylenie stawki (8% zamiast 23%)", "brak kontroli sumy"]
    },
    {
      kind: "zawodowy",
      label: "Kucharz (zajęcia praktyczne): instruktaż czterostopniowy, sos beszamelowy",
      context: "Pracownia gastronomiczna, grupa do 12–15 osób. Uczniowie znają już podstawy bezpieczeństwa pracy przy kuchni. Jeden stopień po drugim.",
      goal: "Uczeń przygotowuje gładki sos beszamelowy średniej gęstości.",
      materials: [
        { t: "Karta stanowiska ucznia (przed rozpoczęciem)", list: ["Stanowisko czyste, rondel stabilnie na palniku, rękaw lub ściereczka pod ręką.", "Masło, mąka i mleko odmierzone przed włączeniem kuchni.", "Wiem, że zasmażka i sos są gorące: nie pochylam się nad rondlem i mieszam rózgą, nie łyżką trzymaną blisko rąk.", "Po skończeniu sprawdzam: sos gładki, bez grudek, bez zapachu surowej mąki."] },
        { t: "Cztery stopnie", table: { head: ["Stopień", "Co robi nauczyciel i uczeń"], rows: [
          ["1. Przygotowanie", "Cel: gładki sos bez grudek. Proporcje na 500 ml: 50 g masła, 50 g mąki, 500 ml mleka. Sprawdzenie stanowiska i BHP przy gorącej kuchni."],
          ["2. Pokaz z objaśnieniem", "Masło rozpuszczone, dodaj mąkę i smaż 1–2 minuty, mieszając, bez zbrązowienia. Dolewaj mleko stopniowo, ciągle mieszając rózgą. Gotuj kilka minut do zgęstnienia."],
          ["3. Próba ucznia", "Uczeń wykonuje sos i mówi na głos każdy krok. Nauczyciel poprawia tylko to, co zagraża bezpieczeństwu lub wyniku."],
          ["4. Samodzielne ćwiczenie", "Uczeń robi sos o innej gęstości (więcej mąki) i ocenia konsystencję na łyżce."]
        ] } }
      ],
      key: "Kontrola: sos pokrywa tył łyżki gładką warstwą, bez grudek i bez zapachu surowej mąki. Grudki: za szybkie wlanie mleka lub za mało mieszania. Przypalenie: za wysoka temperatura. Receptury i proporcje skonsultuj z nauczycielem gastronomii.",
      errors: ["dolewanie całego mleka naraz", "zbrązowienie zasmażki w jasnym sosie", "brak mieszania przy zagotowywaniu"]
    },
    {
      kind: "ogolny",
      label: "Matematyka: równanie liniowe",
      context: "Klasa 1–2 technikum lub branżowej szkoły I stopnia. Uczeń zna przekształcanie wyrażeń, a równania liniowe z niewiadomą po obu stronach rozwiązuje po raz pierwszy w tym roku.",
      goal: "Uczeń rozwiązuje równanie liniowe, wykonując każdą operację po obu stronach znaku równości, i sprawdza wynik przez podstawienie.",
      materials: [
        { t: "Przykład pełny", text: "3x + 5 = 20. Odejmij 5 od obu stron: 3x = 15. Podziel przez 3: x = 5. Sprawdzenie: 3 · 5 + 5 = 20. Komentarz: każdą operację wykonujemy po obu stronach znaku równości." },
        { t: "Przykład z lukami", text: "4x − 6 = 10. Luki: operacja po obu stronach i sprawdzenie." },
        { t: "Samodzielne", text: "5x + 3 = 2x + 21." }
      ],
      key: "4x − 6 = 10 daje 4x = 16, x = 4 (sprawdzenie: 4 · 4 − 6 = 10). 5x + 3 = 2x + 21 daje 3x = 18, x = 6 (sprawdzenie: 5 · 6 + 3 = 33 = 2 · 6 + 21). Uczniowie zwykle zmieniają tylko jedną stronę albo mylą znak.",
      errors: ["operacja tylko po jednej stronie", "błąd znaku po przeniesieniu"]
    }
  ],
  tech: {
    none: "Tablica, wydrukowany przykład z zakrytym fragmentem i kartka kolorowych oznaczeń wystarczą.",
    computer: "Możesz przygotować przykład w prezentacji z odsłanianiem kolejnych kroków. Sprawdź najpierw, czy wybrany e-materiał ZPE pokazuje kroki z komentarzem.",
    phone: "Zdjęcie klucza po zakończeniu samodzielnego zadania. Nie w trakcie pokazu.",
    ai: "AI może wygenerować 3 podobne zadania z innymi liczbami. Przelicz klucz ręcznie. Błędy w przykładach uczą błędnie."
  },
  pitfalls: [
    { mistake: "Pokazujesz wynik bez uzasadnienia decyzji.", instead: "Przy każdym kroku powiedz, którą daną wybierasz i dlaczego." },
    { mistake: "Pełny przykład zostaje na tablicy przy samodzielnej pracy.", instead: "Zamaż go i zostaw tylko listę kroków." },
    { mistake: "Pytasz „czy rozumiecie?”.", instead: "Poproś o zapis następnego kroku i sprawdź kartki." }
  ],
  check: { how: "Porównaj liczbę błędów w przykładzie z lukami i w samodzielnym zadaniu. Zapisz, w którym kroku błąd się powtarza.", decision: "Jeżeli większość myli ten sam krok, zamodeluj tylko ten krok drugi raz." },
  sources: [
    { title: "Rosenshine: Principles of Instruction", type: "synteza badań", url: "https://www.aft.org/sites/default/files/Rosenshine.pdf", note: "Dziesięć zasad, w tym małe kroki, modele i praktyka kierowana." },
    { title: "AERO: Explicit Instruction Practice Guide", type: "wytyczne instytucjonalne", url: "https://www.edresearch.edu.au/guides-resources/practice-guides/explicit-instruction-practice-guide-full-publication", note: "Praktyczny przewodnik wdrożenia." },
    { title: "IES: Organizing Instruction and Study to Improve Student Learning", type: "wytyczne oparte na przeglądzie badań", url: "https://ies.ed.gov/ncee/wwc/PracticeGuide/1", note: "Zalecenie przeplatania przykładów rozwiązanych z zadaniami do samodzielnego rozwiązania." }
  ],
  related: ["Metapoznanie", "Mastery learning", "Flipped classroom"]
};
