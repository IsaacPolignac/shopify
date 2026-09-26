"""Relevé des compteurs de stock publics de soya-paris.com (champ inventoryQuantity des offres Kaching).
Usage : python3 inv.py  → écrit inv/snap-<date>.json. Deux relevés espacés donnent les unités vendues entre les deux.

Lecture : comparer variante par variante (clé = id de variante), jamais le champ « sum » d'une fiche.
Une fiche contient aussi les compteurs des articles proposés en complément : la fiche Oreiller Soya 3.0
porte ses 4 coloris ET les 4 housses 3.0 pré-cochées. La clé « variants » dédoublonne toutes les fiches."""
import json, re, subprocess, datetime, os, time
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
# Même motif que l'analyse du dossier (§ 17) : id de variante, options, compteur.
RX = re.compile(r'"id":\s*(\d+),\s*"availableForSale":[^{}]*?"options":\s*\[([^\]]*)\][^{}]*?"inventoryQuantity":\s*(-?\d+)')
RXQ = re.compile(r'"inventoryQuantity":\s*(-?\d+)')


def get(url):
    return subprocess.run(['curl', '-sS', '-A', UA, '-H', 'Cookie: localization=FR; cart_currency=EUR', url],
                          capture_output=True, text=True).stdout


products = json.loads(get('https://soya-paris.com/products.json?limit=250'))['products']
owner = {str(v['id']): (p['handle'], v['title']) for p in products for v in p['variants']}
os.makedirs('inv', exist_ok=True)
now = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
snap = {'utc': now, 'products': {}, 'variants': {}}
for p in products:
    h = p['handle']
    time.sleep(3)  # au-delà d'une requête toutes les 2-3 s, Shopify renvoie des pages réduites sans compteur
    html = get('https://soya-paris.com/products/' + h)
    q = [int(x) for x in RXQ.findall(html)]
    own = []
    for vid, opts, qty in RX.findall(html):
        qty = int(qty)
        prod, title = owner.get(vid, (None, opts.replace('"', '')))
        snap['variants'][vid] = {'produit': prod, 'variante': title, 'qte': qty, 'lu_sur': h}
        if prod == h:
            own.append(qty)
    snap['products'][h] = {'propres': sum(own) if own else None, 'sum': sum(q) if q else None,
                           'values': q[:40], 'bytes': len(html)}
out = f"inv/snap-{now.replace(':', '')}.json"
json.dump(snap, open(out, 'w'), ensure_ascii=False, indent=1)
print(out)
for h, v in snap['products'].items():
    if v['propres'] is not None:
        print(f"{h:45s} {v['propres']:>8}  (compteurs propres à la fiche)")
missing = [h for h, v in snap['products'].items() if v['sum'] is None]
if missing:
    print('Fiches sans compteur (page bloquée ou réduite) :', ', '.join(missing))
