# S1 bis : 16 images Soya absentes du premier corpus (masque, coussin tete de lit, couverture lestee, siege, reglables) x 136 images Somnila
import glob,numpy as np
from PIL import Image, ImageOps
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
def dh(g):
    a=np.asarray(g.resize((9,8),Image.LANCZOS),dtype=float); return (a[:,1:]>a[:,:-1]).flatten()
def crop(g,r):
    w,h=g.size; cw,ch=int(w*r),int(h*r); x,y=(w-cw)//2,(h-ch)//2; return g.crop((x,y,x+cw,y+ch))
soya=sorted(glob.glob('img_extra/*.*')); soya=[f for f in soya if not f.endswith('.tsv')]
som=sorted(glob.glob(B+'/source/*/*.jpg'))+sorted(glob.glob(B+'/shopify/*.jpg'))
res=[]
for s in soya:
    g=load(s); hs={'plein':ph(g),'crop80':ph(crop(g,0.8))}; ds=dh(g)
    for m in som:
        gm=load(m)
        for vn,v in {'plein':ph(gm),'miroir':ph(ImageOps.mirror(gm)),'crop80':ph(crop(gm,0.8))}.items():
            for hn,h in hs.items():
                res.append((int((v!=h).sum()),vn,hn,s,m.replace(B,'')))
res.sort(); arr=np.array([r[0] for r in res])
print('soya',len(soya),'somnila',len(som),'comparaisons',len(res),'min',arr.min(),'p1',np.percentile(arr,1),'median',np.median(arr),'<=10',(arr<=10).sum())
for r in res[:10]: print(r)
