import struct,subprocess,sys
def rng(u,a,b):
    return subprocess.run(['curl','-sS','-m','60','-A','Mozilla/5.0','-r',f'{a}-{b}',u],capture_output=True).stdout
def top_boxes(u,size):
    off=0; boxes=[]
    while off<size and len(boxes)<20:
        h=rng(u,off,off+15)
        if len(h)<8: break
        sz,typ=struct.unpack('>I4s',h[:8]); typ=typ.decode('latin1')
        if sz==1: sz=struct.unpack('>Q',h[8:16])[0]
        if sz==0: sz=size-off
        boxes.append((typ,off,sz)); off+=sz
    return boxes
def parse_moov(data):
    out={}
    def walk(d,depth=0):
        i=0
        while i+8<=len(d):
            sz,typ=struct.unpack('>I4s',d[i:i+8]); typ=typ.decode('latin1'); hdr=8
            if sz==1: sz=struct.unpack('>Q',d[i+8:i+16])[0]; hdr=16
            if sz<8: break
            body=d[i+hdr:i+sz]
            if typ=='mvhd':
                v=body[0]
                if v==1: ts,dur=struct.unpack('>IQ',body[20:32])
                else: ts,dur=struct.unpack('>II',body[12:20])
                out['duration_s']=round(dur/ts,1)
            if typ=='tkhd':
                w,h=struct.unpack('>II',body[-8:]); 
                if w: out.setdefault('dims',[]).append((w>>16,h>>16))
            if typ=='hdlr': out.setdefault('handlers',[]).append(body[8:12].decode('latin1'))
            if typ=='stsd' and len(body)>16: out.setdefault('codecs',[]).append(body[12:16].decode('latin1'))
            if typ in('moov','trak','mdia','minf','stbl'): walk(body,depth+1)
            i+=sz
    walk(data); return out
for u in sys.argv[1:]:
    size=int(subprocess.run(['curl','-sSI','-m','30','-A','Mozilla/5.0',u],capture_output=True,text=True).stdout.lower().split('content-length:')[1].split()[0])
    bx=top_boxes(u,size)
    moov=[b for b in bx if b[0]=='moov']
    info={}
    if moov:
        t,o,s=moov[0]; info=parse_moov(rng(u,o,o+s-1))
    mb=size/1e6
    print(f"{u.split('/')[-1][:60]} size={mb:.1f}MB boxes={[(b[0],b[1]) for b in bx]} {info} bitrate≈{(size*8/info['duration_s']/1e6) if info.get('duration_s') else 0:.1f}Mbit/s")
