# Month 9 — Deep Learning Basics

A first real deep learning project, deliberately scoped to *one* project (tabular or vision) rather than a survey of every architecture. The goal is understanding what a neural network is actually doing, not memorizing a zoo of architecture names.

## Focus

- Neural network fundamentals: layers, activation functions, backpropagation as repeated chain-rule application (this connects directly back to [Month 5](month-05-math-for-ml.md)'s gradient work).
- Training mechanics: loss functions, optimizers, overfitting/regularization (dropout, early stopping) in a deep learning context specifically.
- One applied project, either tabular (a feedforward network compared against your Month 6/7 tree ensembles) or vision (a CNN on an image dataset) — pick based on which excites you more; both are valid.

## Resources

From the [Resource Stack](../resources/index.md#deep-learning-basics): fast.ai's *Practical Deep Learning for Coders* for a top-down, code-first path, and 3Blue1Brown's Neural Networks series for the visual intuition underneath it.

## Week-by-week

Each week has an optional day-by-day breakdown — expand it if useful, or just work off the week-level line.

- [ ] Week 1 — 3Blue1Brown Neural Networks series in full; redraw the backpropagation diagram from memory after each video.

??? note "Day-by-day — Week 1"
    - [ ] Day 1 — Video 1 (what a neural network actually is); redraw the layer diagram from memory.
    - [ ] Day 2 — Video 2 (gradient descent in this context).
    - [ ] Day 3 — Video 3 (backpropagation, intuitively); redraw the chain-rule flow from memory.
    - [ ] Day 4 — Video 4 (backpropagation calculus in detail).
    - [ ] Day 5 — Teach-back: explain backpropagation as repeated chain-rule application, without notes, connecting it back to [Month 5](month-05-math-for-ml.md).

- [ ] Week 2 — fast.ai lessons 1–2; get a first model training end-to-end on a real dataset, even if you don't yet understand every line.

??? note "Day-by-day — Week 2"
    - [ ] Day 1 — fast.ai lesson 1, first half — follow along and run the code.
    - [ ] Day 2 — fast.ai lesson 1, finish it — get a model training end-to-end.
    - [ ] Day 3 — fast.ai lesson 2, first half.
    - [ ] Day 4 — fast.ai lesson 2, finish it.
    - [ ] Day 5 — List every line of code you ran but don't yet understand — this becomes Week 3's agenda.

- [ ] Week 3 — Go back through the same fast.ai material a second time, now explaining each step to yourself before running it — this is the "top-down, then fill in gaps" approach fast.ai is built around.

??? note "Day-by-day — Week 3"
    - [ ] Day 1 — Re-run lesson 1's notebook, explaining each cell to yourself before executing it.
    - [ ] Day 2 — Resolve 2–3 items from last week's "don't understand" list.
    - [ ] Day 3 — Re-run lesson 2's notebook, same explain-before-running discipline.
    - [ ] Day 4 — Resolve the remaining items from your list.
    - [ ] Day 5 — Predict whether your model is overfitting given its size vs. your dataset size — then check the loss curves (calibration).

- [ ] Week 4 — Finish one deep learning project end-to-end (tabular or vision) with a clear write-up including a comparison against a simpler baseline (e.g., your Month 6/7 tree ensemble, if tabular).

??? note "Day-by-day — Week 4"
    - [ ] Day 1 — Pick tabular or vision; finalize the dataset and problem framing.
    - [ ] Day 2 — Train the model properly (not just a first pass); tune if time allows.
    - [ ] Day 3 — Build the baseline comparison (e.g., your Month 6/7 tree ensemble if tabular).
    - [ ] Day 4 — Write up the comparison — when was the added complexity actually worth it?
    - [ ] Day 5 — Teach-back the whole project out loud, no notes; check the Month 9 box on the [dashboard](../tools/progress-tracker.md).

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** the backpropagation-as-chain-rule diagram, redrawn from memory — this is the highest-value single visual in this month because it's the concept most people memorize as a slogan without ever really seeing.
- **Apply (~35%):** the fast.ai project, run twice — once to get something working, once to genuinely understand each step.
- **Discuss (~25%):** explain, without notes, why a deep network needs a nonlinear activation function — what would happen (mathematically) if every layer were purely linear?
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before training, predict whether your model will overfit given the dataset size and network capacity. Check the train/validation loss curves afterward and see if your prediction held.

## Milestone deliverable

One complete deep learning project (tabular or vision) with a written comparison against a simpler baseline model, demonstrating you understand *when* the added complexity was worth it.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-09" data-vada-group="months"> Mark Month 9 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
