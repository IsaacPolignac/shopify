import re,glob,json,html,collections,datetime
rows=[]
for f in sorted(glob.glob('loox/*.html')):
    h=open(f,encoding='utf-8',errors='replace').read()
    prod=re.sub(r'_p\d+\.html$','',f.split('/')[-1])
    # split on grid-item-wrap
    parts=re.split(r'<div data-id="([^"]+)" data-media-type="([^"]*)" class="grid-item-wrap',h)
    for i in range(1,len(parts),3):
        rid,media,body=parts[i],parts[i+1],parts[i+2]
        name=re.search(r'class="title">([^<]*)',body)
        t=re.search(r"data-time='(\d+)'",body)
        st=re.search(r'Rating icons:\s*(\d) / 5',body)
        tx=re.search(r'class="main-text">(.*?)</div>',body,re.S)
        ver='loox-verified-badge' in body.split('class="time"')[0]
        imgs=len(re.findall(r'images\.loox\.io/uploads',body))
        rows.append(dict(id=rid,produit=prod,nom=html.unescape(name.group(1).strip()) if name else '',
          date=datetime.datetime.utcfromtimestamp(int(t.group(1))/1000).strftime('%Y-%m-%dT%H:%M:%SZ') if t else '',
          note=int(st.group(1)) if st else None,texte=html.unescape(re.sub('<[^>]+>',' ',tx.group(1))).strip() if tx else '',
          verifie=ver,media=media,photos=imgs,fichier=f))
seen={}
for r in rows: seen.setdefault(r['id'],r)
rows=list(seen.values())
json.dump(rows,open('loox_reviews.json','w'),ensure_ascii=False,indent=0)
print(len(rows))
c=collections.Counter((r['produit']) for r in rows); print(c)
for p in ['oreiller-soya-2-0','oreiller-soya-3-0']:
    rr=[r for r in rows if r['produit']==p]
    print(p,len(rr),collections.Counter(r['note'] for r in rr),'verifies',sum(r['verifie'] for r in rr),'media',collections.Counter(r['media'] for r in rr),'moy',round(sum(r['note'] for r in rr)/len(rr),2))
    print(' dates',min(r['date'] for r in rr),max(r['date'] for r in rr))
print('notes None',sum(1 for r in rows if r['note'] is None),'dates vides',sum(1 for r in rows if not r['date']))
