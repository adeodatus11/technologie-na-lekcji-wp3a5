"""Pakuje aktualny przewodnik bez wycofanych modułów slajdów."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root=Path(__file__).resolve().parents[1]
files=[root/name for name in ('index.html','guide.css','guide.js','guide-data.js')]
for folder in ('assets','materialy-zrodlowe','output/pdf'):
    files.extend(f for f in (root/folder).rglob('*') if f.is_file() and f.suffix in ('.png','.jpg','.pdf','.json'))
with ZipFile(root/'output/zpe-bez-pospiechu.zip','w',ZIP_DEFLATED) as archive:
    for file in sorted(files):
        archive.write(file,str(file.relative_to(root)))
print('Spakowano aktualną stronę, ilustracje i dokumenty.')
