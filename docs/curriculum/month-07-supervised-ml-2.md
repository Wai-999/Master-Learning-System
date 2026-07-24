# Month 7 — Supervised ML II: Trees & Ensembles

Where most of the practical, job-relevant predictive power lives for structured/tabular data: decision trees and the ensemble methods built on top of them (bagging, boosting, and the specific implementations — Random Forest, XGBoost, LightGBM, CatBoost).

## Focus

- Decision trees: how splits are chosen, why a single tree overfits, why it's still useful for explaining a forecast to a non-technical audience.
- Bagging (variance reduction, Random Forest) vs. boosting (bias reduction, sequential error-correction, XGBoost/LightGBM/CatBoost).
- Hyperparameter tuning without overfitting the tuning process itself (nested cross-validation or a held-out validation set).
- Explainability: SHAP for global + per-prediction feature attribution.

## Resources

From the [Resource Stack](../resources/index.md#machine-learning-fundamentals): continue Andrew Ng's Specialization (tree-based methods are covered in Course 2), Kaggle Learn's Intermediate Machine Learning course specifically for ensembles and pipelines, and scikit-learn/XGBoost documentation as your implementation reference.

## Week-by-week

Each week has an optional day-by-day breakdown — expand it if useful, or just work off the week-level line.

- [ ] Week 1 — Decision trees from first principles (StatQuest is unusually good here); implement one and deliberately let it overfit so you can see the symptom directly (near-perfect train score, mediocre validation score).

??? note "Day-by-day — Week 1"
    - [ ] Day 1 — StatQuest decision trees — how splits are chosen.
    - [ ] Day 2 — Implement a decision tree on a real dataset with no depth limit; observe near-perfect train accuracy.
    - [ ] Day 3 — Check its validation score; confirm the overfitting gap directly.
    - [ ] Day 4 — Add a max-depth/min-samples constraint; watch train and validation scores converge.
    - [ ] Day 5 — Teach-back: explain, without notes, why a single decision tree is easy to explain to a non-technical audience but usually a poor final model.

- [ ] Week 2 — Random Forest and Gradient Boosting (XGBoost or LightGBM); Kaggle Intermediate ML for pipeline hygiene (avoiding leakage through preprocessing steps).

??? note "Day-by-day — Week 2"
    - [ ] Day 1 — StatQuest Random Forest (bagging); implement one on the same dataset from Week 1.
    - [ ] Day 2 — StatQuest Gradient Boosting; implement XGBoost or LightGBM on the same dataset.
    - [ ] Day 3 — Compare all three (single tree, Random Forest, boosted) side by side on validation score.
    - [ ] Day 4 — Kaggle Intermediate ML: pipelines, and specifically how preprocessing can leak information if fit before splitting.
    - [ ] Day 5 — Audit your own Week 1–2 code for that exact leakage pattern; fix anything you find.

- [ ] Week 3 — Enter a live Kaggle competition (or a closed/practice one if timing doesn't line up) using a tree ensemble as your baseline model. Focus on a clean, leakage-free pipeline over chasing leaderboard rank.

??? note "Day-by-day — Week 3"
    - [ ] Day 1 — Pick a competition; build the simplest possible leakage-free baseline pipeline and submit it once, just to confirm the pipeline works end to end.
    - [ ] Day 2 — Add feature engineering, one change at a time, re-validating after each.
    - [ ] Day 3 — Tune hyperparameters using a held-out validation set (not the leaderboard) to avoid overfitting to it.
    - [ ] Day 4 — Predict your leaderboard score before submitting, then submit and compare (calibration).
    - [ ] Day 5 — Read 2–3 top public notebooks for the competition; note one technique you didn't think of.

- [ ] Week 4 — Add SHAP explainability to your best model; keep a **deliberate-error log** of every misclassified/high-error case, classified by *why* it was wrong (see the [Mistake Library](../mistake-library/index.md)).

??? note "Day-by-day — Week 4"
    - [ ] Day 1 — Add SHAP to your best model; generate the global feature-importance summary.
    - [ ] Day 2 — Generate per-prediction SHAP explanations for 3–5 individual cases.
    - [ ] Day 3 — Pull the 10–20 worst-error cases; start classifying each by root cause in the [Mistake Library](../mistake-library/index.md).
    - [ ] Day 4 — Finish the error log; look for a pattern across the misclassified cases.
    - [ ] Day 5 — Teach-back, without notes, why boosting reduces bias while bagging reduces variance; check the Month 7 box on the [dashboard](../tools/progress-tracker.md).

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** the model-family relationship graph from the [Resource Stack](../resources/index.md) — Decision Tree → (extends) → Random Forest / Gradient Boosting → (specific implementations) → XGBoost/LightGBM/CatBoost. Redraw from memory.
- **Apply (~35%):** the Kaggle competition entry is the main "Apply" event this month — real data, real leaderboard feedback, genuine deliberate practice.
- **Discuss (~25%):** explain, without notes, why boosting reduces bias while bagging reduces variance — this distinction is frequently memorized as a slogan without being understood, and it's a very common interview question.
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before submitting to Kaggle, predict your leaderboard score. Track the gap between predicted and actual across your first several submissions — it should shrink as your calibration improves.

## Milestone deliverable

A Kaggle competition entry (or equivalent structured competition) using a tuned tree ensemble with SHAP explainability, plus a deliberate-error log of misclassified cases classified by root cause.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-07" data-vada-group="months"> Mark Month 7 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
