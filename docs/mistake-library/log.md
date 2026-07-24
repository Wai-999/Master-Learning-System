# Running Log

See [how to use this page](index.md) before adding entries. Newest entries at the top. The three rows below are worked examples — delete them once you have real entries of your own, or leave them as a reference for what a good entry looks like.

| Date | Domain | What happened | Type | Root cause | Fix | SRS card? |
|------|--------|----------------|------|------------|-----|-----------|
| 2026-07-01 *(example)* | ML | Time-series model looked great in validation, terrible in production | Data leakage | Used random `train_test_split` on time-ordered data instead of a chronological split | Switch to walk-forward / rolling-origin validation; never shuffle time series | seed-ml-1 (existing) |
| 2026-07-01 *(example)* | Statistics | Reported "the effect is significant" and stopped there | Conceptual | Treated p<0.05 as proof of a large, important effect rather than checking effect size | Always report effect size + CI alongside the p-value, and ask "does this matter," not just "is this nonzero" | seed-stats-2 (existing) |
| 2026-07-01 *(example)* | pandas | `df[df.a > 0]['b'] = 5` silently didn't update the DataFrame | Syntax / conceptual | Chained indexing returns a copy in some cases (SettingWithCopyWarning) | Use `.loc[df.a > 0, 'b'] = 5` in one step, always | seed-pandas-5 (existing) |

<!-- Add new rows below this line, newest first. -->
