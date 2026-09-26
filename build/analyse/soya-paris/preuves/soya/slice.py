from PIL import Image
import glob,os
os.makedirs('cap/slices',exist_ok=True)
for f in sorted(glob.glob('cap/*-full.png'))+sorted(glob.glob('cap/funnel-*.png')):
    slug=os.path.basename(f)[:-4]
    im=Image.open(f).convert('RGB'); w,h=im.size
    W=1000 if w>1000 else w; step=1700 if w>1000 else 2000
    n=0
    for y in range(0,h,step):
        c=im.crop((0,y,w,min(h,y+step)))
        if w>W: c=c.resize((W,int(c.height*W/w)))
        c.save(f'cap/slices/{slug}-{n:02d}.jpg',quality=80); n+=1
    print(slug,w,h,n)
for f in sorted(glob.glob('cap/*-view-*.png')):
    slug=os.path.basename(f)[:-4]; im=Image.open(f).convert('RGB'); w,h=im.size
    if w>1000: im=im.resize((1000,int(h*1000/w)))
    im.save(f'cap/slices/{slug}.jpg',quality=80)
