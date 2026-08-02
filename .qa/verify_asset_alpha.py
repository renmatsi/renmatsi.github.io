from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
TARGETS = [
    *sorted((ROOT / "assets/work/male-character").glob("*.webp")),
    *sorted((ROOT / "assets/work/trial-xtreme").glob("*.webp")),
]
TARGETS = [path for path in TARGETS if path.name != "trial-xtreme.webp"]

failures = []
for path in TARGETS:
    with Image.open(path) as image:
        if "A" not in image.getbands():
            failures.append(f"{path.relative_to(ROOT)}: missing alpha channel ({image.mode})")
            continue
        alpha = image.getchannel("A")
        low, high = alpha.getextrema()
        if low != 0 or high != 255:
            failures.append(f"{path.relative_to(ROOT)}: unexpected alpha range {low}-{high}")

if failures:
    raise SystemExit("\n".join(failures))

print(f"alpha preserved in {len(TARGETS)} WebP assets")
