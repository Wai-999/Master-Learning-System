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

- [ ] Week 1 — Ng Specialization Course 1 (regression) + StatQuest gradient descent/regularization videos as needed. Implement Ridge and Lasso on a dataset with genuinely correlated features; compare coefficients to plain linear regression.
- [ ] Week 2 — Ng Specialization Course 2 (classification) + StatQuest logistic regression. Build a classifier and deliberately evaluate it on accuracy alone first — then discover why that's insufficient once you compute a confusion matrix.
- [ ] Week 3 — Pick the [HR/Attrition project](../projects/04-hr-attrition-survival.md) (or another classification-shaped project) and build a real classification pipeline: proper train/val/test split, cross-validation, precision/recall/F1/ROC-AUC, not just accuracy.
- [ ] Week 4 — Compare at least two model types (e.g., logistic regression vs. a tree-based model) on the same problem and write up which won, and — more importantly — *why*, in terms of the data's structure.

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** the estimation-vs-prediction table from the [methodology](../methodology/index.md) — redraw it from memory using your own regression example.
- **Apply (~35%):** build the classifier pipeline; run any ML cards due in the [spaced-repetition deck](../tools/spaced-repetition-deck.md).
- **Discuss (~25%):** explain, without notes, why 95% accuracy can be a *bad* result on an imbalanced dataset, using a concrete number (e.g., "if 98% of cases are negative, a model that always predicts negative already beats 95%").
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before evaluating on the test set, predict your model's accuracy AND its F1 score. A large gap between the two predictions you got right and wrong is informative about which metric you actually understand.

## Milestone deliverable

A classification project (attrition, churn, or similar) comparing at least two model families with proper evaluation (not just accuracy), on real data, with a written explanation of the winning model's tradeoffs.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-06" data-vada-group="months"> Mark Month 6 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
