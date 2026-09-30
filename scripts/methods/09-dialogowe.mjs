export default {
  file: "metoda-nauczanie-dialogowe.html",
  title: "Nauczanie dialogowe",
  group: "core",
  short: "Uczniowie zapisują stanowisko, porównują je w parze, a potem nauczyciel prowadzi rozmowę klasy pytaniami o dane i o to, co mogłoby zmienić decyzję.",
  aliases: ["dialogic teaching", "rozmowa eksploracyjna", "dyskusja z uzasadnianiem"],
  evidence: { level: "ograniczone", label: "Ograniczone", note: "Wynik ewaluacji EEF dotyczył konkretnego programu i uczniów szkoły podstawowej, po intensywnym przygotowaniu nauczycieli. Efekt był niewielki i nie dowodzi skuteczności każdej dyskusji klasowej. Dla szkół zawodowych i techników takich badań prawie nie ma. Traktuj metodę jako praktykę wartą sprawdzenia w klasie." },
  categories: ["wspolpraca", "zaangazowanie"],
  tags: ["uzasadnianie", "nowa informacja", "zapis przed rozmową"],
  definition: "Nauczyciel prowadzi rozmowę, w której uczniowie uzasadniają stanowiska danymi, odpowiadają na kontrargumenty i zmieniają zdanie, gdy pojawi się nowa informacja.",
  how: [
    "Najpierw cisza i zapis: każdy zapisuje decyzję i dwa dane, na których się opiera. Potem para porównuje i szuka różnic. Dopiero potem rozmowa całej klasy, w której nauczyciel pyta o dowody („na jakiej informacji to opierasz?”), łączy wypowiedzi („jak to się ma do tego, co powiedział…?”) i domyka merytorycznie. Nie oceniasz stanowisk, tylko jakość uzasadnienia.",
    "Rozmowa ma jedną regułę: krytykujemy uzasadnienie, nie osobę. Na środku lekcji pojawia się nowy fakt, który zmienia jeden warunek przypadku. To sprawdza, czy uczniowie uaktualniają stanowisko, czy bronią go za wszelką cenę."
  ],
  differs: [
    { with: "Współpraca: grupy z rolami", text: "Tu cała klasa rozmawia o jednym przypadku, a nie powstaje wspólny produkt grupowy. Każdy zapisuje własne stanowisko." },
    { with: "Ocenianie kształtujące i poprawa", text: "Tu nie ma poprawnej litery do wybrania. Rozmowa dotyczy uzasadnień, a nauczyciel domyka ją merytorycznie." },
    { with: "Problem, przypadek, projekt", text: "Tu przypadek jest pretekstem do rozmowy i trwa jedną lekcję. W przypadku produktem jest decyzja na karcie." }
  ],
  when: {
    good: ["decyzja zawodowa z kilkoma sensownymi stanowiskami (reklamacja, bezpieczeństwo, wybór rozwiązania)", "uczniowie milczą na forum, ale mają zdanie na papierze", "pojęcie, które trzeba rozróżnić na przykładach i granicach"],
    notFor: ["pytania, na które nauczyciel oczekuje jednego hasła", "tematy z jedną poprawną odpowiedzią", "klasa bez minimalnych reguł rozmowy (najpierw je ustal)"]
  },
  lesson: [
    { min: 6, title: "Przypadek i pytanie", teacher: "Czyta przypadek i podaje pytanie decyzyjne. Nie sugeruje odpowiedzi.", students: "Czytają i zaznaczają fakty." },
    { min: 10, title: "Zapis indywidualny i rozmowa w parach", teacher: "Przez 4 minuty pilnuje ciszy i nie komentuje. Potem podaje ramę: twierdzenie, dowód, pytanie do drugiej osoby.", students: "Zapisują decyzję i dwa dane. Potem w parach porównują i zapisują, w czym się różnią." },
    { min: 16, title: "Rozmowa klasy", teacher: "Prosi o argumenty. Pyta o dane, zestawia wypowiedzi. Zapisuje argumenty na tablicy bez nazwisk.", students: "Mówią, odwołując się do danych i do wypowiedzi innych." },
    { min: 5, title: "Nowa informacja", teacher: "Dodaje fakt, który zmienia jeden warunek.", students: "Uaktualniają stanowisko i zapisują, co się zmieniło." },
    { min: 3, title: "Wniosek", teacher: "Podsumowuje merytorycznie: co rozstrzygają dane, a co zostaje sporne.", students: "Zapisują ostateczną decyzję i zmianę względem pierwszej." }
  ],
  decisionPoint: "Jeżeli w parach wszyscy się zgadzają, daj parom przygotowane stanowisko alternatywne do obrony, żeby rozmowa miała o co się toczyć.",
  scenarios: [
    {
      kind: "zawodowy",
      label: "Technik handlowiec: reklamacja ekspresu do kawy",
      context: "Klasa 2 lub 3. Przypadek do rozmowy, nie do rozstrzygnięcia prawnego.",
      goal: "Uczeń rozpoznaje, które dane wpływają na decyzję sprzedawcy, i uaktualnia ją po nowej informacji.",
      materials: [
        { t: "Przypadek", text: "Klient kupił w sklepie ekspres do kawy za 899 zł. Po trzech tygodniach ekspres przestał grzać wodę. Sprzedawca mówi: „Ma pan gwarancję producenta na rok, proszę jechać do serwisu”. Klient żąda wymiany na nowy w sklepie." },
        { t: "Pytania nauczyciela", list: ["Które dane z przypadku są ważne dla decyzji (czas, rodzaj usterki, stan towaru, dowód zakupu)?", "Czy odesłanie klienta do serwisu producenta jest wystarczającą odpowiedzią sprzedawcy? Dlaczego?", "Co musiałoby się zmienić, żebyś zmienił decyzję?"] },
        { t: "Nowa informacja", text: "Klient przyznaje, że ekspres spadł ze stołu." }
      ],
      key: "Dla nauczyciela: sprzedawca odpowiada wobec konsumenta za wady towaru (rękojmia, niezgodność towaru z umową) niezależnie od gwarancji producenta, a konsument może wybrać, z czego skorzysta. Uszkodzenie mechaniczne zmienia ocenę, bo nie jest wadą towaru, ale ciężar wykazania przyczyny usterki bywa sporny, więc liczy się dokumentacja. Przed lekcją sprawdź aktualny stan przepisów (Kodeks cywilny, ustawa o prawach konsumenta) z nauczycielem przedmiotu.",
      errors: ["opinia bez danych", "powtarzanie procedury zamiast analizy faktów", "zmiana zdania bez wskazania, co zmieniło ocenę"]
    },
    {
      kind: "ogolny",
      label: "Biologia: przywracanie wilków w lasach (dane przykładowe)",
      context: "Dowolna klasa. Dane do lekcji są fikcyjne i służą rozmowie o argumentach.",
      goal: "Uczeń buduje stanowisko na danych i wskazuje, czego dane nie rozstrzygają.",
      materials: [
        { t: "Dane (przykładowe)", table: { head: ["Wskaźnik", "Wartość"], rows: [["Liczebność saren w gminie X przez 10 lat", "wzrost o 40%"], ["Szkody w uprawach od saren", "rosną z roku na rok"], ["Liczba owiec zaatakowanych przez wilki w sąsiedniej gminie", "12 rocznie"], ["Opinia leśników", "wilki ograniczają nadmierny wzrost populacji saren"]] } },
        { t: "Pytanie", text: "Czy w gminie X warto wspierać powrót wilków? Zapisz decyzję i dwa dane." },
        { t: "Nowa informacja", text: "Hodowcy w gminie X oferują ogrodzenia elektryczne za 70% ceny." }
      ],
      key: "Dobre uzasadnienia łączą dane o zwierzynie z kosztami dla rolników. Uczeń powinien zauważyć, że dane nie rozstrzygają wszystkiego (jedna sąsiednia gmina to za mało). Nowa informacja pokazuje, że ograniczenie szkód jest możliwe bez rezygnacji z wilków.",
      errors: ["uogólnienie z jednej gminy", "pominięcie interesu rolników"]
    }
  ],
  tech: {
    none: "Kartka, tablica i para. To pełna metoda.",
    computer: "ZPE może udostępnić przypadek i zebrać pierwszą i końcową odpowiedź, żeby uczeń zobaczył zmianę. Rozmowa musi być bez ekranów.",
    phone: "Anonimowe głosowanie przed i po rozmowie. Sama rozmowa bez telefonów.",
    ai: "AI może zaproponować kontrargumenty do przypadku. Sprawdź, czy są oparte na danych z przypadku, a nie na wiedzy spoza niego."
  },
  pitfalls: [
    { mistake: "Rozmawiają ci sami trzej uczniowie.", instead: "Wprowadź zapis i parę przed forum. Odczytuj argumenty par bez nazwisk." },
    { mistake: "Dyskusja to wymiana opinii.", instead: "Wracaj do pytań: jakie dane, jakie założenie, co zmieniłoby zdanie." },
    { mistake: "Kończysz rozmowę bez wniosku.", instead: "Zapisz, co rozstrzygają dane, a co jest sporne." }
  ],
  check: { how: "Porównaj pierwsze i ostatnie zdanie ucznia. Policz, ilu uczniów odwołało się do danych lub do argumentu innej osoby.", decision: "Jeśli rozmowa jest powierzchowna, popraw pytanie i wydłuż czas zapisu." },
  sources: [
    { title: "EEF: Dialogic Teaching (ewaluacja programu)", type: "niezależna ewaluacja programu", url: "https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/dialogic-teaching/", note: "Wynik konkretnego programu z opisem wdrożenia i ograniczeń." },
    { title: "Rosenshine: Principles of Instruction", type: "synteza badań", url: "https://www.aft.org/sites/default/files/Rosenshine.pdf", note: "Znaczenie pytań i odpowiedzi wszystkich uczniów." }
  ],
  related: ["Współpraca: grupy z rolami i tutoring w parach", "Ocenianie kształtujące i poprawa", "Problem, przypadek, projekt"]
};
