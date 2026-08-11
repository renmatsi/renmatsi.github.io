import json
import unittest
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "resume.json"
HTML = ROOT / "resume.html"
INDEX = ROOT / "index.html"
APP = ROOT / "app.js"
PDF = ROOT / "assets" / "resume" / "Renan-Matos-Senior-3D-Character-Artist.pdf"
STALE_PDF = ROOT / "assets" / "resume" / "Renan-Matos-Lead-3D-Character-Artist.pdf"


class ResumeCanonicalDataTests(unittest.TestCase):
    def test_canonical_resume_data_declares_approved_target_role(self):
        self.assertTrue(DATA.exists(), "data/resume.json must be the canonical resume source")
        payload = json.loads(DATA.read_text(encoding="utf-8"))
        self.assertEqual(payload["identity"]["target_role"], "Senior 3D Character Artist")

    def test_canonical_data_includes_verified_blender_addons(self):
        payload = json.loads(DATA.read_text(encoding="utf-8"))
        self.assertIn("technical_projects", payload)
        names = {project["name"] for project in payload["technical_projects"]}
        self.assertEqual(names, {"Cuttr", "Weaver", "Knot Forge", "Stitcher"})
        self.assertIn("Python", payload["software"])

    def test_resume_html_uses_canonical_facts_and_omits_superseded_claims(self):
        payload = json.loads(DATA.read_text(encoding="utf-8"))
        html = HTML.read_text(encoding="utf-8")

        required = [
            payload["identity"]["target_role"],
            payload["contacts"]["email"],
            payload["contacts"]["linkedin"],
            payload["contacts"]["artstation"],
            payload["contacts"]["github"],
            "Jan 2023 — May 2026",
            "3D Artist / 3D Generalist",
            "Jan 2022 — Feb 2023",
            "3D Generalist → Lead",
            "Technical tools",
            "Cuttr",
            "Weaver",
            "Knot Forge",
            "Stitcher",
            "Python",
        ]
        for value in required:
            self.assertIn(value, html)

        for stale in [
            "renanmatos3d@gmail.com",
            "renan-matos-177b19130",
            "Character Artist → Senior 3D Character Artist → Lead 3D Character Artist",
            "Jan 2023 — Present",
            "Male Character",
            "Trial Xtreme Freedom",
        ]:
            self.assertNotIn(stale, html)

    def test_generated_pdf_is_one_page_canonical_and_clickable(self):
        self.assertTrue(PDF.exists(), "The canonical Senior resume PDF must be generated")
        document = fitz.open(PDF)
        self.assertEqual(len(document), 1)
        text = "\n".join(page.get_text("text") for page in document)
        for value in [
            "Senior 3D Character Artist",
            "Jan 2023 — May 2026",
            "3D Artist / 3D Generalist",
            "English — Fluent",
            "Cuttr",
            "Weaver",
            "Knot Forge",
            "Stitcher",
        ]:
            self.assertIn(value, text)
        for stale in ["Jan 2023 — Present", "Male Character", "Trial Xtreme Freedom"]:
            self.assertNotIn(stale, text)

        uris = {
            link.get("uri")
            for page in document
            for link in page.get_links()
            if link.get("uri")
        }
        payload = json.loads(DATA.read_text(encoding="utf-8"))
        expected = {
            f"mailto:{payload['contacts']['email']}",
            payload["contacts"]["portfolio"],
            payload["contacts"]["linkedin"],
            payload["contacts"]["artstation"],
            payload["contacts"]["github"],
        }
        self.assertTrue(expected.issubset(uris), f"Missing PDF links: {expected - uris}")

    def test_superseded_lead_resume_is_not_public(self):
        self.assertFalse(STALE_PDF.exists(), "The superseded Lead resume must not remain publicly accessible")


class HomepageToolsTests(unittest.TestCase):
    def test_homepage_exposes_tools_navigation_and_wip_catalog(self):
        index = INDEX.read_text(encoding="utf-8")
        app = APP.read_text(encoding="utf-8")
        self.assertIn('href="#tools"', index)
        self.assertIn('id="tools"', index)
        self.assertIn('id="toolsGrid"', index)
        for name in ["Cuttr", "Weaver", "Knot Forge", "Stitcher"]:
            self.assertIn(f'name: "{name}"', app)
            self.assertIn(f"subject={name.replace(' ', '%20')}%20Preview", app)
        self.assertIn('release: "undisclosed"', app)
        self.assertIn("Release details to be announced", app)
        for localized_status in ["Gumroad release planned", "Lançamento no Gumroad planejado", "Lanzamiento en Gumroad planificado"]:
            self.assertIn(localized_status, app)

    def test_homepage_uses_canonical_role_and_gameplay_dates(self):
        payload = json.loads(DATA.read_text(encoding="utf-8"))
        index = INDEX.read_text(encoding="utf-8")
        app = APP.read_text(encoding="utf-8")
        self.assertIn(payload["identity"]["target_role"], index)
        self.assertIn('"jobTitle": "Senior 3D Character Artist"', index)
        self.assertIn('period: { en: "Jan 2023 — May 2026"', app)
        self.assertNotIn("Jan 2023 — Present", app)
        self.assertNotIn("Progressed from 3D Character Artist to Senior", app)


if __name__ == "__main__":
    unittest.main()
