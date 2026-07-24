# Month 8 — Unsupervised Learning + Time Series

Two topics bundled deliberately: clustering/dimensionality reduction (where there's no labeled target) and time series (where the temporal structure itself is the signal, and where careless validation quietly leaks the future into training).

## Focus

- Clustering: K-Means (fast, needs a pre-specified k) vs. hierarchical clustering (no pre-specification, interpretable dendrogram); PCA for dimensionality reduction and "common factor" extraction.
- Classical time series: ARIMA/SARIMA, exponential smoothing, and — critically — **walk-forward/rolling-origin validation** instead of random splits.
- Volatility modeling basics (GARCH-family intuition) for series with calm/turbulent regime clustering (directly relevant to the [Gold](../projects/06-gold-commodities-regimes.md) and [Oil & Energy](../projects/07-oil-energy-forecasting.md) projects).

## Resources

From the [Resource Stack](../resources/index.md#machine-learning-fundamentals): StatQuest for clustering and PCA intuition, and `statsmodels`/scikit-learn documentation for implementation. No single free course covers time series as well as the others in this stack — lean on official `statsmodels` tutorials and StatQuest's time-series-adjacent videos.

## Week-by-week

Each week has an optional day-by-day breakdown — expand it if useful, or just work off the week-level line.

- [ ] Week 1 — K-Means and hierarchical clustering; PCA. Apply K-Means to a customer or market dataset to build a segmentation (e.g., "historical market regimes" or "customer segments").

??? note "Day-by-day — Week 1"
    - [ ] Day 1 — StatQuest K-Means; implement it on a toy dataset, trying 2–3 different k values.
    - [ ] Day 2 — StatQuest hierarchical clustering; implement it on the same toy dataset and compare the grouping to K-Means.
    - [ ] Day 3 — StatQuest PCA; apply it to reduce a multi-feature dataset to 2 components and plot it.
    - [ ] Day 4 — Apply K-Means to a real customer or market dataset to build an actual segmentation.
    - [ ] Day 5 — Teach-back: explain, without notes, why K-Means needs a pre-specified k and hierarchical clustering doesn't.

- [ ] Week 2 — Classical time series: trend/seasonality decomposition, ARIMA/SARIMA, exponential smoothing. Implement walk-forward validation from scratch once so the mechanism is unambiguous — don't rely on a library flag you haven't verified.

??? note "Day-by-day — Week 2"
    - [ ] Day 1 — Trend/seasonality decomposition on a real series (e.g., `statsmodels` seasonal_decompose).
    - [ ] Day 2 — ARIMA/SARIMA — fit a basic model and interpret the (p,d,q) parameters.
    - [ ] Day 3 — Exponential smoothing as a comparison baseline.
    - [ ] Day 4 — Implement walk-forward validation from scratch (manual loop, not a library flag) so the mechanism is unambiguous.
    - [ ] Day 5 — Draw the "why random k-fold leaks the future" timeline diagram from memory; check it against the [methodology](../methodology/index.md) description.

- [ ] Week 3 — Pick a time-series project ([Gold](../projects/06-gold-commodities-regimes.md), [Oil & Energy](../projects/07-oil-energy-forecasting.md), or [Real Estate](../projects/08-real-estate-home-values.md) all fit). Build a forecast with a correctly chronological train/validation/test split.

??? note "Day-by-day — Week 3"
    - [ ] Day 1 — Pick the project; pull the data; set up the chronological train/validation/test split.
    - [ ] Day 2 — Fit a baseline model (ARIMA or exponential smoothing).
    - [ ] Day 3 — Predict the held-out error (MAE/RMSE) before checking it — write the number down.
    - [ ] Day 4 — Backtest with walk-forward validation; compare actual error to your prediction.
    - [ ] Day 5 — Try one improvement (added feature, different model) and re-backtest.

- [ ] Week 4 — Add the clustering angle where relevant (e.g., regime segmentation on the same series), and write up both results together.

??? note "Day-by-day — Week 4"
    - [ ] Day 1 — Apply clustering to identify regimes on the same time series (e.g., calm vs. turbulent periods).
    - [ ] Day 2 — Check whether your forecast's errors differ noticeably by regime — this is a preview of concept drift (see [Month 11](month-11-deployment-mlops.md)).
    - [ ] Day 3 — Write up both the clustering and forecasting results together as one combined analysis.
    - [ ] Day 4 — Push to GitHub with a README.
    - [ ] Day 5 — Teach-back the combined analysis out loud, no notes; check the Month 8 box on the [dashboard](../tools/progress-tracker.md).

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** map "why random k-fold leaks the future" using an actual timeline diagram — draw a training window that includes points *after* a test point, and mark exactly what information leaked. This single visual prevents one of the most common and hard-to-notice ML mistakes.
- **Apply (~35%):** the clustering project and the walk-forward-validated forecast are both "Apply" — real generation, not recognition.
- **Discuss (~25%):** explain, without notes, why K-Means needs a pre-specified number of clusters and hierarchical clustering doesn't, and what that costs computationally at scale.
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before backtesting your forecast, predict its error (MAE or RMSE) on the held-out period. Compare, and log any large miss — a confidently-wrong forecast prediction is exactly the kind of "concept drift" scenario worth understanding early (see the [Gold project](../projects/06-gold-commodities-regimes.md) for a concrete example).

## Milestone deliverable

A clustering/segmentation analysis **and** a time-series forecast with correct walk-forward validation, on real data, written up together as one combined analysis.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-08" data-vada-group="months"> Mark Month 8 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
