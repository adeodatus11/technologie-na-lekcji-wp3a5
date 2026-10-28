# Audyt merytoryczny przewodnika „ZPE w praktyce”

Stan: 28.10.2026, wersja opublikowana na `main` (`adaa90b`). Audyt obejmuje faktyczność treści, przydatność na lekcji i to, czy szkolenie będzie angażujące. Zmian na stronie jeszcze nie wprowadzono.

Metoda: każde twierdzenie o funkcjach ZPE porównano z tekstem 11 poradników z `materialy-zrodlowe/` (strona po stronie). Rachunki w przykładach przeliczono. Nie było dostępu do zpe.gov.pl ani do konta ZPE, więc niczego nie sprawdzono na żywej platformie.

## 1. Wnioski w skrócie

1. **Faktycznie przewodnik jest rzetelny.** Większość opisów zgadza się z poradnikami co do strony. Są jednak dwa błędy merytoryczne i trzy istotne braki (pkt 2). Wszystkie da się szybko poprawić.
2. **Treść jest przydatna, ale ułożona jak instrukcja obsługi platformy.** Prowadzi od konta, przez wyszukiwanie, do udostępniania. Pytanie „co uczniowie robią na lekcji” pojawia się tylko na początku i wraca dopiero w rozdziale 7.
3. **Jako szkolenie przewodnik jest mało angażujący.** W rozdziałach 1–6 mówi prowadzący, a uczestnicy patrzą. Szkolenie zachęca do lekcji, w której pracują uczniowie, a samo jest zbudowane jak wykład. To najważniejsza rzecz do zmiany.
4. **Rozdział 1 trzeba przebudować zgodnie z Twoją wizją.** Zamiast „projektor / para / stanowisko”: lekcja, w której nauczyciel robi tylko część, a resztę oddaje uczniom (para, grupa, praca własna z tekstem, lekcja odwrócona, przypadek). Taki wstęp był już w repozytorium (pkt 5).

## 2. Faktyczność: co się zgadza, a co poprawić

### Błędy

| # | Miejsce | Co jest teraz | Co mówi źródło | Poprawka |
|---|---|---|---|---|
| B1 | Rozdz. 5, ramka „Dwa różne znaczenia linku” | Tryb „Pokaż materiał bez logowania” ma „ograniczenia dotyczące kont opartych na SIO”. | 03, s. 8–9: opcja jest dostępna **wyłącznie** na kontach z SIO. Konta założone samodzielnie jej nie mają. Dotyczy materiału utworzonego w Kreatorze. | „Działa tylko na koncie z SIO i tylko dla materiału z Kreatora. Konto założone samodzielnie tej opcji nie ma.” Obecne zdanie czyta się odwrotnie. |
| B2 | Rozdz. 5, tabela sposobów udostępnienia | Brak klasy zaimportowanej z SIO jako odbiorcy. | 01, s. 11: materiały można udostępniać klasom z SIO jak grupom, pod warunkiem logowania na konto z SIO. | Dodać wiersz „Klasa z dziennika (SIO)”. W szkole to zwykle najprostsza droga: bez wpisywania e-maili i bez kodu. |

### Braki ważne dla tematu szkolenia

| # | Brak | Źródło | Dlaczego ważne |
|---|---|---|---|
| U1 | **Teczka**: zbieranie fragmentów z różnych materiałów, edycja w Kreatorze i udostępnienie. | 01, s. 12–14; 05, s. 1 | To narzędzie do „wybieram fragment i oddaję go uczniom”. Pasuje do nowego rozdziału 1 lepiej niż budowanie materiału od zera w Kreatorze. |
| U2 | Poradnik zaleca szukanie materiałów z **pytaniami otwartymi**. Ćwiczenia zamknięte łatwo się monitoruje, ale do wniosków i dyskusji motywują pytania otwarte. Odpowiedzi widać w „Moich materiałach”. | 01, s. 2, 14, 19 | Oficjalne źródło wspiera Twoją tezę. Warto je przytoczyć w rozdziale 1. |
| U3 | Kod dostępu ważny **1, 2, 6, 11, 24, 48 lub 72 godziny**; uczeń musi być **zalogowany**. Nowa grupa wymaga **adresów e-mail** uczniów. | 03, s. 3, 7 | Przewodnik pisze ogólnie „określona ważność”. Konkrety decydują o tym, czy da się to zrobić na lekcji. |

### Drobne uzupełnienia

