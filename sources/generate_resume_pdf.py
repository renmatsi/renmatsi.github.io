"""Generate the canonical resume PDF from resume.html using installed Microsoft Edge."""

from pathlib import Path
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "resume.html"
OUTPUT = ROOT / "assets" / "resume" / "Renan-Matos-Senior-3D-Character-Artist.pdf"
EDGE_CANDIDATES = [
    Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"),
    Path(r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"),
]


def main() -> None:
    edge = next((path for path in EDGE_CANDIDATES if path.exists()), None)
    if edge is None:
        raise FileNotFoundError("Microsoft Edge executable was not found")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    if OUTPUT.exists():
        OUTPUT.unlink()

    with tempfile.TemporaryDirectory(prefix="resume-edge-") as profile:
        command = [
            str(edge),
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            "--run-all-compositor-stages-before-draw",
            f"--user-data-dir={profile}",
            f"--print-to-pdf={OUTPUT}",
            HTML.resolve().as_uri(),
        ]
        result = subprocess.run(command, capture_output=True, text=True, timeout=120)
        if result.returncode != 0:
            raise RuntimeError(result.stderr.strip() or "Edge PDF generation failed")

    if not OUTPUT.exists() or OUTPUT.stat().st_size == 0:
        raise RuntimeError("Edge completed without producing the resume PDF")
    print(OUTPUT)


if __name__ == "__main__":
    main()
