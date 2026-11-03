'use strict';
// Opisy obsługi: 10-kreator-e-materialow.pdf. Przykłady: opracowanie do szkolenia.
window.CREATOR_REFERENCE = {
  "content": [
    {
      "title": "Akapit i odnośnik do strony",
      "what": "Tekst z hiperłączem do zewnętrznej strony.",
      "setup": "Wstaw Akapit, wpisz tekst, zaznacz adres lub frazę i ikoną łańcucha dodaj odnośnik.",
      "example": "Polecenie z linkiem do instrukcji producenta.",
      "page": 12
    },
    {
      "title": "Załączanie filmu z serwisu",
      "what": "Osadzenie filmu z obsługiwanego serwisu, np. YouTube lub Vimeo.",
      "setup": "Dodaj blok „Załączanie” i wklej link do filmu. Zwykłe strony WWW linkuj w Akapicie; nie wklejaj ich do tego bloku.",
      "example": "Krótki film i pytanie o zauważoną czynność.",
      "page": 12
    },
    {
      "title": "Podpis, źródło i licencja zasobu",
      "what": "Podpisanie ilustracji lub wykresu i wskazanie pochodzenia materiału.",
      "setup": "Przy zasobie wybierz ikonę A. Wypełnij podpis i dane źródła, wybierz odpowiednią licencję. Informacje pojawią się pod obiektem.",
      "example": "Zdjęcie stanowiska z podpisem i wskazaniem autora.",
      "page": 13
    },
    {
      "title": "Cytat",
      "what": "Wydzielenie wypowiedzi lub fragmentu tekstu źródłowego.",
      "setup": "Przeciągnij blok cytatu do dokumentu i uzupełnij treść.",
      "example": "Fragment utworu do interpretacji lub przepis do analizy.",
      "page": 16
    },
    {
      "title": "Definicja, pojęcie i słownik",
      "what": "Hasła z objaśnieniami, do których odwołuje się tekst.",
      "setup": "Wstaw blok „Pojęcie”, edytuj hasło i definicję; możesz dodać multimedia. Zaznacz hasło w tekście i ikoną książki połącz je z wybraną definicją.",
      "example": "Słownik pojęć zawodowych dostępny podczas czytania.",
      "page": 17
    },
    {
      "title": "Dymki",
      "what": "Dodatkowe objaśnienie po wskazaniu fragmentu tekstu.",
      "setup": "Wstaw blok dymka, dodaj treść i odczytaj jego identyfikator. Po zaznaczeniu frazy wskaż dymek przez ikonę książki. Jego treść nie musi być osobno widoczna w dokumencie.",
      "example": "Podpowiedź znaczenia trudnego terminu.",
      "page": 18
    },
    {
      "title": "Baner",
      "what": "Ilustracja na pełną szerokość z tytułem dokumentu.",
      "setup": "Dodaj komponent banera i ilustrację; wyświetlany nagłówek pochodzi z tytułu dokumentu.",
      "example": "Zdjęcie wprowadzające w temat działu.",
      "page": 19
    },
    {
      "title": "Bloki pytań otwartych",
      "what": "Numerowane polecenia, ćwiczenia lub badania bez systemowo zapisanej poprawnej odpowiedzi.",
      "setup": "Dodaj odpowiedni blok i umieść w nim tekst, multimedia lub Dziennik. Sam blok Polecenie nie jest polem do wpisania odpowiedzi.",
      "example": "Porównaj dwa rozwiązania i zapisz uzasadnienie w zeszycie.",
      "page": 20
    },
    {
      "title": "Bloki typu Lekcja",
      "what": "Podział materiału na sekcje; niektóre komponenty pełnią osobne funkcje, np. Kod źródłowy.",
      "setup": "Wybierz blok z kategorii Lekcja i dodaj w nim potrzebne komponenty. Dobierz sekcje do przebiegu zadania.",
      "example": "Wprowadzenie, materiał do analizy i sprawdzenie.",
      "page": 20
    },
    {
      "title": "Równania matematyczne i chemiczne",
      "what": "Zapis wzorów, również numerowanych.",
      "setup": "Przeciągnij ikonę równania, otwórz edycję i użyj edytora WYSIWYG lub formuły LaTeX. Zapisz wzór.",
      "example": "Wzór potrzebny do obliczenia stężenia roztworu.",
      "page": 20
    }
  ],
  "exercises": [
    {
      "title": "Jednokrotny wybór",
      "what": "Wybór jednej poprawnej odpowiedzi.",
      "setup": "Wpisz pytanie, dodaj odpowiedzi przyciskiem „Dodaj odpowiedź” i zaznacz jedną jako poprawną.",
      "example": "Wybór dokumentu przyjęcia dostawy.",
      "page": 22
    },
    {
      "title": "Wielokrotny wybór",
      "what": "Wskazanie kilku poprawnych odpowiedzi.",
      "setup": "Wpisz pytanie i warianty. Zaznacz wszystkie poprawne odpowiedzi i zapisz.",
      "example": "Wskazanie czynników wpływających na jakość wyrobu.",
      "page": 23
    },
    {
      "title": "Wybór z ilustracją lub ilustracjami",
      "what": "Wybór odpowiedzi z wykorzystaniem grafiki.",
      "setup": "Przygotuj pytanie jak dla wyboru jedno- lub wielokrotnego; w zakładce „Plik” dodaj grafikę przez Drag & Drop.",
      "example": "Rozpoznanie narzędzia na zdjęciu.",
      "page": 23
    },
    {
      "title": "Wybór z ilustracjami i audio",
      "what": "Połączenie zadania wyboru z obrazem i nagraniem.",
      "setup": "Dodaj pytanie i warianty odpowiedzi, a w zakładce „Pliki” wgraj ilustrację i audio w odpowiednie pola.",
      "example": "Wybór opisu pasującego do usłyszanego komunikatu.",
      "page": 24
    },
    {
      "title": "Jednokrotny wybór — fragment kodu",
      "what": "Prezentowanie fragmentów kodu programistycznego w zadaniu wyboru.",
      "setup": "Wybierz ten typ ćwiczenia i zastosuj format pseudokodu podany w jego zakładce „Pomoc”.",
      "example": "Wskazanie kodu, który daje oczekiwany wynik.",
      "page": 24
    },
    {
      "title": "Uzupełnij tekst",
      "what": "Wpisywanie brakujących słów lub wyrażeń.",
      "setup": "Wklej tekst, a prawidłowe uzupełnienia umieść w nawiasach klamrowych. Skorzystaj z przykładu w „Pomocy”.",
      "example": "Uzupełnienie nazwy etapu procesu.",
      "page": 25
    },
    {
      "title": "Wstaw w tekst",
      "what": "Przeciąganie odpowiedzi w luki tekstu.",
      "setup": "Umieść poprawne uzupełnienia w nawiasach klamrowych. Dodatkowe błędne odpowiedzi oddziel od tekstu znacznikiem ###.",
      "example": "Dobór terminów do opisu zjawiska.",
      "page": 26
    },
    {
      "title": "Wskazywanie elementu tekstu",
      "what": "Klikanie wskazanych fraz.",
      "setup": "W edytorze zaawansowanym umieść możliwe wybory w nawiasach klamrowych. Poprawne poprzedź znakiem #, np. {#poprawna odpowiedź}.",
      "example": "Wyszukanie argumentu w krótkim tekście.",
      "page": 26
    },
    {
      "title": "Oznaczanie elementów tekstu",
      "what": "Oznaczanie kolorami dowolnych fragmentów tekstu.",
      "setup": "Wklej tekst. Po ### wpisz nazwy kategorii i kody kolorów w formacie nazwa#AABBCC. Symbol @ łączy wyrazy w zaznaczaną grupę.",
      "example": "Zaznaczenie faktów i opinii różnymi kolorami.",
      "page": 27
    },
    {
      "title": "Kolorowanie elementów tekstu",
      "what": "Kolorowanie wyłącznie przygotowanych fraz w ramkach.",
      "setup": "Oznacz fragmenty według wzoru {nazwa}tekst{/nazwa}; po ### dodaj nazwy i kody kolorów. Wzór znajdziesz w „Pomocy”.",
      "example": "Przyporządkowanie wskazanych pojęć do kategorii.",
      "page": 27
    },
    {
      "title": "Wstaw w równanie",
      "what": "Przeciąganie brakujących elementów równania.",
      "setup": "Przygotuj równanie w MathML, a elementy do przeciągania umieść w nawiasach klamrowych.",
      "example": "Uzupełnienie brakującego składnika wzoru.",
      "page": 28
    },
    {
      "title": "Wstawianie elementów na oś czasu",
      "what": "Rozmieszczanie wydarzeń na osi chronologicznej.",
      "setup": "W edytorze zaawansowanym wpisz rok, znak # i opis wydarzenia według wzoru z „Pomocy”.",
      "example": "Dopasowanie wydarzeń do dat.",
      "page": 28
    },
    {
      "title": "Uzupełnij podpisy na ilustracji",
      "what": "Wpisywanie odpowiedzi przy oznaczonych punktach obrazu.",
      "setup": "Wgraj ilustrację w „Plikach”, dodaj odpowiedzi ze współrzędnymi X i Y. Opis alternatywny można uzupełnić znacznikiem @alt=.",
      "example": "Podpisanie części urządzenia.",
      "page": 29
    },
    {
      "title": "Wstaw tekst na ilustrację",
      "what": "Przeciąganie podpisów w odpowiednie miejsca obrazu.",
      "setup": "Dodaj ilustrację oraz odpowiedzi ze współrzędnymi X i Y; uzupełnij opis alternatywny zgodnie z „Pomocą”.",
      "example": "Przyporządkowanie nazw do elementów stanowiska.",
      "page": 29
    },
    {
      "title": "Wskaż na ilustracji",
      "what": "Zaznaczanie wybranych miejsc obrazu.",
      "setup": "Wgraj ilustrację i skonfiguruj punkty odpowiedzi ze współrzędnymi. Uzupełnij opis alternatywny.",
      "example": "Wskazanie elementu, który wymaga regulacji.",
      "page": 29
    },
    {
      "title": "Puzzle",
      "what": "Układanie podzielonego obrazu.",
      "setup": "W Kreatorze podstawowym określ liczbę kolumn i rzędów, a potem dodaj grafikę w zakładce „Pliki”.",
      "example": "Odtworzenie schematu i omówienie jego elementów.",
      "page": 30
    },
    {
      "title": "Kolorowanie mapy",
      "what": "Oznaczanie obszarów mapy kolorami.",
      "setup": "Dodaj odpowiednio przygotowaną mapę SVG. Wymagania formatowania pliku sprawdź w „Pomocy” komponentu.",
      "example": "Oznaczenie regionów spełniających podane kryterium.",
      "page": 30
    },
    {
      "title": "Uporządkuj elementy",
      "what": "Układanie fragmentów tekstu w kolejności.",
      "setup": "Wpisz elementy w Kreatorze podstawowym w poprawnej kolejności — będzie ona wzorcem rozwiązania.",
      "example": "Kolejność przygotowania stanowiska pracy.",
      "page": 31
    },
    {
      "title": "Grupuj elementy",
      "what": "Przeciąganie elementów do kategorii.",
      "setup": "Dodaj grupy i ich nazwy. Przyciskiem + pod nazwą dodaj elementy należące do danej grupy.",
      "example": "Podział surowców według zastosowania.",
      "page": 32
    },
    {
      "title": "Uporządkuj ilustracje",
      "what": "Układanie obrazów w kolejności.",
      "setup": "Dodaj co najmniej dwie odpowiedzi i przypisz grafiki w zakładce „Pliki”; przygotuj je zgodnie z kolejnością docelową.",
      "example": "Uporządkowanie zdjęć etapów wykonania zabiegu.",
      "page": 32
    },
    {
      "title": "Połącz w pary",
      "what": "Łączenie pozycji z dwóch kolumn.",
      "setup": "W Kreatorze podstawowym dodawaj odpowiedzi, wpisując dwa elementy tworzące każdą parę.",
      "example": "Pojęcie i definicja.",
      "page": 33
    },
    {
      "title": "Połącz w pary tekst z ilustracjami",
      "what": "Łączenie obrazów z podpisami.",
      "setup": "Dodaj minimum dwie odpowiedzi. Dla każdej wpisz odpowiedź i opis grafiki, a następnie dodaj obrazy w zakładce „Pliki”.",
      "example": "Narzędzie i jego nazwa.",
      "page": 33
    },
    {
      "title": "Połącz w pary tekst z audio",
      "what": "Łączenie nagrań z tekstami.",
      "setup": "W edytorze zaawansowanym wpisz odpowiedzi w kolejnych liniach. W „Plikach” przypisz nagrania w tej samej kolejności.",
      "example": "Nagranie słowa i jego zapis.",
      "page": 34
    },
    {
      "title": "Krzyżówka",
      "what": "Rozwiązywanie haseł na podstawie pytań.",
      "setup": "Wpisuj pytanie i w kolejnym wierszu odpowiedź. Literę hasła oznacz nawiasem klamrowym; kolejne pytania oddziel ###.",
      "example": "Powtórzenie słownictwa zawodowego.",
      "page": 35
    },
    {
      "title": "Krzyżówka z ilustracjami",
      "what": "Odgadywanie haseł na podstawie obrazków.",
      "setup": "Dodaj pliki i odpowiedzi, oznacz literę hasła nawiasem klamrowym i oddziel pytania ### według „Pomocy”.",
      "example": "Nazwy narzędzi przedstawionych na zdjęciach.",
      "page": 36
    },
    {
      "title": "Zaznaczanie komórek tabeli",
      "what": "Wybieranie pól, np. w zadaniu prawda/fałsz.",
      "setup": "Skorzystaj z tabeli z „Pomocy”. Parametr text opisuje treść, correct=1 poprawność, group grupę wyboru, disabled=1 pole nieaktywne, feedback informację zwrotną.",
      "example": "Ocena prawdziwości zdań o procedurze.",
      "page": 36
    },
    {
      "title": "Uzupełnianie komórek tabeli",
      "what": "Wpisywanie odpowiedzi w pola tabeli.",
      "setup": "Pierwsze wiersze tworzą nagłówki; kolumny oddziel pionową kreską. Treść wpisana w komórce jest poprawną odpowiedzią. Użyj wzoru z „Pomocy”.",
      "example": "Uzupełnienie wyników obliczeń.",
      "page": 37
    },
    {
      "title": "Przenoszenie elementów do komórek tabeli",
      "what": "Przeciąganie gotowych odpowiedzi do tabeli.",
      "setup": "Przygotuj nagłówki i poprawne wpisy, oddzielając kolumny pionową kreską. Po ### możesz dodać błędne warianty odpowiedzi.",
      "example": "Dopasowanie właściwości do materiałów.",
      "page": 38
    },
    {
      "title": "Wykres kołowy",
      "what": "Interaktywny wykres kołowy lub pierścieniowy.",
      "setup": "W każdej linii wpisz wartość i po przecinku etykietę. Udziały procentowe obliczane są automatycznie. Dalsze opcje opisuje „Pomoc”.",
      "example": "Prezentacja udziału kategorii w wydatkach.",
      "page": 38
    },
    {
      "title": "Wykres z osią",
      "what": "Wykres kolumnowy, liniowy, skumulowany lub punktowy.",
      "setup": "W każdej linii podaj etykietę i wartości liczbowe rozdzielone przecinkami. Dobierz wariant i ustawienia według „Pomocy”.",
      "example": "Porównanie sprzedaży w kolejnych okresach.",
      "page": 39
    },
    {
      "title": "Ustaw wysokość słupków na wykresie",
      "what": "Ustawianie wartości słupków przez ucznia.",
      "setup": "Dodaj ten komponent i przygotuj wartości docelowe; PDF podaje jego funkcję, a szczegóły pól konfiguracji sprawdź w „Pomocy”.",
      "example": "Odwzorowanie danych z tabeli na wykresie.",
      "page": 39
    },
    {
      "title": "Tablica interaktywna",
      "what": "Umieszczanie tekstów, podpisów i obrazów na tle ilustracji, bez automatycznego sprawdzania.",
      "setup": "Dodaj tło w „Załącznikach”. Dla obrazów do przeciągania użyj wpisów image#Opis ilustracji i dodaj pliki; dalszą składnię podaje „Pomoc”.",
      "example": "Rozplanowanie stanowiska i uzasadnienie układu.",
      "page": 40
    },
    {
      "title": "Ilustracja interaktywna",
      "what": "Otwieranie objaśnień po kliknięciu punktów na obrazie; wariant z panelem bocznym lub bez.",
      "setup": "Dodaj obraz i opis alternatywny. Użyj „Dodaj punkt”, wpisz tytuł i tekst. Pozycje pozioma i pionowa przyjmują wartości 0–100; określ stronę wyświetlania okna i zbliżenie.",
      "example": "Zdjęcie urządzenia z opisami funkcji podzespołów.",
      "page": 41
    },
    {
      "title": "Dziennik — pytanie otwarte",
      "what": "Wpisywanie tekstu, wybór z listy lub dołączanie własnego obrazu.",
      "setup": "W edytorze zaawansowanym zacznij od @@@. Znaczniki {tytul} i {pole} definiują tytuł oraz pole odpowiedzi. Etykiety i pozostałe typy pól dobierz z „Pomocy”.",
      "example": "Notatka z obserwacji i zdjęcie wyniku doświadczenia.",
      "page": 42
    }
  ],
  "additional": [
    {
      "title": "Harmonia",
      "what": "Rozwijane zakładki z treścią.",
      "setup": "Dodaj komponent i przygotuj treści kolejnych zakładek. PDF opisuje jego funkcję; szczegółową konfigurację sprawdź w „Pomocy”.",
      "example": "Objaśnienia kolejnych etapów procesu.",
      "page": 43
    },
    {
      "title": "Szkicownik",
      "what": "Odręczne rysowanie.",
      "setup": "Dodaj Szkicownik i polecenie określające, co uczeń ma narysować. Dostępne ustawienia sprawdź w „Pomocy”.",
      "example": "Szkic rozwiązania przestrzennego.",
      "page": 43
    },
    {
      "title": "Interaktywny szkicownik",
      "what": "Rysowanie, dodawanie pól tekstowych i przeciąganie obrazów.",
      "setup": "Wstaw komponent i przygotuj zadanie; opcje elementów sprawdź w jego „Pomocy”.",
      "example": "Oznaczenie elementów własnego szkicu.",
      "page": 44
    },
    {
      "title": "Pokaz slajdów",
      "what": "Automatyczna galeria obrazów z napisami.",
      "setup": "Dodaj komponent, przygotuj ilustracje i napisy; konfigurację galerii sprawdź w „Pomocy”.",
      "example": "Zdjęcia kolejnych etapów wykonania wyrobu.",
      "page": 44
    },
    {
      "title": "Oś czasu",
      "what": "Linia chronologiczna z tekstem i obrazami.",
      "setup": "Dodaj komponent i przygotuj daty, opisy oraz grafiki według jego „Pomocy”.",
      "example": "Przebieg wydarzeń lub rozwoju technologii.",
      "page": 45
    },
    {
      "title": "Dziennik z osią czasu",
      "what": "Tworzenie własnej chronologii przez ucznia.",
      "setup": "Wstaw formularz i polecenie; ustawienia pól sprawdź w „Pomocy”.",
      "example": "Zapis przebiegu obserwacji w kolejnych dniach.",
      "page": 45
    },
    {
      "title": "Jednoręki bandyta",
      "what": "Losowanie elementów i rozstrzyganie, czy są powiązane.",
      "setup": "Przygotuj zestawy elementów; sposób wpisania danych sprawdź w „Pomocy” komponentu.",
      "example": "Ocena, czy wylosowane narzędzie pasuje do czynności.",
      "page": 45
    },
    {
      "title": "Fiszki",
      "what": "Ćwiczenie słownictwa.",
      "setup": "Dodaj komponent i zestaw słów według „Pomocy”.",
      "example": "Termin zawodowy i jego znaczenie.",
      "page": 46
    },
    {
      "title": "Wykreślanka",
      "what": "Wyszukiwanie słów ukrytych na planszy.",
      "setup": "Przygotuj listę słów; sposób konfiguracji planszy sprawdź w „Pomocy”.",
      "example": "Odnalezienie pojęć z danego działu i ich objaśnienie.",
      "page": 46
    },
    {
      "title": "Memo",
      "what": "Gra pamięciowa.",
      "setup": "Dodaj komponent i przygotuj pary według „Pomocy”.",
      "example": "Dopasowanie terminów i odpowiadających im oznaczeń.",
      "page": 47
    },
    {
      "title": "Gra decyzyjna",
      "what": "Rozgałęziający się scenariusz zależny od wyborów.",
      "setup": "Rozpisz sytuacje, możliwe decyzje i kolejne gałęzie. Konfigurację wprowadź według „Pomocy” komponentu.",
      "example": "Rozmowa z klientem i konsekwencje wybranych reakcji.",
      "page": 47
    },
    {
      "title": "Kreator krzyżówek",
      "what": "Tworzenie i zapisywanie krzyżówek przez uczniów.",
      "setup": "Wstaw komponent i określ temat; sposób obsługi sprawdź w „Pomocy”.",
      "example": "Uczeń przygotowuje krzyżówkę do powtórzenia dla partnera.",
      "page": 48
    },
    {
      "title": "Schemat — gałąź",
      "what": "Schemat interaktywny, także w wariancie edytowanym przez ucznia.",
      "setup": "Wybierz właściwy wariant komponentu i przygotuj strukturę według „Pomocy”.",
      "example": "Porządkowanie zależności między pojęciami.",
      "page": 48
    },
    {
      "title": "Pionowa oś czasu",
      "what": "Pionowa prezentacja treści.",
      "setup": "Dodaj komponent i przygotuj elementy w wybranej kolejności zgodnie z „Pomocą”.",
      "example": "Etapy rozwoju przedsiębiorstwa.",
      "page": 49
    },
    {
      "title": "Blockly",
      "what": "Programowanie za pomocą bloków.",
      "setup": "Wstaw komponent; zakres konfiguracji i obsługę bloków sprawdź w „Pomocy”.",
      "example": "Ułożenie prostej sekwencji działań.",
      "page": 49
    },
    {
      "title": "Symulacja",
      "what": "Porównywanie informacji na wykresach przez zmianę danych statystycznych.",
      "setup": "Przygotuj dane i pytanie do porównania; pola konfiguracji sprawdź w „Pomocy”.",
      "example": "Obserwacja, jak zmiana danych wpływa na wykres.",
      "page": 50
    },
    {
      "title": "Mapa myśli",
      "what": "Prezentowanie powiązań między elementami.",
      "setup": "Wstaw komponent i przygotuj powiązane pojęcia według „Pomocy”.",
      "example": "Związki między przyczynami i skutkami zjawiska.",
      "page": 51
    },
    {
      "title": "Kreator map myśli",
      "what": "Tworzenie mapy myśli przez ucznia.",
      "setup": "Dodaj komponent i polecenie; opcje edycji sprawdź w „Pomocy”.",
      "example": "Własne podsumowanie działu.",
      "page": 51
    },
    {
      "title": "Mapa interaktywna",
      "what": "Interaktywna mapa statystyczna.",
      "setup": "Przygotuj dane do prezentacji; wymagany format i ustawienia sprawdź w „Pomocy”.",
      "example": "Porównanie wskaźników w regionach.",
      "page": 52
    },
    {
      "title": "Tester kodu",
      "what": "Wpisywanie kodu programistycznego i sprawdzanie jego poprawności.",
      "setup": "Dodaj komponent; obsługiwane ustawienia, języki i sposób sprawdzania potwierdź w jego „Pomocy”, bo PDF ich nie precyzuje.",
      "example": "Sprawdzenie rozwiązania zadania programistycznego.",
      "page": 52
    },
    {
      "title": "Mapa warstwowa",
      "what": "Włączanie warstw, odczytywanie informacji o obszarach i dodawanie własnych znaczników.",
      "setup": "Wstaw komponent i przygotuj warstwy; format danych i konfigurację sprawdź w „Pomocy”.",
      "example": "Porównanie różnych informacji o tym samym obszarze.",
      "page": 52
    },
    {
      "title": "Kreator memów",
      "what": "Umieszczenie własnego tekstu na tle grafiki.",
      "setup": "W zakładce zaawansowanej użyj meme-text# i wpisz tekst; w załącznikach dodaj obraz tła. Wzór można skopiować z „Pomocy”.",
      "example": "Krótki komentarz do częstego błędu z uzasadnieniem.",
      "page": 53
    }
  ]
};