- Rozdz. 5: przy udostępnianiu system **sam oznacza** ćwiczenia, których wyniki nie trafią do raportu (01, s. 10). Prowadzący może to zobaczyć w oknie udostępniania, nie musi zgadywać.
- Rozdz. 5: istnieje udostępnienie z ograniczeniem czasowym (03, s. 5). Teraz nie jest wspomniane.
- Rozdz. 6, Generator Kart Pracy działa **bez logowania**: kartę można utworzyć i wydrukować, a logowanie potrzebne jest tylko do zapisu i udostępnienia (04, s. 1). Dobra wiadomość dla osób bez działającego konta.
- Rozdz. 6, Kreator: typ „Lekcja”, bloki pytań otwartych, „Gra decyzyjna”, sekcje widoczne tylko dla nauczyciela i „Tworzenie ćwiczeń przez uczniów” (10, s. 1–3). Te funkcje pasują do metody przypadku i pracy uczniów. Warto je wymienić z nazwy.
- Rozdz. 6, Wiadomości: moduł jest w „Funkcjonalnościach zaawansowanych” na `platforma.zpe.gov.pl` (09, s. 1). To rozróżnienie od Komunikatora jest poprawne, ale z poradników z 2022 r. Trzeba sprawdzić, czy ten adres jeszcze działa.

### Zgodne ze źródłami (sprawdzone)

Rozróżnienie kont (01, s. 5–6), import klas i brak edycji klas z SIO (01, s. 11; 06, s. 2; 07, s. 1), wyszukiwanie, katalog i podstawa programowa (01, s. 7–9), Ulubione w „Moich materiałach” (01, s. 7), warianty udostępnienia i ustawienia odpowiedzi i komentarzy (03, s. 2–6), raporty, odpowiedzi i PDF (03, s. 13–17), ćwiczenia bez raportów (01, s. 10), Generator kart (04, s. 3–5, 20), Kreator (10, s. 4–8), ścieżki i ich warunek „przeczytania 80%” (05, s. 1–7), zaproszenia do grup (08), Komunikator (02), testy i ankiety (11). Odsyłacze do stron są trafne.

Uwaga do tonu: przewodnik słusznie zaznacza, że warunek ścieżki mierzy przeczytanie, a nie opanowanie. To dobra, merytoryczna uwaga.

### Aktualność źródeł

Poradniki 02–11 pochodzą z lat 2022–2023, a 01 odwołuje się do „Raportów SIO2 rok 2024/2025”. Ilustracje pokazują starsze wersje interfejsu, część ze szkoły podstawowej. Przewodnik to uczciwie zaznacza. Konsekwencja dla szkolenia: każdy element pokazu musi być raz przeklikany na żywym ZPE przed 4 listopada (lista w pkt 6).

### Przykłady przedmiotowe

- Rachunki są poprawne: 100 → 110 → 99 zł; 17,80 i 17,20 zł/kg; współczynnik 1,5 → 600/300/150 g; 2 ÷ 0,8 = 2,5 kg brutto. Zastrzeżenia (wydajność 80% to dana zadania; receptura to nie technologia) są trafne.
- Matematyka i język polski/historia mają konkretne zasoby ZPE. Linki działały 29.09; od tamtej pory ich nie sprawdzano.
- **Zawody nie mają żadnego sprawdzonego zasobu**, tylko hasła. To najsłabszy punkt dla nauczycieli kształcenia zawodowego. ZPE ma osobny dział „Kształcenie zawodowe” z e-materiałami do kwalifikacji, więc warto przed szkoleniem znaleźć po jednym zasobie dla każdego zawodu.
- Przykład dla fryzjera opiera się na instrukcji producenta, której nie ma w ZPE. To bardziej ćwiczenie czytania instrukcji niż przykład użycia ZPE. Do rozważenia zmiana, gdy znajdzie się zasób ZPE.
- Wszystkie przykłady to **pojedyncze zadania**, nie przebiegi lekcji. Nie pokazują, w którym momencie nauczyciel oddaje pracę uczniom, a to właśnie ma pokazać rozdział 1.

## 3. Przydatność na lekcji

Co działa:
- Rozróżnienie kont i trybów udostępniania rozwiązuje realne problemy („nie widzę klasy”, „uczniowie nie mają wyników”).
- Tabela oceny materiału (odbiorca, treść, aktualność, dostępność) przyda się każdemu nauczycielowi.
- Interpretacja raportu (poprawny wynik / ten sam błąd u wielu / brak odpowiedzi) to dobra, praktyczna wskazówka.

