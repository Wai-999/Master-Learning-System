# 12-Month Curriculum — Overview

This plan assumes roughly **10–12 hours/week** and, importantly, assumes you already have a working base in Python, SQL, Power BI/Excel, and general statistics. Most public bootcamp curricula (Google's Advanced Data Analytics Certificate, IBM's Data Science Professional Certificate) spend their first third re-teaching exactly those prerequisites — this plan compresses that into weeks, and reinvests the freed time into machine learning and shipped domain projects, which is where hiring signal actually concentrates.

The skeleton mirrors what DataTalksClub's Zoomcamps, Google's certificate, and IBM's certificate all converge on independently: **foundations (Python + SQL) → EDA/visualization → statistics/inference → supervised ML → deployment/MLOps → capstone.** The one principle worth internalizing from DataTalksClub specifically: *prioritize fundamentals over ever-changing tools, and always ship a portfolio project with real, messy data.*

## The 12 months at a glance

| Month | Focus | Primary resources | Milestone deliverable |
|---|---|---|---|
| [1](month-01-python-pandas.md) | Python/pandas fluency (skip syntax basics) | McKinney's open book; Kaggle Learn | EDA notebook on one domain dataset |
| [2](month-02-sql-analytics.md) | SQL for analytics mastery | Mode SQL Tutorial; Kaggle SQL; DataLemur | SQL analysis project (window functions, CTEs) |
| [3](month-03-visualization-bi.md) | Visualization & BI storytelling | FT Visual Vocabulary; Storytelling with Data; Power BI Learn | Polished interactive dashboard + design rationale |
| [4](month-04-statistics.md) | Statistics for data science | StatQuest; Seeing Theory; OpenIntro | Hypothesis-testing / A-B-test notebook |
| [5](month-05-math-for-ml.md) | Math for ML (targeted, not exhaustive) | 3Blue1Brown; Deisenroth (selected chapters) | From-scratch linear regression |
| [6](month-06-supervised-ml-1.md) | Supervised ML I — regression & classification | Andrew Ng ML Specialization (audit); scikit-learn | Classification project with model comparison |
| [7](month-07-supervised-ml-2.md) | Supervised ML II — trees & ensembles | Ng Specialization; Kaggle Intermediate ML | Kaggle competition entry + deliberate-error log |
| [8](month-08-unsupervised-time-series.md) | Unsupervised learning + time series | StatQuest; statsmodels; scikit-learn | Clustering project + time-series forecast |
| [9](month-09-deep-learning.md) | Deep learning basics | fast.ai; 3Blue1Brown NN series | One DL project (tabular or vision) |
| [10](month-10-domain-specialization.md) | Domain specialization + first group project | Omdena / DataKind / Kaggle team | Collaborative project contribution |
| [11](month-11-deployment-mlops.md) | End-to-end deployment / MLOps intro | ML Zoomcamp deployment modules (FastAPI/Docker) | Deployed model with API + writeup |
| [12](month-12-capstone.md) | Capstone + portfolio polish | All prior months | Flagship end-to-end capstone; site finalized |

Track completion month-by-month on the **[Progress Dashboard](../tools/progress-tracker.md)** — checking a box there and checking the "mark complete" box on a month page are the same record.

## What "hiring-ready" actually means here

Recruiter-facing guides and hiring-signal research agree on a specific bar, and it's worth stating explicitly so you don't over- or under-build:

- **4–8 finished, high-quality projects** beat a larger pile of shallow ones. Depth over quantity.
- **No sandbox datasets** — no Iris, no Titanic. Every project in this system uses real, sometimes-messy, real-world data (see [Projects](../projects/index.md)).
- Spanning **distinct skills**: at least one EDA/storytelling project, one interactive dashboard, one ML model with honest evaluation, one end-to-end deployed project, and one collaborative/group project.
- Each project has a **clean repo and a README** that states goal → data → method → result — not just a notebook with no narrative.
- An **active GitHub account** with a real commit history is treated as close to mandatory by hiring guides (Dataquest, KDnuggets) — dedicated project write-ups on a site like this one create a stronger impression than bare notebooks.

## The evidence behind "ship projects, don't just study"

Two independent meta-analyses converge on a medium-to-large effect for project-based learning: Rehman, Huang, Batool, Andleeb & Mahmood (2024, *CMU Journal ASR* 11(2):e2024015) reviewed 70 articles (2010–2023) via PRISMA and found an aggregate weighted effect size of **d+ = 0.652**. Chen & Yang (2019, *Educational Research Review* 26:71–81) pooled 46 effect sizes across 30 studies, 12,585 students, 9 countries, and found **d+ = 0.71**. Directionally robust; treat the exact magnitude as an estimate, not a guarantee.

## How to run each month

Every month page follows the same shape: **Focus** (what's in scope and, just as importantly, what's deliberately left out), **Resources** (the specific rows from the [Resource Stack](../resources/index.md) you need), a **week-by-week breakdown** with checkboxes that persist automatically, how to apply the **[V.A.D.A.++ loop](../methodology/index.md)** to that month's material specifically, and the **milestone deliverable** that actually counts as "done."

If foundations feel too slow because your existing background is already strong, accelerate — pull machine learning forward rather than lingering. If a [group project](../accountability/index.md) opportunity opens early, take it out of sequence; collaborative artifacts are disproportionately valuable.

## Caveats

- Course access and platform structure can change — verify at enrollment, especially for anything requiring an account (see [Resources](../resources/index.md)).
- Effect sizes for project-based learning vary substantially by methodology across the literature (roughly d = 0.65 to well over 1 in some studies) — the direction is robust, the exact number shouldn't be over-interpreted.
- Job-market figures sometimes cited alongside curricula like this one (e.g., entry-level analytics salary medians, open-role counts) typically originate from vendor-sponsored reports citing labor-market data providers — useful as directional context, not as an independent guarantee.
