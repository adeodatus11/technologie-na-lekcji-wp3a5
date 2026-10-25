# Weryfikacja pakietu — 29.09.2026

Wykonano:

- Kontrolę składni JavaScript oraz testy logiki: ciągłość 180 minut, 12 etapów, 4+4 materiały, zgodność pól, odrzucanie nieprawidłowych domen i protokołów, bezpieczne wyświetlanie tekstu, zapis/odczyt i zachowanie przy niedostępnym lub uszkodzonym localStorage.
- W przeglądarce: zapis tekstu z polskimi znakami i znacznikami po odświeżeniu, odrzucenie adresu javascript:, filtr materiałów zawodowych, przeniesienie tytułu i linku do formularza, przejścia między etapami myszą i klawiaturą.
- Przegląd układu przy szerokości 640 px, jasnego i ciemnego tła oraz braku błędów w dostępnych logach przeglądarki. To nie jest pełny audyt WCAG ani test czytnika ekranu.
- Sprawdzenie odpowiedzi HTTP 200 dla 20 adresów źródeł i materiałów. Wyniki: `qa/link-checks.json` w folderze roboczym. Odpowiedź serwera nie potwierdza działania wszystkich ćwiczeń interaktywnych.
- Wygenerowanie i wizualny przegląd wszystkich stron PDF: 8 stron kart, 23 strony scenariusza. Brak widocznych przycięć i pustych stron. Po zwiększeniu tekstu kart ponownie sprawdzono ich układ.

Do sprawdzenia przez organizatora:

- Rzeczywista praca na zalogowanym koncie ZPE: Ulubione, kurs, przypisanie, publikacja, wyniki.
- Działanie dodatkowej karty ZPE i drukowania na docelowych komputerach; zachowanie może zależeć od blokowania wyskakujących okien i przeglądarki.
- Powiększenie 200% w docelowej przeglądarce (wykonany test wąskiego widoku nie zastępuje tej próby).
- Pilotaż z dwiema osobami, obciążenie sieci oraz czytelność projektora.

Nie przeprowadzono szkolenia, nie zebrano wyników uczestników i nie opublikowano strony w internecie. Instrukcje uwzględniają te ograniczenia.

## Aktualizacja 25.10.2026: wstęp do warsztatu

Dodano stronę `#/wstep` i przebudowano etap 1 („Kto pracuje na lekcji?”; nadal 0–10 min, harmonogram 180 i 120 minut bez zmian). Wykonano:

- Testy `node tools/test.mjs`: obie osie czasu i przebieg przykładowej lekcji sumują się do 40 minut. Etapy lekcji B, osi czasu i wariantu z matematyki są w tej samej kolejności. Strona zawiera 12 metod, a każdy plik metody istnieje w katalogu COVE. Linki do ZPE mają poprawny format.
- Ręczne sprawdzenie rachunków: 110 · 0,9 = 99; 250 · 0,8 = 200, 200 · 1,2 = 240; z 80 do 100 to wzrost o 25%; 160 : 0,8 = 200; 112 − 12 = 100.
- Widok w Chromium: szerokość 1280 px (jasny motyw) i 390 px (ciemny motyw), bez poziomego przewijania i błędów w konsoli.
- Wygenerowanie scenariusza PDF (28 stron) i przegląd wizualny stron 1–8. Karty uczestnika nie zmieniły się.

Do sprawdzenia przez organizatora: fragment „Dokumentacja w obrocie magazynowym” na ZPE (stan prawny materiału: 08.09.2023), klucz przypadku z nauczycielem przedmiotu zawodowego oraz działanie infografiki na iPadzie i laptopach używanych w szkole.
