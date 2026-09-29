import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
D={'title':'ZPE bez pośpiechu','date':'28.09.2026','version':1}
D['sources']=[
 ['Wyszukiwanie materiałów','https://zpe.gov.pl/a/wyszukiwanie-materialow/DB4RUK55O','Instrukcja wyszukiwania i filtrów; punkt odniesienia dla karty 2.'],
 ['Ulubione','https://zpe.gov.pl/a/ulubione/DE1FP3VBC','Zapis przez serce, powrót przez Katalog → Ulubione; źródło dwóch ilustracji. Funkcja wymaga zalogowania.'],
 ['Poradnik dla nauczycieli','https://zpe.gov.pl/platforma-edukacyjna','Główna nawigacja do aktualnie dostępnych instrukcji.'],
 ['Filmy i instrukcje','https://zpe.gov.pl/filmy-i-instrukcje','Dalsza pomoc po warsztacie; różne generacje poradników mogą pokazywać inne ekrany.'],
 ['Dodawanie materiałów do kursu','https://zpe.gov.pl/a/dodawanie-materialow-do-kursu/D2F5EFRLV','Ścieżka pokazu: Udostępnij → Platforma edukacyjna → Nowy kurs.'],
 ['Zapisywanie uczniów','https://zpe.gov.pl/a/zapisywanie-uczniow/D2UOTPKJV','Publikacja kursu i przypisywanie uczniów; konta szkolne i prywatne mają odmienny kontekst klas.'],
 ['Monitorowanie postępów','https://zpe.gov.pl/a/monitorowanie-postepow/D8OONO24C','Raport w zakładce Analiza. Czas wyświetlania nie jest pomiarem uwagi ucznia.'],
 ['Generator Kart Pracy','https://zpe.gov.pl/a/generator-kart-pracy/D9D7YmwXP','Możliwość dalszej nauki. Poza obowiązkową częścią warsztatu.'],
 ['Nauczanie jawne','https://metodyka.covepolska.pl/metoda-nauczanie-jawne.html','Małe kroki, modelowanie i samodzielna próba. Adaptacja do dorosłych.'],
 ['Przykłady rozwiązane','https://metodyka.covepolska.pl/metoda-przyklady-rozwiazane.html','Pełny model, pomoc stopniowo wycofywana, nowe zadanie.'],
 ['Tutoring rówieśniczy','https://metodyka.covepolska.pl/metoda-peer-tutoring.html','Ćwiczenie poznanej procedury w parach ze zmianą ról.'],
 ['Wzorzec struktury lekcji','https://informatyka.szkolamistrzow.info/teacher/lesson/08/','Cele, przygotowanie, etapy, pytania prowadzącego, trudności i sprawdzenie.']]
