# 02 · Sales — Cohort & Retention Analysis

<span class="vada-badge vada-badge-beginner">Beginner–Intermediate</span> <span class="vada-badge vada-badge-domain">Sales / E-commerce</span>

**Question:** Which products or customer cohorts drive revenue growth, and where does the funnel leak?

**Data:** Kaggle e-commerce datasets, or the Google Analytics BigQuery sample — see [Resources → Sales/Marketing](../resources/index.md#free-datasets-by-target-domain) for the exact GA4/Universal Analytics table names and date ranges.

**Techniques:** SQL cohort analysis, RFM (Recency/Frequency/Monetary) segmentation, dashboarding.

This mirrors real day-one analyst work almost exactly — retention and funnel questions are asked constantly, and doing this well in SQL (not just in a BI tool) is a strong, specific signal.

## Approach

1. Build a `cohort_base` query: each customer's first-purchase month (see the cohort-retention pattern in [Month 2](../curriculum/month-02-sql-analytics.md)).
2. Join transactions back to cohort_base, compute `month_number` (months since first purchase) via a window function, and aggregate retention % by cohort × month_number.
3. Separately, compute RFM scores per customer (recency, frequency, monetary value) and segment customers into tiers (e.g., quintiles per dimension).
4. Identify the funnel: view → cart → purchase (or whatever stages your dataset supports), and find where the largest % drop-off happens.
5. Build a dashboard combining the cohort retention heatmap, RFM segment sizes/value, and the funnel — with a written recommendation, not just charts.

## Common pitfalls

- Computing retention as "% of all customers still active" instead of "% of *that cohort* still active" — the grain matters and is a classic first-attempt bug.
- RFM segmentation using raw values instead of relative scores (a $500 customer means something different in a $20-average-order dataset vs. a $5,000-average-order dataset).
- A funnel analysis that ignores that different traffic sources convert completely differently — segment the funnel by acquisition channel where the data allows it.

## Connects to

[Month 2](../curriculum/month-02-sql-analytics.md) (SQL cohort logic — this project *is* that month's milestone if you choose it), [Month 3](../curriculum/month-03-visualization-bi.md) (dashboarding).

<p><label><input type="checkbox" class="vada-track" data-vada-id="project-02" data-vada-group="projects"> Mark this project shipped</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
