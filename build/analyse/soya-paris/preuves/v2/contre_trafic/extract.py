import re,sys,glob,os,datetime,json,gzip
VR=re.compile(r'\{\s*"id":\s*(\d+),\s*"availableForSale":\s*(\w+),\s*"price":\s*(\d+),\s*"compareAtPrice":\s*([\w\d]+),\s*"options":\s*\[([^\]]*)\].*?"inventoryManagement":\s*("?[\w]*"?),\s*"inventoryPolicy":\s*"(\w+)",\s*"inventoryQuantity":\s*(-?\d+)',re.S)
def ts(h,f):
    rq=re.findall(r'"reqid":"[^"]*-(\d{10})"',h)
    return datetime.datetime.utcfromtimestamp(int(rq[0])).strftime('%Y-%m-%dT%H:%M:%SZ') if rq else 'NA'
def cur(h):
    m=re.search(r'Shopify\.currency\s*=\s*\{"active":"(\w+)"',h)
    return m.group(1) if m else '?'
def ext(f):
    raw=open(f,'rb').read()
    if raw[:2]==b'\x1f\x8b': raw=gzip.decompress(raw)
    h=raw.decode('utf-8','ignore')
    out={}
    for m in VR.finditer(h):
        if len(m.group(0))>3000: continue
        vid=m.group(1)
        out.setdefault(vid,(int(m.group(8)),m.group(7),m.group(6),int(m.group(3))/100,m.group(5)))
    return ts(h,f),cur(h),out
if __name__=='__main__':
    res={}
    for f in sys.argv[1:]:
        t,c,o=ext(f)
        res[os.path.basename(f)]={'utc':t,'cur':c,'v':o}
        print(os.path.basename(f),t,c,len(o))
    json.dump(res,open('extract_out.json','w'),indent=0)
