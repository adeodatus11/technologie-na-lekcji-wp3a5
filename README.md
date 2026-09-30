# Innowacyjna lekcja w praktyce

Statyczny katalog 12 metod pracy na lekcji dla nauczycieli techników i branżowych szkół I stopnia. Metody dotyczą przedmiotów zawodowych i ogólnokształcących.

Każda metoda ma:

- krótki opis mechanizmu i listę synonimów (połączone metody zachowują stare nazwy jako hasła wyszukiwania);
- wyraźne rozróżnienie od metod sąsiednich;
- uczciwe oznaczenie siły dowodów (ocena redakcji, nie oficjalna klasyfikacja);
- plan lekcji na 35–40 minut czasu roboczego (pierwsze ok. 5 minut lekcji to czynności organizacyjne i nie są wliczone);
- po jednym scenariuszu zawodowym i ogólnokształcącym z gotowymi materiałami (pytania, dane, tabele) i kluczem;
- warianty: bez technologii, komputer/ZPE, telefon, AI po stronie nauczyciela;
- typowe potknięcia, sposób sprawdzenia efektu i źródła.

Trzy metody (360 e-learning, blended learning, flipped classroom) pochodzą z materiału WP3.A5 przygotowanego przez IBC (Dania). Są opisane zgodnie z tym dokumentem i przełożone na lekcję szkolną. Pozostałe dziewięć opiera się na przeglądach badań, wytycznych i ramach dydaktycznych.

## Struktura

- `scripts/methods/*.mjs`: jedna metoda na plik. To tu edytuje się treść.
- `scripts/methods-data.mjs`: lista metod, synonimy starych adresów i etykiety.
- `scripts/generate-site.mjs`: generator stron i przekierowań. Zatrzymuje budowę, jeśli liczba metod jest inna niż 12, czas roboczy lekcji wychodzi poza 35–40 minut, brakuje scenariusza zawodowego lub ogólnokształcącego, klucza albo źródła.
- `AUDYT.md`: wyniki audytu (źródła, połączenia metod, luki, język) i lista rzeczy do weryfikacji przez człowieka.

```bash
node scripts/generate-site.mjs
```

Wynik nie wymaga procesu budowania na GitHub Pages. Stare adresy połączonych metod (np. `metoda-retrieval-practice.html`) przekierowują na nowe strony.
