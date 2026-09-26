import json,re,unicodedata,collections,sys
def norm(s):
    s=unicodedata.normalize('NFD',s.lower()); s=''.join(c for c in s if unicodedata.category(c)!='Mn')
    return s.replace('’',"'")
T={
'confort (positif)':r"\b(confortable|tres confort|super confort|confort\b|agreable|moelleux|douillet|bien dormi|dors (tres )?bien|dort bien|meilleur(e)? (sommeil|nuit)|nuits? (reparatrice|paisible|tranquille))",
'inconfort / mal dormi':r"(pas (du tout |tres |super )?confortable|inconfortable|mal dormi|dormi (tres )?mal|dors (tres )?mal|dort mal|jamais aussi mal|n'arrive pas a (dormir|m'y faire|si faire|s'y faire)|pas pu dormir)",
'hauteur / epaisseur':r"\b(hauteur|trop haut|trop bas|epais|epaisseur|plat\b|tres plat|\d+ ?cm)",
'fermete (dur / mou)':r"\b(trop dur|dur\b|durs\b|dure\b|ferme\b|fermete|trop ferme|rigide|trop mou|mou\b|molle|souple|souplesse|mousse (trop )?(dense|dure))",
'odeur':r"\b(odeur|sent (le|mauvais|fort)|pue|chimique|puant)",
'chaleur / fraicheur':r"\b(chaud|chaleur|transpir|fraicheur|frais\b|rafraich|froid)",
'taille / dimensions / taie':r"\b(taille|dimension|trop petit|trop grand|petit oreiller|largeur|longueur|format|taie)",
'douleurs (cou, dos, epaules)':r"\b(douleur|cervical|nuque|dos\b|epaule|torticolis|migraine|mal au cou|mal de tete|raideur|mal a la tete)",
'temps d adaptation':r"\b(adapt|habitu|temps d'adaptation|s'y faire|m'y faire)",
'livraison / delais':r"\b(livr|delai|colis|expedi|transporteur|colissimo|chronopost|retard|attente|arrive|recu\b|recue|reception)",
'non recu / commande incomplete':r"(jamais recu|pas recu|toujours rien|non recu|jamais arrive|qu'a moitie|manqu|incomplet|pas encore recu|rien recu|jamais livr)",
'retour / remboursement':r"\b(rembours|retour|renvoy|retourne|retracta|litige|chargeback|banque)",
'service client':r"\b(service client|sav\b|service apres|mail|e-mail|repond|reponse|joindre|contacter|telephone|chatbot|\bia\b|relance|reactif|reactivite)",
'qualite percue':r"\b(qualite|bas de gamme|cheap|fragile|couture|matiere|tissu|finition|solide|camelote|merde)",
'prix / valeur':r"\b(prix|cher|chere|\d+ ?(€|euros?)|rapport qualite|promo|reduction|tarif)",
'origine / chine / dropshipping':r"\b(chin|temu|aliexpress|alibaba|dropship|drop ship|made in|provenance|etats-unis|usa|amazon|pas francais|pas un site francais)",
'conformite a l annonce':r"(conforme (a|aux) (la |l'|les )?(photo|description|annonce|image|attente)|produit conforme|conforme a la commande|pas conforme|non conforme|ne correspond|publicite|mensong|trompeu|pas comme (sur|dans|la|les|a|en)|vendu (comme|pour)|polyester|\bsoie\b|annonce|photos? (du site|sur le site)|site (indique|annonce|precise|prétend|pretend)|promesse)",
'arnaque / fraude':r"\b(arnaque|escroc|voleur|volee?\b|fuir|frauduleu|fraude|malhonnete|scam)",
'faux avis / avis supprimes':r"(faux avis|avis positifs|avis sont faux|faux commentaires|commentaire a ete supprime|supprim.{0,30}avis|avis.{0,30}supprim|gardent que les avis)",
'emballage / compression':r"\b(emballage|carton|compress|sous vide|boite aux lettres|packaging|deball)",
'housse':r"\b(housse)",
'suivi de colis':r"\b(suivi|tracking|numero de suivi)",
'recommande':r"\b(recommande|conseille)",
}
TC={k:re.compile(v) for k,v in T.items()}
PRE=[(re.compile(r"(a|de) (mes|ses|leurs|nos|vos|tes) frais|frais (de|d')\s?(port|retour|livraison|envoi|expedition|renvoi)|frais supplementaires|frais express|sans frais|frais de douane"),' FRAISX '),(re.compile(r"(sur|de) le dos|sur le dos|dormir sur le|dors sur le|dort sur le"),' POSX ')]
def code(text):
    t=norm(text)
    for rx,rep in PRE: t=rx.sub(rep,t)
    return [k for k,rx in TC.items() if rx.search(t)]
if __name__=='__main__':
    C=json.load(open('tp_corpus.json'))
    L=json.load(open('loox_reviews.json'))
    def grp(n): return '1-2' if n<=2 else ('3' if n==3 else '4-5')
    rows=[]
    for r in C: rows.append(('TP',grp(r['note']),r['source'],r['date'][:7],code((r['titre'] or '')+' . '+r['texte'])))
    for r in L: rows.append(('LOOX',grp(r['note']),'minuit' if r['date'].endswith('T00:00:00Z') else 'horodate',r['date'][:7],code(r['texte'])))
    json.dump(rows,open('codage.json','w'),ensure_ascii=False)
    for plat in ['TP','LOOX']:
        rr=[x for x in rows if x[0]==plat and not (plat=='LOOX' and x[2]=='minuit')]
        n={g:sum(1 for x in rr if x[1]==g) for g in ['1-2','3','4-5']}
        print('==',plat,n)
        print(f"{'theme':34s} {'1-2':>12s} {'3':>12s} {'4-5':>12s}")
        for k in T:
            vals=[]
            for g in ['1-2','3','4-5']:
                c=sum(1 for x in rr if x[1]==g and k in x[4]); vals.append(f"{c:4d} ({100*c/max(n[g],1):4.0f}%)")
            print(f"{k:34s} "+' '.join(f"{v:>12s}" for v in vals))
