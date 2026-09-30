// Sprawdza rachunki użyte w scenariuszach. Uruchom: node scripts/verify-math.mjs
import assert from "node:assert/strict";

const near = (a, b, eps = 0.005) => Math.abs(a - b) <= eps;
const checks = [];
const check = (name, ok) => checks.push([name, ok]);

// Modelowanie: faktura
check("faktura: model 5 x 120 zł, VAT 23%", near(5 * 120, 600) && near(600 * 0.23, 138) && near(600 + 138, 738) && near(738 / 1.23, 600));
check("faktura: luki 8 x 45,50, VAT 8%", near(8 * 45.5, 364) && near(364 * 0.08, 29.12) && near(364 * 1.08, 393.12));
check("faktura: samodzielne 12 x 37,80, VAT 23%", near(12 * 37.8, 453.6) && near(453.6 * 0.23, 104.33) && near(453.6 + 104.33, 557.93));
check("faktura: dokument z błędem 500 + 115 = 615", near(500 + 115, 615) && near(500 * 0.23, 115));
// Modelowanie: równania
check("równanie: 3x + 5 = 20, x = 5", 3 * 5 + 5 === 20);
check("równanie: 4x − 6 = 10, x = 4", 4 * 4 - 6 === 10);
check("równanie: 5x + 3 = 2x + 21, x = 6", 5 * 6 + 3 === 2 * 6 + 21);
// Ocenianie
check("procent: 80 → −25% → +25% = 75", near(80 * 0.75 * 1.25, 75));
check("procent: 200 → +10% → −10% = 198", near(200 * 1.1 * 0.9, 198));
// Metapoznanie
check("turysta: 15,5 km / 3,5 h ≈ 4,43", near((2 * 4 + 1.5 * 5) / 3.5, 4.43, 0.005));
// Współpraca: menu
const basic = 2.6 + 1.8 + 0.9 + 1.2 + 1.2;
const alt = 2.9 + 2.2 + 0.9 + 1.2 + 1.2;
check("menu: 7,70 i 8,40 zł na osobę", near(basic, 7.7) && near(alt, 8.4));
check("menu: 38 x 7,70 + 2 x 8,40 = 309,40 ≤ 320", near(38 * basic + 2 * alt, 309.4) && 309.4 <= 320);
check("menu: bez soku 261,40 ≤ 280", near(309.4 - 40 * 1.2, 261.4) && 261.4 <= 280);
// Mastery
check("receptura: współczynnik 36/10 = 3,6; mąka 1800 g; jaja 14,4", near(36 / 10, 3.6) && near(500 * 3.6, 1800) && near(4 * 3.6, 14.4));
check("receptura: koszt 5,76 + 10,26 + 16,50 = 32,52, ≈ 0,90 zł/porcję", near(1.8 * 3.2, 5.76) && near(2.7 * 3.8, 10.26) && near(15 * 1.1, 16.5) && near(32.52 / 36, 0.9, 0.01));
check("nowa próba ułamków: 1/4+1/6=5/12; 5/6−1/4=7/12; 1/3+2/9=5/9", near(1 / 4 + 1 / 6, 5 / 12, 1e-9) && near(5 / 6 - 1 / 4, 7 / 12, 1e-9) && near(1 / 3 + 2 / 9, 5 / 9, 1e-9));
check("nowa próba receptury: 30/8 = 3,75; ryż 1500, woda 3000, marchew 900", near(30 / 8, 3.75) && 400 * 3.75 === 1500 && 800 * 3.75 === 3000 && 240 * 3.75 === 900);
check("ułamki: 1/2 + 1/3 = 5/6; 3/4 − 1/6 = 7/12; 2/5 + 3/10 = 7/10; 1 − 7/12 = 5/12", near(1 / 2 + 1 / 3, 5 / 6, 1e-9) && near(3 / 4 - 1 / 6, 7 / 12, 1e-9) && near(2 / 5 + 3 / 10, 7 / 10, 1e-9) && near(1 - 1 / 3 - 1 / 4, 5 / 12, 1e-9));
// Flipped: fizyka
check("fizyka: 6 V / 12 Ω = 0,5 A; 230 V · 2 A = 460 W", near(6 / 12, 0.5) && 230 * 2 === 460);
check("fizyka: karta 12 V / 4 Ω = 3 A, P = 36 W", near(12 / 4, 3) && 12 * 3 === 36);
check("fizyka: czajnik 2000 W / 230 V ≈ 8,7 A", near(2000 / 230, 8.7, 0.05));
check("fizyka: 4500 W / 230 V ≈ 19,6 A > 16 A", near(4500 / 230, 19.57, 0.05) && 4500 / 230 > 16);
// Przypadek
check("budżet: 6200 − 3900 − 1100 = 1200; − 730 = 470", 6200 - 3900 - 1100 === 1200 && 1200 - 730 === 470);
check("błędy kompletacji: 6 + 7 + 21 = 34, regał 7: 15 z 21", 6 + 7 + 21 === 34 && 15 < 21);
// Logistyka
check("dostawa: 120 − 8 = 112; 112 − 12 = 100", 120 - 8 === 112 && 112 - 12 === 100);
// Geografia / przykładowa mapa
check("farma wiatrowa: B (350 m) odpada przy 500 m, C (5,2 m/s) przy 6 m/s", 350 < 500 && 5.2 < 6 && 600 >= 500 && 6.8 >= 6);
// Budżet historia: daty
check("historia: kolejność dat 1918–1921", [1918, 1919, 1919, 1921].every((y, i, a) => i === 0 || y >= a[i - 1]));

let failed = 0;
for (const [name, ok] of checks) {
  console.log(`${ok ? "OK  " : "BŁĄD"} ${name}`);
  if (!ok) failed += 1;
}
assert.equal(failed, 0, `${failed} rachunków się nie zgadza`);
console.log(`Sprawdzono ${checks.length} grup rachunków.`);
