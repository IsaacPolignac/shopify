"""Higgsfield example: Seedance 2.5 text-to-video with the official Python SDK (subscribe).

Credentials: HF_KEY in key-id:key-secret format, read from .env.local (ignored by Git)
or from the environment. The value is never printed or logged.

Usage:  pip install -r requirements.txt
        python3 main.py          # makes one billable generation request
"""
import signal
import sys
from pathlib import Path

from dotenv import load_dotenv

# Load .env.local next to this file; variables already set in the environment win.
load_dotenv(Path(__file__).resolve().parent / ".env.local", override=False)

import higgsfield_client  # noqa: E402  (credentials are read at the first request)

MODEL = "bytedance/seedance-2.5/text-to-video"
ARGUMENTS = {
    "prompt": "A cinematic scene at sunset",
    "duration": 5,
    "resolution": "720p",
    "aspect_ratio": "16:9",
}
TIMEOUT_S = 15 * 60  # stop waiting after 15 min; the request id is printed to check it later


def video_url(result):
    """Return the generated video URL from a completed result, or None."""
    video = result.get("video")
    if isinstance(video, dict):
        return video.get("url")
    if isinstance(video, str):
        return video
    videos = result.get("videos")
    if isinstance(videos, list) and videos:
        first = videos[0]
        return first.get("url") if isinstance(first, dict) else first
    return None


def on_timeout(signum, frame):
    raise TimeoutError(f"no terminal status after {TIMEOUT_S // 60} min")


def main():
    request_id = None

    def on_enqueue(rid):
        nonlocal request_id
        request_id = rid
        print(f"Submitted: request {rid}")

    def on_queue_update(status):
        print(f"Status: {type(status).__name__}")

    if hasattr(signal, "SIGALRM"):
        signal.signal(signal.SIGALRM, on_timeout)
        signal.alarm(TIMEOUT_S)

    try:
        result = higgsfield_client.subscribe(
            MODEL,
            arguments=ARGUMENTS,
            on_enqueue=on_enqueue,
            on_queue_update=on_queue_update,
        )
    except higgsfield_client.CredentialsMissedError:
        print("Error: HF_KEY is missing. Add HF_KEY=key-id:key-secret to .env.local "
              "or to the environment, then run again.", file=sys.stderr)
        return 2
    except higgsfield_client.HiggsfieldClientError as error:
        print(f"Error: the API rejected the request: {error}", file=sys.stderr)
        return 1
    except TimeoutError as error:
        print(f"Error: {error}. Request id: {request_id or 'unknown'}.", file=sys.stderr)
        return 1
    finally:
        if hasattr(signal, "SIGALRM"):
            signal.alarm(0)

    status = result.get("status")
    if status != "completed":
        # failed, nsfw (moderated) or canceled: the SDK returns them without raising.
        detail = result.get("error") or result.get("detail") or result.get("message") or ""
        print(f"Error: request {request_id} ended with status '{status}'. {detail}".rstrip(),
              file=sys.stderr)
        return 1

    url = video_url(result)
    if not url:
        print(f"Error: request {request_id} completed but no video URL was returned. "
              f"Keys: {sorted(result)}", file=sys.stderr)
        return 1

    print(f"Video URL: {url}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
