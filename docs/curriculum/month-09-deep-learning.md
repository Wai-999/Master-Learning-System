# Month 9 — Deep Learning Basics

A first real deep learning project, deliberately scoped to *one* project (tabular or vision) rather than a survey of every architecture. The goal is understanding what a neural network is actually doing, not memorizing a zoo of architecture names.

## Focus

- Neural network fundamentals: layers, activation functions, backpropagation as repeated chain-rule application (this connects directly back to [Month 5](month-05-math-for-ml.md)'s gradient work).
- Training mechanics: loss functions, optimizers, overfitting/regularization (dropout, early stopping) in a deep learning context specifically.
- One applied project, either tabular (a feedforward network compared against your Month 6/7 tree ensembles) or vision (a CNN on an image dataset) — pick based on which excites you more; both are valid.

## Resources

From the [Resource Stack](../resources/index.md#deep-learning-basics): fast.ai's *Practical Deep Learning for Coders* for a top-down, code-first path, and 3Blue1Brown's Neural Networks series for the visual intuition underneath it.

## Week-by-week

- [ ] Week 1 — 3Blue1Brown Neural Networks series in full; redraw the backpropagation diagram from memory after each video.
- [ ] Week 2 — fast.ai lessons 1–2; get a first model training end-to-end on a real dataset, even if you don't yet understand every line.
- [ ] Week 3 — Go back through the same fast.ai material a second time, now explaining each step to yourself before running it — this is the "top-down, then fill in gaps" approach fast.ai is built around.
- [ ] Week 4 — Finish one deep learning project end-to-end (tabular or vision) with a clear write-up including a comparison against a simpler baseline (e.g., your Month 6/7 tree ensemble, if tabular).

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** the backpropagation-as-chain-rule diagram, redrawn from memory — this is the highest-value single visual in this month because it's the concept most people memorize as a slogan without ever really seeing.
- **Apply (~35%):** the fast.ai project, run twice — once to get something working, once to genuinely understand each step.
- **Discuss (~25%):** explain, without notes, why a deep network needs a nonlinear activation function — what would happen (mathematically) if every layer were purely linear?
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before training, predict whether your model will overfit given the dataset size and network capacity. Check the train/validation loss curves afterward and see if your prediction held.

## Milestone deliverable

One complete deep learning project (tabular or vision) with a written comparison against a simpler baseline model, demonstrating you understand *when* the added complexity was worth it.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-09" data-vada-group="months"> Mark Month 9 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
