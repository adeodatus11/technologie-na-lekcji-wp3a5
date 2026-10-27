# Weryfikacja wersji na 4 listopada

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
