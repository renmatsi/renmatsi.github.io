import json
import re
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE_FILES = [ROOT / "app.js", ROOT / "canva-projects.js", ROOT / "index.html", ROOT / "resume.html"]
MEDIA_PATTERN = re.compile(r'["\'](assets/[^"\']+?\.(?:webp|png|jpe?g|mp4|pdf))["\']', re.IGNORECASE)
FORBIDDEN_PATTERN = re.compile(r"\b(?:study|studies|estudo|estudos)\b", re.IGNORECASE)
IMAGE_SUFFIXES = {".webp", ".png", ".jpg", ".jpeg"}
GITHUB_FILE_LIMIT = 100 * 1024 * 1024


def fail(message):
    raise SystemExit(f"FAIL: {message}")


def main():
    source = "\n".join(path.read_text(encoding="utf-8") for path in SOURCE_FILES)
    forbidden = sorted(set(match.group(0) for match in FORBIDDEN_PATTERN.finditer(source)))
    if forbidden:
        fail(f"forbidden catalog terms found: {forbidden}")

    references = sorted(set(MEDIA_PATTERN.findall(source)))
    missing = [reference for reference in references if not (ROOT / reference).is_file()]
    if missing:
        fail(f"missing local media references: {missing}")

    images = videos = 0
    largest = {"path": "", "bytes": 0}
    for reference in references:
        path = ROOT / reference
        size = path.stat().st_size
        if size >= GITHUB_FILE_LIMIT:
            fail(f"GitHub 100 MiB file limit exceeded: {reference} ({size} bytes)")
        if size > largest["bytes"]:
            largest = {"path": reference, "bytes": size}
        if path.suffix.lower() in IMAGE_SUFFIXES:
            with Image.open(path) as image:
                image.verify()
            images += 1
        elif path.suffix.lower() == ".mp4":
            videos += 1

    print(json.dumps({
        "status": "PASS",
        "local_references": len(references),
        "images_verified": images,
        "videos_referenced": videos,
        "missing": 0,
        "forbidden_catalog_terms": 0,
        "largest_file": largest,
        "github_file_limit_ok": True,
    }))


if __name__ == "__main__":
    main()
