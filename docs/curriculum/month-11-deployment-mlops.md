# Month 11 — End-to-End Deployment / MLOps Intro

Everything so far has produced notebooks. This month, one model becomes a real, callable service — the single biggest gap between "did a data science project" and "shipped something an engineer could actually use."

## Focus

- Wrapping a trained model behind an API (FastAPI is the standard, lightweight choice).
- Containerizing it (Docker) so it runs the same way anywhere.
- Basic monitoring: what "concept drift" looks like in practice, and what you'd track in production to catch a model quietly degrading (see the [Gold project](../projects/06-gold-commodities-regimes.md) for a worked example of this exact failure mode).
- Not required, but worth a look if time allows: basic orchestration (Kubernetes) — DataTalksClub's ML Zoomcamp deployment modules go this far for those who want it.

## Resources

DataTalksClub's ML Zoomcamp deployment modules specifically (FastAPI, Docker, and optionally Kubernetes) are the best free, structured resource for exactly this month — see [Resources](../resources/index.md#group-community-project-opportunities) for the link and cohort timing.

## Week-by-week

Each week has an optional day-by-day breakdown — expand it if useful, or just work off the week-level line.

- [ ] Week 1 — Take your best model from an earlier month (Month 6, 7, or 9 all work) and wrap it in a minimal FastAPI service: one endpoint that accepts input, returns a prediction.

??? note "Day-by-day — Week 1"
    - [ ] Day 1 — Pick the model (Month 6, 7, or 9); re-save it in a loadable format (pickle, joblib, or framework-native).
    - [ ] Day 2 — Scaffold a minimal FastAPI app with one endpoint stub.
    - [ ] Day 3 — Load the model inside the app; wire the endpoint to accept input and return a prediction.
    - [ ] Day 4 — Test it locally with a few real example inputs.
    - [ ] Day 5 — Map the full path (model → API → container → deployment → monitoring) from memory before building further.

- [ ] Week 2 — Containerize the service with Docker; confirm it runs identically on a clean environment, not just your own machine.

??? note "Day-by-day — Week 2"
    - [ ] Day 1 — Write a first-pass Dockerfile.
    - [ ] Day 2 — Build the image; fix whatever breaks (this always takes more than one try).
    - [ ] Day 3 — Run the container locally; confirm the endpoint responds identically to Week 1.
    - [ ] Day 4 — Test on a genuinely clean environment (a fresh VM, a friend's machine, or at minimum a fresh shell with no cached state) — not just "it works on my machine."
    - [ ] Day 5 — Predict what will break first when you deploy it publicly, before it happens (calibration).

- [ ] Week 3 — Add basic input validation and error handling; write a short monitoring plan (what feature/prediction distributions you'd track, and what would trigger a "look at this" alert for drift).

??? note "Day-by-day — Week 3"
    - [ ] Day 1 — Add input validation (reject malformed/out-of-range requests with a clear error).
    - [ ] Day 2 — Add error handling for the model-inference step itself.
    - [ ] Day 3 — Draft the monitoring plan: which feature/prediction distributions would you track?
    - [ ] Day 4 — Define what would trigger a "look at this" alert for drift, concretely.
    - [ ] Day 5 — Teach-back: explain concept drift and your one chosen metric, without notes.

- [ ] Week 4 — Deploy it somewhere reachable (even a simple free-tier host), and write up the full path: model → API → container → deployment → what you'd monitor next.

??? note "Day-by-day — Week 4"
    - [ ] Day 1 — Choose a free-tier host; deploy the container.
    - [ ] Day 2 — Debug whatever the deployment breaks (log what broke in the [Mistake Library](../mistake-library/index.md) — this is a rich, underused source of entries).
    - [ ] Day 3 — Confirm the live endpoint works from outside your machine.
    - [ ] Day 4 — Write up the full path and the monitoring plan.
    - [ ] Day 5 — Check the Month 11 box on the [dashboard](../tools/progress-tracker.md).

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** map the full path from trained model to a live, callable service (model → API layer → container → deployment → monitoring) — redraw from memory before building it, then correct the map against what you actually built.
- **Apply (~35%):** the deployment itself — this is a project ladder rung that most self-taught learners skip, and it disproportionately signals "can ship," not just "can model."
- **Discuss (~25%):** explain, without notes, what concept drift is and one concrete metric you'd track to catch it — a genuinely common interview question for any applied ML role.
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before deploying, predict what will break first (dependency mismatch, input validation gap, cold-start latency). Log what actually broke in the [Mistake Library](../mistake-library/index.md) — deployment failures are a rich, underused source of real mistake-library entries.

## Milestone deliverable

A deployed model behind a working API, containerized, with a written monitoring plan for concept drift — the "one end-to-end deployed project" slot in a [hiring-ready portfolio](index.md#what-hiring-ready-actually-means-here).

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-11" data-vada-group="months"> Mark Month 11 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
