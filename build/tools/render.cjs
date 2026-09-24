// Rend le preview du thème Somnila via un relais fetch (le proxy coupe les tunnels navigateur).
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs=require('fs');
const UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const THEME=process.env.THEME||'157447585949';
const BASE='https://liyan.shop';
function mkRelay(ctx, cacheGet){
  return async (route,req)=>{
    const u=req.url();
    if(/^(data|blob):/.test(u))return route.continue().catch(()=>{});
    const isGet=req.method()==='GET';
    const cacheable=isGet && !/\/cart|cart\.js|checkout|preview_theme_id/i.test(u);
    try{
      if(cacheable && cacheGet.has(u)) return route.fulfill(cacheGet.get(u));
      const jar=await ctx.cookies(u); const cookieHeader=jar.map(c=>`${c.name}=${c.value}`).join('; ');
      const headers={...req.headers(),'user-agent':UA}; if(cookieHeader) headers['cookie']=cookieHeader;
      const r=await fetch(u,{method:req.method(),headers,body:isGet||req.method()==='HEAD'?undefined:req.postDataBuffer(),redirect:'follow'});
      try{ const sc=r.headers.getSetCookie?r.headers.getSetCookie():[]; const origin=new URL(u); const toAdd=[];
        for(const line of sc){const [pair,...attrs]=line.split(';'); const i=pair.indexOf('='); if(i<0)continue;
          const c={name:pair.slice(0,i).trim(),value:pair.slice(i+1).trim(),domain:origin.hostname,path:'/'};
          for(const a of attrs){const [k,v]=a.split('=').map(x=>(x||'').trim()); if(/^path$/i.test(k)&&v)c.path=v; if(/^domain$/i.test(k)&&v)c.domain=v.replace(/^\./,''); if(/^secure$/i.test(k))c.secure=true; if(/^httponly$/i.test(k))c.httpOnly=true;}
          toAdd.push(c);}
        if(toAdd.length) await ctx.addCookies(toAdd).catch(()=>{});
      }catch(e){}
      const bb=Buffer.from(await r.arrayBuffer()); const h={};
      r.headers.forEach((v,k)=>{if(!/^(content-encoding|content-length|transfer-encoding|content-security-policy|set-cookie)/i.test(k))h[k]=v;});
      const o={status:r.status,headers:h,body:bb}; if(cacheable && bb.length<2e6) cacheGet.set(u,o);
      return route.fulfill(o);
    }catch(e){return route.abort().catch(()=>{});}
  };
}
const JOBS=JSON.parse(process.env.JOBS||'[]'); // [{slug,url,mobile?}]
(async()=>{
  const b=await chromium.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
  const out={};
  for(const j of JOBS){
    const ctx=await b.newContext({viewport:j.mobile?{width:390,height:844}:{width:1440,height:900},userAgent:UA,locale:'en-US',extraHTTPHeaders:{'accept-language':'en-US,en;q=0.9'}, deviceScaleFactor:1});
    const cacheGet=new Map(); await ctx.route('**/*',mkRelay(ctx,cacheGet));
    const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(String(e).slice(0,160))); p.on('console',m=>{if(m.type()==='error')errs.push(m.text().slice(0,160));});
    try{
      const sep=j.url.includes('?')?'&':'?';
      const url=j.url+sep+`preview_theme_id=${THEME}&_ab=0&_fd=0&_sc=1`;
      // mot de passe boutique (env PW) : POST sur /password via le relais, le cookie storefront_digest est posé sur le contexte
      if(process.env.PW){
        // connexion côté Node : le 302 de /password pose le cookie storefront_digest, qu'on recopie dans le navigateur
        const g=await fetch(BASE+'/password',{headers:{'user-agent':UA}}); const jar={};
        const eat=r=>(r.headers.getSetCookie?r.headers.getSetCookie():[]).forEach(l=>{const[p]=l.split(';');const i=p.indexOf('=');jar[p.slice(0,i).trim()]=p.slice(i+1).trim();});
        eat(g); await g.arrayBuffer();
        const r=await fetch(BASE+'/password',{method:'POST',headers:{'user-agent':UA,'content-type':'application/x-www-form-urlencoded',cookie:Object.entries(jar).map(([k,v])=>k+'='+v).join('; ')},body:new URLSearchParams({form_type:'storefront_password',utf8:'✓',password:process.env.PW}),redirect:'manual'});
        eat(r); console.log('password:',r.status,r.headers.get('location'),Object.keys(jar).join(','));
        await ctx.addCookies(Object.entries(jar).map(([name,value])=>({name,value,domain:'liyan.shop',path:'/',secure:true})));
      }
      if(process.env.ADD_VARIANT && j.addToCart){ await p.goto(BASE+'/?preview_theme_id='+THEME,{waitUntil:'load',timeout:90000}); const st=await p.evaluate(async(id)=>{const r=await fetch('/cart/add.js',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({items:[{id:Number(id),quantity:1}]})});return r.status;},process.env.ADD_VARIANT); console.log('cart/add:',st); }
      // première requête pour poser le cookie de preview, puis navigation
      await p.goto(url,{waitUntil:'load',timeout:90000}); await p.waitForTimeout(2500);
      await p.goto(url,{waitUntil:'load',timeout:90000}); await p.waitForTimeout(3500);
      await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,60));}window.scrollTo(0,0);});
      await p.waitForTimeout(1500);
      await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120));}window.scrollTo(0,0);});
      await p.evaluate(()=>{document.querySelectorAll('.animate-section').forEach(e=>e.classList.add('animate--shown','somnila-in'));document.querySelectorAll('.somnila-stats').forEach(e=>{e.classList.add('somnila-in');e.querySelectorAll('[data-somnila-count]').forEach(n=>{n.textContent=n.getAttribute('data-somnila-count')})});}); // révélation forcée : ce qu'un visiteur voit après avoir défilé
      await p.waitForTimeout(2200);
      await p.screenshot({path:`preview/${j.slug}.png`,fullPage:true});
      out[j.slug]=await p.evaluate(()=>{
        const cs=n=>getComputedStyle(n);
        const themeId=(document.documentElement.outerHTML.match(/Shopify\.theme\s*=\s*(\{[^}]*\})/)||[])[1]||null;
        const h1=document.querySelector('h1'); const btn=document.querySelector('.button, button[name="add"]');
        const sections=[...document.querySelectorAll('.shopify-section')].map(s=>s.id.replace('shopify-section-','')+':'+Math.round(s.getBoundingClientRect().height));
        const fonts=[...new Set([...document.querySelectorAll('h1,h2,p,a,.button')].slice(0,60).map(n=>cs(n).fontFamily.split(',')[0].replace(/["']/g,'')))];
        const imgs=[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.currentSrc.slice(0,100));
        return {title:document.title, themeId, h1:h1?h1.innerText.trim().slice(0,80):null, h1font:h1?cs(h1).fontFamily.split(',')[0]:null, bodyFont:cs(document.body).fontFamily.split(',')[0], bodyBg:cs(document.body).backgroundColor, btn:btn?{bg:cs(btn).backgroundColor,r:cs(btn).borderRadius,txt:btn.innerText.trim().slice(0,30)}:null, sections, fonts, brokenImgs:imgs.slice(0,8), height:document.body.scrollHeight, text:document.body.innerText.replace(/\s+/g,' ').slice(0,1500)};
      });
      out[j.slug].errors=errs.slice(0,6);
      console.log(`OK ${j.slug} ${out[j.slug].height}px theme=${out[j.slug].themeId} h1="${out[j.slug].h1}" fonts=${out[j.slug].fonts.join('|')}`);
    }catch(e){out[j.slug]={err:String(e).split('\n')[0].slice(0,200),errors:errs}; console.log('ECHEC',j.slug,out[j.slug].err);}
    await ctx.close();
  }
  fs.writeFileSync('preview/report.json',JSON.stringify(out,null,1)); await b.close();
})();
