"""Pakiet MD, oryginalne logotypy, ilustracje i QR do rozdziału Kreatora."""
from pathlib import Path
from zipfile import ZipFile,ZIP_DEFLATED
import hashlib,json,shutil
from reportlab.graphics.barcode.qr import QrCodeWidget
from PIL import Image,ImageDraw

ROOT=Path(__file__).resolve().parents[1]
PACK=ROOT/'pakiet-dla-nauczycieli'
QR_URL='https://metodyka.covepolska.pl/szkolenie%20ZPE/#kreator'
BRAND=json.loads((ROOT/'project-branding.json').read_text())
logos=[('zpe-bez-pospiechu.png',BRAND['logos']['workshop'],'ZPE bez pośpiechu — ZSZ5'),('cove-polska.png',BRAND['logos']['cove'],'COVE Polska'),('win4smes.png',BRAND['logos']['win'],'WIN4SMEs'),('dofinansowane-ue.png',BRAND['logos']['eu'],'Dofinansowane przez Unię Europejską'),('innowacyjna-lekcja.png','assets/innowacyjna-lekcja-logo.png','Innowacyjna lekcja w praktyce — dodatkowy znak strony')]
illustrations=[('katalog-zpe.jpg','assets/przewodnik/katalog.jpg','materialy-zrodlowe/01-poradnik-praktyczny-zpe.pdf',7,'Przykład katalogu z dokumentu; układ filtrów porównaj z obecnym ZPE.'),('wyszukiwarka-zpe.jpg','assets/przewodnik/wyszukiwarka.jpg','materialy-zrodlowe/01-poradnik-praktyczny-zpe.pdf',8,'Przykład wyszukiwania z poradnika.'),('ulubione-serce.png','assets/ulubione-serce.png','https://zpe.gov.pl/a/ulubione/DE1FP3VBC',None,'Ikona serca z publicznej instrukcji Ulubione.'),('panel-ucznia.png','assets/przewodnik/odpowiedzi-przyklad.png','materialy-zrodlowe/03-udostepnianie-i-wyniki.pdf',17,'Starszy interfejs: przykład panelu ucznia, nie ścieżka wejścia do obecnej Analizy.'),('odpowiedzi-w-zadaniach.png','assets/przewodnik/cwiczenie-odpowiedzi-przyklad.png','materialy-zrodlowe/03-udostepnianie-i-wyniki.pdf',18,'Starszy interfejs: przykład zaznaczonych odpowiedzi, nie nawigacja obecnego kursu.')]
records=[]
for name,source,label in logos:
 dest=PACK/'logotypy'/name;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(ROOT/source,dest)
 records.append(dict(file=str(dest.relative_to(PACK)),source=source,label=label,sha256=hashlib.sha256(dest.read_bytes()).hexdigest(),unchanged=True))
for name,source,document,page,scope in illustrations:
 dest=PACK/'ilustracje'/name;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(ROOT/source,dest)
 document_url=document if document.startswith('https:') else 'https://metodyka.covepolska.pl/szkolenie%20ZPE/'+document
 records.append(dict(file=str(dest.relative_to(PACK)),source=source,document=document_url,page=page,scope=scope,sha256=hashlib.sha256(dest.read_bytes()).hexdigest(),unchanged=True))
(PACK/'zrodla-grafik.json').write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n')
(PACK/'dofinansowanie-i-zastrzezenie.md').write_text('# Informacja o dofinansowaniu\n\nSzkolenie dla nauczycieli: ZPE bez pośpiechu.\n\nAutor: '+BRAND['author']+'. Projekt '+BRAND['project']+' · COVE Polska · '+BRAND['school']+'.\n\n'+BRAND['funding']+'\n')
# QR: czarny na białym, margines czterech modułów, bez logotypu zasłaniającego kod.
qr=QrCodeWidget(QR_URL,barLevel='M');qr.qr.make();modules=qr.qr.modules;n=len(modules);margin=4;unit=12;side=(n+2*margin)*unit
png=Image.new('RGB',(side,side),'white');draw=ImageDraw.Draw(png)
rects=[]
for row,values in enumerate(modules):
 for col,dark in enumerate(values):
  if dark:
   x=(col+margin)*unit;y=(row+margin)*unit;draw.rectangle((x,y,x+unit-1,y+unit-1),fill='black');rects.append(f'<rect x="{col+margin}" y="{row+margin}" width="1" height="1"/>')
qr_dir=PACK/'qr';qr_dir.mkdir(exist_ok=True);png.save(qr_dir/'kreator-rozdzial-9.png')
(qr_dir/'kreator-rozdzial-9.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n+8} {n+8}" shape-rendering="crispEdges"><rect width="100%" height="100%" fill="white"/><g fill="black">'+''.join(rects)+'</g></svg>\n')
(qr_dir/'adres-kreatora.txt').write_text(QR_URL+'\n')
(PACK/'README.md').write_text('''# ZPE bez pośpiechu — pakiet dla nauczycieli

- `szkolenie-zpe-dla-nauczycieli.md`: główny materiał, gotowy do dalszej redakcji i składu.
- `logotypy/`: niezmienione pliki PNG ze strony projektu, z zachowaniem przezroczystości.
- `ilustracje/`: pięć przykładów ekranów; w głównym MD użyto trzech, dwa pozostałe są do wyboru przy składzie.
- `qr/`: kod QR w PNG i SVG oraz pełny adres do rozdziału 9 — Kreatora.
- `dofinansowanie-i-zastrzezenie.md`: pełna informacja o dofinansowaniu i poglądach autora.
- `zrodla-grafik.json`: pochodzenie, strony PDF-ów, ograniczenia aktualności oraz sumy kontrolne plików.

Zachowaj układ folderów, aby ilustracje i logotypy wyświetlały się w materiale MD. Otwórz go w edytorze z podglądem Markdown.

Zrzuty panelu ucznia i odpowiedzi pochodzą ze starszego PDF-u. Służą do pokazania rodzaju danych; nie pokazują obecnej ścieżki kurs → Analiza. Nie używaj ich jako aktualnej instrukcji nawigacji. Nie dołączono dawnych ekranów udostępniania grupie lub kodem.

Gotowe lekcje w tej ścieżce to materiały ZPE. Zewnętrzna strona wskazana linkiem nie zaczyna automatycznie raportować odpowiedzi w ZPE.

Logotypy skopiowano bez modyfikacji z obecnego repozytorium. Znak ZPE bez pośpiechu łączy nazwę szkolenia i ZSZ5; nie jest osobnym oficjalnym znakiem ministerialnej platformy.
''')
zip_path=ROOT/'output/zpe-pakiet-dla-nauczycieli.zip'
with ZipFile(zip_path,'w',ZIP_DEFLATED) as archive:
 for file in sorted(PACK.rglob('*')):
  if file.is_file():archive.write(file,str(Path('zpe-pakiet-dla-nauczycieli')/file.relative_to(PACK)))
print('Zbudowano pakiet dla nauczycieli:',zip_path)
