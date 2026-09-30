export default {
  file: "metoda-udl.html",
  title: "UDL: usuwanie barier bez obniżania celu",
  group: "core",
  short: "Usuwasz jedną przewidywalną barierę wejścia, np. gęsty tekst instrukcji, i dajesz dwie drogi dostępu oraz dwie formy odpowiedzi przy wspólnym celu.",
  aliases: ["Universal Design for Learning", "uniwersalne projektowanie uczenia się"],
  evidence: { level: "rama", label: "Rama projektowa", note: "UDL (CAST, wytyczne 3.0) to rama projektowania, a nie pojedyncza metoda z wiarygodnym wskaźnikiem efektu. Jej elementy (modele, schematy, słowniczek) są dobrze uzasadnione, ale wybór formy nie ma związku ze „stylem uczenia się”. Ta koncepcja nie ma poparcia w badaniach." },
  categories: ["przygotowanie", "zaangazowanie", "modelowanie"],
  tags: ["dwa wejścia", "wspólne kryterium", "słowniczek"],
  definition: "Ten sam cel i te same kryteria dla wszystkich. Barierę, która nie jest celem lekcji (język instrukcji, brak schematu), usuwasz z góry, a uczeń wybiera jedną z dwóch form pracy lub odpowiedzi.",
  how: [
    "Zaczynasz od pytania: co w tym zadaniu przeszkadza uczniowi, a nie jest celem lekcji? Częsta odpowiedź w szkole zawodowej: instrukcja pisana gęstym językiem przepisów. Usuwasz tę barierę: ten sam fragment dajesz jako krótki tekst ze słowniczkiem i jako schemat kolejności. Terminy zawodowe zostają bez zmian, bo są częścią celu.",
    "Produkt też może mieć dwie formy (tabela lub opis), jeśli obie pokazują to samo rozumienie i oceniasz je tymi samymi kryteriami. Wybór ograniczasz do dwóch opcji, bo otwarty wybór zwiększa obciążenie. Nie dobierasz formy do „typu ucznia”."
  ],
  differs: [
    { with: "Modelowanie", text: "Tu zmieniasz dostępność materiału i formę odpowiedzi. W modelowaniu zmieniasz ilość wsparcia w czasie." },
    { with: "Mastery learning", text: "Tu cel i kryteria są takie same dla wszystkich od początku. W mastery część uczniów przechodzi przez korektę." },
    { with: "Metapoznanie", text: "Tu nauczyciel usuwa barierę z góry. W metapoznaniu uczeń uczy się sam ją zauważać." }
  ],
  when: {
    good: ["instrukcje, procedury i dokumenty w trudnym języku", "zadania, w których wejście jest trudniejsze niż sama treść", "klasy z uczniami, którzy mają trudności z czytaniem lub z koncentracją"],
    notFor: ["celem lekcji jest właśnie czytanie lub pisanie (nie zmieniaj tej formy)", "sytuacja, w której przygotowanie dwóch wersji zajmie Ci więcej czasu niż warto", "dobór formy według „stylu uczenia się”"]
  },
  lesson: [
    { min: 5, title: "Wspólny cel i kryteria", teacher: "Podaje cel i trzy kryteria dla wszystkich. Pokazuje dwa materiały: tekst i schemat.", students: "Przepisują kryteria na kartę." },
    { min: 7, title: "Dwa wejścia", teacher: "Pokazuje, jak tekst łączy się ze schematem. Przywołuje terminy ze słowniczka.", students: "Wybierają tekst, schemat albo oba i zaznaczają warunki w karcie." },
    { min: 18, title: "Zadanie", teacher: "Daje nową instrukcję. Siada przy uczniach, którzy nie wiedzą, od czego zacząć.", students: "Wybierają formę odpowiedzi: tabela lub opis." },
    { min: 6, title: "Porównanie produktów", teacher: "Pokazuje dwa produkty w różnych formach.", students: "Sprawdzają, czy zawierają te same informacje." },
    { min: 4, title: "Pytanie wspólne", teacher: "Zadaje jedno pytanie o zależność kroków.", students: "Odpowiadają jednym zdaniem, niezależnie od formy." }
  ],
  decisionPoint: "Jeżeli żaden uczeń nie korzysta z jednej z dwóch form, usuń ją z materiału. Dodatkowy materiał, który nic nie daje, to zbędne obciążenie.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Monter robót wykończeniowych: przygotowanie podłoża pod płytki",
      context: "Klasa 1–2 branżowej szkoły I stopnia lub technikum budowlanego. Instrukcja jest przykładowa, a wartości nie zastępują karty technicznej.",
      goal: "Uczeń ustala kolejność prac i uzasadnia dwie zależności między nimi.",
      materials: [
        { t: "Wersja tekstowa (instrukcja przykładowa)", text: "Podłoże musi być czyste i odkurzone. Przed gruntowaniem zmierz wilgotność wylewki cementowej (maks. 3% CM w tej instrukcji). Sprawdź równość łatą 2 m (prześwit do 3 mm). Nierówności wyrównaj. Zagruntuj podłoże, czas schnięcia gruntu 4 godziny. Nałóż klej pacą zębatą i przyłóż płytki w czasie otwartym kleju (20 minut)." },
        { t: "Wersja schematyczna", list: ["1. Oczyść i odkurz", "2. Zmierz wilgotność (≤ 3% CM)", "3. Sprawdź równość (≤ 3 mm / 2 m) → jeśli nie: wyrównaj", "4. Zagruntuj → czekaj 4 h", "5. Nałóż klej pacą zębatą", "6. Przyłóż płytki w ciągu 20 minut"] },
        { t: "Słowniczek", list: ["wylewka cementowa: warstwa wyrównująca podłoże", "CM: metoda pomiaru wilgotności", "czas otwarty: czas, w którym klej jeszcze pozwala na przyklejenie płytki"] },
        { t: "Zadanie", text: "Dostajecie inną instrukcję (np. dla płytek na ścianie). Ułóżcie kolejność sześciu czynności i uzasadnijcie dwie zależności. Odpowiedź w formie tabeli lub opisu." }
      ],
      key: "Dwie przykładowe zależności: wilgotność przed gruntowaniem, bo grunt nie naprawi mokrej wylewki. Klej przyłożony w czasie otwartym, bo po tym czasie płytka nie przylgnie. Kryteria: poprawna kolejność, uzasadnienie dwóch zależności, użycie terminów ze słowniczka.",
      errors: ["gruntowanie przed pomiarem wilgotności", "pominięcie czasu schnięcia gruntu", "schemat bez uzasadnienia"]
    },
    {
      kind: "ogolny",
      label: "Biologia: krążenie krwi",
      context: "Dowolna klasa. Tekst i schemat tej samej zależności.",
      goal: "Uczeń opisuje drogę krwi przez oba krwiobiegi.",
      materials: [
        { t: "Wersja tekstowa", text: "Krew z lewej komory płynie aortą do tętnic i narządów, gdzie oddaje tlen. Żyłami głównymi wraca do prawego przedsionka, a potem do prawej komory. Tętnicą płucną płynie do płuc, gdzie pobiera tlen. Żyłami płucnymi wraca do lewego przedsionka i lewej komory." },
        { t: "Wersja schematyczna", list: ["lewa komora → aorta → tętnice → narządy", "narządy → żyły główne → prawy przedsionek → prawa komora", "prawa komora → tętnica płucna → płuca", "płuca → żyły płucne → lewy przedsionek → lewa komora"] },
        { t: "Zadanie", text: "Opisz lub narysuj drogę krwi od płuc do mięśnia i z powrotem. Zaznacz, gdzie krew zmienia skład gazów." }
      ],
      key: "Płuca → żyły płucne → lewy przedsionek → lewa komora → aorta → tętnice → mięsień (oddaje tlen, pobiera CO₂) → żyły główne → prawy przedsionek → prawa komora → tętnica płucna → płuca (oddaje CO₂, pobiera tlen).",
      errors: ["pomylenie tętnic i żył ze względu na kierunek przepływu, a nie zawartość tlenu", "pominięcie krwiobiegu małego"]
    }
  ],
  tech: {
    none: "Dwie kartki: tekst i schemat, plus słowniczek. To wystarczy.",
    computer: "ZPE często ma tekst, grafikę i nagranie. Sprawdź, czy materiał jest dostępny dla uczniów (czytelny, z powiększaniem).",
    phone: "Audio lub powiększenie tylko jako opcja. Nie jako obowiązek.",
    ai: "AI może uprościć składnię instrukcji. Sprawdź, czy terminy zawodowe i wartości nie zostały zmienione."
  },
  pitfalls: [
    { mistake: "Dajesz łatwiejszy cel dla części uczniów.", instead: "Cel i kryteria zostają te same. Zmieniasz dostępność i formę." },
    { mistake: "Dajesz pięć form do wyboru.", instead: "Dwie dobrze przemyślane opcje." },
    { mistake: "Dobierasz formę według „stylu ucznia”.", instead: "Oferujesz obie formy wszystkim i obserwujesz, którą uczeń faktycznie wybiera." }
  ],
  check: { how: "Policz, ilu uczniów rozpoczęło zadanie w pierwszych 3 minutach i ile było pytań o instrukcję. Oceń produkty tymi samymi kryteriami.", decision: "Zostaw wariant, który usuwa realną barierę. Usuń ten, z którego nikt nie korzysta." },
  sources: [
    { title: "CAST: Universal Design for Learning Guidelines 3.0", type: "rama projektowa", url: "https://udlguidelines.cast.org/", note: "Oficjalne wytyczne: zaangażowanie, reprezentacja, działanie i ekspresja." }
  ],
  related: ["Modelowanie: jawne nauczanie, przykłady i instruktaż", "Metapoznanie", "Mastery learning"]
};
