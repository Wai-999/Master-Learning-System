# Resource Stack (curated, 2026)

Nearly everything on this list is free or free-to-audit. It's organized to match the [12-month curriculum](../curriculum/index.md) — each month's page links back to the specific rows it needs, so treat this page as the master reference rather than something to read top-to-bottom.

!!! note "Access can change"
    Course platforms and free-tier terms shift. Two known caveats as of this writing: Andrew Ng's Machine Learning Specialization is free to **audit** only (a certificate costs money or requires financial aid), and historical LBMA gold price data was pulled from gold.org in March 2025 at ICE Benchmark Administration's request — use FRED or World Gold Council series instead (see the [Gold project](../projects/06-gold-commodities-regimes.md)).

## Python for data science

- **[Python for Data Analysis, 3rd Edition — Wes McKinney](https://wesmckinney.com/book)** — the full book, free, as open-access HTML. Written by the creator of pandas; updated for pandas 2.0 / Python 3.10. Code is MIT-licensed at [wesm/pydata-book](https://github.com/wesm/pydata-book). The authoritative, example-driven pandas reference — apply the examples immediately rather than reading passively.
- **[Kaggle Learn — Python & pandas](https://www.kaggle.com/learn)** — short, interactive, in-browser micro-courses with real datasets. Good for fast, active wins.
- **freeCodeCamp** (YouTube + freecodecamp.org) — long-form free video and project tracks if you want lecture-style reinforcement alongside the book.

## SQL for analytics

- **[Mode SQL Tutorial](https://mode.com/sql-tutorial/)** (now under ThoughtSpot) — free, browser-based, genuinely analytics-focused: cohort retention, revenue drivers, funnel drop-off. Strong window-function and JOIN coverage. The single best free analytics SQL tutorial.
- **[Kaggle Learn — Intro to SQL & Advanced SQL](https://www.kaggle.com/learn/intro-to-sql)** — interactive, real (BigQuery) datasets.
- **[DataLemur](https://datalemur.com/sql-tutorial)** — free tutorial plus interview-style questions modeled on real analytics interviews; save this for closer to job-search time.
- **[SQLBolt](https://sqlbolt.com)** — fast, no-signup starting point, but hasn't been meaningfully updated in years and skips modern patterns (CTEs, advanced window functions). Use it for one hour on day one, then move to Mode.

## Statistics & probability

- **[StatQuest with Josh Starmer](https://www.youtube.com/c/joshstarmer)** ([index](https://statquest.org)) — visual, step-by-step, free. Covers p-values, regression, gradient descent, trees, neural nets. The single best match for a visual/active learner.
- **[Seeing Theory — Brown University](https://seeing-theory.brown.edu)** — interactive D3.js visualizations of probability, distributions, the CLT, and inference, with a free companion PDF.
- **[OpenIntro Statistics, 4th ed.](https://www.openintro.org/book/os/)** (Diez, Barr & Çetinkaya-Rundel) — free PDF, applied, with labs and videos.
- **[Khan Academy — Statistics & Probability](https://www.khanacademy.org/math/statistics-probability)** — structured practice quizzes if you want more repetition.

## Data visualization & BI

- **[FT Visual Vocabulary](https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary)** — a chart-selection poster/site organized by data relationship (deviation, correlation, ranking, distribution, change-over-time, part-to-whole). Keep this open every time you're deciding which chart to build.
- **[Storytelling with Data — Cole Nussbaumer Knaflic](https://www.storytellingwithdata.com)** — blog and resources on turning a chart into a message.
- **[Microsoft Learn — Power BI paths](https://learn.microsoft.com/en-us/training/powerbi/)** — free, official, hands-on. Leverages your existing Power BI base directly.

## Machine learning fundamentals

- **[Machine Learning Specialization — Andrew Ng](https://www.coursera.org/specializations/machine-learning-introduction)** (Stanford / DeepLearning.AI, Coursera) — free to **audit** (videos and non-graded materials at no cost). Three courses, updated for scikit-learn/TensorFlow — the standard beginner ML foundation.
- **StatQuest ML playlists** — same channel as above, for intuition alongside Ng's course.
- **[Kaggle Learn — Intro to Machine Learning & Intermediate ML](https://www.kaggle.com/learn)**.
- **[scikit-learn tutorials](https://scikit-learn.org/stable/tutorial/)** — official docs, good as a working reference once you're implementing.

## Deep learning basics

- **[fast.ai — Practical Deep Learning for Coders](https://course.fast.ai)** — free, top-down, code-first. Best fit for action-oriented learners who want to train something in week one.
- **[3Blue1Brown — Neural Networks series](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)** — the best available visual intuition for what a neural network is actually doing.

## Math for ML

- **3Blue1Brown — Essence of Linear Algebra & Essence of Calculus** (YouTube) — unmatched visual intuition; both the Deisenroth book and MIT courses cross-reference this series directly.
- **[Mathematics for Machine Learning — Deisenroth, Faisal & Ong](https://mml-book.github.io)** (Cambridge, 2020) — free official PDF, self-contained, free for personal use.

## Portfolio & project platforms

- **[Kaggle](https://www.kaggle.com)** — competitions, datasets, notebooks.
- **[DrivenData](https://www.drivendata.org)** — social-impact competitions.
- **[Maven Analytics](https://mavenanalytics.io)** — guided data challenges across Excel/Power BI/SQL/Python.
- **[TidyTuesday](https://github.com/rfordatascience/tidytuesday)** — a weekly community dataset challenge.

## Group & community project opportunities

See [Accountability](../accountability/index.md) for the full pitch on why these matter and how to join. Quick links: **[Omdena](https://www.omdena.com/projects)**, **[DataKind](https://www.datakind.org)**, Kaggle team competitions, **[DataTalksClub](https://datatalks.club/)** Zoomcamp cohort projects.

## Free datasets by target domain

Cross-referenced from the [8 project blueprints](../projects/index.md) — each project page links back to its specific rows here.

**Finance**

- `yfinance` (`pip install yfinance`) — Yahoo Finance data in Python.
- **[FRED](https://fred.stlouisfed.org)** — Federal Reserve Economic Data; free API key.
- **[SEC EDGAR](https://www.sec.gov/edgar)** — filings, plus a structured XBRL API at `data.sec.gov`.

**Sales / Marketing**

- Kaggle e-commerce datasets.
- Google Analytics sample data in BigQuery — GA4 obfuscated: `bigquery-public-data.ga4_obfuscated_sample_ecommerce` (Nov 2020–Jan 2021); legacy Universal Analytics: `bigquery-public-data.google_analytics_sample` (Aug 2016–Aug 2017). Both free via the BigQuery Sandbox.

**HR**

- **[IBM HR Analytics Employee Attrition](https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset)** (Kaggle).

**Politics / Public policy**

- **[MIT Election Data + Science Lab](https://electionlab.mit.edu/data)**.
- **[V-Dem](https://www.v-dem.net)** — V-Dem Dataset v16 (2026 release, University of Gothenburg): all 531 V-Dem indicators plus 251 indices and 62 other indicators, built from ~3,500 country experts across 202+ polities back to 1789.
- **[ACLED](https://acleddata.com)** — armed conflict location & event data.

**Gold / Commodities**

- **[World Gold Council Goldhub](https://www.gold.org/goldhub/data)** — demand/supply series.
- FRED commodity series.
- Note: historical LBMA gold price data was removed from gold.org in March 2025 at ICE Benchmark Administration's request; LBMA pricing now requires a license — use FRED/WGC proxies instead.

**Oil / Energy**

- **[EIA Open Data API](https://www.eia.gov/opendata/)** — free key.
- **[OPEC Monthly Oil Market Report](https://www.opec.org/monthly-oil-market-report.html)**.

**Real estate**

- **[Zillow Research (ZHVI)](https://www.zillow.com/research/data/)** — Zillow Home Value Index, a smoothed, seasonally-adjusted measure of typical home value (35th–65th percentile range); free CSVs, updated monthly.
- **[FHFA House Price Index](https://www.fhfa.gov/data/hpi/datasets)** — repeat-sales methodology, back to the mid-1970s, national down to census-tract level.
- **[Redfin Data Center](https://www.redfin.com/news/data-center/)**.
- **[Realtor.com Data Library](https://www.realtor.com/research/data/)**.

## A caution on "best resource" claims

Some rankings of "the best X tutorial" circulating online originate from vendor blogs comparing their own product favorably (SQL platforms comparing SQL platforms, for instance). Treat the superlative claims cautiously — the underlying free-tier facts above are what were verified and what matter.
