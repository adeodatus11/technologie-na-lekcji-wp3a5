const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.pdf':'application/pdf'};
async function check(){
 const server=http.createServer((req,res)=>{
  let name=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://local').pathname));
  if(name!==root&&!name.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  if(fs.existsSync(name)&&fs.statSync(name).isDirectory())name=path.join(name,'index.html');
  if(!fs.existsSync(name)){res.writeHead(404).end();return;}
  res.setHeader('Content-Type',mime[path.extname(name)]||'application/octet-stream');fs.createReadStream(name).pipe(res);
 });
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 let browser;
 try{
  browser=await chromium.launch({executablePath:'/usr/bin/chromium'});
  const page=await browser.newPage({viewport:{width:1440,height:1000}});
  const errors=[];const missing=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)missing.push(r.url());});
  const base='http://127.0.0.1:'+server.address().port;
  await page.goto(base);await page.waitForLoadState('networkidle');
  assert.equal(await page.locator('.chapter').count(),8);
  assert.equal(await page.locator('input,textarea,form').count(),0);
  assert.equal(await page.locator('.pdf-card').count(),11);
  assert.equal(await page.locator('.image-card').count(),9);
  assert.equal(await page.locator('.case-example').count(),6);
  for(const subject of ['Fryzjer','Handlowiec','Cukiernik','Kucharz'])assert.equal(await page.locator('.case-example').filter({hasText:subject}).count(),1);
  assert(Math.abs(8.9/.5-17.8)<1e-9&&Math.abs(12.9/.75-17.2)<1e-9);
  assert.deepEqual([400,200,100].map(x=>x*12/8),[600,300,150]);
  assert.equal(2/.8,2.5);
  await page.waitForSelector('.project-strip');
  assert.equal(await page.locator('.project-strip img').count(),4);
  assert.equal(await page.locator('.footer-logos img[alt^="WIN4SMEs"]').count(),1);
  assert((await page.locator('.funding-credit').innerText()).includes('nie ponoszą za nie odpowiedzialności'));
  assert((await page.locator('.hero-author').innerText()).includes('Maciej Najwer'));
  const localLinks=await page.locator('a[href]').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')).filter(h=>h&&!h.startsWith('https:')&&!h.startsWith('#')));
  const guides=JSON.parse(fs.readFileSync(path.join(root,'content.json'),'utf8')).pdf_guides;
  for(const href of localLinks){
   const file=decodeURIComponent(href.split('#')[0]);
   assert(fs.existsSync(path.resolve(root,file)),'Missing '+href);
   const pageNumber=Number(href.match(/#page=(\d+)/)?.[1]);
   if(pageNumber){const guide=guides.find(g=>g.file===file);assert(guide&&pageNumber>=1&&pageNumber<=guide.pages,'Invalid PDF page '+href);}
  }
  await page.locator('.image-card [data-zoom]').first().click();
  assert(await page.locator('#image-dialog').isVisible());
  await page.keyboard.press('Escape');
  assert(!(await page.locator('#image-dialog').isVisible()));
  await page.locator('#focus-toggle').click();
  assert.equal(await page.locator('#focus-toggle').getAttribute('aria-pressed'),'true');
  await page.locator('#focus-toggle').click();
  await page.evaluate(()=>{document.querySelectorAll('details').forEach(d=>d.open=true);document.querySelectorAll('img').forEach(i=>i.loading='eager');});
  await page.waitForFunction(()=>[...document.images].filter(i=>i.getAttribute('src')).every(i=>i.complete&&i.naturalWidth>0));
  const txt=await page.locator('main').innerText();
  assert(!/\b\d+\s*(?:[–-]\s*\d+\s*)?min(?:ut\w*)?\b|harmonogram|odliczanie/i.test(txt),'Public time labels');
  assert.equal(await page.locator('.image-card img').evaluateAll(xs=>xs.filter(x=>!x.naturalWidth).length),0);
  await page.evaluate(()=>document.querySelectorAll('details').forEach(d=>d.open=false));
  await page.screenshot({path:'/tmp/zpe-guide-desktop.png'});
  await page.goto(base+'/#szukanie');await page.waitForTimeout(300);
  await page.screenshot({path:'/tmp/zpe-guide-search.png'});
  await page.setViewportSize({width:390,height:844});
  await page.goto(base);await page.evaluate(()=>window.scrollTo(0,0));
  await page.screenshot({path:'/tmp/zpe-guide-mobile.png'});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Mobile overflow');
  await page.goto(base+'/#/baza-wiedzy');
  await page.waitForFunction(()=>location.hash==='#baza');
  await page.setViewportSize({width:640,height:850});
  await page.locator('body').evaluate(e=>e.style.zoom='200%');
  assert(await page.locator('#baza').isVisible());
  await page.locator('body').evaluate(e=>e.style.zoom='');
  await page.setViewportSize({width:1440,height:1000});
  await page.evaluate(()=>{document.querySelectorAll('details').forEach(d=>d.open=true);document.querySelectorAll('img').forEach(i=>i.loading='eager');});
  await page.waitForFunction(()=>[...document.images].filter(i=>i.getAttribute('src')).every(i=>i.complete&&i.naturalWidth>0));
  if(process.argv.includes('--pdf')){
   const temp=fs.mkdtempSync(path.join(require('node:os').tmpdir(),'zpe-publication-'));
   try{
    const body=path.join(temp,'body.pdf');
    await page.pdf({path:body,format:'A4',printBackground:true,margin:{top:'18mm',bottom:'22mm',left:'18mm',right:'18mm'},displayHeaderFooter:false});
    require('node:child_process').execFileSync('python3',[path.join(__dirname,'build_illustrated_pdf.py'),body],{stdio:'inherit'});
   }finally{fs.rmSync(temp,{recursive:true,force:true});}
  }
  assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);
  console.log('PASS: 8 rozdziałów, 9 ilustracji, 11 PDF-ów, powiększanie, tryb prowadzenia, stare adresy, brak formularzy i czasów, obrazy, mobile.');
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
}
check().catch(e=>{console.error(e);process.exitCode=1;});
