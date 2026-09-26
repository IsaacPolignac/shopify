# Relevé léger : fiches 3.0 et 2.0 (qui portent aussi les compteurs des housses), toutes les 10 min.
import re,subprocess,datetime,json,time,sys
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
RX=re.compile(r'"id":\s*(\d+),\s*"availableForSale":[^{}]*?"options":\s*\[([^\]]*)\][^{}]*?"inventoryQuantity":\s*(-?\d+)')
def grab(h):
    html=subprocess.run(['curl','-sS','-m','60','-A',UA,'-H','Cookie: localization=FR; cart_currency=EUR','https://soya-paris.com/products/'+h],capture_output=True,text=True).stdout
    return [(m.group(1),m.group(2).strip('"'),int(m.group(3))) for m in RX.finditer(html)],len(html)
n=int(sys.argv[1]) if len(sys.argv)>1 else 15
for i in range(n):
    for h in ['oreiller-soya-3-0','oreiller-soya-2-0']:
        t=datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
        try:
            v,b=grab(h)
        except Exception as e:
            v,b=[],0
        with open('samples.jsonl','a') as f: f.write(json.dumps({'utc':t,'h':h,'v':v,'bytes':b})+'\n')
        time.sleep(30)
    if i<n-1: time.sleep(840)
