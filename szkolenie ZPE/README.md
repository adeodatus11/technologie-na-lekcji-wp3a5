# ZPE w praktyce — ilustrowany przewodnik

Strona do prowadzenia szkolenia i samodzielnego powrotu do instrukcji. Zamiast slajdów: osiem rozdziałów, nawigacja boczna, powiększane ekrany ze źródeł, procedury i przykłady. Nie ma formularzy do wypełniania ani harmonogramów.

## Treść i źródła

- `index.html`, `guide.css`, `guide.js`: aktualny widok przewodnika.
- `guide-data.js`: dane zasobów i poradników używane na stronie.
- `assets/przewodnik/sources.json`: pochodzenie ośmiu wyodrębnionych grafik, strony PDF i sumy SHA-256. Dziewiąta ilustracja pochodzi z wcześniej dołączonej instrukcji Ulubione.
- `materialy-zrodlowe/`: jedenaście niezmienionych poradników PDF.
- `output/pdf/przewodnik-zpe-ilustrowany.pdf`: zwarty przewodnik — dziewięć stron, ilustracja na każdej stronie. Historyczne nazwy plików zachowano jako kopie dla zgodności linków.
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

Test korzysta z Playwrighta i systemowego Chromium. Sprawdza rozdziały, ilustracje, dokumenty, powiększanie, tryb prowadzenia, stare adresy, mobile i brak formularzy oraz publicznych oznaczeń czasu. Generator PDF buduje osobny zwarty układ z tych samych ilustracji źródłowych i sprawdza obecność obrazu na każdej stronie. Pełną stronę można osobno wydrukować przyciskiem w bibliotece.

Podgląd lokalny: `python3 -m http.server 8765 --bind 127.0.0.1` w tym folderze.

Przed pokazem prowadzący sprawdza bieżący interfejs na koncie testowym ZPE, zapis wyników wybranego ćwiczenia oraz działanie stanowisk. Ilustracje poradników są oznaczone jako przykłady z dokumentów, nie aktualne zrzuty z konta uczestnika.
