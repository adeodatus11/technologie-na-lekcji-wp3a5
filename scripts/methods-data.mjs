import m01 from "./methods/01-360-e-learning.mjs";
import m02 from "./methods/02-blended.mjs";
import m03 from "./methods/03-flipped.mjs";
import m04 from "./methods/04-przypominanie.mjs";
import m05 from "./methods/05-modelowanie.mjs";
import m06 from "./methods/06-ocenianie.mjs";
import m07 from "./methods/07-metapoznanie.mjs";
import m08 from "./methods/08-wspolpraca.mjs";
import m09 from "./methods/09-dialogowe.mjs";
import m10 from "./methods/10-udl.mjs";
import m11 from "./methods/11-mastery.mjs";
import m12 from "./methods/12-przypadek.mjs";

export const methods = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12];

// Stare adresy stron (sprzed połączenia metod). Generator tworzy dla nich przekierowania.
export const legacyRedirects = {
  "metoda-retrieval-practice.html": "metoda-przypominanie-i-powroty.html",
  "metoda-powtorki-rozlozone.html": "metoda-przypominanie-i-powroty.html",
  "metoda-nauczanie-jawne.html": "metoda-modelowanie.html",
  "metoda-przyklady-rozwiazane.html": "metoda-modelowanie.html",
  "metoda-feedback-poprawa.html": "metoda-ocenianie-ksztaltujace.html",
  "metoda-uczenie-kooperacyjne.html": "metoda-wspolpraca.html",
  "metoda-peer-tutoring.html": "metoda-wspolpraca.html"
};

export const evidenceLabels = {
  mocne: "Mocne dowody",
  umiarkowane: "Umiarkowane dowody",
  ograniczone: "Ograniczone dowody",
  rama: "Rama projektowa",
  inspiracja: "Inspiracja projektowa"
};

export const groupLabels = {
  wp3: "Trzy modele z projektu WP3.A5",
  core: "Metody oparte na badaniach"
};

export const categoryLabels = {
  all: "Wszystkie metody",
  przygotowanie: "Przygotowanie i organizacja",
  pamiec: "Pamięć i utrwalanie",
  modelowanie: "Wyjaśnianie i modelowanie",
  feedback: "Feedback i ocenianie",
  wspolpraca: "Współpraca i rozmowa",
  zaangazowanie: "Zaangażowanie i koncentracja",
  projekt: "Praca problemowa i projektowa",
  technologia: "Technologia"
};
