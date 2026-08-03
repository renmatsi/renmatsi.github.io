from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "covers" / "catalog"
OUT.mkdir(parents=True, exist_ok=True)

CONFIG = {
    "male-character": {
        "size": (1600, 1000), "source": "assets/work/male-character/final-full.webp",
        "palette": ("#393a36", "#171715", "#6d6b62"), "mode": "cutout", "anchor": (0.66, 0.48), "scale": (0.55, 0.84),
    },
    "priestess": {
        "size": (1280, 1600), "source": "assets/work/priestess/materials-front.webp",
        "palette": ("#050707", "#010202", "#16343b"), "mode": "opaque", "anchor": (0.52, 0.47), "scale": (0.92, 0.90),
    },
    "tactical-operative": {
        "size": (1280, 1600), "source": "assets/work/tactical-operative/full-front-hd.webp",
        "palette": ("#26302b", "#101411", "#526257"), "mode": "cutout", "anchor": (0.61, 0.47), "scale": (0.76, 0.86),
    },
    "nordic-warrior": {
        "size": (1600, 1200), "source": "assets/work/nordic-warrior/portrait-front.webp",
        "palette": ("#10232a", "#071014", "#245767"), "mode": "opaque", "anchor": (0.64, 0.47), "scale": (0.54, 0.84),
    },
    "trial-xtreme-freedom": {
        "size": (1600, 1200), "source": "assets/covers/trial-xtreme.webp",
        "palette": ("#20393e", "#11191b", "#2b6970"), "mode": "opaque", "anchor": (0.57, 0.37), "scale": (0.84, 0.68),
    },
    "tiny-hero": {
        "size": (1600, 1200), "source": "assets/work/tiny-hero/front-sword.jpg",
        "palette": ("#f1f0ec", "#dadbd8", "#ffffff"), "mode": "white-cutout", "anchor": (0.61, 0.47), "scale": (0.74, 0.84), "light": True,
    },
    "stone-age-family": {
        "size": (1600, 1200), "sources": [
            "assets/work/stone-age-family/child-front.webp",
            "assets/work/stone-age-family/female-front.webp",
            "assets/work/stone-age-family/male-front.webp",
        ],
        "palette": ("#4b3a2d", "#1e1915", "#9b6c45"), "mode": "group",
    },
    "pirate-ship": {
        "size": (1600, 1200), "source": "assets/work/pirate-ship/hero-view.webp",
        "palette": ("#262a27", "#121513", "#5f665e"), "mode": "cutout", "anchor": (0.56, 0.45), "scale": (0.86, 0.72),
    },
    "stylized-armory": {
        "size": (1600, 1200), "source": "assets/covers/stylized-armory-collage.webp",
        "palette": ("#202421", "#111311", "#414b43"), "mode": "opaque", "anchor": (0.50, 0.50), "scale": (1.0, 1.0),
    },
    "revolver": {
        "size": (1600, 1200), "source": "assets/work/revolver/turnaround.webp",
        "palette": ("#2d302e", "#151715", "#595d58"), "mode": "cutout", "anchor": (0.53, 0.43), "scale": (0.90, 0.65),
    },
    "ranay": {
        "size": (1600, 1200), "source": "assets/covers/ranay-hd.webp",
        "palette": ("#193337", "#0b1719", "#b22e16"), "mode": "opaque", "anchor": (0.62, 0.40), "scale": (0.88, 0.82),
    },
    "pantufa": {
        "size": (1600, 1200), "source": "assets/work/pantufa/full-body.jpg",
        "palette": ("#1c1617", "#09090a", "#682a24"), "mode": "opaque", "anchor": (0.60, 0.47), "scale": (0.74, 0.88),
    },
    "athletic-girl": {
        "size": (1600, 1200), "source": "assets/work/athletic-girl/hero.webp",
        "palette": ("#546500", "#1a1e0b", "#a7cc00"), "mode": "cutout", "anchor": (0.60, 0.47), "scale": (0.68, 0.84),
    },
    "neon-sentinel": {
        "size": (1600, 1200), "source": "assets/work/neon-sentinel/hero.webp",
        "palette": ("#0b2328", "#071113", "#0b6c57"), "mode": "cutout", "anchor": (0.61, 0.47), "scale": (0.68, 0.84),
    },
    "realistic-portraits": {
        "size": (1600, 1200), "source": "assets/work/realistic-portraits/blood-portrait.webp",
        "palette": ("#080808", "#010101", "#242422"), "mode": "opaque", "anchor": (0.61, 0.45), "scale": (0.54, 0.82),
    },
    "hooded-wanderer": {
        "size": (1600, 1200), "source": "assets/work/hooded-wanderer/full-body.webp",
        "palette": ("#070b0e", "#010203", "#3e2418"), "mode": "opaque", "anchor": (0.61, 0.46), "scale": (0.54, 0.86),
    },
}


def rgb(value):
    value = value.lstrip("#")
    return tuple(int(value[i:i + 2], 16) for i in (0, 2, 4))


def gradient_stage(size, palette):
    width, height = size
    top, bottom, glow = map(rgb, palette)
    strip = Image.new("RGB", (1, height))
    pixels = strip.load()
    for y in range(height):
        t = y / max(1, height - 1)
        pixels[0, y] = tuple(round(top[c] * (1 - t) + bottom[c] * t) for c in range(3))
    stage = strip.resize(size)
    light = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(light)
    radius = int(max(size) * 0.42)
    cx, cy = int(width * 0.61), int(height * 0.43)
    draw.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=(*glow, 118))
    light = light.filter(ImageFilter.GaussianBlur(radius * 0.48))
    return Image.alpha_composite(stage.convert("RGBA"), light)


