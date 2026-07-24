# 05 · Politics / Public Policy — Democracy & Election Analysis

<span class="vada-badge vada-badge-intermediate">Intermediate</span> <span class="vada-badge vada-badge-domain">Politics / Public Policy</span>

**Question:** How have democratic indicators evolved over time, and what correlates with electoral outcomes?

**Data:** [V-Dem](https://www.v-dem.net) (V-Dem Dataset v16, 2026 release — 531 indicators + 251 indices across 202+ polities back to 1789), [MIT Election Data + Science Lab](https://electionlab.mit.edu/data), [ACLED](https://acleddata.com) for conflict-event context — see [Resources → Politics](../resources/index.md#free-datasets-by-target-domain).

**Techniques:** EDA, clustering, regression, choropleth maps.

This project demonstrates comfort with **multi-source, multi-indicator public data** — a different skill from a single clean CSV, and directly relevant to policy-adjacent and research-adjacent roles.

## Approach

1. Pick a focused sub-question rather than "analyze democracy globally" — e.g., "how has electoral-democracy index changed in a specific region over the last 20 years," or "does a specific V-Dem indicator correlate with election competitiveness."
2. Merge V-Dem indicators with MIT Election Lab results on country/year — expect real merge friction (country-name mismatches, year misalignment) and treat resolving it as part of the deliverable, not a nuisance to rush past.
3. Cluster countries or country-years on a set of V-Dem indicators to find groupings (e.g., "hybrid regimes" vs. "consolidated democracies") — compare your clusters to V-Dem's own regime-type classification as a sanity check.
4. Build a choropleth map showing an indicator's change over time, and a regression relating a democracy indicator to an electoral outcome, with appropriate caution about causal language.
5. Write up findings with explicit attention to what the data can and cannot support — public political data is exactly the domain where overclaiming causal stories from correlational data is both common and easy to spot.

## Common pitfalls

- Merging country-level datasets naively on country name (naming conventions differ across sources — "Ivory Coast" vs. "Côte d'Ivoire" style mismatches are common) — use a standardized country-code crosswalk (e.g., ISO3) instead.
- Treating V-Dem's expert-coded indices as objective measurements without noting they're aggregated expert assessments (with documented methodology, but not raw counts).
- Drawing causal conclusions ("X caused democratic backsliding") from cross-sectional correlational data — state associations as associations (see [Month 4](../curriculum/month-04-statistics.md)).

## Connects to

[Month 1](../curriculum/month-01-python-pandas.md) (multi-source merge fluency), [Month 8](../curriculum/month-08-unsupervised-time-series.md) (clustering).

<p><label><input type="checkbox" class="vada-track" data-vada-id="project-05" data-vada-group="projects"> Mark this project shipped</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
