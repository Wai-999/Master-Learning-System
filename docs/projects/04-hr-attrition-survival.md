# 04 · HR / People Analytics — Attrition & Survival Analysis

<span class="vada-badge vada-badge-intermediate">Intermediate</span> <span class="vada-badge vada-badge-domain">HR / People Analytics</span>

**Question:** Who is likely to leave — and, more usefully, *when*?

**Data:** [IBM HR Analytics Employee Attrition](https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset) (Kaggle) — see [Resources → HR](../resources/index.md#free-datasets-by-target-domain).

**Techniques:** Logistic regression, tree ensembles, SMOTE for class imbalance, Kaplan-Meier curves + Cox proportional hazards (the `lifelines` package), a Streamlit dashboard for delivery.

This is the **highest-ROI single starter project** in the whole system: attrition classification alone is common in portfolios, but pairing it with genuine survival analysis is a real differentiator that few entry-level candidates include, and it directly showcases both Month 6/7 classification skills and a distinct, valuable technique most bootcamps skip entirely.

## Approach

1. EDA first: attrition is typically a minority class in this dataset (class imbalance) — quantify it explicitly before modeling.
2. Build a classification baseline (logistic regression) then a tree ensemble (Random Forest or XGBoost), using SMOTE or class weighting to handle imbalance — and evaluate with precision/recall/F1 for the "left" class specifically, never accuracy alone (see [Month 6](../curriculum/month-06-supervised-ml-1.md)).
3. Add SHAP to explain which features drive the classifier's predictions.
4. Now add the differentiator: fit **Kaplan-Meier** survival curves (time-to-attrition) segmented by a key variable (e.g., department, overtime status) using `lifelines`.
5. Fit a **Cox proportional hazards** model to get hazard ratios per feature (e.g., "employees working overtime have a hazard ratio of X for leaving") — a genuinely different, complementary question from the classifier's "will they leave at all."
6. Package both analyses (classification + survival) into a Streamlit dashboard aimed at an HR stakeholder audience, with plain-language interpretation, not just model output.

## Common pitfalls

- Reporting only accuracy on an imbalanced target — this is one of the most common portfolio red flags reviewers specifically watch for.
- Confusing "predicts attrition" (classification) with "predicts time to attrition" (survival analysis) — state clearly in your write-up which question each model answers; they are not interchangeable.
- Interpreting a Cox hazard ratio as a causal effect without caveats — this is observational HR data, and the usual correlation-vs-causation cautions from [Month 4](../curriculum/month-04-statistics.md) apply directly.

## Connects to

[Month 6](../curriculum/month-06-supervised-ml-1.md) (classification + imbalance handling), [Month 7](../curriculum/month-07-supervised-ml-2.md) (tree ensembles + SHAP).

<p><label><input type="checkbox" class="vada-track" data-vada-id="project-04" data-vada-group="projects"> Mark this project shipped</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
