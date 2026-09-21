# Adding or Updating Portfolio Work

This site treats publication as an editorial decision, not as an automatic gallery upload. New work can be prepared safely without appearing in production until it is explicitly approved.

## Publication states

Every project in `assets/js/site.js` must include `status`:

- `draft` — incomplete data or media; never rendered.
- `review` — ready for local QA; never rendered in the public grids.
- `published` — eligible to render.
- `supporting` — media retained only as part of a consolidated production case.
- `hidden` — intentionally excluded from the portfolio.

Only `status: "published"` is accepted by the homepage renderer and hash-based project route.

## Editorial tiers

- `featured` — strongest current flagship cases. Keep this small; do not fill a quota with weaker work.
- `production` — shipped/client work grouped by title or production, with authorship boundaries.
- `archive` — earlier work that still adds useful evidence; collapsed by default.
- `supporting` / `hidden` — never rendered.

Use `order` to sort within a tier. A newly published flagship should normally become `featured / order: 1`, and the displaced case should be reassessed rather than automatically kept.

## Required project fields

```js
{
  id: "project-slug",
  status: "review",
  tier: "featured",
  order: 1,
  year: "2026",
  projectType: "personal", // personal | production | collaboration | r-and-d
  layout: "large",
  cover: "assets/covers/project-slug.webp",
  main: {
    type: "image",
    src: "assets/work/project-slug/hero.webp",
    alt: { en: "...", pt: "...", es: "..." }
  },
  facts: {
    en: [
      { key: "contribution", label: "My contribution", value: "Exact, provable scope" },
      { key: "context", label: "Project context", value: "Personal character study · 2026" },
      { key: "evidence", label: "Evidence shown", value: "Final · wireframe · engine" }
    ],
    pt: [],
    es: []
  },
  sections: [
    {
      id: "final",
      copy: {
        en: { title: "Final character", description: "What these images actually prove." },
        pt: { title: "Personagem final", description: "..." },
        es: { title: "Personaje final", description: "..." }
      },
      media: [
        {
          type: "image",
          src: "assets/work/project-slug/final.webp",
          alt: { en: "...", pt: "...", es: "..." }
        }
      ]
    }
  ],
  category: { en: "...", pt: "...", es: "..." },
  copy: {
    en: { title: "...", description: "...", tags: ["..."] },
    pt: { title: "...", description: "...", tags: ["..."] },
    es: { title: "...", description: "...", tags: ["..."] }
  }
}
```

## Evidence-first case structure

Use only the sections supported by the actual media:

1. **Final presentation** — strongest image, useful angles, turntable.
2. **Form / high poly** — only if high-poly or neutral-form images exist.
3. **Topology** — only with readable wireframe evidence.
4. **UVs / textures / materials** — only with real maps or material views.
5. **Groom / wardrobe / props** — only where visible and attributable.
6. **Engine / deformation / LODs / budgets** — only with real project evidence and numbers that can be disclosed.
7. **Leadership / collaboration** — distinguish work personally created, directed, reviewed and produced by collaborators.

Never add a section because it is expected by recruiters if the proof is absent. Missing evidence becomes a production goal for the next project, not copywriting.

## Authorship checklist

Before publishing production or collaborative work, answer:

- What did Renan personally create?
- What did Renan direct, review or supervise?
- Who created the concept, groom, rig, animation, lighting, environment and key art?
- Is the material publicly authorized?
- Is the project released, unreleased, cancelled or personal?
- Do the year, role and employer match the CV, LinkedIn and public credits?

Do not use an NDA, private link or password to disguise nonexistent work or permission.

## Asset rules

1. Put publishable media under `assets/work/<project-slug>/`.
2. Use WebP for stills; remove EXIF, XMP and local filesystem paths.
3. Use H.264 MP4 with metadata removed and `faststart` for video.
4. Do not reference raw root-level PNGs or third-party key art.
5. Provide meaningful alt text in English, Portuguese and Spanish.
6. Keep a small deliberate sequence; remove duplicate camera angles.
7. Add or update the reproducible exporter in `.qa/build_assets.py`.

## Local review workflow

1. Add the project in `assets/js/site.js` with `status: "draft"`.
2. Export sanitized assets.
3. Change to `status: "review"` and inspect locally by temporarily filtering review items only in a dedicated test branch — never by weakening the production filter.
4. Verify factual copy and credits against source files/public pages.
5. Add Playwright assertions to `.qa/editorial.spec.js`.
6. Run syntax and editorial tests.
7. Run desktop/mobile visual, accessibility and performance QA.
8. Change to `status: "published"` only after all checks pass.
9. Reassess the whole homepage: a new flagship may require demoting or removing an older piece.

## Current evidence gaps to target in new work

The next flagship should ideally add proof not fully visible in the current featured set:

- in-engine presentation;
- readable topology around deformation zones;
- UV/material/map breakdown;
- hair/groom construction where relevant;
- LOD or budget decisions with real project targets;
- a concise problem → decision → outcome narrative;
- explicit concept and collaborator credits;
- for Lead positioning, one authorized example of review, pipeline, mentoring or cross-discipline impact.

Do not publish a visible “coming soon” card without strong imagery. The draft/review states already prepare the system without lowering the public quality bar.
