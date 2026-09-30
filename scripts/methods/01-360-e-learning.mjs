export default {
  file: "method-1.html",
  title: "360 e-learning",
  group: "wp3",
  short: "Uczeń przechodzi samodzielny moduł cyfrowy: materiał, zadania z automatycznym sprawdzeniem, przypadek i refleksja. Nauczyciel obserwuje i pomaga tam, gdzie ktoś utknął.",
  aliases: ["self-instructive e-learning", "samodzielny moduł online", "nauka w pracowni komputerowej"],
  evidence: { level: "inspiracja", label: "Inspiracja projektowa", note: "Opis pochodzi z materiału WP3.A5 (IBC, Dania) i dotyczy szkoleń dorosłych w firmach. Nie znamy badań skuteczności tego konkretnego modelu. Elementy składowe (quizy z natychmiastową informacją zwrotną, zadania na przypadkach) mają osobne uzasadnienie w badaniach nad przypominaniem i informacją zwrotną." },
  categories: ["technologia", "przygotowanie", "feedback"],
  tags: ["WP3.A5", "praca samodzielna", "pracownia komputerowa"],
  definition: "Uczniowie pracują indywidualnie z modułem cyfrowym, który prowadzi ich od materiału przez zadania z natychmiastową informacją zwrotną do przypadku praktycznego.",
  how: [
    "W IBC (Dania) 360 E-learning Center to środowisko, w którym uczestnicy spędzają cały dzień (7,4 godziny) na samodzielnej pracy z materiałami: filmy, artykuły, ćwiczenia interaktywne, quizy, zadania na przypadkach i symulacje. Platforma pokazuje postęp, a odpowiedzi w quizach są sprawdzane automatycznie. Materiał opisuje cztery zasady takiego modułu: uczenie całościowe (praca indywidualna przeplatana pracą w grupie), interaktywność i informacja zwrotna, praktyczna przydatność zadań oraz kompetencje cyfrowe (krytyczne używanie narzędzi i źródeł).",
    "W szkole nie ma całego dnia, więc moduł skraca się do jednej lekcji w pracowni komputerowej albo z laptopami: około 12 minut materiału z ćwiczeniami, 12 minut na przypadek, potem wymiana w parach. Nauczyciel nie prowadzi lekcji z przodu. Chodzi po sali, widzi, kto stoi na którym etapie, i rozmawia z tymi, którzy utknęli."
  ],
  differs: [
    { with: "Blended learning", text: "Tu cała praca odbywa się w jednym bloku, a tempo wyznacza uczeń. W blended nauczyciel prowadzi warsztat, a część cyfrowa jest przed nim i po nim." },
    { with: "Flipped classroom", text: "W flipped materiał jest poznany przed lekcją, a lekcja służy rozwiązywaniu problemów z nauczycielem. Tu materiał i zadania są na lekcji, a uczeń pracuje sam." },
    { with: "Ocenianie kształtujące", text: "Automatyczny quiz to tylko jeden element modułu. Nie zastępuje decyzji nauczyciela na podstawie odpowiedzi całej klasy." }
  ],
  when: {
    good: ["masz pracownię komputerową albo komplet laptopów i stabilny internet", "uczniowie mają różne tempo, a temat da się podzielić na samodzielne etapy", "potrzebujesz czasu, żeby usiąść przy kilku uczniach, którzy mają największą trudność"],
    notFor: ["wprowadzanie nowej, trudnej treści (uczeń bez wiedzy wstępnej sam jej nie zbuduje)", "klasy bez pewnego dostępu do sprzętu: awaria logowania zjada połowę lekcji", "zajęcia wymagające ćwiczenia czynności manualnych"]
  },
  lesson: [
    { min: 4, title: "Mapa modułu", teacher: "Zapisuje na tablicy cztery etapy z czasem: materiał (12 min), przypadek (12 min), para (8 min), refleksja (4 min). Podaje link lub ścieżkę do materiału.", students: "Logują się i otwierają pierwszy etap. Każdy zaznacza w karcie, że wystartował." },
    { min: 12, title: "Materiał i ćwiczenia z automatycznym sprawdzaniem", teacher: "Chodzi po sali. Zapisuje w swojej karcie, kto utknął na którym ćwiczeniu. Nie tłumaczy całej klasie, tylko osobom.", students: "Pracują samodzielnie. Po każdym ćwiczeniu czytają informację zwrotną i poprawiają błędną odpowiedź." },
    { min: 12, title: "Przypadek", teacher: "Sprawdza, czy uczniowie zapisują decyzję, zanim zajrzą do wzoru. Siada przy osobach z listy.", students: "Rozwiązują przypadek praktyczny i zapisują decyzję z jednym uzasadnieniem." },
    { min: 8, title: "Wymiana w parach", teacher: "Podaje jedno pytanie do wymiany: „Gdzie wasze decyzje się różnią i dlaczego?”", students: "Porównują decyzje w parach i zaznaczają jedną rzecz, którą zmieniają." },
    { min: 4, title: "Refleksja", teacher: "Zbiera karty z jednym zdaniem.", students: "Piszą: „Tę wiedzę użyję w pracy/zadaniu, gdy…”" }
  ],
  decisionPoint: "Jeżeli po 12 minutach więcej niż jedna trzecia klasy nie skończyła materiału, skróć go: daj wydruk z najważniejszym fragmentem i przejdź do przypadku.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Technik logistyk: dokumenty magazynowe",
      context: "Klasa 2 technikum logistycznego. Moduł na ZPE (np. materiał o dokumentacji w obrocie magazynowym) lub własny wydruk. Uczniowie mają odróżniać PZ, WZ, MM, RW i PW.",
      goal: "Uczeń dobiera dokument do sytuacji magazynowej i poprawnie rozlicza rozbieżność przy przyjęciu dostawy.",
      materials: [
        { t: "Pięć pytań z kluczem (ćwiczenie na etapie 1)", table: { head: ["Pytanie", "Poprawna odpowiedź"], rows: [
          ["Który dokument potwierdza przyjęcie towaru od dostawcy do magazynu?", "PZ (przyjęcie zewnętrzne)"],
          ["Który dokument wystawiasz przy wydaniu towaru odbiorcy spoza firmy?", "WZ (wydanie zewnętrzne)"],
          ["Który dokument dotyczy przesunięcia towaru między dwoma magazynami tej samej firmy?", "MM (przesunięcie międzymagazynowe)"],
          ["Magazynier pobiera materiał na potrzeby produkcji. Jaki dokument?", "RW (rozchód wewnętrzny)"],
          ["Z produkcji wpływają wyroby gotowe do magazynu. Jaki dokument?", "PW (przyjęcie wewnętrzne)"]
        ] } },
        { t: "Przypadek (etap 2)", text: "Zamówiono 120 sztuk. Kierowca przywiózł 112 sztuk (brak 8). W dostawie jeden karton z 12 sztukami jest zgnieciony i towar uszkodzony. Pozostałe kartony są w porządku. Kierowca czeka i prosi o podpis." },
        { t: "Polecenie", text: "Zapisz: (1) ile sztuk przyjmujesz na stan bez zastrzeżeń, (2) co robisz z uszkodzonym kartonem, (3) co robisz z niedoborem, (4) co zapisujesz na dokumencie dostawy, zanim podpiszesz." }
      ],
      key: "(1) 112 − 12 = 100 sztuk bez zastrzeżeń. (2) 12 sztuk wyłączasz z przyjęcia na stan sprzedażowy, dokumentujesz uszkodzenie (zdjęcie, opis) i kierujesz do reklamacji. (3) Niedobór 8 sztuk zgłaszasz dostawcy. (4) Na dokumencie dostawy zapisujesz rozbieżność ilościową i jakościową przed podpisem i sporządzasz protokół rozbieżności. Zasady szczegółowe zależą od procedury firmy. Przed użyciem przypadku skonsultuj je z nauczycielem przedmiotu zawodowego lub praktykiem.",
      errors: ["przyjęcie 112 sztuk bez zauważenia uszkodzenia", "podpisanie dokumentu dostawy bez adnotacji o rozbieżności", "pomylenie PZ z WZ (kierunek ruchu towaru)"]
    },
    {
      kind: "ogolny",
      label: "Matematyka: zmiana procentowa",
      context: "Dowolna klasa. Materiał: ZPE „Obliczenia procentowe” albo jedna strona z przykładami.",
      goal: "Uczeń rozumie, że procent liczy się od konkretnej podstawy, i nie dodaje procentów z różnych podstaw.",
      materials: [
        { t: "Ćwiczenia z kluczem (etap 1)", list: ["15% z 200 zł = ? (30 zł)", "Cena wzrosła z 80 zł do 100 zł. O ile procent? (o 25%)", "Po obniżce o 20% towar kosztuje 160 zł. Ile kosztował przed obniżką? (200 zł)"] },
        { t: "Przypadek (etap 2)", text: "Sklep obniżył cenę kurtki o 20%, a po miesiącu podniósł nową cenę o 20%. Kurtka kosztowała 250 zł. Czy po podwyżce wróciła do ceny 250 zł? Zapisz obliczenia." }
      ],
      key: "Po obniżce: 250 · 0,8 = 200 zł. Po podwyżce: 200 · 1,2 = 240 zł. Nie wróciła, bo 20% z 200 zł to mniej niż 20% z 250 zł. Para ma wyjaśnić to jednym zdaniem.",
      errors: ["uznanie, że −20% i +20% się znoszą", "liczenie drugiego procentu od ceny pierwotnej"]
    }
  ],
  tech: {
    none: "Wydrukuj materiał i ćwiczenia w tej samej kolejności, a klucz schowaj do czasu zapisu odpowiedzi. Uczniowie sprawdzają się sami z kluczem na stoliku nauczyciela.",
    computer: "Dobrze działa tam, gdzie e-materiał ma ćwiczenia sprawdzane automatycznie. Sprawdź na swoim koncie ZPE, jakie ćwiczenia ma wybrany materiał, zanim obiecasz to klasie.",
    phone: "Słabo. Moduł wymaga czytania i pisania na większym ekranie. Telefon wystarczy do pojedynczego quizu.",
    ai: "AI może zmienić dane w przypadku (inne liczby, inna firma), żebyś miał wersję dla uczniów szybszych. Sprawdź rachunki samodzielnie przed lekcją."
  },
  pitfalls: [
    { mistake: "Wrzucasz film na 25 minut i quiz na końcu.", instead: "Dziel materiał na kawałki po kilka minut, każdy z jednym ćwiczeniem." },
    { mistake: "Nauczyciel siedzi przy biurku i czeka, aż uczniowie skończą.", instead: "Wyznacz z góry 3–4 osoby, z którymi usiądziesz, i notuj, na którym ćwiczeniu się zatrzymały." },
    { mistake: "Wynik quizu wystawiasz jako ocenę.", instead: "Quiz jest informacją dla ucznia i dla Ciebie. Oceniaj przypadek według kryteriów." }
  ],
  check: { how: "Policz, ilu uczniów dotarło do przypadku w wyznaczonym czasie i ilu poprawiło decyzję po wymianie w parach.", decision: "Jeśli mniej niż połowa dotarła do przypadku, skróć materiał albo przenieś część do wydruku." },
  sources: [
    { title: "WP3.A5 Implementation methods and models for learning with digital technologies (wersja robocza, IBC, Dania)", type: "materiał projektowy", url: "projekt.html#wp3a5", note: "Opis 360 E-learning Center, czterech zasad modelu i przykładowych zadań." },
    { title: "Zintegrowana Platforma Edukacyjna", type: "materiał instytucjonalny", url: "https://zpe.gov.pl/o-zpe", note: "Publiczne e-materiały, z których można zbudować etap 1." }
  ],
  related: ["Blended learning", "Flipped classroom", "Przypominanie i powroty"]
};