Czego brakuje:
- Odpowiedzi na pytanie „jak z tego zrobić lekcję”. Nauczyciel wie, jak znaleźć i udostępnić materiał, ale nie dostaje wzoru przebiegu: ile mówię ja, co robią uczniowie, kiedy sprawdzam.
- Drogi „na jutro” bez kont uczniów: publiczny link do konkretnego fragmentu, pytanie na tablicy, praca w parach, sprawdzenie na kartce. To działa od razu, a konta i raporty mogą przyjść później. Poprzednia wersja to miała (sekcja „Sprzęt i organizacja”).
- Planu B bez sieci (wydruk fragmentu, te same pytania).

## 4. Czy szkolenie będzie ciekawe?

Obecny przebieg: rozdziały 1–6 to pokaz i omówienie, rozdział 7 to swobodna praca bez celu. Ryzyka:

1. **Sprzeczność formy i treści.** Szkolenie mówi „niech pracują uczniowie”, a przez większość czasu pracuje prowadzący. Uczestnicy to zauważą.
2. **Brak momentu „aha”.** Najmocniejsza rzecz w ZPE dla nauczyciela to: udostępniam, uczniowie rozwiązują, a ja od razu widzę, kto się pomylił. Teraz uczestnicy tylko o tym czytają.
3. **Praca własna bez kierunku.** „Kierunek pracy jest dowolny” prowadzi często do przeglądania katalogu bez efektu. Nie trzeba formularza, wystarczy jedno konkretne wyzwanie.
4. **Ton zachowawczy.** Wiele zdań uprzedza o tym, czego nie wiadomo („nie zakładamy”, „nie gwarantuje”, „wymaga potwierdzenia”). To uczciwe, ale uczestnika bardziej osłabia niż wspiera. Zastrzeżenia potrzebne prowadzącemu powinny trafić do jego notatek, a tekst dla uczestnika po sprawdzeniu ZPE może być bardziej zdecydowany.

Propozycja, jak to odwrócić bez formularzy i harmonogramu:

- **Uczestnicy jako uczniowie, od początku.** Prowadzący robi 5 minut wprowadzenia, a potem udostępnia przygotowany materiał ZPE **kodem dostępu**. Uczestnicy logują się i dołączają, w parach rozwiązują 2–3 ćwiczenia i jedno pytanie otwarte. Prowadzący wyświetla raport i omawia jeden typowy błąd. W 15 minut uczestnicy przeżywają metodę, pokaz udostępniania i raporty. Rozdziały 2–5 stają się wtedy objaśnieniem tego, co już widzieli.
  - Warunek: wcześniej sprawdzić, czy konto nauczyciela może dołączyć kodem (poradnik opisuje to od strony ucznia) i czy wybrane ćwiczenie zapisuje wynik w raporcie.
- **Pytanie do wszystkich na rozgrzewkę**: „Cena 100 zł wzrosła o 10%, potem spadła o 10%. Ile kosztuje teraz?” Wszyscy pokazują kartkę jednocześnie. Było w wersji z 25.10 i dobrze otwiera rozmowę o tym, co nauczyciel wie po wykładzie, a co po zadaniu.
- **Jedno wyzwanie w pracy własnej** (rozdz. 7): „Znajdź jeden fragment ZPE i jedno polecenie, które jutro możesz oddać parom albo grupie. Udostępnij go sąsiadowi kodem i sprawdźcie się nawzajem.” Bez formularza i bez oddawania. Na koniec 2–3 osoby mówią, co znalazły.

## 5. Rozdział 1: proponowany nowy kształt

Tytuł roboczy: **„Lekcja, w której pracują uczniowie”**.

Teza na otwarcie: technologia nie jest metodą. ZPE przydaje się wtedy, gdy materiał przejmuje część podawania treści, a nauczyciel zyskuje czas na pracę z uczniami w trakcie ich zadania.

**Rytm lekcji** (zamiast trzech kart „projektor / para / stanowisko”):

1. **Wprowadzam krótko.** Pokaz jednego przykładu, jedno polecenie na piśmie.
2. **Oddaję pracę.** Uczniowie działają z materiałem: sami, w parze albo w grupie. Na końcu jest odpowiedź albo produkt.
3. **Sprawdzamy.** Odpowiedź każdego, wynik ćwiczenia albo jedna wspólna poprawka.
4. **Decyduję, co dalej.** Powtórka, trudniejsze zadanie albo nowa treść.

