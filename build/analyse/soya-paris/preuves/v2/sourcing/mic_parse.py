import sys,re,html,json
for fn in sys.argv[1:]:
    t=open(fn,encoding='utf-8',errors='ignore').read()
    # product cards: find title + price pairs in text
    txt=re.sub(r'<script.*?</script>|<style.*?</style>','',t,flags=re.S)
    txt=html.unescape(re.sub(r'<[^>]+>','\n',txt)); lines=[l.strip() for l in txt.split('\n') if l.strip()]
    out=[]
    for i,l in enumerate(lines):
        m=re.match(r'^(US\$\s*[\d.]+(\s*-\s*[\d.]+)?)\s*/\s*(Piece|Pieces|Set|Pair|Unit)',l) or re.match(r'^US\$\s*[\d.]+(\s*-\s*[\d.]+)?$',l)
        if m:
            # title: look back for a line with 'Pillow' or 'Cushion' or 'Cover'
            title=''
            for j in range(i-1,max(0,i-8),-1):
                if re.search(r'pillow|cushion|cover|case',lines[j],re.I) and len(lines[j])>20: title=lines[j]; break
            moq=''
            for j in range(i+1,min(len(lines),i+6)):
                if re.search(r'\(MOQ\)|Min\. Order|MOQ',lines[j]) : moq=lines[j]+' '+(lines[j-1] if j>0 else ''); break
            out.append((l,title[:110],moq[:60]))
    print('=====',fn,len(out))
    seen=set()
    for o in out:
        if o in seen: continue
        seen.add(o); print(' | '.join(o))
