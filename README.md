# V.A.D.A.++ — Data Science Learning System

A 12-month, evidence-based self-learning system for data analytics & data science: a curriculum, eight flagship real-data projects, a learning-science-backed study method (V.A.D.A.++ — Visual map → Apply → Discuss/teach-back → Audio reinforcement), and the interactive tools to actually track it. Built as a static site (MkDocs Material) that deploys free to GitHub Pages.

**Live site:**(https://wai-999.github.io/Master-Learning-System/curriculum/index.html)

## What's in here

```
.
├── docs/
│   ├── index.md                 # homepage
│   ├── methodology/              # the V.A.D.A.++ operating manual (retrieval, spacing,
│   │                              interleaving, teach-back, calibration) — fully sourced
│   ├── curriculum/                # 12 month-by-month lesson pages + overview
│   ├── projects/                  # 8 flagship domain project blueprints + overview
│   │   └── gold-price-forecasting-system/   # existing working artifact for the Gold project
│   ├── resources/                 # curated 2026 resource stack (courses, datasets)
│   ├── accountability/            # #100DaysOfData habit mechanism + group-project pathways
│   ├── mistake-library/           # deliberate-error log — template + running log
│   ├── tools/                     # progress dashboard, spaced-repetition deck, drill bank
│   ├── stylesheets/extra.css       # shared styles for dashboard/flashcards/badges
│   └── javascripts/                # progress-tracker.js + srs-deck.js (vanilla JS, localStorage only)
├── mkdocs.yml                     # site config + nav
├── requirements.txt
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages on every push to main
└── .gitignore
```

## Running it locally

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open `http://127.0.0.1:8000`. `mkdocs build` produces a static `site/` directory (git-ignored) you can preview or deploy manually if you ever need to.

## Deploying

1. Push this folder to `https://github.com/Wai-999/Master-Learning-System` (see command block below).
2. Push to `main` — the included GitHub Actions workflow (`.github/workflows/deploy.yml`) runs `mkdocs gh-deploy`, which builds the site and pushes it to a `gh-pages` branch automatically.
3. In the repo's Settings → Pages, set the source to the `gh-pages` branch (first deploy only — after that it's automatic on every push to `main`).

## How the tracking tools work

Everything interactive — the [progress dashboard](docs/tools/progress-tracker.md), the [spaced-repetition deck](docs/tools/spaced-repetition-deck.md), and the streak counter — runs entirely client-side using the browser's `localStorage`. No backend, no account, no analytics. That also means progress lives in one browser; it won't sync across devices, and clearing site data resets it.

## Where the content came from

The curriculum, resource stack, and project blueprints are based on a researched blueprint covering free 2026-verified courses/datasets and a 12-month sequencing model; the V.A.D.A.++ methodology section is based on a separate research pass through the cognitive-science literature on retrieval practice, spacing, interleaving, desirable difficulties, dual coding, the protégé effect, deliberate practice, and mastery learning. Both source documents, with full citations, are kept in this portfolio folder alongside this repo for reference.

## License / use

This is a personal learning system. Reuse whatever's useful for your own learning — none of the third-party courses, datasets, or platforms linked throughout are affiliated with this repo, and their own terms apply.
