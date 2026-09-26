import json,re,glob,collections
def nd(f):
    h=open(f,encoding='utf-8',errors='replace').read()
    m=re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>',h,re.S)
    return json.loads(m.group(1))
out=[]
for f in ['wb/a2025-08-19.dec.html','wb/a2025-08-22.dec.html','wb/a2026-03-15_p1.html','wb/a2026-03-15_p2.html','wb/a2026-03-15_p3.html','wb/a2026-03-15_p4.html','wb/a2026-03-15_en.html']:
    pp=nd(f)['props']['pageProps']
    bu=pp['businessUnit']; fl=pp.get('filters',{})
    rb=bu.get('activity',{}).get('replyBehavior')
    print(f, bu.get('numberOfReviews'), bu.get('trustScore'), fl.get('reviewStatistics',{}).get('ratings'), fl.get('selected',{}).get('sort'), rb)
    c=collections.Counter((r['rating'],r['labels']['verification']['reviewSourceName']) for r in pp['reviews'])
    print('  ',sorted(c.items()), 'replies:',sum(1 for r in pp['reviews'] if r.get('reply')))
    for r in pp['reviews']:
        r['_snap']=f; out.append(r)
    if pp.get('aiSummary'): print('  AI:',json.dumps(pp['aiSummary'],ensure_ascii=False)[:1500])
json.dump(out,open('wb/wb_reviews.json','w'),ensure_ascii=False,indent=0)
print(len(out), len({r['id'] for r in out}))