D['resources']=[
 dict(id='notatki',kind='ogólne',subject='Wspólny start / każdy przedmiot',title='Gdzie tego szukać? O notowaniu',url='https://zpe.gov.pl/a/gdzie-tego-szukac-o-notowaniu/DgDem0ria',fragment='Początek materiału: zestawienie form notatki (tabela, punkty, schemat).',minutes=10,task='Wybierz formę notatki do porównania dwóch rozwiązań. Zapisz dwie kolumny i uzasadnij wybór formy.',evidence='Uczeń wybiera tabelę lub inną uzasadnioną formę i podaje kryterium porównania.',note='Na warsztacie wykorzystujemy krótki fragment. Oprawa całego zasobu jest skierowana do młodszych uczniów.'),
 dict(id='sarmatyzm',kind='ogólne',subject='Język polski / historia, szkoła ponadpodstawowa',title='Orient a kultura sarmacka',url='https://zpe.gov.pl/a/wprowadzenie/D532MWKZ8',fragment='Wprowadzenie: trzy portrety i akapit o wpływach Wschodu i Zachodu.',minutes=10,task='Wskaż na ilustracjach dwa szczegóły stroju. Ułóż pytanie, które pomoże zbadać ich pochodzenie.',evidence='Dwie obserwacje i pytanie odróżnione od niepotwierdzonej hipotezy.',note='Dalsza część „Przeczytaj” może posłużyć do późniejszej weryfikacji hipotez.'),
 dict(id='procenty',kind='ogólne',subject='Matematyka / powtórzenie podstaw',title='Obliczenia procentowe. Część I',url='https://zpe.gov.pl/a/obliczenia-procentowe-czesc-i/DLiy0FUq5',fragment='Początkowe przypomnienie typów obliczeń procentowych; jeden przykład dobrany przez nauczyciela.',minutes=12,task='Po obejrzeniu przykładu oblicz 15% z 200 zł i wyjaśnij, od jakiej liczby liczysz procent.',evidence='30 zł oraz wskazanie 200 zł jako podstawy obliczenia.',note='Polecenie z kwotą 200 zł jest autorskim zadaniem warsztatu, nie cytatem z ZPE.'),
 dict(id='fotosynteza',kind='ogólne',subject='Biologia, szkoła ponadpodstawowa',title='Fotosynteza jako reakcja anaboliczna',url='https://zpe.gov.pl/a/wprowadzenie/D1ADAV8f6',fragment='Wprowadzenie: krótki opis fotosyntezy i lista celów.',minutes=10,task='Wypisz dwa substraty fotosyntezy i wskaż źródło energii. Powiedz, czego roślina nie pobiera w gotowej postaci.',evidence='Woda, dwutlenek węgla, energia światła; rozróżnienie substratów od wytwarzanych związków organicznych.',note='Zakres i język polecenia nauczyciel dostosowuje do swojej klasy.'),
 dict(id='poligrafia',kind='zawodowe',subject='Grafika i poligrafia / PGF.04',title='Przygotowanie materiałów do publikacji',url='https://zpe.gov.pl/a/przewodnik-dla-nauczyciela/D16iKRlNO',fragment='Przewodnik nauczyciela → Struktura e-materiału → „Przygotowanie publikacji elektronicznych” (plansza).',minutes=12,task='Wybierz jeden element planszy. Ułóż dwa pytania kontrolne dla osoby przygotowującej publikację.',evidence='Dwa pytania, odpowiedzi oparte na wskazanym elemencie oraz miejsce sprawdzenia.',note='Link otwiera przewodnik. Do własnej lekcji skopiuj adres wybranej planszy, a nie przewodnika.'),
 dict(id='transport',kind='zawodowe',subject='Transport / kierowca mechanik',title='Przygotowanie miejsca pracy kierowcy mechanika',url='https://zpe.gov.pl/a/przewodnik-dla-uczacego-sie/D1FAMRiKQ',fragment='Przewodnik → film instruktażowy „Przygotowanie miejsca pracy kierowcy mechanika”. Wybierz jedną czynność z filmu.',minutes=12,task='Po wybranym fragmencie zapisz dwie czynności przygotowawcze i uzasadnij ich kolejność.',evidence='Dwie czynności zgodne z filmem i uzasadnienie; nauczyciel weryfikuje poprawność zawodową.',note='To analiza materiału przy komputerze. Nie jest instruktażem uprawniającym do obsługi pojazdu.'),
 dict(id='logistyka',kind='zawodowe',subject='Logistyka / SPL.01',title='Dokumentacja magazynowa (obieg dokumentów)',url='https://zpe.gov.pl/a/wprowadzenie/DQ4p55Laj',fragment='Spis treści → „Dokumentacja w obrocie magazynowym” (infografika). Wybierz dwa dokumenty.',minutes=12,task='Dla dwóch wybranych dokumentów zapisz nazwę i sytuację, w której są potrzebne.',evidence='Dwie poprawne pary: dokument i zastosowanie; odniesienie do infografiki.',note='Materiał wskazuje stan prawny z 08.09.2023. Na warsztacie ćwiczymy wybór zasobu; aktualność przepisów zawodowych wymaga osobnej weryfikacji.'),
 dict(id='piekarstwo',kind='zawodowe',subject='Piekarstwo / SPC.03',title='Przygotowanie surowców i wytwarzanie ciast',url='https://zpe.gov.pl/a/podstawowe-zabiegi-przygotowawcze-surowcow-do-wytwarzania-ciast/DCrSaaRtm',fragment='Grafika interaktywna „Podstawowe zabiegi przygotowawcze surowców do wytwarzania ciast”; wybierz jeden zabieg.',minutes=10,task='Nazwij wybrany zabieg i wyjaśnij jego cel. Wskaż w materiale informację, na której opierasz odpowiedź.',evidence='Nazwa zabiegu, jego cel i odwołanie do opisu w grafice.',note='Dostępny jest także opis tekstowy. Nie trzeba przechodzić wszystkich zakładek.')]
