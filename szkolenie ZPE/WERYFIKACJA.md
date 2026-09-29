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
