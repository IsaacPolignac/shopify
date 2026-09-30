"""Generate a Somnila product image with the Higgsfield API, from a JSON spec.

The real product photo is uploaded as the first reference, so the model edits
the actual pillow instead of inventing one.

Spec (JSON):
  {"model": "alibaba/qwen-image-3/edit",
   "reference": "build/images/source/09-oreiller-cervical/oreiller-cervical_blanc_34_51.jpg",
   "arguments": {"prompt": "...", "aspect_ratio": "1:1", "resolution": "2k"},
   "output": "build/images/higgsfield/out/neck-01_aube-lit_v1"}

Credentials: HF_KEY (key-id:key-secret) from the repo's .env.local or the environment.
Usage: python3 build/images/higgsfield/generate_image.py spec.json   (billable)
"""
import json
import sys
from pathlib import Path
from urllib.request import urlopen

from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parents[3]
load_dotenv(ROOT / ".env.local", override=False)

import higgsfield_client  # noqa: E402


def first_image_url(result):
    images = result.get("images")
    if isinstance(images, list) and images:
        first = images[0]
        return first.get("url") if isinstance(first, dict) else first
    image = result.get("image")
    if isinstance(image, dict):
        return image.get("url")
    return image if isinstance(image, str) else None


def main(spec_path):
    spec = json.loads(Path(spec_path).read_text())
    arguments = dict(spec["arguments"])

    try:
        if spec.get("reference"):
            ref_url = higgsfield_client.upload_file(ROOT / spec["reference"])
            arguments["image_urls"] = [ref_url] + list(arguments.get("image_urls", []))
        result = higgsfield_client.subscribe(
            spec["model"],
            arguments=arguments,
            on_enqueue=lambda rid: print(f"Submitted: request {rid}"),
        )
    except higgsfield_client.CredentialsMissedError:
        print("Error: HF_KEY is missing (.env.local or environment).", file=sys.stderr)
        return 2
    except higgsfield_client.HiggsfieldClientError as error:
        print(f"Error: the API rejected the request: {error}", file=sys.stderr)
        return 1

    status = result.get("status")
    if status != "completed":
        detail = result.get("error") or result.get("detail") or ""
        print(f"Error: request ended with status '{status}'. {detail}".rstrip(), file=sys.stderr)
        return 1

    url = first_image_url(result)
    if not url:
        print(f"Error: completed without an image URL. Keys: {sorted(result)}", file=sys.stderr)
        return 1

    out = ROOT / spec["output"]
    out.parent.mkdir(parents=True, exist_ok=True)
    suffix = Path(url.split("?")[0]).suffix or ".png"
    target = out.with_suffix(suffix)
    with urlopen(url) as response:
        target.write_bytes(response.read())
    print(f"Image URL: {url}")
    print(f"Saved: {target.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(2)
    sys.exit(main(sys.argv[1]))