# One content source for the website, print cards and trainer PDF.
D['fields']=[
 ['topic','Temat mojej lekcji','Np. Porównywanie dwóch sposobów notowania'],
 ['group','Przedmiot i klasa','Np. godzina wychowawcza, klasa 1 technikum'],
 ['need','Co chcę ułatwić uczniom?','Np. wybranie najważniejszych informacji'],
 ['goal','Cel: po tym fragmencie uczeń potrafi…','Jedna czynność, którą można zobaczyć lub usłyszeć'],
 ['title','Tytuł materiału ZPE','Tytuł wybranego zasobu'],
 ['url','Link do materiału ZPE','Wklej pełny adres zaczynający się od https://zpe.gov.pl/'],
 ['fragment','Dokładny fragment','Nagłówek, numer ćwiczenia albo początek i koniec filmu'],
 ['duration','Przebieg 10–15 minut','Np. 2 min pokaz, 5 min zadanie, 3 min sprawdzenie'],
 ['task','Polecenie dla ucznia','Co ma zrobić i co ma oddać lub powiedzieć?'],
 ['answer','Oczekiwana odpowiedź lub produkt','Po czym rozpoznasz poprawne wykonanie?'],
 ['check','Jak sprawdzę efekt?','Np. każdy pokazuje dwie odpowiedzi, omawiam jeden typowy błąd'],
 ['revision','Co poprawiam po próbie z partnerem?','Jedna konkretna zmiana polecenia lub czasu'],
 ['date','Kiedy wykorzystam tę lekcję?','Data lub dzień i klasa'],
 ['backup','Plan bez internetu','Np. wydruk wybranego fragmentu i to samo pytanie']]
D['example']={
 'topic':'Jak porównać dwie formy notatki?', 'group':'Godzina wychowawcza, klasa 1 technikum', 'need':'Uczniowie zapisują dużo tekstu, ale trudno im porównywać informacje.', 'goal':'Dobiera formę notatki do porównania dwóch rzeczy i uzasadnia wybór.', 'title':D['resources'][0]['title'],'url':D['resources'][0]['url'], 'fragment':'Początek materiału: zestawienie „Tabela / Punkty / Schemat”.', 'duration':'2 min pokaz form; 5 min zadanie; 3 min rozmowa w parze; 2 min sprawdzenie. Razem 12 min.', 'task':'Porównaj notatkę w punktach z tabelą. Zapisz po jednej zalecie każdej formy. Wybierz formę do porównania dwóch telefonów i uzasadnij wybór jednym zdaniem.', 'answer':'Dwie zalety związane z zastosowaniem. Np. punkty porządkują kolejne kroki, tabela ułatwia porównanie według tych samych cech. Wybór tabeli uzasadniony kryteriami porównania.', 'check':'Każdy zapisuje wybór i uzasadnienie. Czytam trzy różne odpowiedzi; sprawdzamy, czy uzasadnienie odnosi się do celu.', 'revision':'Doprecyzowanie: porównujemy telefony według ceny i czasu pracy baterii.', 'date':'Najbliższa godzina wychowawcza; przed wyjściem wpisuję konkretną datę.', 'backup':'Na kartce podaję trzy formy: tabela, punkty, schemat. Uczniowie wykonują to samo polecenie.'}
S=[]
def stage(title,time,goal,steps,done,hint,prep,say,run,error,help,extra='',link=None):
 S.append(dict(title=title,time=time,goal=goal,steps=steps,done=done,hint=hint,prep=prep,say=say,run=run,error=error,help=help,extra=extra,link=link))
