import re, json, sys, html
def infra(path):
    t = open(path, encoding='utf-8', errors='replace').read()
    out = {}
    m = re.search(r'Shopify\.shop\s*=\s*"([^"]+)"', t); out['myshopify'] = m.group(1) if m else None
    ids = set(re.findall(r'/s/files/1/(\d{4}/\d{4}/\d{4})/', t)); out['cdn_file_paths'] = sorted(ids)
    m = re.search(r'"shopId"\s*:\s*(\d+)', t) or re.search(r'shopId[\\"]*:\s*(\d+)', t) or re.search(r'shop_id=(\d+)', t)
    out['shopId'] = m.group(1) if m else None
    m = re.search(r'Shopify\.theme\s*=\s*(\{.*?\});', t); out['theme'] = m.group(1)[:300] if m else None
    m = re.search(r'"countryCode"\s*:\s*"([A-Z]{2})"', t); out['countryCode']=m.group(1) if m else None
    m = re.search(r'Shopify\.currency\s*=\s*(\{[^}]*\})', t); out['currency']=m.group(1) if m else None
    # pixels
    m = re.search(r'webPixelsConfigList:\s*(\[.*?\])\s*,\s*isMerchantRequest', t, re.S)
    px=[]
    if m:
        try:
            L=json.loads(m.group(1))
            for p in L:
                px.append({'id':p.get('id'),'type':p.get('type'),'apiClientId':p.get('apiClientId'),'conf':p.get('configuration')[:200] if p.get('configuration') else None})
        except Exception as e:
            px=[('parse error',str(e), m.group(1)[:500])]
    out['pixels']=px
    out['klaviyo']=sorted(set(re.findall(r'company_id=([A-Za-z0-9]{6})', t)) | set(re.findall(r'klaviyo[^"]{0,80}?[?&](?:company_id|a)=([A-Za-z0-9]{6})', t)))
    out['fbq']=sorted(set(re.findall(r"fbq\('init',\s*'(\d+)'", t)))
    out['emails']=sorted(set(e for e in re.findall(r'[\w.+-]+@[\w-]+\.[\w.-]+', t) if not e.endswith(('.png','.jpg','.js','.css','.webp','.svg'))))[:30]
    out['gtag']=sorted(set(re.findall(r'\b(G-[A-Z0-9]{8,12}|AW-\d{9,12}|GT-[A-Z0-9]{6,10}|GTM-[A-Z0-9]{5,8}|MC-[A-Z0-9]{8,12})\b', t)))
    out['apps']=sorted(set(re.findall(r'/extensions/[0-9a-f-]+/([a-z0-9._-]+)/assets', t)))[:60]
    out['app_hosts']=sorted(set(re.findall(r'https?://([a-z0-9.-]+\.(?:com|io|app|co|net))/', t)))[:80]
    out['ev_sections']=sorted(set(re.findall(r'(template--\d+__ev_[A-Za-z0-9_]+)', t)))
    out['sections_prefixes']=sorted(set(re.findall(r'template--\d+__([a-z]+)_', t)))
    out['trekkie_shopId']=re.findall(r'"shopId":(\d+)',t)[:2]
    return out
if __name__=='__main__':
    for p in sys.argv[1:]:
        print('=====',p); print(json.dumps(infra(p),indent=1,ensure_ascii=False))
