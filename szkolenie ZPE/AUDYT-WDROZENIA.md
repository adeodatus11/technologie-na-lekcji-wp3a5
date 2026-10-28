# Weryfikacja wersji na 4 listopada

## Pełne wydanie PDF

Przykłady zawodowe ograniczono do fryzjera, handlowca, cukiernika i kucharza. Przykłady ogólnokształcące obejmują matematykę i analizę źródła na języku polskim/historii; w bibliotece jest też zasób biologiczny. Sprawdzono obliczenia ceny jednostkowej, proporcjonalnego skalowania składników oraz masy brutto/netto. Nie przedstawiono haseł zawodowych jako sprawdzonych adresów konkretnych zasobów ZPE.

Wydanie pełne zachowuje wszystkie rozdziały i rozwinięcia strony. Dodano okładkę z podpisem Macieja Najwera, datą „Październik 2026”, spis treści i zakładki PDF. Strona zamykająca opisuje wykorzystanie materiału WP3.A5 i zawiera aktywne adresy covepolska.pl oraz win4smes.eu. Znaki projektowe i zachowane zastrzeżenie występują wyłącznie na pierwszej i ostatniej stronie. W środku publikacji są ilustracje źródłowe, tekst i dyskretna numeracja. Treść jest generowana ze strony, dzięki czemu nie skraca się do dziewięciu plansz.

## Aktualizacja: przewodnik zamiast slajdów

Aktualny produkt to osiem rozdziałów w jednym ilustrowanym przewodniku. Poprzednie informacje o trzynastu ekranach opisują wycofany wariant. Strona ładuje wyłącznie nowe moduły przewodnika. Ma dziewięć powiększanych ilustracji, rozbudowane wyszukiwanie, rozróżnienie kont i trybów udostępniania, przykłady przedmiotowe oraz bibliotekę oryginałów. Grafiki pochodzą z poradników, a manifest w `assets/przewodnik/sources.json` pozwala odtworzyć ich pochodzenie.

Sprawdzono renderowanie na komputerze i telefonie, powiększenie, dialog ilustracji, tryb prowadzenia, stare adresy, lokalne odsyłacze i kompletność obrazów. Ilustrowany PDF jest drukiem aktualnej strony, a nie osobno utrzymywaną wersją treści. Nie wykonano operacji na zalogowanym koncie ZPE ani pilotażu z uczestnikami.

## Historia poprzedniego wariantu

Główna ścieżka ma 13 ekranów i obejmuje trzy modele pracy, podstawowe operacje ZPE, pokaz udostępniania oraz własny materiał. Usunięto powtarzające się ćwiczenia i publiczny harmonogram. Zachowano klucze wcześniejszych zapisów formularza.

## Poprawione problemy

- Oryginalne PDF-y są wyjątkami od reguły ignorowania i mogą zostać opublikowane razem z repozytorium.
- Nowe wydruki nie zawierają harmonogramów ani liczników.
- W formularzu dodano własne źródła oraz sposób przekazania zadania.
- Zastąpiono obietnice automatycznego oszczędzania czasu trzema konkretnymi sposobami pracy: projektor, para i samodzielna próba.
- Oddzielono datę opracowania od wcześniejszych informacji o ilustracjach. Usunięto zapewnienie, że operacje na koncie sprawdzono.
- Baza odsyła do stron poradników, np. wyników w instrukcji udostępniania, tworzenia kart, grup i wejścia do Kreatora.

## Dowody i ograniczenia

Testy sprawdzają renderowanie całej ścieżki, brak oznaczeń czasu w ekranach i notatkach, odczyt wcześniejszych zapisów, nowe pola, eksport do podglądu i obecność źródłowych PDF-ów. W Chromium potwierdzono przejście przez 13 ekranów, zachowanie formularza po przeładowaniu i powrót z bazy do prezentacji. Obejrzano ekran przy powiększeniu i w wąskim oknie.

Nie potwierdzono operacji na zalogowanym koncie ZPE ani potrzeb konkretnej grupy nauczycieli badaniem ankietowym. Przydatność modeli oceniono względem warunków użycia, bez twierdzeń o ich popularności w polskich szkołach. Nie przeprowadzono próby szkolenia z uczestnikami; wykonalność krótkiego programu jest oceną projektową.

Oryginalne poradniki zachowują historyczną treść, ilustracje i informacje autorów. Nie zmieniano w nich oznaczeń czasu. Publiczny harmonogram usunięto z opracowanych materiałów warsztatowych.

Przed spotkaniem prowadzący powinien sprawdzić konto testowe, zapis wyników wybranego ćwiczenia, sieć i projektor oraz dostęp do stanowisk w pracowniach.


Skład książkowy: druga strona pozostaje pusta, a spis treści jest na stronie trzeciej. Rozdziały płyną kolejno, bez obowiązkowego rozpoczynania każdego tematu na nowej stronie; tekst akapitowy jest justowany. Zmiana liczby stron wynika z kompozycji, bez usuwania treści. Autor występuje w widocznej treści wyłącznie na okładce. Znaki projektowe mają optycznie wyrównaną wysokość. Zamknięcie zawiera aktywne adresy i wektorowe kody QR do covepolska.pl, win4smes.eu i metodyka.covepolska.pl.

Kontrola wydania książkowego: potwierdzono pustą stronę drugą, spis treści na trzeciej, autora tylko na okładce, komplet dziewięciu ilustracji i osadzone fonty. Trzy kody QR odczytano z renderu strony zamykającej niezależnym dekoderem; wyniki odpowiadają podpisanym adresom. Nie potwierdza to dostępności serwisów docelowych.