stage('Po co mi ZPE?',[0,10],'Wybierzesz temat lekcji, do której przyda Ci się gotowy materiał.',[
 'Obejrzyj krótki przykład prowadzącego. Zobacz, co robi uczeń po otwarciu materiału.',
 'Pomyśl o jednej lekcji, którą poprowadzisz w najbliższym tygodniu.',
 'W „Mojej lekcji” zapisz temat i jedną rzecz, którą chcesz ułatwić uczniom.'
 ],'Mam temat i jedną potrzebę mojej klasy.','Wystarczy jedno zdanie. Możesz najpierw zapisać je na papierowej karcie.',
 'Otwórz wspólny materiał i gotowy przykład 12-minutowej lekcji. Rozdaj karty i sygnały pomocy.',
 'Dziś przygotujemy mały fragment prawdziwej lekcji. Nie trzeba poznawać całej platformy.',
 '0–3: pokaż fragment i gotowe polecenie. 3–6: uczestnicy krótko rozwiązują zadanie na papierze. 6–10: zapisują własny temat. Zapytaj: „Co w tym zasobie może zastąpić część Twoich przygotowań?”.',
 'Uczestnik próbuje zaplanować całą lekcję lub nie widzi związku ze swoim przedmiotem.',
 'Poproś o jedną trudność uczniów. Zaproponuj mały fragment: ilustracja plus pytanie.',link=['Otwórz „Moją lekcję”','#/moja-lekcja'])
stage('Spokojny start',[10,25],'Otworzysz ZPE i wrócisz do tej instrukcji.',[
 'Otwórz ZPE przyciskiem poniżej. Pojawi się druga karta przeglądarki.',
 'Na ZPE wybierz „Zaloguj się” i użyj własnych danych. Hasło wpisujesz wyłącznie w ZPE.',
 'Przewiń stronę kółkiem myszy lub dwoma palcami po płytce laptopa.',
 'Powiększ tekst w menu przeglądarki. Wróć do karty „ZPE bez pośpiechu”.'
 ],'Mam otwarte ZPE i potrafię wrócić do szkolenia. Wiem, czy jestem zalogowany/zalogowana.',
 'Karta przeglądarki to zakładka z tytułem u góry okna. Nie zamykaj programu. Jeśli nie możesz się zalogować, zgłoś pomoc i otwórz publiczny materiał.',
 'Przed wejściem uczestników sprawdź Wi-Fi, projektor i otwarcie strony. Przygotuj instrukcję odzyskania dostępu w oficjalnej pomocy ZPE.',
 'Teraz odnajdujemy dwie karty u góry. Ta karta to instrukcja, druga to miejsce ćwiczeń.',
 '10–13: pokaż pasek adresu i karty. 13–19: logowanie. 19–22: przewijanie i powiększenie. 22–25: powrót do instrukcji i rozpoznanie potrzeb pomocy.',
 'Adres wpisany w wyszukiwarkę zamiast paska; otwieranie wielu okien; brak hasła.',
 'Wskaż pasek adresu, bez przejmowania myszy. Nie resetuj hasła całej grupie; uczestnik może ćwiczyć na publicznym zasobie.',link=['Otwórz ZPE','https://zpe.gov.pl/'])
stage('Patrz, potem zrób',[25,45],'Znajdziesz i zapiszesz wspólny materiał.',[
 'Na ZPE otwórz Katalog. Wyszukaj „Gdzie tego szukać? O notowaniu”.',
 'Otwórz wynik o tym tytule. Odszukaj fragment o tabeli, punktach i schemacie.',
 'Jeśli jesteś zalogowany/zalogowana, kliknij serce „Dodaj do ulubionych”. W materiale wielostronicowym może być nad spisem treści.',
 'Otwórz Katalog → Ulubione i sprawdź, czy widzisz zapisany materiał. Otwórz go ponownie.'
 ],'Widzę materiał w „Ulubionych” i potrafię go stamtąd otworzyć.',
 'Drugie kliknięcie serca może usunąć zapis. Jeśli nie znajdujesz wyniku, skorzystaj z bezpośredniego linku. Brak konta pozwala oglądać materiał, ale nie zalicza zapisu.',
 'Sprawdź tę ścieżkę na koncie trenera. Przygotuj kartę 2 z ilustracjami oficjalnego poradnika.',
 'Teraz tylko patrzymy. Za chwilę każdy wykona te trzy kroki u siebie.',
 '25–28: pokaz wyszukiwania; 28–33: wykonanie. 33–36: pokaz serca i listy; 36–42: wykonanie. 42–45: sprawdź, czy uczestnicy wrócili do zasobu przez listę.',
 'Uczestnik zapisuje stronę w zakładkach przeglądarki albo szuka ikony bez zalogowania.',
 'Nazwij różnicę: „Ulubione ZPE są na Twoim koncie”. Wskaż oficjalną instrukcję. Przy czterech parach z tym samym problemem powtórz pokaz.',link=['Otwórz wspólny materiał',D['resources'][0]['url']])
