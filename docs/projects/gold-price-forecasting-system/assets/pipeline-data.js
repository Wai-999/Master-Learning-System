/* ============================================================
   Gold Price Forecasting System — pipeline & bibliography data
   Shared by framework.html (Page 1) and system-map.html (Page 3)
   ============================================================ */

// ---- Bibliography, keyed by citation code -------------------
// All entries below were verified against publisher / journal / SSRN / NBER
// records. Where a free copy exists, the URL points to it.
const BIBLIOGRAPHY = {
  Hyndman21: { authors: "Hyndman, R.J. & Athanasopoulos, G.", year: "2021", title: "Forecasting: Principles and Practice (3rd ed.)", venue: "OTexts — free online", url: "https://otexts.com/fpp3/", type: "Book", level: "Beginner", theme: "Time-Series Forecasting" },
  Hamilton94: { authors: "Hamilton, J.D.", year: "1994", title: "Time Series Analysis", venue: "Princeton University Press", url: "", type: "Book", level: "Advanced", theme: "Time-Series Forecasting" },
  Tsay10: { authors: "Tsay, R.S.", year: "2010", title: "Analysis of Financial Time Series (3rd ed.)", venue: "Wiley", url: "", type: "Book", level: "Intermediate", theme: "Time-Series Forecasting" },
  BoxJenkins15: { authors: "Box, G.E.P., Jenkins, G.M., Reinsel, G.C. & Ljung, G.M.", year: "2015", title: "Time Series Analysis: Forecasting and Control (5th ed.)", venue: "Wiley", url: "", type: "Book", level: "Advanced", theme: "Time-Series Forecasting" },

  Pearl16: { authors: "Pearl, J., Glymour, M. & Jewell, N.P.", year: "2016", title: "Causal Inference in Statistics: A Primer", venue: "Wiley", url: "", type: "Book", level: "Beginner", theme: "Causal Inference & Graphical Models" },
  Pearl18: { authors: "Pearl, J. & Mackenzie, D.", year: "2018", title: "The Book of Why", venue: "Basic Books", url: "", type: "Book", level: "Beginner", theme: "Causal Inference & Graphical Models" },
  Peters17: { authors: "Peters, J., Janzing, D. & Schölkopf, B.", year: "2017", title: "Elements of Causal Inference: Foundations and Learning Algorithms", venue: "MIT Press — free PDF", url: "https://mitpress.mit.edu/9780262037310/elements-of-causal-inference/", type: "Book", level: "Advanced", theme: "Causal Inference & Graphical Models" },
  Koller09: { authors: "Koller, D. & Friedman, N.", year: "2009", title: "Probabilistic Graphical Models: Principles and Techniques", venue: "MIT Press", url: "", type: "Book", level: "Advanced", theme: "Causal Inference & Graphical Models" },
  Spirtes00: { authors: "Spirtes, P., Glymour, C. & Scheines, R.", year: "2000", title: "Causation, Prediction, and Search (2nd ed.)", venue: "MIT Press", url: "", type: "Book", level: "Advanced", theme: "Causal Inference & Graphical Models" },
  Granger69: { authors: "Granger, C.W.J.", year: "1969", title: "Investigating Causal Relations by Econometric Models and Cross-Spectral Methods", venue: "Econometrica, 37(3), 424–438", url: "", type: "Paper", level: "Intermediate", theme: "Causal Inference & Graphical Models" },
  Cunningham21: { authors: "Cunningham, S.", year: "2021", title: "Causal Inference: The Mixtape", venue: "Yale University Press — free online", url: "https://mixtape.scunning.com/", type: "Book", level: "Intermediate", theme: "Causal Inference & Graphical Models" },

  Hastie09: { authors: "Hastie, T., Tibshirani, R. & Friedman, J.", year: "2009", title: "The Elements of Statistical Learning (2nd ed.)", venue: "Springer — free PDF", url: "https://hastie.su.domains/ElemStatLearn/", type: "Book", level: "Advanced", theme: "Machine Learning & Financial ML" },
  James21: { authors: "James, G., Witten, D., Hastie, T. & Tibshirani, R.", year: "2021", title: "An Introduction to Statistical Learning (2nd ed.)", venue: "Springer — free PDF", url: "https://www.statlearning.com/", type: "Book", level: "Beginner", theme: "Machine Learning & Financial ML" },
  LopezDePrado18: { authors: "López de Prado, M.", year: "2018", title: "Advances in Financial Machine Learning", venue: "Wiley", url: "", type: "Book", level: "Advanced", theme: "Machine Learning & Financial ML" },

  Lim21: { authors: "Lim, B., Arik, S.Ö., Loeff, N. & Pfister, T.", year: "2021", title: "Temporal Fusion Transformers for Interpretable Multi-horizon Time Series Forecasting", venue: "International Journal of Forecasting, 37(4), 1748–1764", url: "https://doi.org/10.1016/j.ijforecast.2021.03.012", type: "Paper", level: "Advanced", theme: "Deep Learning for Time Series" },
  Oreshkin20: { authors: "Oreshkin, B.N., Carpov, D., Chapados, N. & Bengio, Y.", year: "2020", title: "N-BEATS: Neural Basis Expansion Analysis for Interpretable Time Series Forecasting", venue: "ICLR 2020", url: "https://openreview.net/forum?id=r1ecqn4YwB", type: "Paper", level: "Advanced", theme: "Deep Learning for Time Series" },
  Salinas20: { authors: "Salinas, D., Flunkert, V., Gasthaus, J. & Januschowski, T.", year: "2020", title: "DeepAR: Probabilistic Forecasting with Autoregressive Recurrent Networks", venue: "International Journal of Forecasting, 36, 1181–1191", url: "", type: "Paper", level: "Advanced", theme: "Deep Learning for Time Series" },

  Erb13: { authors: "Erb, C.B. & Harvey, C.R.", year: "2013", title: "The Golden Dilemma", venue: "Financial Analysts Journal, 69(4), 10–42 · also NBER Working Paper 18706 (free PDF)", url: "https://www.nber.org/papers/w18706", type: "Paper", level: "Intermediate", theme: "Gold & Macro-Finance Literature" },
  Baur10: { authors: "Baur, D.G. & Lucey, B.M.", year: "2010", title: "Is Gold a Hedge or a Safe Haven? An Analysis of Stocks, Bonds and Gold", venue: "Financial Review, 45(2), 217–229", url: "https://doi.org/10.1111/j.1540-6288.2010.00244.x", type: "Paper", level: "Intermediate", theme: "Gold & Macro-Finance Literature" },
  Kuttner01: { authors: "Kuttner, K.N.", year: "2001", title: "Monetary Policy Surprises and Interest Rates: Evidence from the Fed Funds Futures Market", venue: "Journal of Monetary Economics, 47(3), 523–544", url: "", type: "Paper", level: "Advanced", theme: "Gold & Macro-Finance Literature" },
  Brave12: { authors: "Brave, S. & Butters, R.A.", year: "2012", title: "Diagnosing the Financial System: Financial Conditions and Financial Stress", venue: "International Journal of Central Banking, 8(2), 191–239 (NFCI methodology)", url: "https://www.chicagofed.org/publications/economic-perspectives/2011/1q-brave-butters", type: "Paper", level: "Advanced", theme: "Gold & Macro-Finance Literature" },
  ChicagoFed17: { authors: "Federal Reserve Bank of Chicago", year: "2017", title: "Introducing the Chicago Fed's New Adjusted National Financial Conditions Index", venue: "Chicago Fed Letter, No. 386 (ANFCI methodology)", url: "https://www.chicagofed.org/publications/chicago-fed-letter/2017/386", type: "Note", level: "Intermediate", theme: "Gold & Macro-Finance Literature" }
};

