export default {
  file: "metoda-mastery-learning.html",
  title: "Mastery learning: opanowanie jednego warunku",
  group: "core",
  short: "Sprawdzasz jedną umiejętność potrzebną do dalszej pracy. Kto ją ma, idzie do zadania trudniejszego. Kto nie, dostaje inne wyjaśnienie i ponowną próbę.",
  aliases: ["uczenie się do opanowania", "umiejętność bramowa", "punkt kontrolny opanowania"],
  evidence: { level: "umiarkowane", label: "Umiarkowane, z ostrożną oceną dowodów", note: "Przegląd EEF wskazuje średnio dodatni efekt, ale jakość dowodów oceniana jest ostrożnie, a pełny model jest trudny organizacyjnie w zwykłej klasie. Dlatego proponujemy wersję punktową, tylko dla jednego warunku, nie dla całego działu." },
  categories: ["feedback", "pamiec", "przygotowanie"],
  tags: ["umiejętność bramowa", "korekta", "ponowna próba"],
  definition: "Wybierasz jedną umiejętność niezbędną do następnego zadania, sprawdzasz ją trzema krótkimi zadaniami i dzielisz klasę na czas korekty albo rozszerzenia.",
  how: [
    "Zwykle klasa idzie dalej bez względu na to, czy wszyscy mają warunek wstępny. Tu ustalasz, że umiejętność (np. przeliczenie proporcji) musi być opanowana, zanim uczeń przejdzie do trudniejszego zadania. Kryterium opanowania to konkretne: np. trzy zadania poprawnie, z jednostkami. Nie „80%”.",
    "Uczniowie z luką dostają inne wyjaśnienie niż pierwsze (np. metodę „na jedną porcję” zamiast współczynnika) i nową próbę z innymi liczbami. Uczniowie gotowi pracują nad zadaniem rozszerzającym. Podział obowiązuje tylko w tej lekcji i dotyczy tej jednej umiejętności."
  ],
  differs: [
    { with: "Ocenianie kształtujące i poprawa", text: "Tu jest jawny próg opanowania i osobna ścieżka dla osób poniżej progu. Ocenianie kształtujące zmienia przebieg lekcji dla wszystkich, bez podziału." },
    { with: "Przypominanie i powroty", text: "Tu wynik decyduje o dalszej drodze ucznia. W przypominaniu pytania wracają niezależnie od wyniku." },
    { with: "UDL", text: "Tu wsparcie dostają tylko ci, którzy nie opanowali warunku. W UDL wszyscy mają dostęp do tych samych form od początku." }
  ],
  when: {
    good: ["warunek bez którego nie ma sensu następne zadanie (proporcje, jednostki, symbole bezpieczeństwa)", "masz czas na 14 minut pracy w dwóch ścieżkach i zadanie rozszerzające dla gotowych", "zadanie ma krótki klucz: wynik, jednostka, jeden krok"],
    notFor: ["całe działy (zbyt szeroki warunek, korekta zajmie całą lekcję)", "prace, których nie sprawdzisz w kilka minut", "sytuacja, w której nie masz wariantu innego wyjaśnienia"]
  },
  lesson: [
    { min: 7, title: "Diagnoza warunku", teacher: "Daje 3 krótkie zadania o jednym warunku. Podaje kryterium: 3 poprawne, z jednostkami.", students: "Rozwiązują samodzielnie i zapisują tok." },
    { min: 3, title: "Sprawdzenie i podział", teacher: "Pokazuje klucz. Uczniowie oznaczają kartę zieloną lub żółtą kartką.", students: "Sprawdzają się sami i wybierają ścieżkę według wyniku." },
    { min: 14, title: "Dwie ścieżki", teacher: "Z grupą żółtą pracuje przy stoliku, wyjaśniając inaczej niż pierwszy raz. Grupa zielona rozwiązuje zadanie rozszerzające z kluczem.", students: "Pracują nad swoimi zadaniami." },
    { min: 7, title: "Nowa próba", teacher: "Daje osobom z korekty nowe zadanie z innymi liczbami.", students: "Rozwiązują samodzielnie." },
    { min: 9, title: "Wspólne zadanie", teacher: "Daje wszystkim zadanie wymagające opanowanego warunku. Dodatkowe wsparcie dla tych, którzy nadal mają kłopot.", students: "Używają umiejętności w zadaniu złożonym." }
  ],
  decisionPoint: "Jeżeli po korekcie poprawa jest nieznaczna, zmień rodzaj wyjaśnienia lub reprezentację (tabela, rysunek), a nie liczbę powtórzeń tej samej karty.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Technik żywienia / kucharz: przeliczanie receptury z 10 na 36 porcji",
      context: "Klasa 1–2. Warunek przed planowaniem produkcji.",
      goal: "Uczeń przelicza proporcje i jednostki w recepturze.",
      materials: [
        { t: "Receptura na 10 porcji", table: { head: ["Składnik", "Ilość na 10 porcji"], rows: [["mąka", "500 g"], ["mleko", "750 ml"], ["jaja", "4 szt."], ["cukier", "100 g"], ["olej", "60 ml"]] } },
        { t: "Diagnoza (3 zadania)", list: ["Podaj współczynnik przeliczenia z 10 na 36 porcji.", "Oblicz mąkę na 36 porcji. Zapisz w kilogramach.", "Oblicz jaja na 36 porcji i zdecyduj, jak zaokrąglisz."] },
        { t: "Korekta (inne wyjaśnienie)", text: "Metoda „na jedną porcję”: mąka 500 g : 10 = 50 g na porcję, 50 g · 36 = 1800 g." },
        { t: "Nowa próba (inna receptura, dla osób po korekcie)", table: { head: ["Składnik", "Ilość na 8 porcji"], rows: [["ryż", "400 g"], ["woda", "800 ml"], ["marchew", "240 g"]] } },
        { t: "Polecenie do nowej próby", text: "Przelicz recepturę z 8 na 30 porcji. Zapisz współczynnik i wszystkie ilości z jednostkami." },
        { t: "Rozszerzenie", text: "Ceny: mąka 3,20 zł/kg, mleko 3,80 zł/l, jaja 1,10 zł/szt. Oblicz koszt mąki, mleka i jaj na 36 porcji oraz koszt na porcję." }
      ],
      key: "Współczynnik 3,6. Mąka 1800 g = 1,8 kg. Jaja 14,4, więc 14 lub 15 szt. (zależy od receptury). Rozszerzenie: mąka 5,76 zł, mleko 2,7 l · 3,80 = 10,26 zł, jaja 15 · 1,10 = 16,50 zł. Razem 32,52 zł, czyli około 0,90 zł na porcję. Nowa próba: współczynnik 3,75, ryż 1500 g (1,5 kg), woda 3000 ml (3 l), marchew 900 g. Przypadek skonsultuj z nauczycielem gastronomii. Przy przyprawach przeliczenie nie zawsze jest liniowe.",
      errors: ["zmiana liczby bez zachowania proporcji", "mieszanie jednostek (g i kg)", "brak sprawdzenia, czy wynik jest sensowny"]
    },
    {
      kind: "ogolny",
      label: "Matematyka: dodawanie ułamków o różnych mianownikach",
      context: "Dowolna klasa. Dodawanie i odejmowanie ułamków o różnych mianownikach jest warunkiem przed zadaniami tekstowymi o częściach całości.",
      goal: "Uczeń dodaje i odejmuje ułamki o różnych mianownikach.",
      materials: [
        { t: "Diagnoza (3 zadania)", list: ["1/2 + 1/3", "3/4 − 1/6", "2/5 + 3/10"] },
        { t: "Korekta", text: "Model wizualny: dwa paski podzielone na 6 i 12 części. Uczeń zaznacza ułamki na paskach i łączy je ze wspólnym mianownikiem." },
        { t: "Nowa próba (inne ułamki, dla osób po korekcie)", list: ["1/4 + 1/6", "5/6 − 1/4", "1/3 + 2/9"] },
        { t: "Rozszerzenie", text: "Piotr przeznaczył 1/3 czasu na naukę i 1/4 na trening. Jaka część czasu mu została?" }
      ],
      key: "Diagnoza: 5/6; 7/12; 7/10. Kryterium opanowania: wszystkie trzy poprawnie. Uczniowie z luką zwykle dodają liczniki i mianowniki osobno (1/2 + 1/3 = 2/5). Nowa próba: 1/4 + 1/6 = 5/12; 5/6 − 1/4 = 7/12; 1/3 + 2/9 = 5/9. Rozszerzenie: 1/3 + 1/4 = 7/12, czyli zostało 5/12.",
      errors: ["dodawanie liczników i mianowników osobno", "błąd przy sprowadzaniu do wspólnego mianownika"]
    }
  ],
  tech: {
    none: "Dwie kartki zadań w różnych kolorach i klucz na stoliku nauczyciela.",
    computer: "Jeśli ZPE ma ćwiczenie z automatycznym sprawdzaniem, możesz go użyć do diagnozy. Próg i dalszą drogę ustalasz Ty.",
    phone: "Krótka diagnoza. Przy kluczowych warunkach BHP wynik cyfrowy nie zastępuje instruktażu i nadzoru.",
    ai: "AI może przygotować równoległe warianty zadań. Sprawdź, czy mierzą dokładnie tę samą umiejętność i czy ich wynik jest poprawny."
  },
  pitfalls: [
    { mistake: "Próg to przypadkowe „80%”.", instead: "Zapisz, co uczeń musi umieć zrobić, żeby przejść dalej (np. 3 zadania, z jednostkami)." },
    { mistake: "Cała klasa czeka na tych, którzy poprawiają.", instead: "Przygotuj zadanie rozszerzające z kluczem." },
    { mistake: "Korekta powtarza to, co nie zadziałało.", instead: "Zmień wyjaśnienie, przykład lub reprezentację." }
  ],
  check: { how: "Porównaj diagnozę i nową próbę dla osób ze ścieżki korekty. Sprawdź, czy opanowany warunek działa w zadaniu wspólnym.", decision: "Jeżeli korekta nie pomaga większości, zmień wyjaśnienie na inne niż dwa poprzednie." },
  sources: [
    { title: "EEF: Mastery Learning", type: "synteza badań", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/mastery-learning", note: "Opis modelu, warunków i trudności wdrożeniowych." }
  ],
  related: ["Ocenianie kształtujące i poprawa", "Przypominanie i powroty", "Modelowanie: jawne nauczanie, przykłady i instruktaż"]
};
