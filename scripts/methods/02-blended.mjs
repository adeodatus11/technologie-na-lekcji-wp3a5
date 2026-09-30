export default {
  file: "method-2.html",
  title: "Blended learning",
  group: "wp3",
  short: "Cykl na kilka tygodni: cyfrowe przygotowanie, warsztat z nauczycielem, powrót po kilku dniach i krótka ewaluacja.",
  aliases: ["nauczanie mieszane", "uczenie hybrydowe"],
  evidence: { level: "inspiracja", label: "Inspiracja projektowa i literatura przeglądowa", note: "Materiał WP3.A5 opisuje szablon dla szkoleń w firmach. W literaturze blended learning oznacza bardzo różne rozwiązania (Hrastinski 2019, Norberg i in. 2017), więc nie da się przypisać efektu samemu połączeniu kanałów. Liczy się to, co uczeń robi w każdej fazie." },
  categories: ["przygotowanie", "technologia", "feedback"],
  tags: ["WP3.A5", "warsztat", "cykl kilku tygodni"],
  definition: "Blended learning łączy pracę cyfrową (asynchroniczną) z pracą na żywo (synchroniczną) w jeden cykl: przygotowanie, warsztat, follow-up i ewaluacja.",
  how: [
    "Materiał WP3.A5 proponuje czterofazowy szablon: (1) cyfrowe przygotowanie, w którym uczestnik pracuje sam z materiałem i notuje pytania, około tydzień przed warsztatem; (2) warsztat, na którym omawia się pytania z przygotowania, a potem pracuje na przypadkach; (3) follow-up: dalsze zadania, wymiana doświadczeń i informacja zwrotna, 2–3 tygodnie po warsztacie; (4) ewaluacja i dokumentacja około tydzień później.",
    "Kluczowe jest to, że warsztat zaczyna się od pytań z przygotowania, a follow-up wraca do tego, co na warsztacie nie wyszło. W szkole cykl można rozpisać na 3–4 tygodnie wokół jednego tematu: przygotowanie to 10–15 minut pod koniec poprzedniej lekcji (lub w domu dla chętnych), warsztat to jedna lekcja, follow-up to jedno pytanie po tygodniu lub dwóch."
  ],
  differs: [
    { with: "360 e-learning", text: "Tu nauczyciel prowadzi warsztat na żywo. Część cyfrowa jest przed nim i po nim, a nie zamiast niego." },
    { with: "Flipped classroom", text: "Flipped to jedna zmiana kolejności: materiał przed lekcją. Blended dodaje do tego follow-up i ewaluację oraz może mieszać formy także po warsztacie." },
    { with: "Przypominanie i powroty", text: "Follow-up w blended to praca nad zadaniem i informacją zwrotną, a nie krótkie pytania z pamięci. Oba można połączyć." }
  ],
  when: {
    good: ["masz temat, który realnie wymaga dwóch kontaktów: samodzielnego przygotowania i pracy z nauczycielem", "uczniowie mają dostęp do sprzętu w szkole, np. w pracowni lub na lekcji poprzedzającej", "warto wrócić do tematu po kilku tygodniach (np. przed praktyką lub egzaminem)"],
    notFor: ["klasy, w których przygotowanie w domu byłoby jedyną możliwością, a część uczniów nie ma sprzętu ani czasu", "tematy, które wystarczy omówić w jednej lekcji", "sytuacje, w których nie masz czasu na follow-up (bez niego to zwykły quiz przed lekcją)"]
  },
  lesson: [
    { min: 5, title: "Pytania z przygotowania", teacher: "Zbiera na tablicy po jednym pytaniu od par (z materiału cyfrowego) i grupuje je tematycznie.", students: "Zapisują pytanie wynikające z materiału. Jeśli nie mieli materiału, czytają kartę z podsumowaniem." },
    { min: 5, title: "Najczęstszy błąd z quizu", teacher: "Pokazuje rozkład odpowiedzi z quizu przygotowawczego i wyjaśnia jedno najczęściej mylone pojęcie.", students: "Poprawiają własną odpowiedź w quizie." },
    { min: 20, title: "Warsztat: przypadek", teacher: "Daje przypadek i pracuje przy parach, które nie zaczęły po 5 minutach.", students: "Pary rozwiązują przypadek i zapisują decyzję z uzasadnieniem." },
    { min: 6, title: "Porównanie rozwiązań", teacher: "Zestawia dwa różne rozwiązania i pyta o różnicę.", students: "Wskazują mocną stronę i ryzyko każdego z nich." },
    { min: 4, title: "Zapowiedź follow-upu", teacher: "Zapowiada termin pytania powrotnego (za 1–2 tygodnie) i zapisuje je w swoim kalendarzu.", students: "Zapisują jedną rzecz, którą chcą sprawdzić po tygodniu." }
  ],
  decisionPoint: "Jeżeli mniej niż połowa klasy zrobiła przygotowanie, nie zaczynaj warsztatu od pytań. Daj 8-minutową kartę z podsumowaniem i skróć przypadek.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Technik elektryk: przewody i bezpieczna kontrola obwodu",
      context: "Klasa 2. Cykl na 3 tygodnie: tydzień 0 przygotowanie (quiz z pięciu pytań), tydzień 1 warsztat, tydzień 3 pytanie powrotne. Bez wykonywania czynności przy instalacji. Ćwiczenie planowania na papierze.",
      goal: "Uczeń zna oznaczenia barw przewodów i potrafi zaplanować kolejność sprawdzania obwodu.",
      materials: [
        { t: "Quiz przygotowawczy z kluczem", table: { head: ["Pytanie", "Odpowiedź"], rows: [
          ["Jaki kolor izolacji ma przewód ochronny PE?", "żółto-zielony"],
          ["Jaki kolor ma przewód neutralny N?", "niebieski (jasnoniebieski)"],
          ["Jakie kolory mogą mieć przewody fazowe?", "brązowy, czarny, szary"],
          ["Jaką rolę pełni przewód PE?", "służy do ochrony przeciwporażeniowej. Nie prowadzi prądu roboczego odbiornika."],
          ["Co robisz najpierw przed pracą przy instalacji?", "odłączasz zasilanie, zabezpieczasz przed ponownym załączeniem, sprawdzasz brak napięcia"]
        ] } },
        { t: "Przypadek na warsztat", text: "W pokoju nie świeci światło i nie działają dwa gniazda. Wszystkie trzy elementy są na tym samym obwodzie. Zaplanujcie na papierze kolejność sprawdzania od rozdzielnicy do odbiorników. Przy każdym kroku napiszcie, co sprawdzacie i co wnioskujecie po wyniku." }
      ],
      key: "Sensowna kolejność: (1) stan zabezpieczenia obwodu w rozdzielnicy (czy zadziałało), (2) po odłączeniu i potwierdzeniu braku napięcia: sprawdzenie połączeń w puszce rozgałęźnej wspólnej dla odbiorników, (3) łącznik, (4) oprawa i gniazda. Uczniowie mają uzasadnić kolejność (wspólny punkt awarii przed pojedynczymi odbiornikami). Skonsultuj przypadek z nauczycielem elektryki. Zasady pomiarów pod napięciem nie są tematem tej lekcji.",
      errors: ["zaczęcie od wymiany oprawy mimo tego, że gniazda też nie działają", "pominięcie sprawdzenia braku napięcia przed dotknięciem przewodów", "pomylenie przewodu neutralnego z ochronnym"]
    },
    {
      kind: "ogolny",
      label: "Geografia: wybór lokalizacji farmy wiatrowej",
      context: "Tydzień 0: quiz z odczytu tabeli i skali (3 pytania). Tydzień 1: warsztat. Tydzień 3: pytanie powrotne z inną lokalizacją. Dane przykładowe.",
      goal: "Uczeń wybiera lokalizację według kilku kryteriów i uzasadnia odrzucenie pozostałych.",
      materials: [
        { t: "Dane (przykładowe)", table: { head: ["Lokalizacja", "Średnia prędkość wiatru", "Odległość od zabudowy", "Dojazd"], rows: [["A", "6,8 m/s", "600 m", "droga utwardzona"], ["B", "7,5 m/s", "350 m", "droga gruntowa"], ["C", "5,2 m/s", "1200 m", "droga utwardzona"]] } },
        { t: "Założenia lekcji", text: "Przyjmujemy na potrzeby lekcji: minimalna odległość od zabudowy 500 m, przeciętnie opłacalne są lokalizacje od 6 m/s. Zadanie nie zastępuje przepisów." },
        { t: "Polecenie", text: "Wybierz lokalizację i napisz, dlaczego pozostałe odpadają. Nie wystarczy wskazać literę." }
      ],
      key: "B odpada (350 m < 500 m) mimo najlepszego wiatru. C odpada (5,2 m/s < 6 m/s). Wybór: A. Warto dodać, że dla B można szukać działki dalej od zabudowy.",
      errors: ["wybór B tylko ze względu na wiatr", "brak uzasadnienia odrzucenia pozostałych lokalizacji"]
    }
  ],
  tech: {
    none: "Przygotowanie: karta z tekstem i pięcioma pytaniami do zrobienia na końcu poprzedniej lekcji. Follow-up: jedno pytanie na kartce za tydzień.",
    computer: "Quiz przygotowawczy i pytanie powrotne mogą być na ZPE lub w formularzu szkoły. Warsztat odbywa się na papierze.",
    phone: "Kod QR do quizu przygotowawczego i do pytania powrotnego. Warsztat bez telefonów.",
    ai: "AI może przygotować 5 pytań do quizu z Twojej notatki. Zanim pójdą do klasy, sprawdź, czy każdą odpowiedź da się znaleźć w materiale."
  },
  pitfalls: [
    { mistake: "Przygotowanie trwa 40 minut i nikt go nie robi.", instead: "Materiał 10–15 minut, jedno zadanie, jasny termin. Plan B dla osób bez przygotowania jest częścią scenariusza." },
    { mistake: "Quiz przygotowawczy nie ma wpływu na warsztat.", instead: "Pokaż rozkład odpowiedzi i zacznij od najczęściej mylonej rzeczy." },
    { mistake: "Nie ma follow-upu i ewaluacji.", instead: "Zapisz termin pytania powrotnego, zanim skończysz warsztat." }
  ],
  check: { how: "Porównaj wynik quizu przed warsztatem i pytania powrotnego po 2–3 tygodniach tym samym kryterium.", decision: "Jeśli wynik po tygodniach wraca do poziomu sprzed warsztatu, dodaj jeszcze jedno zadanie follow-upowe." },
  sources: [
    { title: "WP3.A5 Implementation methods and models for learning with digital technologies (wersja robocza, IBC, Dania)", type: "materiał projektowy", url: "projekt.html#wp3a5", note: "Szablon czterech faz i przykładowy harmonogram: przygotowanie, warsztat, follow-up, ewaluacja." },
    { title: "Norberg, Dziuban, Moskal: Blended Learning: An Innovative Approach (EDUCAUSE Review, 2017)", type: "artykuł", url: "https://files.eric.ed.gov/fulltext/EJ1124666.pdf", note: "Źródło wskazane w materiale WP3.A5." },
    { title: "Hrastinski: What Do We Mean by Blended Learning? (TechTrends, 2019)", type: "artykuł przeglądowy", url: "https://doi.org/10.1007/s11528-019-00375-5", note: "Pokazuje wielość definicji i potrzebę jasnego projektu połączenia form." }
  ],
  related: ["360 e-learning", "Flipped classroom", "Przypominanie i powroty"]
};