stage('Powtórz z partnerem',[45,65],'Obie osoby przećwiczą powrót do zapisanego materiału.',[
 'Ustalcie, kto zaczyna. Osoba A obsługuje własny laptop, osoba B czyta pytania z karty 3.',
 'A otwiera Ulubione, odnajduje materiał i pokazuje wybrany fragment. B pyta: „Gdzie jesteś?” i „Jaki jest następny krok?”.',
 'Zamieńcie role. Teraz B wykonuje te same czynności na własnym laptopie.',
 'Każdy samodzielnie pokaże jeden fragment i powie, co mogliby z nim zrobić uczniowie.'
 ],'Każda osoba samodzielnie obsługiwała swój komputer. Oboje odnaleźliśmy materiał.',
 'Partner może wskazać krok w instrukcji, ale nie wykonuje go za Ciebie. Nie musicie pracować w tym samym tempie.',
 'Pary sąsiedzkie; karta 3. Przećwicz jedno pomocne pytanie na przykładzie.',
 'Pomoc oznacza wskazówkę. Myszkę trzyma osoba, która teraz ćwiczy.',
 '45–47: model pomocy. 47–54: A ćwiczy. 54–61: B ćwiczy. 61–65: indywidualny powrót i sprawdzenie efektu.',
 'Jedna osoba wykonuje wszystkie operacje na obu komputerach.',
 'Poproś o zmianę ról. Wróć do ostatniego kroku, który uczestnik wykonał samodzielnie.',extra='Szybciej gotowe? Wskaż drugi fragment tego samego materiału.')
stage('Przerwa',[65,75],'Odpoczniesz od ekranu.',['Zostaw otwarte karty.','Wstań, napij się wody i odpocznij od ekranu.','Wróć za 10 minut.'], 'Jestem gotowy/gotowa na dalszą część.', 'Nie musisz niczego nadrabiać w przerwie.', 'Zapowiedz godzinę powrotu.', 'Zostawiamy otwarte karty. Wracamy za dziesięć minut.', 'Przerwa dla całej grupy. Nie zastępuj jej obowiązkową pomocą techniczną.', 'Przerwa staje się kolejną częścią wykładu.', 'Pozostaw ekran z informacją o powrocie.')
stage('Znajdź coś dla siebie',[75,95],'Dobierzesz jeden materiał do swojej lekcji.',[
 'Otwórz zestaw ośmiu materiałów. Wybierz propozycję ogólną lub zawodową albo wyszukaj własny temat na ZPE.',
 'Sprawdź trzy rzeczy: zgodność z celem lekcji, poziom trudności i ilość treści.',
 'Otwórz jeden fragment, który uczeń może wykorzystać w kilka minut. Nie musisz przechodzić całego materiału.',
 'Zapisz zasób w Ulubionych. W swojej karcie zachowaj tytuł, link oraz nazwę fragmentu.'
 ],'Mam jeden zasób i wiem, dlaczego pasuje do mojego celu.',
 'Jeśli po 5 minutach nie masz wyniku, wybierz materiał z zestawu startowego. Link do przewodnika nauczyciela zamień na adres wybranego zasobu dla ucznia.',
 'Otwórz katalog startowy i wskaż podział ogólne/zawodowe. Przygotuj bezpośredni link do wspólnego przykładu.',
 'Szukamy jednego użytecznego fragmentu. Dobry wybór to taki, do którego potrafisz ułożyć konkretne zadanie.',
 '75–78: trzy kryteria wyboru. 78–90: wyszukiwanie. 90–95: zapis i krótkie uzasadnienie partnerowi.',
 'Przeglądanie kolejnych materiałów bez wyboru; wybór samego przewodnika zamiast zasobu ucznia.',
 'Po 5 minutach skieruj do zestawu startowego. Zapytaj: „Który fragment pokażesz uczniowi?”.',link=['Wybierz materiał','#/materialy'])
