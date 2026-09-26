# Construit le corpus Trustpilot verbatim (TrustBox JSON 26/09/2026 + archives Wayback) -> tp_corpus.json
import json,glob
C={}
for f in sorted(glob.glob('tp/tb_s*_*.json')):
    for r in json.load(open(f))['reviews']:
        C[r['reviewUrl'].split('/')[-1]]=dict(id=r['reviewUrl'].split('/')[-1],url=r['reviewUrl'],date=r['createdAt'],exp=r['experiencedAt'][:10],note=r['stars'],
          source=r['verification']['reviewSource'],niveau=r['verification']['verificationLevel'],nom=r['consumer']['displayName'],titre=r['title'],texte=r['text'],langue=r['language'],
          origine='TrustBox '+f.split('/')[-1],reponse=None)
for r in json.load(open('wb/wb_reviews.json')):
    if r['id'] in C: continue
    C[r['id']]=dict(id=r['id'],url='https://fr.trustpilot.com/reviews/'+r['id'],date=r['dates']['publishedDate'],exp=(r['dates']['experiencedDate'] or '')[:10],note=r['rating'],
      source=r['labels']['verification']['reviewSourceName'],niveau=r['labels']['verification']['verificationLevel'],nom=r['consumer']['displayName'],titre=r['title'],texte=r['text'],langue=r['language'],
      origine='Wayback '+r['_snap'].split('/')[-1],reponse=r.get('reply'),pays=r['consumer'].get('countryCode'),nb_avis_auteur=r['consumer'].get('numberOfReviews'))
json.dump(list(C.values()),open('tp_corpus.json','w'),ensure_ascii=False,indent=0)
import collections
print(len(C), collections.Counter(v['note'] for v in C.values()), collections.Counter(v['origine'].split()[0] for v in C.values()))
