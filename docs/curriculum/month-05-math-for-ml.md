# Month 5 — Math for ML (Targeted, Not Exhaustive)

The goal this month is not a full linear-algebra-and-calculus course — it's the specific, targeted subset that makes Months 6 onward click instead of feeling like memorized recipes: vectors/matrices as data, derivatives as "which direction reduces error," and gradient descent as the mechanical link between the two.

## Focus

- Linear algebra: vectors, matrices, matrix multiplication, and what a dot product/projection *means* geometrically — not just how to compute it.
- Calculus: derivatives and gradients as "rate of change," and why gradient descent follows the negative gradient.
- Enough of both to derive linear regression's normal equation or gradient-descent update by hand.
- Explicitly **out of scope**: a full proof-based linear algebra or real-analysis course — this is applied intuition for ML, not a math degree.

## Resources

From the [Resource Stack](../resources/index.md#math-for-ml): 3Blue1Brown's *Essence of Linear Algebra* and *Essence of Calculus* series for visual intuition (watch these even if you've had the math before — they rebuild geometric intuition that formula-memorization skips), and the Deisenroth, Faisal & Ong *Mathematics for Machine Learning* book for the selected chapters that back it up formally.

## Week-by-week

- [ ] Week 1 — 3Blue1Brown *Essence of Linear Algebra*, full series. After each video, close it and redraw the core idea (e.g., "matrix multiplication as a transformation") from memory before moving to the next.
- [ ] Week 2 — 3Blue1Brown *Essence of Calculus*, full series, same close-and-redraw discipline. Read the corresponding Deisenroth chapters for the formal notation you'll see in ML papers/docs.
- [ ] Week 3 — Implement linear regression from scratch in NumPy: both the closed-form normal equation and a manual gradient-descent loop. No scikit-learn yet — the point is feeling the mechanism.
- [ ] Week 4 — Compare your from-scratch implementation's output against `scikit-learn`'s `LinearRegression` on the same data; they should match closely. Write up what gradient descent's learning-rate parameter actually controls, in your own words.

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** one map connecting "matrix multiplication" → "a linear model's prediction step" → "the gradient" → "the update step" — the full pipeline from math object to ML mechanism in one diagram.
- **Apply (~35%):** the from-scratch regression implementation is the main event this month — it's a worked derivation, not a drill set, and that's appropriate for genuinely new, high-element-interactivity material (see the cognitive-load caveat in [Interleaving & Desirable Difficulty](../methodology/interleaving-and-desirable-difficulty.md)).
- **Discuss (~25%):** explain gradient descent, without notes, using the "walking downhill in fog, taking a step in the steepest direction you can currently feel" analogy or one of your own — then explain where that analogy breaks down.
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before running your from-scratch model, predict whether it will match scikit-learn's coefficients closely. If it doesn't, that's a genuine, valuable debugging exercise — log it in the [Mistake Library](../mistake-library/index.md) regardless of outcome.

## Milestone deliverable

A from-scratch linear regression implementation (closed-form and gradient-descent versions), validated against scikit-learn's output on the same dataset, with a short written explanation of how the two methods relate.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-05" data-vada-group="months"> Mark Month 5 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
