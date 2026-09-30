#!/bin/bash
# Lance les 6 photos Neck 01 (GPT Image 2.5 Sunburst) en parallèle.
# Prérequis : HF_KEY=key-id:key-secret dans .env.local à la racine du dépôt (jamais commité).
# Usage, depuis la racine du dépôt : bash build/images/higgsfield/run_g3.sh
cd "$(git rev-parse --show-toplevel)" || exit 1
for spec in build/images/higgsfield/specs/g3_*.json; do
  python3 build/images/higgsfield/generate_image.py "$spec" &
done
wait
echo "Terminé : images dans build/images/higgsfield/out/g3_*"
