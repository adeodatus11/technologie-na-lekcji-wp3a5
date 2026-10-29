"""Pełna publikacja A4: okładka, treść strony, zamknięcie projektowe."""

import json
import re
import shutil
import subprocess
from html import escape
from io import BytesIO
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from pypdf.generic import NameObject, TextStringObject
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[1]
BRAND = json.loads((ROOT / "project-branding.json").read_text())
for name, file in [("Body", "DejaVuSans.ttf"), ("Bold", "DejaVuSans-Bold.ttf")]:
    pdfmetrics.registerFont(TTFont(name, str(Path("/usr/share/fonts/truetype/dejavu") / file)))
pdfmetrics.registerFontFamily("Body", normal="Body", bold="Bold")
INK = HexColor("#172e48")
BLUE = HexColor("#0758bd")
MUTED = HexColor("#536779")
QR_TARGETS = [
    ("COVE Polska", "https://covepolska.pl/"),
    ("WIN4SMEs", "https://win4smes.eu/"),
    ("Baza metodyczna", "https://metodyka.covepolska.pl/"),
]


def text(canvas, value, x, top, width, size=11, leading=None, bold=False, color=INK):
    style = ParagraphStyle(
        "text",
        fontName="Bold" if bold else "Body",
        fontSize=size,
        leading=leading or size * 1.5,
        textColor=color,
    )
    paragraph = Paragraph(value, style)
    _, height = paragraph.wrap(width, 1000)
    paragraph.drawOn(canvas, x, top - height)
    return top - height


def logo(canvas, key, x, y, width, height):
    image = ImageReader(str(ROOT / BRAND["logos"][key]))
    w, h = image.getSize()
    factor = min(width / w, height / h)
    canvas.drawImage(
        image,
        x + (width - w * factor) / 2,
        y + (height - h * factor) / 2,
        width=w * factor,
        height=h * factor,
        mask="auto",
    )


def project_marks(canvas):
    canvas.setStrokeColor(HexColor("#d1dbe4"))
    canvas.setLineWidth(0.5)
    canvas.line(48, 127, A4[0] - 48, 127)
    logo(canvas, "cove", 48, 75, 105, 37)
    logo(canvas, "win", 205, 77, 38, 32)
    logo(canvas, "eu", 330, 75, 170, 36)
    text(canvas, escape(BRAND["funding"]), 48, 62, 499, size=7, leading=9.2, color=MUTED)


def make_page(draw):
    output = BytesIO()
    canvas = Canvas(output, pagesize=A4, initialFontName="Body", lang="pl-PL", pageCompression=1)
    draw(canvas)
    canvas.showPage()
    canvas.save()
    output.seek(0)
    return PdfReader(output).pages[0]


def cover(canvas):
    logo(canvas, "workshop", 48, 650, 340, 145)
    canvas.setFillColor(BLUE)
    canvas.rect(48, 597, 50, 4, fill=1, stroke=0)
    text(canvas, "ZPE w praktyce", 48, 569, 510, size=39, bold=True, leading=48)
    text(
        canvas,
        "Ilustrowany przewodnik nauczyciela<br/>szkoły ponadpodstawowej",
        48,
        511,
        490,
        size=18,
        leading=26,
        color=MUTED,
    )
    text(
        canvas,
        "WYSZUKIWANIE · MATERIAŁY · UDOSTĘPNIANIE",
        48,
        403,
        499,
        size=10.5,
        bold=True,
        color=BLUE,
    )
    text(canvas, "Autor opracowania", 48, 337, 490, size=10)
    text(canvas, escape(BRAND["author"]), 48, 315, 490, size=21, bold=True)
    text(canvas, "Opracowano w ramach projektu " + escape(BRAND["project"]), 48, 275, 490, size=12)
    text(canvas, escape(BRAND["school"]), 48, 247, 490, size=12)
    text(canvas, escape(BRAND["date"]), 48, 198, 490, size=11)
    project_marks(canvas)


