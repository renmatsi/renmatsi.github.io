from pathlib import Path
import json
import subprocess

ROOT = Path(__file__).resolve().parents[1]
VIDEOS = [
    (ROOT / "0001-1033_1.mp4", ROOT / "assets/work/male-character/turntable.mp4", "transcode"),
    (ROOT / "bart.mp4", ROOT / "assets/work/trial-xtreme/bart-turntable.mp4", "copy"),
]


def transcode(source: Path, destination: Path, mode: str) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    codec_args = ["-c:v", "copy"] if mode == "copy" else [
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "22",
        "-pix_fmt", "yuv420p",
    ]
    subprocess.run([
        "ffmpeg", "-y", "-loglevel", "error",
        "-i", str(source),
        "-map", "0:v:0",
        *codec_args,
        "-an",
        "-map_metadata", "-1",
        "-movflags", "+faststart",
        str(destination),
    ], check=True)

    probe = subprocess.run([
        "ffprobe", "-v", "error",
        "-show_entries", "stream=codec_name,width,height,r_frame_rate:format=duration,size:format_tags",
        "-of", "json", str(destination),
    ], check=True, capture_output=True, text=True)
    data = json.loads(probe.stdout)
    stream = data["streams"][0]
    tags = data.get("format", {}).get("tags", {})
    forbidden = {
        key for key in tags
        if key.lower() in {"creation_time", "comment", "description", "location", "location-eng"}
    }
    if forbidden:
        raise RuntimeError(f"Metadata remains in {destination}: {sorted(forbidden)}")
    print(
        f"{destination.relative_to(ROOT)} | {stream['width']}x{stream['height']} | "
        f"{stream['r_frame_rate']} fps | {float(data['format']['duration']):.2f}s | "
        f"{int(data['format']['size'])} bytes"
    )


if __name__ == "__main__":
    for source, destination, mode in VIDEOS:
        transcode(source, destination, mode)
