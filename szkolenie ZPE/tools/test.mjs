import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const data=JSON.parse(fs.readFileSync(new URL('../content.json',import.meta.url)));
const code=fs.readFileSync(new URL('../app.js',import.meta.url),'utf8');
function boot(raw=null,blocked=false){
 const elements=new Map(); const el=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',hidden:true,value:'auto',dataset:{},addEventListener(){},focus(){},scrollIntoView(){},querySelector(){return null;}});return elements.get(id);};
 const context=vm.createContext({window:{WORKSHOP:data,addEventListener(){},scrollTo(){},matchMedia(){return {matches:false};}},document:{getElementById:el,querySelector:el,querySelectorAll(){return []},documentElement:{dataset:{}}},localStorage:{getItem(){if(blocked)throw Error('denied');return raw;},setItem(k,v){if(blocked)throw Error('denied');raw=v;}},location:{hash:''},URL,Blob,setTimeout});vm.runInContext(code,context);return {run:s=>vm.runInContext(s,context),elements,get saved(){return raw}};
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
for(const f of data.fields)assert(app.run('cardsHTML()').includes(f[1]));
console.log('PASS: harmonogram, 4+4 zasoby, 12 etapów, wszystkie pola kart, walidacja adresów, escaping, zapis i odtworzenie, uszkodzone i niedostępne localStorage.');