def closing(canvas):
    text(canvas, "PROJEKT I DALSZE MATERIAŁY", 48, 773, 499, size=10, bold=True, color=BLUE)
    text(canvas, "Do wykorzystania<br/>po spotkaniu", 48, 733, 499, size=30, bold=True, leading=38)
    y = text(canvas, "WIN4SMEs — Workplace Innovation", 48, 627, 499, size=16, bold=True)
    y = text(
        canvas,
        "Wykorzystany w opracowaniu materiał WP3.A5 projektu WIN4SMEs przedstawia modele uczenia się z wykorzystaniem technologii cyfrowych, adresowane do szkoleń dorosłych w małych i średnich przedsiębiorstwach. Przewodnik odnosi wybrane inspiracje do pracy nauczycieli szkół ponadpodstawowych.",
        48,
        y - 14,
        499,
        size=11,
    )
    text(canvas, "Materiały online", 48, y - 26, 499, size=13, bold=True)
    text(
        canvas,
        "Zeskanuj kod lub skorzystaj z aktywnego adresu poniżej.",
        48,
        y - 51,
        499,
        size=9,
        color=MUTED,
    )
    for n, (label, url) in enumerate(QR_TARGETS):
        x = 48 + n * 174
        qr = QrCodeWidget(url, barWidth=94, barHeight=94, barBorder=4, barLevel="M")
        qr.qr.make()
        # Draw modules directly: vector artwork without a renderer's default font.
        modules = qr.qr.modules
        count = len(modules)
        unit = 94 / (count + 8)
        canvas.setFillColor(HexColor("#000000"))
        for row, values in enumerate(modules):
            for column, dark in enumerate(values):
                if dark:
                    canvas.rect(
                        x + (column + 4) * unit,
                        344 + (count - row + 3) * unit,
                        unit,
                        unit,
                        fill=1,
                        stroke=0,
                    )
        canvas.linkURL(url, (x, 344, x + 94, 438), relative=0)
        text(canvas, escape(label), x, 325, 160, size=11, bold=True)
        text(
            canvas,
            '<link href="'
            + url
            + '" color="#0758bd">'
            + url.removeprefix("https://").rstrip("/")
            + "</link>",
            x,
            301,
            160,
            size=8.5,
        )
    text(
        canvas,
        escape(BRAND["date"]) + "<br/>Ilustracje: instrukcje ZPE wskazane przy grafikach.",
        48,
        223,
        499,
        size=9,
        color=MUTED,
    )
    project_marks(canvas)


def folio(canvas, number, total):
    canvas.setStrokeColor(HexColor("#d1dbe4"))
    canvas.setLineWidth(0.4)
    canvas.line(51, 44, A4[0] - 51, 44)
    canvas.setFillColor(MUTED)
    canvas.setFont("Body", 7.5)
    canvas.drawString(51, 29, "ZPE w praktyce · WIN4SMEs")
    canvas.drawRightString(A4[0] - 51, 29, f"{number} / {total}")


def contents(canvas, entries, total):
    text(canvas, "PRZEWODNIK NAUCZYCIELA", 48, 774, 499, size=10, bold=True, color=BLUE)
    text(canvas, "Spis treści", 48, 736, 499, size=29, bold=True)
    y = 673
    for n, (title, page_index) in enumerate(entries, start=1):
        text(canvas, f"{n:02}", 48, y, 30, size=10, bold=True, color=BLUE)
        text(canvas, escape(title), 88, y, 405, size=11)
        canvas.setFont("Bold", 11)
        canvas.setFillColor(INK)
        canvas.drawRightString(A4[0] - 48, y - 13, str(page_index + 4))
        y -= 49
    text(canvas, "Jak korzystać z publikacji", 48, 241, 499, size=13, bold=True)
    text(
        canvas,
        "Rozdziały zawierają instrukcje, przykłady i ilustracje z poradników ZPE. Rozwinięcia ze strony internetowej są tu pokazane w całości. Odsyłacze przy grafikach prowadzą do źródeł. Dla wygodnej nawigacji w PDF-ie dostępne są zakładki rozdziałów.",
        48,
        212,
        499,
        size=10,
    )
    folio(canvas, 3, total)