stage('Zbuduj fragment lekcji',[95,120],'Przygotujesz działanie ucznia na 10–15 minut.',[
 'Otwórz „Moją lekcję”. Najpierw przeczytaj gotowy przykład.',
 'Wpisz cel, dokładny fragment i polecenie. Zacznij polecenie od „porównaj”, „wybierz”, „wyjaśnij” albo „oblicz”.',
 'Dopisz oczekiwaną odpowiedź i sposób sprawdzenia wszystkich uczniów.',
 'Rozpisz 10–15 minut, łącznie ze sprawdzeniem. Zapisz plan bez internetu.'
 ],'Mam cel, link, fragment, polecenie, kryterium odpowiedzi i wykonalny czas.',
 '„Obejrzyj film” nie określa jeszcze efektu. Dodaj: „Po obejrzeniu zapisz dwie…”. Możesz wypełnić papierową kartę zamiast formularza.',
 'Wyświetl gotowy przykład. Przygotuj kartę 4 i formularz. Nie korzystaj z Kreatora ZPE.',
 'Najpierw zapiszmy, co uczeń zrobi. Dopiero potem sprawdzimy, czy materiał mu w tym pomoże.',
 '95–100: omów model. 100–110: własne polecenie i odpowiedź. 110–117: czas, sprawdzenie i plan awaryjny. 117–120: uczestnik sprawdza kompletność z listą.',
 'Polecenie ogranicza się do biernego oglądania; plan obejmuje zbyt wiele treści.',
 'Poproś o jeden widoczny produkt ucznia i usuń drugie zadanie. Zostaw czas na sprawdzenie.',link=['Uzupełnij „Moją lekcję”','#/moja-lekcja'])
stage('Druga przerwa',[120,130],'Odpoczniesz przed próbą własnego zadania.',['Sprawdź komunikat zapisu formularza.','Zostaw otwarte karty i odpocznij od ekranu.','Wróć za 10 minut.'],'Wiem, gdzie jest mój plan.','Jeśli zapis w przeglądarce nie działa, pobierz kopię tekstową lub skorzystaj z papieru.','Zapowiedz godzinę powrotu.','Za chwilę sprawdzimy nasze polecenia na drugiej osobie.','Przerwa; nie dodawaj nowych zadań.','Uczestnik zamyka formularz mimo komunikatu o błędzie zapisu.','Pomóż pobrać kopię, potem zapewnij czas na odpoczynek.')
stage('Przetestuj i popraw',[130,150],'Sprawdzisz, czy druga osoba rozumie Twoje polecenie.',[
 'Runda 1: A pokazuje materiał i polecenie. B wykonuje początek zadania, A obserwuje bez dopowiadania.',
 'B mówi: „Wiem, co mam zrobić…” oraz „Potrzebuję doprecyzowania…”. A zapisuje jedną zmianę.',
 'Po 10 minutach zamieńcie role.',
 'Każdy poprawia własne polecenie lub dobór fragmentu.'
 ],'Mam jedną poprawkę wynikającą z próby z partnerem.',
 'Partner z innego przedmiotu sprawdza zrozumiałość instrukcji. Nie ocenia fachowej poprawności treści, których nie zna.',
 'Pary mają otwarte własne plany. Podaj ramę informacji zwrotnej.',
 'Nie bronimy pierwszej wersji. Sprawdzamy, gdzie polecenie może być bardziej czytelne.',
 '130–138: wykonanie i komentarz do planu A. 138–140: poprawka. 140–148: plan B. 148–150: poprawka.',
 'Autor objaśnia wszystko ustnie, zanim partner spróbuje; dyskusja dotyczy gustu.',
 'Poproś o wykonanie wyłącznie według zapisu i wskazanie konkretnego niejasnego słowa.',link=['Popraw własny plan','#/moja-lekcja'])
