import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const data=JSON.parse(fs.readFileSync(new URL('../content.json',import.meta.url)));
const code=fs.readFileSync(new URL('../app.js',import.meta.url),'utf8');
function boot(raw=null,blocked=false){
 const elements=new Map(); const cl={add(){},remove(){},toggle(){},contains(){return false;}}; const el=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',hidden:true,value:'auto',dataset:{},style:{},classList:cl,addEventListener(){},setAttribute(){},focus(){},scrollIntoView(){},querySelector(){return null;},querySelectorAll(){return [];}});return elements.get(id);};
 const context=vm.createContext({window:{WORKSHOP:data,addEventListener(){},scrollTo(){},matchMedia(){return {matches:false};}},document:{getElementById:el,querySelector:el,querySelectorAll(){return []},addEventListener(){},body:{classList:cl},documentElement:{dataset:{}}},localStorage:{getItem(){if(blocked)throw Error('denied');return raw;},setItem(k,v){if(blocked)throw Error('denied');raw=v;}},location:{hash:""},URL,Blob,setTimeout,setInterval,clearInterval});vm.runInContext(code,context);return {run:s=>vm.runInContext(s,context),elements,get saved(){return raw}};
}
assert.equal(data.stages[0].time[0],0);assert.equal(data.stages.at(-1).time[1],180);
for(let i=1;i<data.stages.length;i++)assert.equal(data.stages[i-1].time[1],data.stages[i].time[0]);
assert.equal(data.resources.filter(r=>r.kind==='ogólne').length,4);assert.equal(data.resources.filter(r=>r.kind==='zawodowe').length,4);
const app=boot();
for(const u of ['https://zpe.gov.pl/a/x','https://static.zpe.gov.pl/x'])assert(app.run(`isZpe(${JSON.stringify(u)})`));
for(const u of ['javascript:alert(1)','http://zpe.gov.pl/','https://zpe.gov.pl.attacker.example/','https://zpe.gov.pl@evil.example/',''])assert(!app.run(`isZpe(${JSON.stringify(u)})`));
app.run(`state.lesson.topic='<script>alert(1)</script>';save();`);assert(app.run('printLesson()').includes('&lt;script&gt;'));assert(!app.run('printLesson()').includes('<script>'));
const loaded=boot(app.saved);assert.equal(loaded.run('state.lesson.topic'),'<script>alert(1)</script>');
const broken=boot('{corrupt');assert.equal(broken.run('storageOK'),false);
const denied=boot(null,true);denied.run(`state.lesson.topic='Nie zgub danych';save();`);assert.equal(denied.run('state.lesson.topic'),'Nie zgub danych');assert.equal(denied.run('storageOK'),false);
for(let i=1;i<=12;i++)assert(app.run(`stage(${i})`).includes(data.stages[i-1].title.replaceAll('&','&amp;')));
// Prezentacja: każdy etap ma slajd otwierający, etapy robocze mają też slajd zadania, a każdy slajd się renderuje.
const slides=JSON.parse(app.run('JSON.stringify(SLIDES.map(s=>({key:s.key,kind:s.kind,title:s.title})))'));
for(let i=1;i<=12;i++){assert(slides.some(s=>s.key==='etap-'+i),'brak slajdu etapu '+i);if(![5,8].includes(i))assert(slides.some(s=>s.key==='zadanie-'+i&&s.kind==='task'),'brak zadania '+i);}
assert.equal(slides[0].kind,'title');assert.equal(slides.at(-1).kind,'end');assert.equal(new Set(slides.map(s=>s.key)).size,slides.length);
for(let n=1;n<=slides.length;n++){const h=app.run(`SLIDES[${n-1}].html()+SLIDES[${n-1}].notes()`);assert(h.length>40&&!h.includes('undefined')&&!h.includes('[object'),'slajd '+n);}
assert(app.run("idx('teza')")<app.run("idx('zadanie-1')"));assert.equal(app.run("slideNo('/etap/7')"),app.run("idx('etap-7')"));assert.equal(app.run("slideNo('/wstep')"),app.run("idx('teza')"));assert.equal(app.run("slideNo('/s/999')"),slides.length);assert.equal(app.run("slideNo('/moja-lekcja')"),0);
for(const r of ['/materialy','/moja-lekcja','/karty','/trener','/sprawdzenie','/druk-planu','/zrodla','/pokaz'])assert(!app.run(`PAGES[${JSON.stringify(r)}]()`).includes('undefined'),r);
assert(app.run('stage(7)').includes('id="lesson-form"')&&app.run('stage(6)').includes('resources-box')&&app.run('stage(11)').includes('id="assessment"'));

for(const f of data.fields)assert(app.run('cardsHTML()').includes(f[1]));
const I=data.intro,sum=a=>a.reduce((x,s)=>x+(s.min??s[0]),0);
assert.equal(sum(I.compare.A),40);assert.equal(sum(I.compare.B),40);assert.equal(sum(I.lesson.steps),40);
assert.deepEqual(I.lesson.steps.map(s=>s.title),I.compare.B.map(s=>s[2]));assert.deepEqual(I.variant.rows.map(r=>r[0]),I.compare.B.map(s=>s[2]));
assert.equal(I.methods.length,12);assert.equal(new Set(I.methods.map(m=>m[1])).size,12);
for(const m of I.methods)assert(fs.existsSync(new URL('../../'+m[1],import.meta.url)),'Brak strony metody '+m[1]);
for(const u of [I.lesson.url,I.variant.url])assert(app.run(`isZpe(${JSON.stringify(u)})`));
const introHTML=app.run('intro()');for(const m of I.methods)assert(introHTML.includes(m[0]));assert(!introHTML.includes('undefined'));
assert(app.run('stage(1)').includes('id="lesson-form"'));
console.log('PASS: prezentacja ('+slides.length+' slajdów, każdy etap ze slajdem i zadaniem, routing), wstęp (3 osie po 40 min, 12 metod z istniejącymi stronami), harmonogram, 4+4 zasoby, 12 etapów, wszystkie pola kart, walidacja adresów, escaping, zapis i odtworzenie, uszkodzone i niedostępne localStorage.');
