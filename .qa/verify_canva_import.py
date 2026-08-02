import hashlib
import json
import subprocess
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = Path(__file__).with_name("canva-import-manifest.json")


def sha256(path):
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def fail(message):
    raise SystemExit(f"FAIL: {message}")


def main():
    entries = json.loads(MANIFEST.read_text(encoding="utf-8"))
    if len(entries) != 105:
        fail(f"expected 105 entries, found {len(entries)}")

    source_ids = [entry["source_index"] for entry in entries]
    targets = [entry["target"] for entry in entries]
    if len(source_ids) != len(set(source_ids)):
        fail("duplicate source indices in manifest")
    if len(targets) != len(set(targets)):
        fail("duplicate target paths in manifest")

    source_code = (ROOT / "app.js").read_text(encoding="utf-8") + (ROOT / "canva-projects.js").read_text(encoding="utf-8")
    image_count = video_count = alpha_count = total_bytes = 0

    for entry in entries:
        target = ROOT / entry["target"]
        if not target.is_file():
            fail(f"missing {entry['target']}")
        if target.stat().st_size != entry["bytes"]:
            fail(f"byte-size mismatch for {entry['target']}")
        if sha256(target) != entry["sha256"]:
            fail(f"SHA-256 mismatch for {entry['target']}")
        if entry["target"] not in source_code:
            fail(f"asset is not referenced by the catalog: {entry['target']}")

        total_bytes += entry["bytes"]
        if entry["kind"] == "image":
            image_count += 1
            with Image.open(target) as image:
                image.verify()
            with Image.open(target) as image:
                if list(image.size) != [entry["width"], entry["height"]]:
                    fail(f"dimension mismatch for {entry['target']}")
                has_alpha = "A" in image.getbands() or "transparency" in image.info
                if has_alpha != entry["alpha"]:
                    fail(f"alpha mismatch for {entry['target']}")
                alpha_count += int(has_alpha)
        elif entry["kind"] == "video":
            video_count += 1
            probe = subprocess.run(
                ["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=codec_name,pix_fmt,width,height", "-of", "json", str(target)],
                check=True,
                capture_output=True,
                text=True,
            )
            streams = json.loads(probe.stdout).get("streams", [])
            if not streams or streams[0].get("codec_name") != "h264":
                fail(f"invalid H.264 video: {entry['target']}")
        else:
            fail(f"unknown media kind: {entry['kind']}")

    print(json.dumps({
        "status": "PASS",
        "entries": len(entries),
        "images": image_count,
        "videos": video_count,
        "alpha_images": alpha_count,
        "bytes": total_bytes,
        "all_referenced": True,
        "hashes_valid": True,
    }))


if __name__ == "__main__":
    main()
