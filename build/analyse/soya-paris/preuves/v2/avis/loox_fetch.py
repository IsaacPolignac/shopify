# Relevé de tous les avis Loox publics (widget CRe3ATH2rU), tri "newest", 1 requête / 1,5 s
import subprocess, time, re, os, sys, json
D='/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya2/avis/loox'
prods={ # id: (handle, total connu)
'15152183443788':'oreiller-soya-2-0','15152158212428':'oreiller-soya-3-0',
'15152140517708':'housse-d-oreiller-de-rechange-soya-3-0','15152116433228':'housse-d-oreiller-de-rechange-soya-1',
'15152116302156':'coussin-lombaire-ergonomique-soya','15152184951116':'housse-d-oreiller-en-soie-naturelle-soya',
'15749886574924':'oreiller-soya-enfant','15152116531532':'oreiller-soya-1-0','15152116400460':'ensemble-de-coussins-orthopediques',
'15152193667404':'oreiller-de-voyage-ergonomique-soya','15152116334924':'couverture-lestee-therapeutique',
'15749897421132':'housse-doreiller-de-rechange-enfant','15152165454156':'draps-rafraichissants-soyafresh',
'15152116367692':'ensemble-doreillers-reglables','15152192127308':'draps-en-soie-naturelle-soya',
'15152166863180':'couette-rafraichissante-soyafresh','15152116465996':'masque-de-sommeil-en-soie',
'15152116269388':'coussin-ergonomique-avec-tete-de-lit'}
UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36'
for pid,h in prods.items():
    page=1; q='h=1790357278302&variant=visible&language=fr&sort=newest'
    while True:
        out=f'{D}/{h}_p{page:02d}.html'
        url=f'https://loox.io/widget/CRe3ATH2rU/reviews/{pid}?{q}' + (f'&page={page}' if page>1 else '')
        if not os.path.exists(out):
            r=subprocess.run(['curl','-sS','-A',UA,'-o',out,'-w','%{http_code}',url],capture_output=True,text=True)
            print(h,page,r.stdout,flush=True); time.sleep(1.5)
        txt=open(out,encoding='utf-8',errors='replace').read()
        m=re.search(r'id="loadMore"[^>]*data-url="([^"]*)"',txt)
        if not m: break
        nxt=m.group(1).replace('&amp;','&')
        if 'page=' not in nxt: break
        q=re.sub(r'&?page=\d+','',nxt); page=int(re.search(r'page=(\d+)',nxt).group(1))
        if page>200: break
print('FIN',time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()))
