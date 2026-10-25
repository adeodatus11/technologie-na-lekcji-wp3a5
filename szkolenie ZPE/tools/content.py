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
# Wstęp do warsztatu: od wykładu do pracy własnej ucznia. Ta sama treść trafia na stronę #/wstep i do scenariusza PDF.
M='https://metodyka.covepolska.pl/'
D['intro']={
 'title':'Lekcja, w której pracują uczniowie',
 'lede':'Laptop, iPad i ZPE nie zmieniają lekcji same z siebie. Zmieniają ją wtedy, gdy gotowy materiał przejmuje część podawania treści, a nauczyciel odzyskuje czas na rozmowę z uczniami w trakcie ich pracy.',
 'thesis':[
  dict(icon='🎤',title='Dziś najczęściej pracuje nauczyciel',text='W wykładzie uczniowie słuchają w jednym tempie. O tym, co zrozumieli, nauczyciel dowiaduje się zwykle dopiero z kartkówki.'),
  dict(icon='💻',title='Materiał może przejąć tłumaczenie',text='E-materiał ZPE ma tekst, ilustracje, filmy i ćwiczenia. Uczeń może go zatrzymać, cofnąć albo powiększyć. Część ćwiczeń sprawdza odpowiedź od razu.'),
  dict(icon='🧭',title='Nauczyciel odzyskuje czas',text='To nie jest przerwa dla nauczyciela. Chodzi między ławkami i siada przy uczniach, którzy utknęli. Na podstawie odpowiedzi całej klasy decyduje, co dalej.')],
 'caution':'Technologia nie jest metodą. Efekt zależy od zadania ucznia, informacji zwrotnej i od tego, co nauczyciel zrobi z odpowiedziami klasy. Przy każdej metodzie w katalogu COVE jest ocena siły dowodów.',
 'shifts':[
  ['Wszyscy słuchają w jednym tempie.','Każdy pracuje z materiałem we własnym tempie.','Uczeń może zatrzymać film, wrócić do akapitu lub przejść dalej. Kto skończy wcześniej, dostaje zadanie trudniejsze, a nie czeka.','360 e-learning; Mastery learning'],
  ['Pierwszy kontakt z treścią to wykład.','Pierwszy kontakt to krótki materiał, a lekcja służy pracy nad problemem.','Krótki film lub fragment e-materiału przed lekcją albo na jej początku. Na lekcji zostaje czas na zadania z nauczycielem.','Flipped classroom; Blended learning'],
  ['Nauczyciel sprawdza prace po tygodniu.','Uczeń dostaje informację zwrotną od razu.','Ćwiczenie z automatycznym sprawdzaniem pokazuje błąd w chwili jego popełnienia. Najczęstszy błąd nauczyciel omawia z całą klasą.','Przypominanie i powroty; Ocenianie kształtujące'],
  ['Jedna droga dostępu: słuchanie.','Kilka dróg do tego samego celu.','Ten sam zasób często ma tekst, grafikę i nagranie. Uczeń wybiera drogę dostępu, ale cel jest wspólny dla całej klasy.','UDL'],
  ['Nauczyciel przy tablicy.','Nauczyciel przy uczniach.','Gdy materiał tłumaczy, nauczyciel siada przy 3–4 wcześniej wybranych osobach i notuje, gdzie się zatrzymały.','Modelowanie; Metapoznanie'],
  ['Na koniec lekcji uczeń ma notatkę.','Na koniec lekcji uczeń ma decyzję lub produkt.','Materiał staje się źródłem danych. Uczniowie korzystają z niego, rozwiązując przypadek, porównując odpowiedzi w parze i rozmawiając całą klasą.','Problem, przypadek, projekt; Współpraca; Nauczanie dialogowe']],
 # Oś czasu dwóch wersji tej samej lekcji (40 minut roboczych). who: n = mówi nauczyciel, u = pracuje uczeń, p = para, k = rozmowa klasy.
 'compare':{
  'A':[[25,'n','Wykład z prezentacją; uczniowie przepisują slajdy'],[8,'n','Pytania do chętnych'],[5,'u','Jedno zadanie z podręcznika'],[2,'n','Zadanie domowe']],
  'B':[[4,'u','Przypomnij bez notatek'],[5,'n','Pokaz jednej decyzji'],[12,'u','Praca własna z ZPE'],[3,'k','Jedno pytanie do wszystkich'],[10,'p','Przypadek w parach'],[4,'k','Rozmowa klasy'],[2,'u','Karta wyjścia']]},
 'compare_note':'To plan, a nie pomiar. Porównanie pokazuje, kto pracuje w kolejnych minutach. W wersji B nauczyciel mówi do całej klasy przez około 9 minut, a przez 22 minuty pracy własnej i pracy w parach jest przy uczniach.',
 'lesson':{
  'label':'Technik logistyk, klasa 2: Który dokument magazynowy?',
  'context':'Lekcja 45 minut: około 5 minut organizacji, 40 minut pracy. Jeden laptop lub iPad na ucznia (możliwa też praca jednym urządzeniem w parze). Materiał ZPE „Dokumentacja magazynowa”, fragment „Dokumentacja w obrocie magazynowym” (infografika).',
  'url':'https://zpe.gov.pl/a/wprowadzenie/DQ4p55Laj',
  'goal':'Uczeń dobiera dokument (PZ, WZ, MM, RW, PW) do sytuacji magazynowej i uzasadnia decyzję przy przyjęciu dostawy z rozbieżnością.',
  'steps':[
   dict(min=4,title='Przypomnij bez notatek',method='Przypominanie i powroty',teacher='Wyświetla trzy krótkie pytania z poprzedniej lekcji o przyjęciu i wydaniu towaru. Po 3 minutach pokazuje klucz.',students='Odpowiadają na kartce bez zeszytu i ekranu. Sami sprawdzają odpowiedzi z kluczem i zaznaczają, czego nie pamiętali.',device='Urządzenia zamknięte.'),
   dict(min=5,title='Pokaz jednej decyzji',method='Modelowanie',teacher='Na jednym przykładzie myśli na głos: „Skąd przychodzi towar? Spoza firmy czy z jej wnętrza? Przyjmuję go czy wydaję?” Dochodzi w ten sposób do PZ.',students='Zapisują dwa pytania kontrolne: kierunek ruchu towaru (przyjęcie czy wydanie) oraz to, czy druga strona jest spoza firmy, czy z wewnątrz.',device='Ekran nauczyciela; uczniowie piszą na kartce.'),
   dict(min=12,title='Praca własna z ZPE',method='360 e-learning; UDL',teacher='Podaje bezpośredni link. Chodzi po sali z listą 3–4 osób, przy których siada najpierw. Notuje, na którym pytaniu kto się zatrzymał. Nie tłumaczy całej klasie.',students='Otwierają infografikę i we własnym tempie odpowiadają na pięć pytań o PZ, WZ, MM, RW i PW. Kto skończy, układa własną sytuację do jednego dokumentu dla kolegi.',device='Laptop lub iPad: powiększenie, powrót do fragmentu, opis tekstowy. Wydruk infografiki dla osób, którym ekran przeszkadza.'),
   dict(min=3,title='Jedno pytanie do wszystkich',method='Ocenianie kształtujące; Mastery learning',teacher='Pyta: „Magazynier wydaje materiał na produkcję we własnej firmie. Jaki dokument? A) WZ, B) RW, C) MM, D) PZ”. Wszyscy pokazują odpowiedź w tej samej chwili. Liczy odpowiedzi.',students='Podnoszą kartkę z literą. Poprawna odpowiedź to B, czyli RW. Typowy błąd to WZ, bo „wydanie” kojarzy się z wydaniem zewnętrznym.',device='Kartki z literami albo ankieta; urządzenia zamknięte.'),
   dict(min=10,title='Przypadek w parach',method='Problem, przypadek, projekt; Współpraca',teacher='Słucha par. Wybiera dwie pary, których decyzje się różnią. Jeśli w poprzednim kroku źle odpowiedziała więcej niż 1/3 klasy, przez pierwsze 3 minuty siada z tą grupą przy pytaniu „zewnętrzny czy wewnętrzny?”.',students='Przypadek: zamówiono 120 sztuk, przyjechało 112, a jeden karton z 12 sztukami jest uszkodzony. Każdy najpierw sam zapisuje decyzję (2 min). Potem para porównuje decyzje i zapisuje jedną różnicę i jedną zmianę.',device='Jedno urządzenie na parę, tylko do zajrzenia w infografikę; decyzja na papierze.'),
   dict(min=4,title='Rozmowa klasy',method='Nauczanie dialogowe',teacher='Dwie pary przedstawiają różne decyzje. Nauczyciel pyta o dane: „Ile sztuk przyjmujesz bez zastrzeżeń? Co musiałoby się zmienić, żebyś podpisał dokument dostawy bez adnotacji?”',students='Uzasadniają decyzję liczbami z przypadku. Klucz: 100 sztuk bez zastrzeżeń; 12 uszkodzonych do reklamacji; niedobór 8 sztuk zgłoszony dostawcy; adnotacja na dokumencie dostawy przed podpisem.',device='Ekrany zamknięte.'),
   dict(min=2,title='Karta wyjścia',method='Metapoznanie; Przypominanie i powroty',teacher='Zbiera karty. Zapowiada, że za tydzień lekcja zacznie się od trzech pytań o te dokumenty.',students='Kończą zdanie: „Po czym rozpoznam, czy to RW, czy WZ?”',device='Kartka.')],
  'note':'Szczegółowe zasady przyjęcia dostawy zależą od procedury firmy. Materiał ZPE podaje stan prawny z 08.09.2023. Przed lekcją nauczyciel przedmiotu zawodowego sprawdza aktualność przepisów i klucz. Pięć pytań z kluczem i pełny przypadek są w opisie metody 360 e-learning.',
  'decision':'Punkt decyzji: jeśli po 12 minutach więcej niż 1/3 klasy nie odpowiedziała na pięć pytań, rozdaj wydruk najważniejszego fragmentu i przejdź do pytania dla wszystkich.'},
 'variant':{
  'label':'Ten sam układ w przedmiocie ogólnym: matematyka, zmiana procentowa',
  'url':'https://zpe.gov.pl/a/obliczenia-procentowe-czesc-i/DLiy0FUq5',
  'rows':[
   ['Przypomnij bez notatek','10% z 50, 50% z 30, 1% z 400. Klucz: 5, 15, 4.'],
   ['Pokaz jednej decyzji','„Od jakiej liczby liczę procent?” Na przykładzie: 15% z 200 zł to 30 zł, bo podstawą jest 200 zł.'],
   ['Praca własna z ZPE','Przykłady z „Obliczeń procentowych”. Trzy zadania: 15% z 200 zł (30 zł); wzrost z 80 do 100 zł (o 25%); cena po obniżce o 20% wynosi 160 zł (przed obniżką: 200 zł).'],
   ['Jedno pytanie do wszystkich','Cena 100 zł wzrosła o 10%, potem spadła o 10%. Ile kosztuje teraz? A) 100 zł, B) 99 zł, C) 101 zł, D) 90 zł. Poprawnie: B, bo 110 · 0,9 = 99. Typowy błąd: 100 zł.'],
   ['Przypadek w parach','Kurtka za 250 zł potaniała o 20%, a po miesiącu nowa cena wzrosła o 20%. Czy wróciła do 250 zł? Klucz: 200 zł, potem 240 zł, więc nie wróciła.'],
   ['Rozmowa klasy','Dlaczego +20% nie znosi −20%? Para wyjaśnia to jednym zdaniem: drugi procent liczy się od innej podstawy.'],
   ['Karta wyjścia','„Zanim policzę procent, sprawdzam…”']]},
 'devices':[
  ['👥','Jedno urządzenie na ucznia lub parę','Przy pracy w parze ustal, kto obsługuje ekran, a kto zapisuje odpowiedzi. Po połowie zadania zamieńcie się rolami.'],
  ['🔗','Bezpośredni link','Podaj link do fragmentu na tablicy, w dzienniku albo w kursie ZPE. Wyszukiwanie materiału przez 30 osób zabiera dużą część lekcji.'],
  ['🔓','Bez logowania','Publiczny materiał ZPE otwiera się bez logowania. Logowanie uczniów jest potrzebne dopiero wtedy, gdy przypisujesz kurs i chcesz zobaczyć wyniki.'],
  ['🧪','Próba na tym samym sprzęcie','Na laptopie i iPadzie materiał otwiera się w przeglądarce. Przed lekcją sprawdź jedno ćwiczenie interaktywne na takim samym urządzeniu, jakiego używają uczniowie.'],
  ['🙈','Ekrany w dół','Na czas rozmowy w parach i rozmowy klasy ekrany są zamknięte: pokrywa laptopa w dół, iPad ekranem do stołu.'],
  ['📄','Plan B na papierze','Wydruk wybranego fragmentu i te same pytania. Lekcja ma się odbyć także wtedy, gdy nie działa sieć.']],
 'methods':[
  ['360 e-learning','method-1.html','Przechodzi krótki e-materiał z ćwiczeniami sprawdzanymi automatycznie, a potem rozwiązuje przypadek.','Chodzi po sali i notuje, kto utknął; siada przy tych osobach.','Nie nadaje się do wprowadzania całkiem nowej, trudnej treści.'],
  ['Blended learning','method-2.html','Przed warsztatem rozwiązuje krótki quiz, a po kilku dniach wraca do pytania powrotnego.','Prowadzi warsztat na tym, co wyszło w quizie.','Liczy się to, co uczeń robi w każdej fazie, a nie liczba kanałów.'],
  ['Flipped classroom','method-3.html','Przed lekcją ogląda krótki film lub fragment e-materiału i zapisuje jedno pytanie.','Lekcję przeznacza na zadania i rozmowę o trudnościach.','Główne ryzyko: uczniowie się nie przygotują. Plan B na papierze jest konieczny.'],
  ['Przypominanie i powroty','metoda-przypominanie-i-powroty.html','Rozwiązuje ćwiczenie bez notatek, a po tygodniu wraca do tej samej treści.','Omawia najczęstszy błąd klasy.','Samo kliknięcie wyniku w ćwiczeniu nie wystarczy.'],
  ['Modelowanie','metoda-modelowanie.html','Po krótkim pokazie rozwiązuje przykład z lukami, a potem samodzielne zadanie z materiału.','Pokazuje procedurę, nazywa decyzje i stopniowo wycofuje pomoc.','Sprawdź, czy e-materiał pokazuje kroki rozwiązania z komentarzem.'],
  ['Ocenianie kształtujące','metoda-ocenianie-ksztaltujace.html','Odpowiada na jedno pytanie w tej samej chwili co cała klasa i poprawia pracę po wskazówce.','Widzi odpowiedzi wszystkich i decyduje, co dalej.','Wynik to informacja do decyzji nauczyciela, a nie ocena do dziennika.'],
  ['Metapoznanie','metoda-metapoznanie.html','Przed zadaniem planuje, w trakcie sprawdza, a po zadaniu zapisuje, co zrobi inaczej.','Pokazuje na własnym przykładzie, jak planuje i sprawdza.','Refleksja dotyczy konkretnego zadania, a nie tego, „jak się uczyłeś”.'],
  ['Współpraca','metoda-wspolpraca.html','W grupie każdy otwiera inny fragment materiału i przynosi informację potrzebną do wspólnego produktu.','Przydziela role i sprawdza, czy każdy umie odpowiedzieć sam.','Samo posadzenie uczniów w grupie nie daje efektu.'],
  ['Nauczanie dialogowe','metoda-nauczanie-dialogowe.html','Na podstawie materiału zapisuje stanowisko i porównuje je z kolegą w parze.','Prowadzi rozmowę klasy pytaniami o dane.','Rozmowa odbywa się bez ekranów. Dowody są ograniczone.'],
  ['UDL','metoda-udl.html','Wybiera drogę dostępu: tekst, grafikę, nagranie, powiększenie. Cel jest taki sam dla całej klasy.','Usuwa jedną przewidywalną barierę wejścia.','UDL nie opiera się na „stylach uczenia się”; ta koncepcja nie ma poparcia w badaniach.'],
  ['Mastery learning','metoda-mastery-learning.html','Rozwiązuje krótką diagnozę. Kto opanował umiejętność, idzie dalej; kto nie, dostaje inne wyjaśnienie i ponowną próbę.','Ustala próg i siada z grupą, która potrzebuje wyjaśnienia.','Stosuj do jednego warunku, a nie do całego działu.'],
  ['Problem, przypadek, projekt','metoda-problem-projekt-przypadek.html','Analizuje dane z materiału i podejmuje decyzję albo wykonuje produkt.','Podaje dane etapami i pilnuje, by uczniowie uzasadniali decyzje.','Początkujący potrzebują danych i wsparcia; odkrywanie bez wsparcia słabo działa.']],
 'workshop':[
  ['Patrz, potem zrób','Modelowanie: krótki pokaz, potem własna próba.'],
  ['Powtórz z partnerem','Tutoring w parach: osoba wspierająca pyta, a ćwicząca sama obsługuje komputer.'],
  ['Przetestuj i popraw','Ocenianie kształtujące: informacja zwrotna od partnera i poprawka.'],
  ['Potrafię wrócić','Przypominanie: samodzielna próba bez prowadzącego.'],
  ['Mój następny krok','Powroty: ponowne otwarcie materiału po 2 dniach i jego użycie po 7 dniach.']],
 'who':['Kto pracuje w minutach 9–21?','W wersji A mówi nauczyciel, a klasa słucha. W wersji B każdy uczeń pracuje z materiałem we własnym tempie. W tym czasie nauczyciel siedzi przy 3–4 osobach, które utknęły, i notuje, na którym pytaniu się zatrzymały.'],
 'poll':dict(q='Cena 100 zł wzrosła o 10%, a potem spadła o 10%. Ile kosztuje teraz?',options=['100 zł','99 zł','101 zł','90 zł'],correct=1,explain='110 zł · 0,9 = 99 zł. Drugi procent liczymy od nowej podstawy, czyli od 110 zł, a nie od 100 zł.',after='Podczas wykładu nauczyciel nie wiedziałby, ile osób uważa, że cena wróciła do 100 zł. Pytanie do wszystkich pokazuje to w kilka sekund.'),
 'notes':{
  'teza':'Około 1 minuty. Powiedz: „Dziś nie będzie wykładu o platformie”. Każdą z trzech kart skomentuj jednym zdaniem. Podkreśl ramkę na dole: technologia nie jest metodą.',
  'dwie':'Minuty 1–3. Pokaż obie osie. Zapytaj salę: „Kto pracuje w minutach 9–21?”. Odpowiedź odsłoń dopiero po 2–3 głosach. Zwróć uwagę na najdłuższy odcinek wersji B: 12 minut pracy własnej z materiałem.',
  'poll':'Minuty 3–6. Rozdaj karteczki. Odlicz do trzech: wszyscy podnoszą kartkę z literą w tej samej chwili. Policz głosy A i B i dopiero wtedy kliknij „Pokaż odpowiedź”. Powiedz: „Podczas wykładu nie wiedziałbym, ile osób myśli, że 100 zł”.',
  'shifts':'Slajd do lektury po warsztacie. Na żywo wskaż jedno przesunięcie najbliższe grupie, np. „nauczyciel przy uczniach”. Gdy brakuje czasu, przejdź dalej.',
  'lekcjaB':'Pokaż, że 40 minut dzieli się na 7 krótkich etapów, a najdłuższy z nich to praca własna (12 min). Pełny opis jest na następnym slajdzie.',
  'kroki':'Kliknij etap 3 (praca własna) i etap 4 (pytanie do wszystkich). Pozostałe etapy uczestnicy przejrzą sami po warsztacie.',
  'mat':'Dla nauczycieli przedmiotów ogólnych: ten sam układ, inna treść. Rachunki są sprawdzone.',
  'sprzet':'Najważniejsze są dwie rzeczy: bezpośredni link i plan B na papierze. Resztę uczestnicy przeczytają sami.',
  'mapa':'Nie omawiaj kart po kolei. Powiedz: „Po warsztacie kliknijcie metodę, która brzmi znajomo. Każda ma gotowy plan lekcji”.',
  'warsztat':'Powiedz: „Dziś Państwo są uczniami w lekcji B”. Przejdź do zadania etapu 1 (minuty 6–10).'},
 'base':M}
