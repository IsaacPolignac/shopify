# Contre-verification S5 / S7 : compteurs 3.0, housses, lombaire (3 releves) et seuil de cout du pack Famille
import json,re
S='/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/'
def q(fn): return [int(x) for x in re.findall(r'"inventoryQuantity":\s*(-?\d+)',open(S+fn,errors='ignore').read())]
ref={'v3':q('soya/web/p_oreiller-soya-3-0.html')[:4],'h3':q('soya/web/p_housse-d-oreiller-de-rechange-soya-3-0.html'),
     'lomb':q('soya/web/p_coussin-lombaire-ergonomique-soya.html'),'v2':q('soya/web/p_oreiller-soya-2-0.html')[:1],'h2':q('soya/web/p_housse-d-oreiller-de-rechange-soya-1.html')}
pts=[('25/09 22:12',ref)]
for f in ('snap-2026-09-26T094803Z.json','snap-2026-09-26T114902Z.json'):
    d=json.load(open(S+'soya2/inv/'+f))['products']
    pts.append((f[5:21],{'v3':d['oreiller-soya-3-0']['values'][:4],'h3':d['housse-d-oreiller-de-rechange-soya-3-0']['values'],
      'lomb':d['coussin-lombaire-ergonomique-soya']['values'],'v2':d['oreiller-soya-2-0']['values'][:1],'h2':d['housse-d-oreiller-de-rechange-soya-1']['values']}))
print('variantes 3.0 : Blanc Bleu Gris Beige ; housses 3.0 : Bleu Blanc Gris Beige (ordre products.json)')
for t,v in pts: print(t,{k:(x,-sum(x)) for k,x in v.items()})
for (t0,a),(t1,b) in zip(pts,pts[1:]):
    dv={k:[x-y for x,y in zip(a[k],b[k])] for k in a}
    print(f'{t0} -> {t1}',dv,'housses/oreillers 3.0 = %.0f %%'%(100*sum(dv['h3'])/sum(dv['v3'])),'lombaire/papillons = %.0f %%'%(100*sum(dv['lomb'])/(sum(dv['v3'])+sum(dv['v2']))))
a,b=pts[0][1],pts[-1][1]; dv={k:[x-y for x,y in zip(a[k],b[k])] for k in a}
print('TOTAL',dv,'housses/oreillers 3.0 = %.1f %%'%(100*sum(dv['h3'])/sum(dv['v3'])),'lombaire/papillons = %.1f %%'%(100*sum(dv['lomb'])/(sum(dv['v3'])+sum(dv['v2']))))
cum_v=[-x for x in ref['v3']]; cum_h=[-x for x in ref['h3']]
col_v=dict(zip(['Blanc','Bleu','Gris','Beige'],cum_v)); col_h=dict(zip(['Bleu','Blanc','Gris','Beige'],cum_h))
print('cumul par coloris (housse / oreiller) :',{c:'%d/%d = %.0f %%'%(col_h[c],col_v[c],100*col_h[c]/col_v[c]) for c in col_v})
print('parts oreillers',{c:'%.0f %%'%(100*col_v[c]/sum(cum_v)) for c in col_v},'parts housses',{c:'%.0f %%'%(100*col_h[c]/sum(cum_h)) for c in col_h})
# Seuil de cout unitaire pour que le pack Famille (139,90) reste >= 0 apres CAC 25 (frais central 3,1 %+0,29 ; retours 5 % TTC)
for vat in (True,False):
    for duty in (3.0,0.0):
        p=139.90; net=(p/1.2 if vat else p)-(p*0.031+0.29)-p*0.05-duty-25
        print('Famille TVA %s droit %.0f -> cout max par oreiller %.2f EUR'%('reversee' if vat else 'non reversee',duty,net/4))
print('Envoi direct express, entrees du chapitre : FOB 7,60-8,80 + express 12,50-15,00 =',7.60+12.50,'-',8.80+15.00,'EUR avant droit de 3 EUR')
