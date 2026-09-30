export default {
  file: "method-3.html",
  title: "Flipped classroom",
  group: "wp3",
  short: "Najpierw pierwszy kontakt z materiałem, potem lekcja na pracę nad problemem z nauczycielem.",
  aliases: ["odwrócona klasa", "odwrócona lekcja"],
  evidence: { level: "umiarkowane", label: "Umiarkowane, bardzo zróżnicowane", note: "Metaanaliza Strelana, Osborna i Palmera (2020) wskazuje średnio dodatni, ale silnie zróżnicowany efekt. Zależy on od tego, czy uczniowie faktycznie przygotują się przed lekcją i co się dzieje na samej lekcji. W naszej klasie brak przygotowania to główne ryzyko." },
  categories: ["przygotowanie", "technologia", "zaangazowanie"],
  tags: ["WP3.A5", "przygotowanie przed lekcją", "praca nad problemem"],
  definition: "Uczeń poznaje materiał przed lekcją (film, tekst, ćwiczenie), a czas z nauczycielem służy dyskusji, rozwiązywaniu problemów i ćwiczeniu.",
  how: [
    "W materiale WP3.A5 nauczyciel wysyła krótki film i artykuł wcześniej (dzień 1). Lekcja (dzień 2) zaczyna się krótkim podsumowaniem, a potem grupy rozwiązują konkretny problem, a nauczyciel pomaga i zadaje pytania. Po lekcji uczniowie mogą wymieniać doświadczenia i dostawać informację zwrotną online.",
    "W szkole branżowej i technikum największą barierą jest przygotowanie. Część uczniów nie ma czasu ani chęci na pracę w domu. Dlatego nie traktuj przygotowania jako warunku. Skróć je do 7–10 minut pod koniec poprzedniej lekcji (albo w domu dla chętnych), a na początku lekcji przewidź kartę z podsumowaniem dla osób, które go nie zrobiły. Lekcja nie zależy wtedy od tego, kto się przygotował."
  ],
  differs: [
    { with: "Blended learning", text: "Flipped to jedna zmiana kolejności w obrębie dwóch lekcji. Nie ma obowiązkowego follow-upu ani ewaluacji całego cyklu." },
    { with: "Nauczanie jawne", text: "W nauczaniu jawnym nauczyciel modeluje rozwiązanie na lekcji. Tu modelowanie przenosi się do materiału przed lekcją, a nauczyciel wchodzi, gdy uczniowie próbują sami." },
    { with: "Współpraca w grupach", text: "Flipped nie wymaga ról ani rozdzielania kart. Może być prowadzony w parach i z całą klasą. Podział na ekspertów to osobna struktura." }
  ],
  when: {
    good: ["temat ma jasny podział na wiedzę (da się ją poznać samodzielnie) i zastosowanie (wymaga nauczyciela)", "uczniowie mają choć krótki czas na przygotowanie w szkole", "masz dobry krótki materiał (2–5 minut filmu lub jedna strona)"],
    notFor: ["wprowadzanie trudnej, nowej procedury, w której uczeń nie ma jak rozpoznać swojego błędu", "klasa, w której zwykle mniej niż połowa odrabia zadania", "materiał dłuższy niż 10 minut (skutek: nikt go nie obejrzy)"]
  },
  lesson: [
    { min: 6, title: "Sprawdzenie przygotowania", teacher: "Daje 3 pytania na kartce (bez oceny). Osobom, które nie miały materiału, daje kartę z podsumowaniem na jedną stronę.", students: "Odpowiadają na pytania albo czytają kartę i zapisują jedno pytanie." },
    { min: 4, title: "Odpowiedzi na pytania", teacher: "Wybiera dwa pytania z kart i odpowiada na nie krótko.", students: "Poprawiają własne odpowiedzi." },
    { min: 22, title: "Problem w parach lub trójkach", teacher: "Daje problem, którego nie da się rozwiązać bez materiału. Siada przy grupach, które nie ruszyły po 5 minutach.", students: "Rozwiązują problem i zapisują odpowiedź z jednym uzasadnieniem." },
    { min: 8, title: "Konfrontacja rozwiązań i zdanie na wyjście", teacher: "Pokazuje dwa różne rozwiązania i poprawny model. Na koniec zbiera kartki.", students: "Zaznaczają w swoim rozwiązaniu, czego nie uwzględnili. Piszą jedno zdanie: „Z materiału wystarczyło mi…, a bez nauczyciela nie zrozumiałem…”" }
  ],
  decisionPoint: "Jeżeli mniej niż połowa przygotowała się, przesuń problem o 5 minut i daj 8 minut na kartę z podsumowaniem. Nie karz brakiem oceny.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Technik żywienia: alergeny w jadłospisie",
      context: "Klasa 2. Materiał przed lekcją: jedna strona z 14 alergenami, które trzeba oznaczać w żywności (rozporządzenie UE nr 1169/2011). Lekcja: problem na jadłospisie.",
      goal: "Uczeń rozpoznaje alergeny w typowych daniach i proponuje zmiany w jadłospisie dla osoby z alergią.",
      materials: [
        { t: "Materiał przed lekcją (karta)", list: ["14 alergenów: zboża zawierające gluten, skorupiaki, jaja, ryby, orzeszki ziemne, soja, mleko (z laktozą), orzechy, seler, gorczyca, sezam, dwutlenek siarki i siarczyny (powyżej 10 mg/kg), łubin, mięczaki"] },
        { t: "Sprawdzenie przygotowania", table: { head: ["Pytanie", "Odpowiedź"], rows: [["Wymień pięć z czternastu alergenów.", "dowolne pięć z listy na karcie"], ["Czy mleko i laktoza to ten sam alergen na liście?", "tak, jedna pozycja: mleko i produkty pochodne (łącznie z laktozą)"], ["W którym daniu spodziewasz się gorczycy: w sosie vinaigrette czy w kisielu?", "w sosie vinaigrette (musztarda)"]] }, studentCols: [0] },
        { t: "Problem", text: "Obiad dla 40 osób, w tym dwie osoby z alergią na mleko i jedna na orzechy. Menu: zupa krem z brokułów (ze śmietanką), kotlet schabowy panierowany (jajko, bułka tarta pszenna), surówka z sosem vinaigrette (z musztardą), ciasto z orzechami włoskimi. Zaznacz alergeny w każdym daniu i zaproponuj dwie zmiany." }
      ],
      key: "Zupa: mleko, możliwy gluten w zasmażce, możliwy seler w wywarze (sprawdź recepturę). Kotlet: jaja, gluten (pszenica). Surówka: gorczyca, możliwe siarczyny w occie. Ciasto: orzechy, gluten, jaja, prawdopodobnie mleko (masło). Zmiany: zupa bez śmietanki (np. zagęszczona ziemniakiem), ciasto zastąpione deserem bez orzechów i mleka (np. owoce). Dodatkowo: oddzielne narzędzia i deski, żeby uniknąć zanieczyszczenia krzyżowego. Receptury szkolne mogą się różnić, więc sprawdź je z nauczycielem gastronomii.",
      errors: ["pominięcie glutenu w panierce i zasmażce", "uznanie, że orzechy i orzeszki ziemne to jeden alergen", "zmiana dania bez uwzględnienia zanieczyszczenia krzyżowego"]
    },
    {
      kind: "ogolny",
      label: "Fizyka: prawo Ohma i moc urządzeń",
      context: "Przygotowanie: karta ze wzorami U = I · R oraz P = U · I i dwoma przykładami.",
      goal: "Uczeń oblicza prąd urządzenia z jego mocy i ocenia, czy zabezpieczenie wystarczy.",
      materials: [
        { t: "Karta do przygotowania (przed lekcją)", list: ["Napięcie U mierzymy w woltach (V), prąd I w amperach (A), opór R w omach (Ω), moc P w watach (W).", "Prawo Ohma: U = I · R, więc I = U / R.", "Moc: P = U · I, więc I = P / U.", "Przykład: odbiornik 12 V o oporze 4 Ω pobiera prąd 3 A, a jego moc to 36 W."] },
        { t: "Sprawdzenie przygotowania", table: { head: ["Pytanie", "Odpowiedź"], rows: [["Grzałka 6 V ma opór 12 Ω. Jaki prąd płynie?", "0,5 A"], ["Jaką moc ma odbiornik 230 V pobierający 2 A?", "460 W"], ["Który wzór wiąże napięcie, prąd i opór?", "U = I · R"]] }, studentCols: [0] },
        { t: "Problem", text: "Czajnik ma moc 2000 W i zasilanie 230 V. (1) Oblicz prąd. (2) Czy wyłącznik 10 A wystarczy dla jednego czajnika? (3) Na jednym obwodzie z wyłącznikiem 16 A włączono jednocześnie czajnik 2000 W, grzejnik 1500 W i ekspres 1000 W. Oblicz łączny prąd i oceń, czy obwód jest przeciążony." }
      ],
      key: "(1) I = P / U = 2000 / 230 ≈ 8,7 A. (2) Tak, bo 8,7 A < 10 A. (3) Razem 4500 W, czyli 4500 / 230 ≈ 19,6 A, więcej niż 16 A: obwód jest przeciążony. Wyłącznik nadprądowy nie reaguje natychmiast przy niewielkim przeciążeniu, zadziała po pewnym czasie (nawet kilkudziesięciu minut), a do tego czasu przewody się nagrzewają. Dlatego sumę mocy odbiorników trzeba pilnować, a nie liczyć na wyłącznik. Skonsultuj z nauczycielem elektryki.",
      errors: ["pomylenie mocy z energią", "brak sumowania prądów wszystkich odbiorników", "użycie wzoru P = U/I", "przekonanie, że wyłącznik zadziała natychmiast po przekroczeniu 16 A"]
    }
  ],
  tech: {
    none: "Karta papierowa rozdana na końcu poprzedniej lekcji, z czasem 7 minut na miejscu. Karta ratunkowa dla osób, które jej nie miały.",
    computer: "Materiał przed lekcją może być na ZPE (krótki film lub e-materiał). Plan B na papierze jest obowiązkowy.",
    phone: "Kod QR do materiału. Nie zakładaj, że uczeń ma pakiet danych.",
    ai: "AI może streścić Twoją notatkę na jedną stronę do karty ratunkowej. Sprawdź, czy streszczenie nic nie upraszcza błędnie."
  },
  pitfalls: [
    { mistake: "Przygotowanie jest warunkiem udziału w lekcji.", instead: "Przewidź kartę ratunkową i problem, który da się rozpocząć po 5 minutach czytania." },
    { mistake: "Materiał trwa 20 minut.", instead: "Skróć do 2–5 minut filmu lub jednej strony. Tylko to, czego nie da się wywnioskować na lekcji." },
    { mistake: "Problem da się rozwiązać bez materiału.", instead: "Zaprojektuj problem tak, żeby wymagał przynajmniej jednego pojęcia z materiału." }
  ],
  check: { how: "Policz, ile osób odpowiedziało poprawnie na 3 pytania na początku i ile rozwiązało problem bez pomocy.", decision: "Jeśli przygotowanie nie wpływa na wynik problemu, materiał jest zbędny lub problem zbyt łatwy." },
  sources: [
    { title: "WP3.A5 Implementation methods and models for learning with digital technologies (wersja robocza, IBC, Dania)", type: "materiał projektowy", url: "projekt.html#wp3a5", note: "Opis odwróconej klasy: materiał przed lekcją, dyskusja i praca nad problemem na lekcji." },
    { title: "Strelan, Osborn, Palmer: The flipped classroom: A meta-analysis of effects on student performance across disciplines and education levels (2020)", type: "metaanaliza", url: "https://doi.org/10.1016/j.edurev.2020.100314", note: "Synteza badań; efekt dodatni i zróżnicowany." }
  ],
  related: ["Blended learning", "Modelowanie: jawne nauczanie, przykłady i instruktaż", "Nauczanie dialogowe"]
};
