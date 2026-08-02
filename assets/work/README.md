# Portfolio artwork organization

This directory is organized by **project**, not by the page section or download order from the former Canva portfolio.

## Canva migration — August 2026

Source reviewed: `https://renmatsi.my.canva.site/`

- 100 image occurrences were found in the rendered page.
- 99 image URLs were unique; one repeated URL was deduplicated.
- Two non-artwork images (the personal portrait and software/logo strip) were not added as portfolio projects.
- 97 unique artwork images and 8 videos were integrated: **105 local media files** across **15 project folders**.
- Original public files totaled 80.9 MB; the local WebP/H.264 derivatives total 41.8 MB.
- Effective alpha transparency was retained for 89 WebP images; the eight fully opaque source images remain opaque.
- The sanitized source-to-target map, dimensions, byte sizes and SHA-256 hashes are recorded in `.qa/canva-import-manifest.json`.

## Editorial map

| Folder | Project | Imported media |
|---|---|---:|
| `male-character/` | Male Character | 14 images + 1 video |
| `priestess/` | Priestess | 1 additional image |
| `tactical-operative/` | Tactical Operative | 3 images + 5 videos |
| `nordic-warrior/` | Nordic Warrior | 5 images |
| `trial-xtreme/` | Trial Xtreme Freedom | 20 additional images |
| `tiny-hero/` | Tiny Hero | 1 feature image |
| `stone-age-family/` | Stone Age Family | 10 images |
| `pirate-ship/` | Pirate Ship | 9 images |
| `stylized-armory/` | Stylized Armory | 26 images |
| `ranay/` | Ranay — Golden Demon | 1 feature image |
| `pantufa/` | Pantufa | 1 feature image |
| `athletic-girl/` | Athletic Girl | 1 image |
| `neon-sentinel/` | Neon Sentinel | 1 image |
| `realistic-portraits/` | Realistic Portraits | 2 images + 2 videos |
| `hooded-wanderer/` | Hooded Wanderer | 2 images |

“Athletic Girl”, “Neon Sentinel”, “Tactical Operative”, “Nordic Warrior”, “Stone Age Family”, “Pirate Ship”, “Stylized Armory”, “Realistic Portraits” and “Hooded Wanderer” are descriptive catalog titles assigned during migration because the Canva page did not expose project-level names for those individual groups. These neutral catalog labels do not classify the artworks as personal or official work.

The stylized weapon collection and Revolver are independent from every character project. They must not be reintroduced inside Male Character.

## Additional project cleanup

The existing revolver turnaround was moved from `male-character/` to `revolver/` and published as the independent **Revolver** asset. It is not counted among the 105 Canva-imported media files above.
