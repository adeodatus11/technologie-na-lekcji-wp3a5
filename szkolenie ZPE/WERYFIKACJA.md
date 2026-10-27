# Weryfikacja pakietu — 29.09.2026

Wykonano:

- W przeglądarce: zapis tekstu z polskimi znakami i znacznikami po odświeżeniu, odrzucenie adresu javascript:, filtr materiałów zawodowych, przeniesienie tytułu i linku do formularza, przejścia między etapami myszą i klawiaturą.
- Przegląd układu przy szerokości 640 px, jasnego i ciemnego tła oraz braku błędów w dostępnych logach przeglądarki. To nie jest pełny audyt WCAG ani test czytnika ekranu.
- Sprawdzenie odpowiedzi HTTP 200 dla 20 adresów źródeł i materiałów. Wyniki: `qa/link-checks.json` w folderze roboczym. Odpowiedź serwera nie potwierdza działania wszystkich ćwiczeń interaktywnych.

Do sprawdzenia przez organizatora:

- Rzeczywista praca na zalogowanym koncie ZPE: Ulubione, kurs, przypisanie, publikacja, wyniki.
- Działanie dodatkowej karty ZPE i drukowania na docelowych komputerach; zachowanie może zależeć od blokowania wyskakujących okien i przeglądarki.
- Powiększenie 200% w docelowej przeglądarce (wykonany test wąskiego widoku nie zastępuje tej próby).
- Pilotaż z dwiema osobami, obciążenie sieci oraz czytelność projektora.

Nie przeprowadzono szkolenia, nie zebrano wyników uczestników i nie opublikowano strony w internecie. Instrukcje uwzględniają te ograniczenia.

## Aktualizacja 25.10.2026: wstęp do warsztatu


- Ręczne sprawdzenie rachunków: 110 · 0,9 = 99; 250 · 0,8 = 200, 200 · 1,2 = 240; z 80 do 100 to wzrost o 25%; 160 : 0,8 = 200; 112 − 12 = 100.
- Widok w Chromium: szerokość 1280 px (jasny motyw) i 390 px (ciemny motyw), bez poziomego przewijania i błędów w konsoli.

Do sprawdzenia przez organizatora: fragment „Dokumentacja w obrocie magazynowym” na ZPE (stan prawny materiału: 08.09.2023), klucz przypadku z nauczycielem przedmiotu zawodowego oraz działanie infografiki na iPadzie i laptopach używanych w szkole.

## Aktualizacja 25.10.2026: szkolenie jako klikana prezentacja


- `node tools/test.mjs`: każdy etap ma slajd otwierający, etapy robocze mają slajd zadania, każdy slajd i jego notatki renderują się bez pustych wartości, stare adresy prowadzą do właściwych slajdów, strony pomocnicze się renderują.
- Chromium, 390×844, ciemny motyw: wszystkie slajdy bez poziomego przewijania.
- Automatyczna próba interakcji: klawiatura, kliknięcie w tło, odsłanianie odpowiedzi, ankieta A–D, krokownik lekcji B, notatki (N), spis (M), zapis formularza i oznaczenia etapu po odświeżeniu, filtr materiałów, przeniesienie materiału do formularza, zegar przerwy, powrót ze strony pomocniczej, przycisk „Kontynuuj”, PageDown przewijający długi slajd.

Do sprawdzenia przez organizatora: czytelność slajdów na projektorze w sali i działanie pilota do prezentacji. Nie wykonano pełnego testu z czytnikiem ekranu.
