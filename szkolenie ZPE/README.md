# ZPE bez pośpiechu

Aktualna wersja na 4 listopada: 18 ekranów pokazu i swobodna praca własna. Szczegółowo pokazano wyszukiwanie, filtry, ocenę i zapis materiałów. Nie ma obowiązkowego formularza, planu lekcji ani oddawania pracy. Publiczny pakiet nie zawiera harmonogramu. Rozszerzenia są w bazie wiedzy i centrum materiałów.

Po zmianie treści uruchom `python3 tools/content.py`, `python3 tools/build_pdfs.py` i `node tools/test.mjs`. Ścieżkę pokazu definiuje `presentation.js`; z tego samego tekstu powstają PDF-y. Historyczne zapisy lokalne pozostają zachowane.


## Uruchomienie

Otwórz `index.html` w aktualnej przeglądarce. Cały folder musi pozostać razem: strona korzysta z plików CSS, JavaScript, ilustracji i PDF. Dostęp do materiałów ZPE wymaga internetu.

Zalecany podgląd lokalny, jeśli na komputerze jest Python 3:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Polecenie uruchom w folderze pakietu, następnie otwórz `http://127.0.0.1:8765/`. Serwer jest dostępny tylko na tym komputerze. Zatrzymanie: Ctrl+C w terminalu. Uczestnicy mogą korzystać z własnej kopii folderu albo strony umieszczonej przez organizatora na hostingu statycznym. Publikacja nie została wykonana.

## Co jest w pakiecie

- Sterowanie: strzałki, PageDown/PageUp (pilot), spacja, kliknięcie w tło slajdu pokazowego, przesunięcie palcem. Na długich slajdach PageDown i spacja najpierw przewijają treść. N pokazuje notatki prowadzącego do bieżącego slajdu, M otwiera spis slajdów i materiałów.
- Narzędzia z poprzedniej wersji działają bez zmian, osadzone w zadaniach i dostępne jako osobne strony ze spisu: formularz „Moja lekcja”, 8 materiałów (4 ogólne i 4 zawodowe), samoocena, karty pracy, scenariusz trenera, źródła. Stare adresy (`#/etap/N`, `#/wstep`, `#/moja-lekcja` itd.) nadal działają.
- `content.json`: treści do dalszej edycji; źródłem generującym JSON i JS jest `tools/content.py`.
- `tools/build_pdfs.py`: generator PDF (Python, ReportLab, czcionki DejaVu; na Linuksie używa `/usr/share/fonts/truetype/dejavu`, na innym komputerze ścieżkę należy dostosować).
- `tools/test.mjs`: testy logiki i spójności; uruchomienie `node tools/test.mjs`.

## Jak poprowadzić zajęcia

Wydrukuj jeden zestaw kart dla każdego uczestnika oraz scenariusz dla trenera. Ustaw 20 par, ale każdy ćwiczy na swoim laptopie. Najpierw krótki pokaz, potem wykonanie, a następnie sprawdzenie. Partner podpowiada bez przejmowania myszy. Cztery pary z tą samą trudnością są sygnałem do wspólnego powtórzenia. Nie przyspieszaj całej grupy ze względu na pojedyncze osoby.

Plan, oznaczenia i samoocena zapisują się lokalnie w przeglądarce. Trener nie otrzymuje zapisów. Inna przeglądarka, inny adres strony albo usunięcie danych witryny mogą oznaczać brak dostępu do poprzednich notatek. Uczestnik powinien pobrać kopię tekstową lub wydrukować własny plan. Tryb prywatny może ograniczać trwałość zapisu. Nie wpisuj danych uczniów ani haseł do formularza warsztatu.

## Przed zajęciami — konieczne próby organizatora

1. Sprawdź Wi-Fi z obciążeniem zbliżonym do 40 laptopów i czytelność projektora z końca sali.
2. Na koncie nauczyciela wykonaj pełną ścieżkę: wyszukanie → serce → Katalog / Ulubione → ponowne otwarcie. Publiczne instrukcje nie zastępują tej próby.
3. Przygotuj własny kurs i dane demonstracyjne do pokazu raportu. Tabela na stronie warsztatu jest fikcyjnym przykładem interpretacji, nie prawdziwym raportem ZPE.
4. Sprawdź działanie wybranych ćwiczeń, filmów i linków oraz możliwość otwarcia dodatkowej karty w przeglądarce używanej w szkole.
5. Przeprowadź próbę instrukcji z dwiema osobami o małym doświadczeniu komputerowym, w tym przy powiększeniu 200%.
6. Uzgodnij pomoc przy problemach z kontem. Bez faktycznego zapisu w Ulubionych nie zaliczaj tej umiejętności.
7. Przygotuj wydruki i przykład bez internetu. Zaplanuj zebranie informacji po 7–14 dniach.

## Źródła i zakres weryfikacji

Kwerenda publicznych źródeł: 28.09.2026. Sprawdzenie pakietu: 29.09.2026. Pełne źródła są na stronie w sekcji „Źródła i informacje”, w treściach JSON i scenariuszu. Ilustracje to niezmienione grafiki z oficjalnych instrukcji ZPE, opisane i przypisane do źródeł. Nie są to zrzuty z zalogowanego konta autora pakietu. Pakiet nie jest oficjalnym poradnikiem ZPE ani Ministerstwa Edukacji.

Zakres wykonanych kontroli i ograniczenia opisano w `WERYFIKACJA.md`.