**Sposoby oddania pracy** (karty z odsyłaczem do katalogu COVE):

| Sposób | Co robią uczniowie | Co daje ZPE | Co robi nauczyciel | Metoda COVE |
|---|---|---|---|---|
| Praca w parach | Jedna osoba rozwiązuje i mówi na głos, druga sprawdza z kartą pytań; zamiana ról. | Ćwiczenie z natychmiastowym sprawdzeniem. | Słucha par i wyłapuje typowy błąd. | Współpraca (tutoring w parach) |
| Grupa z podziałem fragmentów | Każdy czyta inny fragment materiału i przynosi informację do wspólnego produktu. | Kilka sekcji jednego e-materiału albo Teczka z fragmentami. | Przydziela role i na końcu pyta każdego osobno. | Współpraca (jigsaw) |
| Praca własna z tekstem do przeszukania | Szuka w tekście odpowiedzi na 3–5 pytań, wskazuje, skąd ją wziął. | Tekst, grafika, nagranie; powiększenie, powrót do akapitu. | Siada przy 3–4 osobach, które utknęły. | 360 e-learning; UDL |
| Lekcja odwrócona | Przed lekcją (albo w ostatnich 10 minutach poprzedniej) ogląda krótki fragment i zapisuje jedno pytanie. | Krótki film lub fragment, pytanie otwarte w udostępnionym materiale. | Lekcję zaczyna od pytań uczniów i przeznacza na zadania. Ma kartę podsumowania dla nieprzygotowanych. | Flipped classroom |
| Problem i przypadek | Analizuje 5–7 danych i podejmuje jedną decyzję z uzasadnieniem. | Materiał jako źródło danych; w Kreatorze „Gra decyzyjna” lub pytanie otwarte. | Podaje dane, pilnuje uzasadnienia, prowadzi rozmowę o różnych decyzjach. | Problem, przypadek, projekt |

**Przykład całej lekcji** z minutami i rolą nauczyciela w każdym etapie. Do wyboru:
- gotowy z wersji 25.10: technik logistyk, „Który dokument magazynowy?” (zasób ZPE „Dokumentacja magazynowa”, przypadek z dostawą 120/112 szt.) plus wariant z matematyki (procenty);
- albo nowy dla jednego z zawodów szkoły (handlowiec, kucharz), jeśli przed szkoleniem znajdzie się zasób ZPE.

Obecne przykłady przedmiotowe zostają, ale jako **zadania do oddania uczniom** w ramach powyższych sposobów, a nie jako osobna galeria.

Materiał źródłowy w historii repozytorium:
- `c2d2650:szkolenie ZPE/content.json`, klucz `intro` (wersja z 25.10): teza, sześć przesunięć „z → na”, porównanie lekcji A/B, lekcja logistyka, wariant z matematyki, wskazówki sprzętowe, mapa 12 metod.
- wersja z 22.10 (niescalona gałąź `claude/charming-allen-x7jx63`, usunięta 28.10 przy porządkowaniu repozytorium): rytm lekcji oraz uzasadnienie z badań: Szpunar, Khan i Schacter (2013), Freeman i in. (2014), Chi i Wylie (2014, model ICAP), Patall, Cooper i Robinson (2008), Theobald i in. (2020). Badania dotyczą głównie studentów. Rytm lekcji przeniesiono do nowego rozdziału 1.

## 6. Przed 4 listopada: sprawdzić na żywym ZPE

1. Logowanie na konto z SIO i na konto założone samodzielnie: co widać, czy są klasy.
2. Udostępnienie wybranego materiału kodem dostępu i dołączenie **z konta nauczyciela** (uczestnika). Czy wynik ćwiczenia trafia do raportu.
3. Czy w katalogu dla liceum i technikum jest przycisk podstawy programowej.
4. Teczka: czy jest dostępna i jak się nazywa w obecnym interfejsie.
5. Linki do trzech zasobów oraz po jednym zasobie dla fryzjera, handlowca, cukiernika i kucharza.
6. Czy `platforma.zpe.gov.pl` („Funkcjonalności zaawansowane”) nadal istnieje.
7. Sieć, projektor, stanowiska w pracowniach, wydruki planu B.

## 7. Decyzje do podjęcia przez autora

