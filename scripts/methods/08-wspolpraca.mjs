export default {
  file: "metoda-wspolpraca.html",
  title: "Współpraca: grupy z rolami i tutoring w parach",
  group: "core",
  short: "Dwie struktury: grupa, w której każdy ma inną wiedzę potrzebną do wspólnego produktu, oraz para, w której jeden uczy drugiego pytaniami z karty.",
  aliases: ["uczenie kooperacyjne", "jigsaw", "grupy ekspertów", "tutoring rówieśniczy", "peer tutoring"],
  evidence: { level: "umiarkowane", label: "Umiarkowane", note: "Synteza EEF o uczeniu współpracy i o tutoringu rówieśniczym wskazuje średnio dodatnie efekty, ale jakość dowodów i efekty zależą od struktury, przygotowania uczniów i tego, czy każdy odpowiada indywidualnie. Samo posadzenie uczniów w grupie nie daje tego efektu." },
  categories: ["wspolpraca", "zaangazowanie"],
  tags: ["role", "karta eksperta", "tutor z kartą pytań"],
  definition: "Uczniowie mają różne elementy wiedzy, których potrzeba do wspólnego produktu, albo jeden prowadzi drugiego pytaniami z karty. Na końcu każdy odpowiada indywidualnie.",
  how: [
    "Struktura A, grupa z rolami (jigsaw): każdy uczeń dostaje kartę z innym fragmentem (koszty, alergeny, czas, wymagania). Najpierw pracuje sam, potem spotyka się z osobami z tą samą kartą, żeby upewnić się, że rozumie, a na koniec wraca do grupy domowej i uczy pozostałych. Produkt wymaga wszystkich fragmentów, więc nikt nie może się wyłączyć.",
    "Struktura B, tutoring w parach: uczeń A rozwiązuje zadanie i mówi na głos, co robi. Uczeń B ma kartę z odpowiedziami i trzy pytania („Skąd wynika ten krok?”, „Co sprawdzisz przed następnym?”, „Sprawdź odpowiedź z kryterium”). B nie podaje rozwiązania. Potem role się zmieniają, a zadanie ma inne dane. Tutoring służy do ćwiczenia wcześniej nauczonej procedury, nie do nauki nowej treści."
  ],
  differs: [
    { with: "Flipped classroom", text: "Tu rozdzielenie wiedzy jest częścią struktury. W flipped wszyscy mają ten sam materiał przed lekcją." },
    { with: "Nauczanie dialogowe", text: "Tu praca grupy kończy się wspólnym produktem. W dialogu cała klasa rozmawia o jednym problemie i nie tworzy produktu." },
    { with: "Modelowanie", text: "Tu uczniowie uczą się nawzajem. Nie wolno w ten sposób wprowadzać nowej treści bez modelu od nauczyciela." }
  ],
  when: {
    good: ["zadanie ma kilka niezależnych elementów wiedzy (koszty, czas, wymagania, bezpieczeństwo)", "chcesz zwiększyć liczbę prób i wyjaśnień, gdy nie jesteś w stanie wysłuchać 30 osób", "utrwalanie procedury, którą już pokazałeś"],
    notFor: ["czynności wymagające uprawnień lub bezpośredniego nadzoru BHP", "wprowadzanie nowej treści wyłącznie przez rówieśnika", "zadanie, które jedna osoba zrobi sama w pięć minut"]
  },
  lesson: [
    { min: 5, title: "Cel, produkt i karty ekspertów", teacher: "Pokazuje produkt końcowy. Rozdaje 4 różne karty w grupach domowych po 4 osoby. Przesiadanie się do grup ekspertów i z powrotem zajmuje około 2 minut, więc plan ma zapas.", students: "Każdy czyta swój cel na karcie." },
    { min: 6, title: "Praca indywidualna nad kartą", teacher: "Sprawdza, czy każdy zapisuje własną odpowiedź przed rozmową.", students: "Czytają kartę, zapisują 2–3 kluczowe fakty." },
    { min: 9, title: "Grupy ekspertów", teacher: "Łączy osoby z tą samą kartą w 4-osobowe zespoły. Krąży i sprawdza poprawność.", students: "Porównują zapisy, poprawiają i ustalają, jak wyjaśnią to innym." },
    { min: 12, title: "Grupy domowe: wspólny produkt", teacher: "Nie podpowiada, tylko pyta: „Kto wniósł tę informację?”", students: "Każdy uczy grupę swojej części. Razem tworzą jeden produkt na karcie A3." },
    { min: 6, title: "Odpowiedź indywidualna", teacher: "Zmienia jeden warunek zadania. Zbiera kartki.", students: "Każdy sam zapisuje jedną konieczną zmianę w produkcie i dlaczego." }
  ],
  decisionPoint: "Jeżeli w grupie domowej jedna osoba robi wszystko, zatrzymaj pracę i poproś o odczytanie produktu każdemu po kolei. Informacje z kart muszą wyjść od właściwych osób.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Technik żywienia / kucharz: menu przerwy kawowej dla 40 osób",
      context: "Klasa 2. Cztery karty: koszty, alergeny i nietolerancje, wykonalność (czas i sprzęt), porcje na osobę. Dane przykładowe.",
      goal: "Grupa ustala menu w budżecie 320 zł, a każdy uczeń potrafi wyjaśnić kompromis.",
      materials: [
        { t: "Karta 1: Koszty", table: { head: ["Pozycja", "Cena za porcję"], rows: [["Kanapka z serem", "2,60 zł"], ["Kanapka z pastą z ciecierzycy (bez mleka)", "2,90 zł"], ["Ciastko", "1,80 zł"], ["Ciastko bez mleka i jaj", "2,20 zł"], ["Owoc (jabłko)", "1,20 zł"], ["Sok 200 ml", "1,20 zł"], ["Kawa lub herbata", "0,90 zł"]] } },
        { t: "Karta 2: Alergeny", text: "Z 40 osób 2 nie mogą spożywać mleka i jaj. Pozostałe bez ograniczeń. Które pozycje z karty 1 nie nadają się dla tych osób?" },
        { t: "Karta 3: Wykonalność", text: "Dwie osoby przygotowują kanapki w 60 minut (około 40 sztuk). Ciastka są gotowe z cukierni. Nie ma lodówki na sok dla 40 osób." },
        { t: "Karta 4: Porcje", text: "Na osobę: jedna kanapka, jedno ciastko, jedna kawa lub herbata, jeden owoc. Ustal, czy starczy budżetu na sok." },
        { t: "Produkt grupy", text: "Menu z kalkulacją kosztu i jednym zdaniem uzasadnienia." },
        { t: "Pytanie indywidualne", later: true, text: "Budżet spadł do 280 zł. Co zmienisz jako pierwsze i dlaczego?" }
      ],
      key: "Dla 38 osób: 2,60 + 1,80 + 0,90 + 1,20 + 1,20 = 7,70 zł, razem 292,60 zł. Dla 2 osób: 2,90 + 2,20 + 0,90 + 1,20 + 1,20 = 8,40 zł, razem 16,80 zł. Suma 309,40 zł, czyli w budżecie. Pytanie indywidualne: rezygnacja z soku dla wszystkich obniża koszt o 48 zł do 261,40 zł. Receptury i ceny to dane do lekcji, nie do zakupów.",
      errors: ["pominięcie osób z nietolerancją", "brak kontroli sumy", "dominacja jednej osoby przy kalkulacji"]
    },
    {
      kind: "ogolny",
      label: "Historia: odbudowa państwa polskiego 1918–1921",
      context: "Cztery karty: daty i wydarzenia, granice, ustrój, sytuacja międzynarodowa.",
      goal: "Grupa tworzy oś czasu z przyczynami i skutkami, a każdy odpowiada na pytanie o związek.",
      materials: [
        { t: "Karta 1: Wydarzenia", list: ["11 listopada 1918: Piłsudski obejmuje naczelne dowództwo wojskowe", "26 stycznia 1919: wybory do Sejmu Ustawodawczego", "20 lutego 1919: Mała Konstytucja"] },
        { t: "Karta 2: Granice", list: ["27 grudnia 1918: wybucha powstanie wielkopolskie", "28 czerwca 1919: traktat wersalski", "18 marca 1921: pokój ryski"] },
        { t: "Karta 3: Ustrój", list: ["17 marca 1921: Konstytucja marcowa", "Sejm Ustawodawczy działa od 1919 do 1922", "Naczelnik Państwa: Józef Piłsudski do 1922"] },
        { t: "Pytanie indywidualne", later: true, text: "Dlaczego państwo potrzebowało jednocześnie armii i Sejmu, żeby się utrzymać?" }
      ],
      key: "Odpowiedź łączy dwie karty: granice rozstrzygały się zbrojnie i dyplomatycznie (armia, traktaty), a ustrój i legitymacja wymagały instytucji (Sejm, konstytucja). Uczeń ma wskazać po jednym przykładzie z dwóch kart.",
      errors: ["lista dat bez związku przyczynowego", "jedna osoba uzupełnia całą oś"]
    }
  ],
  variantB: {
    title: "Wariant B na jedną lekcję: tutoring w parach",
    steps: [
      "Przypomnij wcześniej nauczoną procedurę (5 min).",
      "Pokaż z jednym uczniem różnicę między pytaniem a podpowiedzią: „Co sprawdzasz przed tym krokiem?” zamiast „Zrób to tak” (5 min).",
      "Runda 1 (10 min): A rozwiązuje, B pyta z karty i sprawdza z kluczem.",
      "Runda 2 (10 min): role się zmieniają, dane inne.",
      "Samodzielne zadanie końcowe (8 min) bez pary."
    ]
  },
  tech: {
    none: "Karty z papieru, arkusz A3 na produkt. Nic więcej nie potrzeba.",
    computer: "Dokument udostępniony może zastąpić A3, ale ogranicz do jednej osoby przy klawiaturze i rotuj.",
    phone: "Jeden telefon w grupie do otwarcia źródła. Nie zastępuje udziału pozostałych.",
    ai: "AI może przygotować warianty danych na kartach. Sprawdź, czy każda karta jest potrzebna do produktu i czy liczby się zgadzają."
  },
  pitfalls: [
    { mistake: "Role to „lider” i „sekretarz”.", instead: "Każda rola ma treściowe zadanie, bez którego produkt się nie uda." },
    { mistake: "Oceniasz tylko produkt grupy.", instead: "Dodaj indywidualne pytanie po zmianie warunku zadania." },
    { mistake: "Tutor podaje odpowiedź partnerowi.", instead: "Zamodeluj trzy pytania z karty i sprawdzaj kilka par w każdej rundzie." }
  ],
  check: { how: "Zbierz produkt i indywidualne odpowiedzi. Sprawdź, czy odpowiedź osoby z najmniej aktywnej roli jest poprawna.", decision: "Jeśli jedna osoba dominuje, przeprojektuj zadanie tak, żeby dane były rozdzielone. Samo przypomnienie o współpracy nie wystarczy." },
  sources: [
    { title: "EEF: Collaborative Learning Approaches", type: "synteza badań", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/collaborative-learning-approaches", note: "Znaczenie struktury, małych grup i wspólnego celu." },
    { title: "EEF: Peer Tutoring", type: "synteza badań", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/peer-tutoring", note: "Korzyści, ograniczenia i konieczność przygotowania tutorów." }
  ],
  related: ["Nauczanie dialogowe", "Flipped classroom", "Modelowanie: jawne nauczanie, przykłady i instruktaż"]
};
