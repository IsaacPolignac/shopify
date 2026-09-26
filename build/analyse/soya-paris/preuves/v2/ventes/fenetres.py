# Série temporelle des compteurs 3.0 / housses 3.0 / 2.0 / housse 2.0 : référence + relevés horaires + relevés légers
import json,glob,datetime
INV='/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya2/inv/'
ref=json.load(open('ref_variants.json'))
pts=[]  # (utc, key, value)
def add(t,k,v): pts.append((t,k,v))
# référence
add('2026-09-25T21:31:55Z','p30',sum(ref['pdp3']['allq'][0:4])); add('2026-09-25T21:31:55Z','h30',sum(ref['pdp3']['allq'][4:8]))
r=ref['oreiller-soya-3-0']; add(r['utc'],'p30',sum(r['allq'][0:4])); add(r['utc'],'h30',sum(r['allq'][4:8]))
r=ref['oreiller-soya-2-0']; add(r['utc'],'p20',r['allq'][0]); add(r['utc'],'h20',r['allq'][1])
for f in sorted(glob.glob(INV+'snap-*.json')):
    s=json.load(open(f)); t=s['utc']; P=s['products']
    p=P.get('oreiller-soya-3-0',{})
    if p.get('sum') is not None: add(t,'p30',sum(p['values'][0:4])); add(t,'h30',sum(p['values'][4:8]))
    elif P.get('housse-d-oreiller-de-rechange-soya-3-0',{}).get('sum') is not None: add(t,'h30',P['housse-d-oreiller-de-rechange-soya-3-0']['sum'])
    p=P.get('oreiller-soya-2-0',{})
    if p.get('sum') is not None: add(t,'p20',p['values'][0]); add(t,'h20',p['values'][1])
    lb=P.get('coussin-lombaire-ergonomique-soya',{})
    if lb.get('sum') is not None: add(t,'lomb',lb['sum'])
for l in open('samples.jsonl'):
    d=json.loads(l)
    if not d['v']: continue
    q=[x[2] for x in d['v']]
    if d['h']=='oreiller-soya-3-0': add(d['utc'],'p30',sum(q[0:4])); add(d['utc'],'h30',sum(q[4:8]))
    else: add(d['utc'],'p20',q[0]); add(d['utc'],'h20',q[1])
add(ref['coussin-lombaire-ergonomique-soya']['utc'],'lomb',ref['coussin-lombaire-ergonomique-soya']['allq'][0])
T=lambda s: datetime.datetime.strptime(s,'%Y-%m-%dT%H:%M:%SZ')
for k,lab in [('p30','Oreiller 3.0'),('h30','Housses 3.0'),('p20','Oreiller 2.0'),('h20','Housse 2.0'),('lomb','Coussin lombaire')]:
    ser=sorted(set((t,v) for t,kk,v in pts if kk==k))
    print('==',lab)
    prev=None
    for t,v in ser:
        if prev:
            dt=(T(t)-T(prev[0])).total_seconds()/3600
            du=prev[1]-v
            print(f"  {prev[0][11:16]}->{t[11:16]} UTC  {dt:5.2f} h  {du:+4d} u  ({du/dt if dt>0 else 0:6.1f} u/h)")
        prev=(t,v)
    if len(ser)>1:
        dt=(T(ser[-1][0])-T(ser[0][0])).total_seconds()/3600; du=ser[0][1]-ser[-1][1]
        print(f"  TOTAL {ser[0][0]} -> {ser[-1][0]} : {du} u en {dt:.2f} h = {du/dt:.2f} u/h")
