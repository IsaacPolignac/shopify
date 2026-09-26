import re,json,glob,os,datetime
RX=re.compile(r'"id":\s*(\d+),\s*"availableForSale":[^{}]*?"options":\s*\[([^\]]*)\][^{}]*?"inventoryQuantity":\s*(-?\d+)')
RXQ=re.compile(r'"inventoryQuantity":\s*(-?\d+)')
def titles_before(h,pos):
    t=re.findall(r'"title":\s*"([^"]{1,90})"',h[max(0,pos-20000):pos]); return t[-1] if t else None
def parse(path):
    h=open(path,errors='ignore').read()
    allq=[int(x) for x in RXQ.findall(h)]
    v=[(m.group(1),m.group(2).strip('"'),int(m.group(3)),titles_before(h,m.start())) for m in RX.finditer(h)]
    return v,allq
SP='/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya'
ref={}
for p in sorted(glob.glob(SP+'/web/p_*.html'))+[SP+'/pdp3.html']:
    v,allq=parse(p)
    ts=datetime.datetime.utcfromtimestamp(os.path.getmtime(p)).strftime('%Y-%m-%dT%H:%M:%SZ')
    handle=os.path.basename(p)[2:-5] if '/web/' in p else 'pdp3'
    ref[handle]={'utc':ts,'variants':v,'allq':allq}
json.dump(ref,open('ref_variants.json','w'),ensure_ascii=False,indent=0)
snap=json.load(open(glob.glob('/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya2/inv/snap-*.json')[0]))
for h,r in ref.items():
    if h=='pdp3': continue
    s=snap['products'].get(h,{})
    print(h, 'ref n',len(r['allq']),'parsed',len(r['variants']),'snap n',len(s.get('values',[])), 'titles',sorted(set(str(x[3]) for x in r["variants"])))
