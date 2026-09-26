# Contre-verification S1 : pHash sur variantes miroir et recadrees (80 % et 60 % centre) cote Somnila
import glob,sys,numpy as np
from PIL import Image, ImageOps
sys.path.insert(0,'../sourcing')
S='/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad'
B='/home/user/shopify/build/images'
def load(f):
    im=Image.open(f)
    if im.mode in ('RGBA','LA','P'):
        im=im.convert('RGBA'); bg=Image.new('RGBA',im.size,(255,255,255,255)); bg.alpha_composite(im); im=bg
    return im.convert('L')
def dct2(a):
    N=a.shape[0]; k=np.arange(N); C=np.cos(np.pi*(2*k[None,:]+1)*k[:,None]/(2*N)); return C@a@C.T
def ph(g):
    a=np.asarray(g.resize((32,32),Image.LANCZOS),dtype=float); d=dct2(a)[:8,:8].flatten(); return d>np.median(d[1:])
def crop(g,r):
    w,h=g.size; cw,ch=int(w*r),int(h*r); x,y=(w-cw)//2,(h-ch)//2; return g.crop((x,y,x+cw,y+ch))
soya=[]
for pat in [S+'/soya/gallery/[0-9]*.jpg',S+'/pdpwork/g_*.img',S+'/pdpwork/k_*.img',S+'/soya2/sourcing/img_soya/*_*.*',S+'/soya_prix/imgs/soya_*.img']:
    soya+=[f for f in sorted(glob.glob(pat)) if not f.endswith('.tsv')]
som=sorted(glob.glob(B+'/source/*/*.jpg'))+sorted(glob.glob(B+'/shopify/*.jpg'))
SH={}
for f in soya:
    try:
        g=load(f); SH[f]=[ph(g),ph(crop(g,0.8)),ph(crop(g,0.6))]
    except Exception as e: pass
res=[]
for m in som:
    g=load(m); vs={'miroir':ph(ImageOps.mirror(g)),'miroir+crop80':ph(crop(ImageOps.mirror(g),0.8)),'crop80':ph(crop(g,0.8)),'crop60':ph(crop(g,0.6))}
    for s,hs in SH.items():
        for name,v in vs.items():
            for i,h in enumerate(hs):
                res.append((int((v!=h).sum()),name,['plein','crop80','crop60'][i],s.replace(S,''),m.replace(B,'')))
res.sort()
print('soya',len(SH),'somnila',len(som),'comparaisons',len(res))
arr=np.array([r[0] for r in res]); print('min',arr.min(),'p1',np.percentile(arr,1),'median',np.median(arr),'<=10',(arr<=10).sum())
for r in res[:12]: print(r)
