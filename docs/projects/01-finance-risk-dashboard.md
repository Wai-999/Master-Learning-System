# 01 · Finance — Risk & Return Dashboard

<span class="vada-badge vada-badge-intermediate">Intermediate</span> <span class="vada-badge vada-badge-domain">Finance</span>

**Question:** How do risk-adjusted returns of a portfolio compare across sectors, and can volatility be forecast?

**Data:** `yfinance` for equity prices (`pip install yfinance`), [FRED](https://fred.stlouisfed.org) for macro series (rates, inflation) — see [Resources → Finance](../resources/index.md#free-datasets-by-target-domain).

**Techniques:** EDA, time series, rolling volatility, correlation heatmaps, dashboarding.

Financial analyst roles increasingly expect Python-based risk metrics on top of (not instead of) Excel — this project is the clearest demonstration of that specific, in-demand combination.

## Approach

1. Pull daily price history for a basket of stocks across at least 3–4 sectors via `yfinance`, plus a couple of FRED macro series (e.g., 10-year Treasury yield, CPI).
2. Compute daily/rolling returns, rolling volatility (e.g., 30-day standard deviation of returns), and a risk-adjusted return metric (Sharpe ratio at minimum).
3. Build a correlation heatmap across sectors — where does diversification actually reduce risk vs. where do sectors move together under stress?
4. Fit a simple volatility model (even a GARCH-family model, or a rolling-window baseline if you haven't covered GARCH yet) and backtest it with walk-forward validation (see [Month 8](../curriculum/month-08-unsupervised-time-series.md)).
5. Package the above into a dashboard: sector comparison view, a volatility forecast view, and a short written risk narrative.

## Common pitfalls

- Random train/test splits on price data — this must be walk-forward, never shuffled (see [Month 8](../curriculum/month-08-unsupervised-time-series.md)).
- Reporting Sharpe ratio without stating the risk-free rate and period used — it's not comparable across analyses otherwise.
- Treating correlation computed over a calm period as if it holds during a crisis — correlations often spike toward 1 exactly when diversification would matter most.

## Connects to

[Month 1](../curriculum/month-01-python-pandas.md) (EDA fluency), [Month 3](../curriculum/month-03-visualization-bi.md) (dashboarding), [Month 8](../curriculum/month-08-unsupervised-time-series.md) (time series + walk-forward validation).

<p><label><input type="checkbox" class="vada-track" data-vada-id="project-01" data-vada-group="projects"> Mark this project shipped</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
