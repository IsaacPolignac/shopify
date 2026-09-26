import json,re,statistics,collections
from themes import norm
C=json.load(open('tp_corpus.json')); L=json.load(open('loox_reviews.json'))
W={'un':1,'une':1,'deux':2,'trois':3,'quatre':4,'cinq':5,'six':6,'sept':7,'huit':8,'dix':10,'quinze':15}
U={'jour':1,'jours':1,'semaine':7,'semaines':7,'mois':30,'an':365,'ans':365}
rx=re.compile(r"(\d{1,3}|un|une|deux|trois|quatre|cinq|six|sept|huit|dix|quinze)\s*(?:bons?\s+|longs?\s+)?(jours?|semaines?|mois|ans?)\b(\s+et\s+demi)?")
out=[];flags=collections.Counter();N=0
docs=[('TP',r['id'],r['note'],r['date'][:10],(r['titre'] or '')+'. '+r['texte'],r['nom']) for r in C]+[('LOOX',r['id'],r['note'],r['date'][:10],r['texte'],r['nom']) for r in L if not r['date'].endswith('T00:00:00Z')]
for plat,i,note,date,t,nom in docs:
    tn=norm(t)
    if not re.search(r'rembours',tn): continue
    N+=1
    for k,p in {'retour a ses frais':r"(a|de) (mes|nos|ses|leurs|propres) (propres )?frais|frais de retour|retour (est )?payant|17 ?(€|euros)",'escalade (banque, DGCCRF, SignalConso, plainte, avocat)':r"banque|litige|chargeback|opposition|dgccrf|signal ?conso|plainte|avocat|justice|tribunal|60 millions|ufc|econsumer",'finalement rembourse':r"(finalement|enfin|bien ete|j'ai ete|ai ete|a ete) rembours|remboursement (recu|effectue)|rembourse(e)? (apres|au bout|en)",'jamais / toujours pas rembourse':r"(toujours pas|jamais|aucun|pas de|toujours aucun|pas encore|attends? toujours|attente) (de |d'un |du |le )?rembours|rembours\w* (jamais|toujours pas)",'redemande de preuves / documents':r"(redemand|preuve|document|photo).{0,40}(envoi|renvoy|fourni|demand)|(envoi|renvoy|fourni|demand).{0,40}(preuve|document|photos)",'loterie / tirage au sort':r"loterie|tirage|tire au sort|tirees? au sort",'reponses automatiques / IA / chatbot':r"\bia\b|intelligence artificielle|chatbot|robot|automatique|copier.coller|message type|generee?s? par"}.items():
        if re.search(p,tn): flags[(k,'1-2' if note<=2 else ('3' if note==3 else '4-5'))]+=1
    best=0;ph=''
    for sent in re.split(r"[\.\!\?\n;]+",tn):
        if not re.search(r"rembours|retour|renvoy|attend|depuis",sent): continue
        for m in rx.finditer(sent):
            n=m.group(1); n=int(n) if n.isdigit() else W[n]; d=n*U[m.group(2)]+(15 if m.group(3) else 0)
            if 7<=d<=800 and d>best: best=d;ph=sent.strip()[:170]
    if best: out.append(dict(plat=plat,id=i,note=note,date=date,nom=nom,jours=best,phrase=ph))
json.dump(out,open('rembours_extraits.json','w'),ensure_ascii=False,indent=0)
print('avis mentionnant rembours*:',N)
for k in sorted(flags): print(k,flags[k])
v=sorted(x['jours'] for x in out if x['note']<=2)
print('durées (1-2*) n=',len(v),'med',statistics.median(v),'p25',v[len(v)//4],'p75',v[3*len(v)//4],'>=60j',sum(1 for x in v if x>=60),'>=90j',sum(1 for x in v if x>=90))
for x in out: print(x['plat'],x['note'],x['date'],x['jours'],'|',x['phrase'][:140])
