"""Wyodrębnia niezmienione grafiki z poradników PDF (narzędzie pdfimages)."""
from pathlib import Path
from tempfile import TemporaryDirectory
import subprocess
import shutil
import json
import hashlib

root=Path(__file__).resolve().parents[1]
# Nazwa obrazu, PDF, fizyczna strona PDF, numer obrazu na stronie, format.
items=[
 ('katalog.jpg','01-poradnik-praktyczny-zpe.pdf',7,1,'-j'),
 ('wyszukiwarka.jpg','01-poradnik-praktyczny-zpe.pdf',8,0,'-j'),
 ('podstawa.jpg','01-poradnik-praktyczny-zpe.pdf',9,0,'-j'),
 ('udostepnianie.png','03-udostepnianie-i-wyniki.pdf',3,2,'-png'),
 ('moje-materialy.jpg','03-udostepnianie-i-wyniki.pdf',13,2,'-j'),
 ('karta-pracy.png','04-generator-kart-pracy.pdf',4,3,'-png'),
 ('kreator.png','10-kreator-e-materialow.pdf',8,2,'-png'),
 ('sciezka.jpg','05-sciezki-nauki.pdf',2,2,'-j'),
]
dest=root/'assets/przewodnik'
dest.mkdir(exist_ok=True)
manifest=[]
for name,pdf,page,index,fmt in items:
    with TemporaryDirectory(prefix='zpe-images-') as temp:
        prefix=Path(temp)/'image'
        subprocess.run(['pdfimages','-f',str(page),'-l',str(page),fmt,str(root/'materialy-zrodlowe'/pdf),str(prefix)],check=True)
        src=Path(str(prefix)+f'-{index:03}'+Path(name).suffix)
        shutil.copyfile(src,dest/name)
    manifest.append(dict(file=name,source=pdf,page=page,image_index=index,sha256=hashlib.sha256((dest/name).read_bytes()).hexdigest()))
(dest/'sources.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
print('Wyodrębniono',len(items),'grafik bez modyfikacji ekranów.')
