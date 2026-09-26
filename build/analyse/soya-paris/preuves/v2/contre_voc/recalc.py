# Contre-vérification « voix du client » (26/09/2026) : recalculs sur les preuves de soya2/avis/
import json,re,collections,statistics as st,sys
A='../avis/'
sys.path.insert(0,A)
out=[]
def p(*a): out.append(' '.join(str(x) for x in a))
# 1. Disparition d'avis entre le 22/08/2025 et le 15/03/2026
def nd(f):
    h=open(A+'wb/'+f,encoding='utf-8',errors='replace').read()
    return json.loads(re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>',h,re.S).group(1))['props']['pageProps']
r22=nd('a2025-08-22.dec.html')['filters']['reviewStatistics']['ratings']
r15=nd('a2026-03-15_p1.html')['filters']['reviewStatistics']['ratings']
md=nd('a2026-03-15_transparency.html')['reviewStatistics']['monthlyDistribution']['all']
after=['2025-september','2025-october','2025-november','2025-december','2026-january','2026-february','2026-march']
p('== Avis publiés au plus tard fin août 2025 encore présents le 15/03/2026 (total 15/03 - mois sept. 2025 à mars 2026 de la page transparence)')
for k in ['one','two','three','four','five']:
    later=sum(md[k][m] for m in after); surv=r15[k]-later
    p(k,'22/08/2025 :',r22[k],'| survivants <= 31/08/2025 au 15/03/2026 :',surv,'| écart :',surv-r22[k])
p('total 22/08/2025',r22['total'],'| survivants',r15['total']-sum(md[k][m] for k in ['one','two','three','four','five'] for m in after))
# 2. Textes Loox réutilisés sous des noms différents
L=json.load(open(A+'loox_reviews.json'))
imp=lambda r:r['date'].endswith('T00:00:00Z')
g=collections.defaultdict(list)
for r in L:
    if len(r['texte'])>25: g[r['texte'].strip().lower()].append(r)
d={t:v for t,v in g.items() if len(v)>1}
p('== Loox : textes identiques (>25 car.) :',len(d),'textes,',sum(len(v) for v in d.values()),'avis')
p('   groupes 100 % importés :',sum(1 for v in d.values() if all(imp(r) for r in v)),'textes /',sum(len(v) for v in d.values() if all(imp(r) for r in v)),'avis ; noms distincts dans ces groupes :',sum(len({r['nom'] for r in v}) for v in d.values() if all(imp(r) for r in v)))
for t,v in sorted(d.items(),key=lambda x:-len(x[1]))[:6]:
    p('  ',len(v),'x',repr(t[:70]),[(r['nom'],r['date'][:10],'V' if r['verifie'] else '-') for r in v])
p('   groupes horodatés :',[(t[:50],[(r['nom'],r['date'][:16]) for r in v]) for t,v in d.items() if not any(imp(r) for r in v)])
pre=[r for r in L if r['date']<'2024-09-05']
p('== Avis antérieurs au 05/09/2024 :',len(pre),'dont citant SOYA :',sum(1 for r in pre if re.search('soya',r['texte'],re.I)))
p('   premier avis horodaté (collecte Loox) :',min(r['date'] for r in L if not imp(r)))
# 3. Accord au féminin sous prénom masculin
males=set("Quentin Alexandre Hugo Julien Maxime Florian Damien Sylvain Olivier Romain".split())
fem=re.compile(r"\b(je suis|suis|très|vraiment|j'en suis|j’en suis)\s+(très\s+|tellement\s+)?(contente|ravie|satisfaite|convaincue|déçue|reposée|détendue)\b",re.I)
h=[r for r in L if re.split(r'[\s\.]',r['nom'])[0] in males and (fem.search(r['texte']) or re.search(r'\b(reposée|détendue|déçue)\b',r['texte']))]
p('== Prénom masculin + accord féminin :',len(h),'| importés',sum(imp(r) for r in h),[(r['nom'],r['date'][:10]) for r in h])
# 4. Soya 3.0, avis Loox horodatés 01/07-25/09/2026, doublon exact retiré
s3=[r for r in L if r['produit']=='oreiller-soya-3-0' and not imp(r) and r['date']>='2026-07-01']
u={}
for r in s3: u.setdefault((r['nom'],r['texte']),r)
for lab,rr in [('avec doublon',s3),('sans doublon',list(u.values()))]:
    c=collections.Counter(r['note'] for r in rr); n=len(rr)
    p('== 3.0 T3 2026',lab,n,[c[i] for i in range(1,6)],'moy',round(sum(r['note'] for r in rr)/n,2),'1-2*',round((c[1]+c[2])/n*100,1),'%')
# 5. Remboursements (liste validée de l'enquêteur)
c=json.load(open(A+'rembours_cure.json')); v=sorted(x[5] for x in c)
p('== Remboursement : n',len(v),'médiane',st.median(v),'quartiles (exclusif)',st.quantiles(v,n=4),'(inclusif)',st.quantiles(v,n=4,method='inclusive'),'>=90 j',sum(x>=90 for x in v))
# 6. Service / produit selon le regroupement
rows=json.load(open(A+'codage.json'))
tp=[x for x in rows if x[0]=='TP' and x[1]=='1-2']
S={'livraison / delais','non recu / commande incomplete','retour / remboursement','service client','suivi de colis'}
for lab,P in [('produit étroit (enquêteur)',{'inconfort / mal dormi','hauteur / epaisseur','fermete (dur / mou)','odeur','taille / dimensions / taie','chaleur / fraicheur','qualite percue','housse'}),
              ('produit large (+douleurs, confort, adaptation, emballage)',{'inconfort / mal dormi','hauteur / epaisseur','fermete (dur / mou)','odeur','taille / dimensions / taie','chaleur / fraicheur','qualite percue','housse','douleurs (cou, dos, epaules)','confort (positif)','temps d adaptation','emballage / compression'})]:
    cc=collections.Counter((bool(set(x[4])&S),bool(set(x[4])&P)) for x in tp)
    p('== TP 1-2* (196)',lab,'service seul',cc[(True,False)],'produit seul',cc[(False,True)],'les deux',cc[(True,True)],'aucun',cc[(False,False)])
# 7. Composition des périodes (évolution des thèmes)
C=json.load(open(A+'tp_corpus.json'))
def per(d):
    return 'S2-2025' if '2025-07'<=d<'2026-01' else ('S1-2026' if '2026-01'<=d<'2026-07' else ('T3-2026' if d>='2026-07' else 'avant'))
p('== Composition TP 1-2* par période (période, note) :',sorted(collections.Counter((per(r['date'][:7]),r['note']) for r in C if r['note']<=2).items()))
# 8. Avis sur invitation écrits avant réception
from themes import norm
rx=re.compile(r"(toujours (pas|rien) (recu|arrive|livre)|n'ai pas (encore )?recu|en attente de (reception|livraison)|pas encore recu|j'attends depuis \d+ jours la livraison)")
hb=[r for r in C if r['source']=='BasicLink' and rx.search(norm((r['titre'] or '')+' '+r['texte']))]
p('== Avis BasicLink écrits colis non reçu :',len(hb),[(r['nom'],r['note'],r['date'][:10]) for r in hb])
open('recalc_out.txt','w').write('\n'.join(out)+'\n'); print('\n'.join(out))
