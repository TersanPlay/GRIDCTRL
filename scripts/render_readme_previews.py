#!/usr/bin/env python3
"""Render README preview PNGs from the tracked SVG designs.

Run from repository root:
    python -m pip install cairosvg pillow
    python scripts/render_readme_previews.py
"""
from pathlib import Path
import xml.etree.ElementTree as ET
import cairosvg
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "docs" / "images"
for name in ("preview-desktop", "preview-mobile"):
    source = IMG / f"{name}.svg"
    destination = IMG / f"{name}.png"
    ET.parse(source)  # Malformed SVG (including invalid XML entities) must fail the build.
    cairosvg.svg2png(url=str(source), write_to=str(destination), output_width=None)
    with Image.open(destination) as im:
        im.verify()
    with Image.open(destination) as im:
        assert im.format == "PNG" and im.width > 100 and im.height > 100
    print(f"{destination.relative_to(ROOT)}: {destination.stat().st_size} bytes")
readme = ROOT / "README.md"
text = readme.read_text(encoding="utf-8")
for name in ("preview-desktop", "preview-mobile"):
    text = text.replace(f"docs/images/{name}.svg", f"docs/images/{name}.png")
readme.write_text(text, encoding="utf-8")
print("README preview sources replaced with PNG paths.")