const BIBLIOGRAPHY_THEME_ORDER = [
  "Time-Series Forecasting",
  "Causal Inference & Graphical Models",
  "Machine Learning & Financial ML",
  "Deep Learning for Time Series",
  "Gold & Macro-Finance Literature"
];

// ---- The 9-stage pipeline ------------------------------------
// Each stage is used two ways:
//  - framework.html emphasizes: goal, concepts, pitfalls, reading
//  - system-map.html emphasizes: goal, keyActions, tools, output, pitfalls
const PIPELINE_STAGES = [
  {
    id: "framing",
    num: 1,
    title: "Problem Framing & Forecast Design",
    tagline: "Turn 'predict gold prices' into a precise, testable specification.",
    goal: "Translate a vague goal into an exact forecasting spec before touching any data: what exactly are you predicting, over what horizon, in what form, measured how.",
    concepts: ["Point vs. distributional forecasting", "Horizon design (h = 10–15 trading days)", "Direct / recursive / multi-output strategies", "Baseline-relative evaluation"],
    pitfalls: [
      "Defining 'accuracy' only after modeling, so there's no way to tell if a model is actually useful.",
      "A '10–15 day window' can mean a single target 10–15 days out, or the entire path — these need different model architectures, and the choice should be made now, not during modeling.",
      "Comparing a model only to itself across tweaks, with no naive baseline, so a mediocre model looks impressive."
    ],
    keyActions: [
      "Write a one-sentence forecast statement: 'Predict Gold_Close at t+12 (or the full path t+1..t+15) using only information available up to and including t.'",
      "Choose the horizon strategy: single fixed-horizon target, full 10–15 day path (multi-output), or recursive 1-step-ahead chained forward.",
      "Choose the output type: point forecast, quantile/interval forecast, or a directional (up/down) classification.",
      "Pick evaluation metrics: MAE / RMSE / MAPE for point forecasts, pinball loss for quantiles, directional accuracy as a business sanity check.",
      "Define at least two baselines — naive persistence and random-walk-with-drift — that any real model must beat."
    ],
    tools: ["A one-page written design spec — no code required yet"],
    output: "A written forecast specification: target definition, horizon strategy, output type, metrics, and baselines.",
    reading: ["Hyndman21", "Hamilton94"]
  },
  {
    id: "understanding",
    num: 2,
    title: "Data Understanding & Inventory",
    tagline: "Know exactly what every column is before you use it.",
    goal: "Build a complete mental (and written) map of the ~70 columns: what family each belongs to, its native frequency, and how it was assembled into a daily table.",
    concepts: ["Mixed-frequency data (daily prices + monthly/weekly macro releases)", "Stock vs. flow variables", "Data provenance & vintages"],
    pitfalls: [
      "Treating every column as genuinely 'daily observed' data — several (CPIAUCSL, M2SL, RECPROUSM156N, FEDFUNDS) are natively monthly and only look daily because of forward-filling.",
      "Not checking the *_is_filled companion flags before modeling — they tell you which rows are real releases versus carried-forward values."
    ],
    keyActions: [
      "Group all columns into families: Gold OHLCV + target, cross-asset OHLCV (CPI_Proxy, DXY, SP500, Crude_Oil, Silver, Platinum), technical indicators (ma_7/30/90, rsi, macd, macd_signal, bb_upper/lower, daily_return, volatility), FRED macro indicators (ANFCI, CPIAUCSL, DFII10, DGS10, DGS2, FEDFUNDS, M2SL, NFCI, RECPROUSM156N, STLFSI4, T10Y2Y, T10YIE, VIXCLS), and their *_is_filled companions.",
      "For every FRED series, look up its native release frequency and typical publication lag (e.g. CPIAUCSL ≈ 2 weeks after month-end; FEDFUNDS is a monthly average, not daily; NFCI / STLFSI4 update weekly).",
      "Cross-tabulate each *_is_filled column: what fraction of rows are true observations vs. forward-filled.",
      "Check date coverage and the trading-day calendar; confirm whether weekends/holidays are already excluded.",
      "Confirm units and scaling (percent, index level, or price) for every series."
    ],
    tools: ["pandas (.info(), .describe(), .dtypes)", "missingno for visualizing missingness", "FRED series metadata pages (fred.stlouisfed.org)"],
    output: "A data dictionary: column → family → native frequency → publication lag → unit.",
    reading: ["Hyndman21"]
  },
  {
    id: "alignment",
    num: 3,
    title: "Data Quality & Temporal Alignment",
    tagline: "Make sure the model never sees the future.",
    goal: "Guarantee that, at any simulated 'forecast origin' date, every input reflects only what was truly public knowledge on that date.",
    concepts: ["Point-in-time / real-time vintage data", "Look-ahead bias via publication lag", "Forward-fill vs. back-fill"],
    pitfalls: [
      "Aligning CPIAUCSL to its reference month (e.g. placing June's CPI value on June 30th) instead of its actual release date (mid-July) — this leaks about two weeks of the future into training.",
      "Using any form of backward-fill near macro data — it explicitly copies future values backward in time.",
      "Forgetting that equities, bonds, and commodities close on different holiday calendars, which can silently misalign 'daily' rows."
    ],
    keyActions: [
      "For every monthly/weekly FRED series, shift its value so it only appears in the dataset from its true publication date onward — never from its reference-period date.",
      "Re-verify the *_is_filled flags against this logic; treat the rows flagged as real observations as the only trustworthy anchor points.",
      "Use forward-fill only (never backward-fill) when propagating low-frequency values across daily rows.",
      "Reconcile trading calendars across asset classes; settle on one master calendar (commonly US equity trading days).",
      "Re-run the *_is_filled cross-tab after alignment to confirm no future leakage remains."
    ],
    tools: ["pandas (asfreq, ffill, merge_asof for as-of joins)", "pandas-market-calendars"],
    output: "A leakage-audited daily calendar with every macro series correctly lagged to its true publication date.",
    reading: ["LopezDePrado18"]
  },
  {
    id: "eda",
    num: 4,
    title: "Exploratory & Statistical Analysis",
    tagline: "Understand how gold actually behaves before picking a model family.",
    goal: "Characterize the statistical properties of gold prices and their relationships to other series: stationarity, autocorrelation, volatility behavior, and regime-dependence.",
    concepts: ["Stationarity (unit roots)", "Autocorrelation & volatility clustering (ARCH effects)", "Regime-dependent correlation"],
    pitfalls: [
      "Modeling raw price levels (non-stationary, trending) instead of returns or log-returns.",
      "Reading one full-sample correlation matrix as if relationships are stable — gold's correlation with DXY, real yields, or SP500 shifts across regimes.",
      "Ignoring volatility clustering, which most linear models miss entirely."
    ],
    keyActions: [
      "Plot Gold_Price and log-returns over the full sample; annotate major macro regimes.",
      "Run ADF and KPSS tests on price levels and on returns.",
      "Plot ACF/PACF of returns and of squared returns (volatility clustering / ARCH-LM test).",
      "Build a correlation matrix of every feature against forward Gold return at multiple lags (0, 1, 5, 10, 15 days) — not just same-day correlation.",
      "Compute rolling (60–120 day) correlations between Gold and DXY / real yields / VIX to see how the relationships drift over time."
    ],
    tools: ["statsmodels (adfuller, kpss, acf, pacf)", "arch (ARCH-LM test, GARCH)", "seaborn / matplotlib for heatmaps"],
    output: "An EDA notebook documenting stationarity, autocorrelation, volatility clustering, and regime-dependent correlation.",
    reading: ["Tsay10", "Hamilton94"]
  },
  {
    id: "causal",
    num: 5,
    title: "Causal & Domain Reasoning",
    tagline: "Sketch how these variables actually influence each other before trusting any correlation.",
    goal: "Build a hypothesis — a causal diagram — of how the variables in this dataset really relate in the world, so later feature-importance results can be checked against theory instead of taken at face value.",
    concepts: ["Chain junctions (mediation)", "Fork junctions (confounding)", "Collider junctions (selection bias)", "Bayesian networks & d-separation", "Granger causality vs. structural causality"],
    pitfalls: [
      "Assuming any correlated pair has a direct causal link, when a shared upstream driver (a fork) is the real explanation — gold and VIX rising together doesn't mean one causes the other.",
      "Filtering the dataset on an outcome-adjacent variable (e.g. only 'big gold move' days) and unknowingly inducing collider bias between two of gold's independent drivers.",
      "Treating Granger causality ('X helps predict Y') as if it proves 'X causes Y.'"
    ],
    keyActions: [
      "Sketch a DAG of hypothesized relationships using macro-finance theory (see the Feature Causality Explorer for a full worked example on this exact dataset).",
      "Flag variable clusters that likely share one latent driver (e.g. VIXCLS / NFCI / ANFCI / STLFSI4 as joint manifestations of 'financial stress') to avoid double-counting them as independent causes later.",
      "Identify potential colliders (variables jointly caused by two of your other variables) and avoid conditioning or filtering on them during analysis.",
      "Optionally run Granger causality tests or a causal-discovery algorithm (PC/FCI) and compare the data-driven structure to your theory DAG — investigate disagreements rather than trusting either blindly.",
      "Carry the resulting DAG forward as a checklist for feature engineering and, later, for explainability sanity checks."
    ],
    tools: ["networkx (draw the DAG)", "pgmpy / bnlearn (Bayesian network structure + inference)", "causalnex, dowhy (causal effect estimation)", "statsmodels.tsa.stattools.grangercausalitytests"],
    output: "A hypothesized causal DAG for gold price drivers, annotated with junction types.",
    reading: ["Pearl16", "Pearl18", "Spirtes00", "Granger69"],
    linkTo: "feature-causality.html"
  },
  {
    id: "features",
    num: 6,
    title: "Feature Engineering & Leakage Control",
    tagline: "Build model-ready features for a 10–15 day horizon without leaking the future.",
    goal: "Convert raw, aligned data into features and horizon-aligned targets, with leakage prevention treated as a first-class design constraint, not an afterthought.",
    concepts: ["Log-returns for stationarity", "Lag / rolling features", "Overlapping-label leakage at multi-day horizons"],
    pitfalls: [
      "Recomputing ma_7 / ma_30 / rsi / macd / Bollinger Bands using the FULL series (including dates after the forecast origin) instead of only data available up to that origin.",
      "Using Gold_Open / High / Low / Volume from the SAME day to predict that day's or a near-future close — same-day OHLC is not known at the moment you'd actually be forecasting.",
      "Not recognizing that overlapping 10–15 day windows (day t's target window overlaps day t+1's) create autocorrelated errors that inflate apparent cross-validation performance."
    ],
    keyActions: [
      "Convert Gold_Price and cross-asset prices to log-returns; difference any other non-stationary series identified in Stage 4.",
      "Rebuild every technical indicator (ma_7/30/90, rsi, macd, macd_signal, bb_upper/lower, volatility) strictly from data at or before the forecast origin.",
      "Create lag features (t-1, t-5, t-10, t-20) for macro/cross-asset variables; never include same-day or future values for anything not known in real time.",
      "Construct the horizon target(s): Gold_Price at t+10..t+15, or cumulative/average return over that window.",
      "Consider collapsing fork-clustered variables (e.g. the four financial-stress indices) into a single composite via PCA to reduce multicollinearity.",
      "Fit any scaler or encoder on the training fold only, then apply it to validation/test — never fit on the full dataset."
    ],
    tools: ["pandas / pandas-ta (indicators recomputed and correctly shifted)", "scikit-learn (Pipeline, ColumnTransformer, StandardScaler, PCA)"],
    output: "A leakage-checked feature matrix and horizon-aligned target(s), ready for modeling.",
    reading: ["LopezDePrado18", "Tsay10"]
  },
  {
    id: "modeling",
    num: 7,
    title: "Model Building",
    tagline: "From simple, interpretable baselines to more expressive models — always benchmarked.",
    goal: "Move progressively from statistical baselines to machine learning to sequence/Bayesian models, keeping every step benchmarked against Stage 1's baselines.",
    concepts: ["Statistical time-series models (ARIMA/VAR)", "Gradient-boosted trees on lagged features", "Sequence models for multi-horizon output", "Bayesian approaches for explicit uncertainty"],
    pitfalls: [
      "Jumping straight to deep learning without confirming it beats a well-tuned ARIMA or XGBoost baseline.",
      "Fitting a VAR/VECM without first testing for cointegration and stationarity.",
      "Treating a Bayesian network purely as a diagram rather than actually using it for probabilistic queries."
    ],
    keyActions: [
      "Fit baselines: naive persistence, seasonal naive, ARIMA/SARIMAX on Gold log-returns.",
      "Test cointegration between Gold and DXY / real yields (Johansen test); if cointegrated, consider a VECM.",
      "Fit tree ensembles (Random Forest, XGBoost/LightGBM) on the lagged feature matrix; use quantile variants for interval forecasts.",
      "For the full 10–15 day path, try a sequence model (LSTM/GRU seq2seq) or a purpose-built multi-horizon architecture (Temporal Fusion Transformer, N-BEATS, DeepAR).",
      "Optionally encode the Stage 5 DAG as an explicit Bayesian network (pgmpy) to answer scenario questions such as 'P(Gold up over 10 days | DXY falling, real yields falling, VIX rising)'.",
      "Stack or ensemble the strongest 2–3 model families rather than picking a single 'winner' too early."
    ],
    tools: ["statsmodels, pmdarima (ARIMA/SARIMAX, Johansen test)", "scikit-learn, xgboost, lightgbm", "PyTorch / Keras (LSTM, TFT, N-BEATS)", "pgmpy (Bayesian network inference)"],
    output: "A shortlist of 3–5 candidate models, each beating the Stage 1 baselines on held-out data.",
    reading: ["Hastie09", "James21", "Lim21", "Oreshkin20", "Salinas20"]
  },
  {
    id: "validation",
    num: 8,
    title: "Validation, Backtesting & Uncertainty",
    tagline: "Get an honest read on future performance, not an inflated one.",
    goal: "Estimate how each model will really perform on unseen future data, using validation procedures designed for time series rather than i.i.d. data.",
    concepts: ["Walk-forward / expanding-window validation", "Purging & embargo for overlapping labels", "Prediction interval calibration"],
    pitfalls: [
      "Using random k-fold CV on time series data — this lets the model 'see the future' inside training folds.",
      "Ignoring that overlapping 10–15 day target windows need a purge/embargo gap between train and test, or information bleeds across the split.",
      "Reporting only point-forecast error and never checking whether stated uncertainty intervals actually contain the right fraction of outcomes."
    ],
    keyActions: [
      "Replace random k-fold with walk-forward (expanding or rolling window) time-series cross-validation.",
      "Add a purge window between train and validation at least as long as the forecast horizon, plus an embargo period, to remove overlap-induced leakage.",
      "Backtest across multiple regimes separately (high/low volatility, rising/falling rates) — an average score can hide a model that only works in one regime.",
      "For interval/quantile forecasts, check empirical coverage (does the 80% interval actually contain the outcome ~80% of the time?).",
      "Always report performance relative to the Stage 1 baselines, not in isolation."
    ],
    tools: ["scikit-learn TimeSeriesSplit, extended with custom purge/embargo logic", "arch / statsmodels for backtesting utilities"],
    output: "A validated performance report: metrics by regime, baseline-relative lift, and interval calibration.",
    reading: ["LopezDePrado18", "Hyndman21"]
  },
  {
    id: "explainability",
    num: 9,
    title: "Explainability, Causal Sanity Checks & Deployment",
    tagline: "Confirm the model learned real signal, then keep it trustworthy over time.",
    goal: "Verify the model is learning genuine signal rather than leakage or noise, and put a plan in place to keep it that way as markets evolve.",
    concepts: ["SHAP / permutation importance", "Theory-vs-data importance comparison", "Concept drift"],
    pitfalls: [
      "Skipping the comparison between model-derived feature importance and the Stage 5 causal ranking — a mismatch is either a leak or a genuine discovery, and you need to know which.",
      "Deploying without a plan for macro-release days (CPI, FOMC), which cause step-changes in several inputs at once.",
      "No retraining cadence, so the model silently decays as market regimes shift."
    ],
    keyActions: [
      "Compute SHAP values / permutation importance on the final model(s).",
      "Compare the resulting ranking against the Feature Causality Explorer's tiers — investigate any feature that dominates importance but has weak theoretical grounding (a classic leakage red flag).",
      "Build a monitoring view: rolling forecast error, feature-distribution drift, and a calendar of upcoming macro releases that affect *_is_filled columns.",
      "Define a retraining cadence (e.g. monthly) and a versioning scheme so a regressing model can be rolled back.",
      "Document known limitations and the regimes where the model is least reliable."
    ],
    tools: ["shap", "evidently / whylogs (drift monitoring)", "mlflow (versioning)"],
    output: "An explainability report cross-checked against the causal DAG, plus a live monitoring and retraining plan.",
    reading: ["LopezDePrado18", "Pearl16"],
    linkTo: "feature-causality.html"
  }
];
