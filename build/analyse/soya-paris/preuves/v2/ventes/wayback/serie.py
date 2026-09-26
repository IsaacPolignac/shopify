import re,glob,os,datetime,json,subprocess
RX=re.compile(r'"id":\s*(\d+),\s*"availableForSale":[^{}]*?"price":\s*(\d+)[^{}]*?"options":\s*\[([^\]]*)\][^{}]*?"inventoryPolicy":\s*"(\w+)",\s*"inventoryQuantity":\s*(-?\d+)')
rows=[]
for f in sorted(glob.glob('*.html')):
    raw=open(f,'rb').read()
    if raw[:2]==b'\x1f\x8b':
        import gzip; raw=gzip.decompress(raw); open(f,'wb').write(raw)
    h=raw.decode('utf-8','ignore')
    rq=re.findall(r'"reqid":"[^"]*-(\d{10})"',h)
    ts=datetime.datetime.utcfromtimestamp(int(rq[0])).strftime('%Y-%m-%dT%H:%M:%SZ') if rq else f.split('_')[1][:8]
    # kaching prix
    kb=re.findall(r'"title":"(\dx [^"]{0,40})"[^{}]*?"quantity":(\d)[^{}]*?"discountType":"(\w+)","discountValue":([\d.]+)',h)
    for m in RX.finditer(h):
        pre=h[max(0,m.start()-20000):m.start()]; t=re.findall(r'"title":\s*"([^"]{1,90})"',pre)
        rows.append({'file':f,'utc':ts,'id':m.group(1),'opt':m.group(3).strip('"'),'prix':int(m.group(2))/100,'policy':m.group(4),'q':int(m.group(5)),'title':(t[-1] if t else '')})
json.dump(rows,open('serie.json','w'),ensure_ascii=False,indent=0)
import collections
by=collections.defaultdict(list)
for r in rows: by[(r['title'][:40],r['id'],r['opt'])].append((r['utc'],r['q'],r['policy'],r['prix']))
for k,v in sorted(by.items()):
    print(k)
    for x in sorted(set(v)): print('    ',x)
