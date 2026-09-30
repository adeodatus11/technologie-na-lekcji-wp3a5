// Dodatkowe dane metod: czas przygotowania, wariant na blok 90 minut i lista rzeczy do sprawdzenia przez recenzentów.

export const prepTime = {
  "method-1.html": "Z gotowym wydrukiem około 10 minut (sprawdzenie logowania w pracowni). Własny moduł na ZPE: 1–2 godziny.",
  "method-2.html": "Quiz i kartę z podsumowaniem: około 15 minut. Własny temat: 45–60 minut.",
  "method-3.html": "Karta ratunkowa i trzy pytania: około 20 minut. Własny temat: około godziny.",
  "metoda-przypominanie-i-powroty.html": "Gotowy zestaw: 5 minut. Własny zestaw pytań z kluczem: 20–30 minut. Karta powrotów na semestr: około 30 minut.",
  "metoda-modelowanie.html": "Gotowy wydruk: 5 minut. Własny temat (przykład pełny, z lukami i samodzielny): 30–45 minut.",
  "metoda-ocenianie-ksztaltujace.html": "Pytanie z czterema odpowiedziami: 15–25 minut. Najtrudniej wymyślić błędne odpowiedzi, które ktoś naprawdę wybierze.",
  "metoda-metapoznanie.html": "Karta: 5 minut. Własny przypadek z nową informacją w połowie: około 30 minut.",
  "metoda-wspolpraca.html": "Wycięcie kart z wydruku: 10 minut. Własne karty ekspertów: 45–60 minut.",
  "metoda-nauczanie-dialogowe.html": "Przypadek na jednej kartce: 15–30 minut.",
  "metoda-udl.html": "Dwie wersje instrukcji i słowniczek: 45–60 minut na własny dokument.",
  "metoda-mastery-learning.html": "Dwa zestawy zadań w różnych kolorach z kluczem: 30–40 minut.",
  "metoda-problem-projekt-przypadek.html": "Dane i karta decyzji: 45–90 minut. Dane z prawdziwej firmy trzeba dodatkowo zanonimizować."
};

export const block90 = {
  "method-1.html": "Pierwszy moduł na materiale ogólnym, drugi na przypadku, który wymaga zastosowania. Albo moduł i 30 minut pracy w parach nad własnym przypadkiem.",
  "method-2.html": "Cały warsztat w jednym bloku: pierwsza lekcja to pytania z przygotowania i model, druga to praca nad przypadkiem i porównanie rozwiązań.",
  "method-3.html": "Pierwsza lekcja: karta z materiałem (15 min) i model nauczyciela. Druga: problem w parach i konfrontacja rozwiązań.",
  "metoda-przypominanie-i-powroty.html": "Dodaj drugi powrót po 45 minutach (na środku bloku) i użyj nowej wiedzy w dłuższym zadaniu złożonym.",
  "metoda-modelowanie.html": "Pierwsza lekcja to model i przykład z lukami, druga to zadanie samodzielne i zadanie o zmienionych danych. W pracowni: instruktaż i dwa ćwiczenia z kontrolą.",
  "metoda-ocenianie-ksztaltujace.html": "Dwa pytania diagnostyczne (jedno po wyjaśnieniu, drugie po zadaniu) i druga wersja pracy po komentarzu.",
  "metoda-metapoznanie.html": "Dwa zadania z rzędu: pierwsze z pełną kartą, drugie z jednym pytaniem kontrolnym. Sprawdzasz, czy uczniowie używają strategii bez ramy.",
  "metoda-wspolpraca.html": "Jigsaw w całości bez pośpiechu i druga runda tutoringu w parach na innych danych jako samodzielne sprawdzenie.",
  "metoda-nauczanie-dialogowe.html": "Dwa przypadki: pierwszy z pełną strukturą, drugi z krótszą rozmową w parach i nową informacją. Wydłuża się forum, nie zapisy.",
  "metoda-udl.html": "Dwie instrukcje: pierwsza z dwoma wejściami, druga do samodzielnej pracy z tą formą, którą uczeń wybierze po pierwszym zadaniu.",
  "metoda-mastery-learning.html": "Diagnoza na początku bloku, korekta i nowa próba przed przerwą, a zastosowanie w zadaniu złożonym po przerwie.",
  "metoda-problem-projekt-przypadek.html": "Dwie lekcje to mikroprojekt: pierwsza na analizę danych i hipotezy, druga na rozwiązanie, krytykę krzyżową i decyzję."
};

