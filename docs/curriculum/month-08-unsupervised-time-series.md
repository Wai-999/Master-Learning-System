# Month 8 — Unsupervised Learning + Time Series

Two topics bundled deliberately: clustering/dimensionality reduction (where there's no labeled target) and time series (where the temporal structure itself is the signal, and where careless validation quietly leaks the future into training).

## Focus

- Clustering: K-Means (fast, needs a pre-specified k) vs. hierarchical clustering (no pre-specification, interpretable dendrogram); PCA for dimensionality reduction and "common factor" extraction.
- Classical time series: ARIMA/SARIMA, exponential smoothing, and — critically — **walk-forward/rolling-origin validation** instead of random splits.
- Volatility modeling basics (GARCH-family intuition) for series with calm/turbulent regime clustering (directly relevant to the [Gold](../projects/06-gold-commodities-regimes.md) and [Oil & Energy](../projects/07-oil-energy-forecasting.md) projects).

## Resources

From the [Resource Stack](../resources/index.md#machine-learning-fundamentals): StatQuest for clustering and PCA intuition, and `statsmodels`/scikit-learn documentation for implementation. No single free course covers time series as well as the others in this stack — lean on official `statsmodels` tutorials and StatQuest's time-series-adjacent videos.

## Week-by-week

- [ ] Week 1 — K-Means and hierarchical clustering; PCA. Apply K-Means to a customer or market dataset to build a segmentation (e.g., "historical market regimes" or "customer segments").
- [ ] Week 2 — Classical time series: trend/seasonality decomposition, ARIMA/SARIMA, exponential smoothing. Implement walk-forward validation from scratch once so the mechanism is unambiguous — don't rely on a library flag you haven't verified.
- [ ] Week 3 — Pick a time-series project ([Gold](../projects/06-gold-commodities-regimes.md), [Oil & Energy](../projects/07-oil-energy-forecasting.md), or [Real Estate](../projects/08-real-estate-home-values.md) all fit). Build a forecast with a correctly chronological train/validation/test split.
- [ ] Week 4 — Add the clustering angle where relevant (e.g., regime segmentation on the same series), and write up both results together.

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** map "why random k-fold leaks the future" using an actual timeline diagram — draw a training window that includes points *after* a test point, and mark exactly what information leaked. This single visual prevents one of the most common and hard-to-notice ML mistakes.
- **Apply (~35%):** the clustering project and the walk-forward-validated forecast are both "Apply" — real generation, not recognition.
- **Discuss (~25%):** explain, without notes, why K-Means needs a pre-specified number of clusters and hierarchical clustering doesn't, and what that costs computationally at scale.
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before backtesting your forecast, predict its error (MAE or RMSE) on the held-out period. Compare, and log any large miss — a confidently-wrong forecast prediction is exactly the kind of "concept drift" scenario worth understanding early (see the [Gold project](../projects/06-gold-commodities-regimes.md) for a concrete example).

## Milestone deliverable

A clustering/segmentation analysis **and** a time-series forecast with correct walk-forward validation, on real data, written up together as one combined analysis.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-08" data-vada-group="months"> Mark Month 8 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
