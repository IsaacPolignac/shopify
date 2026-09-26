import json,re,statistics,collections
from themes import norm,code
C=json.load(open('tp_corpus.json')); L=json.load(open('loox_reviews.json'))
W={'un':1,'une':1,'deux':2,'trois':3,'quatre':4,'cinq':5,'six':6,'sept':7,'huit':8,'neuf':9,'dix':10,'onze':11,'douze':12,'quinze':15,'vingt':20,'trente':30,'quelques':None}
U={'jour':1,'jours':1,'j':1,'semaine':7,'semaines':7,'mois':30}
num=r"(\d{1,3}|un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|quinze|vingt|trente)"
rx=re.compile(num+r"\s*(?:a|à|-|ou)?\s*(?:\d{1,2}\s*)?(?:bons?\s+|bonnes\s+|longs?\s+|longues\s+)?(jours?|j\b|semaines?|mois)(\s+ouvr\w*)?")
LIV=re.compile(r"livr|recu|reception|colis|arriv|command|expedi|attend|delai")
EXCL=re.compile(r"nuit|utilis|dormi|dors|essai|test|porte|usage|depuis que|rembours|retour|renvoy|adapt|habitu")
def extract(t):
    out=[]
    for sent in re.split(r"[\.\!\?\n;]+",norm(t)):
        if not LIV.search(sent) or EXCL.search(sent): continue
        for m in rx.finditer(sent):
            n=m.group(1); n=int(n) if n.isdigit() else W.get(n)
            if n is None or n==0: continue
            d=n*U[m.group(2)] if m.group(2)!='j' else n
            if m.group(3) and U.get(m.group(2),1)==1: d=round(d*7/5)  # jours ouvrés -> calendaires approx
            if 1<=d<=120: out.append((d,sent.strip()[:160]))
    return out
res=[]
for r in C:
    for d,s in extract((r['titre'] or '')+'. '+r['texte']): res.append(('TP',r['note'],r['source'],r['date'][:10],d,s,r['id']))
for r in L:
    if r['date'].endswith('T00:00:00Z'): continue
    for d,s in extract(r['texte']): res.append(('LOOX',r['note'],'horodate',r['date'][:10],d,s,r['id']))
json.dump(res,open('delais_extraits.json','w'),ensure_ascii=False,indent=0)
# one value per review: max duration mentioned
per={}
for x in res:
    k=(x[0],x[6]); per[k]=max(per.get(k,(0,))[0:1]+(x[4],)) if k in per else x[4]
    per[k]=max(per[k],x[4]) if isinstance(per[k],int) else x[4]
vals=collections.defaultdict(list)
for (plat,rid),d in per.items():
    note=[x[1] for x in res if x[6]==rid][0]
    g='1-2' if note<=2 else ('3' if note==3 else '4-5')
    vals[(plat,g)].append(d); vals[('ALL',g)].append(d); vals[('ALL','tous')].append(d)
def q(v):
    v=sorted(v); n=len(v)
    return dict(n=n,min=v[0],p25=v[n//4],mediane=statistics.median(v),p75=v[(3*n)//4],max=v[-1],part_sup_10j=round(100*sum(1 for x in v if x>10)/n),part_sup_14j=round(100*sum(1 for x in v if x>14)/n),part_le_5j=round(100*sum(1 for x in v if x<=5)/n))
for k in sorted(vals): print(k,q(vals[k]))
