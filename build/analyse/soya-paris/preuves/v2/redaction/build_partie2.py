import re, sys
V2='/home/user/shopify/build/analyse/soya-paris/v2/'
def rd(n): return open(V2+n,encoding='utf-8').read().rstrip('\n')+'\n'
def rep1(s,a,b):
    n=s.count(a)
    assert n==1,(n,a[:90])
    return s.replace(a,b)

# ---------- 15 reseau
res=rd('reseau.md')
anchor="| 93550543180 (5xfyfp-ti) | depuis le 31/10/2025 ; catalogue recréé le 19/10/2025 |"
line=[l for l in res.split('\n') if l.startswith(anchor)]
assert len(line)==1
res=rep1(res,line[0]+'\n',line[0]+'\n\n> **Note de la rédaction (v2).** Le chapitre 17 (§ 17.2) date la bascule vers la boutique 93550543180 **au plus tard au 28/10/2025** (capture de la fiche 3.0 rendue à 06:36 UTC ce jour-là), et non au 31/10/2025 comme dans ce tableau ; la liste de domaines de cette boutique figure d\'ailleurs déjà dans une URL de police archivée le 28/10/2025 (§ 15.7). Le dossier retient le 28/10/2025.\n')
res=rep1(res,"### 15.15 Ce que ça change pour Somnila","> **Note de la rédaction (v2).** Ces corrections ont été reportées dans la Partie I (§ 0, § 1, § 2.2, § 2.6, § 6.6, § 7.7, § 10.2, § 11 ligne 8, § 12), avec la mention « corrigé v2 ».\n\n### 15.15 Ce que ça change pour Somnila")

# ---------- 16 pub
pub=rd('pub.md')
pub=rep1(pub,"## 15. Publicité et réseaux sociaux","## 16. Publicité et réseaux sociaux")
pub=re.sub(r'^### 15\.',"### 16.",pub,flags=re.M)
pub=pub.replace('§ 15.','§ 16.')
pub=rep1(pub,"aux missions « ventes » et « réseau ».","aux missions « ventes » et « réseau » (chapitres 17 et 15).")
pub=rep1(pub,"La mission « réseau » a identifié","La mission « réseau » (chapitre 15) a identifié")
pub=rep1(pub,"(voir le chapitre « réseau »)","(voir le chapitre 15)")
pub=rep1(pub,"le chapitre « ventes » fait référence","le chapitre 17 fait référence")
pub=rep1(pub,"(modèle de la mission « ventes »,","(modèle de la mission « ventes », chapitre 17,")
pub=rep1(pub,"et le chapitre « ventes » remplacent","et le chapitre 17 remplacent")
pub=rep1(pub,"(chapitre « réseau »)","(chapitre 15)")
assert '§ 15.' not in pub

# ---------- 17 trafic
tr=rd('trafic.md')
tr=rep1(tr,"## Combien vend SOYA PARIS, et d'où vient son trafic","## 17. Trafic et chiffre d'affaires : combien vend SOYA PARIS, et d'où vient son trafic")
tr=re.sub(r'^### (\d+)\. ',r'### 17.\1 ',tr,flags=re.M)
tr=re.sub(r'§ (\d+)(?![.\d])',r'§ 17.\1',tr)
tr=rep1(tr,"Précision pour le chapitre réseau (§ 15.4)","Précision pour le chapitre 15 (§ 15.4)")
tr=rep1(tr,"voir chapitre réseau)","voir chapitre 15)")
note_tr=("\n> **Note de la rédaction (v2).** Deux lignes de ce tableau sont tranchées par le chapitre 19, fondé sur les métadonnées de chaque avis plutôt que sur la page lue par WebFetch.\n"
 "> - *Trustpilot* : l'étiquette « Avis spontané » ne signifie pas que ces avis sont non sollicités. Le JSON du widget TrustBox montre que 99 % des 5★ et 98 % des 4★ récents arrivent par le lien d'évaluation diffusé par la marque (source « BasicLink », niveau « invited ») ; selon une source tierce, ce lien simple ne produit que des avis étiquetés « non sollicités », et la page transparence de Trustpilot les compte comme « organiques » (§ 19.3, § 19.13). Les sollicitations de la marque sont donc bien actives, environ 22 avis par jour : c'est le chapitre 19 qui l'emporte. La conclusion « le volume d'avis ne mesure pas les ventes » reste valable.\n"
 "> - *Loox* : le décompte complet des avis 2.0 datés d'avant la création du domaine est de **494** (§ 19.4), contre « au moins 476 » dans l'échantillon de ce chapitre.\n")
tr=rep1(tr,"\n### 17.7 Trafic : sources consultées",note_tr+"\n### 17.7 Trafic : sources consultées")

