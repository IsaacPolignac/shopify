import json,re,statistics,collections
from themes import norm
C=json.load(open('tp_corpus.json')); L=json.load(open('loox_reviews.json'))
W={'un':1,'une':1,'deux':2,'trois':3,'quatre':4,'cinq':5,'six':6,'sept':7,'huit':8,'neuf':9,'dix':10,'onze':11,'douze':12,'quinze':15,'vingt':20,'trente':30}
U={'jour':1,'jours':1,'j':1,'semaine':7,'semaines':7,'mois':30}
num=r"(\d{1,3}|un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|quinze|vingt|trente)"
rx=re.compile(num+r"\s*(?:(?:a|-|ou)\s*\d{1,2}\s*)?(?:bons?\s+|bonnes\s+|longs?\s+|longues\s+|petits?\s+|petites\s+)?(jours?|j\b|semaines?|mois)(\s+ouvr\w*)?")
LIV=re.compile(r"livr|recu|reception|colis|arriv|command|expedi|attend|delai|attente")
EXCL=re.compile(r"nuit|utilis|dormi|dors |essai|test|usage|depuis que je|rembours|retour|renvoy|adapt|habitu|garanti")
PROM=re.compile(r"(annonc|promi|promet|indiqu|prevu|au lieu d|affich|precis|offre|pretend|normalement|cense|sur le site|le site|entre\s*$|de\s*$)")
ATT=re.compile(r"toujours pas|pas encore|toujours rien|aucune nouvelle|il y a|cela fait|ca fait|depuis|j'attends|j attends|attend toujours|pas recu|jamais recu|toujours en attente|n'est pas arriv|pas ete (expedi|livr)|non recu|sans nouvelle")
REC=re.compile(r"recu|livre|arrive|reception|a mis|mis |en \d|sous \d|au bout|apres")
def extract(t):
    out=[]
    for sent in re.split(r"[\.\!\?\n;]+",norm(t)):
        if not LIV.search(sent) or EXCL.search(sent): continue
        for m in rx.finditer(sent):
            n=m.group(1); n=int(n) if n.isdigit() else W.get(n)
            if not n: continue
            d=n*U[m.group(2)]
            if m.group(3) and U[m.group(2)]==1: d=round(d*7/5)
            if not (1<=d<=120): continue
            before=sent[max(0,m.start()-40):m.start()]
            if PROM.search(before): cat='promis'
            elif ATT.search(sent): cat='attente (pas encore recu)'
            elif REC.search(sent): cat='recu'
            else: cat='indetermine'
            out.append((cat,d,sent.strip()[:170]))
    return out
res=[]
for r in C:
    for cat,d,s in extract((r['titre'] or '')+'. '+r['texte']): res.append(dict(plat='TP',note=r['note'],date=r['date'][:10],cat=cat,jours=d,phrase=s,id=r['id'],nom=r['nom']))
for r in L:
    if r['date'].endswith('T00:00:00Z'): continue
    for cat,d,s in extract(r['texte']): res.append(dict(plat='LOOX',note=r['note'],date=r['date'][:10],cat=cat,jours=d,phrase=s,id=r['id'],nom=r['nom']))
json.dump(res,open('delais_extraits.json','w'),ensure_ascii=False,indent=0)
print(len(res),collections.Counter(x['cat'] for x in res))
def q(v):
    v=sorted(v); n=len(v)
    if not n: return {}
    return {'n':n,'min':v[0],'p25':v[n//4],'med':statistics.median(v),'p75':v[min(n-1,(3*n)//4)],'max':v[-1],'>10j':f"{round(100*sum(1 for x in v if x>10)/n)}%",'>=14j':f"{round(100*sum(1 for x in v if x>=14)/n)}%",'<=7j':f"{round(100*sum(1 for x in v if x<=7)/n)}%"}
for cat in ['recu','promis','attente (pas encore recu)']:
    # one value per review (max for recu/attente, min for promis)
    per={}
    for x in res:
        if x['cat']!=cat: continue
        k=(x['plat'],x['id'])
        per[k]=(max if cat!='promis' else min)(per.get(k,x['jours']),x['jours']); 
    notes={(x['plat'],x['id']):x['note'] for x in res}
    allv=list(per.values())
    print('##',cat,'tous',q(allv))
    for g,f in [('1-2',lambda n:n<=2),('3',lambda n:n==3),('4-5',lambda n:n>=4)]:
        print('   ',g,q([d for k,d in per.items() if f(notes[k])]))
