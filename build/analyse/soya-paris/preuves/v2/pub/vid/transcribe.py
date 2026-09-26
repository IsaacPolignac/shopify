from faster_whisper import WhisperModel
import sys, json
m = WhisperModel("small", device="cpu", compute_type="int8", download_root="/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya2/pub/vid/models")
for n in ["concept","lequel","avis","faq"]:
    segs, info = m.transcribe(n + ".wav", language="fr", vad_filter=True, beam_size=5)
    out = [{"start": round(s.start,1), "end": round(s.end,1), "text": s.text.strip()} for s in segs]
    json.dump(out, open(n + ".transcript.json","w"), ensure_ascii=False, indent=1)
    with open(n + ".transcript.txt","w") as f:
        for s in out: f.write(f"[{s['start']:6.1f}-{s['end']:6.1f}] {s['text']}\n")
    print("done", n, len(out), flush=True)