# ---------- 18 sourcing
so=rd('sourcing.md')
so=rep1(so,"## Origine, coût et marge de l'Oreiller Soya 3.0","## 18. Sourcing et marges : origine, coût et marge de l'Oreiller Soya 3.0")
so=rep1(so,"### 2 bis. ","### 18.2 bis ")
so=re.sub(r'^### (\d+)\. ',r'### 18.\1 ',so,flags=re.M)
so=rep1(so,"### Annexe — verdicts de la contre-vérification","### 18.11 Annexe du chapitre : verdicts de la contre-vérification")
so=re.sub(r'(?<!PHASE0\.md )(?<!dossier )§ (\d+)(?![.\d])',r'§ 18.\1',so)
note_lomb=("\n> **Note de la rédaction (v2).** Le ratio « lombaire / papillons » de 12 % est calculé **par oreiller** ; le § 17.5 estime que 20 à 40 % des **commandes** contiennent un coussin lombaire, en rapportant les coussins à un nombre de commandes estimé. Les deux chiffres n'ont pas la même base et ne se contredisent pas.\n")
so=rep1(so,"- **Housses 2.0 / 2.0 : 80 %** (63 / 79), mais elles y sont offertes.\n","- **Housses 2.0 / 2.0 : 80 %** (63 / 79), mais elles y sont offertes.\n"+note_lomb)
note_del=("\n> **Note de la rédaction (v2).** La « médiane d'environ 12 jours » de la ligne 8 porte sur une dizaine de délais tirés d'un échantillon surtout négatif. Le chapitre 19 (§ 19.8), avec une extraction validée phrase par phrase sur 33 à 34 avis, retient **13 à 13,5 jours** de la commande à la réception. Le dossier retient 13 jours.\n")
so=rep1(so,"\n**Conclusion [indice].**\n- Une partie au moins des commandes semble partir de Chine",note_del+"\n**Conclusion [indice].**\n- Une partie au moins des commandes semble partir de Chine")

# ---------- 19 voc
vo=rd('voc.md')
vo=rep1(vo,"## 15. La voix du client","## 19. La voix du client")
vo=re.sub(r'^### 15\.',"### 19.",vo,flags=re.M)
vo=vo.replace('§ 15.','§ 19.')
vo=rep1(vo,"(chapitre publicité)","(chapitre 16)")
assert '§ 15.' not in vo

# ---------- 20 motion
mo=rd('motion_lab.md')
mo=rep1(mo,"## 20. Laboratoire d'animation : les mouvements filmés image par image (26/09/2026)\n",
 "## 20. Laboratoire d'animation : les mouvements filmés image par image (26/09/2026)\n\n*Chapitre versé au dépôt le 26/09/2026 (`build/analyse/soya-paris/v2/motion_lab.md`, preuves dans `build/analyse/soya-paris/preuves/motion/`) ; il n'a pas fait l'objet d'une contre-vérification séparée. Il complète les § 4.1 à § 4.6 de la Partie I.*\n")
mo=rep1(mo,"(ils font planter le navigateur de capture, voir § 10)","(ils font planter le navigateur de capture, voir § 10 et § 14 ; renvoi précisé en v2)")
mo=rep1(mo,"pèsent 37,6 à 109,2 Mo (§ 10), ils ont été bloqués.","pèsent 37,6 à 109,2 Mo (§ 6.4 et Annexe A.2 ; renvoi précisé en v2), ils ont été bloqués.")

intro='''# Partie II — Renseignement approfondi (26/09/2026)

*Cinq enquêtes complémentaires ont été menées le 26/09/2026 pour aller plus loin que la Partie I : qui opère la boutique (§ 15), ce qu'elle diffuse en publicité (§ 16), combien elle vend et d'où vient son trafic (§ 17), d'où vient son produit et ce qu'il lui rapporte (§ 18), ce qu'en disent les acheteurs (§ 19). Chacune a été **contre-vérifiée le même jour** par un second passage qui a rouvert les preuves brutes, refait les calculs et signalé chaque correction dans le texte (« contre-vérification », « contre-enquête », « (corrigé) »). Le chapitre 20 reprend le laboratoire d'animation filmé image par image le même jour.*

| Chapitre | Mission | Constats relus | Confirmés | Corrigés | Non étayés |
|---|---|---|---|---|---|
| 15 | Réseau, opérateurs et infrastructure | 15 | 6 | 9 | 0 |
| 16 | Publicité, créations, influence et réseaux sociaux | 18 | 9 | 9 | 0 |
| 17 | Trafic, référencement et chiffre d'affaires estimé | 21 | 8 | 12 | 1 |
| 18 | Produit, fournisseur, coûts et marges | 16 | 8 | 7 | 1 |
| 19 | Voix du client | 15 | 4 | 10 | 1 |
| **Total** | | **85** | **35** | **47** | **3** |

**Comment lire la Partie II.**
- Les chapitres sont repris **en entier**, tels que contre-vérifiés (`build/analyse/soya-paris/v2/`). Seuls ont été modifiés : la numérotation (chapitres 16 à 19 et leurs sous-parties, renvois internes compris), les renvois entre chapitres (« chapitre « réseau » » devient « chapitre 15 », etc.) et deux renvois du chapitre 20. Les renvois « § 0 » à « § 14 » pointent vers la Partie I.
- Chaque chapitre rappelle en tête les alias de ses chemins de preuve (`reseau/`, `contre/`, `v2/`, `soya2/…`), tous relatifs à l'espace de travail de la session `/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/`. **Attention** : dans le chapitre 17, l'alias `v2/` désigne `soya2/ventes/`, pas le dossier `build/analyse/soya-paris/v2/` du dépôt.
- Quand deux chapitres de la Partie II divergent, une **« Note de la rédaction (v2) »** tranche en faveur de la preuve la plus directe (quatre notes : § 15.4, § 17.6, § 18.7, § 18.8).
- Sollicitation de la cible : les chapitres 15, 18 et 19 déclarent n'avoir envoyé aucune requête à soya-paris.com ; les chapitres 17 et 20 l'ont sollicité par des relevés espacés. Aucun contact, aucun compte, aucun formulaire, aucun achat.
- Les corrections que la Partie II impose à la Partie I sont listées en Annexe D.2.

'''

parts=[intro, res, pub, tr, so, vo, mo]
out=intro+'\n---\n\n'.join(p.rstrip('\n')+'\n' for p in parts[1:])
open(sys.argv[1],'w',encoding='utf-8').write(out)
print(len(out))
