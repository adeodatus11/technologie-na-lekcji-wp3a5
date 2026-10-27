'use strict';
// Treść redakcyjna i projektowa wspólna z wydaniem PDF.
Promise.resolve(window.PROJECT_BRANDING).then(brand=>{
 if(!brand)throw new Error('Brak informacji o projekcie');
 const funding=document.querySelector('.funding-credit');
 funding.textContent=brand.funding;
 const hero=document.querySelector('.hero');
 const credit=document.createElement('p');credit.className='hero-author';
 credit.textContent=brand.author+' · projekt '+brand.project+' · '+brand.date.toLocaleLowerCase('pl');
 hero.querySelector('.lede').after(credit);
 const strip=document.createElement('div');strip.className='project-strip';
 strip.setAttribute('aria-label','Projekt WIN4SMEs — organizacje i dofinansowanie');
 for(const [key,alt] of [['cove','COVE Polska'],['win','WIN4SMEs'],['eu','Dofinansowane przez Unię Europejską'],['workshop','ZPE bez pośpiechu — ZSZ5, Szkoła Mistrzów']]){
  const image=document.createElement('img');image.src=brand.logos[key];image.alt=alt;image.className=key+'-logo';strip.append(image);
 }
 hero.after(strip);
}).catch(()=>{
 document.querySelector('.funding-credit').textContent='Dofinansowane przez Unię Europejską. Wyrażone poglądy i opinie są wyłącznie poglądami i opiniami autora i niekoniecznie odzwierciedlają stanowisko Unii Europejskiej ani podmiotu udzielającego dotacji. Unia Europejska ani podmiot udzielający dotacji nie ponoszą za nie odpowiedzialności.';
});
