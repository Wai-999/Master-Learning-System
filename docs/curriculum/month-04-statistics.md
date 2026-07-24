# Month 4 — Statistics for Data Science

You have a statistics background already, so this month is about sharpening precision (saying exactly what a p-value means, not roughly what it means) and closing the gap between classroom statistics and how it's actually used in analytics — A/B testing, regression inference, and knowing when an assumption is being quietly violated.

## Focus

- Precise language for inference: confidence intervals, p-values, statistical vs. practical significance.
- A/B testing in practice: power, multiple comparisons, peeking problems, novelty effects.
- Regression from an inference lens (coefficients, standard errors, significance) as a bridge into Month 6's ML treatment of the same models from a prediction lens.
- Recognizing violated assumptions (skew, unequal variance, non-independence) rather than applying tests mechanically.

## Resources

From the [Resource Stack](../resources/index.md#statistics-probability): StatQuest for visual, step-by-step intuition (especially anything you find yourself reciting without really seeing); Seeing Theory for interactive distribution/CLT/inference visualizations; OpenIntro Statistics for the applied textbook treatment with labs.

## Week-by-week

- [ ] Week 1 — StatQuest + Seeing Theory on the CLT, sampling distributions, and confidence intervals. Write, from memory, a precise one-paragraph definition of a 95% CI — most people's first draft is subtly wrong.
- [ ] Week 2 — Hypothesis testing: p-values, Type I/II errors, power. Run the statistics set in the [Interleaved Drill Bank](../tools/interleaved-drills.md).
- [ ] Week 3 — A/B testing specifically: design a test (pick a real or hypothetical business question), specify the metric, the minimum detectable effect, and the guardrails against peeking and multiple comparisons *before* looking at any data.
- [ ] Week 4 — Run the analysis (real or simulated data), write the hypothesis-testing notebook, and explicitly state assumptions checked and any violated.

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** map the hypothesis-testing decision tree (which test for which data shape/question) — one page, then redrawn from memory.
- **Apply (~35%):** the interleaved statistics drills, mixing description/inference/assumption-checking questions rather than blocking them.
- **Discuss (~25%):** explain a p-value of 0.03 precisely, out loud, without notes — this is one of the most commonly *mis*-explained concepts in the entire field, including by working analysts.
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before checking a test's significance, predict the result and your confidence in it. Log any case where you were confidently wrong in the [Mistake Library](../mistake-library/index.md) — confident-and-wrong is more informative than unsure-and-wrong.

## Milestone deliverable

A hypothesis-testing or A/B-test notebook: a clearly stated question, a pre-specified test design, the analysis, and an honest statement of assumptions and limitations — not just a p-value and a conclusion.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-04" data-vada-group="months"> Mark Month 4 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