// Każdy element: [indeks scenariusza] => { branch, verify }
export const reviewData = {
  "method-1.html": [
    { branch: "logistyka", verify: [
      "Czy PZ, WZ, MM, RW i PW są przypisane do właściwych operacji (przyjęcie zewnętrzne, wydanie zewnętrzne, przesunięcie międzymagazynowe, rozchód wewnętrzny, przyjęcie wewnętrzne)?",
      "Czy opisane postępowanie przy rozbieżności (adnotacja przed podpisem, protokół rozbieżności, osobne zakwalifikowanie uszkodzonego towaru) jest zgodne z praktyką magazynu?",
      "Czy 12 sztuk w zgniecionym kartonie należy potraktować w całości jako niezgodne jakościowo, czy oceniać sztuka po sztuce?"
    ] },
    { branch: "matematyka", verify: ["Czy przykład „−20% i +20%” jest właściwym poziomem trudności dla tej klasy?", "Czy zapisy obliczeń są zgodne z przyjętym w szkole sposobem zapisu?"] }
  ],
  "method-2.html": [
    { branch: "elektryka", verify: [
      "Czy kolory izolacji przewodów są podane poprawnie (PE: żółto-zielony, N: niebieski, L: brązowy, czarny, szary)?",
      "Czy zasady bezpiecznej pracy (odłączyć zasilanie, zabezpieczyć przed ponownym załączeniem, sprawdzić brak napięcia) są sformułowane poprawnie i kompletnie dla tego poziomu?",
      "Czy kolejność kontroli obwodu (zabezpieczenie, puszka rozgałęźna, łącznik, odbiorniki) jest sensowna? Czy nigdzie nie sugeruje czynności pod napięciem?"
    ] },
    { branch: "przyroda", verify: ["Czy założenia lekcji (500 m od zabudowy, 6 m/s) są oznaczone jako uproszczone i nie wprowadzają w błąd?", "Czy dane z tabeli są realistycznym rzędem wielkości?"] }
  ],
  "method-3.html": [
    { branch: "gastronomia", verify: [
      "Czy lista 14 alergenów jest kompletna i zgodna z rozporządzeniem UE nr 1169/2011 (w tym siarczyny powyżej 10 mg/kg)?",
      "Czy alergeny przypisane do dań (zupa, kotlet, surówka, ciasto) są realistyczne? Które wymagają sprawdzenia receptury?",
      "Czy proponowane zmiany (zupa bez śmietanki, deser bez orzechów i mleka) oraz uwaga o zanieczyszczeniu krzyżowym są poprawne?"
    ] },
    { branch: "przyroda", verify: [
      "Czy obliczenia prądu i mocy są poprawne (8,7 A; 19,6 A)?",
      "Czy opis zachowania wyłącznika nadprądowego 16 A przy prądzie ok. 1,22 krotności znamionowego („zadziała po pewnym czasie, nawet kilkudziesięciu minut”) jest poprawny?"
    ] }
  ],
  "metoda-przypominanie-i-powroty.html": [
    { branch: "mechanika", verify: [
      "Czy podane napięcia (akumulator w spoczynku 12,6–12,8 V; ładowanie przy ok. 2000 obr./min 13,8–14,4 V) są poprawne dla typowych pojazdów, którymi zajmują się uczniowie?",
      "Czy trzeba dopisać uwagę o pojazdach z inteligentnym sterowaniem ładowaniem, w których napięcie zmienia się w szerszym zakresie?",
      "Czy kolejność kontroli (pasek napędowy, połączenia elektryczne, regulator i alternator) jest właściwa? Czy wniosek „układ nie ładuje” przy 12,3 V jest poprawny?"
    ] },
    { branch: "przyroda", verify: ["Czy równanie i rola elementów fotosyntezy są opisane poprawnie i na właściwym poziomie?", "Czy pytanie o aparaty szparkowe w upale nie upraszcza zbyt mocno?"] }
  ],
  "metoda-modelowanie.html": [
    { branch: "ekonomia-handel", verify: [
      "Czy stawki VAT 23% i 8% w przykładach są poprawne? Czy towar w przykładzie z 8% byłby rzeczywiście opodatkowany taką stawką?",
      "Czy sposób liczenia VAT od wartości netto pozycji jest zgodny z zasadami wystawiania faktur (w praktyce VAT wylicza się od sumy wartości netto według stawki, nie od każdej pozycji z osobna)? Jeśli nie, dopisać uwagę.",
      "Czy sposób zaokrąglania groszy (104,33 zł) jest zgodny z przyjętym w szkole?"
    ] },
    { branch: "gastronomia", verify: [
      "Czy proporcje sosu beszamelowego (50 g masła, 50 g mąki, 500 ml mleka) dają sos średniej gęstości?",
      "Czy kolejność i opis czynności (smażenie zasmażki bez zbrązowienia, stopniowe dolewanie mleka, gotowanie) są zgodne z praktyką pracowni?",
      "Czy instruktaż zawiera wszystkie uwagi BHP dla tej czynności?"
    ] },
    { branch: "matematyka", verify: ["Czy trzy równania (x = 5, x = 4, x = 6) i komentarz „obie strony równania” są właściwe dla poziomu klasy?", "Czy kolejność trudności (niewiadoma po jednej stronie, potem po obu stronach) jest właściwa?"] }
  ],
  "metoda-ocenianie-ksztaltujace.html": [
    { branch: "logistyka", verify: [
      "Czy odpowiedź C (karton pięciowarstwowy z wypełnieniem i taśmą po krawędziach) jest sensowna dla drukarki 14 kg w transporcie kurierskim?",
      "Czy pozostałe odpowiedzi (A, B, D) odpowiadają realnym błędom uczniów, a nie są oczywiście błędne?",
      "Czy oczekiwane odpowiedzi dla zegara 1,2 kg (kurier) i zgrzewki wody 9 kg (paleta) są zgodne z praktyką?"
    ] },
    { branch: "matematyka", verify: ["Czy odpowiedzi A–D dobrze odsłaniają typowe błędy w procentach?", "Czy zadanie z 200 zł (+10%, −10%) jest dobrym zadaniem do pierwszej wersji?"] }
  ],
  "metoda-metapoznanie.html": [
    { branch: "logistyka", verify: [
      "Czy priorytet dla mrożonek przy przyjęciu dostawy (ryzyko przerwania łańcucha chłodniczego) jest poprawny?",
      "Czy reakcja na awarię regału w chłodni (zgłoszenie przełożonemu, druga chłodnia, zmiana terminu dostawy) jest realistyczna?",
      "Czy 30 minut na przyjęcie trzech palet z kontrolą to realistyczny czas?"
    ] },
    { branch: "matematyka", verify: ["Czy zadanie o średniej prędkości (4,43 km/h) jest poprawne i pokazuje typową pułapkę?", "Czy karta planowania z trzema pytaniami jest wystarczająca dla tej klasy?"] }
  ],
  "metoda-wspolpraca.html": [
    { branch: "gastronomia", verify: [
      "Czy ceny (kanapka 2,60 zł, ciastko 1,80 zł itd.) są realistycznym rzędem wielkości? Są oznaczone jako przykładowe.",
      "Czy 40 kanapek w 60 minut przez dwie osoby jest realistyczne?",
      "Czy pasta z ciecierzycy jest sensowną opcją bez mleka? Czy trzeba dopisać uwagę o sezamie (pasta tahini)?"
    ] },
    { branch: "historia", verify: [
      "Czy wszystkie daty i wydarzenia są poprawne (11.11.1918; 27.12.1918; 26.01.1919; 20.02.1919; 28.06.1919; 17.03.1921; 18.03.1921)?",
      "Czy sformułowania typu „Piłsudski obejmuje naczelne dowództwo” i „Naczelnik Państwa do 1922” są precyzyjne?",
      "Czy pytanie indywidualne o armię i Sejm jest właściwe dla poziomu klasy?"
    ] }
  ],
  "metoda-nauczanie-dialogowe.html": [
    { branch: "ekonomia-handel", verify: [
      "Czy opis relacji rękojmi, gwarancji i niezgodności towaru z umową w kluczu jest zgodny z aktualnymi przepisami (Kodeks cywilny, ustawa o prawach konsumenta)?",
      "Czy wypowiedź sprzedawcy („proszę jechać do serwisu”) jest typową, realistyczną sytuacją?",
      "Czy uwaga o ciężarze wykazania przyczyny usterki po uszkodzeniu mechanicznym jest poprawna?"
    ] },
    { branch: "przyroda", verify: ["Czy dane o wilkach i sarnach są oznaczone jako przykładowe i nie sugerują wniosków?", "Czy nowa informacja o ogrodzeniach elektrycznych jest realistyczna?"] }
  ],
  "metoda-udl.html": [
    { branch: "budownictwo", verify: [
      "Czy wartości przykładowej instrukcji (wilgotność wylewki maks. 3% CM, równość do 3 mm na 2 m, schnięcie gruntu 4 h, czas otwarty kleju 20 min) mieszczą się w typowych zakresach kart technicznych?",
      "Czy kolejność prac (oczyszczenie, pomiar wilgotności, sprawdzenie równości, gruntowanie, klej, płytki) jest poprawna?",
      "Czy terminologia (wylewka cementowa, CM, czas otwarty, pacą zębatą) jest właściwa i wyjaśniona w słowniczku?"
    ] },
    { branch: "przyroda", verify: ["Czy opis drogi krwi (oba krwiobiegi, tętnice i żyły) jest poprawny i jednoznaczny?", "Czy zadanie „droga krwi od płuc do mięśnia i z powrotem” ma jednoznaczną odpowiedź?"] }
  ],
  "metoda-mastery-learning.html": [
    { branch: "gastronomia", verify: [
      "Czy przeliczanie receptury z 10 na 36 porcji (współczynnik 3,6; jaja 14,4) i proponowane zaokrąglenie są zgodne z praktyką?",
      "Czy uwaga o nieliniowym przeliczaniu przypraw i czasu obróbki jest wystarczająca?",
      "Czy ceny (mąka 3,20 zł/kg, mleko 3,80 zł/l, jaja 1,10 zł/szt.) są realistycznym rzędem wielkości? Są oznaczone jako przykładowe."
    ] },
    { branch: "matematyka", verify: ["Czy trzy zadania diagnostyczne z ułamkami rzeczywiście mierzą ten sam warunek?", "Czy model wizualny (paski 6 i 12 części) jest właściwą korektą?"] }
  ],
  "metoda-problem-projekt-przypadek.html": [
    { branch: "logistyka", verify: [
      "Czy wzorzec (zamiana podobnych indeksów przy słabym oświetleniu, zmiana III, regał 7) jest typowy dla magazynu?",
      "Czy proponowana zmiana (rozdzielenie lokalizacji podobnych indeksów, oznaczenia kolorystyczne) jest wykonalna?",
      "Czy wskaźnik (liczba błędów na regale 7 na zmianie III w dwa tygodnie) i czas pilotażu są realistyczne?"
    ] },
    { branch: "historia-wos", verify: [
      "Czy przykład kredytu (35 000 zł na 5 lat, rata 730 zł, co odpowiada oprocentowaniu ok. 9,2% rocznie) jest realistyczny?",
      "Czy zasada bezpieczeństwa budżetu (poduszka finansowa) jest dobrze ujęta w kluczu?"
    ] }
  ]
};

export const branchLabels = {
  logistyka: "Logistyka (technik logistyk)",
  elektryka: "Elektryka (technik elektryk)",
  mechanika: "Mechanika pojazdów (technik i branżowa szkoła I stopnia)",
  gastronomia: "Żywienie i gastronomia (technik żywienia, kucharz)",
  "ekonomia-handel": "Ekonomia i handel (technik ekonomista, handlowiec, sprzedawca)",
  budownictwo: "Budownictwo (monter robót wykończeniowych, technik budownictwa)",
  matematyka: "Matematyka",
  przyroda: "Biologia, fizyka, geografia",
  historia: "Historia",
  "historia-wos": "Przedsiębiorczość i WOS"
};
