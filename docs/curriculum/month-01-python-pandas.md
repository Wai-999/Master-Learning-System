# Month 1 — Python & pandas Fluency

You already know Python syntax. This month is not "learn Python" — it's "become fluent in the pandas idioms that separate someone who can technically write a for-loop over rows from someone who thinks in vectorized, tabular operations." Skip anything that's pure syntax review; spend the saved time on real, messy data.

## Focus

- Vectorized operations vs. explicit loops, and why the former matters for both speed and readability.
- Core pandas fluency: indexing/`.loc`/`.iloc`, `groupby`, `merge` vs. `join` vs. `concat`, `pivot_table`, and reshaping (`melt`/`stack`/`unstack`).
- Handling real messiness: missing values, mixed types, duplicate rows, inconsistent categorical labels.
- Explicitly **out of scope**: general Python syntax, basic data structures — you already have these.

## Resources

From the [Resource Stack](../resources/index.md#python-for-data-science): Wes McKinney's *Python for Data Analysis* (skim Ch. 1–4 for review only if rusty; work Ch. 5–10 properly for indexing, cleaning, combining/reshaping, and groupby), plus Kaggle Learn's Python and pandas micro-courses for fast, active practice with real datasets.

## Week-by-week

- [ ] Week 1 — Skim McKinney's data-structures/indexing chapters; do the Kaggle Python micro-course at double speed (it's review, not new material) to confirm no gaps.
- [ ] Week 2 — Work McKinney's data-wrangling chapters properly: `groupby`, `merge`/`join`/`concat`, `pivot_table`, `melt`/`stack`/`unstack`. Run the pandas set in the [Interleaved Drill Bank](../tools/interleaved-drills.md) — block each operation first if any feels shaky, then do the mixed set.
- [ ] Week 3 — Pick one dataset from [Projects](../projects/index.md) (Real Estate/Zillow or Sales/e-commerce are the most forgiving first datasets). Do a full EDA: load, inspect, clean missing/duplicate/mistyped data, engineer 2–3 features, visualize key distributions.
- [ ] Week 4 — Turn the EDA into a shareable notebook with a narrative (not just cells and output), write a README (goal → data → method → result), and push to GitHub.

## Apply the V.A.D.A.++ loop this month

- **Visual (~15%):** one page mapping the pandas workflow — load → inspect → clean → transform (`groupby`/`merge`/`pivot`) → visualize. Close it, redraw it from memory.
- **Apply (~35%):** the pandas [interleaved drill set](../tools/interleaved-drills.md) — mixing `groupby`/`merge`/`pivot`/reshape forces you to identify *which* operation a problem needs, which is the actual skill.
- **Discuss (~25%):** explain, out loud and without notes, the difference between `.merge()` and `.join()`, and between `groupby().transform()` and `groupby().agg()` — both are common points of quiet confusion.
- **Audio (~10%):** record that explanation; re-listen once during a commute.
- **Calibration (~15%):** before writing the EDA notebook, predict which columns will have data-quality problems. Check afterward. Log any real surprise in the [Mistake Library](../mistake-library/index.md).

## Milestone deliverable

An EDA notebook on one real domain dataset — cleaned, with 2–3 engineered features and honest visualizations of the key distributions — pushed to GitHub with a README stating goal, data source, method, and result. This is Project Rung 1 in the ladder described on the [Projects overview](../projects/index.md).

<p><label><input type="checkbox" class="vada-track" data-vada-id="month-01" data-vada-group="months"> Mark Month 1 complete</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
