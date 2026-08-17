import { methodAdaptations } from "./method-adaptations.mjs";

const baseMethods = [
  {
    file: "method-1.html",
    title: "360 e-learning",
    short: "Pełny cykl pracy ucznia na platformie: materiał, zadanie, informacja zwrotna, poprawa i zapis postępu.",
    sourceBadge: "Inspiracja projektowa WP3.A5",
    sourceType: "Materiał projektowy i adaptacja dydaktyczna",
    sourceNote: "Metoda została opracowana na podstawie materiałów WP3.A5 \"Learning with digital technologies\", przygotowanych przez IBC w Danii, a następnie dostosowana do realiów zwykłej polskiej szkoły stacjonarnej. Nazwa 360 e-learning pochodzi z modelu IBC i nie jest powszechnie ustalonym terminem naukowym.",
    categories: ["przygotowanie", "feedback", "zaangazowanie", "technologia"],
    tags: ["ZPE", "cykl uczenia się", "portfolio"],
    definition: "360 e-learning to spójne środowisko uczenia się, w którym materiał, ćwiczenie, feedback, poprawa i dokumentowanie postępu tworzą jeden cykl.",
    mechanism: "Uczeń nie kończy pracy na obejrzeniu zasobu. Musi wykonać zadanie, otrzymać informację o wyniku i wrócić do błędu lub kolejnego kroku. W zwykłej szkole tę logikę można zrealizować podczas lekcji z użyciem ZPE, papieru i rozmowy z nauczycielem. Platforma porządkuje zasoby i odpowiedzi, ale nauczyciel nadal wyjaśnia, obserwuje i podejmuje decyzje.",
    uses: [
      "praca uczniów w różnym tempie nad tym samym zakresem",
      "powtórka przed egzaminem lub zadaniem praktycznym",
      "analiza przypadku zakończona poprawą odpowiedzi",
      "gromadzenie kolejnych wersji prac w portfolio"
    ],
    lesson: [
      ["0-5 min", "Cel i kryterium", "Nauczyciel pokazuje, jaki produkt ma powstać i po czym będzie można rozpoznać poprawną odpowiedź."],
      ["5-15 min", "Materiał wejściowy", "Uczniowie korzystają z krótkiego zasobu ZPE lub przygotowanego materiału i odpowiadają na dwa pytania kontrolne."],
      ["15-28 min", "Zadanie", "Każdy wykonuje analizę przypadku albo planuje procedurę. Nauczyciel wspiera uczniów, którzy utknęli na pierwszym kroku."],
      ["28-38 min", "Feedback i poprawa", "Uczeń dostaje wynik, wskazówkę lub komentarz i poprawia jeden konkretny element."],
      ["38-45 min", "Zapis postępu", "Uczeń zapisuje poprawioną wersję i jedno zdanie o zmianie. Nauczyciel notuje błąd, do którego warto wrócić." ]
    ],
    exampleTitle: "Analiza reklamacji klienta",
    example: "Uczniowie czytają na ZPE krótki opis reklamacji i zasady jej rozpatrywania. Wybierają decyzję, uzasadniają ją dwoma danymi z przypadku, otrzymują kryteria i porównują odpowiedź ze wzorcem. Następnie poprawiają uzasadnienie. Autorski przykład pokazuje organizację metody, nie wynik badania.",
    concentration: "Podziel ekran lub kartę na kolejne etapy. Na początku uczeń widzi tylko pierwszy krok i czas potrzebny do jego wykonania. Po każdym etapie powstaje mały, widoczny produkt. Nauczyciel wraca do zadania komunikatem: \"otwórz etap 2 i zaznacz jedną daną\", zamiast ogólnego \"skup się\".",
    tech: {
      none: "Teczka ucznia może zawierać materiał, kartę zadania, kryteria i dwie wersje odpowiedzi. Nauczyciel przekazuje feedback ustnie lub na karcie.",
      zpe: "ZPE może przechowywać materiał wejściowy, zadanie, miniquiz i odpowiedź ucznia. Wynik powinien prowadzić do rozmowy, korekty albo kolejnego zadania.",
      phone: "Telefon służy przez ustalony czas do otwarcia materiału, odpowiedzi na miniquiz lub przesłania krótkiego produktu. Po wykonaniu etapu wraca poza pole pracy.",
      ai: "AI może pomóc nauczycielowi przygotować warianty przypadku, pytania kontrolne i krótkie komentarze robocze. Nauczyciel sprawdza poprawność, poziom trudności i dane przed publikacją."
    },
    mistakes: [
      "utożsamienie 360 e-learningu z filmem 360 stopni lub sprzętem immersyjnym",
      "uznanie samego otwarcia materiału za dowód uczenia się",
      "zbyt długi materiał przed pierwszym zadaniem",
      "feedback bez czasu na poprawę",
      "przeniesienie całej odpowiedzialności za uczenie się na platformę"
    ],
    evaluation: {
      question: "Czy pełny cykl zwiększa liczbę uczniów, którzy kończą zadanie i poprawiają konkretny błąd?",
      evidence: "Porównaj liczbę rozpoczętych i ukończonych prac, pierwszą i poprawioną wersję oraz odpowiedź powtórkową po kilku dniach.",
      decision: "Zostaw tylko te elementy platformy, które prowadzą do widocznego działania ucznia lub decyzji nauczyciela."
    },
    sources: [
      { title: "WP3.A5 Learning with digital technologies, IBC Denmark", type: "materiał projektowy", url: "projekt.html#wp3a5", note: "Źródło nazwy i pełnego cyklu pracy." },
      { title: "Zintegrowana Platforma Edukacyjna: czym jest ZPE", type: "materiał instytucjonalny", url: "https://zpe.gov.pl/o-zpe", note: "Opis funkcji publicznej platformy." },
      { title: "EEF: Teacher Feedback to Improve Pupil Learning", type: "wytyczne oparte na syntezie badań", url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback", note: "Podstawa dla projektowania feedbacku i poprawy." }
    ],
    related: ["Blended learning", "Feedback prowadzący do poprawy", "Metapoznanie"]
  },
  {
    file: "method-2.html",
    title: "Blended learning",
    short: "Celowe połączenie materiału cyfrowego z wyjaśnieniem, ćwiczeniem, współpracą i follow-upem w klasie.",
    sourceBadge: "Inspiracja projektowa WP3.A5",
    sourceType: "Materiał projektowy i literatura przeglądowa",
    sourceNote: "Metoda została opracowana na podstawie materiałów WP3.A5 \"Learning with digital technologies\", przygotowanych przez IBC w Danii, a następnie dostosowana do realiów zwykłej polskiej szkoły stacjonarnej.",
    categories: ["przygotowanie", "modelowanie", "feedback", "technologia"],
    tags: ["ZPE", "aktywna lekcja", "follow-up"],
    definition: "Blended learning to celowo zaprojektowane połączenie aktywności cyfrowych i stacjonarnych, w którym każda część pełni inną funkcję dydaktyczną.",
    mechanism: "Materiał cyfrowy może przygotować, zdiagnozować albo utrwalić, a czas wspólny służy wyjaśnieniu, rozmowie, praktyce i korekcie. O wartości modelu nie decyduje liczba narzędzi, lecz związek między etapami. W tej adaptacji cały cykl może odbyć się w szkole, bez obowiązkowej pracy domowej.",
    uses: [
      "wprowadzenie pojęć przed analizą przypadku",
      "krótka diagnoza przed różnicowaniem zadań",
      "przygotowanie do ćwiczenia praktycznego",
      "powtórka i korekta błędów po lekcji"
    ],
    lesson: [
      ["0-7 min", "Cyfrowe wejście", "Uczniowie wykonują krótki zasób lub miniquiz. Nauczyciel zbiera odpowiedzi całej klasy."],
      ["7-15 min", "Wyjaśnienie", "Nauczyciel omawia najczęstszy błąd i modeluje kluczowy krok."],
      ["15-32 min", "Aktywność stacjonarna", "Pary analizują przypadek, wykonują zadanie albo porównują dwa rozwiązania."],
      ["32-40 min", "Wspólne domknięcie", "Klasa uzasadnia odpowiedzi, a nauczyciel porządkuje wnioski."],
      ["40-45 min", "Follow-up", "Uczeń poprawia odpowiedź lub wykonuje jedno pytanie powtórkowe, które wróci na kolejnej lekcji."]
    ],
    exampleTitle: "Czytanie dokumentacji technicznej",
    example: "Uczniowie najpierw zaznaczają w krótkim materiale ZPE symbole potrzebne do wykonania zadania. Nauczyciel omawia dwa najczęściej mylone oznaczenia. Następnie pary pracują z wydrukowanym fragmentem dokumentacji i planują kolejność czynności. Na końcu każdy poprawia jeden punkt planu. To autorska propozycja do adaptacji.",
    concentration: "Blok cyfrowy ogranicz do jednego celu i 5-7 minut. Przed jego uruchomieniem podaj uczniom pytanie, na które mają znaleźć odpowiedź. Po bloku natychmiast przejdź do działania na papierze, rozmowy lub konkretnego produktu, żeby ekran nie stał się źródłem bezcelowego przeglądania.",
    tech: {
      none: "Zastosuj drukowany materiał wejściowy, krótkie pytanie, modelowanie na tablicy i zadanie w parach. Mieszanie form nie wymaga internetu.",
      zpe: "Użyj ZPE do materiału wejściowego, miniquizu lub zadania korekcyjnego. Wyniki powinny wpływać na wyjaśnienie lub podział dalszej pracy.",
      phone: "Telefon może obsłużyć pojedynczy etap: kod QR do zasobu albo odpowiedź wyjścia. Ustal sygnał rozpoczęcia i zakończenia użycia.",
      ai: "AI może przygotować pytania do zasobu, trzy warianty podobnego przypadku i propozycję kryteriów. Nauczyciel zatwierdza treść i sam podejmuje decyzję o dalszej pracy."
    },
    mistakes: [
      "dodanie filmu lub quizu bez związku z dalszą częścią lekcji",
      "przeniesienie części cyfrowej do domu mimo braku warunków uczniów",
      "zbyt wiele zmian formy w jednej lekcji",
      "zbieranie wyników bez omówienia błędów",
      "zastępowanie praktyki zawodowej materiałem ekranowym"
    ],
    evaluation: {
      question: "Czy połączenie etapów poprawia wejście w zadanie i jakość produktu ucznia?",
      evidence: "Zestaw odpowiedzi z wejścia z końcowym produktem i zanotuj, ilu uczniów rozpoczęło pracę bez dodatkowego ponaglenia.",
      decision: "Jeśli blok cyfrowy nie zmienia kolejnego kroku, skróć go albo usuń."
    },
    sources: [
      { title: "WP3.A5 Learning with digital technologies, IBC Denmark", type: "materiał projektowy", url: "projekt.html#wp3a5", note: "Źródło czterofazowej logiki modelu." },
      { title: "Hrastinski: What Do We Mean by Blended Learning?", type: "artykuł przeglądowy", url: "https://doi.org/10.1007/s11528-019-00375-5", note: "Pokazuje wielość definicji i potrzebę jasnego projektu połączenia form." },
      { title: "Zintegrowana Platforma Edukacyjna", type: "materiał instytucjonalny", url: "https://zpe.gov.pl/o-zpe", note: "Możliwe środowisko dla części cyfrowej." }
    ],
    related: ["360 e-learning", "Ocenianie kształtujące", "Nauczanie jawne"]
  },
  {
    file: "method-3.html",
    title: "Flipped classroom",
    short: "Najpierw kontakt z materiałem, potem czas wspólny na wyjaśnianie, pytania, problem i zastosowanie.",
    sourceBadge: "Inspiracja projektowa WP3.A5",
    sourceType: "Materiał projektowy i metaanaliza",
    sourceNote: "Metoda została opracowana na podstawie materiałów WP3.A5 \"Learning with digital technologies\", przygotowanych przez IBC w Danii, a następnie dostosowana do realiów zwykłej polskiej szkoły stacjonarnej. Klasyczny flipped classroom zakłada kontakt z materiałem przed zajęciami. Wariant opisany tutaj przenosi przygotowanie do początku lekcji i jest adaptacją, a nie klasyczną definicją modelu.",
    categories: ["przygotowanie", "wspolpraca", "zaangazowanie", "projekt", "technologia"],
    tags: ["mikroprezentacja", "praca grupowa", "wyjaśnianie"],
    definition: "Flipped classroom odwraca kolejność: pierwszy kontakt z treścią poprzedza czas wspólny przeznaczony na wyjaśnianie, zastosowanie i informację zwrotną.",
    mechanism: "Uczeń przychodzi do aktywnej części lekcji z pierwszym obrazem treści, a nauczyciel może wykorzystać czas na pytania, ćwiczenie i korektę. W klasach, w których przygotowanie domowe byłoby barierą, materiał można przepracować na początku lekcji, a następnie poprosić grupy o wyjaśnienie małego fragmentu innym.",
    uses: [
      "opracowanie pojęć i symboli branżowych przez grupy",
      "mikroprezentacje o etapach procedury",
      "analiza kilku perspektyw tego samego przypadku",
      "przygotowanie pytań i przykładów do powtórki"
    ],
    lesson: [
      ["0-5 min", "Rama zadania", "Nauczyciel podaje cel, kryteria i dzieli temat na małe fragmenty."],
      ["5-17 min", "Przygotowanie", "Grupy korzystają z jednego sprawdzonego materiału i przygotowują wyjaśnienie, przykład oraz pytanie."],
      ["17-32 min", "Mikroprezentacje", "Każda grupa ma maksymalnie 3 minuty. Pozostali zapisują odpowiedź na pytanie grupy."],
      ["32-40 min", "Korekta", "Nauczyciel prostuje nieścisłości, łączy części i pokazuje poprawny model."],
      ["40-45 min", "Sprawdzenie", "Każdy uczeń odpowiada samodzielnie na pytanie obejmujące cały temat."]
    ],
    exampleTitle: "Etapy obsługi zlecenia",
    example: "Cztery grupy opracowują po jednym etapie obsługi zlecenia: przyjęcie, weryfikacja danych, wykonanie, przekazanie wyniku. Każda przygotowuje jedno wyjaśnienie, przykład poprawnego działania i typowy błąd. Nauczyciel na końcu scala etapy w pełną procedurę. To autorska propozycja lekcyjna.",
    concentration: "Zamiast polecenia \"przygotujcie prezentację\" daj format: jedno pojęcie, jeden przykład, jeden błąd, jedno pytanie. Przydziel krótkie role i ogranicz materiał źródłowy do jednego zasobu. Uczeń bierny może odpowiadać za wybór przykładu albo odczytanie pytania.",
    tech: {
      none: "Grupy pracują z wydrukiem i przygotowują dwuminutowe wyjaśnienie przy tablicy. Efektem jest wspólna notatka klasy.",
      zpe: "ZPE dostarcza jeden materiał źródłowy każdej grupie i może zebrać indywidualne pytanie końcowe.",
      phone: "Telefon służy do otwarcia przypisanego materiału lub uruchomienia krótkiej odpowiedzi po prezentacjach, nie do swobodnego wyszukiwania.",
      ai: "AI może pomóc nauczycielowi podzielić temat, przygotować pytania naprowadzające i kryteria mikroprezentacji. Rozwinięcie pracy z AI znajduje się na ai.covepolska.pl."
    },
    mistakes: [
      "nazwanie odwróconą klasą dowolnej prezentacji uczniowskiej",
      "zadanie zbyt szerokiego tematu bez materiałów i kryteriów",
      "założenie, że każdy uczeń przygotuje się w domu",
      "oddanie uczniom odpowiedzialności za korektę merytoryczną",
      "ocena efektownej prezentacji zamiast rozumienia treści"
    ],
    evaluation: {
      question: "Czy po przygotowaniu i prezentacjach uczniowie potrafią samodzielnie wyjaśnić całość, nie tylko fragment swojej grupy?",
      evidence: "Zbierz indywidualną odpowiedź końcową i sprawdź poprawność pojęcia, przykładu i związku między etapami.",
      decision: "Jeśli wiedza pozostaje podzielona między grupy, zwiększ czas na korektę i indywidualne domknięcie."
    },
    sources: [
      { title: "WP3.A5 Learning with digital technologies, IBC Denmark", type: "materiał projektowy", url: "projekt.html#wp3a5", note: "Źródło modelu projektowego." },
      { title: "Strelan, Osborn i Palmer: The flipped classroom, a meta-analysis", type: "metaanaliza", url: "https://doi.org/10.1016/j.edurev.2020.100314", note: "Synteza badań w szkolnictwie wyższym, dlatego przenoszenie wniosków do szkoły wymaga ostrożności." },
      { title: "Zintegrowana Platforma Edukacyjna", type: "materiał instytucjonalny", url: "https://zpe.gov.pl/o-zpe", note: "Źródło materiałów do pierwszego kontaktu z treścią." }
    ],
    related: ["Uczenie kooperacyjne", "Nauczanie dialogowe", "Problem, projekt i przypadek"]
  },
  {
    file: "metoda-retrieval-practice.html",
    title: "Retrieval practice",
    short: "Krótkie wydobywanie wiedzy z pamięci zamiast kolejnego biernego czytania notatki.",
    sourceBadge: "Badania nad pamięcią",
    sourceType: "Przeglądy badań i wytyczne IES",
    sourceNote: "Podstawa metody pochodzi z badań nad aktywnym wydobywaniem wiedzy. Najbezpieczniejszy wariant szkolny to krótkie pytania o niskiej stawce, po których następuje korekta błędów.",
    categories: ["pamiec", "zaangazowanie", "feedback", "technologia"],
    tags: ["miniquiz", "pytania wejścia", "przypominanie"],
    definition: "Retrieval practice to ćwiczenie polegające na próbie przypomnienia sobie wiedzy bez podglądania materiału, a następnie sprawdzeniu i korekcie odpowiedzi.",
    mechanism: "Próba wydobycia informacji wzmacnia późniejszą dostępność wiedzy i ujawnia luki. Korzyść nie wynika z samego testowania ani oceny, lecz z wysiłku przypomnienia, informacji o poprawności i ponownego kontaktu z ważną treścią.",
    uses: [
      "krótkie otwarcie lekcji",
      "przypomnienie etapów procedury przed praktyką",
      "powtórka po kilku lekcjach",
      "diagnoza pojęć przed nowym tematem"
    ],
    lesson: [
      ["0-4 min", "Przypomnienie", "Uczniowie odpowiadają bez notatek na trzy krótkie pytania."],
      ["4-8 min", "Sprawdzenie", "Porównują odpowiedzi ze wzorcem i zaznaczają pewność."],
      ["8-15 min", "Korekta", "Nauczyciel omawia jeden wspólny błąd i łączy go z celem lekcji."],
      ["15-38 min", "Nowa praca", "Klasa wykonuje zadanie wymagające przywołanej wiedzy."],
      ["38-45 min", "Powrót", "Uczniowie ponownie odpowiadają na najtrudniejsze pytanie i zapisują poprawną regułę."]
    ],
    exampleTitle: "Symbole i zasady bezpieczeństwa",
    example: "Przed analizą instrukcji uczniowie z pamięci zapisują znaczenie trzech symboli i jeden obowiązkowy krok. Po sprawdzeniu wykorzystują je do wykrycia błędu w procedurze. Pytania wracają tydzień później w innej kolejności. Przykład jest propozycją organizacyjną.",
    concentration: "Daj maksymalnie trzy pytania i widoczny limit czasu. Pierwsze powinno umożliwić szybki start. Nie wymagaj zgłaszania się na forum od razu. Najpierw odpowiedź indywidualna, potem krótkie porównanie w parze.",
    tech: {
      none: "Pytania mogą być na tablicy, a odpowiedzi na małej kartce. Sprawdzenie odbywa się ze wzorcem lub w parze.",
      zpe: "Miniquiz ZPE może automatycznie pokazać odpowiedź, ale nauczyciel powinien omówić wzorzec błędów klasy.",
      phone: "Telefon może obsłużyć trzy pytania po kodzie QR. Po wysłaniu odpowiedzi urządzenie jest odkładane.",
      ai: "AI może przygotować warianty pytań do listy zatwierdzonych treści. Nauczyciel sprawdza zgodność z materiałem i unika pytań o informacje jeszcze nieuczone."
    },
    mistakes: [
      "ocenianie każdego miniquizu stopniem",
      "pytania o detale bez znaczenia dla dalszej nauki",
      "brak informacji o poprawności",
      "zbyt trudny start wywołujący rezygnację",
      "mylenie wydobywania wiedzy z ponownym czytaniem"
    ],
    evaluation: {
      question: "Czy uczniowie pamiętają kluczową wiedzę po kilku dniach i potrafią jej użyć?",
      evidence: "Powtórz wybrane pytania po tygodniu i dodaj jedno zadanie wymagające zastosowania wiedzy.",
      decision: "Zachowaj pytania, które ujawniają ważne luki; usuń te, które tylko mierzą przypadkowe szczegóły."
    },
    sources: [
      { title: "IES: Organizing Instruction and Study to Improve Student Learning", type: "wytyczne oparte na przeglądzie badań", url: "https://ies.ed.gov/ncee/wwc/PracticeGuide/1", note: "Rekomenduje quizy ponownie eksponujące kluczową treść." },
      { title: "Dunlosky i in.: Improving Students' Learning With Effective Learning Techniques", type: "przegląd badań", url: "https://pubmed.ncbi.nlm.nih.gov/26173288/", note: "Klasyfikuje practice testing jako technikę o wysokiej użyteczności." },
      { title: "The Learning Scientists: Retrieval Practice", type: "materiał praktyczny i wideo", url: "https://www.learningscientists.org/videos", note: "Krótkie materiały objaśniające mechanizm." }
    ],
    related: ["Powtórki rozłożone w czasie", "Ocenianie kształtujące", "Mastery learning"]
  },
  {
    file: "metoda-powtorki-rozlozone.html",
    title: "Powtórki rozłożone w czasie",
    short: "Planowy powrót do kluczowych treści po kilku dniach i tygodniach, nie tylko przed sprawdzianem.",
    sourceBadge: "Badania nad pamięcią",
    sourceType: "Przeglądy badań i wytyczne IES",
    sourceNote: "Badania wspierają rozkładanie kontaktów z materiałem w czasie. Nie wskazują jednego uniwersalnego kalendarza dla każdego przedmiotu, dlatego odstępy trzeba dopasować do treści i klasy.",
    categories: ["pamiec", "przygotowanie", "technologia"],
    tags: ["spacing", "powroty", "planowanie"],
    definition: "Spacing polega na wielokrotnym wracaniu do ważnej treści po odstępach czasu, zamiast skupiania całej powtórki w jednym bloku.",
    mechanism: "Upływ czasu sprawia, że przypomnienie wymaga wysiłku. Kolejny kontakt wzmacnia dostępność wiedzy i pozwala wykryć to, co zostało zapomniane. Powtórka powinna obejmować aktywne pytanie lub zadanie, a nie tylko ponowne pokazanie slajdu.",
    uses: [
      "pojęcia i symbole potrzebne przez cały cykl kształcenia",
      "kolejność czynności w procedurach",
      "wzory i zasady wykorzystywane w późniejszych zadaniach",
      "przygotowanie do egzaminu bez jednorazowego intensywnego bloku"
    ],
    lesson: [
      ["0-5 min", "Powrót 1", "Dwa pytania dotyczą ostatniej lekcji i treści sprzed dwóch tygodni."],
      ["5-10 min", "Korekta", "Uczniowie sprawdzają odpowiedzi, a nauczyciel krótko wraca do jednej luki."],
      ["10-35 min", "Nowy temat", "Nowa treść zostaje powiązana z przypomnianą wiedzą."],
      ["35-41 min", "Zastosowanie", "Uczniowie wykonują krótkie zadanie łączące treść dawną i nową."],
      ["41-45 min", "Plan powrotu", "Nauczyciel wybiera jedno pytanie, które wróci za tydzień."]
    ],
    exampleTitle: "Planowane powroty do dokumentacji",
    example: "W poniedziałek uczniowie rozpoznają trzy oznaczenia. Po tygodniu dostają fragment dokumentacji z tymi oznaczeniami, a po trzech tygodniach muszą na ich podstawie uzasadnić wybór działania. Każdy powrót zmienia formę zadania. To autorski schemat wdrożenia.",
    concentration: "Powtórka ma być przewidywalna i krótka. Stała pora oraz format ograniczają koszt wejścia w zadanie. Uczeń dostaje jedno pytanie łatwe i jedno wymagające, zamiast długiego arkusza, który może uruchomić rezygnację.",
    tech: {
      none: "Nauczyciel prowadzi prosty kalendarz powrotów i korzysta z pudełka kart pytań.",
      zpe: "ZPE może udostępniać cykliczne miniquizy i przechowywać pytania powtórkowe według działów.",
      phone: "Telefon służy do krótkiej powtórki na sygnał nauczyciela, najwyżej przez kilka minut.",
      ai: "AI może tworzyć warianty pytań z zatwierdzonego banku pojęć, ale nie powinno samodzielnie ustalać ważności treści ani poprawnych odpowiedzi."
    },
    mistakes: [
      "powtarzanie wyłącznie bezpośrednio po lekcji",
      "pokazywanie identycznego materiału bez aktywnej odpowiedzi ucznia",
      "przypadkowy dobór treści do powtórki",
      "zbyt wiele pytań kosztem nowej pracy",
      "traktowanie błędu po czasie jako braku zaangażowania"
    ],
    evaluation: {
      question: "Czy po kilku tygodniach uczniowie nadal rozpoznają i stosują kluczowe treści?",
      evidence: "Porównaj odpowiedzi bezpośrednie, po tygodniu i po kilku tygodniach, używając podobnej trudności.",
      decision: "Zwiększ częstotliwość dla treści często zapominanych, a ogranicz powroty do elementów już stabilnych."
    },
    sources: [
      { title: "IES: Organizing Instruction and Study to Improve Student Learning", type: "wytyczne oparte na przeglądzie badań", url: "https://ies.ed.gov/ncee/wwc/PracticeGuide/1", note: "Rekomenduje rozkładanie nauki i powroty po opóźnieniu." },
      { title: "Dunlosky i in.: Effective Learning Techniques", type: "przegląd badań", url: "https://pubmed.ncbi.nlm.nih.gov/26173288/", note: "Ocenia distributed practice jako technikę o wysokiej użyteczności." },
      { title: "The Learning Scientists: Spaced Practice", type: "materiał praktyczny i wideo", url: "https://www.learningscientists.org/videos", note: "Dostępne objaśnienia spacingu dla nauczycieli i uczniów." }
    ],
    related: ["Retrieval practice", "Mastery learning", "360 e-learning"]
  },
  {
    file: "metoda-nauczanie-jawne.html",
    title: "Nauczanie jawne",
    short: "Cel, modelowanie, małe kroki, praktyka kierowana i stopniowe przejście do samodzielności.",
    sourceBadge: "Syntezy skutecznego nauczania",
    sourceType: "Synteza badań i wytyczne praktyczne",
    sourceNote: "Nauczanie jawne nie oznacza całej lekcji w formie wykładu. Kluczowe są małe kroki, modelowanie, pytania do całej klasy, praktyka kierowana i stopniowe wycofywanie wsparcia.",
    categories: ["przygotowanie", "modelowanie", "zaangazowanie", "technologia"],
    tags: ["małe kroki", "modelowanie", "praktyka kierowana"],
    definition: "Nauczanie jawne to celowe prowadzenie ucznia od jasnego wyjaśnienia i modelu przez praktykę kierowaną do samodzielnego wykonania.",
    mechanism: "Nowe informacje są dzielone na porcje mieszczące się w ograniczonej pamięci roboczej. Nauczyciel pokazuje decyzje, sprawdza rozumienie wszystkich uczniów i reaguje, zanim błąd utrwali się w pracy samodzielnej.",
    uses: [
      "wprowadzanie nowej procedury lub typu zadania",
      "uczenie czytania dokumentacji krok po kroku",
      "przygotowanie do złożonej czynności praktycznej",
      "praca z klasą, która potrzebuje czytelnej struktury"
    ],
    lesson: [
      ["0-5 min", "Cel i powtórka", "Nauczyciel aktywuje potrzebną wiedzę i podaje produkt końcowy."],
      ["5-15 min", "Model", "Pokazuje pierwszy przykład, myśląc na głos i nazywając decyzje."],
      ["15-25 min", "Praktyka kierowana", "Klasa wykonuje podobny przykład, odpowiadając na krótkie pytania."],
      ["25-38 min", "Praktyka samodzielna", "Uczniowie rozwiązują zadanie, a nauczyciel obserwuje miejsca zatrzymania."],
      ["38-45 min", "Sprawdzenie", "Nauczyciel zbiera odpowiedź, omawia błąd i wskazuje kolejny krok."]
    ],
    exampleTitle: "Planowanie zadania praktycznego",
    example: "Nauczyciel pokazuje, jak z instrukcji wyodrębnić cel, materiały, kolejność i punkt kontroli. Drugi plan klasa uzupełnia wspólnie. Trzeci uczniowie tworzą samodzielnie do podobnego zadania. To propozycja zgodna z logiką modelowania i stopniowania wsparcia.",
    concentration: "Zapisz na tablicy aktualny krok i usuń informacje, które nie są jeszcze potrzebne. Po każdym krótkim wyjaśnieniu daj uczniom działanie trwające 1-3 minuty. Sprawdzaj odpowiedzi wszystkich, nie tylko osób zgłaszających się.",
    tech: {
      none: "Tablica, przykład z komentarzem i karta z częściowo uzupełnionym rozwiązaniem wystarczą do pełnego wdrożenia.",
      zpe: "ZPE może dostarczyć przykład, ćwiczenie kierowane i krótkie sprawdzenie przed pracą samodzielną.",
      phone: "Telefon może zebrać odpowiedzi całej klasy na jedno pytanie kontrolne. Nie powinien przerywać ciągłości modelowania.",
      ai: "AI może przygotować podobne przykłady i przewidywane błędy. Nauczyciel weryfikuje procedurę, terminologię i poziom trudności."
    },
    mistakes: [
      "długi monolog bez odpowiedzi uczniów",
      "model pokazujący tylko wynik, bez decyzji",
      "zbyt szybkie przejście do pracy samodzielnej",
      "pytanie \"czy rozumiecie?\" zamiast sprawdzenia odpowiedzi",
      "niekończące się wsparcie bez usamodzielnienia"
    ],
    evaluation: {
      question: "Czy uczniowie po modelowaniu potrafią wykonać podobne zadanie samodzielnie?",
      evidence: "Porównaj liczbę błędów podczas praktyki kierowanej i w pierwszym zadaniu samodzielnym.",
      decision: "Jeśli większość zatrzymuje się w tym samym miejscu, wróć do modelu tego kroku zamiast dodawać więcej zadań."
    },
    sources: [
      { title: "Rosenshine: Principles of Instruction", type: "synteza badań", url: "https://www.aft.org/sites/default/files/Rosenshine.pdf", note: "Dziesięć zasad obejmujących małe kroki, modele i praktykę kierowaną." },
      { title: "AERO: Explicit Instruction Practice Guide", type: "wytyczne instytucjonalne", url: "https://www.edresearch.edu.au/guides-resources/practice-guides/explicit-instruction-practice-guide-full-publication", note: "Praktyczny przewodnik wdrożenia." },
      { title: "AERO: Explicit instruction in practice", type: "materiał wideo", url: "https://www.edresearch.edu.au/guides-resources/videos/teach-explicitly-primary-and-secondary", note: "Przykłady z klas szkolnych." }
    ],
    related: ["Przykłady rozwiązane", "Mastery learning", "Ocenianie kształtujące"]
  },
  {
    file: "metoda-przyklady-rozwiazane.html",
    title: "Przykłady rozwiązane",
    short: "Najpierw poprawny model z komentarzem, potem przykład z lukami, na końcu zadanie samodzielne.",
    sourceBadge: "Badania nad obciążeniem poznawczym",
    sourceType: "Wytyczne IES i synteza Rosenshine'a",
    sourceNote: "Przykład rozwiązany jest wsparciem dla początkującego ucznia. Wraz ze wzrostem samodzielności pomoc powinna być stopniowo wycofywana.",
    categories: ["modelowanie", "przygotowanie", "zaangazowanie", "technologia"],
    tags: ["wzorzec", "myślenie na głos", "wycofywanie pomocy"],
    definition: "Worked example to kompletne lub częściowe rozwiązanie zadania, które ujawnia kolejne kroki i decyzje, zanim uczeń rozwiąże podobny problem samodzielnie.",
    mechanism: "Początkujący może skupić uwagę na strukturze rozwiązania zamiast jednocześnie szukać procedury i wyniku. Komentarz nauczyciela kieruje uwagę na to, dlaczego wykonano dany krok. Późniejsze luki wymuszają stopniowo większą samodzielność.",
    uses: [
      "nowy typ obliczenia lub analizy",
      "wzorcowa odpowiedź z uzasadnieniem",
      "planowanie procedury zawodowej",
      "porównanie przykładu poprawnego i błędnego"
    ],
    lesson: [
      ["0-5 min", "Cel", "Uczniowie poznają kryterium poprawnego rozwiązania."],
      ["5-15 min", "Przykład pełny", "Nauczyciel pokazuje rozwiązanie i komentuje decyzje."],
      ["15-25 min", "Przykład z lukami", "Uczniowie uzupełniają brakujące kroki w parze."],
      ["25-38 min", "Zadanie samodzielne", "Każdy rozwiązuje podobny przypadek bez wzorca."],
      ["38-45 min", "Porównanie", "Uczeń zaznacza miejsce różnicy między swoim rozwiązaniem a kryterium."]
    ],
    exampleTitle: "Wzorcowa odpowiedź na reklamację",
    example: "Nauczyciel pokazuje przykład odpowiedzi zawierającej decyzję, podstawę i komunikat dla klienta. Drugi przykład ma lukę w uzasadnieniu, a trzeci jest samodzielnym zadaniem z innymi danymi. Przykład jest autorską adaptacją metody.",
    concentration: "Wyróżnij tylko aktualnie omawiany krok. Nie pokazuj od razu kilku pełnych stron rozwiązania. Uczeń dostaje krótkie pytanie: \"jaka decyzja została tu podjęta i na jakiej podstawie?\".",
    tech: {
      none: "Wydrukuj przykład z komentarzem na marginesie i wersję z lukami. Modeluj na tablicy.",
      zpe: "ZPE może pokazywać kolejne kroki, zatrzymywać się na pytaniach i udostępniać wersję częściowo uzupełnioną.",
      phone: "Telefon może służyć do porównania odpowiedzi z krótkim wzorcem po zakończeniu pracy.",
      ai: "AI może wygenerować warianty danych do podobnego zadania. Nauczyciel musi sam zatwierdzić tok rozwiązania i sprawdzić, czy przykład nie wprowadza wyjątków bez wyjaśnienia."
    },
    mistakes: [
      "pokazanie wyniku bez toku decyzji",
      "przepisywanie wzorca bez pytań o sens kroków",
      "przykład niepodobny do późniejszego zadania",
      "brak stopniowego usuwania podpowiedzi",
      "zastępowanie wszystkich zadań samodzielnych przykładami"
    ],
    evaluation: {
      question: "Czy po przykładzie uczniowie popełniają mniej błędów proceduralnych w podobnym zadaniu?",
      evidence: "Porównaj samodzielne zadanie przed i po modelowaniu, koncentrując się na konkretnych krokach procedury.",
      decision: "Jeśli uczniowie kopiują powierzchnię wzorca, dodaj pytania o decyzje i bardziej zmień dane w zadaniu samodzielnym."
    },
    sources: [
      { title: "IES: Organizing Instruction and Study", type: "wytyczne oparte na przeglądzie badań", url: "https://ies.ed.gov/ncee/wwc/PracticeGuide/1", note: "Rekomenduje przeplatanie przykładów rozwiązanych i zadań." },
      { title: "Rosenshine: Principles of Instruction", type: "synteza badań", url: "https://www.aft.org/sites/default/files/Rosenshine.pdf", note: "Omawia modele, myślenie na głos i wsparcie poznawcze." },
      { title: "AERO: Explicit Instruction Practice Guide", type: "wytyczne instytucjonalne", url: "https://www.edresearch.edu.au/guides-resources/practice-guides/explicit-instruction-practice-guide-full-publication", note: "Łączy modelowanie z praktyką kierowaną." }
    ],
    related: ["Nauczanie jawne", "Metapoznanie", "Mastery learning"]
  },
  {
    file: "metoda-feedback-poprawa.html",
    title: "Feedback prowadzący do poprawy",
    short: "Informacja zwrotna kończy się działaniem ucznia: korektą, nową próbą albo zmianą strategii.",
    sourceBadge: "Wytyczne o informacji zwrotnej",
    sourceType: "Synteza badań i wskazówki wdrożeniowe EEF",
    sourceNote: "Nie każda informacja zwrotna poprawia uczenie się. Liczy się jej związek z celem, moment przekazania, zrozumiałość oraz możliwość wykorzystania przez ucznia.",
    categories: ["feedback", "zaangazowanie", "technologia"],
    tags: ["komentarz", "druga próba", "korekta"],
    definition: "Feedback prowadzący do poprawy to informacja o pracy połączona z czasem i obowiązkiem wykonania konkretnego następnego kroku.",
    mechanism: "Komentarz pomaga tylko wtedy, gdy uczeń rozumie lukę między aktualną pracą a celem i może ją domknąć. Krótkie polecenie poprawy jednego elementu bywa użyteczniejsze niż rozbudowana lista uwag bez miejsca na działanie.",
    uses: [
      "poprawa uzasadnienia lub planu działania",
      "korekta błędu po ćwiczeniu praktycznym",
      "druga wersja mikroprezentacji",
      "praca z kryteriami przed oceną końcową"
    ],
    lesson: [
      ["0-5 min", "Cel i kryteria", "Nauczyciel pokazuje dwa najważniejsze kryteria produktu."],
      ["5-22 min", "Pierwsza wersja", "Uczniowie wykonują krótkie zadanie."],
      ["22-30 min", "Feedback", "Nauczyciel, para lub wzorzec wskazuje jeden element zgodny i jeden do poprawy."],
      ["30-40 min", "Poprawa", "Każdy tworzy drugą wersję wskazanego elementu."],
      ["40-45 min", "Porównanie", "Uczeń zaznacza zmianę i wyjaśnia, dlaczego ją wprowadził."]
    ],
    exampleTitle: "Doprecyzowanie planu zadania",
    example: "Uczeń przygotowuje plan czynności. Feedback brzmi: \"kolejność jest logiczna; dopisz punkt kontroli po kroku trzecim i określ, co sprawdzasz\". Uczeń wprowadza zmianę na lekcji i zaznacza ją kolorem. To autorski format wykorzystujący zalecenia EEF.",
    concentration: "Jedna uwaga, jeden czasownik, jeden widoczny efekt. Uczeń z trudnością utrzymania uwagi nie powinien dostawać całej strony komentarzy. Nauczyciel może wskazać miejsce w pracy i poprosić o zmianę w ciągu 4 minut.",
    tech: {
      none: "Komentarz na marginesie, rozmowa przy stoliku lub kolorowa adnotacja wystarczają. Druga wersja zostaje obok pierwszej.",
      zpe: "ZPE może przekazać komentarz i zachować kolejne wersje odpowiedzi. Warto wyraźnie oznaczyć zadanie \"popraw i oddaj ponownie\".",
      phone: "Telefon może posłużyć do odczytania komentarza albo sfotografowania poprawionej pracy bez danych innych uczniów.",
      ai: "AI może pomóc nauczycielowi skrócić komentarz lub opracować przykładowe kryteria. Nie powinno samodzielnie oceniać ucznia ani otrzymywać danych osobowych i niezweryfikowanych prac."
    },
    mistakes: [
      "feedback dotyczący osoby zamiast pracy",
      "zbyt wiele uwag naraz",
      "brak czasu na poprawę",
      "niejasne polecenia typu \"rozwiń\" lub \"popraw\"",
      "komentarz po zakończeniu działu, gdy nie ma kolejnej próby"
    ],
    evaluation: {
      question: "Czy uczniowie wykorzystują komentarz i czy druga wersja jest lepsza we wskazanym kryterium?",
      evidence: "Zachowaj próbkę wersji pierwszej, treść komentarza i wersję poprawioną. Sprawdź jedną cechę, nie ogólne wrażenie.",
      decision: "Jeśli uczniowie nie poprawiają pracy, sprawdź czas, jasność komentarza i to, czy wiedzą, jak wykonać kolejny krok."
    },
    sources: [
      { title: "EEF: Teacher Feedback to Improve Pupil Learning", type: "wytyczne oparte na syntezie badań", url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback", note: "Zalecenia dotyczące podstaw, czasu i przyjmowania feedbacku." },
      { title: "EEF: Delivering feedback after exam practice", type: "materiał wideo i przykład praktyczny", url: "https://educationendowmentfoundation.org.uk/news/eef-blog-new-voices-from-the-classroom-delivering-feedback-after-exam-practice", note: "Przykład wdrożenia w pracy nauczyciela." }
    ],
    related: ["Ocenianie kształtujące", "Metapoznanie", "360 e-learning"]
  },
  {
    file: "metoda-ocenianie-ksztaltujace.html",
    title: "Ocenianie kształtujące",
    short: "Zbieranie dowodów zrozumienia i zmiana dalszej pracy na podstawie odpowiedzi uczniów.",
    sourceBadge: "Badania i ewaluacje formative assessment",
    sourceType: "Badania, program wdrożeniowy i niezależna ewaluacja",
    sourceNote: "Ocenianie kształtujące nie jest zestawem dekoracyjnych technik. Odpowiedź ucznia ma prowadzić do decyzji: wyjaśniamy ponownie, zmieniamy zadanie, różnicujemy wsparcie albo przechodzimy dalej.",
    categories: ["feedback", "przygotowanie", "zaangazowanie", "technologia"],
    tags: ["dowód uczenia się", "pytanie diagnostyczne", "decyzja"],
    definition: "Ocenianie kształtujące to pozyskiwanie informacji o uczeniu się i wykorzystywanie jej do modyfikowania nauczania oraz działań ucznia.",
    mechanism: "Nauczyciel projektuje pytanie ujawniające rozumienie, zbiera odpowiedzi możliwie całej klasy i reaguje na wzorzec błędów. Uczeń otrzymuje informację, gdzie jest względem celu i jaki jest kolejny krok.",
    uses: [
      "sprawdzenie po wyjaśnieniu nowego pojęcia",
      "wybór tempa przed kolejnym etapem procedury",
      "exit ticket planujący początek następnej lekcji",
      "analiza typowego błędu bez wskazywania autora"
    ],
    lesson: [
      ["0-5 min", "Cel", "Nauczyciel podaje, co uczeń ma umieć pokazać pod koniec lekcji."],
      ["5-15 min", "Wyjaśnienie", "Klasa poznaje treść lub model działania."],
      ["15-20 min", "Pytanie diagnostyczne", "Każdy wybiera odpowiedź i krótko ją uzasadnia."],
      ["20-38 min", "Reakcja", "Nauczyciel dobiera omówienie lub zadania do odpowiedzi klasy."],
      ["38-45 min", "Dowód końcowy", "Uczeń wykonuje krótkie zadanie sprawdzające cel lekcji."]
    ],
    exampleTitle: "Wybór bezpiecznego rozwiązania",
    example: "Po omówieniu zasad uczniowie wybierają jedno z trzech rozwiązań przypadku i zapisują uzasadnienie. Nauczyciel widzi, że wiele osób ignoruje jeden warunek, więc zatrzymuje pracę i omawia właśnie ten punkt. Potem uczniowie rozwiązują drugi przypadek. To autorska adaptacja formative assessment.",
    concentration: "Pytanie powinno być krótkie i wymagać jednej decyzji. Odpowiedzi najpierw udzielają wszyscy indywidualnie, dzięki czemu uczniowie bierni nie znikają za odpowiedzią kilku aktywnych osób.",
    tech: {
      none: "Odpowiedzi można pokazać kartami A-B-C, zapisać na małych kartkach albo porównać w parach.",
      zpe: "ZPE może zebrać odpowiedzi i pokazać rozkład wyników. Nauczyciel wykorzystuje go do zmiany dalszej pracy.",
      phone: "Telefon może obsłużyć jedno głosowanie lub exit ticket. Pytanie i cel powinny być widoczne przed uruchomieniem urządzeń.",
      ai: "AI może zaproponować odpowiedzi błędne oparte na typowych nieporozumieniach. Nauczyciel sprawdza, czy są wiarygodne i nie wprowadzają nowych błędów."
    },
    mistakes: [
      "zbieranie odpowiedzi bez reakcji nauczyciela",
      "pytanie, na które odpowiada tylko kilka osób",
      "mierzenie pamięci, gdy celem było zastosowanie",
      "użycie exit ticketu wyłącznie jako ankiety satysfakcji",
      "mylenie częstego oceniania stopniem z ocenianiem kształtującym"
    ],
    evaluation: {
      question: "Czy informacje z odpowiedzi uczniów rzeczywiście zmieniają przebieg lub kolejną lekcję?",
      evidence: "Zapisz pytanie, rozkład odpowiedzi, podjętą decyzję i wynik drugiej próby.",
      decision: "Jeśli odpowiedź nie prowadzi do żadnej decyzji, zmień pytanie albo moment jego zadania."
    },
    sources: [
      { title: "Black i Wiliam: Inside the Black Box", type: "synteza i artykuł programowy", url: "https://doi.org/10.1177/003172171009200119", note: "Klasyczne ujęcie formative assessment." },
      { title: "EEF: Embedding Formative Assessment", type: "niezależna ewaluacja programu", url: "https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/embedding-formative-assessment", note: "Ewaluacja konkretnego programu wdrożeniowego, nie dowód każdej techniki osobno." }
    ],
    related: ["Feedback prowadzący do poprawy", "Retrieval practice", "Metapoznanie"]
  },
  {
    file: "metoda-metapoznanie.html",
    title: "Metapoznanie",
    short: "Jawne uczenie planowania, monitorowania i oceny własnej pracy w konkretnym zadaniu.",
    sourceBadge: "Syntezy metapoznania i samoregulacji",
    sourceType: "Wytyczne EEF oparte na przeglądzie badań",
    sourceNote: "Metapoznanie działa najczytelniej, gdy strategie są nauczane jawnie i osadzone w treści przedmiotu. Ogólne pytanie \"jak się uczyłeś?\" bez modelowania strategii jest niewystarczające.",
    categories: ["przygotowanie", "feedback", "zaangazowanie", "technologia"],
    tags: ["planowanie", "monitorowanie", "refleksja"],
    definition: "Metapoznanie to świadome planowanie, monitorowanie i ocenianie własnego sposobu wykonania konkretnego zadania.",
    mechanism: "Nauczyciel ujawnia strategię, modeluje jej użycie i daje uczniowi krótkie punkty kontroli. Uczeń uczy się rozpoznawać, czy rozumie zadanie, gdzie utknął i jak zmienić sposób pracy.",
    uses: [
      "planowanie wieloetapowego zadania",
      "analiza przyczyny błędu",
      "porównanie pierwszej i poprawionej wersji",
      "wybór strategii powtórki przed egzaminem"
    ],
    lesson: [
      ["0-7 min", "Model strategii", "Nauczyciel pokazuje, jak planuje pierwszy krok i sprawdza wykonanie."],
      ["7-12 min", "Plan ucznia", "Każdy zapisuje pierwszy krok i punkt kontroli."],
      ["12-30 min", "Praca", "Uczniowie wykonują zadanie, zatrzymując się raz na sprawdzenie planu."],
      ["30-38 min", "Poprawa", "Uczeń zmienia strategię lub fragment pracy na podstawie wyniku."],
      ["38-45 min", "Krótka refleksja", "Kończy zdaniem: \"zmieniłem..., ponieważ...\"."]
    ],
    exampleTitle: "Analiza błędu w procedurze",
    example: "Przed zadaniem uczeń zaznacza, co sprawdzi najpierw. W połowie odpowiada: \"czy mam dane potrzebne do decyzji?\". Na końcu opisuje jedną zmianę strategii. Nauczyciel modeluje pytania na pierwszym przykładzie. To propozycja wdrożeniowa osadzona w zaleceniach EEF.",
    concentration: "Używaj najwyżej jednego pytania planującego, jednego monitorującego i jednego końcowego. Pytania powinny wskazywać działanie, nie wymagać długiego opisu emocji. Można je umieścić bezpośrednio obok zadania.",
    tech: {
      none: "Trzy pytania kontrolne mogą znaleźć się na marginesie karty pracy lub w zeszycie.",
      zpe: "ZPE może zatrzymać ucznia przed kolejnym etapem i poprosić o wybór strategii lub krótką refleksję.",
      phone: "Telefon może służyć do ustawienia pojedynczego punktu kontroli albo wpisania zdania refleksji, jeśli nie rozprasza bardziej niż pomaga.",
      ai: "AI może pomóc nauczycielowi opracować pytania metapoznawcze do konkretnego zadania. Nauczyciel usuwa pytania ogólne i nadmiarowe."
    },
    mistakes: [
      "ogólna refleksja bez związku z zadaniem",
      "zbyt wiele pytań przerywających pracę",
      "oczekiwanie samoregulacji bez modelowania strategii",
      "ocena ucznia za deklarowaną pewność siebie",
      "traktowanie metapoznania jako dodatku po zakończeniu pracy"
    ],
    evaluation: {
      question: "Czy uczniowie lepiej planują pierwszy krok, wykrywają błąd i zmieniają strategię?",
      evidence: "Zachowaj krótki plan, punkt kontroli i poprawioną wersję. Obserwuj, gdzie uczniowie proszą o pomoc.",
      decision: "Jeśli refleksje są szablonowe, wróć do modelowania strategii na treści przedmiotowej."
    },
    sources: [
      { title: "EEF: Metacognition and Self-Regulated Learning", type: "wytyczne oparte na przeglądzie badań", url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition", note: "Siedem zaleceń dla praktyki szkolnej." },
      { title: "EEF: Metacognition, a brief explainer", type: "materiał wideo", url: "https://educationendowmentfoundation.org.uk/news/eef-blog-new-animation-metacognition-a-brief-explainer", note: "Krótka animacja objaśniająca pojęcie." }
    ],
    related: ["Nauczanie jawne", "Feedback prowadzący do poprawy", "360 e-learning"]
  },
  {
    file: "metoda-uczenie-kooperacyjne.html",
    title: "Uczenie kooperacyjne",
    short: "Mała grupa z jasnym celem, rolami, współzależnością i indywidualną odpowiedzialnością.",
    sourceBadge: "Badania nad współpracą",
    sourceType: "Synteza EEF, jakość dowodów oceniona ostrożnie",
    sourceNote: "Samo posadzenie uczniów w grupie nie tworzy uczenia kooperacyjnego. EEF wskazuje dodatni średni obraz badań, ale podkreśla potrzebę struktury, praktyki i wspólnego wyniku; podstawa dowodowa jest określana jako ograniczona.",
    categories: ["wspolpraca", "zaangazowanie", "projekt", "technologia"],
    tags: ["role", "wspólny produkt", "odpowiedzialność"],
    definition: "Uczenie kooperacyjne to ustrukturyzowana współpraca w małej grupie, w której zadanie wymaga wkładu każdego i kończy się wspólnym produktem.",
    mechanism: "Dobrze zaprojektowane role i wspólny cel uruchamiają wyjaśnianie, porównywanie oraz wzajemne sprawdzanie. Indywidualna odpowiedzialność ogranicza sytuację, w której jedna osoba wykonuje całość.",
    uses: [
      "analiza przypadku z kilkoma danymi",
      "porównanie rozwiązań i wspólna rekomendacja",
      "planowanie zadania praktycznego",
      "tworzenie mikroproduktu podczas jednej lekcji"
    ],
    lesson: [
      ["0-6 min", "Cel i role", "Nauczyciel pokazuje produkt i przydziela role związane z zadaniem."],
      ["6-12 min", "Praca indywidualna", "Każdy analizuje swój fragment lub zapisuje pierwszą decyzję."],
      ["12-30 min", "Współpraca", "Grupa łączy wkłady w jeden produkt i przygotowuje uzasadnienie."],
      ["30-38 min", "Wymiana", "Grupy porównują produkty albo zadają sobie jedno pytanie."],
      ["38-45 min", "Indywidualne sprawdzenie", "Każdy zapisuje wniosek, żeby sprawdzić uczenie się poza produktem grupy."]
    ],
    exampleTitle: "Wybór rozwiązania dla klienta",
    example: "Czteroosobowa grupa analizuje potrzeby klienta. Role wynikają z treści: dane, ograniczenia, możliwe rozwiązania, kontrola kryteriów. Produkt to jedna rekomendacja i dwa uzasadnienia. Na końcu każdy indywidualnie wyjaśnia najważniejsze ograniczenie. To autorska adaptacja.",
    concentration: "Role muszą być krótkie i funkcjonalne. Zamiast dużego projektu daj jeden produkt możliwy do ukończenia w 15 minut. Uczeń, który ma problem z wejściem w zadanie, dostaje pierwszy konkretny ruch, np. podkreślenie dwóch danych.",
    tech: {
      none: "Jedna karta przypadku, karta ról i arkusz produktu wystarczą.",
      zpe: "ZPE może dostarczyć różne fragmenty materiału i zebrać indywidualny wniosek po pracy grupowej.",
      phone: "Jeden telefon w grupie może służyć do otwarcia źródła lub przesłania produktu. Nie może zastąpić udziału pozostałych osób.",
      ai: "AI może zaproponować warianty przypadku i role związane z treścią. Nauczyciel sprawdza realizm danych i równowagę wkładu."
    },
    mistakes: [
      "ogólne role typu lider bez związku z treścią",
      "produkt możliwy do wykonania przez jedną osobę",
      "brak czasu na indywidualne sprawdzenie",
      "zbyt duże grupy",
      "ocenianie całej grupy bez informacji o wkładzie"
    ],
    evaluation: {
      question: "Czy każdy uczeń wniósł wkład i potrafi samodzielnie wyjaśnić wniosek grupy?",
      evidence: "Obserwuj wykonanie ról, zbierz produkt i krótką indywidualną odpowiedź końcową.",
      decision: "Jeśli jedna osoba dominuje, przeprojektuj zależności w zadaniu zamiast tylko przypominać o współpracy."
    },
    sources: [
      { title: "EEF: Collaborative Learning Approaches", type: "synteza badań", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/collaborative-learning-approaches", note: "Wskazuje znaczenie małych grup, wspólnego celu i wsparcia uczniów." }
    ],
    related: ["Tutoring rówieśniczy", "Nauczanie dialogowe", "Problem, projekt i przypadek"]
  },
  {
    file: "metoda-peer-tutoring.html",
    title: "Tutoring rówieśniczy",
    short: "Uczeń wspiera ucznia według przygotowanej ramy pytań, bez wykonywania zadania za drugą osobę.",
    sourceBadge: "Syntezy i ewaluacje peer tutoring",
    sourceType: "Aktualizowany przegląd EEF z ważnymi warunkami wdrożenia",
    sourceNote: "Tutoring rówieśniczy najlepiej służy utrwalaniu i ćwiczeniu wcześniej nauczonego materiału. Uczniowie potrzebują przygotowania do roli; wyniki konkretnych programów nie są jednolite.",
    categories: ["wspolpraca", "pamiec", "zaangazowanie", "technologia"],
    tags: ["praca w parze", "pytania pomocnicze", "zamiana ról"],
    definition: "Tutoring rówieśniczy to ustrukturyzowana praca pary, w której jeden uczeń pomaga drugiemu przećwiczyć wcześniej poznaną wiedzę lub umiejętność.",
    mechanism: "Uczeń wyjaśniający porządkuje własną wiedzę, a uczeń rozwiązujący otrzymuje natychmiastowe pytania i korektę. Rama ogranicza podawanie gotowej odpowiedzi i błędne wyjaśnienia.",
    uses: [
      "powtórka kroków procedury",
      "ćwiczenie pojęć i symboli",
      "praca nad podobnymi zadaniami po modelowaniu",
      "przygotowanie do indywidualnego sprawdzenia"
    ],
    lesson: [
      ["0-8 min", "Powtórka i model", "Nauczyciel przypomina treść i pokazuje, jak tutor zadaje pytania."],
      ["8-12 min", "Rama", "Pary dostają trzy pytania pomocnicze i kryterium poprawności."],
      ["12-24 min", "Runda 1", "Uczeń A rozwiązuje, uczeń B prowadzi pytaniami i sprawdza ze wzorcem."],
      ["24-36 min", "Runda 2", "Role zmieniają się przy podobnym zadaniu."],
      ["36-45 min", "Samodzielne sprawdzenie", "Każdy wykonuje krótkie zadanie bez wsparcia pary."]
    ],
    exampleTitle: "Uzasadnianie kolejności czynności",
    example: "Uczeń rozwiązujący układa etapy procedury. Tutor nie podaje kolejności, tylko pyta: \"co musi być gotowe przed tym krokiem?\", \"gdzie jest punkt kontroli?\". Po zmianie ról każdy rozwiązuje nowy wariant samodzielnie. To autorska rama.",
    concentration: "Pary pracują w krótkich rundach z widocznym zestawem trzech pytań. Role są neutralne i rotacyjne. Uczeń, który łatwo się rozprasza, ma jedną odpowiedzialność na raz: rozwiązuje albo prowadzi pytaniami.",
    tech: {
      none: "Karta pytań, dwa warianty zadania i wzorzec dla tutora wystarczą.",
      zpe: "ZPE może przydzielić warianty zadań i zebrać końcową pracę indywidualną.",
      phone: "Telefon może wyświetlać kartę pytań lub licznik rundy, jeśli urządzenie nie przejmuje uwagi pary.",
      ai: "AI może pomóc stworzyć podobne warianty i pytania sokratejskie. Nauczyciel weryfikuje odpowiedzi i język."
    },
    mistakes: [
      "stałe etykietowanie ucznia jako słabego lub mocnego",
      "wprowadzanie nowej treści wyłącznie przez rówieśnika",
      "tutor wykonujący zadanie za partnera",
      "brak szkolenia w zadawaniu pytań",
      "brak samodzielnego sprawdzenia po pracy w parze"
    ],
    evaluation: {
      question: "Czy po pracy w parze obie osoby potrafią wykonać zadanie samodzielnie?",
      evidence: "Porównaj wynik rundy wspieranej z krótkim zadaniem indywidualnym i obserwuj jakość pytań tutora.",
      decision: "Jeśli tutor podaje odpowiedzi, skróć ramę i ponownie zamodeluj pytania pomocnicze."
    },
    sources: [
      { title: "EEF: Peer Tutoring", type: "synteza badań", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/peer-tutoring", note: "Aktualne podsumowanie korzyści, ograniczeń i wymagań szkolenia." }
    ],
    related: ["Uczenie kooperacyjne", "Retrieval practice", "Nauczanie jawne"]
  },
  {
    file: "metoda-nauczanie-dialogowe.html",
    title: "Nauczanie dialogowe",
    short: "Rozmowa, w której uczniowie uzasadniają, porównują i rozwijają wypowiedzi innych.",
    sourceBadge: "Badania nad dialogiem w klasie",
    sourceType: "Niezależna ewaluacja konkretnego programu i literatura dydaktyczna",
    sourceNote: "Pozytywny wynik ewaluacji EEF dotyczył konkretnego programu, wieku uczniów i intensywnego przygotowania nauczycieli. Nie należy przenosić go jako gwarancji skuteczności każdej dyskusji klasowej.",
    categories: ["wspolpraca", "feedback", "zaangazowanie", "technologia"],
    tags: ["uzasadnianie", "pytania pogłębiające", "czas na namysł"],
    definition: "Nauczanie dialogowe wykorzystuje uporządkowaną rozmowę do rozwijania rozumowania, wyjaśniania i wspólnego budowania wniosków.",
    mechanism: "Pytania wymagające uzasadnienia uruchamiają przetwarzanie treści. Czas na namysł i rozmowę w parze zwiększa udział uczniów, którzy rzadko zabierają głos. Nauczyciel powraca do wypowiedzi, prosi o dowód i domyka merytorycznie rozmowę.",
    uses: [
      "porównanie dwóch rozwiązań zawodowych",
      "analiza decyzji w przypadku klienta",
      "wyjaśnienie przyczyn błędu",
      "praca nad pojęciem mającym kilka przykładów i granic"
    ],
    lesson: [
      ["0-8 min", "Wspólna wiedza", "Nauczyciel przedstawia krótki przypadek i potrzebne dane."],
      ["8-13 min", "Namysł indywidualny", "Każdy zapisuje decyzję i jedno uzasadnienie."],
      ["13-22 min", "Rozmowa w parach", "Uczniowie porównują argumenty i przygotowują jedno pytanie."],
      ["22-37 min", "Dialog klasy", "Nauczyciel zbiera różne stanowiska, pyta o dane i relacje między odpowiedziami."],
      ["37-45 min", "Wniosek", "Każdy zapisuje ostateczne stanowisko i zmianę względem pierwszej odpowiedzi."]
    ],
    exampleTitle: "Które rozwiązanie jest bezpieczniejsze?",
    example: "Uczniowie analizują dwa warianty wykonania zadania. Najpierw wybierają indywidualnie, potem porównują argumenty w parze. Na forum nauczyciel pyta: \"na jakiej informacji opierasz tę decyzję?\" i \"co musiałoby się zmienić, aby wybrać drugi wariant?\". To autorski scenariusz.",
    concentration: "Najpierw daj 60-90 sekund na zapisanie odpowiedzi, potem rozmowę w parze, dopiero na końcu forum. Dzięki temu uczeń nie musi jednocześnie wymyślać i publicznie formułować wypowiedzi. Pytanie pozostaje widoczne przez cały czas.",
    tech: {
      none: "Przypadek na kartce, minuta pisania i rozmowa w parze są pełnym wdrożeniem.",
      zpe: "ZPE może udostępnić przypadek i zebrać pierwszą oraz końcową odpowiedź, pokazując zmianę rozumowania.",
      phone: "Telefon może obsłużyć anonimowe głosowanie przed i po dyskusji. Sama rozmowa odbywa się bez ekranu.",
      ai: "AI może przygotować kontrargumenty lub pytania pogłębiające do sprawdzonego przypadku. Nauczyciel kontroluje ich poprawność i adekwatność."
    },
    mistakes: [
      "pytania, na które nauczyciel oczekuje jednego hasła",
      "rozmowa wyłącznie z kilkoma aktywnymi uczniami",
      "brak czasu na namysł",
      "akceptowanie nieścisłości bez korekty",
      "dyskusja bez końcowego produktu lub wniosku"
    ],
    evaluation: {
      question: "Czy więcej uczniów formułuje uzasadnienie i czy końcowe odpowiedzi są pełniejsze?",
      evidence: "Porównaj pierwsze i końcowe zdanie oraz zanotuj, ilu uczniów odwołało się do danych lub wypowiedzi innej osoby.",
      decision: "Jeśli rozmowa jest powierzchowna, popraw pytanie i zwiększ czas na indywidualne przygotowanie."
    },
    sources: [
      { title: "EEF: Dialogic Teaching trial", type: "niezależna ewaluacja programu", url: "https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/dialogic-teaching/", note: "Wynik konkretnego programu wraz z opisem wdrożenia i ograniczeń." },
      { title: "Rosenshine: Principles of Instruction", type: "synteza badań", url: "https://www.aft.org/sites/default/files/Rosenshine.pdf", note: "Znaczenie pytań, odpowiedzi wszystkich uczniów i wyjaśniania procesu." }
    ],
    related: ["Ocenianie kształtujące", "Uczenie kooperacyjne", "Flipped classroom"]
  },
  {
    file: "metoda-udl.html",
    title: "UDL",
    short: "Projektowanie dostępnych dróg wejścia, pracy i odpowiedzi bez obniżania wspólnego celu.",
    sourceBadge: "Rama projektowa CAST",
    sourceType: "Rama Universal Design for Learning 3.0",
    sourceNote: "UDL jest ramą projektowania, nie pojedynczą metodą z gwarantowanym efektem. Na stronie służy do identyfikowania barier i wybierania ograniczonej liczby dostępnych sposobów wejścia lub odpowiedzi.",
    categories: ["przygotowanie", "zaangazowanie", "modelowanie", "technologia"],
    tags: ["dostępność", "usuwanie barier", "wspólny cel"],
    definition: "Universal Design for Learning to rama projektowania środowiska uczenia się, która przewiduje różne sposoby angażowania, przedstawiania treści oraz działania ucznia.",
    mechanism: "Nauczyciel rozpoznaje barierę, która nie jest celem lekcji, i usuwa ją bez obniżania wymagań merytorycznych. Uczeń może otrzymać czytelniejszy format, model, ograniczony wybór lub alternatywną formę odpowiedzi, jeśli nadal pokazuje ten sam efekt uczenia się.",
    uses: [
      "zadania z niepotrzebnie trudnym wejściem językowym",
      "klasy o zróżnicowanym tempie i sposobie pracy",
      "ograniczenie bodźców i liczby decyzji",
      "umożliwienie różnych produktów przy wspólnym kryterium"
    ],
    lesson: [
      ["0-5 min", "Wspólny cel", "Nauczyciel podaje jeden efekt i kryterium dla wszystkich."],
      ["5-12 min", "Dwa wejścia", "Treść jest dostępna jako krótki tekst i schemat lub przykład."],
      ["12-30 min", "Praca", "Uczniowie wybierają jedną z dwóch dróg wykonania, ale odpowiadają na ten sam problem."],
      ["30-40 min", "Produkt", "Odpowiedź może mieć formę tekstu, schematu lub wypowiedzi, jeśli każda pokazuje to samo rozumienie."],
      ["40-45 min", "Sprawdzenie kryterium", "Nauczyciel ocenia treść według wspólnego kryterium, nie wybraną formę."]
    ],
    exampleTitle: "Wyjaśnienie zasady zawodowej",
    example: "Uczniowie otrzymują krótką definicję, schemat i jeden przykład. Wybierają tekst albo schemat jako wejście. Efektem dla wszystkich jest poprawne wyjaśnienie zasady i przykład zastosowania. Forma odpowiedzi może być krótkim tekstem lub diagramem, o ile cel nie dotyczy pisania. To autorska adaptacja ramy.",
    concentration: "Ogranicz wybór do dwóch sensownych opcji. Usuń dekoracje i informacje niezwiązane z zadaniem. Zaznacz pierwszy krok i pozostaw cel widoczny. UDL nie oznacza podawania uczniowi wielu jednoczesnych bodźców.",
    tech: {
      none: "Ten sam materiał można przygotować jako krótki tekst i prosty schemat na papierze.",
      zpe: "ZPE może udostępnić tekst, nagranie, powiększalną grafikę i różne formy odpowiedzi, jeśli są dostępne i zgodne z celem.",
      phone: "Telefon może zapewnić dostęp do wersji audio lub powiększenia, ale nie powinien być obowiązkowy bez zapewnienia alternatywy.",
      ai: "AI może pomóc uprościć składnię instrukcji albo zaproponować alternatywne przykłady. Nauczyciel sprawdza, czy treść i poziom wymagań pozostały niezmienione."
    },
    mistakes: [
      "mylenie dostępności z obniżeniem celu",
      "zbyt wiele opcji zwiększających obciążenie",
      "alternatywna forma, która mierzy inny efekt",
      "przygotowanie wielu materiałów bez rozpoznania bariery",
      "założenie, że technologia sama zapewnia dostępność"
    ],
    evaluation: {
      question: "Czy więcej uczniów rozpoczyna zadanie i pokazuje ten sam wymagany efekt?",
      evidence: "Obserwuj start pracy, liczbę próśb o wyjaśnienie instrukcji i jakość produktu według wspólnego kryterium.",
      decision: "Zostaw wariant, który usuwa realną barierę; usuń opcje niewykorzystywane lub zmieniające cel."
    },
    sources: [
      { title: "CAST: Universal Design for Learning Guidelines 3.0", type: "rama projektowa", url: "https://udlguidelines.cast.org/", note: "Oficjalne wytyczne dotyczące zaangażowania, reprezentacji oraz działania i ekspresji." }
    ],
    related: ["Nauczanie jawne", "Metapoznanie", "Blended learning"]
  },
  {
    file: "metoda-mastery-learning.html",
    title: "Mastery learning",
    short: "Sprawdzenie kluczowego elementu, korekta luki i ponowna próba przed przejściem dalej.",
    sourceBadge: "Syntezy mastery learning",
    sourceType: "Przegląd EEF, jakość dowodów oceniona ostrożnie",
    sourceNote: "Mastery learning zmienia czas i wsparcie, a utrzymuje cele. Pełny model jest wymagający organizacyjnie; tutaj rekomendowany jest punktowo dla małych, niezbędnych elementów. EEF ocenia jakość dowodów w narzędziu jako niską.",
    categories: ["feedback", "pamiec", "przygotowanie", "technologia"],
    tags: ["próg opanowania", "korekta", "ponowna próba"],
    definition: "Mastery learning to organizacja nauki, w której uczeń otrzymuje dodatkowy czas i wsparcie, aby opanować kluczowy element przed przejściem do następnego.",
    mechanism: "Krótka diagnoza ujawnia konkretną lukę. Uczniowie z luką otrzymują korektę i inną próbę, a gotowi przechodzą do rozszerzenia. Cel pozostaje wspólny, zmienia się droga i czas.",
    uses: [
      "warunki bezpieczeństwa przed zadaniem praktycznym",
      "podstawowe kroki procedury potrzebne dalej",
      "kluczowe pojęcia przed trudniejszą analizą",
      "punkt kontrolny w cyklu powtórkowym"
    ],
    lesson: [
      ["0-6 min", "Diagnoza", "Każdy wykonuje trzy krótkie zadania dotyczące warunku wstępnego."],
      ["6-12 min", "Informacja", "Nauczyciel pokazuje kryterium i dzieli dalszą pracę według rodzaju luki."],
      ["12-28 min", "Korekta lub rozszerzenie", "Jedna grupa pracuje z dodatkowym modelem, druga stosuje wiedzę w trudniejszym przypadku."],
      ["28-36 min", "Ponowna próba", "Uczniowie z korekty rozwiązują nowy wariant."],
      ["36-45 min", "Wspólne zadanie", "Klasa przechodzi do kolejnego etapu z dostępnym wsparciem dla potrzebujących."]
    ],
    exampleTitle: "Warunek przed wejściem w procedurę",
    example: "Przed planowaniem zadania uczniowie muszą poprawnie rozpoznać trzy sytuacje ryzyka. Osoby z luką analizują jeszcze jeden przykład z nauczycielem i podejmują drugą próbę. Pozostali oceniają bardziej złożony przypadek. To lokalna adaptacja w małej skali, nie pełny system mastery.",
    concentration: "Diagnoza powinna dotyczyć jednego, jasno opisanego elementu. Uczeń od razu widzi, nad czym pracuje i kiedy kończy. Dodatkowe wsparcie nie może wyglądać jak powtarzanie całej lekcji od początku.",
    tech: {
      none: "Trzy pytania, dwa zestawy zadań i szybkie sprawdzenie nauczyciela wystarczą.",
      zpe: "ZPE może automatycznie skierować do materiału korekcyjnego lub zadania rozszerzającego, ale próg ustala nauczyciel.",
      phone: "Telefon może obsłużyć krótką diagnozę. W przypadku kluczowego BHP wynik cyfrowy nie zastępuje bezpośredniego instruktażu i nadzoru.",
      ai: "AI może przygotować równoległe warianty zadań. Nauczyciel sprawdza, czy naprawdę mierzą ten sam kluczowy element."
    },
    mistakes: [
      "przypadkowy próg opanowania",
      "zatrzymywanie całej klasy bez zadania rozszerzającego",
      "ta sama korekta, która wcześniej nie zadziałała",
      "brak ponownej próby",
      "stosowanie pełnego modelu bez zasobów i planu czasu"
    ],
    evaluation: {
      question: "Czy po korekcie uczniowie opanowują konkretny warunek potrzebny do dalszej pracy?",
      evidence: "Porównaj pierwszą diagnozę i nowy wariant po wsparciu, a potem sprawdź użycie wiedzy w kolejnym zadaniu.",
      decision: "Jeśli ponowna próba nie poprawia wyniku, zmień rodzaj wyjaśnienia lub modelu, nie tylko liczbę powtórzeń."
    },
    sources: [
      { title: "EEF: Mastery Learning", type: "synteza badań", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/mastery-learning", note: "Opis modelu, warunków i trudności wdrożeniowych." }
    ],
    related: ["Nauczanie jawne", "Ocenianie kształtujące", "Powtórki rozłożone w czasie"]
  },
  {
    file: "metoda-problem-projekt-przypadek.html",
    title: "Problem, projekt i przypadek",
    short: "Praca na realnym problemie, ograniczonym projekcie lub przypadku, zakończona konkretną decyzją albo produktem.",
    sourceBadge: "Metaanaliza PBL, PjBL i CBL",
    sourceType: "Metaanaliza motywacji i rekomendacja organizacyjna",
    sourceNote: "Metaanaliza Wijnia i współautorów pokazuje mały do umiarkowanego, zróżnicowany efekt na motywację. Wynik zależy od kontekstu i jakości wdrożenia; nie jest argumentem za dowolnym projektem bez struktury.",
    categories: ["projekt", "wspolpraca", "zaangazowanie", "technologia"],
    tags: ["przypadek zawodowy", "decyzja", "produkt"],
    definition: "Problem-, project- i case-based learning organizują uczenie wokół pytania, problemu, projektu lub przypadku, który wymaga zastosowania wiedzy i stworzenia odpowiedzi.",
    mechanism: "Realistyczny kontekst nadaje wiedzy funkcję i może wspierać motywację. Jasny produkt, ograniczenia oraz wsparcie nauczyciela zapobiegają sytuacji, w której uczniowie zajmują się organizacją projektu zamiast treścią.",
    uses: [
      "reklamacja lub potrzeba klienta",
      "wybór rozwiązania przy ograniczonym budżecie lub czasie",
      "zaplanowanie małego produktu zawodowego",
      "porównanie kilku możliwych procedur"
    ],
    lesson: [
      ["0-7 min", "Problem i kryteria", "Nauczyciel przedstawia przypadek, dane, ograniczenia i oczekiwany produkt."],
      ["7-12 min", "Pierwsza decyzja", "Każdy zapisuje wstępne rozwiązanie."],
      ["12-29 min", "Analiza", "Pary lub grupy sprawdzają dane, porównują opcje i przygotowują uzasadnienie."],
      ["29-38 min", "Prezentacja decyzji", "Grupy pokazują produkt w maksymalnie 2 minuty i odpowiadają na jedno pytanie."],
      ["38-45 min", "Domknięcie", "Nauczyciel porównuje rozwiązania z kryteriami, a uczniowie poprawiają decyzję."]
    ],
    exampleTitle: "Reklamacja i wybór działania",
    example: "Klasa otrzymuje przypadek reklamacji z trzema możliwymi działaniami, informacjami o terminie i warunkach. Zadanie brzmi: wybierz rozwiązanie, wskaż dwa dane, które je uzasadniają, oraz jedno ryzyko. Produkt mieści się na jednej karcie. To autorska propozycja do adaptacji.",
    concentration: "Ogranicz problem do jednej decyzji i kilku danych. Zapisz pierwszy krok: \"podkreśl dwa fakty, które ograniczają wybór\". Długi, otwarty projekt zastąp mikroprojektem z jednym produktem na lekcję.",
    tech: {
      none: "Przypadek na jednej stronie i karta decyzji wystarczą. Tablica służy porównaniu kryteriów.",
      zpe: "ZPE może udostępnić przypadek, dodatkowe dane pojawiające się etapami i zebrać produkty grup.",
      phone: "Jeden telefon może otworzyć dodatkową informację po kodzie QR lub przesłać decyzję. Wyszukiwanie bez ograniczeń zwykle zwiększa chaos.",
      ai: "AI może tworzyć warianty danych lub odgrywać klienta w przygotowanej rozmowie. Nauczyciel sprawdza realizm, fakty i kryteria przed lekcją."
    },
    mistakes: [
      "problem tak szeroki, że uczniowie nie wiedzą, od czego zacząć",
      "produkt efektowny, ale niezwiązany z celem",
      "brak potrzebnej wiedzy wstępnej",
      "ocena prezentacji zamiast jakości decyzji",
      "technologia użyta do przypadkowego szukania informacji"
    ],
    evaluation: {
      question: "Czy uczniowie wykorzystują wiedzę przedmiotową do decyzji, a nie tylko dzielą zadania organizacyjne?",
      evidence: "Oceń produkt według 2-3 kryteriów: poprawność, użycie danych i jakość uzasadnienia. Porównaj odpowiedź wstępną i końcową.",
      decision: "Jeśli produkty są powierzchowne, zmniejsz zakres i jawnie naucz potrzebnej wiedzy przed kolejnym przypadkiem."
    },
    sources: [
      { title: "Wijnia i in.: Effects of Problem-, Project- and Case-Based Learning on Motivation", type: "metaanaliza", url: "https://link.springer.com/article/10.1007/s10648-024-09864-3", note: "Synteza wpływu na motywację z uwzględnieniem zróżnicowania wyników." }
    ],
    related: ["Uczenie kooperacyjne", "Nauczanie dialogowe", "Flipped classroom"]
  }
];

export const methods = baseMethods.map((method) => ({
  ...method,
  adaptation: methodAdaptations[method.file]
}));

export const categoryLabels = {
  all: "Wszystkie metody",
  przygotowanie: "Przygotowanie i organizacja",
  pamiec: "Pamięć i utrwalanie",
  modelowanie: "Wyjaśnianie i modelowanie",
  feedback: "Feedback i ewaluacja",
  wspolpraca: "Współpraca i komunikacja",
  zaangazowanie: "Zaangażowanie i koncentracja",
  projekt: "Praca problemowa i projektowa",
  technologia: "Zastosowanie technologii"
};
