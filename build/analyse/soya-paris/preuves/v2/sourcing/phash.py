import glob,os,json,sys
import numpy as np
from PIL import Image
S='/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad'
B='/home/user/shopify/build/images'
def load(f):
    im=Image.open(f)
    if im.mode in ('RGBA','LA','P'):
        im=im.convert('RGBA'); bg=Image.new('RGBA',im.size,(255,255,255,255)); bg.alpha_composite(im); im=bg
    return im.convert('L')
def ahash(g,n=8):
    a=np.asarray(g.resize((n,n),Image.LANCZOS),dtype=float); return (a>a.mean()).flatten()
def dhash(g,n=8):
    a=np.asarray(g.resize((n+1,n),Image.LANCZOS),dtype=float); return (a[:,1:]>a[:,:-1]).flatten()
def dct2(a):
    N=a.shape[0]; k=np.arange(N); C=np.cos(np.pi*(2*k[None,:]+1)*k[:,None]/(2*N)); return C@a@C.T
def phash(g,n=8,hs=32):
    a=np.asarray(g.resize((hs,hs),Image.LANCZOS),dtype=float); d=dct2(a)[:n,:n].flatten(); med=np.median(d[1:]); return d>med
def feats(f):
    g=load(f)
    return dict(a=ahash(g),d=dhash(g),p=phash(g))
soya=[]
for pat in [S+'/soya/gallery/[0-9]*.jpg',S+'/pdpwork/g_*.img',S+'/pdpwork/k_*.img',S+'/soya2/sourcing/img_soya/*_*.*',S+'/soya_prix/imgs/soya_*.img']:
    soya+=[f for f in sorted(glob.glob(pat)) if not f.endswith('.tsv')]
som=sorted(glob.glob(B+'/source/*/*.jpg'))+sorted(glob.glob(B+'/shopify/*.jpg'))
print(len(soya),len(som),file=sys.stderr)
F={}
for f in soya+som:
    try: F[f]=feats(f)
    except Exception as e: print('ERR',f,e,file=sys.stderr)
def ham(x,y): return int((x!=y).sum())
res=[]
for s in soya:
    if s not in F: continue
    for m in som:
        if m not in F: continue
        da=ham(F[s]['a'],F[m]['a']); dd=ham(F[s]['d'],F[m]['d']); dp=ham(F[s]['p'],F[m]['p'])
        res.append((dp+dd+da,dp,dd,da,s,m))
res.sort()
out=open('hash_cross.tsv','w')
out.write('somme\tpHash\tdHash\taHash\tsoya\tsomnila\n')
for r in res: out.write('\t'.join(map(str,r[:4]))+'\t'+r[4].replace(S,'')+'\t'+r[5].replace(B,'')+'\n')
out.close()
# per-soya best
print('--- 25 paires les plus proches (sur 64 bits chacune) ---')
for r in res[:25]: print(r[:4], r[4].replace(S,''), r[5].replace(B,''))
# distribution
arr=np.array([r[1] for r in res]); print('pHash: min',arr.min(),'p1',np.percentile(arr,1),'median',np.median(arr))
arr=np.array([r[2] for r in res]); print('dHash: min',arr.min(),'p1',np.percentile(arr,1),'median',np.median(arr))
# intra-soya duplicates
print('--- doublons internes Soya (pHash<=6 et dHash<=10) ---')
ss=[s for s in soya if s in F]; cnt=0
for i in range(len(ss)):
    for j in range(i+1,len(ss)):
        dp=ham(F[ss[i]]['p'],F[ss[j]]['p']); dd=ham(F[ss[i]]['d'],F[ss[j]]['d'])
        if dp<=6 and dd<=10:
            cnt+=1
            if cnt<=60: print(dp,dd,ss[i].replace(S,''),ss[j].replace(S,''))
print('total',cnt)
json.dump({k.replace(S,'S').replace(B,'B'):{t:''.join('1' if b else '0' for b in v[t]) for t in v} for k,v in F.items()},open('hashes.json','w'))
