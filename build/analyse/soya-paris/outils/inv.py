"""Relevé des compteurs de stock publics de soya-paris.com (champ inventoryQuantity des offres Kaching).
Usage : python3 inv.py  → écrit inv/snap-<date>.json. Deux relevés espacés donnent les unités vendues entre les deux."""
import json,re,subprocess,datetime,sys
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
import os
PJ=subprocess.run(['curl','-sS','-A',UA,'https://soya-paris.com/products.json?limit=250'],capture_output=True,text=True).stdout
handles=[p['handle'] for p in json.loads(PJ)['products']]
os.makedirs('inv',exist_ok=True)
now=datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
snap={'utc':now,'products':{}}
for h in handles:
    html=subprocess.run(['curl','-sS','-A',UA,'-H','Cookie: localization=FR; cart_currency=EUR','https://soya-paris.com/products/'+h],capture_output=True,text=True).stdout
    q=[int(x) for x in re.findall(r'"inventoryQuantity":\s*(-?\d+)',html)]
    ids=re.findall(r'"id":\s*"?gid://shopify/ProductVariant/(\d+)"?[^{}]{0,400}?"inventoryQuantity":\s*(-?\d+)',html)
    snap['products'][h]={'sum':sum(q) if q else None,'values':q[:40],'pairs':ids[:40],'bytes':len(html)}
out=f"inv/snap-{now.replace(':','')}.json"; json.dump(snap,open(out,'w'),indent=1)
print(out); [print(h,v['sum'],v['values'][:8]) for h,v in snap['products'].items() if v['sum'] is not None]