def assemble(body_file):
    source = PdfReader(str(body_file))
    assert sum(len(p.extract_text() or "") for p in source.pages) > 25000, "Brak pełnej treści"
    writer = PdfWriter()
    titles = [
        "Lekcja, w której pracują uczniowie",
        "Konto: co naprawdę ma znaczenie?",
        "Wyszukiwanie dla szkoły ponadpodstawowej",
        "Od wyniku do przydatnego fragmentu",
        "Udostępnianie i wyniki: co wybrać?",
        "Co jeszcze można zrobić w ZPE?",
        "Twój temat: od wyszukania do przypisania",
        "Materiały, które zostają po spotkaniu",
    ]
    page_text = [" ".join((page.extract_text() or "").split()) for page in source.pages]
    entries = []
    for title in titles:
        hits = [n for n, value in enumerate(page_text) if title in value]
        assert hits, "Brak nagłówka rozdziału: " + title
        entries.append((title, hits[0]))
    total = len(source.pages) + 4
    writer.add_page(make_page(cover))
    writer.add_blank_page(width=A4[0], height=A4[1])
    writer.add_page(make_page(lambda c: contents(c, entries, total)))
    for n, page in enumerate(source.pages, start=4):
        page.scale_to(*A4)
        page.merge_page(make_page(lambda c, n=n: folio(c, n, total)))
        writer.add_page(page)
    writer.add_page(make_page(closing))
    writer.add_outline_item("Spis treści", 2)
    for title, page_index in entries:
        writer.add_outline_item(title, page_index + 3)
    writer.add_outline_item("Projekt i dalsze materiały", total - 1)
    writer.add_metadata(
        {
            "/Title": "ZPE w praktyce — pełny ilustrowany przewodnik",
            "/Author": BRAND["author"],
            "/Subject": "Projekt WIN4SMEs · Październik 2026 · Szkoła ponadpodstawowa",
            "/Keywords": "ZPE, WIN4SMEs, COVE Polska, ZSZ5, przewodnik",
        }
    )
    writer.root_object.update({NameObject("/Lang"): TextStringObject("pl-PL")})
    output = ROOT / "output/pdf/przewodnik-zpe-ilustrowany.pdf"
    with output.open("wb") as file:
        writer.write(file)
    for name in ("karty-uczestnika.pdf", "scenariusz-trenera.pdf"):
        shutil.copyfile(output, output.with_name(name))
    check(output, total)
    print(f"Zbudowano pełny przewodnik: {total} stron A4, okładka i zamknięcie projektowe.")


def check(output, total):
    pdf = PdfReader(str(output))
    assert len(pdf.pages) == total
    assert pdf.metadata.author == BRAND["author"]
    first = " ".join(pdf.pages[0].extract_text().split())
    last = " ".join(pdf.pages[-1].extract_text().split())
    assert BRAND["funding"] in first and BRAND["funding"] in last
    assert "covepolska.pl" in last and "win4smes.eu" in last
    assert not pdf.pages[1].extract_text().strip(), "Druga strona nie jest pusta"
    assert "Spis treści" in pdf.pages[2].extract_text(), "Spis treści nie jest na stronie trzeciej"
    assert BRAND["author"] in first
    assert all(BRAND["author"] not in (p.extract_text() or "") for p in pdf.pages[1:]), (
        "Autor poza okładką"
    )
    for _, url in QR_TARGETS:
        assert any(
            str(a.get_object().get("/A", {}).get("/URI", "")) == url
            for a in pdf.pages[-1].get("/Annots", [])
        ), "Brak odsyłacza QR"
    for page in pdf.pages[1:-1]:
        assert BRAND["funding"] not in " ".join(page.extract_text().split())
        assert abs(float(page.mediabox.width) - A4[0]) < 0.1
    all_text = " ".join((p.extract_text() or "") for p in pdf.pages)
    for term in (
        "Wyszukiwanie",
        "Kreator",
        "Ścieżki",
        "Komunikator",
        "Fryzjer",
        "Handlowiec",
        "Cukiernik",
        "Kucharz",
        "99 zł",
        "11 oryginalnych",
    ):
        assert term.casefold() in all_text.casefold(), "Brak pełnej treści: " + term
    images = subprocess.check_output(["pdfimages", "-list", str(output)], text=True)
    body_images = [
        line
        for line in images.splitlines()[2:]
        if len(line.split()) > 2 and line.split()[2] == "image" and 1 < int(line.split()[0]) < total
    ]
    assert len(body_images) >= 9, "Brak ilustracji w treści"
    logo_dimensions = {ImageReader(str(ROOT / file)).getSize() for file in BRAND["logos"].values()}
    assert not any(
        (int(line.split()[3]), int(line.split()[4])) in logo_dimensions for line in body_images
    ), "Logotyp projektu w środku publikacji"
    fonts = subprocess.check_output(["pdffonts", str(output)], text=True)
    assert all(
        re.search(r"\byes\s+yes\s+yes\b", line) for line in fonts.splitlines()[2:] if line.strip()
    ), "Nieosadzony font"
    assert not re.search(
        r"\b\d+\s*(?:[–-]\s*\d+\s*)?min(?:ut\w*)?\b|harmonogram", all_text, re.I
    ), "Publiczne czasy"
