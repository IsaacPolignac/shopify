import sys,re,html,statistics
for fn in sys.argv[1:]:
    t=open(fn,encoding='utf-8',errors='ignore').read()
    cards=re.findall(r'<h2 class="product-name"[^>]*>\s*<a title="([^"]+)"[^>]*href="([^"]+)".*?<strong class="price">(.*?)</strong>.*?<span>\s*([\d,]+ \w+)</span>\s*</span>\s*<span class="moq-text">.*?<span title="([^"]+)"',t,re.S)
    print('=====',fn.split('hot-china-products_')[-1][:60],len(cards))
    lows=[]
    for title,href,price,moq,comp in cards:
        p=re.sub(r'<[^>]+>','',price)
        nums=[float(x) for x in re.findall(r'[\d.]+',p)]
        if nums: lows.append(nums[0])
        print(f'{p:16s} | MOQ {moq:12s} | {html.unescape(title)[:95]} | {comp[:40]}')
    if lows: print('   bas de fourchette: min %.2f  médiane %.2f  max %.2f  (n=%d)'%(min(lows),statistics.median(lows),max(lows),len(lows)))
