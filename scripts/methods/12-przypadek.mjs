export default {
  file: "metoda-problem-projekt-przypadek.html",
  title: "Problem, przypadek, projekt",
  group: "core",
  short: "Trzy skale jednej idei: przypadek na jedną lekcję, mikroprojekt na 2–3 lekcje i projekt na kilka tygodni. Każdy kończy się decyzją lub produktem.",
  aliases: ["case-based learning", "problem-based learning", "project-based learning", "metoda projektów", "studium przypadku"],
  evidence: { level: "umiarkowane", label: "Umiarkowane (motywacja), zróżnicowane (wyniki)", note: "Metaanaliza Wijni i in. (2024) wskazuje na mały do umiarkowanego efekt na motywację. Wpływ na wyniki nauczania jest mniej jednoznaczny. Kirschner, Sweller i Clark (2006) przekonują, że uczenie przez odkrywanie bez wsparcia słabo działa u początkujących. Dlatego przypadek musi mieć dane, kryteria i wiedzę wstępną." },
  categories: ["projekt", "wspolpraca", "zaangazowanie"],
  tags: ["przypadek", "decyzja", "produkt"],
  definition: "Uczniowie wykorzystują wiedzę do podjęcia decyzji lub stworzenia produktu w realistycznej sytuacji. W jednej lekcji to przypadek z zamkniętymi danymi. W dłuższej skali to mikroprojekt lub projekt.",
  how: [
    "Trzy skale różnią się czasem, swobodą i ryzykiem. Przypadek (1 lekcja): dane są zamknięte, uczniowie analizują je i proponują jedną decyzję. Mikroprojekt (2–3 lekcje): uczniowie tworzą mały produkt, np. jednostronicową instrukcję stanowiskową. Projekt (3–6 tygodni): zadanie otwarte, z etapami, konsultacjami i produktem końcowym. Im dłuższa skala, tym większe ryzyko, że uczniowie zajmą się organizacją zamiast treścią.",
    "Zasada wspólna: uczeń musi mieć wiedzę potrzebną do analizy. Nie daj problemu, który wymaga wiedzy, której jeszcze nie uczyłeś. Dane podaj sam, żeby nie sprawdzać umiejętności szukania w internecie. Na jednej lekcji wystarczy jedno pytanie, 5–7 danych i jedna karta decyzji."
  ],
  differs: [
    { with: "Nauczanie dialogowe", text: "Tu powstaje produkt (karta decyzji lub instrukcja). W dialogu rozmowa jest celem." },
    { with: "Współpraca w grupach", text: "Tu problem jest otwarty i wymaga decyzji. W jigsawie zadanie ma jedną poprawną odpowiedź, składającą się z części." },
    { with: "Modelowanie", text: "Tu nie pokazujesz rozwiązania z góry. Uczeń ma je stworzyć, więc potrzebuje wcześniej poznanej wiedzy." }
  ],
  when: {
    good: ["uczniowie znają podstawową wiedzę i mają ją zastosować w sytuacji zbliżonej do pracy", "egzamin zawodowy lub praktyka wymaga podejmowania decyzji", "masz dane, które można uprościć do jednej strony"],
    notFor: ["wprowadzanie nowej wiedzy (najpierw ją nauczaj jawnie)", "tematy bez jasnego kryterium poprawności", "projekty trwające kilka tygodni bez planu konsultacji"]
  },
  lesson: [
    { min: 6, title: "Przypadek i dane", teacher: "Przedstawia przypadek, dane i oczekiwany produkt (jedna strona).", students: "Czytają dane i zaznaczają fakty ważne dla decyzji." },
    { min: 4, title: "Hipoteza indywidualna", teacher: "Nie komentuje.", students: "Każdy zapisuje wstępną przyczynę lub rozwiązanie." },
    { min: 14, title: "Analiza w grupach", teacher: "Zadaje pytania o wzorce w danych. Nie podaje rozwiązania.", students: "Porównują hipotezy i zaznaczają dowody w danych." },
    { min: 8, title: "Decyzja i ryzyko", teacher: "Przypomina kryteria: dane, wykonalność, ryzyko.", students: "Zapisują jedną zmianę, dwa dowody i jedno ryzyko na karcie." },
    { min: 6, title: "Krytyka krzyżowa", teacher: "Łączy grupy parami.", students: "Czytają kartę innej grupy i piszą jedną uwagę odnoszącą się do kryterium." },
    { min: 2, title: "Decyzja indywidualna", teacher: "Zbiera kartki.", students: "Zapisują własną decyzję w jednym zdaniu." }
  ],
  decisionPoint: "Jeżeli grupa po 6 minutach analizy nie wskazała żadnego dowodu w danych, nie przechodzi do rozwiązania. Wróć do tabeli i wskaż jeden wiersz, z którego trzeba zacząć.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Technik logistyk: błędy kompletacji w magazynie (dane przykładowe)",
      context: "Klasa 3 lub 4. Przypadek na jedną lekcję. Dane są fikcyjne. Nie ujawniają żadnej firmy.",
      goal: "Uczeń wskazuje wzorzec w danych, proponuje jedną zmianę i wskaźnik jej oceny.",
      materials: [
        { t: "Dane z jednego tygodnia", table: { head: ["Zmiana", "Liczba błędów", "Typ dominujący"], rows: [["I", "6", "zła ilość"], ["II", "7", "zła ilość"], ["III", "21", "zamiana podobnych indeksów"]] } },
        { t: "Dodatkowa informacja", text: "Z 21 błędów na zmianie III 15 dotyczy regału 7, na którym obok siebie leżą śruby M8×30 i M8×35 w podobnych opakowaniach. Oświetlenie w tej strefie jest słabsze niż w pozostałych." },
        { t: "Polecenie", text: "Wskaż wzorzec w danych, zaproponuj jedną zmianę procesu, podaj ryzyko i określ, po czym po dwóch tygodniach poznasz, czy zmiana działa." }
      ],
      key: "Wzorzec: zmiana III i regał 7 (podobne indeksy, słabe oświetlenie). Przykładowa zmiana: rozdzielić lokalizacje podobnych indeksów i oznaczyć je kolorami. Ryzyko: zamiana przeniesie się na inne podobne indeksy lub wydłuży czas kompletacji. Wskaźnik: liczba błędów na regale 7 na zmianie III w ciągu dwóch tygodni. Uczniowie nie mogą wnioskować o skuteczności zmiany przed pilotażem.",
      errors: ["rozwiązanie bez danych", "zmiana obejmująca cały magazyn", "wskaźnik oparty na opinii, a nie na błędach"],
      ladder: "Mikroprojekt (3 lekcje): uczniowie tworzą jednostronicową instrukcję stanowiskową dla regału 7. Projekt (4–6 tygodni): analiza danych z praktyk, propozycja zmiany i prezentacja."
    },
    {
      kind: "ogolny",
      label: "Przedsiębiorczość: czy wziąć kredyt na samochód? (dane przykładowe)",
      context: "Dowolna klasa. Przypadek budżetu domowego.",
      goal: "Uczeń podejmuje decyzję na podstawie budżetu, wskazuje ryzyko i kryterium bezpieczeństwa.",
      materials: [
        { t: "Dane", table: { head: ["Pozycja", "Kwota miesięcznie"], rows: [["Dochód rodziny (netto)", "6 200 zł"], ["Wydatki stałe (czynsz, media, jedzenie, transport)", "3 900 zł"], ["Rata istniejącego kredytu", "1 100 zł"], ["Nowa rata samochodu (35 000 zł na 5 lat)", "730 zł"]] } },
        { t: "Polecenie", text: "Oblicz, ile zostanie po nowej racie. Zdecyduj, czy rodzina powinna wziąć kredyt. Uzasadnij dwoma danymi i wskaż jedno ryzyko." }
      ],
      key: "6 200 − 3 900 − 1 100 = 1 200 zł przed nową ratą. Po nowej racie zostaje 470 zł na wszystkie nieprzewidziane wydatki. Wniosek zależy od przyjętej zasady bezpieczeństwa (np. poduszka finansowa). Ryzyko: wzrost wydatków lub utrata dochodu. Uczniowie mają uzasadnić decyzję, a nie zgadnąć jedną poprawną odpowiedź.",
      errors: ["pominięcie istniejącej raty", "brak wskazania ryzyka"]
    }
  ],
  tech: {
    none: "Przypadek na jednej kartce, karta decyzji i tablica do porównania kryteriów.",
    computer: "ZPE może udostępnić dodatkowe dane etapami. Produkty grup zbieraj na papierze, żeby szybciej porównać.",
    phone: "Jeden telefon w grupie do otwarcia dodatkowej informacji po kodzie QR. Szukanie w internecie bez ograniczeń zwykle zwiększa chaos.",
    ai: "AI może zaproponować dane do przypadku (fikcyjne, bez nazw firm). Sprawdź, czy liczby się zgadzają i czy przypadek ma jeden sensowny wzorzec do znalezienia."
  },
  pitfalls: [
    { mistake: "Problem jest za szeroki.", instead: "Jedno pytanie, pięć do siedmiu danych, jedna karta produktu." },
    { mistake: "Oceniasz prezentację zamiast decyzji.", instead: "Oceń trafność decyzji, użycie danych i uzasadnienie." },
    { mistake: "Dane pochodzą z prawdziwej firmy i ujawniają informacje.", instead: "Zanonimizuj i uprość do jednego wzorca." }
  ],
  check: { how: "Oceń produkt w trzech kryteriach: poprawność, użycie danych, uzasadnienie. Porównaj hipotezę wstępną i końcową decyzję.", decision: "Jeśli produkty są powierzchowne, zmniejsz zakres i naucz jawnie potrzebnej wiedzy przed kolejnym przypadkiem." },
  sources: [
    { title: "Wijnia i in.: Effects of Problem-, Project- and Case-Based Learning on Motivation (2024)", type: "metaanaliza", url: "https://link.springer.com/article/10.1007/s10648-024-09864-3", note: "Mały do umiarkowanego efekt na motywację, zróżnicowany." },
    { title: "Kirschner, Sweller, Clark: Why Minimal Guidance During Instruction Does Not Work (2006)", type: "artykuł teoretyczny", url: "https://doi.org/10.1207/s15326985ep4102_1", note: "Krytyka nauczania z minimalnym wsparciem dla początkujących." }
  ],
  related: ["Nauczanie dialogowe", "Metapoznanie", "Współpraca: grupy z rolami i tutoring w parach"]
};
