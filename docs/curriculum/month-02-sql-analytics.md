# Month 2 — SQL for Analytics Mastery

Same principle as Month 1: you already know basic SQL. This month pushes past `SELECT`/`WHERE`/basic `JOIN` into the specific patterns analytics roles actually use daily — window functions and CTEs — and into asking real business questions (retention, funnels, cohorts) rather than toy queries.

## Focus

- Window functions: `ROW_NUMBER`, `RANK`, `DENSE_RANK`, `LAG`/`LEAD`, running/rolling aggregates.
- CTEs (`WITH ... AS`) for building multi-stage, readable queries, including recursive CTEs.
- Applying both to real analytics questions: cohort retention, month-over-month change, funnel drop-off.
- Reading `EXPLAIN`/`EXPLAIN ANALYZE` output well enough to reason about why a query is slow.

## Resources

From the [Resource Stack](../resources/index.md#sql-for-analytics): Mode's SQL Tutorial is the primary resource — it's structured around exactly these business questions. Supplement with Kaggle Learn's Intro/Advanced SQL for extra reps, and save DataLemur for closer to interview prep. SQLBolt is fine for a first hour only; it's gone stale on modern patterns.

## Week-by-week

- [ ] Week 1 — Work through Mode's window-function and CTE sections properly. Don't skim — these are the two constructs that separate "can query a database" from "can do analytics."
- [ ] Week 2 — Kaggle Advanced SQL for more reps on the same constructs against different schemas. Run the SQL set in the [Interleaved Drill Bank](../tools/interleaved-drills.md), blocking any construct that still feels shaky before mixing it in.
- [ ] Week 3 — Pick a dataset with real cohort/time structure (the [Sales/Retention project](../projects/02-sales-cohort-retention.md) or [Marketing/Attribution project](../projects/03-marketing-attribution.md) both fit). Write the cohort-retention query pattern from scratch: first-activity-month CTE → join back to events → month-number window calc → aggregate.
- [ ] Week 4 — Write up the analysis (query + findings + a chart), and run `EXPLAIN ANALYZE` on your heaviest query at least once — reason in writing about what the plan tells you.

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** map SQL's actual execution order (`FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY`) — this single map resolves most "why doesn't my alias work in WHERE" confusion permanently. Redraw from memory.
- **Apply (~35%):** the SQL [interleaved drill set](../tools/interleaved-drills.md) mixing joins/window functions/aggregation/CTEs — plus the [spaced-repetition deck](../tools/spaced-repetition-deck.md)'s SQL cards for longer-horizon retention.
- **Discuss (~25%):** explain, without notes, the difference between `RANK()` and `ROW_NUMBER()` and exactly when a CTE is the right tool versus a subquery.
- **Audio (~10%):** record and re-listen to that explanation.
- **Calibration (~15%):** before running a query, predict the row count of the result. Being consistently surprised is a strong, fast diagnostic for a wrong `JOIN` or a missed `GROUP BY` grain.

## Milestone deliverable

A SQL analysis project using real window-function/CTE logic on a genuine business question (cohort retention, funnel drop-off, or month-over-month trend), written up with the query, the finding, and a supporting chart.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-02" data-vada-group="months"> Mark Month 2 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
