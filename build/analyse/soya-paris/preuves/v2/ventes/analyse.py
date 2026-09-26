import json,glob,datetime
INV='/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya2/inv/'
ref=json.load(open('ref_variants.json'))
def T(s): return datetime.datetime.strptime(s,'%Y-%m-%dT%H:%M:%SZ')
# attribution : (page, slice) -> produit
GROUPS={
 'Oreiller Soya 3.0':('oreiller-soya-3-0',slice(0,4)),
 'Housse 3.0':('housse-d-oreiller-de-rechange-soya-3-0',slice(0,4)),
 'Oreiller Soya 2.0':('oreiller-soya-2-0',slice(0,1)),
 'Housse 2.0':('housse-d-oreiller-de-rechange-soya-1',slice(0,1)),
 'Coussin lombaire':('coussin-lombaire-ergonomique-soya',slice(0,1)),
 'Oreiller enfant':('oreiller-soya-enfant',slice(0,3)),
 'Housse enfant':('housse-doreiller-de-rechange-enfant',slice(0,3)),
 'Oreiller 1.0':('oreiller-soya-1-0',slice(0,1)),
 'Housse oreiller soie':('housse-d-oreiller-en-soie-naturelle-soya',slice(0,4)),
 'Draps soie':('draps-en-soie-naturelle-soya',None),
 'Housse couette soie':('housse-de-couette-en-soie-naturelle-soya',None),
 'Couette SoyaFresh':('couette-rafraichissante-soyafresh',None),
 'Draps SoyaFresh':('draps-rafraichissants-soyafresh',None),
 'Coussin siège':('ensemble-de-coussins-orthopediques',None),
 'Oreiller voyage':('oreiller-de-voyage-ergonomique-soya',None),
 'Masque soie':('masque-de-sommeil-en-soie',None),
 'Couverture lestée':('couverture-lestee-therapeutique',None),
 'Oreillers réglables':('ensemble-doreillers-reglables',None),
 'Coussin tête de lit':('coussin-ergonomique-avec-tete-de-lit',None),
}
def refval(g):
    page,sl=GROUPS[g]; r=ref[page]
    q=r['allq'] if sl is None else r['allq'][sl]
    return sum(q), r['utc'], (r['allq'][sl] if sl else None)
def snapval(s,g):
    page,sl=GROUPS[g]; p=s['products'].get(page)
    if not p or p['sum'] is None: return None,None
    if sl is None: return p['sum'],None
    return sum(p['values'][sl]), p['values'][sl]
snaps=sorted(glob.glob(INV+'snap-*.json'))
out={'ref':{g:refval(g) for g in GROUPS},'snaps':[]}
for f in snaps:
    s=json.load(open(f)); row={'utc':s['utc'],'d':{}}
    for g in GROUPS:
        v,vv=snapval(s,g); r,rt,rv=refval(g)
        if v is None: continue
        h=(T(s['utc'])-T(rt)).total_seconds()/3600
        row['d'][g]={'units':r-v,'hours':round(h,2),'per_variant':[a-b for a,b in zip(rv,vv)] if vv and rv else None}
    out['snaps'].append(row)
json.dump(out,open('deltas.json','w'),ensure_ascii=False,indent=1)
for row in out['snaps']:
    print('== snapshot',row['utc'])
    for g,d in row['d'].items():
        print(f"  {g:22s} {d['units']:5d} u en {d['hours']:5.2f} h  {d['per_variant'] or ''}")
