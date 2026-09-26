import json,datetime,collections
rows=json.load(open('wayback/serie.json'))
T=lambda s: datetime.datetime.strptime(s,'%Y-%m-%dT%H:%M:%SZ')
# point actuel (relevés du 26/09)
now={'53641646866764':-3963,'53642060005708':-2018,'56869335826764':-2451,'53641646932300':-1433,
     '53641574416716':-1352,'53641574449484':-756,'56869321277772':-1166,'53641574482252':-784,
     '53641794158924':-51261,'53641388360012':-41565,'53641388097868':-13923}
nowt={'53641794158924':'2026-09-26T11:15:22Z','53641388360012':'2026-09-26T11:15:22Z','53641388097868':'2026-09-26T09:48:03Z'}
ser=collections.defaultdict(dict)
for r in rows: ser[r['id']][r['utc']]=(r['q'],r['policy'],r['prix'],r['title'],r['opt'])
for vid,q in now.items():
    t=nowt.get(vid,'2026-09-26T11:14:52Z'); old=next(iter(ser[vid].values())) if ser[vid] else (None,'continue',None,'','')
    ser[vid][t]=(q,'continue',None,old[3],old[4])
groups={'Oreiller 3.0 (4 coloris)':['53641646866764','53642060005708','56869335826764','53641646932300'],
        'Housses 3.0 (4 coloris)':['53641574416716','53641574449484','56869321277772','53641574482252'],
        'Oreiller 2.0':['53641794158924'],'Housse 2.0':['53641388360012'],'Coussin lombaire':['53641388097868']}
out=[]
for g,ids in groups.items():
    # dates communes à toutes les variantes du groupe
    common=sorted(set.intersection(*[set(ser[i].keys()) for i in ids]))
    print('==',g)
    for a,b in zip(common,common[1:]):
        da=(T(b)-T(a)).total_seconds()/86400
        deltas=[ser[i][a][0]-ser[i][b][0] for i in ids]
        up=[d for d in deltas if d<0]
        tot=sum(d for d in deltas if d>0)
        flag='(hausse sur %d variante(s) : réassort ou correction)'%len(up) if up else ''
        pol=ser[ids[0]][b][1]
        print(f"  {a[:10]} -> {b[:10]}  {da:6.1f} j  baisse {tot:6d} u  = {tot/da:6.1f} u/j  {flag} politique={pol}")
        out.append((g,a,b,round(da,2),tot,round(tot/da,1),len(up),pol))
open('rythmes_wayback.tsv','w').write('groupe\tdebut\tfin\tjours\tbaisse_unites\tunites_par_jour\tvariantes_en_hausse\tpolitique\n'+'\n'.join('\t'.join(map(str,x)) for x in out)+'\n')