1. Czy szkolenie ma zaczynać się od „uczestnicy jako uczniowie” z kodem dostępu? Zależy od pkt 6.2.
2. Przykład lekcji w rozdz. 1: logistyk z wersji 25.10 czy nowy dla jednego z czterech zawodów?
3. Czy przenieść zastrzeżenia weryfikacyjne z tekstu dla uczestnika do notatek prowadzącego?
4. Czy rozdział 7 dostaje jedno wspólne wyzwanie (bez formularza)?

## 8. Decyzje autora i wprowadzone zmiany (28.10.2026)

Decyzje: część o przydatności zostaje bez zmian (to szkolenie z ZPE, nie z projektowania lekcji); bez startu „uczestnicy jako uczniowie”; nowy przykład lekcji z zawodu; zastrzeżenia weryfikacyjne zostają wyłącznie w tym audycie, a tekst dla uczestników jest pisany bez asekuracji.

Wprowadzono:

- **Rozdział 1 „Lekcja, w której pracują uczniowie”**: rytm lekcji, pięć sposobów oddania pracy (para, grupa, praca własna z tekstem, lekcja odwrócona, problem i przypadek) z odsyłaczami do katalogu COVE, przykład lekcji dla handlowca („Gdzie postawić towar na regale?”) oraz sześć zadań przedmiotowych i zawodowych.
- **Zasoby zawodowe** (`zasoby-zawodowe.json`): po jednym e-materiale ZPE dla fryzjera, handlowca, cukiernika i kucharza. Przykłady zawodowe przepisano tak, aby opierały się na tych materiałach.
- **Rozdział 7 „Twój temat: od wyszukania do przypisania”**: uczestnik odnajduje, przygotowuje i przypisuje uczniom materiał do własnego tematu.
- Poprawki B1 i B2 oraz uzupełnienia U1–U3 i drobne z pkt 2 (Teczka, pytania otwarte, kod dostępu, klasa z SIO, ograniczenie czasowe, ćwiczenia oznaczane przy udostępnianiu, Generator bez logowania, komponenty Kreatora, kroki ścieżki).
- Usunięto zdania asekuracyjne z tekstu dla uczestników (np. „nie zakładamy”, „nie potwierdzono”, „autorska propozycja”).
- Test: Chromium z `/usr/bin/chromium` lub `/opt/pw-browsers/chromium`; każde zadanie przykładowe musi mieć zasób ZPE.

### Zastrzeżenia (tylko dla autora)

- **Zasoby zawodowe znaleziono przez wyszukiwarkę internetową 28.10.2026** na podstawie zaindeksowanych stron zpe.gov.pl. Z tego środowiska nie dało się ich otworzyć. Przed 4 listopada trzeba kliknąć każdy link:
  - fryzjer: https://zpe.gov.pl/b/pielegnacja-owlosionej-skory-glowy/PRu24AIX1 i ćwiczenia https://zpe.gov.pl/a/interaktywne-materialy-sprawdzajace/D1JCDNfuM
  - handlowiec: https://zpe.gov.pl/a/przewodnik-dla-uczacego-sie/D13RC6q9t i słownik https://zpe.gov.pl/a/slownik-pojec-dla-e-materialu/DWKIm3KXi
  - cukiernik: https://zpe.gov.pl/b/produkcja-ciasta-i-wyrobow-z-ciasta-drozdzowego/POIxBCKHc
  - kucharz: https://zpe.gov.pl/a/wprowadzenie/D8FpVBicP i ćwiczenia https://zpe.gov.pl/a/interaktywne-materialy-sprawdzajace/DUaj449mR
- Zasób dla fryzjera powstał do kwalifikacji FRK.04 (technik usług kosmetycznych); tematycznie odpowiada FRK.01.3. Nie znaleziono e-materiału ZPE przypisanego wprost do FRK.01.
- Granice stref regału (80, 120, 160 cm) pochodzą z fragmentu słownika pojęć widocznego w wyszukiwarce. Warto potwierdzić je w samym materiale.
- Część o doborze surowców w materiale dla cukiernika i obieraczka w materiale dla kucharza wynikają z opisów w wynikach wyszukiwania, nie z otwartej treści.
- Nie sprawdzono, czy wyszukiwarka ZPE znajduje materiały po symbolu kwalifikacji (np. „SPC.01”); przewodnik to sugeruje.
- Lista kontrolna z pkt 6 pozostaje aktualna.
