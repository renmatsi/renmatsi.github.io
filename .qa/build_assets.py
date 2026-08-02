from pathlib import Path
from io import BytesIO
from urllib.request import Request, urlopen
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
WORK = ROOT / "assets" / "work"
COVERS = ROOT / "assets" / "covers"

MALE = {
    "c (1).png": "final-full.webp",
    "c (7).png": "portrait.webp",
    "cc (5).png": "anatomy-front.webp",
    "cc (6).png": "anatomy-back.webp",
    "cc (3).png": "anatomy-three-quarter.webp",
    "c (2).png": "wardrobe-three-quarter.webp",
    "c (4).png": "wardrobe-back.webp",
    "c (6).png": "boots.webp",
    "ccc.png": "props.webp",
}

TRIAL = {
    "00.png": "bart-front.webp",
    "01.png": "bart-three-quarter.webp",
    "04.png": "bart-back.webp",
    "bob0.png": "bob-casual-front.webp",
    "bob3.png": "bob-casual-back.webp",
    "bob4.png": "bob-rider-front.webp",
    "bob7.png": "bob-rider-back.webp",
    "Cody0.png": "cody-front.webp",
    "Cody3.png": "cody-back.webp",
    "Cody4.png": "cody-helmet.webp",
    "Kayla0.png": "kayla-front.webp",
    "Kayla3.png": "kayla-back.webp",
    "Kayla4.png": "kayla-helmet.webp",
}

PRIESTESS = {
    "hero.webp": "https://cdnb.artstation.com/p/assets/images/images/057/912/805/large/renan-matos-0007.jpg?1672951112",
    "final-front.webp": "https://cdna.artstation.com/p/assets/images/images/057/912/816/large/renan-matos-00008.jpg?1672950869",
    "final-back.webp": "https://cdnb.artstation.com/p/assets/images/images/057/912/829/large/renan-matos-000009.jpg?1672950889",
    "form-front.webp": "https://cdnb.artstation.com/p/assets/images/images/057/912/789/large/renan-matos-003-render.jpg?1672950812",
    "materials-front.webp": "https://cdna.artstation.com/p/assets/images/images/057/912/754/large/renan-matos-001-render.jpg?1672950814",
    "materials-back.webp": "https://cdna.artstation.com/p/assets/images/images/057/912/766/large/renan-matos-002-render.jpg?1672950796",
    "material-detail.webp": "https://cdnb.artstation.com/p/assets/images/images/057/912/833/large/renan-matos-untitled.jpg?1672950909",
    "wireframe.webp": "https://cdna.artstation.com/p/assets/images/images/057/913/046/large/renan-matos-wire.jpg?1672951423",
}


def export_webp(source: Path, destination: Path, max_width: int = 1800, quality: int = 90) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as opened:
        transposed = ImageOps.exif_transpose(opened)
        has_alpha = "A" in transposed.getbands() or "transparency" in transposed.info
        image = transposed.convert("RGBA" if has_alpha else "RGB")
        if image.width > max_width:
            height = round(image.height * max_width / image.width)
            image = image.resize((max_width, height), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=quality, method=6, exact=has_alpha)


def export_remote_webp(url: str, destination: Path) -> None:
    request = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urlopen(request, timeout=30) as response:
        image = Image.open(BytesIO(response.read()))
        image = ImageOps.exif_transpose(image).convert("RGB")
        if image.width > 1800:
            height = round(image.height * 1800 / image.width)
            image = image.resize((1800, height), Image.Resampling.LANCZOS)
        destination.parent.mkdir(parents=True, exist_ok=True)
        image.save(destination, "WEBP", quality=88, method=6)


def character_cutout(source: Path, target_height: int) -> Image.Image:
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGBA")
    red, green, blue, _ = image.split()
    brightness = ImageChops.lighter(ImageChops.lighter(red, green), blue)
    alpha = brightness.point(lambda value: 0 if value < 4 else min(255, (value - 4) * 14))
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.55))
    image.putalpha(alpha)
    bounds = alpha.getbbox()
    if bounds:
        image = image.crop(bounds)
    target_width = round(image.width * target_height / image.height)
    return image.resize((target_width, target_height), Image.Resampling.LANCZOS)


def build_trial_cover() -> None:
    width, height = 1800, 1050
    cover = Image.new("RGB", (width, height), "#090909")
    draw = ImageDraw.Draw(cover)
    for y in range(height):
        mix = y / max(1, height - 1)
        value = round(9 + 8 * mix)
        draw.line((0, y, width, y), fill=(value, value, value + 1))

    glow_layer = Image.new("RGBA", cover.size, (0, 0, 0, 0))
    glow = ImageDraw.Draw(glow_layer)
    glow.ellipse((-250, 90, 760, 1160), fill=(194, 48, 210, 68))
    glow.ellipse((460, 10, 1350, 1050), fill=(245, 95, 52, 48))
    glow.ellipse((1080, 60, 2050, 1110), fill=(42, 187, 216, 55))
    glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(125))
    cover = Image.alpha_composite(cover.convert("RGBA"), glow_layer)

    grid = Image.new("RGBA", cover.size, (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid)
    for x in range(0, width, 120):
        grid_draw.line((x, 0, x, height), fill=(255, 255, 255, 8))
    for y in range(0, height, 120):
        grid_draw.line((0, y, width, y), fill=(255, 255, 255, 6))
    cover = Image.alpha_composite(cover, grid)

    lineup = [
        (ROOT / "00.png", 780, 40),
        (ROOT / "Cody0.png", 850, 380),
        (ROOT / "bob0.png", 890, 760),
        (ROOT / "Kayla0.png", 835, 1230),
    ]
    for source, target_height, x in lineup:
        character = character_cutout(source, target_height)
        y = height - target_height + 18
        cover.alpha_composite(character, (x, y))

    floor = Image.new("RGBA", cover.size, (0, 0, 0, 0))
    floor_draw = ImageDraw.Draw(floor)
    floor_draw.rectangle((0, height - 145, width, height), fill=(0, 0, 0, 82))
    floor = floor.filter(ImageFilter.GaussianBlur(26))
    cover = Image.alpha_composite(cover, floor)
    cover.convert("RGB").save(COVERS / "trial-xtreme.webp", "WEBP", quality=92, method=6)


def main() -> None:
    for source, destination in MALE.items():
        export_webp(ROOT / source, WORK / "male-character" / destination)
    for source, destination in TRIAL.items():
        export_webp(ROOT / source, WORK / "trial-xtreme" / destination)
    for destination, url in PRIESTESS.items():
        export_remote_webp(url, WORK / "priestess" / destination)
    build_trial_cover()
    print(f"male={len(MALE)} trial={len(TRIAL)} priestess={len(PRIESTESS)} cover=1")


if __name__ == "__main__":
    main()
