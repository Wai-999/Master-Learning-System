# Month 6 — Supervised ML I: Regression & Classification

The first month of core machine learning. The emphasis is the **estimation vs. prediction** distinction — the same linear regression you did by hand in Month 5 gets a different set of questions asked of it here ("how well does this generalize?" instead of "how confident am I in this coefficient?").

## Focus

- Linear and logistic regression from a prediction/generalization lens; train/validation/test splits; cross-validation.
- Regularization (Ridge/Lasso/Elastic Net) as a direct tool against overfitting on correlated features.
- Classification metrics beyond accuracy: precision, recall, F1, ROC-AUC — and why accuracy alone is dangerous under class imbalance.
- The estimation-vs-prediction bridge explicitly: the same model, two different questions.

## Resources

From the [Resource Stack](../resources/index.md#machine-learning-fundamentals): Andrew Ng's Machine Learning Specialization (audit the videos), StatQuest for intuition on any topic that doesn't click from the course alone, and scikit-learn's own tutorials as your implementation reference.

## Week-by-week

Each week has an optional day-by-day breakdown — expand it if useful, or just work off the week-level line.

- [ ] Week 1 — Ng Specialization Course 1 (regression) + StatQuest gradient descent/regularization videos as needed. Implement Ridge and Lasso on a dataset with genuinely correlated features; compare coefficients to plain linear regression.

??? note "Day-by-day — Week 1"
    - [ ] Day 1 — Ng Course 1, regression modules 1–2.
    - [ ] Day 2 — Ng Course 1, remaining modules; StatQuest gradient descent if anything felt fuzzy.
    - [ ] Day 3 — StatQuest Ridge/Lasso/Elastic Net; implement plain linear regression on a dataset with correlated features first.
    - [ ] Day 4 — Implement Ridge and Lasso on the same data; compare coefficients side by side.
    - [ ] Day 5 — Teach-back: explain, without notes, why Lasso can zero out a coefficient entirely and Ridge can't.

- [ ] Week 2 — Ng Specialization Course 2 (classification) + StatQuest logistic regression. Build a classifier and deliberately evaluate it on accuracy alone first — then discover why that's insufficient once you compute a confusion matrix.

??? note "Day-by-day — Week 2"
    - [ ] Day 1 — Ng Course 2, first half; StatQuest logistic regression.
    - [ ] Day 2 — Ng Course 2, second half.
    - [ ] Day 3 — Build a first classifier on any dataset; evaluate it on accuracy only, and write down whether you're satisfied with the number.
    - [ ] Day 4 — Compute the confusion matrix and precision/recall/F1; revisit yesterday's satisfaction in light of it.
    - [ ] Day 5 — Teach-back: explain, without notes, a case where 90%+ accuracy is actually a bad result.

- [ ] Week 3 — Pick the [HR/Attrition project](../projects/04-hr-attrition-survival.md) (or another classification-shaped project) and build a real classification pipeline: proper train/val/test split, cross-validation, precision/recall/F1/ROC-AUC, not just accuracy.

??? note "Day-by-day — Week 3"
    - [ ] Day 1 — Pick the project; set up a proper train/validation/test split (or cross-validation) before touching a model.
    - [ ] Day 2 — Train a first model (logistic regression baseline); evaluate with precision/recall/F1/ROC-AUC.
    - [ ] Day 3 — Handle class imbalance if present (SMOTE or class weighting); re-evaluate.
    - [ ] Day 4 — Predict your test-set F1 score before checking it (calibration).
    - [ ] Day 5 — Log any surprising result in the [Mistake Library](../mistake-library/index.md).

- [ ] Week 4 — Compare at least two model types (e.g., logistic regression vs. a tree-based model) on the same problem and write up which won, and — more importantly — *why*, in terms of the data's structure.

??? note "Day-by-day — Week 4"
    - [ ] Day 1 — Train a second model type (e.g., a tree-based model) on the identical split.
    - [ ] Day 2 — Compare both models' precision/recall/F1/ROC-AUC side by side.
    - [ ] Day 3 — Write up *why* one won, in terms of the data's structure — not just "it scored higher."
    - [ ] Day 4 — Push the project to GitHub with a README (goal → data → method → result).
    - [ ] Day 5 — Teach-back the full comparison out loud, no notes; check the Month 6 box on the [dashboard](../tools/progress-tracker.md).

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** the estimation-vs-prediction table from the [methodology](../methodology/index.md) — redraw it from memory using your own regression example.
- **Apply (~35%):** build the classifier pipeline; run any ML cards due in the [spaced-repetition deck](../tools/spaced-repetition-deck.md).
- **Discuss (~25%):** explain, without notes, why 95% accuracy can be a *bad* result on an imbalanced dataset, using a concrete number (e.g., "if 98% of cases are negative, a model that always predicts negative already beats 95%").
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before evaluating on the test set, predict your model's accuracy AND its F1 score. A large gap between the two predictions you got right and wrong is informative about which metric you actually understand.

## Milestone deliverable

A classification project (attrition, churn, or similar) comparing at least two model families with proper evaluation (not just accuracy), on real data, with a written explanation of the winning model's tradeoffs.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-06" data-vada-group="months"> Mark Month 6 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
