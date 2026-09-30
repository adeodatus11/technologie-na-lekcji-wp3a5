export default {
  file: "metoda-ocenianie-ksztaltujace.html",
  title: "Ocenianie kształtujące i poprawa",
  group: "core",
  short: "Jedno pytanie do wszystkich naraz pokazuje, co klasa myli. Potem uczeń dostaje jedną wskazówkę i poprawia pracę na lekcji.",
  aliases: ["formative assessment", "pytanie diagnostyczne", "hinge question", "exit ticket", "informacja zwrotna", "feedback", "OK"],
  evidence: { level: "mocne", label: "Mocne, ale zależne od wdrożenia", note: "Przeglądy (Black i Wiliam) i wytyczne EEF o informacji zwrotnej wskazują przeciętnie wyraźny, lecz bardzo zróżnicowany efekt. Zależy od treści komentarza, od tego, czy uczeń ma czas na poprawę, i od tego, co nauczyciel zrobi z odpowiedziami klasy. Niezależna ewaluacja programu Embedding Formative Assessment dotyczyła całego programu szkoleń, nie pojedynczych technik." },
  categories: ["feedback", "zaangazowanie"],
  tags: ["kartoniki A–D", "kod kryterium", "druga wersja"],
  definition: "Nauczyciel zbiera odpowiedź każdego ucznia na jedno pytanie diagnostyczne i zmienia dalszą lekcję. Potem uczeń dostaje wskazówkę do jednego kryterium i poprawia swoją pracę.",
  how: [
    "Pytanie diagnostyczne ma odpowiedzi, z których każda odpowiada innemu typowemu błędowi. Wszyscy odpowiadają jednocześnie (kartoniki A–D, palce, kartka), więc widzisz rozkład odpowiedzi całej klasy. Z góry zapisujesz, co zrobisz, jeśli większość wybierze odpowiedź poprawną, jeśli klasa będzie podzielona i jeśli większość wybierze błędną.",
    "Druga połowa metody to poprawa. Uczeń dostaje jeden komentarz odnoszący się do jawnego kryterium (np. kod K2: „uwzględnij warunki transportu”) i czas na zmianę swojej pracy. Komentarz bez czasu na poprawę nie jest informacją zwrotną, tylko oceną."
  ],
  differs: [
    { with: "Przypominanie i powroty", text: "Tu odpowiedzi klasy zmieniają przebieg lekcji. W przypominaniu nauczyciel niczego nie zmienia, uczeń ćwiczy pamięć." },
    { with: "Mastery learning", text: "Tu decyzja dotyczy najbliższego kroku lekcji. W mastery jest próg opanowania i osobna ścieżka korekty." },
    { with: "Metapoznanie", text: "Tu informację zwrotną daje nauczyciel, para lub klucz. W metapoznaniu uczeń sam planuje i kontroluje własną pracę." }
  ],
  when: {
    good: ["po wyjaśnieniu nowego pojęcia, zanim przejdziesz do zadania", "gdy widzisz, że część klasy liczy lub myśli inaczej niż reszta", "zadanie, które można poprawić w tej samej lekcji (akapit, plan, decyzja, obliczenie)"],
    notFor: ["długie prace, których poprawa zajmie więcej niż jedną lekcję", "sytuacja, w której nie masz jak zmienić kolejnego kroku lekcji", "pytania z jedną oczywistą odpowiedzią"]
  },
  lesson: [
    { min: 3, title: "Cel i dwa kryteria", teacher: "Zapisuje cel lekcji i dwa kryteria sukcesu (np. K1, K2).", students: "Przepisują kryteria w nagłówku karty." },
    { min: 7, title: "Krótkie wyjaśnienie", teacher: "Wyjaśnia nowe pojęcie na jednym przykładzie.", students: "Notują jedno zdanie własnymi słowami." },
    { min: 8, title: "Pytanie A–D i decyzja nauczyciela", teacher: "Pokazuje pytanie z czterema odpowiedziami. Na sygnał wszyscy podnoszą kartonik. Liczy je i wybiera jedną z trzech ścieżek: dalej, rozmowa w parach i ponowne głosowanie, krótkie ponowne wyjaśnienie.", students: "Odpowiadają jednocześnie, w parze mówią jeden powód wyboru. Głosują ponownie, jeśli nauczyciel zdecyduje o rozmowie." },
    { min: 12, title: "Zadanie: pierwsza wersja", teacher: "Daje zadanie z tymi samymi kryteriami. Obserwuje i zbiera dwa typowe błędy.", students: "Wykonują zadanie samodzielnie." },
    { min: 10, title: "Jeden komentarz, poprawa i zdanie na wyjście", teacher: "Daje każdemu kod kryterium (np. K2) i jedno pytanie. Nie komentuje całych prac. Na koniec zbiera kartki.", students: "Poprawiają wskazany fragment i zaznaczają zmianę kolorem. Piszą jedno zdanie: „Zmieniłem…, ponieważ…”" }
  ],
  decisionPoint: "Ustal przed lekcją: powyżej 70% poprawnych odpowiedzi idziesz dalej, 30–70% dajesz rozmowę w parach i drugie głosowanie, poniżej 30% wyjaśniasz jeszcze raz na innym przykładzie.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Technik logistyk: dobór opakowania",
      context: "Klasa 2. Uczniowie dobierają opakowanie do delikatnego towaru. Kartoniki A–D albo kartki.",
      goal: "Uczeń wybiera opakowanie na podstawie masy, wrażliwości na wstrząsy i warunków transportu.",
      materials: [
        { t: "Pytanie diagnostyczne", text: "Przesyłka: drukarka biurowa 14 kg, transport kurierski, możliwe wstrząsy i piętrowanie do dwóch warstw. Które opakowanie wybierasz?" },
        { t: "Odpowiedzi (każda odpowiada innemu błędowi)", studentCols: [0], table: { head: ["Odpowiedź", "Jaki błąd odsłania"], rows: [
          ["A. Worek foliowy z taśmą", "uznanie, że lekka ochrona wystarcza"],
          ["B. Karton jednowarstwowy bez wypełnienia", "zakładanie, że karton wystarczy"],
          ["C. Karton pięciowarstwowy z wypełnieniem (pianka/folia bąbelkowa) i taśmą po krawędziach", "poprawna"],
          ["D. Karton trójwarstwowy z luzem 10 cm wokół, bez wypełnienia", "brak stabilizacji towaru w środku"]
        ] } },
        { t: "Zadanie (pierwsza wersja)", text: "Dobierz opakowanie do zegara ściennego (1,2 kg) wysyłanego kurierem i do zgrzewki wody (9 kg) wysyłanej paletą. Napisz po dwa uzasadnienia." },
        { t: "Kody komentarza", list: ["K1: odwołaj się do masy towaru.", "K2: uwzględnij wstrząsy i piętrowanie w transporcie.", "K3: opisz, jak zabezpieczasz towar w środku opakowania."] }
      ],
      key: "Poprawna odpowiedź: C. Przy zadaniu: zegar wymaga kartonu z wypełnieniem i zabezpieczeniem szkła, zgrzewka wody wymaga folii i palety z zabezpieczeniem przed przesunięciem. Kryteria: masa, transport, zabezpieczenie wnętrza.",
      errors: ["wybór opakowania tylko według ceny", "pominięcie piętrowania", "brak zabezpieczenia towaru w środku"]
    },
    {
      kind: "ogolny",
      label: "Matematyka: procent po obniżce i podwyżce",
      context: "Dowolna klasa, kartoniki A–D. Uczniowie znają pojęcie procentu, ale zwykle nie zastanawiają się, od jakiej wartości go liczą.",
      goal: "Uczeń odróżnia zmianę procentową liczoną od różnych podstaw i uzasadnia wybór jednym zdaniem.",
      materials: [
        { t: "Pytanie diagnostyczne", text: "Cena 80 zł została obniżona o 25%, a potem nowa cena została podniesiona o 25%. Ile wynosi cena końcowa?" },
        { t: "Odpowiedzi", studentCols: [0], table: { head: ["Odpowiedź", "Jaki błąd odsłania"], rows: [["A. 80 zł", "uznanie, że procenty się znoszą"], ["B. 75 zł", "poprawna"], ["C. 100 zł", "pomylenie kierunku zmiany"], ["D. 60 zł", "pominięcie drugiej zmiany"]] } },
        { t: "Zadanie (pierwsza wersja)", text: "Cena 200 zł wzrosła o 10%, a potem spadła o 10%. Czy jest taka sama? Zapisz obliczenia. Kryterium K1: podstawa procentu w każdym kroku." }
      ],
      key: "B. 80 · 0,75 = 60, 60 · 1,25 = 75. W zadaniu: 200 · 1,1 = 220, 220 · 0,9 = 198. Nie jest taka sama.",
      errors: ["obliczenie obu zmian od ceny pierwotnej", "przekonanie, że obniżka i podwyżka o tyle samo procent dają cenę wyjściową"]
    }
  ],
  tech: {
    none: "Kartoniki A–D (kartka złożona na cztery litery) lub palce. To cała technologia, której potrzebuje ta metoda.",
    computer: "Formularz lub narzędzie do głosowania pokaże rozkład. Kartoniki są szybsze, gdy klasa ma 30 osób i wolny Wi-Fi.",
    phone: "Jedno głosowanie anonimowe. Pytanie i cel muszą być widoczne przed uruchomieniem urządzeń.",
    ai: "AI może zaproponować błędne odpowiedzi oparte na typowych nieporozumieniach. Zostaw tylko te, które uczeń naprawdę mógłby wybrać."
  },
  pitfalls: [
    { mistake: "Zbierasz odpowiedzi, ale dalsza lekcja wygląda tak samo.", instead: "Zapisz przed lekcją, co zrobisz przy trzech możliwych rozkładach." },
    { mistake: "Komentarz wymienia wszystkie usterki.", instead: "Jeden kod, jedno kryterium, jedna zmiana w ciągu kilku minut." },
    { mistake: "Nie ma czasu na poprawę.", instead: "Zarezerwuj minimum 7 minut w tej samej lekcji." }
  ],
  check: { how: "Zapisz rozkład odpowiedzi, podjętą decyzję i wynik drugiej próby. Porównaj pierwszą i poprawioną wersję tylko pod względem wskazanego kryterium.", decision: "Jeśli pytanie zawsze ma jedną dominującą odpowiedź, zmień je, bo nie niesie informacji." },
  sources: [
    { title: "EEF: Teacher Feedback to Improve Pupil Learning", type: "wytyczne oparte na syntezie badań", url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback", note: "Zalecenia dotyczące treści, czasu i wykorzystania informacji zwrotnej." },
    { title: "Black, Wiliam: Inside the Black Box (2010)", type: "artykuł programowy", url: "https://doi.org/10.1177/003172171009200119", note: "Klasyczne ujęcie oceniania kształtującego." },
    { title: "EEF: Embedding Formative Assessment", type: "niezależna ewaluacja programu", url: "https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/embedding-formative-assessment", note: "Ewaluacja konkretnego programu wdrożeniowego, nie dowód każdej techniki osobno." }
  ],
  related: ["Przypominanie i powroty", "Mastery learning", "Metapoznanie"]
};
