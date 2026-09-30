export default {
  file: "metoda-metapoznanie.html",
  title: "Metapoznanie",
  group: "core",
  short: "Uczeń planuje, sprawdza po drodze i ocenia własną strategię w konkretnym zadaniu. Nauczyciel pokazuje, jak to wygląda, na swoim przykładzie.",
  aliases: ["samoregulacja", "uczenie się uczenia się", "plan – kontrola – ocena"],
  evidence: { level: "mocne", label: "Mocne", note: "Wytyczne EEF (Metacognition and Self-Regulated Learning) opierają się na przeglądzie badań i wskazują jeden z najwyższych średnich efektów przy niskim koszcie. Warunek: strategie są nauczane jawnie i osadzone w treści przedmiotu. Ogólna refleksja „jak się uczyłeś” nie działa." },
  categories: ["przygotowanie", "feedback"],
  tags: ["plan", "punkt kontrolny", "zmiana strategii"],
  definition: "Uczeń przed zadaniem zapisuje plan, w połowie zatrzymuje się na punkcie kontrolnym, a na końcu ocenia, co z planu zadziałało.",
  how: [
    "Uczeń, który zaczyna zadanie od pierwszej widocznej czynności, często pomija ograniczenia. Krótki plan (co ogranicza zadanie, od czego zaczynam, po czym poznam, że idzie dobrze) zmniejsza przypadkowe ruchy. Obowiązkowy punkt kontrolny w połowie pozwala zmienić plan, zanim błąd się utrwali.",
    "Nauczyciel najpierw pokazuje strategię na własnym przykładzie, myśląc na głos: „Co ogranicza to zadanie? Jaką mam kolejność? Skąd będę wiedział, że mogę iść dalej?”. Karta z trzema pytaniami jest tylko rusztowaniem i po kilku lekcjach skraca się do jednego pytania kontrolnego."
  ],
  differs: [
    { with: "Modelowanie", text: "W modelowaniu nauczyciel pokazuje poprawne rozwiązanie zadania. Tu pokazuje tylko, jak planuje i kontroluje pracę. Rozwiązanie znajduje uczeń." },
    { with: "Ocenianie kształtujące i poprawa", text: "Tu uczeń sam zatrzymuje się i ocenia własny plan. W ocenianiu kształtującym informację zwrotną daje nauczyciel lub klucz." },
    { with: "Mastery learning", text: "Tu liczy się proces pracy i zmiana planu. W mastery liczy się opanowanie jednego warunku." }
  ],
  when: {
    good: ["zadania wieloetapowe (plan działania, diagnoza, organizacja pracy)", "uczniowie zaczynają bez planu i odkrywają błąd na końcu", "zadania, w których w trakcie pojawia się nowa informacja"],
    notFor: ["proste ćwiczenia jednokrokowe", "sytuacje, w których karta staje się formularzem wypełnianym po fakcie", "lekcje bez czasu na punkt kontrolny"]
  },
  lesson: [
    { min: 6, title: "Model planowania", teacher: "Na pierwszym przykładzie myśli na głos: ograniczenia, pierwszy krok, kontrola.", students: "Zaznaczają w karcie, które pytania nauczyciel sobie zadał." },
    { min: 4, title: "Plan własny", teacher: "Daje nowy przypadek. Uczeń bez planu dostaje dwa możliwe pierwsze kroki do porównania.", students: "Wypełniają trzy pola: ograniczenie, pierwszy krok, punkt kontrolny." },
    { min: 9, title: "Praca, część 1", teacher: "Nie podaje gotowej kolejności. Obserwuje strategie.", students: "Wykonują zadanie według planu." },
    { min: 4, title: "Punkt kontrolny", teacher: "Zatrzymuje wszystkich. Podaje nową informację do zadania.", students: "Odpowiadają na dwa pytania: „Czy plan nadal działa? Co muszę zmienić?”" },
    { min: 9, title: "Praca, część 2", teacher: "Sprawdza, czy uczniowie wpisali zmianę planu.", students: "Kończą zadanie, zaznaczają zmianę innym kolorem." },
    { min: 6, title: "Ocena strategii", teacher: "Porównuje dwa różne podejścia i pyta: „Kiedy ta strategia się sprawdza, a kiedy nie?”", students: "Zapisują, co zachowają w następnym zadaniu." },
    { min: 2, title: "Zapis", teacher: "Zbiera karty.", students: "Kończą zdanie: „Zmieniłem plan, ponieważ…”" }
  ],
  decisionPoint: "Jeżeli w punkcie kontrolnym nikt nie zmienił planu, sprawdź, czy nowa informacja była wystarczająco istotna. Jeśli była, wróć do modelu punktu kontrolnego na innym przykładzie.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Technik logistyk: przyjęcie dostawy i rozmieszczenie palet",
      context: "Klasa 2 lub 3. Plan przyjęcia dostawy trzech palet z ograniczeniem miejsc w chłodni.",
      goal: "Uczeń tworzy plan, w połowie go sprawdza i zmienia po nowej informacji.",
      materials: [
        { t: "Zadanie", text: "Dostawa: dwie palety mrożonek (−18 °C) i jedna paleta suchej żywności. Chłodnia ma dwa wolne miejsca paletowe. Jest jeden wózek, a kierowca ma czas do przyjęcia 30 minut. Zapisz plan: ograniczenie, pierwszy krok, punkt kontrolny." },
        { t: "Nowa informacja w punkcie kontrolnym", text: "W chłodni zostało tylko jedno wolne miejsce (awaria regału)." },
        { t: "Karta", list: ["Planowanie: co ogranicza zadanie? Od czego zaczynam i dlaczego?", "Kontrola: czy plan nadal działa? Czego nie uwzględniłem?", "Ocena: co zachowam w następnym zadaniu?"] }
      ],
      key: "Dobry plan zaczyna od mrożonek (ryzyko rozmrożenia przy czekaniu). Po nowej informacji uczeń powinien zgłosić problem przełożonemu, rozważyć drugą chłodnię lub zmianę terminu dostawy drugiej palety, a nie upychać palety poza chłodnią. Suchą paletę przyjmujesz po mrożonkach. Przypadek skonsultuj z nauczycielem logistyki.",
      errors: ["zaczęcie od suchej palety, bo jest łatwiejsza", "brak reakcji na awarię regału", "plan bez punktu kontrolnego"]
    },
    {
      kind: "ogolny",
      label: "Matematyka: zadanie tekstowe o średniej prędkości",
      context: "Dowolna klasa.",
      goal: "Uczeń wykrywa pułapkę „średnia z dwóch prędkości” dzięki pytaniu kontrolnemu.",
      materials: [
        { t: "Zadanie", text: "Turysta szedł 2 godziny z prędkością 4 km/h, a potem 1,5 godziny z prędkością 5 km/h. Jaka jest jego średnia prędkość na całej trasie?" },
        { t: "Pytanie kontrolne (w połowie)", text: "Jeżeli szedł dłużej wolniej, czy średnia może wynosić 4,5 km/h?" }
      ],
      key: "Droga: 2 · 4 + 1,5 · 5 = 15,5 km. Czas: 3,5 h. Średnia: 15,5 : 3,5 ≈ 4,43 km/h. Uczniowie zwykle liczą (4+5):2 = 4,5 km/h. Pytanie kontrolne pokazuje, że wynik jest nierealny, bo przez dłuższy czas szedł wolniej.",
      errors: ["średnia arytmetyczna z dwóch prędkości", "brak sprawdzenia, czy wynik ma sens"]
    }
  ],
  tech: {
    none: "Karta z trzema polami na marginesie zeszytu wystarczy. Punkt kontrolny to Twój sygnał (np. dzwonek).",
    computer: "Formularz z trzema polami może działać, ale zatrzymanie w połowie zadania jest łatwiejsze ustnie.",
    phone: "Timer na jeden punkt kontrolny. Nie do pisania refleksji.",
    ai: "AI może zaproponować pytania planujące do konkretnego zadania. Usuń pytania ogólne typu „jak się czujesz”."
  },
  pitfalls: [
    { mistake: "Refleksja jest tylko na końcu.", instead: "Dodaj punkt kontrolny w połowie, z nową informacją do zadania." },
    { mistake: "Karta jest za długa.", instead: "Trzy pytania, każde z jednym zdaniem odpowiedzi." },
    { mistake: "Uczeń ma odkryć strategię sam.", instead: "Najpierw pokaż ją na własnym przykładzie." }
  ],
  check: { how: "Zbierz plan i poprawioną wersję. Policz, ilu uczniów zmieniło plan po punkcie kontrolnym z konkretnym powodem.", decision: "Jeśli refleksje są szablonowe, wróć do modelowania strategii na nowym przykładzie." },
  sources: [
    { title: "EEF: Metacognition and Self-Regulated Learning", type: "wytyczne oparte na przeglądzie badań", url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition", note: "Siedem zaleceń dla praktyki szkolnej." }
  ],
  related: ["Modelowanie: jawne nauczanie, przykłady i instruktaż", "Ocenianie kształtujące i poprawa", "Problem, przypadek, projekt"]
};