stage('Co można zrobić dalej?',[150,160],'Rozpoznasz różnicę między linkiem a pracą w kursie.',[
 'Obejrzyj pokaz prowadzącego. Nie musisz powtarzać tych operacji na swoim koncie.',
 'Zobacz, jak materiał trafia do kursu i gdzie prowadzący odczytuje przykładowe odpowiedzi.',
 'Odpowiedz: czy samo skopiowanie adresu materiału daje mi raport ucznia?'
 ],'Wiem, że zwykły link nie oznacza przypisania zadania i zbierania wyników w kursie.',
 'Odpowiedź: nie. Kurs wymaga przygotowania i przypisania odpowiednich użytkowników. To temat na kolejne zajęcia.',
 'Przygotuj wcześniej kurs testowy z danymi demonstracyjnymi. Jeśli nie masz kont testowych, użyj oficjalnych ilustracji instrukcji i autorskiego przypadku poniżej. Nie prezentuj danych prawdziwych uczniów.',
 'To pokaz możliwości na przyszłość. Dzisiaj wystarczy Wasza gotowa lekcja.',
 '150–153: materiał → Udostępnij → Platforma edukacyjna → Nowy kurs. 153–156: wyjaśnij zapis roboczy, publikację i przypisanie. 156–159: Analiza i decyzja dydaktyczna. 159–160: pytanie kontrolne.',
 'Uczestnicy zaczynają samodzielnie tworzyć kursy i gubią główny cel.',
 'Zaproś do odłożenia myszy. Wyświetl link do poradnika na później.',link=['Zobacz pokaz i przykład raportu','#/pokaz'])
stage('Potrafię wrócić',[160,175],'Samodzielnie odtworzysz drogę do swojego zasobu.',[
 'Przejdź na stronę główną ZPE. Otwórz Katalog → Ulubione.',
 'Odnajdź swój materiał i otwórz wybrany fragment. Możesz korzystać ze ściągi.',
 'Pokaż partnerowi polecenie dla ucznia i powiedz, jak sprawdzisz efekt.',
 'W karcie 5 zaznacz rzeczywisty poziom samodzielności. Partner potwierdza wykonanie, nie robi zadania za Ciebie.'
 ],'Potrafię wrócić do zasobu albo wiem dokładnie, na którym kroku potrzebuję pomocy.',
 'To próba, nie konkurs. Jeśli korzystasz ze ściągi, zaznacz „ze ściągą”. Brak logowania oznacza, że zapis w Ulubionych wymaga jeszcze sprawdzenia.',
 'Karty 5, lista obserwacji trenera. Najpierw odwiedź stanowiska zgłaszające trudność.',
 'Zaczynamy od strony głównej. Tym razem każdy przechodzi drogę sam.',
 '160–168: indywidualna próba. 168–172: potwierdzenie partnera i pomoc. 172–175: ponowna próba trudnego kroku oraz samoocena.',
 'Za dowód uznaje się otwartą wcześniej kartę lub deklarację bez wykonania.',
 'Poproś o powrót przez listę Ulubionych. Zapisz potrzebę pomocy; nie oznaczaj automatycznie sukcesu.',link=['Otwórz sprawdzenie końcowe','#/sprawdzenie'])