def alpha_bbox(image):
    if "A" not in image.getbands():
        return None
    alpha = image.getchannel("A")
    threshold = alpha.point(lambda value: 255 if value > 8 else 0)
    return threshold.getbbox()


def fit_size(source_size, box_size):
    scale = min(box_size[0] / source_size[0], box_size[1] / source_size[1])
    return max(1, round(source_size[0] * scale)), max(1, round(source_size[1] * scale))


def paste_at(stage, image, anchor, max_scale, shadow=True, crop_alpha=True):
    image = image.convert("RGBA")
    bbox = alpha_bbox(image) if crop_alpha else None
    if bbox:
        image = image.crop(bbox)
    width, height = stage.size
    fitted = fit_size(image.size, (round(width * max_scale[0]), round(height * max_scale[1])))
    image = image.resize(fitted, Image.Resampling.LANCZOS)
    x = round(width * anchor[0] - image.width / 2)
    y = round(height * anchor[1] - image.height / 2)
    if shadow and "A" in image.getbands():
        alpha = image.getchannel("A")
        shadow_layer = Image.new("RGBA", stage.size, (0, 0, 0, 0))
        blurred = alpha.filter(ImageFilter.GaussianBlur(max(12, round(min(stage.size) * 0.018))))
        shadow_color = Image.new("RGBA", image.size, (0, 0, 0, 110))
        shadow_color.putalpha(blurred.point(lambda value: round(value * 0.42)))
        shadow_layer.alpha_composite(shadow_color, (x + 12, y + 20))
        stage.alpha_composite(shadow_layer)
    stage.alpha_composite(image, (x, y))


def blurred_backdrop(source, size, palette):
    source = source.convert("RGB")
    backdrop = ImageOps.fit(source, size, method=Image.Resampling.LANCZOS)
    backdrop = backdrop.filter(ImageFilter.GaussianBlur(max(28, round(min(size) * 0.045))))
    backdrop = ImageEnhance.Brightness(backdrop).enhance(0.36)
    tint = Image.new("RGB", size, rgb(palette[1]))
    return Image.blend(backdrop, tint, 0.34).convert("RGBA")


def feathered_opaque(stage, source, anchor, max_scale, palette):
    width, height = stage.size
    source = source.convert("RGB")
    source_ratio = source.width / source.height
    target_ratio = width / height
    if abs(source_ratio - target_ratio) < 0.025 and max_scale == (1.0, 1.0):
        stage.alpha_composite(source.resize(stage.size, Image.Resampling.LANCZOS).convert("RGBA"))
        return
    stage.alpha_composite(blurred_backdrop(source, stage.size, palette))
    fitted = fit_size(source.size, (round(width * max_scale[0]), round(height * max_scale[1])))
    foreground = source.resize(fitted, Image.Resampling.LANCZOS).convert("RGBA")
    feather = max(18, round(min(foreground.size) * 0.035))
    mask = Image.new("L", foreground.size, 255)
    draw = ImageDraw.Draw(mask)
    draw.rectangle((0, 0, foreground.width - 1, foreground.height - 1), outline=0, width=feather)
    mask = mask.filter(ImageFilter.GaussianBlur(feather * 0.65))
    foreground.putalpha(mask)
    x = round(width * anchor[0] - foreground.width / 2)
    y = round(height * anchor[1] - foreground.height / 2)
    stage.alpha_composite(foreground, (x, y))


def stone_age_group(stage, sources):
    placements = [
        ((0.30, 0.50), (0.27, 0.64)),
        ((0.52, 0.46), (0.31, 0.73)),
        ((0.74, 0.45), (0.34, 0.77)),
    ]
    for path, (anchor, scale) in zip(sources, placements):
        paste_at(stage, Image.open(ROOT / path), anchor, scale, shadow=True, crop_alpha=True)


def remove_white_background(source):
    source = source.convert("RGB")
    red, green, blue = source.split()
    distance = ImageChops.lighter(
        ImageChops.lighter(ImageChops.invert(red), ImageChops.invert(green)),
        ImageChops.invert(blue),
    )
    alpha = distance.point(lambda value: max(0, min(255, (value - 2) * 13)))
    cutout = source.convert("RGBA")
    cutout.putalpha(alpha)
    return cutout


def generate(project, config):
    stage = gradient_stage(config["size"], config["palette"])
    if config["mode"] == "group":
        stone_age_group(stage, config["sources"])
    else:
        source = Image.open(ROOT / config["source"])
        if config["mode"] == "cutout":
            paste_at(stage, source, config["anchor"], config["scale"], shadow=True, crop_alpha=True)
        elif config["mode"] == "white-cutout":
            paste_at(stage, remove_white_background(source), config["anchor"], config["scale"], shadow=True, crop_alpha=True)
        elif config["mode"] == "opaque":
            feathered_opaque(stage, source, config["anchor"], config["scale"], config["palette"])
        else:
            raise ValueError(f"Unknown mode: {config['mode']}")
    output = OUT / f"{project}.webp"
    stage.convert("RGB").save(output, "WEBP", lossless=True, method=6)
    print(f"{project}: {stage.width}x{stage.height} -> {output.relative_to(ROOT)} ({output.stat().st_size} bytes)")


if __name__ == "__main__":
    for project, config in CONFIG.items():
        generate(project, config)
