from pathlib import Path
import json,html
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate,Paragraph,Spacer,PageBreak,Table,TableStyle,Image,KeepTogether,Flowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4
R=Path(__file__).resolve().parents[1]; D=json.loads((R/'content.json').read_text())
F=Path('/Users/maciejnajwer/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/libreoffice-headless/libreoffice/LibreOfficeDev.app/Contents/Resources/fonts/truetype')
# Both fonts cover Polish characters.
pdfmetrics.registerFont(TTFont('Body',str(F/'DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('Bold',str(F/'DejaVuSans-Bold.ttf')))
pdfmetrics.registerFontFamily('Body',normal='Body',bold='Bold',italic='Body',boldItalic='Bold')
GREEN=colors.HexColor('#225541'); INK=colors.HexColor('#202e29'); GRAY=colors.HexColor('#53635c'); LIGHT=colors.HexColor('#e8f0e7')
styles={
 'body':ParagraphStyle('body',fontName='Body',fontSize=10.5,leading=15.5,spaceAfter=8,textColor=INK),
 'small':ParagraphStyle('small',fontName='Body',fontSize=8.5,leading=12,spaceAfter=7,textColor=GRAY),
 'h1':ParagraphStyle('h1',fontName='Bold',fontSize=25,leading=30,spaceAfter=17,textColor=GREEN),
 'h2':ParagraphStyle('h2',fontName='Bold',fontSize=16,leading=21,spaceBefore=12,spaceAfter=10,textColor=INK,keepWithNext=True),
 'h3':ParagraphStyle('h3',fontName='Bold',fontSize=11.5,leading=16,spaceBefore=8,spaceAfter=5,textColor=GREEN,keepWithNext=True),
 'label':ParagraphStyle('label',fontName='Bold',fontSize=10,leading=14,spaceAfter=12,textColor=GREEN),
}
def p(t,style='body'):return Paragraph(html.escape(t).replace('\n','<br/>'),styles[style])
def rich(t,style='body'):return Paragraph(t,styles[style])
def url(label,u):return rich('<a href="'+html.escape(u,quote=True)+'" color="#225541"><u>'+html.escape(label)+'</u></a>','small')
def lines(n=1):
 return Table([['']]*n,colWidths=[491],rowHeights=[24]*n,style=TableStyle([('LINEBELOW',(0,0),(-1,-1),.45,colors.HexColor('#a8b6ad'))]))
def numbered(items):return [p(str(i+1)+'. '+t) for i,t in enumerate(items)]
def heading(label,title):return [p(label,'label'),p(title,'h1')]
def fig(name,maxh=170):
 im=Image(str(R/'assets'/name)); factor=min(491/im.imageWidth,maxh/im.imageHeight); im.drawWidth=im.imageWidth*factor; im.drawHeight=im.imageHeight*factor;im.hAlign='LEFT';return im
class NumberedCanvas(canvas.Canvas):
 def __init__(self,*a,**kw):super().__init__(*a,**kw);self.saved=[]
 def showPage(self):self.saved.append(dict(self.__dict__));self._startPage()
 def save(self):
  count=len(self.saved)
  for s in self.saved:
   self.__dict__.update(s);self.setFont('Body',8);self.setFillColor(GRAY);self.drawString(52,30,'ZPE bez pośpiechu | Materiały warsztatowe | 28.09.2026');self.drawRightString(A4[0]-52,30,f'{self._pageNumber} / {count}');super().showPage()
  super().save()
def build(name,pages,title):
 story=[]
 for i,pg in enumerate(pages):
  if i:story.append(PageBreak())
  story+=pg
 doc=SimpleDocTemplate(str(R/'output/pdf'/name),pagesize=A4,rightMargin=52,leftMargin=52,topMargin=48,bottomMargin=52,title=title,author='Opracowanie warsztatowe ZPE bez pośpiechu')
 doc.build(story,canvasmaker=NumberedCanvas)
 print(name,len(pages),'planned pages')
styles['body'].fontSize=12
styles['body'].leading=17
styles['small'].fontSize=9.5
styles['small'].leading=13
C=[]
C.append(heading('KARTA 1 / PODSTAWY','Pierwsze kroki')+[p('Cel: otworzyć ZPE, przełączyć kartę i wrócić do instrukcji.'),p('Przeglądarka','h3'),p('Program do otwierania stron, np. Chrome, Edge, Firefox lub Safari.'),p('Pasek adresu','h3'),p('Pole u góry okna. Kliknij je, wpisz zpe.gov.pl i naciśnij Enter. Link to klikany tekst lub przycisk otwierający stronę.'),p('Karta przeglądarki','h3'),p('Zakładka z tytułem u góry. W jednej karcie jest szkolenie, w drugiej ZPE. Kliknij tytuł karty, aby wrócić.'),p('Przećwicz','h2')]+numbered(['Przewijanie: kółko myszy lub dwa palce przesuwane po płytce laptopa.','Powiększanie: menu przeglądarki → Powiększenie → plus. Skrót: Ctrl i + (Mac: Cmd i +).','Kopiowanie adresu: kliknij pasek adresu i zaznacz go w całości (Ctrl+A). Skopiuj (Ctrl+C). Kliknij pole Link w planie i wklej (Ctrl+V). Na Macu użyj Cmd zamiast Ctrl.'])+[p('Jeśli coś się nie zgadza','h2'),p('Zatrzymaj się i wskaż krok instrukcji. Nie zamykaj całego programu. Hasło wpisuj samodzielnie, wyłącznie w ZPE.'),p('Sprawdzam: potrafię otworzyć ZPE i wrócić do karty szkolenia.','h3'),p('Mój temat następnej lekcji:'),lines(2)])
C.append(heading('KARTA 2A / WYSZUKIWANIE','Znajduję materiał')+numbered(['Na ZPE otwórz Katalog i pole wyszukiwania.','Wpisz „Gdzie tego szukać? O notowaniu”. Uruchom wyszukiwanie.','Otwórz wynik o tym tytule. Znajdź fragment o tabeli, punktach i schemacie.','Przy własnym temacie możesz wybrać etap i przedmiot. Gdy nie ma wyników, usuń część filtrów lub skróć hasło.'])+[fig('wyszukiwanie.png',230),p('Oficjalna ilustracja ZPE pokazuje przykład biologiczny. Na warsztacie wpisz tytuł o notowaniu. Nie przepisuj zapytania z ilustracji.','small'),url('Źródło ilustracji i instrukcji: Wyszukiwanie materiałów',D['sources'][0][1]),p('Ilustracja pochodzi z poradnika ZPE, pobrana 28.09.2026; nie z konta uczestnika. Prowadzący porównuje ją z ekranem przed szkoleniem.','small'),p('Mój temat wyszukiwania:'),lines(2),p('Gdy nie znajduję materiału','h2'),p('Po 5 minutach wybieram propozycję z zestawu startowego. Sprawdzam: cel, poziom trudności i wielkość fragmentu.')])
C.append(heading('KARTA 2B / ULUBIONE','Zapisuję i wracam')+numbered(['Zaloguj się na własne konto ZPE.','W materiale kliknij serce „Dodaj do ulubionych”. Drugie kliknięcie może usunąć zapis.','Otwórz Katalog → Ulubione. Znajdź tytuł i ponownie otwórz materiał.'])+[fig('ulubione-serce.png',165),p('1. Ikona serca zaznaczona na ilustracji poradnika.','small'),fig('ulubione-katalog.png',165),p('2. Powrót przez Katalog → Ulubione.','small'),url('Źródło obu ilustracji: oficjalna instrukcja Ulubione',D['sources'][1][1]),p('Pobrano 28.09.2026. W materiale wielostronicowym serce może być nad spisem treści. Operację na koncie sprawdza uczestnik z prowadzącym.','small'),p('Sprawdzam: zasób jest na mojej liście i otwieram go przez tę listę. Bez logowania mogę oglądać stronę, ale nie potwierdzam zapisu.','small')])
C.append(heading('KARTA 3 / PRACA W PARZE','Pomagamy sobie')+[p('Każdy obsługuje własny laptop. Zmieniamy role.'),p('Osoba ćwicząca','h2')]+numbered(['Otwiera Ulubione.','Wybiera zapisany materiał.','Pokazuje dokładny fragment.','Mówi, co mogliby zrobić z nim uczniowie.'])+[p('Osoba wspierająca pyta','h2')]+numbered(['Na którym kroku teraz jesteś?','Co widzisz na ekranie i jak to się nazywa?','Jaki następny krok wskazuje instrukcja?'])+[p('Wskaż instrukcję i daj czas na próbę. Nie przejmuj myszy ani nie odczytuj hasła. Po zmianie ról obie osoby mają wykonać procedurę.'),p('Próba własnego polecenia','h2'),p('Wiem, co mam zrobić…'),lines(),p('Potrzebuję doprecyzowania…'),lines(),p('Jedna zmiana w moim poleceniu:'),lines(2)])
card4=heading('KARTA 4A / MÓJ PLAN','Moja lekcja z ZPE')+[p('Plan na 10–15 minut. Uzupełnij krótko; kontynuacja na następnej stronie.')]
for key in ['topic','group','need','goal','title','url','fragment']:
 label=next(f[1] for f in D['fields'] if f[0]==key);card4 +=[p(label,'h3'),lines(2 if key=='fragment' else 1)]
C.append(card4)
card4b=heading('KARTA 4B / MÓJ PLAN','Zadanie i sprawdzenie')
for key in ['duration','task','answer','check','revision','date','backup']:
 label=next(f[1] for f in D['fields'] if f[0]==key);card4b +=[p(label,'h3'),lines(2 if key in ['task','answer'] else 1)]
card4b +=[p('Sprawdzam: mam cel, działający link, nazwę fragmentu, polecenie, odpowiedź i czas na sprawdzenie.','small')];C.append(card4b)
rows=[[p('Czynność','small'),p('S','small'),p('Ś','small'),p('P','small')]]+[[p(c,'small'),'○','○','○'] for c in D['checks']]
t=Table(rows,colWidths=[365,42,42,42]);t.setStyle(TableStyle([('FONTNAME',(0,0),(-1,-1),'Body'),('VALIGN',(0,0),(-1,-1),'TOP'),('BACKGROUND',(0,0),(-1,0),LIGHT),('LINEBELOW',(0,0),(-1,-1),.4,colors.HexColor('#cbd6cd')),('TOPPADDING',(0,0),(-1,-1),10),('BOTTOMPADDING',(0,0),(-1,-1),10)]))
C.append(heading('KARTA 5 / SPRAWDZENIE','Potrafię wrócić')+[p('Najpierw wykonaj czynność, potem zaznacz status. S = samodzielnie, Ś = ze ściągą, P = potrzebuję pomocy.'),t,Spacer(1,15),p('Partner potwierdza wykonanie (numery czynności, inicjały):'),lines(),p('Potrzebuję pomocy przy:'),lines(2),p('Wykorzystam materiał: klasa i termin'),lines(),p('Powrót po czasie','h2'),p('Po 2 dniach: znajdź zasób przez Ulubione.\nPo 7 dniach: użyj fragmentu na lekcji lub przećwicz go ponownie.\nPo 7–14 dniach: powiedz organizatorowi, czy wykorzystano materiał, co zrobili uczniowie i jakie wsparcie jest potrzebne.'),p('Oddaj tę kartę trenerowi, jeśli zbiera wyniki. Strona nie wysyła mu Twoich odpowiedzi.','small')])
signals=heading('DO WYCIĘCIA / SYGNAŁY NA STOLIK','Jak idzie praca?')+[p('Połóż na stoliku odpowiedni komunikat. Sygnał pomocy nie jest oceną.')]
for text in ['PRACUJĘ','GOTOWE','POTRZEBUJĘ POMOCY']:
 st=ParagraphStyle('signal',fontName='Bold',fontSize=24,leading=32,textColor=GREEN,alignment=1)
 box=Table([[Paragraph(text,st)]],colWidths=[491],rowHeights=[130]);box.setStyle(TableStyle([('BOX',(0,0),(-1,-1),1,GREEN),('VALIGN',(0,0),(-1,-1),'MIDDLE')]))
 signals +=[Spacer(1,25),box]
C.append(signals)
build('karty-uczestnika.pdf',C,'ZPE bez pośpiechu - Karty uczestnika')
styles['body'].fontSize=10.5
styles['body'].leading=15.5
styles['small'].fontSize=8.5
styles['small'].leading=12
T=[]
T.append(heading('SCENARIUSZ PROWADZĄCEGO','ZPE bez pośpiechu')+[p('180 minut zegarowych, w tym dwie przerwy. Około 40 osób, 20 par, jeden trener. Każdy pracuje na swoim laptopie i koncie ZPE.'),p('Efekt warsztatu','h2'),p('Uczestnik znajduje, zapisuje i ponownie otwiera materiał. Przygotowuje fragment lekcji na 10–15 minut: cel, polecenie, oczekiwaną odpowiedź i sposób sprawdzenia.'),p('Zasady prowadzenia','h2')]+numbered(['Pokaż jedną krótką czynność przez 2–4 minuty. Potem uczestnik wykonuje ją na swoim komputerze.','Pracuj z całą grupą przy czterech parach zgłaszających ten sam problem. Przy pojedynczej trudności udziel wskazówki przy stanowisku.','Zmieniaj role w parach. Osoba wspierająca wskazuje instrukcję, nie przejmuje myszy. Osoby szybsze układają drugie polecenie do tego samego materiału.','Dostosuj pomoc do obserwowanej trudności. Nie etykietuj uczestników według wieku ani szybkości pracy.','Oddziel brak logowania od braku umiejętności. Publiczne przeglądanie nie zalicza zapisu w Ulubionych.'])+[p('Co jest już sprawdzone','h2'),p('Kwerenda publicznych źródeł: 28.09.2026. Oficjalne instrukcje opisują serce i drogę Katalog → Ulubione. Ilustracje pochodzą z tych poradników.'),p('Do wykonania przez organizatora','h2'),p('Próba na zalogowanym koncie, test sieci i projektora w sali oraz pilotaż z dwiema osobami początkującymi. Autor pakietu nie wykonał tych prób. Nie są przedstawiane jako zakończone.')])
prep=heading('PRZED SZKOLENIEM','Lista przygotowania')
for x in D['preflight']:prep += [p('○ '+x)]
prep +=[p('Krótki protokół pilotażu','h2'),p('Osoba / etap / miejsce zatrzymania / potrzebna podpowiedź / poprawka instrukcji:'),lines(3)];T.append(prep)
rows=[[p('Minuty','small'),p('Etap','small'),p('Efekt','small')]]+[[p('-'.join(map(str,s['time'])),'small'),p(s['title'],'small'),p(s['done'],'small')] for s in D['stages']]
t=Table(rows,colWidths=[60,145,286],repeatRows=1);t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),LIGHT),('VALIGN',(0,0),(-1,-1),'TOP'),('LINEBELOW',(0,0),(-1,-1),.3,colors.HexColor('#cbd6cd')),('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6)]))
T.append(heading('HARMONOGRAM','Wersja 180 minut')+[t])
T.append(heading('KRÓTSZY WARIANT','Wersja 120 minut')+[p(r[0]+' min | '+r[1]) for r in D['short']]+[p('Dostosowanie pracy','h2'),p('Etap par: 2 min instrukcji, po 5 min na każdą rolę i 3 min na sprawdzenie. Zakończenie: 10 min samodzielnej próby i 5 min na termin użycia oraz zachowanie planu.'),p('Pomijamy drugą przerwę, osobny test poleceń w parach i pokaz kursów. Pozostają własna praca, przerwa, indywidualny sprawdzian wykonania i plan wdrożenia.'),p('Gdy grupa potrzebuje jeszcze więcej pomocy','h2'),p('Zachowaj przerwę i próbę samodzielną. Ogranicz wybór do jednego zasobu startowego, a oszczędzony czas przeznacz na ponowne wykonanie trudnego kroku. Nie obiecuj, że w tym samym czasie nauczysz wszystkich również tworzenia kursów.')])
for i,s in enumerate(D['stages']):
 page=heading(f'ETAP {i+1} / {s["time"][0]}-{s["time"][1]} MIN',s['title'])
 for label,key in [('Cel','goal'),('Przygotuj','prep'),('Powiedz','say'),('Poprowadź','run')]:page +=[p(label,'h3'),p(s[key])]
 page +=[p('Czynności uczestnika','h3')]+numbered(s['steps'])
 for label,key in [('Sprawdź efekt','done'),('Typowa trudność','error'),('Jak pomóc','help')]:page +=[p(label,'h3'),p(s[key])]
 T.append(page)
page=heading('PRZYKŁAD WYPEŁNIENIA','Gotowy fragment lekcji')
for k in ['topic','goal','fragment','duration','task','answer','check','revision','backup']:
 page +=[p(next(f[1] for f in D['fields'] if f[0]==k),'h3'),p(D['example'][k])]
page +=[url('Materiał źródłowy: Gdzie tego szukać? O notowaniu',D['example']['url'])];T.append(page)
T.append(heading('POKAZ DLA GRUPY','Kurs i informacja zwrotna')+[p('Uczestnicy obserwują. Wykorzystaj konta testowe lub oficjalne ilustracje. Nigdy nie prezentuj danych rzeczywistych uczniów.')]+numbered(['3 min: Udostępnij → Platforma edukacyjna → Nowy kurs.','3 min: wyjaśnij Zapisz / Opublikuj oraz przypisanie uczniów.','3 min: pokaż zakładkę Analiza i omów przypadek poniżej.','1 min: pytanie „Czy zwykły link daje raport ucznia?”. Odpowiedź: nie.'])+[p('Przypadek do rozmowy: dane fikcyjne','h2'),p('Pytanie: jaka forma notatki ułatwia porównanie dwóch rzeczy?\nA: „Tabela, bo widzę te same cechy obok siebie”.\nB: „Punkty, bo zawsze są najlepsze”.\nC: brak odpowiedzi.'),p('To autorski przykład dydaktyczny, nie zrzut ani odwzorowanie raportu ZPE.','small'),p('Decyzja nauczyciela','h2'),p('A uzasadnia wybór celem. B potrzebuje konkretnego porównania dwóch form. Przy C najpierw sprawdzamy dostęp i zrozumienie polecenia. Brak odpowiedzi nie dowodzi braku chęci, a czas wyświetlania nie mierzy uwagi.'),p('Instrukcje do pokazu','h2')]+[url(s[0],s[1]) for s in D['sources'][4:7]])
for kind in ['ogólne','zawodowe']:
 page=heading('ZESTAW STARTOWY', 'Materiały '+('ogólnokształcące' if kind=='ogólne' else 'zawodowe'))+[p('Czasy oznaczają proponowaną pracę z fragmentem, nie długość całego zasobu. Linki w PDF są klikalne.','small')]
 for r in [r for r in D['resources'] if r['kind']==kind]:
  page +=[p(r['title'],'h3'),p(r['subject']+' | '+str(r['minutes'])+' min','small'),p('Otwórz: '+r['fragment'],'small'),p('Polecenie: '+r['task'],'small'),p('Sprawdź: '+r['evidence'],'small'),p(r['note'],'small'),url('Otwórz źródło ZPE',r['url'])]
 T.append(page)
T.append(heading('EWALUACJA I AWARIE','Dowody wykonania')+[p('Zbierz karty 5. Dla każdej czynności policz osoby w statusach: samodzielnie / ze ściągą / potrzebuję pomocy. Puste odpowiedzi odnotuj osobno. Nie uznawaj samego zadowolenia za dowód umiejętności.'),p('Obserwuj osoby zgłaszające trudność i wybrane pozostałe stanowiska. Potwierdzenie partnera jest informacją pomocniczą. Strona nie przesyła odpowiedzi trenerowi.'),p('Arkusz zbiorczy trenera','h2')]+[p(f'{i+1}. {c}','small') for i,c in enumerate(D['checks'])]+[p('Dla każdego numeru: samodzielnie / ze ściągą / pomoc / brak odpowiedzi'),lines(5),p('Po 7-14 dniach','h2'),p('Organizator pyta: Czy wykorzystano materiał? Co zrobili uczniowie? Przy czym potrzebne jest dalsze wsparcie? Zapisz liczbę odpowiedzi i podaj mianownik, aby nie mylić braku odpowiedzi z brakiem wdrożenia.'),p('Awaria internetu','h2'),p('Skorzystaj z wydruków i autorskiego przykładu: tabela porównuje te same cechy, punkty porządkują kolejność, schemat pokazuje relacje. Polecenie: dobierz formę do porównania telefonów i do zapisania kolejności przygotowania stanowiska; uzasadnij. Kryterium: dobór pasuje do celu. Ćwiczenie papierowe nie zalicza obsługi ZPE.')])
for start in [0,6]:
 page=heading('KWERENDA / 28.09.2026','Źródła i metody')
 for s in D['sources'][start:start+6]:page +=[p(s[0],'h3'),p(s[2]),url(s[1],s[1])]
 page +=[p('To adaptacja metod do warsztatu dorosłych. Ilustracje w kartach pochodzą z oficjalnych poradników „Wyszukiwanie materiałów” i „Ulubione”; pobrane 28.09.2026. Nie wykonano operacji na zalogowanym koncie.','small')];T.append(page)
build('scenariusz-trenera.pdf',T,'ZPE bez pośpiechu - Scenariusz prowadzącego')
