# 08 · Real Estate — Home Value Trends & Prediction

<span class="vada-badge vada-badge-beginner">Beginner–Intermediate</span> <span class="vada-badge vada-badge-domain">Real Estate</span>

**Question:** What drives regional differences in home values, and can they be predicted?

**Data:** [Zillow Research ZHVI](https://www.zillow.com/research/data/) (Zillow Home Value Index — a smoothed, seasonally-adjusted measure of typical home value, 35th–65th percentile range), [FHFA House Price Index](https://www.fhfa.gov/data/hpi/datasets) (repeat-sales methodology, data back to the mid-1970s), plus optionally [Redfin](https://www.redfin.com/news/data-center/) or [Realtor.com](https://www.realtor.com/research/data/) data — see [Resources → Real Estate](../resources/index.md#free-datasets-by-target-domain).

**Techniques:** EDA, regression, geospatial visualization, time series.

Broad hiring appeal and clean, well-documented free data make this one of the most forgiving flagship projects to actually finish well — a strong candidate for an early portfolio project if [Finance](01-finance-risk-dashboard.md) or [Gold](06-gold-commodities-regimes.md) feel too specialized to start with.

## Approach

1. Pull ZHVI at a regional level (metro or county) and merge with FHFA HPI for a second, methodologically-different price series — comparing the two is itself an interesting finding (smoothed index vs. repeat-sales index can diverge, especially during turning points).
2. EDA: which regions have appreciated fastest/slowest over your chosen window? Is the pattern stable or did rankings shift across specific periods (e.g., around a rate-hiking cycle)?
3. Build a geospatial visualization (choropleth by metro/county) of value growth over your chosen period.
4. Fit a regression predicting home-value growth from available regional features (income levels, inventory, rate environment) — keep this honestly simple; the value here is the exploratory story, not a state-of-the-art model.
5. Add a time-series forecast for a specific region, with walk-forward validation, and discuss where your forecast would likely break (e.g., a sudden rate shock outside the training period).

## Common pitfalls

- Conflating ZHVI (smoothed, percentile-based) with FHFA HPI (repeat-sales) as if they measure identically the same thing — state clearly which index says what, and don't average them together without justification.
- Geospatial color scales that visually exaggerate small differences (or hide large ones) — check your choropleth against the [FT Visual Vocabulary](../resources/index.md#data-visualization-bi) guidance from [Month 3](../curriculum/month-03-visualization-bi.md).
- Forecasting home values with a model that implicitly assumes the recent regime (rate environment, migration patterns) continues indefinitely — say so explicitly rather than presenting a point forecast with false confidence.

## Connects to

[Month 1](../curriculum/month-01-python-pandas.md) (EDA — this is a strong candidate for that month's milestone), [Month 8](../curriculum/month-08-unsupervised-time-series.md) (time series).

<p><label><input type="checkbox" class="vada-track" data-vada-id="project-08" data-vada-group="projects"> Mark this project shipped</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
