# 06 · Gold — Regime & Driver Analysis

<span class="vada-badge vada-badge-intermediate">Intermediate</span> <span class="vada-badge vada-badge-domain">Gold / Commodities</span>

**Question:** What macro factors drive gold prices, and can distinct price *regimes* be identified?

**Data:** [World Gold Council Goldhub](https://www.gold.org/goldhub/data), FRED commodity/rate/inflation series — see [Resources → Gold/Commodities](../resources/index.md#free-datasets-by-target-domain).

**Techniques:** Time series, regression, correlation analysis, clustering for regime identification.

!!! tip "This one already has a working artifact"
    A causally-informed gold-price forecasting framework already exists in this portfolio — a three-page system covering the end-to-end thinking flow, a feature-by-feature causal explorer, and a step-through system map. Open it here: **[Gold Price Forecasting System →](gold-price-forecasting-system/index.html)**. Treat it as your starting reference and reasoning framework for this project rather than building the driver analysis from a blank page — the work below is about extending it into a shipped, portfolio-narrated analysis with your own data pull and regime-clustering step.

## The five drivers to encode as features

1. **Real yields** — the single most-cited driver; inverse relationship (rising real yields → falling gold).
2. **US Dollar Index (DXY)** — inverse relationship; gold is priced in USD globally.
3. **Inflation & Fed policy path** — rate-cut expectations are a major current-cycle tailwind narrative.
4. **Geopolitical risk** — conflict and trade tensions; a geopolitical-risk index has contributed a measured accuracy improvement in the ~19% range in at least one published study.
5. **Central bank demand** — a structural buyer since 2021, though flows can reverse sharply (net purchases dropped to a fraction of the prior quarterly average after a large sovereign sale in one recent quarter) — treat this driver as regime-dependent, not constant.

## Approach

1. Pull gold price history and the five driver series above (FRED covers real yields, DXY proxies, and inflation/Fed-related series directly).
2. Build the correlation/regression story first: how strongly and in what direction does each driver relate to gold, over the full sample?
3. Segment the sample into candidate **regimes** (e.g., via rolling correlation, structural-break detection, or a clustering approach on driver behavior) — the central question this project answers that a single full-sample regression cannot: *has gold's relationship to these drivers changed over time?*
4. Backtest a simple forecasting model (start with a regression or ARIMA baseline before reaching for LSTM-class models) using walk-forward validation (see [Month 8](../curriculum/month-08-unsupervised-time-series.md)).
5. Write up the regime finding explicitly — this is a strong, concrete illustration of **concept drift** (see [Month 11](../curriculum/month-11-deployment-mlops.md)): a driver relationship that held in one period quietly weakening or reversing in another is exactly the failure mode a deployed model must be monitored against.

## Known data caveat

Historical LBMA gold price data was removed from gold.org in March 2025 at ICE Benchmark Administration's request and now requires a commercial license — use FRED or World Gold Council demand/supply series as your price and driver proxies instead of trying to source historical LBMA fixes directly.

## Common pitfalls

- Fitting one regression across the full history and treating the coefficients as fixed truths — the regime point above exists specifically because that assumption tends to be wrong for gold over long samples.
- Skipping walk-forward validation because "it's just an exploratory regression, not a real forecast" — bad habits here transfer directly to the [Oil & Energy](07-oil-energy-forecasting.md) project and to real deployed work in [Month 11](../curriculum/month-11-deployment-mlops.md).
- Treating central-bank demand as a constant structural tailwind rather than a flow that can reverse sharply within a quarter, as it has recently.

## Connects to

[Month 8](../curriculum/month-08-unsupervised-time-series.md) (time series + regime clustering), [Month 11](../curriculum/month-11-deployment-mlops.md) (concept drift monitoring). See also the model-family comparisons in the existing [Gold Price Forecasting System](gold-price-forecasting-system/framework.html) for which model families the published literature favors for this exact problem (LSTM for nonlinear temporal patterns, XGBoost+SHAP for an explainable accuracy/interpretability balance, hybrid econometric+ML stacks for best overall accuracy).

<p><label><input type="checkbox" class="vada-track" data-vada-id="project-06" data-vada-group="projects"> Mark this project shipped</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
