import sys,glob,os
from PIL import Image,ImageDraw
def sheet(files,out,cols=5,w=300):
    n=len(files); rows=(n+cols-1)//cols
    S=Image.new('RGB',(cols*w,rows*(w+16)),'white'); d=ImageDraw.Draw(S)
    for k,f in enumerate(files):
        try: im=Image.open(f).convert('RGB')
        except Exception as e: print('ERR',f,e); continue
        im.thumbnail((w,w)); x=(k%cols)*w; y=(k//cols)*(w+16)
        S.paste(im,(x,y+16)); d.text((x+2,y+2),os.path.basename(f)[:48],fill='black')
    S.save(out,quality=85); print(out,n)
if __name__=='__main__':
    out=sys.argv[1]; files=sorted(sum([glob.glob(a) for a in sys.argv[2:]],[]))
    sheet(files,out)
