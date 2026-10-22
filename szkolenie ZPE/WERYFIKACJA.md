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

## Aktualizacja 22.10.2026: część ogólna

Dodano etap 1 „Lekcja to nie tylko wykład” (0–20 min) w miejsce etapu „Po co mi ZPE?”, stronę „Metody pracy”, pole „Jak uczniowie będą pracować? (metoda)” w planie lekcji, kartę wstępną oraz strony części ogólnej w scenariuszu. Aby zachować 180 minut, skrócono „Powtórz z partnerem” (20 → 15 min) i „Znajdź coś dla siebie” (20 → 15 min). W wariancie 120 minut część ogólna trwa 10 minut.

Wykonano:

- Testy `node tools/test.mjs` (rozszerzone o część ogólną: 12 metod z adresami katalogu, 3 powody, źródła, karta wstępna, nowe pole formularza).
- Przegląd strony w Chromium przy szerokości 1280 i 375 px: brak poziomego przewijania i błędów w konsoli.
- Wygenerowanie i wizualny przegląd PDF: 9 stron kart, 29 stron scenariusza.
- Kwerenda badań przez wyszukiwarkę: główne liczby (Szpunar i in. 2013, Freeman i in. 2014, Patall i in. 2008, Theobald i in. 2020) porównano z abstraktami i omówieniami.

Ograniczenia: z tego środowiska nie dało się otworzyć adresów DOI, stron EEF, ZPE ani metodyka.covepolska.pl (blokada sieci), więc nowych linków nie sprawdzono odpowiedzią HTTP. Przed szkoleniem warto kliknąć źródła części ogólnej. Liczby z badań podano w zaokrągleniu; badania dotyczą głównie studentów, co zaznaczono w treści.
