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

- [ ] Week 1 — Take your best model from an earlier month (Month 6, 7, or 9 all work) and wrap it in a minimal FastAPI service: one endpoint that accepts input, returns a prediction.
- [ ] Week 2 — Containerize the service with Docker; confirm it runs identically on a clean environment, not just your own machine.
- [ ] Week 3 — Add basic input validation and error handling; write a short monitoring plan (what feature/prediction distributions you'd track, and what would trigger a "look at this" alert for drift).
- [ ] Week 4 — Deploy it somewhere reachable (even a simple free-tier host), and write up the full path: model → API → container → deployment → what you'd monitor next.

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** map the full path from trained model to a live, callable service (model → API layer → container → deployment → monitoring) — redraw from memory before building it, then correct the map against what you actually built.
- **Apply (~35%):** the deployment itself — this is a project ladder rung that most self-taught learners skip, and it disproportionately signals "can ship," not just "can model."
- **Discuss (~25%):** explain, without notes, what concept drift is and one concrete metric you'd track to catch it — a genuinely common interview question for any applied ML role.
- **Audio (~10%):** record and re-listen.
- **Calibration (~15%):** before deploying, predict what will break first (dependency mismatch, input validation gap, cold-start latency). Log what actually broke in the [Mistake Library](../mistake-library/index.md) — deployment failures are a rich, underused source of real mistake-library entries.

## Milestone deliverable

A deployed model behind a working API, containerized, with a written monitoring plan for concept drift — the "one end-to-end deployed project" slot in a [hiring-ready portfolio](index.md#what-hiring-ready-actually-means-here).

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-11" data-vada-group="months"> Mark Month 11 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
