# Renan Matos — Portfolio

Static GitHub Pages portfolio for character art, production work, Blender add-ons and writing.

## Structure

- `index.html` — public portfolio home.
- `resume.html` — web resume.
- `articles/` — long-form writing.
- `assets/css/` — site styles.
- `assets/js/` — client-side behavior and portfolio data.
- `assets/covers/` — catalog/social covers.
- `assets/work/<project>/` — publishable media grouped by project.
- `assets/resume/` — downloadable resume.
- `data/` — structured source data.
- `docs/` — editorial and maintenance notes.
- `archive/legacy-imports/` — old raw imports kept out of the public structure.
- `.qa/`, `sources/`, `tests/` — build and verification utilities.

## Content rule

Public project media belongs in `assets/work/<project-slug>/` and should use descriptive filenames.
Raw exports must not be referenced directly from the repository root.

Copy should describe the work itself: what was made, what Renan contributed, and what the images prove.
Avoid generic portfolio slogans, repeated capability claims and decorative metadata that does not help a reviewer understand the work.

## Add-ons

The visible tools set is: Cuttr, Weavr, Stitchr, Groomr, Iris Studio and Drawr.
`assets/js/addons.js` is the single renderer/source of truth for the add-on cards.
