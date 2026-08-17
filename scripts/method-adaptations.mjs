export const methodAdaptations = {
  "method-1.html": {
    boundaries: {
      isNot: "Nie jest to film sferyczny, wirtualna rzeczywistość ani lekcja pozostawiona platformie. W modelu IBC liczba 360 opisuje domknięty obieg: materiał, działanie ucznia, informacja zwrotna, poprawa i zapis postępu. Jeżeli uczeń tylko otworzył zasób albo zaliczył automatyczny test bez wyjaśnienia błędu, cykl nie został domknięty.",
      classroomProblem: "Metoda porządkuje lekcję, gdy trzydziestu uczniów pracuje w różnym tempie, a nauczyciel potrzebuje widzieć nie tylko wynik końcowy, lecz także moment zatrzymania i poprawę. Pomaga również połączyć kilka krótkich zasobów w jeden cel, zamiast wysyłać uczniów do przypadkowej kolekcji linków.",
      promiseLimit: "Materiał WP3.A5 jest inspiracją projektową, a nie metaanalizą skuteczności terminu 360 e-learning. Można oceniać jakość konkretnego cyklu i prac uczniów, lecz sama nazwa modelu nie gwarantuje lepszych wyników."
    },
    classroom: [
      "W klasie 25-32-osobowej warto przygotować jeden wspólny przypadek oraz trzy etapy oznaczone numerami. Uczniowie przechodzą dalej po wykonaniu małego produktu, nie po upływie identycznego czasu.",
      "Nauczyciel nie sprawdza trzydziestu rozbudowanych odpowiedzi podczas lekcji. W pierwszej rundzie wykorzystuje dwa pytania zamknięte i jedno krótkie uzasadnienie, a pełny komentarz daje tylko do kryterium, z którym klasa ma trudność.",
      "Praca domowa nie jest potrzebna. Materiał wejściowy powinien mieścić się w pierwszych ośmiu minutach lekcji. Uczeń nieobecny otrzymuje tę samą kartę cyklu i zaczyna od etapu pierwszego na kolejnych zajęciach lub konsultacji.",
      "Uczniowie szybsi dostają dodatkowy wariant danych, ale nie przechodzą do nowego działu. Uczniowie wolniejsi kończą wersję podstawową z jednym uzasadnieniem. Wspólny pozostaje cel i kryterium poprawności.",
      "Jeżeli logowanie zajmuje więcej niż dwie minuty albo mniej niż połowa klasy ma dostęp, nauczyciel uruchamia wersję papierową. Platforma jest kanałem organizacji, nie warunkiem zaliczenia zadania."
    ],
    preparation: {
      before: "Przed lekcją nauczyciel wybiera jeden błąd zawodowy, przygotowuje krótki opis zlecenia logistycznego, dwa pytania kontrolne i wzór odpowiedzi z trzema kryteriami. Sprawdza widok ucznia na ZPE oraz drukuje kilka kopii awaryjnych. Przygotowanie można ograniczyć, wykorzystując ten sam szablon cyklu w kolejnych tematach i zmieniając tylko dane przypadku.",
      materials: ["opis zlecenia i dokument WZ", "karta odpowiedzi lub zadanie na ZPE", "wzorzec z kryteriami", "papierowa kopia awaryjna"],
      boardSetup: "Na tablicy pozostają przez całą lekcję cztery kroki: odczytaj dane, znajdź błąd, uzasadnij decyzję, popraw odpowiedź. Obok nauczyciel zapisuje czas zakończenia pracy z urządzeniem.",
      successProduct: "Produktem jest poprawiona odpowiedź, która wskazuje błąd w realizacji zlecenia, przywołuje dwie dane z dokumentów i proponuje działanie korygujące.",
      fallback: "Przy braku internetu uczniowie dostają pakiet w tej samej kolejności. Wynik miniquizu sprawdzają z kartą odpowiedzi dopiero po zaznaczeniu własnych wyborów; poprawioną wersję oddają na papierze."
    },
    lesson: [
      { minutes: 5, title: "Cel i pierwsza decyzja", teacher: "Pokazuje produkt końcowy i pyta, który dokument należy sprawdzić jako pierwszy.", students: "Zapisują indywidualną decyzję bez konsultacji.", evidence: "Na kartach pojawia się wskazanie dokumentu i krótkie uzasadnienie.", decision: "Jeżeli mniej niż połowa klasy wskazuje właściwe źródło danych, nauczyciel modeluje odczyt jednego pola przed dalszą pracą." },
      { minutes: 8, title: "Materiał wejściowy", teacher: "Udostępnia opis zlecenia, dokument WZ i dwa pytania kontrolne.", students: "Odczytują dane i zaznaczają niezgodności.", evidence: "Dwa wybory ucznia pokazują, czy rozumie ilość, termin i miejsce dostawy.", decision: "Gdy problemem jest słownictwo dokumentu, nauczyciel wyjaśnia dwa pojęcia, nie całą procedurę." },
      { minutes: 14, title: "Analiza przypadku", teacher: "Krąży między rzędami i kieruje uczniów do kryteriów zamiast podawać rozwiązanie.", students: "Formułują błąd, dowody i działanie korygujące.", evidence: "Powstaje pierwsza wersja odpowiedzi w trzech polach.", decision: "Po siedmiu minutach nauczyciel zatrzymuje klasę, jeśli wielu uczniów opisuje skutek zamiast przyczyny." },
      { minutes: 11, title: "Feedback i poprawa", teacher: "Pokazuje anonimowe dwie odpowiedzi i odnosi je do kryteriów.", students: "Porównują własną pracę, wybierają jedno miejsce do poprawy i tworzą drugą wersję.", evidence: "Zmiana jest widoczna i oznaczona przez ucznia.", decision: "Jeżeli poprawa polega tylko na przepisaniu wzoru, uczeń musi wskazać dane uzasadniające decyzję." },
      { minutes: 7, title: "Zapis postępu", teacher: "Zbiera poprawione odpowiedzi i zapowiada pytanie powrotne.", students: "Kończą zdanie: zmieniłem odpowiedź, ponieważ...", evidence: "Nauczyciel ma pierwszą i drugą wersję oraz refleksję ucznia.", decision: "Najczęstszy błąd staje się pytaniem otwierającym następną lekcję." }
    ],
    teacherPrompt: "Nie pytam dziś, czy przeczytaliście materiał. Sprawdzam, czy potraficie znaleźć błąd, uzasadnić decyzję danymi i poprawić pierwszą odpowiedź.",
    vocational: {
      context: "Technik logistyk, klasa druga. Zlecenie przewiduje dostawę 24 opakowań do odbiorcy A, ale dokument WZ i potwierdzenie kompletacji zawierają rozbieżne ilości oraz inny termin.",
      goal: "Uczeń wykrywa niezgodność, korzysta z danych w dwóch dokumentach i proponuje możliwe działanie przed wysyłką.",
      materials: ["jednostronicowy opis zlecenia", "uproszczony dokument WZ", "potwierdzenie kompletacji", "rubryka trzech kryteriów"],
      instruction: "Wskaż jedną niezgodność, zapisz dwa dowody z dokumentów i wybierz działanie, które należy wykonać przed wydaniem przesyłki. Po otrzymaniu informacji zwrotnej popraw tylko ten fragment, który nie spełnia kryterium.",
      phases: ["uczeń zaznacza dane liczbowe i termin", "porównuje dokumenty", "tworzy pierwszą decyzję", "otrzymuje feedback do jednego kryterium", "oddaje wersję poprawioną"],
      product: "Krótka notatka decyzyjna: niezgodność, dwa dowody, działanie i jednozdaniowe uzasadnienie.",
      likelyErrors: ["opisanie opóźnienia bez wskazania rozbieżności", "powołanie się na wiedzę ogólną zamiast dane", "propozycja wysyłki bez weryfikacji"],
      teacherResponses: ["Pokaż dwa pola, które się nie zgadzają.", "Który dokument potwierdza tę informację?", "Co musi się wydarzyć przed wydaniem towaru?"],
      closing: "Nauczyciel pokazuje, że cykl nie kończy się wynikiem testu. Dowodem jest trafniejsza decyzja w drugiej wersji. Na kolejnej lekcji zmienia liczby i sprawdza przeniesienie sposobu rozumowania."
    },
    general: {
      subject: "Język polski",
      topic: "Uzasadnienie interpretacji krótkiego fragmentu tekstu",
      setup: "Uczniowie czytają ten sam fragment, wybierają tezę i zaznaczają dwa cytaty lub wskazania z tekstu.",
      flow: "Po pierwszej odpowiedzi otrzymują kryteria: stanowisko, dowód z tekstu, związek dowodu z tezą. Poprawiają tylko uzasadnienie.",
      product: "Pierwsza i druga wersja trzyzdaniowego uzasadnienia.",
      check: "Po tygodniu nauczyciel daje nowy fragment i sprawdza te same trzy kryteria."
    },
    engagement: { firstStep: "Zaznacz w obu dokumentach liczbę opakowań.", segments: "Uczeń pracuje w odcinkach 3-5 minut, po każdym zaznacza wykonany krok.", returnPrompt: "Wróć do pola drugiego i wpisz numer dokumentu, z którego bierzesz dowód.", role: "W parze może być weryfikatorem danych, ale każdy oddaje własną decyzję.", caution: "Bierność lub rozproszenie są obserwacją sytuacji lekcyjnej. Nie stanowią diagnozy ani podstawy do przypisywania uczniowi trwałej cechy." },
    assessment: { evidence: "Dowodem jest poprawna interpretacja dokumentów i zmiana między wersjami, nie liczba kliknięć.", notGrade: "Nie warto stawiać stopnia za próbny miniquiz ani tempo przejścia przez etapy.", criteria: ["wskazuje rzeczywistą niezgodność", "używa dwóch danych z dokumentów", "proponuje działanie adekwatne przed wysyłką"], revision: "Nauczyciel zachowuje obie wersje tylko tak długo, jak jest to potrzebne do feedbacku i sprawdzenia postępu. Na lekcji uczeń zaznacza kolorem jedno miejsce, które świadomie zmienił." },
    mistakeFixes: [
      { mistake: "Platforma zawiera długi film i test końcowy.", instead: "Podziel materiał na krótki zasób, decyzję ucznia i obowiązkową poprawę jednego błędu." },
      { mistake: "Każdy dostaje pełny indywidualny komentarz.", instead: "Najpierw omów wspólny błąd i komentuj indywidualnie tylko kryterium wymagające korekty." },
      { mistake: "Brak logowania zatrzymuje lekcję.", instead: "Użyj identycznie ułożonego pakietu papierowego i zbierz produkt na końcu." }
    ]
  },

  "method-2.html": {
    boundaries: {
      isNot: "Blended learning nie oznacza dodania quizu do zwykłej prezentacji ani przeniesienia połowy lekcji do internetu. Mieszanie ma sens wtedy, gdy część cyfrowa i stacjonarna wykonują różne zadania: diagnoza, wyjaśnienie, praktyka, rozmowa lub powrót do błędu.",
      classroomProblem: "Model pomaga wykorzystać wspólny czas tam, gdzie potrzebna jest interwencja nauczyciela. Krótka aktywność cyfrowa może ujawnić mylenie symboli, a praca z wydrukowanym schematem sprawdza, czy uczeń potrafi zastosować rozpoznanie w planie działania.",
      promiseLimit: "Badania nad blended learning obejmują bardzo różne rozwiązania i grupy. Nie można przypisać efektu samemu połączeniu kanałów. Wynik zależy od jakości zadań, informacji zwrotnej, dostępu i związku między etapami."
    },
    classroom: [
      "W klasie trzydziestoosobowej część cyfrowa powinna dać nauczycielowi szybki obraz dwóch lub trzech nieporozumień. Nie może generować trzydziestu rozbudowanych prac do natychmiastowego sprawdzenia.",
      "Cały cykl odbywa się w klasie. Telefon lub ZPE pojawiają się na krótko, a zasadnicza część lekcji polega na czytaniu schematu, wyjaśnianiu i planowaniu czynności.",
      "Dla uczniów pracujących wolniej przygotuj schemat z zaznaczonym punktem startowym. Uczniowie szybsi otrzymują drugi wariant obwodu i sprawdzają, czy plan nadal jest poprawny.",
      "Przy nieobecności uczeń zaczyna od dwuminutowej diagnozy i otrzymuje kartę z omówionymi symbolami. Nie musi odtwarzać całej aktywności cyfrowej, jeśli jej funkcją było tylko rozpoznanie potrzeb klasy.",
      "Jeżeli urządzeń jest mniej niż uczniów, diagnozę wykonują pary, ale każdy przed rozmową zapisuje własną odpowiedź. Alternatywą są kartoniki A-D, które dają nauczycielowi ten sam sygnał."
    ],
    preparation: {
      before: "Nauczyciel wybiera cztery symbole niezbędne do odczytania schematu i przygotowuje trzy pytania diagnostyczne. Następnie planuje jedno krótkie modelowanie oraz zadanie stacjonarne, w którym rozpoznanie symboli jest potrzebne do ułożenia kolejności czynności. Materiał cyfrowy nie powinien wprowadzać dodatkowych treści.",
      materials: ["miniquiz lub kartoniki odpowiedzi", "schemat instalacji", "karta planu czynności", "jeden przykład rozwiązany"],
      boardSetup: "Na tablicy są cel, trzy kryteria planu oraz miejsca na dwa najczęstsze błędy z diagnozy. Nauczyciel nie pokazuje poprawnych odpowiedzi przed zebraniem wyborów klasy.",
      successProduct: "Uczeń poprawnie rozpoznaje kluczowe symbole i tworzy bezpieczną, logiczną kolejność czynności na podstawie schematu.",
      fallback: "Brak internetu nie zmienia przebiegu. Pytania są wyświetlone albo odczytane, uczniowie podnoszą kartoniki i zapisują odpowiedzi, a dalsza praca odbywa się na wydruku."
    },
    lesson: [
      { minutes: 6, title: "Diagnoza", teacher: "Uruchamia trzy pytania o symbole i zbiera odpowiedzi jednocześnie.", students: "Najpierw odpowiadają samodzielnie, bez podpowiedzi pary.", evidence: "Rozkład odpowiedzi pokazuje, które oznaczenia są mylone.", decision: "Jeżeli ponad jedna trzecia klasy myli ten sam symbol, nauczyciel przechodzi do modelowania; w przeciwnym razie prosi ucznia o wyjaśnienie." },
      { minutes: 9, title: "Wyjaśnienie i model", teacher: "Głośno odczytuje fragment schematu, wskazując, skąd bierze kolejne informacje.", students: "Śledzą tok i uzupełniają dwa brakujące kroki.", evidence: "Odpowiedzi w lukach pokazują, czy uczniowie rozumieją relacje, nie tylko nazwy symboli.", decision: "Gdy uczniowie zgadują, nauczyciel wraca do jednego połączenia na schemacie." },
      { minutes: 17, title: "Plan czynności", teacher: "Przekazuje zadanie parom i zadaje pytania kierujące.", students: "Układają kolejność, przypisują symbole do kroków i zaznaczają punkt kontroli.", evidence: "Na karcie powstaje plan z uzasadnieniem dwóch kroków.", decision: "Po ośmiu minutach nauczyciel pokazuje minimalny szkielet, jeśli wiele par nie rozpoczęło." },
      { minutes: 8, title: "Porównanie", teacher: "Wybiera dwa różne plany i odnosi je do kryteriów.", students: "Wskazują mocny punkt i ryzyko każdej wersji.", evidence: "Uzasadnienia ujawniają, czy rozumieją kolejność.", decision: "Dyskusja kończy się po jednym kluczowym sporze, aby pozostał czas na korektę." },
      { minutes: 5, title: "Follow-up", teacher: "Zadaje nowe pytanie z tym samym symbolem w innym miejscu.", students: "Odpowiadają indywidualnie i poprawiają jeden krok planu.", evidence: "Nowa odpowiedź pokazuje natychmiastowe przeniesienie wiedzy.", decision: "Pytanie wraca po kilku dniach, jeśli błąd nadal jest częsty." }
    ],
    teacherPrompt: "Najpierw sprawdzimy, co już rozpoznajecie. Potem wspólnie przejdziemy przez jeden fragment, a większość czasu wykorzystacie na plan z rzeczywistego schematu.",
    vocational: {
      context: "Technik elektryk, klasa druga. Uczniowie czytają uproszczony schemat obwodu oświetleniowego i przygotowują kolejność analizy przed wykonaniem ćwiczenia pracownianego.",
      goal: "Uczeń rozpoznaje cztery symbole, odczytuje ich połączenia i planuje czynności kontrolne bez wykonywania prac pod napięciem.",
      materials: ["schemat obwodu", "lista symboli", "karta kolejności", "trzy pytania wejściowe"],
      instruction: "Na podstawie schematu zapisz kolejność czynności potrzebnych do sprawdzenia obwodu. Przy dwóch krokach wskaż symbol lub połączenie, które uzasadnia decyzję. Nie wykonujesz dziś czynności przy instalacji.",
      phases: ["diagnoza symboli", "model odczytu jednego połączenia", "planowanie w parach", "porównanie dwóch planów", "indywidualna korekta"],
      product: "Plan sześciu kroków z punktem kontroli i dwoma odwołaniami do schematu.",
      likelyErrors: ["nazywanie symboli bez odczytania połączeń", "pominięcie punktu kontroli", "kolejność wynikająca z pamięci, nie z dokumentacji"],
      teacherResponses: ["Pokaż na schemacie, skąd wynika ten krok.", "Co sprawdzasz przed kolejną czynnością?", "Czy ten symbol oznacza element, czy sposób połączenia?"],
      closing: "Uczniowie odkładają urządzenia przed rozpoczęciem części stacjonarnej. Nauczyciel podkreśla, że materiał cyfrowy pomógł rozpoznać trudność, ale dowodem uczenia się jest plan oparty na schemacie."
    },
    general: { subject: "Geografia", topic: "Odczyt danych z mapy i wybór lokalizacji", setup: "Trzy pytania na ZPE sprawdzają skalę, kierunek i legendę. Potem pary pracują z wydrukowaną mapą.", flow: "Nauczyciel omawia najczęstszy błąd, a uczniowie wybierają lokalizację obiektu i uzasadniają ją dwoma danymi.", product: "Decyzja lokalizacyjna z dwoma odniesieniami do mapy.", check: "Na końcu każdy rozwiązuje podobne pytanie na innym fragmencie mapy." },
    engagement: { firstStep: "Znajdź na schemacie symbol wskazany na tablicy i obrysuj go.", segments: "Po 6 minutach diagnozy następuje 9 minut modelowania, potem dwa krótkie etapy pracy w parze.", returnPrompt: "Wskaż palcem symbol, z którego wynika twój trzeci krok.", role: "Uczeń może być osobą weryfikującą odwołania do schematu, ale zapisuje też własną odpowiedź końcową.", caution: "Nauczyciel opisuje konkretne zachowanie, na przykład brak rozpoczęcia zadania, zamiast przypisywać uczniowi brak motywacji lub zaburzenie uwagi." },
    assessment: { evidence: "Dowodem jest plan poprawiony po diagnozie i zastosowanie symboli w nowym układzie.", notGrade: "Pytania wejściowe służą decyzji nauczyciela i nie powinny być oceniane stopniem.", criteria: ["poprawnie odczytuje symbole", "układa logiczną kolejność", "uzasadnia kroki elementami schematu"], revision: "Pierwszy plan pozostaje widoczny. Uczeń dopisuje lub skreśla jeden krok innym kolorem i obok zapisuje powód zmiany." },
    mistakeFixes: [
      { mistake: "Cyfrowa część zajmuje połowę lekcji.", instead: "Ogranicz ją do diagnozy lub krótkiego materiału, a większość czasu przeznacz na zastosowanie i korektę." },
      { mistake: "Etapy nie odnoszą się do siebie.", instead: "Każde pytanie cyfrowe powiąż z decyzją w zadaniu stacjonarnym." },
      { mistake: "Każdy brak urządzenia jest traktowany jak nieprzygotowanie.", instead: "Zapewnij odpowiedź papierową lub pracę w parze z indywidualnym zapisem." }
    ]
  },

  "method-3.html": {
    boundaries: {
      isNot: "Klasyczna odwrócona klasa zakłada pierwszy kontakt z materiałem przed zajęciami. Tutaj stosujemy adaptację klasową: uczniowie przygotowują części tematu podczas lekcji, a następnie uczą się od siebie pod kontrolą nauczyciela. Nie jest to swobodna prezentacja ani zastąpienie wyjaśnienia nauczyciela wystąpieniami grup.",
      classroomProblem: "Metoda pomaga, gdy temat można podzielić na elementy, które trzeba później połączyć w jeden proces. Uczniowie zyskują odpowiedzialność za wyjaśnienie, ale nauczyciel zachowuje kontrolę nad poprawnością i domyka całość.",
      promiseLimit: "Badania nad flipped classroom dotyczą głównie wariantów z przygotowaniem przed lekcją. Nie należy automatycznie przenosić ich wyników na wersję realizowaną w całości w klasie. Adaptację trzeba oceniać przez jakość wyjaśnień i pracę uczniów."
    },
    classroom: [
      "Przy 30 uczniach powstaje sześć grup po pięć osób. Każda otrzymuje inny etap procesu oraz identyczny szablon: co się dzieje, jakie dane są potrzebne, jaki błąd może wystąpić i jak etap łączy się z następnym.",
      "Prezentacja grupy trwa maksymalnie 90 sekund. Dłuższe wystąpienia zabierają czas na łączenie części i sprzyjają bierności słuchaczy.",
      "Nauczyciel udostępnia materiały źródłowe na lekcji. Nie zakłada, że uczeń obejrzy film w domu. Telefon lub ZPE mogą służyć do otwarcia przydzielonego fragmentu, ale każda grupa dostaje również wydruk.",
      "Uczeń nieobecny otrzymuje gotową mapę procesu z jednym brakującym etapem do uzupełnienia. Uczniowie szybsi sprawdzają zależności między etapami, a nie dodają dekoracje do prezentacji.",
      "W grupie role są związane z treścią: osoba czytająca dane, porządkująca etapy, sprawdzająca kryteria, wyjaśniająca i zapisująca pytanie do innej grupy. Role można zmieniać na kolejnej lekcji."
    ],
    preparation: {
      before: "Nauczyciel dzieli proces na 5-6 rzeczywiście zależnych części i przygotowuje krótkie, porównywalne materiały. Do każdej części dopisuje jedno pytanie kontrolne. Najwięcej czasu oszczędza stały szablon mikroprezentacji; zmieniają się tylko treść i dane.",
      materials: ["sześć kart etapów", "szablon mikroprezentacji", "arkusz całego procesu", "kryteria poprawności"],
      boardSetup: "Na tablicy znajduje się oś procesu z pustymi miejscami na etapy oraz limit 90 sekund. Obok zapisane są kryteria: poprawność, związek z poprzednim etapem, przykład ryzyka.",
      successProduct: "Klasa tworzy wspólną mapę procesu realizacji zamówienia, a każdy uczeń potrafi odtworzyć kolejność i wyjaśnić zależność między dwoma etapami.",
      fallback: "Materiały drukowane i arkusz A3 wystarczą. Jeśli prezentacja cyfrowa nie działa, grupa umieszcza kartę na osi i wyjaśnia etap ustnie."
    },
    lesson: [
      { minutes: 5, title: "Rama procesu", teacher: "Pokazuje początek i koniec realizacji zamówienia oraz produkt końcowy lekcji.", students: "Indywidualnie przewidują dwa etapy pośrednie.", evidence: "Wstępne zapisy ujawniają wiedzę wyjściową.", decision: "Jeżeli uczniowie nie rozumieją celu procesu, nauczyciel podaje jeden konkretny przykład zamówienia." },
      { minutes: 14, title: "Przygotowanie części", teacher: "Przydziela materiały i pilnuje kryteriów zamiast redagować tekst za grupy.", students: "Opracowują etap według szablonu i przygotowują 90-sekundowe wyjaśnienie.", evidence: "Każda grupa ma kartę z działaniem, danymi, ryzykiem i połączeniem.", decision: "Po siedmiu minutach grupa bez produktu dostaje początek zdania i dwa dane do wyboru." },
      { minutes: 12, title: "Mikroprezentacje", teacher: "Pilnuje czasu, zapisuje etapy na osi i koryguje tylko błędy krytyczne.", students: "Wyjaśniają części i notują jedno słowo kluczowe z każdej prezentacji.", evidence: "Mapa procesu zapełnia się, a notatki słuchaczy pokazują odbiór.", decision: "Niejasne wyjaśnienie jest powtarzane po pytaniu doprecyzowującym, nie po długim wykładzie." },
      { minutes: 9, title: "Łączenie procesu", teacher: "Zadaje pytania o zależności i wprowadza jedną celową zmianę danych.", students: "W parach poprawiają kolejność i przewidują skutek pominięcia etapu.", evidence: "Powstaje indywidualnie uzupełniona mapa.", decision: "Jeśli klasa zna nazwy, ale nie relacje, nauczyciel pracuje na jednym skutku pominięcia." },
      { minutes: 5, title: "Sprawdzenie indywidualne", teacher: "Zadaje pytanie, którego nie można rozwiązać tylko z własnej części.", students: "Odpowiadają samodzielnie na podstawie całej mapy.", evidence: "Odpowiedź pokazuje, czy nastąpiło połączenie wiedzy.", decision: "Brak połączenia oznacza krótki powrót do osi na następnej lekcji." }
    ],
    teacherPrompt: "Każda grupa odpowiada za jeden fragment, ale celem nie jest sześć prezentacji. Celem jest to, aby każdy połączył wszystkie etapy i potrafił wyjaśnić, co się stanie po pominięciu jednego z nich.",
    vocational: {
      context: "Technik żywienia i usług gastronomicznych. Klasa analizuje realizację zamówienia na obsługę przerwy konferencyjnej od przyjęcia zlecenia do wydania potraw.",
      goal: "Uczeń porządkuje etapy, rozpoznaje dane potrzebne w każdym z nich i przewiduje skutek błędu organizacyjnego.",
      materials: ["opis zamówienia", "karty sześciu etapów", "szablon wyjaśnienia", "wspólna oś procesu"],
      instruction: "Przygotujcie wyjaśnienie swojego etapu: nazwa działania, dwie potrzebne informacje, jedno ryzyko oraz zdanie łączące etap z kolejnym. Macie 90 sekund i nie tworzycie slajdów.",
      phases: ["przyjęcie zamówienia", "plan menu i ilości", "zaopatrzenie", "przygotowanie", "kontrola i wydanie", "podsumowanie realizacji"],
      product: "Indywidualna mapa procesu z sześcioma etapami, zależnościami i jednym opisanym ryzykiem.",
      likelyErrors: ["opis czynności bez potrzebnych danych", "brak połączenia z następnym etapem", "skupienie na wyglądzie prezentacji"],
      teacherResponses: ["Jakiej informacji nie możecie pominąć?", "Co otrzymuje kolejny etap?", "Jaki konkretny skutek ma ten błąd?"],
      closing: "Nauczyciel przedstawia zmianę liczby uczestników i pyta, które etapy trzeba ponownie przeliczyć. To sprawdza proces, a nie zapamiętanie kolejności wystąpień."
    },
    general: { subject: "Historia", topic: "Etapy procesu odzyskiwania niepodległości", setup: "Grupy otrzymują krótkie źródła dotyczące różnych wydarzeń i ten sam szablon przyczyna, działanie, skutek, związek.", flow: "Po mikroprezentacjach klasa układa wspólną oś, a nauczyciel koryguje uproszczenia chronologiczne.", product: "Oś z relacjami przyczynowo-skutkowymi, nie zbiór osobnych notatek.", check: "Uczeń wyjaśnia w trzech zdaniach związek między dwoma wydarzeniami z różnych części." },
    engagement: { firstStep: "Wpiszcie nazwę etapu i jedną informację, bez której nie da się go wykonać.", segments: "Praca grupowa ma dwa siedmiominutowe odcinki: treść, potem próba wyjaśnienia.", returnPrompt: "Wróć do swojej roli: sprawdź, czy grupa zapisała ryzyko i połączenie.", role: "Uczeń unikający wystąpień może być kontrolerem kryteriów i zadać pytanie innej grupie; rola nadal wymaga pracy z treścią.", caution: "Brak udziału w prezentacji nie przesądza o braku wiedzy. Indywidualne sprawdzenie po pracy grupowej jest konieczne." },
    assessment: { evidence: "Dowodem jest indywidualna mapa i odpowiedź łącząca różne etapy.", notGrade: "Nie warto oceniać pewności wystąpienia ani jakości slajdów, których metoda nie potrzebuje.", criteria: ["poprawnie opisuje własny etap", "wskazuje zależność z innym etapem", "odtwarza cały proces w pracy indywidualnej"], revision: "Po prezentacjach uczeń poprawia mapę innym kolorem. Nauczyciel może porównać przewidywaną kolejność z pierwszych pięciu minut z wersją końcową." },
    mistakeFixes: [
      { mistake: "Uczniowie przygotowują temat w domu.", instead: "Zapewnij materiał i czas w klasie, aby dostęp domowy nie decydował o udziale." },
      { mistake: "Prezentacje wypełniają całą lekcję.", instead: "Ustal 90 sekund, identyczny szablon i obowiązkowe zadanie łączące części." },
      { mistake: "Nauczyciel nie koryguje błędów, aby nie odbierać samodzielności.", instead: "Koryguj błędy krytyczne od razu, a pozostałe wykorzystaj w domknięciu." }
    ]
  },

  "metoda-retrieval-practice.html": {
    boundaries: {
      isNot: "Retrieval practice nie jest testem z zaskoczenia ani szybkim odpytywaniem na stopień. Uczeń próbuje wydobyć wiedzę bez patrzenia w notatki, sprawdza odpowiedź i otrzymuje możliwość korekty. Ponowne czytanie listy narzędzi nie uruchamia tego samego procesu.",
      classroomProblem: "Metoda odpowiada na sytuację, w której uczniowie rozpoznają treść w zeszycie, ale nie potrafią jej przywołać przed zadaniem praktycznym. Krótki powrót ujawnia luki, zanim niewłaściwy parametr lub kolejność zostaną użyte w dalszej pracy.",
      promiseLimit: "Badania wspierają practice testing i wydobywanie wiedzy, lecz efekt zależy od jakości pytań, informacji o poprawności i późniejszego zastosowania. Sama liczba quizów nie gwarantuje trwałej wiedzy."
    },
    classroom: [
      "Cała klasa odpowiada jednocześnie na 4-6 pytań. Najpierw każdy zapisuje własną próbę, dopiero później porównuje ją w parze. Dzięki temu nauczyciel widzi wiedzę większej liczby uczniów niż przy odpytywaniu pojedynczych osób.",
      "Pytania obejmują niewielką liczbę treści potrzebnych do bieżącej lekcji: nazwę narzędzia, parametr, kolejność kontroli i jedno pytanie zastosowania. Nie trzeba tworzyć pełnego sprawdzianu.",
      "Brak odpowiedzi jest informacją dydaktyczną, nie przewinieniem. Uczeń może oznaczyć niepewność znakiem zapytania, a po sprawdzeniu dopisuje poprawną odpowiedź i krótki powód.",
      "Uczniowie szybsi uzasadniają wybór albo tworzą podobne pytanie. Uczniowie wolniejsi odpowiadają na cztery pytania podstawowe. Każdy uczestniczy w sprawdzeniu.",
      "Uczeń nieobecny może wykonać zestaw na początku następnej lekcji. Pytania powinny wracać w zmienionej kolejności i kontekście, a nie jako identyczna kartka do zapamiętania."
    ],
    preparation: {
      before: "Nauczyciel wybiera pięć informacji, bez których nie da się wykonać kolejnego zadania, oraz przygotowuje odpowiedzi z krótkim wyjaśnieniem. Dwa pytania dotyczą faktów, dwa kolejności lub parametrów, a ostatnie zastosowania w nowej sytuacji. Zestaw można ponownie wykorzystać po tygodniu z innymi danymi.",
      materials: ["pięć pytań", "karta odpowiedzi z wyjaśnieniem", "schemat kontroli pojazdu", "krótki przypadek zastosowania"],
      boardSetup: "Na tablicy są zasady: bez notatek, próba jest obowiązkowa, stopień nie jest wystawiany, odpowiedź zostanie sprawdzona. Widoczny jest także czas dwóch minut na pierwszą rundę.",
      successProduct: "Uczeń przywołuje nazwy, parametry i kolejność, a następnie używa ich w planie kontroli konkretnego przypadku.",
      fallback: "Kartka, tablica i odpowiedź ustna po indywidualnym zapisie wystarczą. Telefon nie jest potrzebny do mechanizmu wydobywania."
    },
    lesson: [
      { minutes: 5, title: "Pierwsze wydobycie", teacher: "Wyświetla pięć pytań i przypomina, że wynik nie jest oceną.", students: "Odpowiadają bez notatek i oznaczają pewność.", evidence: "Nauczyciel widzi odpowiedzi całej klasy.", decision: "Jeżeli prawie nikt nie odpowiada na pytanie, nauczyciel nie przeciąga zgadywania i przechodzi do krótkiego przypomnienia." },
      { minutes: 7, title: "Sprawdzenie", teacher: "Omawia odpowiedzi i prosi o wskazanie przyczyny dwóch częstych pomyłek.", students: "Korygują własne zapisy i porównują tok w parze.", evidence: "Na kartach widoczne są poprawki, nie tylko wynik.", decision: "Gdy błąd dotyczy pojęcia, nauczyciel podaje przykład i kontrprzykład." },
      { minutes: 15, title: "Zastosowanie", teacher: "Przedstawia przypadek pojazdu i wymaga ułożenia kontroli.", students: "Dobierają narzędzia, parametry i kolejność do danych przypadku.", evidence: "Powstaje plan, który wykorzystuje odzyskaną wiedzę.", decision: "Jeśli uczniowie nadal korzystają z listy mechanicznie, nauczyciel pyta o uzasadnienie każdego kroku." },
      { minutes: 11, title: "Porównanie planów", teacher: "Pokazuje dwa anonimowe plany i prowadzi korektę.", students: "Wskazują brakujący parametr i ryzyko złej kolejności.", evidence: "Uzasadnienie łączy fakt z decyzją.", decision: "Nauczyciel zatrzymuje dyskusję po rozwiązaniu najważniejszego błędu." },
      { minutes: 7, title: "Drugie wydobycie", teacher: "Zadaje trzy pytania w zmienionej formie.", students: "Odpowiadają bez zaglądania do pierwszej części.", evidence: "Porównanie prób pokazuje natychmiastową zmianę.", decision: "Dwa pytania wrócą za tydzień niezależnie od wyniku; trudne pytanie wróci wcześniej." }
    ],
    teacherPrompt: "Najpierw spróbujcie wydobyć odpowiedź z pamięci. Pomyłka pokaże nam, co trzeba poprawić przed użyciem tej wiedzy w procedurze.",
    vocational: {
      context: "Mechanik pojazdów samochodowych. Uczniowie przed analizą przypadku przypominają narzędzia, parametry i kolejność podstawowej kontroli układu ładowania.",
      goal: "Uczeń przywołuje kluczowe informacje i stosuje je w planie diagnostycznym, bez wykonywania czynności przy pojeździe podczas tej lekcji.",
      materials: ["zestaw pięciu pytań", "dane objawów pojazdu", "karta planu kontroli", "odpowiedzi z objaśnieniem"],
      instruction: "Bez notatek odpowiedz na pięć pytań. Po sprawdzeniu ułóż plan kontroli dla opisanego przypadku: narzędzie, parametr, kolejność i warunek przejścia dalej.",
      phases: ["próba z pamięci", "natychmiastowa korekta", "planowanie procedury", "analiza błędu", "ponowna próba"],
      product: "Plan diagnostyczny z właściwymi narzędziami, parametrami i uzasadnioną kolejnością.",
      likelyErrors: ["mylenie narzędzia z badaną wielkością", "podawanie wartości bez jednostki", "rozpoczęcie od kroku zależnego od wcześniejszej kontroli"],
      teacherResponses: ["Jaką wielkość mierzysz i w jakiej jednostce?", "Co musisz ustalić przed tym krokiem?", "Który objaw z przypadku uzasadnia wybór?"],
      closing: "Uczniowie nie liczą punktów do oceny. Zaznaczają dwa pytania, które powinny wrócić. Nauczyciel umieszcza je w krótkim otwarciu lekcji po kilku dniach."
    },
    general: { subject: "Biologia", topic: "Pojęcia potrzebne do omówienia fotosyntezy", setup: "Przed nowym tematem uczniowie z pamięci zapisują funkcje chlorofilu, aparatów szparkowych i dwóch substratów.", flow: "Po sprawdzeniu nauczyciel wprowadza nowy schemat procesu, stale odwołując się do odzyskanych pojęć.", product: "Uzupełniony schemat z krótkim wyjaśnieniem zależności.", check: "Trzy pytania wracają po tygodniu wraz z jednym pytaniem zastosowania." },
    engagement: { firstStep: "Zapisz nazwę jednego narzędzia, którego użyłbyś jako pierwszego.", segments: "Dwie minuty próby, trzy minuty sprawdzenia, potem konkretne zastosowanie ograniczają długi czas oczekiwania.", returnPrompt: "Wróć do pytania trzeciego i dopisz jednostkę, nawet jeśli nie pamiętasz wartości.", role: "W parze uczeń może sprawdzać uzasadnienie kolejności, ale pierwsza i ostatnia odpowiedź są indywidualne.", caution: "Puste pole może oznaczać brak wiedzy, niepewność albo niewejście w zadanie. Nauczyciel reaguje na obserwowany krok, nie diagnozuje przyczyny." },
    assessment: { evidence: "Dowodem jest zmiana między próbami i poprawne użycie wiedzy w planie.", notGrade: "Nie warto oceniać stopniem pierwszej próby, szybkości ani deklarowanej pewności.", criteria: ["przywołuje kluczowe pojęcia i jednostki", "koryguje błędną odpowiedź", "stosuje wiedzę w uzasadnionej kolejności"], revision: "Uczeń nie ściera pierwszej odpowiedzi. Dopisuje poprawkę obok, dzięki czemu widzi, co odzyskał sam, a co wymagało przypomnienia." },
    mistakeFixes: [
      { mistake: "Miniquiz staje się niezapowiedzianą kartkówką.", instead: "Powiedz cel, nie wystawiaj stopnia i zapewnij natychmiastowe sprawdzenie oraz korektę." },
      { mistake: "Pytania dotyczą przypadkowych szczegółów.", instead: "Wybierz wiedzę potrzebną do dzisiejszego zastosowania i przyszłych zadań." },
      { mistake: "Po odpowiedziach lekcja idzie dalej bez omówienia.", instead: "Zatrzymaj się przy dwóch błędach i użyj tej samej wiedzy w nowym przypadku." }
    ]
  },

  "metoda-powtorki-rozlozone.html": {
    boundaries: {
      isNot: "Powtórki rozłożone nie oznaczają ciągłego rozpoczynania lekcji od tego samego testu ani zostawienia całej powtórki na tydzień przed egzaminem. Treść wraca po przerwie, w krótkiej formie i zwykle w nieco innym zastosowaniu.",
      classroomProblem: "Metoda pomaga utrzymać dostęp do symboli, jednostek i zależności, które są potrzebne w wielu działach, ale znikają z bieżących lekcji. Zamiast organizować osobną lekcję powtórzeniową, nauczyciel wplata kilka pytań w kolejne tygodnie.",
      promiseLimit: "Badania wspierają rozkładanie nauki w czasie, lecz nie podają jednego kalendarza właściwego dla każdego materiału. Odstępy trzeba dopasować do trudności, częstości użycia i wyników klasy."
    },
    classroom: [
      "Nauczyciel wybiera 8-12 treści o wysokiej wartości i zapisuje plan ich powrotu, na przykład po dwóch dniach, tygodniu i trzech tygodniach. Na jednej lekcji wracają tylko trzy lub cztery elementy.",
      "W klasie 30-osobowej wszyscy odpowiadają jednocześnie na kartce, kartonikach albo w krótkim formularzu. Sprawdzenie trwa kilka minut i od razu prowadzi do korekty.",
      "Uczniowie szybsi tworzą przykład użycia symbolu lub zależności. Uczniowie wolniejsi pracują z mniejszą liczbą elementów, ale nie otrzymują odpowiedzi przed własną próbą.",
      "Nieobecność nie wymaga odrabiania każdego quizu. Uczeń spotka treść w następnym zaplanowanym powrocie, a nauczyciel może dodać jeden element do jego karty startowej.",
      "Plan powtórek powinien być widoczny dla nauczyciela, niekoniecznie dla ucznia. Nie potrzeba rozbudowanego systemu: wystarczy tabela temat, data pierwszego użycia, terminy powrotu i typowe błędy."
    ],
    preparation: {
      before: "Nauczyciel wybiera symbole i zależności mechatroniczne potrzebne w kolejnych działach. Przygotowuje zestaw kart z krótkimi pytaniami oraz trzy warianty: rozpoznanie, wyjaśnienie i zastosowanie. Ten sam bank może służyć przez semestr.",
      materials: ["karta czterech powrotów", "schemat z symbolami", "odpowiedzi z wyjaśnieniem", "prosty kalendarz powtórek"],
      boardSetup: "W rogu tablicy znajduje się stałe pole Wraca z poprzednich lekcji. Uczniowie wiedzą, że to próba pamięciowa bez stopnia, a odpowiedzi będą sprawdzone.",
      successProduct: "Uczeń rozpoznaje symbol, podaje jednostkę i stosuje zależność w zmienionym fragmencie schematu.",
      fallback: "Wydrukowane paski z pytaniami i zeszyt w pełni zastępują platformę. Odpowiedzi mogą być omówione z tablicy."
    },
    lesson: [
      { minutes: 5, title: "Powrót po czasie", teacher: "Daje cztery pytania z różnych wcześniejszych lekcji.", students: "Odpowiadają bez notatek.", evidence: "Karty pokazują, co jest nadal dostępne.", decision: "Nauczyciel wybiera do omówienia najwyżej dwa błędy istotne dla dzisiejszego zadania." },
      { minutes: 6, title: "Korekta", teacher: "Pokazuje odpowiedzi i krótko wyjaśnia relację symbolu z funkcją.", students: "Poprawiają oraz dopisują jednostkę lub warunek użycia.", evidence: "Korekta jest widoczna przy pierwotnej próbie.", decision: "Gdy błąd jest powszechny, treść wróci szybciej niż planowano." },
      { minutes: 16, title: "Nowe zastosowanie", teacher: "Udostępnia schemat układu z tymi samymi pojęciami w nowej konfiguracji.", students: "W parach identyfikują elementy i obliczają lub wyjaśniają zależność.", evidence: "Powstaje opis działania fragmentu układu.", decision: "Jeśli pary tylko nazywają symbole, nauczyciel wymaga zdania o funkcji." },
      { minutes: 11, title: "Porównanie rozwiązań", teacher: "Zestawia dwa tory rozumowania.", students: "Sprawdzają jednostki, zależności i poprawiają zapis.", evidence: "Uczeń potrafi wskazać źródło błędu.", decision: "Jedna powtarzająca się pomyłka trafia do banku kolejnego powrotu." },
      { minutes: 7, title: "Nowa treść i plan powrotu", teacher: "Wprowadza jeden nowy symbol i zapowiada, że wróci on w innym zadaniu.", students: "Łączą symbol z funkcją i przykładem.", evidence: "Powstaje pierwsza reprezentacja nowej treści.", decision: "Nauczyciel zapisuje termin pierwszego powrotu w swoim kalendarzu." }
    ],
    teacherPrompt: "Te cztery pytania nie podsumowują całego działu. Sprawdzają, czy nadal macie dostęp do wiedzy, której za chwilę użyjemy w innym układzie.",
    vocational: {
      context: "Technik mechatronik. W ciągu miesiąca wracają symbole czujników, jednostki wielkości elektrycznych i zależności potrzebne do czytania schematów.",
      goal: "Uczeń utrzymuje dostęp do kluczowych oznaczeń i wykorzystuje je w nowej konfiguracji układu.",
      materials: ["cztery pytania powrotne", "nowy fragment schematu", "karta analizy", "bank odpowiedzi"],
      instruction: "Najpierw bez notatek nazwij symbole i jednostki. Po sprawdzeniu przeanalizuj nowy układ: wskaż funkcję elementów, zależność między nimi i jedno miejsce, w którym błędna jednostka zmieniłaby wynik.",
      phases: ["wydobycie po przerwie", "korekta", "zastosowanie w nowym układzie", "analiza błędu", "zaplanowanie kolejnego powrotu"],
      product: "Opis fragmentu układu z poprawnymi symbolami, jednostkami i zależnością.",
      likelyErrors: ["rozpoznanie wyglądu bez funkcji", "brak jednostki", "mechaniczne użycie wzoru bez sprawdzenia wielkości"],
      teacherResponses: ["Co ten element robi w tym układzie?", "Jaka jednostka powinna pojawić się w wyniku?", "Czy zależność nadal działa przy tych danych?"],
      closing: "Nauczyciel nie zadaje masowej pracy domowej. Wybiera trzy elementy, które wrócą po tygodniu w krótkim pytaniu wejściowym."
    },
    general: { subject: "Język obcy zawodowy", topic: "Słownictwo opisujące reklamację", setup: "Sześć słów wraca po dwóch dniach w dopasowaniu, po tygodniu w zdaniach, a po trzech tygodniach w krótkim dialogu.", flow: "Każdy powrót zaczyna się od próby bez listy. Sprawdzenie następuje przed użyciem słów w nowym zadaniu.", product: "Krótka odpowiedź klientowi wykorzystująca cztery terminy.", check: "Nauczyciel notuje, które słowa nadal wymagają podpowiedzi." },
    engagement: { firstStep: "Zapisz tylko jednostkę dla pierwszej wielkości.", segments: "Powrót trwa pięć minut, korekta sześć, a reszta lekcji służy zastosowaniu.", returnPrompt: "Wróć do symbolu drugiego i dopisz jego funkcję jednym czasownikiem.", role: "Uczeń może kontrolować jednostki w parze, lecz wykonuje własną próbę przed rozmową.", caution: "Trudność w przypomnieniu po czasie jest oczekiwanym elementem uczenia, nie podstawą do oceny zdolności ucznia." },
    assessment: { evidence: "Dowodem jest poprawa dostępności wiedzy po czasie i użycie jej w zmienionym zadaniu.", notGrade: "Nie warto sumować punktów ze wszystkich krótkich powrotów do oceny bieżącej.", criteria: ["przywołuje symbol i jednostkę", "wyjaśnia funkcję", "stosuje treść w nowym układzie"], revision: "Uczeń prowadzi jedną kartę powrotów, na której zaznacza korekty. Nauczyciel używa jej do planowania, nie do publicznego rankingu." },
    mistakeFixes: [
      { mistake: "Powtórka zawsze ma identyczną formę.", instead: "Przechodź od rozpoznania do wyjaśnienia i zastosowania." },
      { mistake: "Wraca cały materiał z działu.", instead: "Wybierz kilka treści o wysokiej użyteczności i rozłóż je w czasie." },
      { mistake: "Brak odpowiedzi jest karany stopniem.", instead: "Potraktuj go jako sygnał do wcześniejszego powrotu i korekty." }
    ]
  },

  "metoda-nauczanie-jawne.html": {
    boundaries: {
      isNot: "Nauczanie jawne nie jest czterdziestopięciominutowym wykładem ani dyktowaniem algorytmu bez rozumienia. Nauczyciel wyjaśnia cel, modeluje tok decyzji, prowadzi krótką praktykę z klasą i stopniowo wycofuje wsparcie.",
      classroomProblem: "Metoda jest przydatna, gdy uczniowie nie wiedzą, jak rozpocząć złożone zadanie lub pomijają kluczowy krok. Zamiast liczyć, że odkryją procedurę samodzielnie, nauczyciel pokazuje sposób myślenia na jednym przykładzie.",
      promiseLimit: "Syntezy dotyczące explicit instruction wspierają jasne modelowanie i praktykę kierowaną, ale nie oznacza to, że wszystkie treści należy prowadzić jednym skryptem. Po modelu potrzebna jest samodzielna próba i sprawdzenie przeniesienia."
    },
    classroom: [
      "W dużej klasie model powinien być krótki i widoczny. Nauczyciel pracuje na jednej karcie lub fragmencie dokumentacji, wypowiada decyzje na głos i zatrzymuje się w miejscach, w których uczniowie zwykle popełniają błąd.",
      "Praktyka kierowana obejmuje odpowiedź całej klasy, nie tylko ochotników. Można użyć kart, zeszytów albo krótkiego sygnału ręką po indywidualnym namyśle.",
      "Wsparcie jest zdejmowane etapami: pełny model, przykład z pytaniami, zadanie z listą kroków, zadanie samodzielne. Nie wszyscy muszą przejść do ostatniego etapu w tej samej minucie.",
      "Uczeń nieobecny otrzymuje przykład rozwiązany z opisem decyzji i zaczyna od zadania z lukami. Nie musi odtwarzać wykładu z nagrania.",
      "Praca domowa nie jest warunkiem. Podczas lekcji musi pojawić się przynajmniej jedna samodzielna próba, bo samo śledzenie modelu może dawać złudne poczucie zrozumienia."
    ],
    preparation: {
      before: "Nauczyciel wybiera jedną procedurę planowania prac wykończeniowych, zaznacza miejsca decyzji i przygotowuje trzy przykłady o rosnącym stopniu samodzielności. Na tablicy nie umieszcza gotowego rozwiązania przed modelem.",
      materials: ["opis pomieszczenia", "modelowany plan", "zadanie z lukami", "samodzielny wariant"],
      boardSetup: "Tablica jest podzielona na dane, decyzję, uzasadnienie i kontrolę. W czasie modelowania nauczyciel uzupełnia pola, zamiast pokazywać cały zapis naraz.",
      successProduct: "Uczeń układa kolejność prac wykończeniowych i uzasadnia dwa zależne od siebie kroki.",
      fallback: "Metoda działa z tablicą i kartami. ZPE może przechować materiały, ale nie jest potrzebne do modelowania."
    },
    lesson: [
      { minutes: 5, title: "Cel i diagnoza", teacher: "Pokazuje opis pomieszczenia i prosi o pierwszy krok.", students: "Zapisują indywidualną propozycję.", evidence: "Odpowiedzi ujawniają punkt startowy.", decision: "Jeśli klasa zna pierwszy krok, modelowanie skupia się na trudniejszej zależności." },
      { minutes: 10, title: "Modelowanie", teacher: "Rozwiązuje jeden przykład na głos, nazywając dane, decyzje i kontrolę.", students: "Śledzą i odpowiadają na krótkie pytania przewidujące.", evidence: "Odpowiedzi pokazują, czy rozumieją powód kolejności.", decision: "Nauczyciel zwalnia tylko przy kroku, którego uzasadnienie jest niejasne." },
      { minutes: 10, title: "Praktyka kierowana", teacher: "Podaje drugi przykład i prowadzi klasę pytaniami.", students: "Uzupełniają luki i porównują odpowiedź.", evidence: "Każdy ma częściowo samodzielny plan.", decision: "Gdy większość nadal kopiuje model, nauczyciel zmienia dane i ponownie pyta o decyzję." },
      { minutes: 14, title: "Próba samodzielna", teacher: "Przekazuje trzeci wariant i pracuje z małą grupą potrzebującą wsparcia.", students: "Tworzą plan oraz dwa uzasadnienia.", evidence: "Samodzielny produkt pokazuje przeniesienie.", decision: "Uczniowie gotowi dostają warunek dodatkowy; pozostali korzystają z listy kroków." },
      { minutes: 6, title: "Kontrola i domknięcie", teacher: "Pokazuje kryteria i jeden typowy błąd.", students: "Sprawdzają swój plan i poprawiają krok.", evidence: "Korekta wskazuje rozumienie zależności.", decision: "Jeśli błąd wraca, następna lekcja zaczyna się od nowego przykładu z luką." }
    ],
    teacherPrompt: "Najpierw pokażę nie tylko co zapisuję, ale dlaczego wybieram taki krok. Potem część decyzji podejmiemy razem, a na końcu każdy sprawdzi się na nowym wariancie.",
    vocational: {
      context: "Branża budowlana. Uczniowie planują kolejność prac wykończeniowych w pomieszczeniu po wykonaniu instalacji.",
      goal: "Uczeń wykorzystuje dane o podłożu, wilgotności i kolejności robót do ułożenia wykonalnego planu.",
      materials: ["opis stanu pomieszczenia", "lista możliwych prac", "karta dane-decyzja-kontrola", "trzy warianty"],
      instruction: "Ułóż kolejność sześciu prac. Przy dwóch parach czynności zapisz, dlaczego jedna musi poprzedzać drugą. Na końcu wskaż punkt kontroli przed przejściem dalej.",
      phases: ["przewidywanie", "model nauczyciela", "wspólne uzupełnianie", "samodzielny plan", "korekta"],
      product: "Plan prac z dwiema zależnościami i punktem kontroli.",
      likelyErrors: ["porządek oparty na brzmieniu listy", "pominięcie warunku podłoża", "brak kontroli przed kolejnym etapem"],
      teacherResponses: ["Która dana wpływa na tę decyzję?", "Co stanie się, jeśli zamienisz te dwa kroki?", "Co sprawdzasz przed kontynuacją?"],
      closing: "Ostatni wariant różni się od modelu jedną istotną daną. Dzięki temu nauczyciel sprawdza, czy uczeń stosuje zasadę, a nie odtwarza kolejność."
    },
    general: { subject: "Matematyka", topic: "Zmiana procentowa", setup: "Nauczyciel modeluje odczyt danych i wybór podstawy procentowej.", flow: "Klasa rozwiązuje przykład z lukami, potem samodzielnie zadanie o innych danych i odwrotnym kierunku zmiany.", product: "Rozwiązanie z oznaczoną podstawą, działaniem i odpowiedzią.", check: "Jedno pytanie końcowe wymaga wskazania, dlaczego popularny sposób jest błędny." },
    engagement: { firstStep: "Podkreśl dane opisujące stan podłoża.", segments: "Model trwa 10 minut, po nim następuje odpowiedź ucznia co kilka minut.", returnPrompt: "Wróć do pola dane i wskaż informację, która uzasadnia pierwszy krok.", role: "Podczas pracy w parze uczeń może być kontrolerem zależności, ale samodzielny wariant wykonuje każdy.", caution: "Brak rozpoczęcia może wynikać z niejasnego punktu startowego. Najpierw trzeba go nazwać, zamiast oceniać zaangażowanie ucznia." },
    assessment: { evidence: "Dowodem jest samodzielny plan w zmienionym wariancie i uzasadnienie decyzji.", notGrade: "Nie należy oceniać stopniem odpowiedzi podczas modelowania i praktyki kierowanej.", criteria: ["wykorzystuje właściwe dane", "układa zależną kolejność", "wskazuje punkt kontroli"], revision: "Uczeń porównuje samodzielny plan z kryteriami i poprawia jedno miejsce. Pierwsza wersja pozostaje widoczna." },
    mistakeFixes: [
      { mistake: "Nauczyciel pokazuje gotowy plan bez toku decyzji.", instead: "Wypowiadaj na głos, jakie dane zauważasz i dlaczego wybierasz krok." },
      { mistake: "Po modelu od razu pojawia się trudne zadanie.", instead: "Dodaj przykład kierowany i stopniowo usuń podpory." },
      { mistake: "Uczniowie tylko obserwują.", instead: "Wstaw krótkie przewidywania, uzupełnienia i samodzielny wariant." }
    ]
  },

  "metoda-przyklady-rozwiazane.html": {
    boundaries: {
      isNot: "Przykład rozwiązany nie jest wzorem do bezmyślnego przepisania. Pokazuje strukturę zadania i decyzje, po czym część kroków zostaje usunięta, a uczeń przechodzi do nowego wariantu. Samo rozdanie gotowego rozwiązania nie wystarcza.",
      classroomProblem: "Metoda zmniejsza przeciążenie ucznia, który jednocześnie próbuje zrozumieć dokument, wybrać działanie i pilnować obliczeń. Pozwala skupić uwagę kolejno na danych, procedurze i kontroli wyniku.",
      promiseLimit: "Badania nad worked examples są szczególnie istotne dla początkujących i treści o jasno określonej procedurze. Wraz ze wzrostem biegłości zbyt pełny przykład może ograniczać potrzebny wysiłek, dlatego wsparcie trzeba wygaszać."
    },
    classroom: [
      "Klasa pracuje na trzech wersjach tej samej struktury: przykład pełny, przykład z dwiema lukami i samodzielne zadanie z nowymi danymi. Uczniowie nie muszą przechodzić dalej równocześnie.",
      "Nauczyciel zaznacza w przykładzie decyzje, nie tylko rachunki. Przy fakturze są to między innymi wybór stawki, ustalenie podstawy i kontrola zgodności wartości.",
      "Uczniowie szybsi otrzymują dokument z jednym błędem i mają go zdiagnozować. Uczniowie potrzebujący wsparcia korzystają z pytań przy lukach.",
      "Nieobecny uczeń zaczyna od przykładu pełnego z krótkim komentarzem do kroków, a nie od samodzielnego zadania bez wprowadzenia.",
      "Technologia może ujawniać kolejne kroki, lecz wydruk z zakrytą częścią działa równie dobrze. Kluczowe jest przejście od obserwacji do własnego wykonania."
    ],
    preparation: {
      before: "Nauczyciel przygotowuje poprawnie rozwiązaną fakturę, oznacza dane i kroki, tworzy drugi dokument z brakującymi decyzjami oraz trzeci z nowymi wartościami. Sprawdza wszystkie obliczenia i zgodność pojęć przed lekcją.",
      materials: ["pełny przykład faktury", "wersja z lukami", "nowy dokument", "lista trzech kryteriów"],
      boardSetup: "Na tablicy są cztery pytania: jakie dane, jaka stawka, jakie działanie, jak kontroluję wynik. Kolory oznaczają dane, decyzje i kontrolę.",
      successProduct: "Uczeń analizuje nową fakturę, oblicza wartość brutto i uzasadnia dobór stawki oraz sposób kontroli.",
      fallback: "Trzy wydruki i zakrywanie kolejnych pól kartką w pełni wystarczą."
    },
    lesson: [
      { minutes: 7, title: "Analiza przykładu", teacher: "Pokazuje pełny dokument i pyta o funkcję każdego kroku.", students: "Zaznaczają dane, decyzje i kontrolę.", evidence: "Oznaczenia ujawniają, czy widzą strukturę.", decision: "Jeśli uczniowie skupiają się tylko na wyniku, nauczyciel wraca do pytania o podstawę obliczenia." },
      { minutes: 9, title: "Wyjaśnienie parze", teacher: "Prosi o odtworzenie toku bez przepisywania liczb.", students: "W parach wyjaśniają, dlaczego kolejne kroki są potrzebne.", evidence: "Wyjaśnienia słowne pokazują rozumienie procedury.", decision: "Nauczyciel podaje początek zdania, gdy wyjaśnienie ogranicza się do czytania zapisu." },
      { minutes: 10, title: "Przykład z lukami", teacher: "Udostępnia drugi dokument i obserwuje miejsca zatrzymania.", students: "Uzupełniają dwie decyzje i jeden rachunek.", evidence: "Luki pokazują, czy wsparcie można zmniejszyć.", decision: "Uczeń, który popełnia błąd pojęciowy, wraca do oznaczonego kroku pełnego przykładu." },
      { minutes: 13, title: "Nowe dane", teacher: "Przekazuje samodzielny wariant i wspiera małą grupę pytaniami.", students: "Wykonują analizę oraz kontrolę wyniku.", evidence: "Samodzielny dokument jest głównym dowodem.", decision: "Szybsi uczniowie szukają celowo wprowadzonego błędu w dodatkowej fakturze." },
      { minutes: 6, title: "Porównanie i korekta", teacher: "Pokazuje rozwiązanie oraz dwa typowe błędy.", students: "Poprawiają pracę i opisują źródło pomyłki.", evidence: "Korekta dotyczy procedury, nie samej liczby.", decision: "Najczęstszy błąd staje się luką w przykładzie na kolejnej lekcji." }
    ],
    teacherPrompt: "Nie przepisujcie przykładu. Zaznaczcie, jaką decyzję pokazuje każdy krok. Za chwilę część podpowiedzi zniknie.",
    vocational: {
      context: "Technik ekonomista. Uczniowie analizują uproszczoną fakturę, ustalają wartość netto, podatek i wartość brutto.",
      goal: "Uczeń rozpoznaje strukturę obliczenia, poprawnie dobiera dane i kontroluje wynik w nowym dokumencie.",
      materials: ["trzy wersje faktury", "oznaczenia kroków", "karta kontroli", "kalkulator"],
      instruction: "W pełnym przykładzie nazwij funkcję kroków. Uzupełnij brakujące pola w drugim dokumencie. Następnie oblicz wartości w nowej fakturze i zapisz, jak sprawdziłeś wynik.",
      phases: ["analiza pełnego przykładu", "wyjaśnienie toku", "uzupełnienie luk", "samodzielne dane", "kontrola"],
      product: "Poprawnie uzupełniona faktura z opisem decyzji i kontroli.",
      likelyErrors: ["obliczenie podatku od niewłaściwej podstawy", "pominięcie stawki", "brak kontroli sumy"],
      teacherResponses: ["Która wartość jest podstawą tego działania?", "Co mówi stawka w tym wierszu?", "Jak bez ponownego liczenia ocenisz, czy wynik jest możliwy?"],
      closing: "Nauczyciel pokazuje dodatkowy dokument zawierający błąd. Uczniowie wskazują krok, w którym powstał, co lepiej sprawdza rozumienie niż samo porównanie wyniku."
    },
    general: { subject: "Matematyka", topic: "Równanie liniowe", setup: "Pierwszy przykład zawiera opis celu każdego przekształcenia, drugi ma dwie luki, trzeci zmienione współczynniki.", flow: "Uczniowie najpierw przewidują kolejny krok, potem samodzielnie rozwiązują wariant.", product: "Rozwiązanie z kontrolą przez podstawienie.", check: "Uczeń wskazuje błąd w obcym rozwiązaniu i wyjaśnia jego skutek." },
    engagement: { firstStep: "Obrysuj wartość, od której obliczono podatek.", segments: "Każdy etap trwa 7-13 minut i kończy się widoczną odpowiedzią.", returnPrompt: "Wróć do drugiej luki i nazwij decyzję, zanim wpiszesz liczbę.", role: "W parze uczeń może być osobą wyjaśniającą kontrolę wyniku, ale nowe dane rozwiązuje samodzielnie.", caution: "Powolne tempo przy nowej procedurze nie oznacza braku zdolności. Nauczyciel obserwuje, przy którym kroku potrzebne jest wsparcie." },
    assessment: { evidence: "Dowodem jest poprawne wykonanie nowego wariantu i diagnoza błędu.", notGrade: "Nie ocenia się pierwszego uzupełnienia luk, które jest praktyką kierowaną.", criteria: ["wybiera właściwe dane", "wykonuje kroki w poprawnej kolejności", "kontroluje wynik"], revision: "Uczeń poprawia tylko krok źródłowy, a następnie aktualizuje dalsze wartości. Dzięki temu widzi zależność błędu od całej procedury." },
    mistakeFixes: [
      { mistake: "Uczeń przepisuje gotowe rozwiązanie.", instead: "Zasłoń kolejny krok i poproś o przewidywanie oraz wyjaśnienie funkcji." },
      { mistake: "Pełny przykład pozostaje dostępny przy każdej próbie.", instead: "Stopniowo usuwaj wsparcie i wprowadź nowe dane." },
      { mistake: "Przykład zawiera tylko rachunki.", instead: "Oznacz także decyzje, dane i sposób kontroli." }
    ]
  },

  "metoda-feedback-poprawa.html": {
    boundaries: {
      isNot: "Feedback nie jest samym komentarzem, pochwałą ani listą wszystkich usterek. W tej metodzie wskazówka dotyczy jawnego kryterium, a uczeń ma czas i obowiązek wykorzystać ją w drugiej wersji produktu.",
      classroomProblem: "Metoda rozwiązuje problem prac oddawanych raz, po których uczeń widzi ocenę, ale nie ćwiczy lepszego wykonania. Krótka pętla komentarz-poprawa może odbyć się w jednej lekcji i nie wymaga sprawdzania długich tekstów po godzinach.",
      promiseLimit: "Wytyczne EEF podkreślają, że znaczenie ma jakość i użycie informacji zwrotnej. Więcej komentarzy nie musi pomagać; nieselektywny feedback może przeciążyć ucznia i nauczyciela."
    },
    classroom: [
      "Przy 30 uczniach nauczyciel wybiera dwa lub trzy kryteria, a nie poprawia każdego elementu. Najpierw analizuje dwa anonimowe przykłady i przekazuje wspólną informację klasie.",
      "Indywidualny komentarz może mieć postać jednego kodu kryterium i pytania: D1 wskaż dane z reklamacji, U2 połącz decyzję z warunkami. Kody są wcześniej wyjaśnione.",
      "Uczniowie szybsi przygotowują drugi wariant odpowiedzi o innym tonie, lecz nadal stosują kryteria. Uczniowie wolniejsi poprawiają jeden kluczowy fragment zamiast przepisywać całość.",
      "Nieobecny uczeń otrzymuje przykład, kryteria i własny termin krótkiej poprawy. Nie musi uczestniczyć w publicznym omawianiu, aby skorzystać z pętli.",
      "Stopień, jeśli jest potrzebny, można ustalić po poprawie zgodnie z zasadami nauczyciela. Sama pierwsza wersja powinna przede wszystkim dostarczyć informacji do dalszego działania."
    ],
    preparation: {
      before: "Nauczyciel przygotowuje przypadek reklamacji hotelowej, wzór odpowiedzi i trzy kryteria. Wybiera po jednym przykładzie odpowiedzi spełniającej oraz niespełniającej kryterium. Ustala krótkie kody feedbacku, aby komentarze były wykonalne podczas lekcji.",
      materials: ["opis reklamacji", "karta pierwszej i drugiej wersji", "trzy kryteria", "dwa anonimowe przykłady"],
      boardSetup: "Na tablicy są kryteria: decyzja zgodna z danymi, uzasadnienie, profesjonalny komunikat. Obok widnieje pole Co zmieniam w drugiej wersji.",
      successProduct: "Uczeń tworzy odpowiedź na reklamację i poprawia konkretny fragment po informacji zwrotnej.",
      fallback: "Komentarz ustny, kod na kartce i poprawa innym kolorem nie wymagają urządzeń."
    },
    lesson: [
      { minutes: 6, title: "Kryteria i przypadek", teacher: "Czyta reklamację i omawia trzy kryteria.", students: "Wskazują dane wpływające na decyzję.", evidence: "Zaznaczenia pokazują, czy rozumieją sytuację.", decision: "Jeśli dane są błędnie odczytane, nauczyciel wyjaśnia przypadek przed pisaniem." },
      { minutes: 12, title: "Pierwsza wersja", teacher: "Obserwuje i zbiera dwa typowe fragmenty.", students: "Piszą krótką odpowiedź do gościa.", evidence: "Powstaje produkt możliwy do porównania z kryteriami.", decision: "Po sześciu minutach uczeń bez tekstu dostaje ramę trzech zdań." },
      { minutes: 8, title: "Wspólny feedback", teacher: "Pokazuje dwa anonimowe fragmenty i prowadzi analizę kryteriów.", students: "Wskazują mocny element i miejsce korekty.", evidence: "Uzasadnienia pokazują rozumienie kryteriów.", decision: "Nauczyciel nie omawia wszystkich błędów, tylko te blokujące cel." },
      { minutes: 12, title: "Poprawa", teacher: "Daje kod lub pytanie do jednego kryterium.", students: "Tworzą drugą wersję fragmentu i zaznaczają zmianę.", evidence: "Porównanie wersji pokazuje użycie feedbacku.", decision: "Jeśli uczeń tylko przepisuje wzór, odpowiada, dlaczego zmiana lepiej spełnia kryterium." },
      { minutes: 7, title: "Domknięcie", teacher: "Zbiera po jednym przykładzie skutecznej poprawy.", students: "Kończą zdanie: moja najważniejsza zmiana to...", evidence: "Refleksja odnosi się do produktu.", decision: "Kryterium, które nadal sprawia trudność, wraca w następnym zadaniu." }
    ],
    teacherPrompt: "Pierwsza wersja nie kończy pracy. Otrzymacie wskazówkę do jednego kryterium i poprawicie fragment, tak aby zmiana była widoczna.",
    vocational: {
      context: "Technik hotelarstwa. Gość zgłasza brak przygotowanego pokoju mimo wcześniejszego potwierdzenia i oczekuje rozwiązania.",
      goal: "Uczeń formułuje profesjonalną odpowiedź, opiera decyzję na danych i proponuje możliwe działanie.",
      materials: ["opis reklamacji", "standard odpowiedzi", "rubryka kryteriów", "karta dwóch wersji"],
      instruction: "Napisz odpowiedź w 4-5 zdaniach: odnieś się do sytuacji, przedstaw działanie i uzasadnij je danymi. Po komentarzu popraw wskazany fragment, nie dopisuj przypadkowych ozdobników.",
      phases: ["analiza danych", "pierwsza wersja", "porównanie z kryteriami", "feedback", "druga wersja"],
      product: "Dwie wersje odpowiedzi na reklamację z oznaczoną zmianą.",
      likelyErrors: ["ogólne przeprosiny bez działania", "obietnica wykraczająca poza dane", "ton obronny lub nieprecyzyjny"],
      teacherResponses: ["Jakie rozwiązanie proponujesz konkretnie?", "Która informacja z przypadku uzasadnia decyzję?", "Jak to zdanie może odebrać gość?"],
      closing: "Dwie odpowiedzi są czytane anonimowo. Klasa wskazuje nie najlepszy styl, lecz konkretną zmianę, która poprawiła zgodność z kryterium."
    },
    general: { subject: "Język polski", topic: "Akapit argumentacyjny", setup: "Uczeń pisze tezę, argument i przykład w jednym akapicie.", flow: "Nauczyciel daje komentarz wyłącznie do związku przykładu z argumentem, a uczeń poprawia dwa zdania.", product: "Pierwsza i poprawiona wersja akapitu.", check: "W kolejnym temacie nauczyciel sprawdza, czy związek pojawia się bez przypomnienia." },
    engagement: { firstStep: "Podkreśl zdanie gościa, na które musisz odpowiedzieć.", segments: "Pisanie dzieli się na pierwszą wersję, wspólną analizę i krótką korektę.", returnPrompt: "Wróć do kryterium drugiego i popraw tylko zdanie z propozycją działania.", role: "Uczeń może podczas analizy przykładów odczytać kryterium lub zaznaczyć dane; własną poprawę wykonuje sam.", caution: "Brak tekstu w pierwszych minutach może oznaczać niejasne polecenie. Rama zdania jest wsparciem wejścia, nie diagnozą ucznia." },
    assessment: { evidence: "Dowodem jest trafna zmiana między wersjami i użycie kryterium w kolejnym zadaniu.", notGrade: "Nie warto osobno oceniać stopniem każdego komentarza, liczby poprawek ani szybkości.", criteria: ["odpowiada na dane z reklamacji", "proponuje adekwatne działanie", "używa profesjonalnego i jasnego języka"], revision: "Uczeń zachowuje pierwszą wersję, a w drugiej zaznacza zmianę. Krótkie uzasadnienie pokazuje, czy rozumie feedback." },
    mistakeFixes: [
      { mistake: "Komentarz wymienia wszystkie usterki.", instead: "Wybierz jedno kryterium o największym znaczeniu dla celu lekcji." },
      { mistake: "Feedback pojawia się po zakończeniu działu.", instead: "Zapewnij czas na poprawę podczas tej samej lub najbliższej lekcji." },
      { mistake: "Uczeń przepisuje wzór bez decyzji.", instead: "Poproś o zaznaczenie zmiany i wyjaśnienie, dlaczego spełnia kryterium." }
    ]
  },

  "metoda-ocenianie-ksztaltujace.html": {
    boundaries: {
      isNot: "Ocenianie kształtujące nie jest częstym wystawianiem ocen ani zestawem obowiązkowych gadżetów. Nauczyciel ujawnia cel, zbiera informacje o rozumieniu wszystkich uczniów i na ich podstawie zmienia dalszy krok lekcji.",
      classroomProblem: "Metoda zapobiega prowadzeniu wyjaśnienia mimo powszechnego nieporozumienia. Jedno dobrze dobrane pytanie o wybór opakowania może pokazać, czy uczniowie uwzględniają masę, wrażliwość i warunki transportu, czy kierują się tylko wyglądem.",
      promiseLimit: "Badania nad formative assessment obejmują różne praktyki. Samo ogłoszenie celu lub użycie aplikacji do głosowania nie wystarcza. Informacja musi prowadzić do decyzji nauczyciela albo działania ucznia."
    },
    classroom: [
      "Pytanie diagnostyczne powinno mieć odpowiedzi odzwierciedlające typowe sposoby myślenia, nie przypadkowe dystraktory. Wszyscy odpowiadają przed dyskusją.",
      "Przy 30 uczniach nauczyciel nie analizuje każdego tekstu. Zbiera wybory A-D i prosi kilka par o uzasadnienie, aby ustalić źródło różnicy.",
      "Jeżeli odpowiedzi są podzielone, uczniowie porównują argumenty w parach i głosują ponownie. Jeśli prawie wszyscy wybierają błędnie, nauczyciel wraca do modelu lub przykładu.",
      "Uczeń nieobecny otrzymuje pytanie diagnostyczne przed nowym zadaniem. Nie jest ono zaliczeniem, tylko punktem wejścia.",
      "Telefon, ZPE, kartoniki i palce mogą pełnić tę samą funkcję. Narzędzie ma umożliwić jednoczesną odpowiedź, a nie uatrakcyjniać pytanie.",
      "Odpowiedzi warto zapisać choćby kreskami przy wariantach. Po kilku lekcjach nauczyciel zobaczy, czy pytania ujawniają użyteczne różnice, czy są zbyt łatwe. Taka notatka służy poprawie pytań, nie tworzeniu rankingu klasy."
    ],
    preparation: {
      before: "Nauczyciel przygotowuje przypadek przesyłki, cztery opakowania i odpowiedzi reprezentujące konkretne błędy. Z góry zapisuje decyzje: co zrobi przy przewadze odpowiedzi poprawnej, podziale klasy i przewadze błędu.",
      materials: ["opis przesyłki", "cztery warianty opakowania", "kartoniki A-D lub formularz", "karta uzasadnienia"],
      boardSetup: "Na tablicy są cel i trzy ograniczenia: masa, podatność na uszkodzenie, warunki transportu. Poprawna odpowiedź nie jest odsłonięta przed dyskusją.",
      successProduct: "Uczeń wybiera opakowanie, uzasadnia decyzję ograniczeniami i potrafi zmienić wybór po nowych danych.",
      fallback: "Kartoniki A-D zapewniają pełny przebieg bez internetu."
    },
    lesson: [
      { minutes: 6, title: "Pytanie diagnostyczne", teacher: "Przedstawia przypadek i cztery opcje.", students: "Wybierają samodzielnie i zapisują jeden powód.", evidence: "Rozkład odpowiedzi pokazuje sposoby myślenia.", decision: "Nauczyciel wybiera rozmowę w parach albo krótkie modelowanie zależnie od wyniku." },
      { minutes: 8, title: "Uzasadnienie", teacher: "Prosi pary o porównanie danych, nie o przekonywanie za wszelką cenę.", students: "Wyjaśniają wybór i sprawdzają ograniczenia.", evidence: "Argumenty ujawniają pominięte dane.", decision: "Jeżeli spór dotyczy pojęcia, nauczyciel je precyzuje." },
      { minutes: 7, title: "Drugie rozpoznanie", teacher: "Zbiera ponowne odpowiedzi i omawia zmianę.", students: "Głosują ponownie oraz zaznaczają, co wpłynęło na decyzję.", evidence: "Zmiana odpowiedzi pokazuje reakcję na argumenty.", decision: "Brak zmiany przy błędzie oznacza potrzebę modelu na konkretnym przykładzie." },
      { minutes: 16, title: "Nowy przypadek", teacher: "Zmienia masę i warunki transportu.", students: "Samodzielnie dobierają rozwiązanie i tworzą uzasadnienie.", evidence: "Produkt sprawdza przeniesienie kryteriów.", decision: "Nauczyciel wspiera grupę, która nadal kieruje się jednym parametrem." },
      { minutes: 8, title: "Exit ticket", teacher: "Pyta, która informacja może zmienić decyzję.", students: "Podają warunek i krótkie wyjaśnienie.", evidence: "Odpowiedzi planują następny krok.", decision: "Najczęstsza luka wraca na początku kolejnej lekcji." }
    ],
    teacherPrompt: "Nie interesuje mnie dziś tylko litera odpowiedzi. Chcę zobaczyć, które ograniczenia bierzecie pod uwagę, żeby zdecydować, co wyjaśnić dalej.",
    vocational: {
      context: "Technik logistyk dobiera opakowanie do delikatnego elementu o określonej masie, sposobie transportu i wymaganiu piętrowania.",
      goal: "Uczeń podejmuje decyzję na podstawie kilku ograniczeń i aktualizuje ją po zmianie danych.",
      materials: ["dwa opisy przesyłki", "cztery warianty opakowań", "kryteria", "kartoniki odpowiedzi"],
      instruction: "Wybierz opakowanie i wskaż dwa ograniczenia, które decydują o wyborze. Po zmianie danych oceń decyzję ponownie i zapisz, co się zmieniło.",
      phases: ["wybór indywidualny", "porównanie argumentów", "ponowna odpowiedź", "nowy przypadek", "exit ticket"],
      product: "Decyzja z uzasadnieniem i poprawiona decyzja po zmianie warunku.",
      likelyErrors: ["kierowanie się wyłącznie ceną", "pominięcie piętrowania", "brak zmiany mimo nowych danych"],
      teacherResponses: ["Które ograniczenie eliminuje tę opcję?", "Czy cena wystarcza do decyzji?", "Co zmieniło się w drugim przypadku?"],
      closing: "Nauczyciel zapisuje rozkład odpowiedzi i jeden dominujący błąd. To wystarcza do zaplanowania kolejnej lekcji; nie potrzebuje rozbudowanej ankiety."
    },
    general: { subject: "Biologia", topic: "Wymiana gazowa", setup: "Pytanie pokazuje cztery wyjaśnienia ruchu gazów, z których każde reprezentuje inny błąd.", flow: "Uczniowie wybierają, uzasadniają w parach i odpowiadają ponownie przed nowym przykładem.", product: "Poprawione wyjaśnienie oparte na różnicy stężeń.", check: "Nauczyciel używa nowej sytuacji, aby sprawdzić, czy nieporozumienie zniknęło." },
    engagement: { firstStep: "Wybierz jedną literę i podkreśl dane, które na nią wskazują.", segments: "Każdy etap ma jasny limit 6-16 minut i kończy się decyzją.", returnPrompt: "Wróć do trzech ograniczeń i zaznacz to, którego jeszcze nie użyłeś.", role: "W parze uczeń może odczytać dane lub sprawdzać ograniczenia; ponowne głosowanie jest indywidualne.", caution: "Brak wypowiedzi publicznej nie oznacza braku rozumienia. Nauczyciel zbiera także zapisane odpowiedzi." },
    assessment: { evidence: "Dowodem jest uzasadniona zmiana odpowiedzi i zastosowanie kryteriów w nowym przypadku.", notGrade: "Pytania diagnostycznego i zmiany zdania nie należy karać oceną.", criteria: ["uwzględnia istotne ograniczenia", "uzasadnia wybór danymi", "aktualizuje decyzję po zmianie warunków"], revision: "Uczeń zachowuje pierwszą literę i obok zapisuje drugą z powodem. Zmiana jest wartościową informacją, nie oznaką porażki." },
    mistakeFixes: [
      { mistake: "Pytanie ma jedną oczywistą odpowiedź.", instead: "Zbuduj opcje na podstawie rzeczywistych nieporozumień uczniów." },
      { mistake: "Nauczyciel zbiera odpowiedzi, ale nie zmienia lekcji.", instead: "Przed zajęciami zaplanuj reakcję na trzy możliwe rozkłady wyników." },
      { mistake: "Odpowiadają tylko ochotnicy.", instead: "Najpierw zbierz jednoczesną odpowiedź każdego ucznia." }
    ]
  },

  "metoda-metapoznanie.html": {
    boundaries: {
      isNot: "Metapoznanie nie jest ogólną prośbą zastanów się, jak się uczysz ani prowadzeniem rozbudowanego pamiętnika. Uczeń planuje konkretną strategię, monitoruje ją podczas zadania i po wykonaniu ocenia, co zadziałało.",
      classroomProblem: "Metoda pomaga uczniom, którzy zaczynają zadanie magazynowe od pierwszej widocznej czynności, nie analizując zależności. Krótki plan przed działaniem i punkt kontrolny zmniejszają przypadkowe ruchy.",
      promiseLimit: "Badania nad metapoznaniem wskazują na znaczenie jawnego nauczania strategii w treści przedmiotowej. Sam arkusz refleksji, bez modelowania i kolejnej próby, może stać się formalnością."
    },
    classroom: [
      "Nauczyciel wybiera jedną strategię, na przykład: odczytaj ograniczenia, ułóż kolejność, ustaw punkt kontroli. Nie wymaga od uczniów opisywania całej osobowości uczącego się.",
      "W 30-osobowej klasie plan mieści się w trzech polach. Nauczyciel szybko skanuje odpowiedzi i omawia dwa różne podejścia.",
      "W połowie zadania pojawia się obowiązkowe zatrzymanie: co już wiem, co nie pasuje, czy zmieniam plan. Dzięki temu refleksja wpływa na działanie.",
      "Uczniowie szybsi porównują dwie strategie. Uczniowie wolniejsi korzystają z pytań naprowadzających i planują tylko trzy główne kroki.",
      "Uczeń nieobecny może otrzymać wypełniony przykład planowania i zastosować ramę do nowego zadania.",
      "Karta metapoznawcza nie powinna pojawiać się przy każdym ćwiczeniu. Po kilku jawnie prowadzonych próbach nauczyciel skraca ją do jednego pytania kontrolnego. Celem jest samodzielne użycie strategii, a nie trwała zależność od formularza i produkowanie kolejnych opisów bez wpływu na wykonanie. Na kolejnej lekcji uczeń próbuje już bez pełnej ramy."
    ],
    preparation: {
      before: "Nauczyciel przygotowuje przypadek magazynowy z kilkoma ograniczeniami, kartę plan-monitorowanie-ocena oraz własny model krótkiego namysłu na głos. Pytania odnoszą się do zadania, nie do ogólnych preferencji.",
      materials: ["opis zadania magazynowego", "karta trzech faz", "lista ograniczeń", "kryteria planu"],
      boardSetup: "Na tablicy są trzy pytania: Co ogranicza zadanie? Jaka kolejność ma sens? Po czym sprawdzę, czy plan działa?",
      successProduct: "Uczeń tworzy plan, świadomie aktualizuje go po kontroli i uzasadnia jedną zmianę.",
      fallback: "Karta papierowa i rozmowa wystarczają."
    },
    lesson: [
      { minutes: 7, title: "Model planowania", teacher: "Myśli na głos na krótkim przykładzie.", students: "Zaznaczają dane, które wpływają na strategię.", evidence: "Uczniowie rozpoznają etapy planu.", decision: "Jeśli powtarzają kroki bez powodów, nauczyciel pokazuje zależność." },
      { minutes: 8, title: "Plan własny", teacher: "Przekazuje nowy przypadek i ogranicza wsparcie do pytań.", students: "Wypełniają trzy pola planu.", evidence: "Plan pokazuje punkt startowy i kontrolę.", decision: "Uczeń bez planu otrzymuje dwa możliwe pierwsze kroki do porównania." },
      { minutes: 14, title: "Wykonanie", teacher: "Obserwuje strategie, nie podaje gotowej kolejności.", students: "Realizują analizę zgodnie z planem.", evidence: "Na karcie zaznaczają wykonane kroki.", decision: "Po siedmiu minutach wszyscy zatrzymują się na monitoring." },
      { minutes: 9, title: "Monitoring i zmiana", teacher: "Pyta, która dana wymaga korekty planu.", students: "Aktualizują kolejność i uzasadniają zmianę.", evidence: "Widoczna modyfikacja pokazuje regulację działania.", decision: "Brak zmiany jest dopuszczalny, jeśli uczeń uzasadnia zgodność planu." },
      { minutes: 7, title: "Ocena strategii", teacher: "Porównuje dwa podejścia i pyta o warunki użycia.", students: "Zapisują, co zachowają w następnym zadaniu.", evidence: "Wniosek odnosi się do konkretnej strategii.", decision: "Jedno pytanie planistyczne wraca na kolejnej lekcji." }
    ],
    teacherPrompt: "Nie pytam, czy zadanie było łatwe. Pokażcie, jaki plan wybraliście, w którym momencie go sprawdziliście i dlaczego coś zmieniliście.",
    vocational: {
      context: "Technik logistyk planuje kolejność realizacji zadania magazynowego obejmującego przyjęcie, kontrolę, rozmieszczenie i przygotowanie wydania.",
      goal: "Uczeń dobiera strategię do ograniczeń, monitoruje ją i aktualizuje po wykryciu konfliktu.",
      materials: ["opis dostawy", "plan magazynu", "karta strategii", "nowa informacja w połowie zadania"],
      instruction: "Zanim zaczniesz, zapisz trzy kroki i punkt kontroli. Po otrzymaniu nowej informacji oceń, czy plan nadal działa. Zaznacz zmianę i podaj jej powód.",
      phases: ["model strategii", "plan własny", "realizacja", "nowa informacja", "ocena"],
      product: "Pierwotny i poprawiony plan z uzasadnieniem jednej decyzji.",
      likelyErrors: ["lista czynności bez priorytetu", "brak punktu kontroli", "zmiana planu bez odwołania do danych"],
      teacherResponses: ["Które ograniczenie ustala pierwszy krok?", "Po czym poznasz, że możesz iść dalej?", "Jaka nowa informacja uzasadnia zmianę?"],
      closing: "Uczniowie zapisują jedną strategię, którą zastosują w następnym przypadku. Nauczyciel wraca do niej, zamiast zbierać ogólne refleksje."
    },
    general: { subject: "Matematyka", topic: "Wybór strategii rozwiązania zadania tekstowego", setup: "Uczniowie przed liczeniem zapisują dane, niewiadomą i wybraną reprezentację.", flow: "W połowie sprawdzają, czy wynik pośredni ma sens, i ewentualnie zmieniają sposób.", product: "Rozwiązanie wraz z krótkim zapisem decyzji strategicznej.", check: "W nowym zadaniu nauczyciel sprawdza, czy plan pojawia się bez pełnej karty." },
    engagement: { firstStep: "Podkreśl jedno ograniczenie, które decyduje o kolejności.", segments: "Plan, działanie i monitoring są oddzielnymi krótkimi odcinkami.", returnPrompt: "Wróć do punktu kontroli i zaznacz, czy został wykonany.", role: "Uczeń może w parze być osobą pytającą o uzasadnienie strategii, ale prowadzi własną kartę.", caution: "Nauczyciel nie interpretuje jednej nietrafnej strategii jako braku samodzielności. Sprawdza, czy uczeń potrafi ją skorygować." },
    assessment: { evidence: "Dowodem jest uzasadniony plan, monitoring i świadoma korekta.", notGrade: "Nie ocenia się szczerości refleksji ani długości opisu.", criteria: ["plan odnosi się do ograniczeń", "uczeń stosuje punkt kontroli", "zmiana ma uzasadnienie w danych"], revision: "Pierwotny plan pozostaje czytelny, a uczeń dopisuje modyfikację i jedno zdanie o jej przyczynie." },
    mistakeFixes: [
      { mistake: "Refleksja pojawia się wyłącznie na końcu.", instead: "Wprowadź punkt monitorowania w trakcie działania." },
      { mistake: "Pytania są ogólne.", instead: "Odnoś je do danych, kolejności i kontroli konkretnego zadania." },
      { mistake: "Uczeń ma odkryć strategię sam.", instead: "Najpierw pokaż jej użycie na głos, potem stopniowo wycofaj wsparcie." }
    ]
  },

  "metoda-uczenie-kooperacyjne.html": {
    boundaries: {
      isNot: "Uczenie kooperacyjne nie jest prostym poleceniem pracujcie w grupach. Zadanie wymaga współzależności, każdy ma wkład związany z treścią, grupa tworzy wspólny produkt, a nauczyciel sprawdza także rozumienie indywidualne.",
      classroomProblem: "Metoda porządkuje sytuację, w której jedna osoba wykonuje menu i obliczenia, a pozostali czekają. Role oraz częściowe dane wymuszają pracę nad wspólną decyzją.",
      promiseLimit: "Syntezy badań wskazują, że jakość struktury współpracy ma znaczenie. Samo zwiększenie liczby zadań grupowych nie gwarantuje uczenia się ani udziału uczniów biernych."
    },
    classroom: [
      "W klasie 30-osobowej najlepiej pracują grupy 4-5 osób. Każda rola odpowiada za treść: wymagania klienta, koszt, wartość żywieniowa, wykonalność i kontrola kryteriów.",
      "Grupa otrzymuje jeden arkusz decyzji, ale każdy przed rozmową zapisuje własną propozycję. Po pracy nauczyciel losowo prosi osobę o wyjaśnienie fragmentu produktu.",
      "Uczniowie szybsi sprawdzają wariant z nowym ograniczeniem. Grupy potrzebujące wsparcia dostają tabelę z kosztami i ramę decyzji, nie gotowe menu.",
      "Uczeń nieobecny może dołączyć do roli weryfikatora na podstawie gotowego szkicu grupy, a potem wykonać indywidualne pytanie końcowe.",
      "Technologia nie może prowadzić do sytuacji, w której tylko właściciel telefonu lub osoba obsługująca dokument wykonuje pracę. Dane są dostępne wszystkim.",
      "Skład grup warto utrzymać przez kilka podobnych zadań, jeśli współpraca zaczyna działać. Ciągłe losowanie zabiera czas na ponowne ustalanie sposobu pracy. Role należy jednak rotować, aby ta sama osoba nie odpowiadała zawsze za obliczenia albo publiczne wyjaśnienie."
    ],
    preparation: {
      before: "Nauczyciel przygotowuje zamówienie gastronomiczne, listę składników z kosztami, ograniczenia i kartę wspólnej decyzji. Role są wydrukowane w jednym zdaniu, a produkt mieści się na stronie A3.",
      materials: ["opis zamówienia", "cennik", "karty ról", "arkusz menu i kosztów", "pytanie indywidualne"],
      boardSetup: "Na tablicy są wspólny cel, cztery kryteria oraz czas trzech etapów: propozycje, negocjacja, kontrola.",
      successProduct: "Grupa tworzy wykonalne menu w budżecie i potrafi uzasadnić decyzje, a każdy uczeń odpowiada na pytanie o ograniczenia.",
      fallback: "Pakiet papierowy i kalkulatory wystarczą."
    },
    lesson: [
      { minutes: 6, title: "Ograniczenia i role", teacher: "Przedstawia zlecenie oraz przydziela role.", students: "Czytają dane i zapisują własny priorytet.", evidence: "Każdy ma pierwszy wkład.", decision: "Nauczyciel wyjaśnia tylko ograniczenie, które blokuje start większości grup." },
      { minutes: 10, title: "Praca ekspercka", teacher: "Sprawdza, czy role dotyczą treści.", students: "Analizują koszt, wymagania, wykonalność lub kryteria.", evidence: "Każda rola wnosi zapis na arkusz.", decision: "Uczeń bez zadania otrzymuje konkretne pytanie wynikające z roli." },
      { minutes: 15, title: "Wspólna decyzja", teacher: "Obserwuje sposób uzasadniania i zadaje pytania.", students: "Negocjują menu, liczą koszt i zapisują kompromisy.", evidence: "Powstaje wspólny produkt z uzasadnieniem.", decision: "Po ośmiu minutach grupa bez decyzji musi wybrać między dwoma wariantami." },
      { minutes: 8, title: "Kontrola międzygrupowa", teacher: "Łączy grupy parami i podaje kryteria sprawdzenia.", students: "Weryfikują koszt i ograniczenia innej grupy.", evidence: "Pojawia się konkretna uwaga do produktu.", decision: "Nauczyciel rozstrzyga tylko spór merytoryczny, którego grupy nie mogą sprawdzić w danych." },
      { minutes: 6, title: "Odpowiedź indywidualna", teacher: "Zadaje nowe ograniczenie.", students: "Każdy zapisuje jedną konieczną zmianę w menu.", evidence: "Odpowiedź pokazuje indywidualne rozumienie.", decision: "Brak rozumienia prowadzi do zmiany roli i dodatkowego przykładu na kolejnej lekcji." }
    ],
    teacherPrompt: "Każdy wnosi do decyzji inną informację, ale na końcu każdy musi umieć wyjaśnić wspólne menu. Rola nie zwalnia z rozumienia całego produktu.",
    vocational: {
      context: "Technik żywienia i usług gastronomicznych przygotowuje menu przerwy kawowej dla 40 osób przy budżecie, ograniczeniu alergenu i określonym czasie obsługi.",
      goal: "Uczeń współtworzy decyzję, uwzględnia koszt, wymagania i wykonalność.",
      materials: ["brief klienta", "cennik", "informacje o alergenach", "karta menu"],
      instruction: "Każdy najpierw zapisuje priorytet ze swojej roli. Następnie przygotujcie menu, koszt i dwa uzasadnienia. Po kontroli innej grupy poprawcie jeden element.",
      phases: ["analiza indywidualna", "wkład ról", "wspólna decyzja", "kontrola", "pytanie indywidualne"],
      product: "Menu z kalkulacją, oznaczeniem ograniczeń i korektą po informacji innej grupy.",
      likelyErrors: ["dominacja jednej osoby", "dekoracyjne role", "koszt bez kontroli wymagań"],
      teacherResponses: ["Która rola dostarczyła tę informację?", "Jak sprawdziliście budżet?", "Czy każdy potrafi wyjaśnić ten kompromis?"],
      closing: "Nowe ograniczenie, na przykład krótszy czas serwisu, jest rozwiązywane indywidualnie. Dzięki temu nauczyciel nie utożsamia jakości grupowego arkusza z wiedzą każdego ucznia."
    },
    general: { subject: "Geografia", topic: "Zagospodarowanie terenu", setup: "Role obejmują mieszkańców, środowisko, transport i budżet, ale wszyscy korzystają z tej samej mapy i kryteriów.", flow: "Po propozycjach indywidualnych grupa tworzy rekomendację, a inna grupa sprawdza jej zgodność z danymi.", product: "Wspólna rekomendacja z trzema dowodami i indywidualna odpowiedź po zmianie warunku.", check: "Nauczyciel ocenia decyzję i rozumienie, nie zgodność poglądów." },
    engagement: { firstStep: "Zapisz jedną informację, za którą odpowiada twoja rola.", segments: "Role mają krótki etap ekspercki, wspólną decyzję i kontrolę.", returnPrompt: "Wróć do swojej karty i sprawdź, czy twoja informacja znalazła się w produkcie.", role: "Uczeń mniej skłonny do wypowiedzi może kontrolować kryteria, ale musi zgłosić grupie jedną konkretną uwagę.", caution: "Cicha praca nie oznacza bierności, a głośna aktywność nie dowodzi uczenia. Liczy się wkład w produkt i odpowiedź indywidualna." },
    assessment: { evidence: "Dowodem jest wkład związany z rolą, wspólny produkt oraz odpowiedź indywidualna.", notGrade: "Nie należy wystawiać identycznego stopnia wszystkim wyłącznie za wygląd arkusza.", criteria: ["uwzględnia ograniczenia", "uzasadnia decyzje danymi", "wyjaśnia wspólny produkt indywidualnie"], revision: "Grupa poprawia jeden element po kontroli, a każdy zapisuje, która uwaga zmieniła decyzję." },
    mistakeFixes: [
      { mistake: "Role sprowadzają się do pisania i pilnowania czasu.", instead: "Przypisz każdej osobie odrębną odpowiedzialność merytoryczną." },
      { mistake: "Jedna osoba obsługuje wszystkie dane.", instead: "Zapewnij dostęp do materiału każdemu i wymagaj pierwszej propozycji indywidualnej." },
      { mistake: "Oceniany jest tylko produkt grupy.", instead: "Dodaj krótkie pytanie indywidualne po zmianie warunku." }
    ]
  },

  "metoda-peer-tutoring.html": {
    boundaries: {
      isNot: "Tutoring rówieśniczy nie jest oddaniem słabszego ucznia pod opiekę lepszego ani wspólnym rozwiązywaniem nowej, ryzykownej procedury. Uczniowie ćwiczą wcześniej nauczoną umiejętność według przygotowanej ramy, zmieniają role i otrzymują poprawne odpowiedzi.",
      classroomProblem: "Metoda zwiększa liczbę prób i wyjaśnień w klasie, gdy nauczyciel nie może jednocześnie wysłuchać trzydziestu uczniów. W procedurze diagnostycznej partner sprawdza kolejność i zadaje ustalone pytania.",
      promiseLimit: "Syntezy badań wskazują korzyści przy ustrukturyzowanych programach. Swobodne dobieranie par i proszenie uczniów, aby nauczyli się nawzajem nowej treści, nie jest tym samym rozwiązaniem."
    },
    classroom: [
      "Pary pracują na krótkiej, wcześniej nauczonej procedurze. Tutor ma kartę odpowiedzi i trzy pytania, ale nie wykonuje zadania za partnera.",
      "Po 7-8 minutach role się zmieniają, a drugi uczeń otrzymuje wariant z innymi danymi. Dzięki temu status eksperta nie zostaje przypisany na stałe.",
      "Nauczyciel dobiera pary świadomie i obserwuje sposób udzielania wskazówek. Przy 30 uczniach monitoruje kilka par w każdej rundzie oraz zbiera odpowiedź końcową wszystkich.",
      "Uczeń nieobecny może przejść pierwszą rundę z nauczycielem lub dołączyć do trójki z jasno podzielonymi rolami. Nie powinien automatycznie zostać biernym obserwatorem.",
      "Metody nie stosuje się do czynności wymagających uprawnień, bezpośredniego nadzoru lub instruktażu BHP. Tutaj praca dotyczy analizy papierowego przypadku.",
      "Przed pierwszą rundą warto przećwiczyć dwa zdania tutora: wyjaśnij, skąd wynika ten krok oraz sprawdź odpowiedź z kryterium. Bez takiego modelu uczniowie często przechodzą do podawania wyniku albo oceniania partnera. Nauczyciel może mieć na biurku jedną parę demonstracyjną, a pozostałe obserwują krótką wymianę. Po demonstracji uczniowie wskazują, która wypowiedź była pytaniem, a która gotową podpowiedzią. Dopiero potem startują pary."
    ],
    preparation: {
      before: "Nauczyciel przygotowuje dwa równoważne przypadki diagnostyczne, listę kroków, kartę pytań tutora i wzór odpowiedzi. Przed startem modeluje różnicę między podaniem rozwiązania a wskazówką.",
      materials: ["dwa przypadki", "karta procedury", "pytania tutora", "odpowiedzi", "exit ticket"],
      boardSetup: "Na tablicy widnieje cykl: uczeń wyjaśnia, tutor pyta, uczeń poprawia, role się zmieniają. Zakazane są komunikaty po prostu źle i podawanie gotowego kroku.",
      successProduct: "Każdy uczeń wyjaśnia kolejność wcześniej poznanej procedury i poprawia błąd po pytaniu partnera.",
      fallback: "Cały tutoring może odbyć się na kartach papierowych."
    },
    lesson: [
      { minutes: 7, title: "Model rozmowy", teacher: "Pokazuje z uczniem przykładową wskazówkę i pytanie.", students: "Rozpoznają, co pomaga poprawić tok.", evidence: "Klasa potrafi odróżnić podpowiedź od gotowej odpowiedzi.", decision: "Nauczyciel powtarza model, jeśli pytania są oceniające zamiast kierujące." },
      { minutes: 11, title: "Runda pierwsza", teacher: "Obserwuje pary i interweniuje przy błędnym wzorcu.", students: "Uczeń A wyjaśnia procedurę, B używa karty pytań.", evidence: "Pierwsza karta zawiera tok i poprawkę.", decision: "Para bez postępu otrzymuje wskazany krok początkowy." },
      { minutes: 11, title: "Zmiana ról", teacher: "Rozdaje drugi wariant.", students: "Uczeń B rozwiązuje, A prowadzi rozmowę.", evidence: "Obie osoby wykonują i wspierają.", decision: "Nauczyciel sprawdza, czy tutor nie czyta odpowiedzi." },
      { minutes: 10, title: "Porównanie procedur", teacher: "Zbiera typowe pytania i błędy.", students: "Pary wybierają najskuteczniejsze pytanie oraz poprawiają zapis.", evidence: "Uczniowie potrafią nazwać moment decyzji.", decision: "Błąd merytoryczny jest korygowany wspólnie." },
      { minutes: 6, title: "Sprawdzenie indywidualne", teacher: "Daje krótki trzeci przypadek.", students: "Każdy zapisuje pierwszy krok i uzasadnienie.", evidence: "Exit ticket oddziela wiedzę ucznia od pomocy pary.", decision: "Wynik służy do dobrania kolejnej praktyki." }
    ],
    teacherPrompt: "Tutor nie podaje rozwiązania. Zadaje pytanie z karty, czeka na poprawę i dopiero wtedy potwierdza krok. Za chwilę zamienicie się rolami.",
    vocational: {
      context: "Mechanik pojazdów. Uczniowie utrwalają wcześniej omówioną kolejność analizy objawów i planowania podstawowej diagnostyki na papierowym przypadku.",
      goal: "Uczeń wyjaśnia procedurę, reaguje na pytanie partnera i wykonuje nowy wariant samodzielnie.",
      materials: ["przypadki A i B", "karta procedury", "pytania wspierające", "odpowiedzi dla tutora"],
      instruction: "Rozwiązujący mówi, jaki krok wybiera i dlaczego. Tutor wybiera pytanie z karty, nie czyta odpowiedzi. Po poprawie zaznacza kryterium i role się zmieniają.",
      phases: ["model", "runda A", "runda B", "wspólna korekta", "próba indywidualna"],
      product: "Dwa plany diagnostyczne i indywidualna odpowiedź na trzeci przypadek.",
      likelyErrors: ["tutor podaje rozwiązanie", "utrwalanie błędnej kolejności", "stały podział na silnego i słabego"],
      teacherResponses: ["Zadaj pytanie, nie podawaj kroku.", "Sprawdź odpowiedź w karcie.", "Teraz zmieńcie role i dane."],
      closing: "Nauczyciel zbiera exit ticket. Partnerstwo zwiększa liczbę prób, ale ocena rozumienia opiera się na samodzielnej odpowiedzi."
    },
    general: { subject: "Język obcy", topic: "Pytania w rozmowie z klientem", setup: "Pary mają ramę czterech pytań i kartę poprawnych struktur.", flow: "Uczeń prowadzi minutową rozmowę, partner zaznacza kryterium i zadaje pytanie korygujące, potem role się zmieniają.", product: "Dwie krótkie rozmowy i indywidualnie zapisane pytanie.", check: "Nauczyciel słucha wybranych par oraz zbiera zapis końcowy." },
    engagement: { firstStep: "Przeczytaj pierwszy objaw i nazwij pytanie, które zadasz jako pierwsze.", segments: "Dwie jedenastominutowe rundy mają zmianę roli i nowy przypadek.", returnPrompt: "Wróć do karty swojej roli i wykonaj następny zapisany krok.", role: "Każdy na zmianę rozwiązuje i wspiera; nie ma stałego pomocnika.", caution: "Dobór par nie może publicznie etykietować uczniów. Nauczyciel opiera się na potrzebie ćwiczenia, nie na trwałych ocenach osób." },
    assessment: { evidence: "Dowodem są poprawione procedury i samodzielny exit ticket.", notGrade: "Nie ocenia się jakości koleżeństwa ani liczby podpowiedzi stopniem.", criteria: ["wyjaśnia kolejność", "korzysta z pytania do korekty", "wykonuje nowy wariant samodzielnie"], revision: "Uczeń zaznacza krok poprawiony po pytaniu partnera i obok zapisuje krótkie uzasadnienie." },
    mistakeFixes: [
      { mistake: "Tutor uczy nowej treści.", instead: "Najpierw naucz procedury całą klasę, a tutoring wykorzystaj do utrwalania." },
      { mistake: "Role są stałe.", instead: "Zmieniaj role i stosuj równoważne warianty." },
      { mistake: "Nauczyciel nie kontroluje poprawności.", instead: "Daj kartę odpowiedzi, modeluj pytania i monitoruj część par w każdej rundzie." }
    ]
  },

  "metoda-nauczanie-dialogowe.html": {
    boundaries: {
      isNot: "Nauczanie dialogowe nie jest swobodną pogadanką ani serią pytań nauczyciela, na które odpowiadają te same osoby. Uczniowie budują, porównują i korygują rozumowanie na podstawie danych, a nauczyciel planuje pytania pogłębiające.",
      classroomProblem: "Metoda pozwala ujawnić, dlaczego uczniowie podejmują różne decyzje w sprawie reklamacji. Zamiast sprawdzać wyłącznie poprawną odpowiedź, klasa analizuje dane, założenia i konsekwencje.",
      promiseLimit: "Badania nad dialogic teaching dotyczą określonych sposobów prowadzenia rozmowy i programów wsparcia nauczycieli. Sama większa liczba pytań lub dyskusji nie gwarantuje lepszego rozumienia."
    },
    classroom: [
      "Przed wypowiedzią publiczną każdy ma dwie minuty na zapis stanowiska. Następnie rozmawia w parze, co zwiększa liczbę uczniów rzeczywiście pracujących nad argumentem.",
      "Nauczyciel wybiera jeden spór merytoryczny i trzy pytania: na jakich danych opierasz decyzję, jakie założenie przyjmujesz, co mogłoby zmienić stanowisko.",
      "W klasie 30-osobowej nie każdy przemawia na forum. Dowodem udziału są zapis początkowy, notatka po rozmowie i odpowiedź końcowa.",
      "Uczeń nieobecny może przeanalizować dwa zapisane stanowiska i dodać własną ocenę. Uczeń pracujący szybciej szuka warunku, który zmienia decyzję.",
      "Rozmowa ma reguły: krytykujemy uzasadnienie, nie osobę; odwołujemy się do danych; można zmienić zdanie.",
      "Nie trzeba omawiać wszystkich stanowisk. Nauczyciel wybiera dwie odpowiedzi, które różnią się rozumowaniem, a nie jedynie wnioskiem. Dzięki temu rozmowa dotyczy mechanizmu decyzji. Pozostałe zapisy nadal są sprawdzane przez odpowiedź końcową, więc uczniowie nie muszą walczyć o czas antenowy. Można też odczytać argument anonimowo przed klasą."
    ],
    preparation: {
      before: "Nauczyciel przygotowuje przypadek reklamacji w handlu, dwa wiarygodne stanowiska i dane rozstrzygające. Planuje pytania oraz zapis końcowy, aby dyskusja nie skończyła się na wymianie opinii.",
      materials: ["opis reklamacji", "dwa stanowiska", "karta argumentu", "kryteria decyzji"],
      boardSetup: "Tablica ma trzy kolumny: dane, wniosek, warunek zmiany. Nauczyciel zapisuje argumenty bez przypisywania ich do nazwisk.",
      successProduct: "Uczeń podejmuje decyzję, uzasadnia ją danymi, odpowiada na kontrargument i potrafi wskazać warunek zmiany.",
      fallback: "Rozmowa, kartki i tablica są podstawowym wariantem."
    },
    lesson: [
      { minutes: 6, title: "Stanowisko początkowe", teacher: "Przedstawia przypadek i pytanie decyzyjne.", students: "Zapisują decyzję oraz dwa dane.", evidence: "Każdy ma punkt wyjścia.", decision: "Jeśli przypadek jest niejasny, nauczyciel doprecyzowuje fakty bez sugerowania decyzji." },
      { minutes: 8, title: "Rozmowa w parze", teacher: "Podaje ramę: twierdzenie, dowód, pytanie.", students: "Porównują uzasadnienia i zapisują różnicę.", evidence: "Notatka pokazuje kontakt z innym rozumowaniem.", decision: "Gdy pary zgadzają się bez argumentu, otrzymują przygotowane stanowisko alternatywne." },
      { minutes: 14, title: "Dialog klasy", teacher: "Prowadzi rozmowę pytaniami i łączy wypowiedzi.", students: "Odnoszą się do danych oraz wcześniejszych argumentów.", evidence: "Na tablicy rośnie mapa rozumowania.", decision: "Nauczyciel zatrzymuje dygresję, pytając, do którego kryterium się odnosi." },
      { minutes: 10, title: "Nowa informacja", teacher: "Dodaje fakt zmieniający jeden warunek reklamacji.", students: "Aktualizują stanowisko i wyjaśniają zmianę.", evidence: "Reakcja pokazuje elastyczność rozumowania.", decision: "Brak zmiany wymaga wskazania, dlaczego nowy fakt jest nieistotny." },
      { minutes: 7, title: "Odpowiedź końcowa", teacher: "Przypomina kryteria.", students: "Piszą decyzję, dowód i odpowiedź na kontrargument.", evidence: "Powstaje indywidualny produkt.", decision: "Najczęstsza luka staje się celem następnego dialogu." }
    ],
    teacherPrompt: "Możecie zmienić zdanie. Każde stanowisko musi jednak wskazać dane, a odpowiedź na inną opinię ma dotyczyć argumentu, nie osoby.",
    vocational: {
      context: "Technik handlowiec rozpatruje reklamację produktu zgłoszoną po upływie terminu przewidzianego w procedurze sklepu, ale z informacją o wcześniejszym kontakcie klienta.",
      goal: "Uczeń analizuje dane, broni decyzji i aktualizuje ją po nowej informacji.",
      materials: ["opis sprawy", "procedura", "karta stanowiska", "nowa informacja"],
      instruction: "Podejmij decyzję i poprzyj ją dwoma danymi. W rozmowie z parą zapisz najmocniejszy kontrargument. Po ujawnieniu nowej informacji przygotuj odpowiedź końcową.",
      phases: ["zapis indywidualny", "para", "dialog klasy", "nowy fakt", "odpowiedź"],
      product: "Decyzja z dowodami, kontrargumentem i warunkiem zmiany.",
      likelyErrors: ["opinia bez danych", "powtarzanie procedury bez analizy faktów", "atakowanie stanowiska zamiast argumentu"],
      teacherResponses: ["Na jakiej informacji to opierasz?", "Który argument przedmówcy rozwijasz?", "Co musiałoby się zmienić, abyś wybrał inaczej?"],
      closing: "Nauczyciel nie ogłasza zwycięzcy dyskusji. Porównuje odpowiedzi z kryteriami jakości rozumowania."
    },
    general: { subject: "Historia", topic: "Interpretacja dwóch źródeł", setup: "Uczniowie najpierw zapisują, co każde źródło pozwala wnioskować i czego nie rozstrzyga.", flow: "W parach porównują interpretacje, a dialog klasy skupia się na wiarygodności i kontekście.", product: "Krótka interpretacja z dowodem i ograniczeniem źródła.", check: "Nowy fragment wymaga zastosowania tych samych pytań." },
    engagement: { firstStep: "Podkreśl jeden fakt, na którym możesz oprzeć decyzję.", segments: "Zapis, para, forum i odpowiedź końcowa ograniczają długie oczekiwanie na zabranie głosu.", returnPrompt: "Wróć do swojej karty i dopisz dane do tego twierdzenia.", role: "Uczeń może przedstawić argument pary zamiast własnego, ale musi wskazać jego podstawę.", caution: "Milczenie na forum nie jest równoznaczne z brakiem udziału. Nauczyciel korzysta z zapisów indywidualnych." },
    assessment: { evidence: "Dowodem jest jakość argumentu, odniesienie do kontrargumentu i reakcja na nowy fakt.", notGrade: "Nie ocenia się liczby wypowiedzi ani zgodności stanowiska z opinią nauczyciela.", criteria: ["używa danych", "odpowiada na argument", "aktualizuje lub broni stanowiska z uzasadnieniem"], revision: "Uczeń zachowuje pierwsze stanowisko i pod nim zapisuje, co zmienił po dialogu." },
    mistakeFixes: [
      { mistake: "Rozmawiają głównie ochotnicy.", instead: "Wprowadź zapis indywidualny i rozmowę w parze przed forum." },
      { mistake: "Dyskusja staje się wymianą opinii.", instead: "Wracaj do pytań o dane, założenia i warunek zmiany." },
      { mistake: "Nauczyciel szybko ocenia każdą wypowiedź.", instead: "Łącz argumenty i proś uczniów o wzajemne odniesienie przed domknięciem." }
    ]
  },

  "metoda-udl.html": {
    boundaries: {
      isNot: "UDL nie oznacza przygotowania trzydziestu różnych lekcji ani obniżenia wspólnego celu. Nauczyciel z góry usuwa przewidywalne bariery wejścia, daje kilka sposobów dostępu do informacji i ograniczony wybór formy odpowiedzi przy wspólnych kryteriach.",
      classroomProblem: "W klasie zawodowej trudność może wynikać z gęstego tekstu instrukcji, zanim uczeń zacznie rozumować o kolejności robót. Tekst, prosty schemat i przykład pokazują tę samą treść, nie trzy różne poziomy wymagań.",
      promiseLimit: "UDL jest ramą projektową, a nie pojedynczą metodą z jednym wskaźnikiem efektu. Należy sprawdzać, czy konkretne zmiany rzeczywiście zwiększają dostęp do celu, zamiast zakładać skuteczność samej etykiety."
    },
    classroom: [
      "Nauczyciel wybiera jedną przewidywalną barierę. Nie tworzy wielu ozdobnych wersji materiału, tylko czytelny tekst, schemat kolejności i jeden przykład zastosowania.",
      "Wszyscy pracują nad tym samym celem i tymi samymi trzema kryteriami. Uczeń może odpowiedzieć tabelą lub krótkim opisem, jeśli obie formy pokazują tę samą wiedzę.",
      "Przy 30 uczniach materiały są dostępne w jednym miejscu. Wybór jest ograniczony do dwóch sensownych dróg, aby nie zwiększać obciążenia decyzją.",
      "Uczeń szybki analizuje wariant z dodatkowym ograniczeniem. Uczeń potrzebujący wsparcia korzysta z zaznaczonego punktu startowego i słownika pojęć.",
      "Nieobecny otrzymuje ten sam pakiet z jasną kolejnością. Nie musi prosić o osobne wyjaśnienie, aby zrozumieć, od czego zacząć."
    ],
    preparation: {
      before: "Nauczyciel analizuje instrukcję robót i usuwa niepotrzebne bariery językowe bez zmiany terminów zawodowych. Przygotowuje schemat pięciu kroków, przykład oraz dwa równoważne formaty produktu.",
      materials: ["krótka instrukcja", "schemat kolejności", "przykład", "karta odpowiedzi tekstowej lub tabelarycznej"],
      boardSetup: "Na tablicy są wspólny cel, kryteria i dwie drogi odpowiedzi. Polecenie używa tych samych nazw co materiały.",
      successProduct: "Uczeń odczytuje instrukcję, układa kolejność i uzasadnia dwa kroki niezależnie od wybranego formatu.",
      fallback: "Wszystkie reprezentacje mogą być wydrukowane. Technologia nie jest wymogiem dostępności."
    },
    lesson: [
      { minutes: 6, title: "Cel i wybór dostępu", teacher: "Pokazuje wspólne kryteria oraz tekst i schemat.", students: "Wybierają punkt wejścia i zaznaczają dane.", evidence: "Każdy rozpoczyna pracę na tym samym celu.", decision: "Jeśli wybór dezorientuje, nauczyciel wskazuje schemat jako start wspólny." },
      { minutes: 9, title: "Analiza przykładu", teacher: "Łączy fragment tekstu z krokiem schematu i produktem.", students: "Uzupełniają brakujące połączenie.", evidence: "Odpowiedź pokazuje rozumienie reprezentacji.", decision: "Nauczyciel wyjaśnia termin zawodowy, którego obraz nie zastępuje." },
      { minutes: 16, title: "Zadanie wspólne", teacher: "Udostępnia nową instrukcję i pracuje z uczniami przy punkcie startowym.", students: "Tworzą plan w tabeli albo opisie.", evidence: "Produkty są porównywalne według kryteriów.", decision: "Uczniowie bez postępu dostają wskazanie pierwszego kroku, nie łatwiejszy cel." },
      { minutes: 8, title: "Porównanie form", teacher: "Pokazuje dwa produkty w różnych formatach.", students: "Sprawdzają, czy zawierają te same informacje.", evidence: "Ocena opiera się na treści.", decision: "Forma, która ukrywa brak uzasadnienia, jest uzupełniana." },
      { minutes: 6, title: "Odpowiedź końcowa", teacher: "Zadaje pytanie o zależność kroków.", students: "Odpowiadają jednym zdaniem niezależnie od formatu.", evidence: "Wspólny zapis porównuje rozumienie.", decision: "Bariera, która nadal blokuje start, jest korygowana w materiale." }
    ],
    teacherPrompt: "Macie dwa sposoby odczytania instrukcji i dwa sposoby pokazania planu. Cel i kryteria są jednak wspólne: poprawna kolejność oraz uzasadnienie dwóch kroków.",
    vocational: {
      context: "Branża budowlana. Uczniowie planują przygotowanie podłoża na podstawie instrukcji zawierającej terminy, warunki i kolejność.",
      goal: "Uczeń odczytuje wymagania, planuje działania i uzasadnia zależności bez obniżania poziomu treści.",
      materials: ["instrukcja tekstowa", "schemat", "słownik czterech terminów", "dwa formaty produktu"],
      instruction: "Korzystając z tekstu, schematu lub obu materiałów, ułóż plan. Wybierz tabelę albo opis. W każdym wariancie wskaż warunek wejścia i uzasadnij dwa kroki.",
      phases: ["wybór reprezentacji", "połączenie tekstu ze schematem", "nowe zadanie", "porównanie produktów", "wspólny zapis"],
      product: "Plan spełniający te same kryteria w wybranym formacie.",
      likelyErrors: ["mylenie wyboru formy z wyborem celu", "pomijanie terminów zawodowych", "schemat bez uzasadnienia"],
      teacherResponses: ["Które kryterium pokazuje ten element?", "Gdzie w tekście znajduje się warunek?", "Forma jest dowolna, ale uzasadnienie obowiązkowe."],
      closing: "Nauczyciel sprawdza, czy któraś reprezentacja rzeczywiście pomogła wejść w zadanie. Nie utrzymuje dodatkowego materiału, który nie był używany lub nie wspierał celu."
    },
    general: { subject: "Biologia", topic: "Krążenie krwi", setup: "Ta sama zależność jest przedstawiona krótkim tekstem, schematem obiegu i przykładem drogi cząsteczki.", flow: "Uczeń wybiera wejście, a potem musi wyjaśnić drogę i funkcję wspólnymi pojęciami.", product: "Opis lub tabela drogi krwi spełniająca te same kryteria.", check: "Wspólne pytanie końcowe sprawdza związek budowy z funkcją." },
    engagement: { firstStep: "Wybierz tekst albo schemat i zaznacz pierwszy warunek wykonania.", segments: "Wybór następuje raz, potem uczniowie pracują w krótkich etapach z tym samym celem.", returnPrompt: "Wróć do kryterium drugiego i wskaż, gdzie pokazujesz zależność.", role: "Uczeń może wybrać formę bardziej dostępną, ale nie otrzymuje biernej roli.", caution: "Preferencja formatu nie jest diagnozą stylu uczenia się. Nauczyciel obserwuje, czy reprezentacja usuwa konkretną barierę." },
    assessment: { evidence: "Dowodem jest porównywalny produkt spełniający wspólne kryteria.", notGrade: "Nie ocenia się wyboru formatu ani estetyki schematu, jeśli nie są celem.", criteria: ["odczytuje warunki", "układa poprawną kolejność", "uzasadnia zależności"], revision: "Uczeń poprawia brakujące kryterium bez konieczności zmiany wybranego formatu." },
    mistakeFixes: [
      { mistake: "Powstaje wiele wersji o różnym poziomie.", instead: "Zachowaj wspólny cel i kryteria, zmień tylko dostęp lub formę odpowiedzi." },
      { mistake: "Wybór jest nieograniczony.", instead: "Oferuj dwie przemyślane opcje, które pokazują tę samą wiedzę." },
      { mistake: "Materiały są atrakcyjne, ale niespójne.", instead: "Używaj tych samych pojęć i jawnie łącz tekst, schemat oraz przykład." }
    ]
  },

  "metoda-mastery-learning.html": {
    boundaries: {
      isNot: "Mastery learning nie oznacza zatrzymania całej klasy do chwili, gdy każdy uzyska sto procent. Nauczyciel określa kluczowy warunek wstępny, szybko go sprawdza, daje dopasowaną korektę i nową próbę, a uczniowie gotowi pracują nad rozszerzeniem.",
      classroomProblem: "Metoda jest użyteczna, gdy przeliczenie receptury jest warunkiem dalszego planowania produkcji. Uczeń, który nie opanował proporcji, nie skorzysta z trudniejszego zadania o kosztach i organizacji.",
      promiseLimit: "Wyniki badań zależą od sposobu ustalania progu, jakości korekty i czasu. Pełne wdrożenia są wymagające organizacyjnie; w zwykłej klasie bezpieczniej zacząć od jednego warunku wstępnego."
    },
    classroom: [
      "Nauczyciel wybiera jedną umiejętność bramową i trzy kryteria. Próg nie może być przypadkową liczbą punktów; powinien oznaczać gotowość do kolejnego zadania.",
      "Po krótkiej diagnozie klasa dzieli się tymczasowo na ścieżkę korekty i ścieżkę zastosowania. Grupy nie są etykietami ani stałymi poziomami.",
      "Korekta używa innego wyjaśnienia lub przykładu niż pierwszy. Samo ponowne odczytanie tej samej instrukcji rzadko usuwa źródło błędu.",
      "Uczniowie gotowi rozwiązują zadanie rozszerzające z kontrolą, a nauczyciel pracuje z mniejszą grupą. Potem wszyscy wykonują nową, krótką próbę.",
      "Uczeń nieobecny zaczyna od diagnozy warunku. Nie musi przechodzić automatycznie przez całą ścieżkę korekty.",
      "Wynik nowej próby powinien być dostępny od razu, bo uczeń musi wiedzieć, czy może przejść do zastosowania. Jeżeli nauczyciel nie jest w stanie sprawdzić trzydziestu rozwiązań, zadanie powinno mieć krótki klucz obejmujący wynik, jednostkę i jeden krok rozumowania. Bardziej złożone produkty nie nadają się na bramkę w jednej lekcji.",
      "Pełny model warto stosować wybiórczo. Jeżeli korekta regularnie zajmuje większość lekcji, prawdopodobnie warunek jest zbyt szeroki albo pierwsze nauczanie wymaga przebudowy."
    ],
    preparation: {
      before: "Nauczyciel przygotowuje trzypunktową diagnozę przeliczania receptury, dwa typy korekty, nowy wariant sprawdzający i zadanie rozszerzające. Zapisuje, jakie błędy prowadzą do którego wsparcia.",
      materials: ["diagnoza", "model proporcji", "karta korekty", "nowa próba", "zadanie rozszerzające"],
      boardSetup: "Na tablicy są kryteria gotowości i dwie ścieżki pracy bez nazw wartościujących. Uczniowie wiedzą, że po korekcie wracają do nowej próby.",
      successProduct: "Uczeń poprawnie przelicza składniki, zachowuje proporcje i kontroluje realność wyniku.",
      fallback: "Karty w dwóch kolorach organizują ścieżki bez platformy."
    },
    lesson: [
      { minutes: 7, title: "Diagnoza warunku", teacher: "Daje krótki wariant receptury.", students: "Przeliczają dwa składniki i opisują sposób.", evidence: "Wynik i tok wskazują rodzaj błędu.", decision: "Nauczyciel kieruje do korekty proporcji, jednostek albo do zastosowania." },
      { minutes: 12, title: "Dwie ścieżki", teacher: "Modeluje korektę małej grupie, pozostałym daje rozszerzenie.", students: "Pracują nad właściwym zadaniem.", evidence: "Każda ścieżka tworzy zapis do kontroli.", decision: "Uczeń może zmienić ścieżkę po krótkim sprawdzeniu." },
      { minutes: 8, title: "Nowa próba", teacher: "Podaje inne liczby, ale ten sam warunek.", students: "Wykonują próbę samodzielnie.", evidence: "Nowy wariant pokazuje efekt korekty.", decision: "Brak poprawy oznacza zmianę rodzaju wsparcia, nie trzecią identyczną kartę." },
      { minutes: 12, title: "Wspólne zastosowanie", teacher: "Daje zadanie o planowaniu produkcji.", students: "Używają przeliczeń do określenia ilości i kontroli.", evidence: "Umiejętność działa w szerszym kontekście.", decision: "Uczeń z niepewnym wynikiem korzysta z tabeli proporcji." },
      { minutes: 6, title: "Kontrola", teacher: "Pokazuje trzy kryteria.", students: "Sprawdzają jednostki, proporcje i realność.", evidence: "Korekta końcowa ujawnia samokontrolę.", decision: "Nauczyciel planuje powrót tylko dla treści nadal niestabilnej." }
    ],
    teacherPrompt: "Najpierw sprawdzamy jeden warunek potrzebny do dalszego zadania. Jeśli wymaga korekty, dostaniecie inne wyjaśnienie i nową próbę; to nie jest stały podział klasy.",
    vocational: {
      context: "Technik żywienia przelicza recepturę z 10 na 36 porcji przed zaplanowaniem produkcji.",
      goal: "Uczeń zachowuje proporcje, poprawnie operuje jednostkami i wykorzystuje wynik w planie.",
      materials: ["receptura", "karty diagnozy i korekty", "tabela proporcji", "zadanie produkcyjne"],
      instruction: "Przelicz dwa składniki i pokaż sposób. Po diagnozie wykonaj zadanie swojej ścieżki, a następnie nowy wariant. Na końcu użyj wyniku do planu 36 porcji.",
      phases: ["diagnoza", "dopasowana korekta lub rozszerzenie", "ponowna próba", "zastosowanie", "kontrola"],
      product: "Poprawnie przeliczona receptura i fragment planu produkcji.",
      likelyErrors: ["zmiana liczby bez zachowania proporcji", "mieszanie jednostek", "nierealny wynik bez kontroli"],
      teacherResponses: ["Jaki jest współczynnik zmiany?", "Czy jednostki są zgodne?", "Czy wynik jest możliwy dla 36 porcji?"],
      closing: "Nauczyciel zapisuje, ilu uczniów opanowało warunek po pierwszej korekcie. Jeżeli wielu nadal ma trudność, zmienia model wyjaśnienia."
    },
    general: { subject: "Matematyka", topic: "Działania na ułamkach jako warunek zadania", setup: "Krótka diagnoza rozróżnia błąd wspólnego mianownika od błędu rachunkowego.", flow: "Jedna grupa pracuje na modelu wizualnym, druga stosuje umiejętność w problemie; potem wszyscy rozwiązują nowy wariant.", product: "Nowa próba i zastosowanie w zadaniu tekstowym.", check: "Nauczyciel sprawdza, czy poprawa utrzymuje się po tygodniu." },
    engagement: { firstStep: "Zapisz współczynnik zmiany liczby porcji.", segments: "Diagnoza, korekta, nowa próba i zastosowanie mają osobne, krótkie końce.", returnPrompt: "Wróć do współczynnika i sprawdź nim pierwszy składnik.", role: "W ścieżce rozszerzenia uczeń może kontrolować realność wyniku; w korekcie każdy wykonuje własną próbę.", caution: "Tymczasowa potrzeba korekty nie jest etykietą poziomu ucznia. Podział dotyczy konkretnej umiejętności w danym dniu." },
    assessment: { evidence: "Dowodem jest nowa próba po korekcie i zastosowanie w planie.", notGrade: "Pierwsza diagnoza nie powinna sama przesądzać o ocenie.", criteria: ["zachowuje proporcje", "używa poprawnych jednostek", "kontroluje realność wyniku"], revision: "Uczeń porównuje pierwszą i nową próbę oraz wskazuje krok, który zmienił." },
    mistakeFixes: [
      { mistake: "Próg to arbitralne 80 procent.", instead: "Zdefiniuj konkretne kryteria gotowości do kolejnego zadania." },
      { mistake: "Cała klasa czeka.", instead: "Przygotuj rozszerzenie dla gotowych i dopasowaną korektę dla pozostałych." },
      { mistake: "Korekta powtarza pierwsze wyjaśnienie.", instead: "Zmień reprezentację, przykład lub pytanie kierujące." }
    ]
  },

  "metoda-problem-projekt-przypadek.html": {
    boundaries: {
      isNot: "Problem, projekt i przypadek nie są jedną metodą ani dowolnym dużym zadaniem. Na jednej lekcji najlepiej sprawdza się ograniczony przypadek lub mikroprojekt z jasnym produktem, danymi i kryteriami. Długie przedsięwzięcie wymaga osobnego planu etapów.",
      classroomProblem: "Metoda łączy wiedzę z decyzją zawodową. Zamiast opowiadać o błędach kompletacji, uczniowie analizują dane magazynu i proponują jedną zmianę procesu, którą można ocenić według kosztu, wykonalności i wpływu.",
      promiseLimit: "Metaanalizy pokazują zróżnicowane efekty metod problemowych, projektowych i przypadków. Realistyczny kontekst może wspierać motywację, ale nie zastępuje wiedzy wstępnej, modelowania ani jasnych kryteriów."
    },
    classroom: [
      "W 45 minut problem musi być zamknięty: jedno pytanie, 5-7 danych, trzy opcje lub ograniczona przestrzeń rozwiązania i produkt na jednej stronie.",
      "Przy 30 uczniach pary lub grupy trzyosobowe najpierw zapisują indywidualną hipotezę. Dzięki temu praca nie zaczyna się od organizacyjnego podziału na piszącego i prezentującego.",
      "Nauczyciel zapewnia potrzebne dane. Nie każe szukać bez ograniczeń w internecie, bo wtedy oceniałby umiejętność wyszukiwania zamiast rozumienia procesu kompletacji.",
      "Uczniowie szybsi analizują skutek uboczny rozwiązania. Uczniowie wolniejsi dostają tabelę dane-wniosek, ale rozwiązują ten sam problem.",
      "Uczeń nieobecny może otrzymać zapis decyzji grupy i przygotować indywidualną ocenę według kryteriów.",
      "Jeżeli przypadek pochodzi z rzeczywistej firmy, dane trzeba zanonimizować i uprościć do celu lekcji. Nie powinny ujawniać informacji o pracownikach, klientach ani wynikach przedsiębiorstwa. Dydaktycznie ważny jest wzorzec problemu, nie autentyczna nazwa i pełna dokumentacja organizacji."
    ],
    preparation: {
      before: "Nauczyciel tworzy przypadek na podstawie typowego, nieidentyfikującego konkretnej firmy problemu. Przygotowuje dane o liczbie błędów, lokalizacji produktów i czasie, trzy kryteria oraz dwie możliwe interwencje do porównania.",
      materials: ["opis magazynu", "tabela błędów", "schemat procesu", "karta decyzji", "rubryka"],
      boardSetup: "Na tablicy są pytanie problemowe, produkt i kryteria: użycie danych, wykonalność, przewidywany wpływ. Nie ma gotowego rozwiązania.",
      successProduct: "Uczeń proponuje zmianę procesu, uzasadnia ją danymi i wskazuje sposób sprawdzenia efektu.",
      fallback: "Wydrukowany przypadek jest podstawowym wariantem."
    },
    lesson: [
      { minutes: 7, title: "Problem i hipoteza", teacher: "Przedstawia dane oraz produkt.", students: "Indywidualnie wskazują możliwą przyczynę.", evidence: "Każdy ma hipotezę początkową.", decision: "Jeśli uczniowie nie rozumieją wskaźnika, nauczyciel wyjaśnia tabelę przed pracą grupową." },
      { minutes: 13, title: "Analiza danych", teacher: "Zadaje pytania o wzorce i ograniczenia.", students: "W grupach porównują hipotezy i zaznaczają dowody.", evidence: "Karta łączy dane z wnioskiem.", decision: "Grupa bez dowodu nie przechodzi do projektowania rozwiązania." },
      { minutes: 12, title: "Rozwiązanie", teacher: "Przypomina kryteria i kontroluje zakres.", students: "Projektują jedną zmianę oraz wskaźnik efektu.", evidence: "Powstaje decyzja możliwa do oceny.", decision: "Pomysł zbyt szeroki jest zawężany do jednego etapu procesu." },
      { minutes: 7, title: "Test krytyczny", teacher: "Łączy grupy parami i daje pytanie o ryzyko.", students: "Sprawdzają rozwiązanie innej grupy.", evidence: "Każdy produkt otrzymuje jedną konkretną uwagę.", decision: "Uwaga bez odniesienia do kryterium jest odrzucana." },
      { minutes: 6, title: "Decyzja końcowa", teacher: "Prosi o indywidualne podsumowanie.", students: "Zapisują rozwiązanie, dowód i sposób pomiaru.", evidence: "Produkt oddziela wiedzę jednostki od grupy.", decision: "Brak użycia danych prowadzi do powrotu do tabeli na kolejnej lekcji." }
    ],
    teacherPrompt: "Nie szukamy najbardziej efektownego pomysłu. Proponujemy jedną zmianę, którą można uzasadnić danymi, wdrożyć i sprawdzić.",
    vocational: {
      context: "Technik logistyk analizuje wzrost błędów kompletacji w magazynie. Dane pokazują typ produktu, lokalizację, zmianę roboczą i rodzaj pomyłki.",
      goal: "Uczeń identyfikuje wzorzec, projektuje ograniczoną zmianę procesu i wskaźnik ewaluacji.",
      materials: ["tabela błędów", "schemat magazynu", "opis procesu", "karta rozwiązania"],
      instruction: "Wskaż wzorzec w danych, zaproponuj jedną zmianę procesu, podaj ryzyko i określ, po czym po dwóch tygodniach poznasz, czy rozwiązanie działa.",
      phases: ["hipoteza", "analiza", "projekt zmiany", "krytyka", "decyzja indywidualna"],
      product: "Jednostronicowa rekomendacja: problem, dwa dowody, zmiana, ryzyko i wskaźnik.",
      likelyErrors: ["rozwiązanie bez danych", "zmiana obejmująca cały magazyn", "wskaźnik oparty na opinii zamiast błędach"],
      teacherResponses: ["Które dwa wiersze wspierają wniosek?", "Jaki jeden etap zmieniasz?", "Co dokładnie zmierzysz?"],
      closing: "Nauczyciel porównuje rozwiązania według kryteriów, nie ogłasza jednego wzoru. Pokazuje też, że analiza przypadku nie dowodzi skuteczności pomysłu przed pilotażem."
    },
    general: { subject: "Wiedza o społeczeństwie", topic: "Bezpieczne przejście w okolicy szkoły", setup: "Uczniowie otrzymują mapę, dane o ruchu i trzy ograniczenia budżetowe.", flow: "Po hipotezie analizują dane, proponują jedną zmianę i wskaźnik oceny.", product: "Rekomendacja dla samorządu z dowodami i ryzykiem.", check: "Indywidualne podsumowanie wymaga wskazania danych, nie tylko preferencji." },
    engagement: { firstStep: "Znajdź w tabeli dwa miejsca o największej liczbie błędów.", segments: "Hipoteza, analiza, projekt i test krytyczny kończą się odrębnym zapisem.", returnPrompt: "Wróć do tabeli i dopisz numer wiersza przy swoim wniosku.", role: "Uczeń może odpowiadać za dowody, kryteria lub ryzyko, ale każdy tworzy odpowiedź końcową.", caution: "Zainteresowanie kontekstem nie jest jedynym wskaźnikiem uczenia. Liczy się użycie wiedzy i danych w produkcie." },
    assessment: { evidence: "Dowodem jest związek danych z rozwiązaniem i wykonalny sposób oceny efektu.", notGrade: "Nie ocenia się atrakcyjności prezentacji ani liczby pomysłów.", criteria: ["używa co najmniej dwóch danych", "proponuje wykonalną zmianę", "wskazuje ryzyko i mierzalny efekt"], revision: "Po teście krytycznym grupa poprawia jedno pole, a każdy zapisuje własną decyzję końcową." },
    mistakeFixes: [
      { mistake: "Problem jest zbyt szeroki.", instead: "Ogranicz go do jednej decyzji, kilku danych i produktu na jednej stronie." },
      { mistake: "Uczniowie szukają przypadkowych informacji.", instead: "Zapewnij pakiet danych potrzebnych do celu lekcji." },
      { mistake: "Oceniany jest wygląd projektu.", instead: "Stosuj kryteria dotyczące danych, wykonalności i sposobu sprawdzenia." }
    ]
  },
};
