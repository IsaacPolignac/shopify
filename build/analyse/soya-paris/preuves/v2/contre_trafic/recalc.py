# Contre-calculs (26/09/2026). Sources : extract_out.json (extract.py sur ventes/wayback/*.html), inv/snap-2026-09-26T114902Z.json, ventes/samples.jsonl
import json,collections,datetime
d=json.load(open('extract_out.json'))
ser=collections.defaultdict(dict)
for f,r in d.items():
    for vid,(q,pol,mg,price,opt) in r['v'].items(): ser[vid][r['utc']]=q
now={'53641646866764':-3963,'53642060005708':-2018,'56869335826764':-2451,'53641646932300':-1433,
     '53641574416716':-1352,'53641574449484':-756,'56869321277772':-1166,'53641574482252':-784}
for v,q in now.items(): ser[v]['2026-09-26T11:14:52Z']=q
def falls(vid,start=None,end=None):
    pts=sorted((t,q) for t,q in ser[vid].items() if (start is None or t>=start) and (end is None or t<=end))
    return sum(max(0,a[1]-b[1]) for a,b in zip(pts,pts[1:]))
P=['53641646866764','53642060005708','56869335826764','53641646932300']
H=['53641574416716','53641574449484','56869321277772','53641574482252']
tot3=sum(falls(v) for v in P); pre=sum(falls(v,end='2026-08-03T05:03:27Z') for v in P); post=tot3-pre
h3=sum(falls(v) for v in H)
print('3.0 baisses observées',tot3,'avant 03/08',pre,'après',post,'| housses 3.0',h3)
# prix par unité 3.0 : avant 03/08 pas de pack Famille (1x 69,90 ; Duo 49,45/u) ; après : Famille 34,975/u
pre_lo,pre_hi=0.10*69.90+0.90*49.45,0.30*69.90+0.70*49.45
post_lo,post_hi=0.10*69.90+0.90*34.975,0.30*69.90+0.70*49.45
c3=(pre*pre_lo+post*post_lo, pre*pre_hi+post*post_hi)
# 2.0 : 51 270 u (11:49) dont 41 576 housses offertes => 9 694 unités seules à 59,90 ; packs entre 32,475 (Famille 4 u) et 44,95 (Duo)
p20,h20=51270,41576; c2=((p20-h20)*59.90+h20*32.475,(p20-h20)*59.90+h20*44.95)
lomb=13937+292; cl=(lomb*19.90,lomb*(0.8*19.90+0.2*49.90))
ch=(h3*14.32,h3*15.80)
autres=372859
lo=c3[0]+c2[0]+cl[0]+ch[0]+autres; hi=c3[1]+c2[1]+cl[1]+ch[1]+autres
print('3.0 %.2f-%.2f M€ | 2.0 %.2f-%.2f | lombaire %.2f-%.2f | housses 3.0 %.2f-%.2f | autres %.2f'%(c3[0]/1e6,c3[1]/1e6,c2[0]/1e6,c2[1]/1e6,cl[0]/1e6,cl[1]/1e6,ch[0]/1e6,ch[1]/1e6,autres/1e6))
days=(datetime.datetime(2026,9,26,11,49)-datetime.datetime(2025,10,19,8,10)).total_seconds()/86400
print('TOTAL %.2f-%.2f M€ TTC sur %.0f jours ; ramené à 365 j : %.2f-%.2f M€'%(lo/1e6,hi/1e6,days,lo/1e6*365/days,hi/1e6*365/days))
# commandes/jour avec la même fourchette que les prix (10 à 30 % d'unités seules ; packs Famille à Duo)
def orders(u3,u2):
    return (u3*(0.10+0.90/4)+u2*(0.20+0.80/4), u3*(0.30+0.70/2)+u2*(0.20+0.80/2))
for n,u3,u2,lb,ca in [('A août',164,162,54,(15232,20101)),('B 8 sem.',249,162,58,(19547,25995)),('C 07-26/09',461,172,67,(30761,41250))]:
    o=orders(u3,u2); print(n,'commandes/j %.0f-%.0f'%o,'| lombaire/commande %.0f-%.0f %%'%(100*lb/o[1],100*lb/o[0]),'| panier %.0f-%.0f €'%(ca[0]/o[1],ca[1]/o[0]))
# conversion août avec SimilarWeb = 345,6 k visites en août (juillet 164 560 x 2,10)
oa=orders(164,162); print('conversion août %.1f-%.1f %%'%(100*oa[0]*31/345600,100*oa[1]*31/345600), '| si 345,6 k = 3 mois : %.1f-%.1f %%'%(100*oa[0]*31/115200,100*oa[1]*31/115200))
print('164560*2.10 =',164560*2.10)
# housse 2.0 contre oreiller 2.0, 28/10 -> 26/12/2025
print('housse 2.0 28/10->26/12 :',ser['53641388360012']['2025-10-28T08:00:57Z']-ser['53641388360012']['2025-12-26T18:53:55Z'],' oreiller 2.0 :',ser['53641794158924']['2025-10-28T08:00:57Z']-ser['53641794158924']['2025-12-26T18:53:55Z'])
