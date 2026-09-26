# CA TTC journalier par scénario de volume (unités/jour, compteurs) x hypothèse de prix moyen
P30={'bas':0.10*69.90+0.90*34.975,'central':0.20*69.90+0.80*(0.5*49.45+0.5*34.975),'haut':0.30*69.90+0.70*49.45}
P20={'bas':0.20*59.90+0.80*32.475,'central':0.20*59.90+0.80*38.71,'haut':0.20*59.90+0.80*44.95}
PH30={'bas':14.32,'central':14.90,'haut':0.7*14.90+0.3*17.90}
PL={'bas':19.90,'central':19.90,'haut':0.8*19.90+0.2*49.90}
PA=35.0
V={ # volumes unités/jour
 'A août hors pic (3-24/08)':dict(p30=164,p20=162,h30=0.5*164,lomb=54,aut=15),
 'B moyenne 8 semaines (3/08-26/09)':dict(p30=249,p20=162,h30=0.6*249,lomb=58,aut=15),
 'C 7-26/09 (French Days inclus)':dict(p30=461,p20=172,h30=324,lomb=67,aut=15),
}
print('prix/unité 3.0',{k:round(v,2) for k,v in P30.items()},' 2.0',{k:round(v,2) for k,v in P20.items()})
for n,v in V.items():
    line=[]
    for s in ['bas','central','haut']:
        ca=v['p30']*P30[s]+v['p20']*P20[s]+v['h30']*PH30[s]+v['lomb']*PL[s]+v['aut']*PA
        line.append(ca)
    o_lo=(v['p20']*0.2+v['p20']*0.8/4)+(v['p30']*0.2+v['p30']*0.8/4); o_hi=(v['p20']*0.2+v['p20']*0.8/2)+(v['p30']*0.2+v['p30']*0.8/2)
    print(f"{n:38s} jour: {line[0]:8.0f} {line[1]:8.0f} {line[2]:8.0f} €  | mois(30,4 j): {line[0]*30.4/1e3:6.0f} {line[1]*30.4/1e3:6.0f} {line[2]*30.4/1e3:6.0f} k€ | commandes/j ~{o_lo:.0f}-{o_hi:.0f} | panier ~{line[1]/o_hi:.0f}-{line[1]/o_lo:.0f} €")
    net=[x*30.4*f/1.2/1e3 for x,f in zip(line,[0.85,0.90,0.95])]
    print(f"{'':38s} mois HT net de remboursements (15/10/5 %) : {net[0]:6.0f} {net[1]:6.0f} {net[2]:6.0f} k€")