D['deck']=dict(
 label='Warsztat dla nauczycieli · ZSZ5 · COVE Polska',
 sub='Lekcja, w której pracują uczniowie. Gotowy materiał, laptop lub iPad i czas na własną próbę.',
 outcomes=['Jeden wybrany materiał ZPE.','Polecenie gotowe dla Twoich uczniów.','Plan na 10–15 minut lekcji.','Ściąga, dzięki której wrócisz do materiału.'],
 facts=['180 minut z dwiema przerwami','20 par, każdy na własnym laptopie','Prezentacja i zadania w jednym miejscu'],
 end=[['Po 2 dniach','Otwórz materiał przez Katalog → Ulubione.'],['Po 7 dniach','Użyj fragmentu na lekcji albo przećwicz plan jeszcze raz.'],['Po 7–14 dniach','Powiedz organizatorowi, co zrobili uczniowie i jakiego wsparcia potrzebujesz.']])
S=[]
def stage(title,time,goal,steps,done,hint,prep,say,run,error,help,extra='',link=None):
 S.append(dict(title=title,time=time,goal=goal,steps=steps,done=done,hint=hint,prep=prep,say=say,run=run,error=error,help=help,extra=extra,link=link))
stage('Kto pracuje na lekcji?',[0,10],'Zobaczysz, jak ZPE i laptop mogą przenieść pracę z nauczyciela na ucznia, i wybierzesz temat swojej lekcji.',[
 'Obejrzyj dwie wersje tej samej lekcji: wykład i lekcję z pracą własną na ZPE. Sprawdź, kto pracuje w kolejnych minutach.',
 'Odpowiedz na jedno pytanie jak uczeń: na kartce, w tej samej chwili co wszyscy.',
 'Pomyśl o lekcji, którą poprowadzisz w najbliższym tygodniu. Którą jej część uczniowie mogliby wykonać sami z materiałem?',
 'W „Mojej lekcji” zapisz temat i jedną rzecz, którą chcesz ułatwić uczniom.'
 ],'Mam temat i wiem, którą część lekcji uczniowie mogą wykonać sami.','Pełny wstęp z przykładową lekcją i mapą 12 metod możesz przeczytać po warsztacie. Teraz wystarczy jedno zdanie, także na papierowej karcie.',
 'Wyświetl wstęp „Lekcja, w której pracują uczniowie” z porównaniem dwóch wersji lekcji. Przygotuj karteczki na odpowiedź, karty pracy i sygnały pomocy.',
 'Dziś nie będzie wykładu o platformie. Pokażę, jak może wyglądać lekcja, w której pracują uczniowie. Potem każdy przygotuje mały fragment takiej lekcji.',
 '0–3: pokaż porównanie dwóch lekcji i zapytaj: „Kto pracuje w minutach 9–21?”. 3–6: pytanie do wszystkich: „Cena 100 zł wzrosła o 10%, potem spadła o 10%. Ile kosztuje teraz?”. Wszyscy pokazują kartkę w tej samej chwili. Policz odpowiedzi 100 zł i 99 zł. Powiedz: „Podczas wykładu nie wiedziałbym, ile osób myśli, że 100”. 6–10: uczestnicy zapisują temat i część lekcji do pracy własnej.',
 'Uczestnik uznaje, że taka lekcja jest tylko dla informatyków, albo próbuje od razu zaplanować całą lekcję.',
 'Wskaż jeden etap przykładowej lekcji, np. 12 minut pracy z materiałem. Zaproponuj mały fragment: ilustracja i pytanie.',link=['Zobacz przykładową lekcję','#/wstep'])
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
D['short']=[['0–10','Kto pracuje na lekcji?',1],['10–25','Spokojny start',2],['25–45','Patrz, potem zrób',3],['45–60','Powtórz z partnerem',4],['60–70','Przerwa',5],['70–85','Znajdź coś dla siebie',6],['85–105','Zbuduj fragment lekcji',7],['105–120','Potrafię wrócić i mój następny krok',11]]
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
