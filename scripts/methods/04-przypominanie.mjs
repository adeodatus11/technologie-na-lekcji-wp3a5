export default {
  file: "metoda-przypominanie-i-powroty.html",
  title: "Przypominanie i powroty",
  group: "core",
  short: "Uczeń najpierw próbuje sobie przypomnieć bez notatek, a ta sama treść wraca po kilku dniach i tygodniach.",
  aliases: ["retrieval practice", "practice testing", "spacing", "powtórki rozłożone w czasie", "pytania wejścia"],
  evidence: { level: "mocne", label: "Mocne", note: "Dunlosky i in. (2013) oceniają zarówno practice testing, jak i distributed practice jako techniki o wysokiej użyteczności. Wytyczne IES (What Works Clearinghouse) zalecają quizowanie i rozkładanie nauki w czasie. Największe ograniczenie: większość badań dotyczy prostych pytań i krótkich odstępów, a nie całej klasy zawodowej." },
  categories: ["pamiec", "feedback"],
  tags: ["pytania wejścia", "kartka bez notatek", "karta powrotów"],
  definition: "Uczeń zapisuje z pamięci odpowiedź, sprawdza ją i poprawia, a potem ta sama treść wraca po dwóch dniach, po tygodniu i po kilku tygodniach.",
  how: [
    "Wysiłek przypomnienia wzmacnia późniejszą dostępność wiedzy bardziej niż ponowne czytanie notatki. Korzyść rośnie, gdy po próbie następuje sprawdzenie i poprawa. Drugi składnik to odstęp: im później wiedza wraca i im bardziej trzeba się wysilić, żeby ją odzyskać, tym lepiej zostaje w pamięci. Dlatego to, co uczniowie umieli po lekcji, po tygodniu zwykle już nie jest pewne.",
    "Praktycznie: 3–4 pytania na początku lekcji (część z poprzedniej lekcji, część sprzed 2–3 tygodni), odpowiedzi na kartce, sprawdzenie z kluczem i jedna karta powrotów, w której nauczyciel zapisuje, co i kiedy wraca. Przykładowy odstęp: 2 dni, tydzień, 3–4 tygodnie. To propozycja autorska, bo badania nie podają jednego kalendarza. Optymalny odstęp zależy od tego, jak długo wiedza ma być pamiętana."
  ],
  differs: [
    { with: "Ocenianie kształtujące", text: "Tu uczeń ćwiczy pamięć, a nauczyciel nie musi niczego zmieniać w lekcji. W ocenianiu kształtującym odpowiedzi klasy zmieniają dalszą lekcję." },
    { with: "Mastery learning", text: "Tu pytania wracają niezależnie od wyniku. W mastery wynik jednego warunku decyduje, czy uczeń idzie dalej, czy do korekty." },
    { with: "Blended learning", text: "Follow-up w blended to zadanie z informacją zwrotną. Tu to krótkie pytania z pamięci, bez obowiązkowego materiału cyfrowego." }
  ],
  when: {
    good: ["wiedza jest potrzebna w kolejnych działach (symbole, jednostki, nazwy, kolejność czynności)", "uczniowie mówią „to było”, a nie potrafią odpowiedzieć", "przed egzaminem zawodowym lub praktyką"],
    notFor: ["pytania o drobne szczegóły bez znaczenia dla dalszej nauki", "sytuacje, w których nie ma czasu na sprawdzenie i poprawę (bez nich to kartkówka)", "treści jeszcze nieuczone"]
  },
  lesson: [
    { min: 4, title: "Cztery pytania bez notatek", teacher: "Wyświetla 4 pytania (2 z poprzedniej lekcji, 2 sprzed 2–3 tygodni) i mówi wprost, że nie będzie oceny.", students: "Piszą odpowiedzi. Przy każdej zaznaczają, czy są pewni, czy nie." },
    { min: 8, title: "Sprawdzenie, poprawa i jedna luka", teacher: "Czyta odpowiedzi. Po każdym pytaniu prosi o podniesienie ręki, kto miał dobrze. Pytanie z największą liczbą błędów wyjaśnia na przykładzie i kontrprzykładzie.", students: "Poprawiają odpowiedzi innym kolorem. Ich pierwsza wersja zostaje widoczna. Dopisują jedno zdanie wyjaśnienia." },
    { min: 22, title: "Nowy temat", teacher: "Prowadzi nowy materiał, który korzysta z przypomnianej wiedzy.", students: "Pracują nad nowym tematem." },
    { min: 6, title: "Powrót na koniec", teacher: "Zadaje ponownie najtrudniejsze pytanie z początku. Zapisuje w karcie powrotów, co wróci za tydzień i za trzy.", students: "Odpowiadają jeszcze raz bez podglądania poprawnej wersji." }
  ],
  decisionPoint: "Jeżeli prawie nikt nie odpowiedział na pytanie, nie przeciągaj zgadywania. Podaj odpowiedź z krótkim wyjaśnieniem i zapisz pytanie do wcześniejszego powrotu.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Technik/mechanik pojazdów: układ ładowania",
      context: "Klasa 2 technikum lub 1–2 klasa branżowej szkoły I stopnia. Uczniowie przed analizą przypadku przypominają podstawy układu ładowania. Bez wykonywania czynności przy pojeździe.",
      goal: "Uczeń przywołuje typowe wartości napięć i nazwy elementów, a potem ocenia wynik pomiaru.",
      materials: [
        { t: "Pięć pytań z kluczem", studentCols: [0], table: { head: ["Pytanie", "Odpowiedź"], rows: [
          ["Jakie napięcie pokazuje woltomierz na zaciskach w pełni naładowanego, sprawnego akumulatora 12 V przy wyłączonym silniku?", "około 12,6–12,8 V"],
          ["Jakie napięcie na akumulatorze powinien dawać sprawny układ ładowania przy pracującym silniku (ok. 2000 obr./min)?", "około 13,8–14,4 V"],
          ["Jak nazywa się element, który zamienia energię mechaniczną silnika na elektryczną?", "alternator (prądnica z prostownikiem)"],
          ["Do czego służy regulator napięcia?", "utrzymuje napięcie ładowania w zakresie niezależnie od obrotów i obciążenia"],
          ["Jakim przyrządem i w jakiej jednostce mierzysz napięcie?", "woltomierz lub multimetr, w woltach (V)"]
        ] } },
        { t: "Przypadek po sprawdzeniu", text: "Kontrolka ładowania świeci po uruchomieniu silnika. Napięcie na akumulatorze przy 2000 obr./min wynosi 12,3 V. Zapisz wniosek i trzy kolejne kontrole w kolejności." }
      ],
      key: "Wniosek: układ nie ładuje (napięcie poniżej wartości ładowania, praktycznie poziom akumulatora bez ładowania). Sensowne kontrole: (1) stan i napięcie paska napędowego, (2) połączenia elektryczne alternatora (masa, zacisk główny, kontrolka), (3) regulator napięcia i alternator. Przypadek skonsultuj z nauczycielem przedmiotu. Wartości napięć zależą od modelu pojazdu i temperatury.",
      errors: ["podanie wartości bez jednostki", "mylenie napięcia akumulatora w spoczynku z napięciem ładowania", "rozpoczęcie od wymiany alternatora bez prostszych kontroli"],
      schedule: "Karta powrotów: po 2 dniach pytania 1–2 w innym ujęciu, po tygodniu pytania 3–4 w przypadku, po 3 tygodniach pytanie 5 razem z nowym pomiarem."
    },
    {
      kind: "ogolny",
      label: "Biologia: fotosynteza",
      context: "Dowolna klasa. Przed nowym tematem (oddychanie komórkowe) uczniowie przypominają fotosyntezę.",
      goal: "Uczeń przywołuje równanie fotosyntezy i umie wskazać, skąd roślina bierze substraty.",
      materials: [
        { t: "Pytania z kluczem", studentCols: [0], table: { head: ["Pytanie", "Odpowiedź"], rows: [
          ["Zapisz słownie substraty i produkty fotosyntezy.", "substraty: dwutlenek węgla i woda. Produkty: glukoza i tlen"],
          ["W której organelli zachodzi fotosynteza?", "w chloroplastach"],
          ["Jaką rolę pełni chlorofil?", "pochłania energię światła"],
          ["Którędy CO₂ wchodzi do liścia?", "przez aparaty szparkowe"]
        ] } },
        { t: "Przypadek po sprawdzeniu", text: "Roślina doniczkowa stoi dwa dni w zupełnie ciemnym pomieszczeniu. Czy w tym czasie zachodzi w niej fotosynteza? Czy roślina oddycha? Uzasadnij odpowiedź, korzystając z pytań powyżej." },
        { t: "Przypomnienie po tygodniu", later: true, text: "Dlaczego w pełnym słońcu, przy zamkniętych aparatach szparkowych (upał), fotosynteza zwalnia?" }
      ],
      key: "Równanie: 6CO₂ + 6H₂O + światło → C₆H₁₂O₆ + 6O₂. Substraty: dwutlenek węgla i woda. Produkty: glukoza i tlen. Przypadek w ciemni: fotosynteza nie zachodzi bez światła, ale roślina oddycha cały czas (oddychanie komórkowe), co łączy starą wiedzę z nowym tematem. Pytanie po tygodniu: przy zamkniętych aparatach szparkowych CO₂ nie wchodzi do liścia, substrat się kończy, więc tempo fotosyntezy spada.",
      errors: ["mylenie substratów z produktami", "pomijanie roli aparatów szparkowych"],
      schedule: "Po 2 dniach pytanie 1 w formie luki, po tygodniu pytanie o aparaty szparkowe, po 3 tygodniach pytanie o oddychanie (połączenie starej i nowej wiedzy)."
    }
  ],
  tech: {
    none: "Pytania na tablicy, odpowiedzi na małej kartce. Karta powrotów to tabela w Twoim zeszycie: temat, data pierwszej lekcji, terminy powrotów.",
    computer: "Jeśli ZPE ma ćwiczenie z automatycznym sprawdzaniem, możesz go użyć do przypomnienia. Omów jednak z klasą najczęstsze błędy. Samo kliknięcie wyniku nie wystarczy.",
    phone: "Trzy pytania po kodzie QR. Po wysłaniu odpowiedzi telefon wraca do plecaka.",
    ai: "Wklej notatkę i poproś o 10 pytań z kluczem. Odrzuć pytania, na które odpowiedzi nie ma w notatce, i pytania o drobiazgi."
  },
  pitfalls: [
    { mistake: "Zamieniasz krótki start w kartkówkę z oceną.", instead: "Powiedz, że nie ma stopnia, i sprawdź odpowiedzi od razu. Stopień zabija próbę przypomnienia." },
    { mistake: "Pytania dotyczą przypadkowych szczegółów.", instead: "Zapytaj o to, bez czego nie da się zrobić następnego zadania." },
    { mistake: "Wszystkie powroty mają taką samą formę.", instead: "Przechodź od rozpoznania do wyjaśnienia i zastosowania w nowym przypadku." }
  ],
  check: { how: "Zapytaj o to samo po tygodniu i po 3–4 tygodniach. Policz, ilu uczniów odpowiada poprawnie i bez podpowiedzi.", decision: "Pytania, na które klasa stale odpowiada dobrze, wychodzą z karty powrotów. Te, które wracają błędnie, zyskują wcześniejszy termin." },
  sources: [
    { title: "Dunlosky i in.: Improving Students' Learning With Effective Learning Techniques (2013)", type: "przegląd badań", url: "https://pubmed.ncbi.nlm.nih.gov/26173288/", note: "Practice testing i distributed practice jako techniki o wysokiej użyteczności." },
    { title: "IES: Organizing Instruction and Study to Improve Student Learning", type: "wytyczne oparte na przeglądzie badań", url: "https://ies.ed.gov/ncee/wwc/PracticeGuide/1", note: "Rekomendacje: rozkładanie nauki w czasie i quizowanie." }
  ],
  related: ["Ocenianie kształtujące i poprawa", "Mastery learning", "Współpraca: grupy z rolami i tutoring w parach"]
};