stage('Mój następny krok',[175,180],'Zaplanujesz pierwsze wykorzystanie i powtórkę.',[
 'W „Mojej lekcji” wpisz datę i klasę pierwszego wykorzystania.',
 'Wydrukuj plan lub pobierz kopię tekstową. Sprawdź, czy zawiera link.',
 'Oddaj trenerowi papierową kartę końcową. Zapisy na tej stronie pozostają w Twojej przeglądarce.',
 'Po 2 dniach ponownie otwórz materiał. Po 7 dniach użyj go na lekcji lub przećwicz plan.'
 ],'Mam zachowany plan i konkretny termin wykorzystania.',
 'Nie musisz wdrażać wszystkich funkcji ZPE. Powtórz tę samą krótką drogę do jednego materiału.',
 'Przygotuj miejsce odbioru kart końcowych i termin zebrania informacji po 7–14 dniach.',
 'Dokończ zdanie: wykorzystam ten fragment w klasie… w dniu…',
 '175–177: termin. 177–179: zapis lub wydruk. 179–180: zebranie kart. Zapowiedz trzy pytania po wdrożeniu.',
 'Ogólna deklaracja „kiedyś skorzystam”; przekonanie, że trener automatycznie widzi formularz.',
 'Poproś o termin i pokaż pobieranie kopii. Wyjaśnij, że strona niczego nie wysyła.',link=['Zachowaj własny plan','#/moja-lekcja'])
D['stages']=S
D['short']=[['0–10','Po co mi ZPE?',1],['10–25','Spokojny start',2],['25–45','Patrz, potem zrób',3],['45–60','Powtórz z partnerem',4],['60–70','Przerwa',5],['70–85','Znajdź coś dla siebie',6],['85–105','Zbuduj fragment lekcji',7],['105–120','Potrafię wrócić i mój następny krok',11]]
D['preflight']=[
 '7 dni wcześniej: sprawdź przedmioty uczestników i osiem propozycji. Poproś o przyniesienie tematu najbliższej lekcji oraz sprawdzenie własnego logowania; nikt nie przekazuje trenerowi hasła.',
 '1–2 dni wcześniej: na koncie trenera przejdź wyszukiwanie, zapis sercem, Katalog → Ulubione i ponowne otwarcie. Porównaj ekran z kartą 2. Jeśli układ się zmienił, zaktualizuj instrukcję i ilustracje.',
 '1–2 dni wcześniej: przygotuj kurs demonstracyjny lub oficjalne ilustracje oraz przykład dydaktyczny. Sprawdź, czy wybrane zadanie rejestruje wyniki; nie każde starsze ćwiczenie musi to obsługiwać.',
 'W sali: sprawdź internet przy przewidywanym obciążeniu, gniazdka i widoczność projektora z ostatniego rzędu. Ustaw powiększenie pokazu tak, by dało się odczytać nazwy przycisków.',
 'Wydrukuj 40 kompletów kart, 40 kart sygnałowych i scenariusz trenera. Przygotuj 20 par sąsiedzkich, najlepiej o podobnych przedmiotach. Każdy ma własny laptop.',
 'Próba z dwiema osobami początkującymi: poproś o otwarcie strony, odnalezienie podpowiedzi, powrót z ZPE i zapis własnego planu. Zapisz miejsce zatrzymania oraz popraw instrukcję. Ta próba nie została wykonana przez autora pakietu.',
 'Tuż przed startem: otwórz pakiet lokalnie lub na przygotowanym serwerze. Rozdaj adres strony w formie krótkiej instrukcji organizacyjnej; nie zakładaj umiejętności odczytywania kodów QR.'
]
D['checks']=['Odnajduję materiał pasujący do tematu.','Zapisuję materiał w Ulubionych na swoim koncie.','Otwieram go ponownie przez Katalog → Ulubione.','Wskazuję dokładny fragment i polecenie dla ucznia.','Wyjaśniam, jak sprawdzę odpowiedź ucznia.']
D['statuses']=['Wykonuję samodzielnie','Wykonuję ze ściągą','Potrzebuję pomocy']
# Use plain hyphens in printed copy for portable rendering.
def norm(x):
 if isinstance(x,str): return x.replace('–','-').replace('—','-').replace('\u2011','-')
 if isinstance(x,list): return [norm(y) for y in x]
 if isinstance(x,dict): return {k:norm(v) for k,v in x.items()}
 return x
D=norm(D)
(ROOT/'content.json').write_text(json.dumps(D,ensure_ascii=False,indent=2))
(ROOT/'content.js').write_text('window.WORKSHOP = '+json.dumps(D,ensure_ascii=False)+';\n')
print('Created',len(S),'stages and',len(D['resources']),'resources')
