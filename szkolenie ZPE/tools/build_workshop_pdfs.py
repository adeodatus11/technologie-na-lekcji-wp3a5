"""Wydruki krótkiego warsztatu, bez publicznego harmonogramu."""
from pathlib import Path
from html import escape
import json
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4
root=Path(__file__).resolve().parents[1]
d=json.loads((root/'content.json').read_text())
pdfmetrics.registerFont(TTFont('Polish','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
styles=getSampleStyleSheet()
for s in styles.byName.values():
    s.fontName='Polish'
    s.leading=16
def p(text,style='BodyText'): return Paragraph(escape(text),styles[style])
def build(name,story):
    dest=root/'output/pdf'/name
    dest.parent.mkdir(parents=True,exist_ok=True)
    SimpleDocTemplate(str(dest),pagesize=A4,title=name).build(story)
    print('Zbudowano',name)
import subprocess
source=root/'presentation.js'
program="const fs=require('fs'),vm=require('vm');const s=fs.readFileSync(process.argv[1],'utf8').split('const SEARCH_MORE')[0];process.stdout.write(vm.runInNewContext(s+';JSON.stringify(PRESENTATION)'));"
slides=json.loads(subprocess.check_output(['node','-e',program,str(source)]))
keys={'katalog','zapytanie','filtry','wyniki','fragment','ocena','ulubione','link'}
cards=[p('Wyszukiwanie materiałów ZPE','Title')]
for key,title,text in slides:
    if key in keys: cards += [p(title,'Heading1'),p(text)]
build('karty-uczestnika.pdf',cards)
story=[p('Przewodnik pokazu ZPE','Title')]
for key,title,text in slides: story += [p(title,'Heading1'),p(text)]
build('scenariusz-trenera.pdf',story)
