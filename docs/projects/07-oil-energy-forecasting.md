# 07 · Oil & Energy — Inventory & Price Forecasting

<span class="vada-badge vada-badge-advanced">Intermediate–Advanced</span> <span class="vada-badge vada-badge-domain">Oil & Energy</span>

**Question:** How do weekly crude inventory levels relate to price moves, and can price be forecast from them?

**Data:** [EIA Open Data API](https://www.eia.gov/opendata/) (free key) for weekly petroleum inventory/production data, [OPEC Monthly Oil Market Report](https://www.opec.org/monthly-oil-market-report.html) for supply-side narrative context — see [Resources → Oil/Energy](../resources/index.md#free-datasets-by-target-domain).

**Techniques:** Time series (ARIMA/Prophet as a comparison pair), feature engineering, dashboarding.

Energy-trading and analyst roles specifically value inventory/price signal work — this project builds exactly that pairing, and gives you a second, independent time-series project to contrast against [Gold](06-gold-commodities-regimes.md)'s regime-driven story.

## Approach

1. Pull weekly EIA inventory data (crude stocks, production, imports/exports) and daily/weekly crude price data.
2. Engineer features: inventory surprise (actual vs. the prior weeks' trend), inventory change rate, seasonal adjustment (energy demand is seasonal — driving season, heating season).
3. Fit both an ARIMA/SARIMA baseline and a Prophet model on price, using inventory features as exogenous regressors where your tooling allows it.
4. Compare the two honestly — the published literature generally finds Prophet **less** accurate than ARIMA/LSTM/XGBoost on this kind of series, so a result where your simpler ARIMA baseline wins is a legitimate, reportable finding, not a failure.
5. Backtest with walk-forward validation and report error (MAE/RMSE) alongside a plain-language explanation of what an "inventory surprise" actually predicts about near-term price direction.
6. Build a dashboard pairing the inventory release calendar with price reaction, aimed at showing *when* the signal actually matters (release-day reaction vs. slower drift).

## Common pitfalls

- Using calendar-time train/test splits that accidentally straddle a known structural break (e.g., a major OPEC+ production-policy shift) without at least flagging it in the write-up.
- Comparing models only on aggregate error metrics without also checking whether a model captures the *direction* of price moves around inventory surprises specifically — aggregate RMSE can hide a model that's fine on quiet weeks and useless exactly when it matters.
- Ignoring seasonality in inventory data itself (driving-season drawdowns are structurally different from off-season builds) and treating every week as directly comparable.

## Connects to

[Month 8](../curriculum/month-08-unsupervised-time-series.md) (classical time series + walk-forward validation), [Month 3](../curriculum/month-03-visualization-bi.md) (dashboarding).

<p><label><input type="checkbox" class="vada-track" data-vada-id="project-07" data-vada-group="projects"> Mark this project shipped</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
