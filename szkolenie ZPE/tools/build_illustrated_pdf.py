"""Zwarty przewodnik: oryginalna ilustracja na każdej stronie."""
from pathlib import Path
from html import escape
import json
import shutil
import subprocess
import re
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4

root=Path(__file__).resolve().parents[1]
fonts=Path('/usr/share/fonts/truetype/dejavu')
pdfmetrics.registerFont(TTFont('Body',str(fonts/'DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('Bold',str(fonts/'DejaVuSans-Bold.ttf')))
pdfmetrics.registerFontFamily('Body',normal='Body',bold='Bold')
styles={
 'title':ParagraphStyle('title',fontName='Bold',fontSize=23,leading=29,textColor=HexColor('#172e48'),spaceAfter=14),
 'body':ParagraphStyle('body',fontName='Body',fontSize=10,leading=15,textColor=HexColor('#172e48'),spaceAfter=10),
 'label':ParagraphStyle('label',fontName='Bold',fontSize=9,leading=14,textColor=HexColor('#0758bd'),spaceAfter=10),
 'source':ParagraphStyle('source',fontName='Body',fontSize=8,leading=12,textColor=HexColor('#536779'),spaceAfter=8),
}
pages=[
 ('ZPE w praktyce','Katalog: od czego zacząć?','katalog.jpg',
  ['W katalogu wybierz etap i przedmiot, a następnie przeglądaj tytuły oraz opisy. Ilustracja z poradnika pokazuje szkołę podstawową; na spotkaniu pracujemy w widoku odpowiednim dla szkoły ponadpodstawowej.',
   'Zwróć uwagę na pole zapytania, filtry oraz rozróżnienie materiałów edukacyjnych i scenariuszy z poradnikami. Gdy wyników jest za dużo, dodawaj ograniczenia kolejno. Gdy ich brakuje, usuń ostatni filtr.'],0,7),
 ('Wyszukiwanie','Hasło, etap i przedmiot','wyszukiwarka.jpg',
  ['Zacznij od nazwy pojęcia: „obliczenia procentowe” albo „dokumentacja magazynowa”. Uruchom wyszukiwanie lupką, a potem doprecyzuj etap oraz przedmiot.',
   'Nie ma wyniku? Skróć zapytanie lub użyj synonimu. „Magazyn”, „przyjęcie towaru” i „dokument PZ” to różne punkty wejścia. Nie zakładamy identycznej listy wyników przy każdym wyszukiwaniu.'],0,8),
 ('Wybór fragmentu','Najpierw treść, potem zapis','moje-materialy.jpg',
  ['Sprawdź odbiorcę, poziom języka, wymagane wiadomości i aktualność informacji. Otwórz multimedia na urządzeniu, którego będzie używać klasa. Z całego zasobu wystarczy wybrać przydatny fragment.',
   'Ilustracja pokazuje „Moje materiały”. Poradnik prowadzi przez ten moduł do udostępnionych zasobów i wyników. Samo otwarcie publicznego adresu nie tworzy przypisanej pracy.'],2,13),
 ('Ulubione','Zachowaj materiał i wróć do niego','../ulubione-serce.png',
  ['Na zalogowanym koncie użyj serca „Dodaj do ulubionych”. Drugie kliknięcie może cofnąć zapis. Następnie otwórz listę Ulubionych i sprawdź ponowne wejście do zasobu.',
   'Poradniki pokazują różne wejścia do listy: przez „Moje materiały” albo Katalog. Zakładka przeglądarki jest odrębnym sposobem zapisu. Link do całego zasobu nie zawsze wskazuje dokładną podsekcję.'],None,None),
 ('Udostępnianie','Grupa, nowa grupa czy kod?','udostepnianie.png',
  ['Istniejąca grupa jest przydatna, gdy wracasz do tych samych odbiorców. Nowa grupa może posłużyć do kolejnych udostępnień. Kod opisano jako sposób jednorazowego dołączania bez wpisywania adresów e-mail.',
   'Zwykła kopia adresu publicznego materiału nie gwarantuje raportu. Do sprawdzania wyników potrzebna jest odpowiednio przypisana praca i ćwiczenie obsługujące zapis odpowiedzi. Przetestuj to na kontach testowych.'],2,3),
 ('Karty pracy','Od tytułu do gotowej karty','karta-pracy.png',
  ['Generator Kart Pracy pozwala tworzyć układ z tekstem i grafikami, dodawać strony, zapisywać, pobierać i udostępniać materiał. W formularzu wymagany jest tytuł; opis, klasa i przedmiot ułatwiają porządkowanie.',
   'Po utworzeniu karty dodaj elementy, sprawdź ich ułożenie w podglądzie i zapisz. To narzędzie do własnego materiału — nie warunek użycia gotowego zasobu ZPE.'],3,4),
 ('Kreator','Struktura własnego e-materiału','kreator.png',
  ['Kreator łączy tekst, multimedia i ćwiczenia interaktywne. Poradnik opisuje projekty jedno- i wielostronicowe oraz typy „Lekcja” i „Kartkówka”. Najpierw powstaje projekt, potem struktura i treść.',
   'Na ilustracji widać sekcje dokumentu. Czytelny podział pomaga odbiorcy odnaleźć treść i sprawdzenie. Zacznij od jednej sekcji i jednego ćwiczenia; przed udostępnieniem obejrzyj podgląd.'],9,8),
 ('Ścieżki nauki','Kilka materiałów w ustalonej kolejności','sciezka.jpg',
  ['Ścieżka pozwala zestawić gotowe zasoby i własne materiały oraz ustalić warunki przechodzenia dalej. Ilustracja pokazuje wybór z własnych materiałów, Ulubionych i katalogu.',
   'Zapisz ścieżkę, udostępnij ją i sprawdź działanie z perspektywy odbiorcy. Sam procent przeczytanego zasobu nie dowodzi zrozumienia — potrzebna jest odpowiedź albo wykonanie działania.'],4,2),
 ('Materiał porównawczy','Podstawa programowa: zakres potwierdzenia','podstawa.jpg',
  ['To archiwalny ekran języka polskiego w szkole podstawowej. Potwierdza opis funkcji w poradniku, ale nie dowodzi jej aktualnej dostępności dla liceum i technikum.',
   'W widoku ponadpodstawowym najpierw sprawdź, czy filtr w ogóle jest dostępny dla wybranego przedmiotu. Jeśli go nie ma, korzystaj z hasła i katalogu, a zgodność z wymaganiami oceniaj na podstawie treści. Materiały zawodowe wymagają osobnego sprawdzenia.'],0,9),
]
data=json.loads((root/'content.json').read_text())
story=[]
for n,(title,subtitle,file,body,guide,page) in enumerate(pages):
    if n:story.append(PageBreak())
    story += [Paragraph(escape(f'{n+1:02} / {len(pages):02}   •   {subtitle}'),styles['label']),Paragraph(escape(title),styles['title'])]
    image=Image(str(root/'assets/przewodnik'/file))
    scale=min(490/image.imageWidth,355/image.imageHeight)
    image.drawWidth=image.imageWidth*scale
    image.drawHeight=image.imageHeight*scale
    image.hAlign='LEFT'
    story += [image,Spacer(1,15)]
    if guide is not None:
        g=data['pdf_guides'][guide]
        source=f'{g["title"]}, s. {page}. Ekran z poradnika; aktualny interfejs może się różnić.'
    else:source='Publiczna instrukcja ZPE „Ulubione”. Ilustracja dołączona wcześniej do pakietu szkoleniowego.'
    story.append(Paragraph(escape(source),styles['source']))
    story.extend(Paragraph(escape(text),styles['body']) for text in body)

output=root/'output/pdf/przewodnik-zpe-ilustrowany.pdf'
def footer(canvas,doc):
    canvas.setFont('Body',8)
    canvas.setFillColor(HexColor('#536779'))
    canvas.drawString(48,27,'ZPE w praktyce • Przewodnik nauczyciela')
    canvas.drawRightString(A4[0]-48,27,str(doc.page))
SimpleDocTemplate(str(output),pagesize=A4,leftMargin=48,rightMargin=48,topMargin=40,bottomMargin=46,title='ZPE w praktyce — ilustrowany przewodnik',author='Opracowanie szkoleniowe').build(story,onFirstPage=footer,onLaterPages=footer)
for old in ['karty-uczestnika.pdf','scenariusz-trenera.pdf']:shutil.copyfile(output,root/'output/pdf'/old)
info=subprocess.check_output(['pdfinfo',str(output)],text=True)
assert int(re.search(r'Pages:\s+(\d+)',info).group(1))==len(pages),'Nieoczekiwana liczba stron'
image_list=subprocess.check_output(['pdfimages','-list',str(output)],text=True)
image_pages={int(line.split()[0]) for line in image_list.splitlines()[2:] if len(line.split())>2 and line.split()[2]=='image'}
assert image_pages==set(range(1,len(pages)+1)),'Brak ilustracji na stronie PDF'
print('Zbudowano',output.name,'— ilustracja na każdej stronie.')
