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

Each week has an optional day-by-day breakdown — expand it if useful, or just work off the week-level line.

- [ ] Week 1 — Work through Mode's window-function and CTE sections properly. Don't skim — these are the two constructs that separate "can query a database" from "can do analytics."

??? note "Day-by-day — Week 1"
    - [ ] Day 1 — Mode: `ROW_NUMBER`/`RANK`/`DENSE_RANK` — write 3 queries using each on a sample table, and predict the tie-handling difference before running them.
    - [ ] Day 2 — Mode: `LAG`/`LEAD` and running/rolling aggregates.
    - [ ] Day 3 — Mode: CTEs (`WITH ... AS`) — rebuild yesterday's queries as multi-stage CTEs instead of one-liners.
    - [ ] Day 4 — Recursive CTEs (at least once, even if you never need them again — it cements what a CTE actually is).
    - [ ] Day 5 — Teach-back: explain, without notes, why `WHERE` can't reference a `SELECT` alias but `HAVING`/`ORDER BY` can.

- [ ] Week 2 — Kaggle Advanced SQL for more reps on the same constructs against different schemas. Run the SQL set in the [Interleaved Drill Bank](../tools/interleaved-drills.md), blocking any construct that still feels shaky before mixing it in.

??? note "Day-by-day — Week 2"
    - [ ] Day 1 — Kaggle Advanced SQL, first half — same constructs, unfamiliar schema on purpose.
    - [ ] Day 2 — Kaggle Advanced SQL, finish it.
    - [ ] Day 3 — Block-practice: redo any single construct (joins, or window functions, or CTEs) that felt shaky, in isolation, until it's fluent.
    - [ ] Day 4 — Run the full SQL [interleaved drill set](../tools/interleaved-drills.md) mixed, no blocking.
    - [ ] Day 5 — Redo only the ones you got wrong, from memory; log any real pattern in the [Mistake Library](../mistake-library/index.md).

- [ ] Week 3 — Pick a dataset with real cohort/time structure (the [Sales/Retention project](../projects/02-sales-cohort-retention.md) or [Marketing/Attribution project](../projects/03-marketing-attribution.md) both fit). Write the cohort-retention query pattern from scratch: first-activity-month CTE → join back to events → month-number window calc → aggregate.

??? note "Day-by-day — Week 3"
    - [ ] Day 1 — Pick the dataset; write the `cohort_base` CTE (each user/customer's first-activity month) alone, and sanity-check its row count.
    - [ ] Day 2 — Join activity events back to `cohort_base`; before aggregating, check the row count again — a jump usually means the join multiplied rows.
    - [ ] Day 3 — Add the `month_number` window calculation (months since first activity).
    - [ ] Day 4 — Aggregate into the retention table (cohort × month_number); sanity-check that month_number 0 is always 100%.
    - [ ] Day 5 — Predict which cohort will have the worst retention before charting it — then check (calibration).

- [ ] Week 4 — Write up the analysis (query + findings + a chart), and run `EXPLAIN ANALYZE` on your heaviest query at least once — reason in writing about what the plan tells you.

??? note "Day-by-day — Week 4"
    - [ ] Day 1 — Build the supporting chart (retention curve or funnel).
    - [ ] Day 2 — Write up the finding in plain language — what does the pattern actually mean for the business?
    - [ ] Day 3 — Run `EXPLAIN ANALYZE` on your heaviest query; write one paragraph on what the plan tells you.
    - [ ] Day 4 — Push the write-up + query to GitHub with a short README.
    - [ ] Day 5 — Teach-back the whole cohort-query logic out loud, no notes; check the Month 2 box on the [dashboard](../tools/progress-tracker.md).

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** map SQL's actual execution order (`FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY`) — this single map resolves most "why doesn't my alias work in WHERE" confusion permanently. Redraw from memory.
- **Apply (~35%):** the SQL [interleaved drill set](../tools/interleaved-drills.md) mixing joins/window functions/aggregation/CTEs — plus the [spaced-repetition deck](../tools/spaced-repetition-deck.md)'s SQL cards for longer-horizon retention.
- **Discuss (~25%):** explain, without notes, the difference between `RANK()` and `ROW_NUMBER()` and exactly when a CTE is the right tool versus a subquery.
- **Audio (~10%):** record and re-listen to that explanation.
- **Calibration (~15%):** before running a query, predict the row count of the result. Being consistently surprised is a strong, fast diagnostic for a wrong `JOIN` or a missed `GROUP BY` grain.

## Milestone deliverable

A SQL analysis project using real window-function/CTE logic on a genuine business question (cohort retention, funnel drop-off, or month-over-month trend), written up with the query, the finding, and a supporting chart.

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-02" data-vada-group="months"> Mark Month 2 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
