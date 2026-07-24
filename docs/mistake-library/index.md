# Mistake Library — how to use it

This is the operational core of "deliberate error practice" (see [Deliberate Practice & Calibration](../methodology/deliberate-practice-and-calibration.md)). Every real error — not sandbox-quiz errors, *your* errors from real problems and real projects — gets logged, classified, and eventually converted into a flashcard. The log itself lives at **[Running Log](log.md)**.

## Why bother logging mistakes instead of just fixing and moving on

Kapur's "productive failure" research suggests that attempting and failing *before* being shown the right answer builds deeper, more transferable understanding than being handed a correct worked example first. A logged mistake is proof you already did the hard part (the genuine attempt) — the log just makes sure the lesson doesn't evaporate the moment the bug is fixed.

It also directly counters the fluency illusion: rereading a correct solution feels like learning. Confronting your own specific, dated, classified error does not let you fool yourself the same way.

## The five error types

Use these categories consistently so patterns become visible over months, not just within one project:

- **Syntax** — the code was wrong in a way any interpreter would catch (typo, wrong argument order, mismatched parens). Low value to dwell on, but still log if it cost you real time.
- **Conceptual** — you misunderstood what a tool or technique actually does (e.g., confusing `RANK()` and `ROW_NUMBER()`, or assuming a p-value is "the probability the null is true").
- **Statistical-assumption violation** — you applied a valid technique somewhere its assumptions don't hold (e.g., a t-test on a heavily skewed n=10 sample, a linear regression with severely non-constant variance).
- **Data leakage** — information from the future, or from outside the "legitimate" training data, snuck into your model or evaluation (e.g., random train/test split on time series; scaling using statistics computed on the full dataset before splitting).
- **Off-by-one / boundary** — an indexing, date-range, or boundary-condition error (e.g., a join that silently duplicates rows, an inclusive/exclusive date filter that's backwards).

Add your own category if a real error doesn't fit — the point is a system that reflects your actual failure modes, not a rigid taxonomy.

## Logging template

Copy this row structure into [`log.md`](log.md) for every entry:

```
| Date | Domain | What happened | Type | Root cause | Fix | SRS card? |
|------|--------|----------------|------|------------|-----|-----------|
| 2026-07-23 | SQL | Cohort retention query double-counted users | Off-by-one / boundary | LEFT JOIN on activity produced one row per event, not per user, before aggregation | Wrap in COUNT(DISTINCT user_id), not COUNT(*) | seed-sql-4 (existing) |
```

## The conversion step — don't skip this

Once a mistake type shows up **twice**, turn it into a card in the [Spaced-Repetition Deck](../tools/spaced-repetition-deck.md) using the "Add a card" form on that page. Word the card as the general lesson, not the specific bug — e.g. not "fix the cohort query" but "when aggregating a joined table, ask: did the join multiply rows before I aggregated?" That generalization is what makes it transfer to the next project instead of only protecting you against the exact bug you already fixed.

## Weekly review ritual

Once a week, skim the last 7 days of entries in the [log](log.md) and ask two questions: is any single **type** clustering (e.g., three data-leakage entries this month → you have a systematic blind spot, not three unlucky bugs)? And is any single **domain** clustering right before a scheduled curriculum month — if so, that's useful evidence to revisit that month's resources before moving on.
