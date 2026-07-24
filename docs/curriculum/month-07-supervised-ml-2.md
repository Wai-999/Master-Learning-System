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

- [ ] Week 1 — Decision trees from first principles (StatQuest is unusually good here); implement one and deliberately let it overfit so you can see the symptom directly (near-perfect train score, mediocre validation score).
- [ ] Week 2 — Random Forest and Gradient Boosting (XGBoost or LightGBM); Kaggle Intermediate ML for pipeline hygiene (avoiding leakage through preprocessing steps).
- [ ] Week 3 — Enter a live Kaggle competition (or a closed/practice one if timing doesn't line up) using a tree ensemble as your baseline model. Focus on a clean, leakage-free pipeline over chasing leaderboard rank.
- [ ] Week 4 — Add SHAP explainability to your best model; keep a **deliberate-error log** of every misclassified/high-error case, classified by *why* it was wrong (see the [Mistake Library](../mistake-library/index.md)).

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** the model-family relationship graph from the [Resource Stack](../resources/index.md) — Decision Tree → (extends) → Random Forest / Gradient Boosting → (specific implementations) → XGBoost/LightGBM/CatBoost. Redraw from memory.
- **Apply (~35%):** the Kaggle competition entry is the main "Apply" event this month — real data, real leaderboard feedback, genuine deliberate practice.
- **Discuss (~25%):** explain, without notes, why boosting reduces bias while bagging reduces variance — this distinction is frequently memorized as a slogan without being understood, and it's a very common interview question.
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before submitting to Kaggle, predict your leaderboard score. Track the gap between predicted and actual across your first several submissions — it should shrink as your calibration improves.

## Milestone deliverable

A Kaggle competition entry (or equivalent structured competition) using a tuned tree ensemble with SHAP explainability, plus a deliberate-error log of misclassified cases classified by root cause.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-07" data-vada-group="months"> Mark Month 7 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
