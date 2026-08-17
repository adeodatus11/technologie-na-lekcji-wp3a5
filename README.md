# Innowacyjna lekcja w praktyce

Statyczny katalog 16 metod pracy na lekcji dla nauczycieli zwykłej szkoły stacjonarnej.

Serwis zawiera:

- stronę główną z wyszukiwarką i filtrami zastosowań;
- 16 pełnych podstron metod po 1200-1600 słów;
- szczegółowy przebieg 45-minutowej lekcji, pełny scenariusz zawodowy i krótszy przykład ogólny dla każdej metody;
- czterotygodniowy model ewaluacji;
- wskazówki dotyczące zaangażowania i koncentracji;
- rejestr źródeł oraz opis metodologii;
- warianty bez technologii, z ZPE, telefonem ucznia i AI jako pomocą nauczyciela.

360 e-learning, blended learning i flipped classroom są oznaczone jako inspiracje z materiałów WP3.A5 "Learning with digital technologies" przygotowanych przez IBC w Danii. Pozostałe metody są powiązane z przeglądami badań, metaanalizami, ewaluacjami albo ramami dydaktycznymi.

## Generowanie podstron

Podstawowe opisy i źródła znajdują się w `scripts/methods-data.mjs`. Szczegółowe adaptacje do technikum i branżowej szkoły I stopnia znajdują się w `scripts/method-adaptations.mjs`. Statyczne pliki HTML generuje polecenie:

```bash
node scripts/generate-site.mjs
```

Wynik nie wymaga procesu budowania na GitHub Pages.

Generator zatrzymuje budowę, jeżeli liczba metod jest inna niż 16, brakuje wymaganego elementu scenariusza, harmonogram nie sumuje się do 45 minut albo treść właściwa podstrony nie mieści się w zakresie 1200-1600 słów.
