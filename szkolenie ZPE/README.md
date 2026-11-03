# ZPE w praktyce — ilustrowany przewodnik

Strona do prowadzenia szkolenia i samodzielnego powrotu do instrukcji. Zamiast slajdów: dwanaście rozdziałów (od wprowadzenia o ZPE i szkolnym sprzęcie po plan szkolenia, Kreator i pracę nad własnym tematem), nawigacja boczna, powiększane ekrany ze źródeł, procedury i przykłady. Nie ma formularzy do wypełniania ani harmonogramów.

## Treść i źródła

- `index.html`, `guide.css`, `guide.js`: aktualny widok przewodnika.
- `creator-reference.js`: katalog 66 funkcji treści, ćwiczeń i dodatkowych komponentów Kreatora, z opisami przygotowania, przykładami i stronami źródłowego PDF-u. Pozostałe funkcje (projekty, testy, edycja zaawansowana, dostępność i starszy Kreator) opisano w `guide.js`.
- `guide-data.js`: dane zasobów i poradników używane na stronie.
- `subject-examples.json`: zadania z matematyki, języka polskiego/historii oraz zawodów fryzjer, handlowiec, cukiernik i kucharz; każde opiera się na zasobie ZPE.
- `zasoby-zawodowe.json`: e-materiały ZPE dla czterech zawodów, dołączane do `guide-data.js` przez `tools/build_guide_data.py`.
- `AUDYT-MERYTORYCZNY.md`: audyt treści względem poradników, decyzje autora i lista kontrolna przed szkoleniem.
- `assets/przewodnik/sources.json`: pochodzenie ośmiu wyodrębnionych grafik, strony PDF i sumy SHA-256. Dziewiąta ilustracja pochodzi z wcześniej dołączonej instrukcji Ulubione.
- `materialy-zrodlowe/`: jedenaście niezmienionych poradników PDF.
- `output/pdf/przewodnik-zpe-ilustrowany.pdf`: pełna publikacja z rozwiniętymi rozdziałami, okładką, spisem treści, ilustracjami i stroną zamykającą. Historyczne nazwy plików zachowano jako kopie dla zgodności linków.
- `project-branding.json`: podpis autora, data, logotypy i zachowane brzmienie zastrzeżenia. Logotypy projektu w PDF-ie występują na okładce i stronie zamykającej; środek ma dyskretną numerację.
- Historyczne moduły slajdów i formularza nie są ładowane przez stronę. Dotychczasowych danych w pamięci przeglądarki nie usuwamy.

## Przygotowanie i kontrola

Po zmianie źródeł danych:

```sh
python3 tools/content.py
python3 tools/build_guide_data.py
```

Ilustracje można odtworzyć z oryginalnych PDF-ów:

```sh
python3 tools/extract_guide_images.py
```

Kontrola strony i generowanie PDF:

```sh
node tools/test.mjs
python3 tools/build_pdfs.py
python3 tools/build_archive.py
```

Test korzysta z Playwrighta i systemowego Chromium. Sprawdza rozdziały, ilustracje, dokumenty, powiększanie, tryb prowadzenia, stare adresy, mobile i brak formularzy oraz publicznych oznaczeń czasu. Generator PDF drukuje pełną stronę ze wszystkimi rozwinięciami, a następnie dodaje redakcyjną okładkę, spis treści, zakładki rozdziałów, numerację i zamknięcie. Sprawdza kompletność treści, ilustracji i osadzenie fontów oraz rozmieszczenie znaków projektowych.

Podgląd lokalny: `python3 -m http.server 8765 --bind 127.0.0.1` w tym folderze.

Przed pokazem prowadzący sprawdza bieżący interfejs na koncie testowym ZPE, zapis wyników wybranego ćwiczenia oraz działanie stanowisk. Ilustracje poradników są oznaczone jako przykłady z dokumentów, nie aktualne zrzuty z konta uczestnika.


Skład książkowy: druga strona pozostaje pusta, a spis treści jest na stronie trzeciej. Rozdziały płyną kolejno, bez obowiązkowego rozpoczynania każdego tematu na nowej stronie; tekst akapitowy jest justowany. Zmiana liczby stron wynika z kompozycji, bez usuwania treści. Autor występuje w widocznej treści wyłącznie na okładce. Znaki projektowe mają optycznie wyrównaną wysokość. Zamknięcie zawiera aktywne adresy i wektorowe kody QR do covepolska.pl, win4smes.eu i metodyka.covepolska.pl.

Aktualizacja 3 listopada 2026: szkolenie prowadzone bezpośrednio w ZPE; strona służy jako przewodnik i szczegółowa pomoc po spotkaniu. Informacje o szkolnym sprzęcie i obserwacje o uczniach przekazał prowadzący. Termin kolejnych dostaw pozostaje nieokreślony. Opisy Kreatora oparto na pełnym poradniku (67 stron); gdy źródło podaje tylko funkcję komponentu, instrukcja odsyła po konfigurację do jego Pomocy.

Audyt aktualności 3 listopada 2026: `AUDYT-AKTUALNOSCI.md`. Główne procedury udostępniania, raportów, użytkowników, Ulubionych i Teczki porównano z publicznym poradnikiem WWW ZPE oraz ekranem kursów przekazanym przez prowadzącego. Starsze procedury oznaczono przy treści i każdym z 11 dokumentów. Nie wykonano testu na zalogowanym koncie nauczyciela i ucznia. Testy techniczne strony nie potwierdzają aktualności interfejsu ZPE.

Ścieżka „Od gotowej lekcji do sprawdzenia pracy uczniów” (`#od-lekcji-do-oceny`) opisuje pracę bez Kreatora: Ulubione, dobór klasy/grupy, kurs, publikacja, kolejne lekcje, analiza odpowiedzi, ocena i dokończenie w domu. Dwie dodatkowe ilustracje odpowiedzi pochodzą z PDF-u 03, s. 17–18; są oznaczone jako starszy interfejs i nie ilustrują wejścia do obecnej Analizy. Ich pochodzenie i sumy kontrolne są w `assets/przewodnik/workflow-sources.json`.
