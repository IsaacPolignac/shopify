# Modèle de chiffre d'affaires TTC à partir d'unités (prix EUR relevés dans la configuration Kaching et products.json)
# 3.0 : 1x 69,90 ; Duo 98,90 (2 u) ; Famille 139,90 (4 u). Housse 3.0 en ajout 14,90 (14,32 pour l'une des deux du Duo), seule 17,90.
# 2.0 : 1x 59,90 ; Duo 89,90 (2 u + 2 housses offertes) ; Famille 129,90 (4 u + 4 housses offertes).
# Lombaire : 19,90 via popup (-60 % sur 49,90), borne haute 49,90.
P30={'low':0.10*69.90+0.90*34.975,'mid':0.20*69.90+0.80*(0.5*49.45+0.5*34.975),'high':0.30*69.90+0.70*49.45}
PACK20={'low':32.475,'mid':38.71,'high':44.95}
def ca(u, scen):
    # u : dict d'unités ; 2.0 : 'p20' oreillers, 'h20' housses offertes (=> unités en pack)
    s=scen
    r={}
    r['3.0']=u.get('p30',0)*P30[s]
    r['housses 3.0']=u.get('h30',0)*{'low':14.32,'mid':14.90,'high':17.90*0.3+14.90*0.7}[s]
    single20=max(0,u.get('p20',0)-u.get('h20',0)); pack20=min(u.get('p20',0),u.get('h20',0))
    r['2.0']=single20*59.90+pack20*PACK20[s]
    r['lombaire']=u.get('lomb',0)*{'low':19.90,'mid':19.90,'high':0.8*19.90+0.2*49.90}[s]
    r['autres']=u.get('autres_eur',0)
    return r
if __name__=='__main__':
    import sys,json
    for s in ['low','mid','high']: print(s, round(P30[s],2))
    # Fenêtre mesurée 25/09 21:31 -> 26/09 10:52 UTC (voir fenetres.py)
    u={'p30':146,'h30':110,'p20':70,'h20':56,'lomb':15,'autres_eur':7*29.90+39.90+24.90}
    for s in ['low','mid','high']:
        r=ca(u,s); print(s,{k:round(v) for k,v in r.items()},'TOTAL',round(sum(r.values())))
    # Cumul des compteurs (26/09 10:48-10:52 ; valeurs absolues)
    cum={'p30':9865,'h30':4058,'p20':51261,'h20':41565,'lomb':13923}
    autres={'housse soie':(3942,29.90),'siège':(1065,39.90),'voyage':(872,24.90),'masque':(806,29.90),'1.0':(565,34.90),'enfant':(403,49.90),'draps soie':(443,49.90),'housse couette soie':(468,44.90),'couverture':(373,79.90),'réglables':(306,69.90),'tête de lit':(265,42.90),'housse enfant':(239,14.90),'couette SF':(126,89.90),'draps SF':(90,69.90)}
    cum['autres_eur']=sum(a*b for a,b in autres.values())
    print('autres produits (prix catalogue):',round(cum['autres_eur']))
    for s in ['low','mid','high']:
        r=ca(cum,s); print('CUMUL',s,{k:round(v) for k,v in r.items()},'TOTAL',round(sum(r.values())))
