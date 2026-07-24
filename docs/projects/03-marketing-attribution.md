# 03 · Marketing — Multi-Touch Attribution

<span class="vada-badge vada-badge-advanced">Intermediate–Advanced</span> <span class="vada-badge vada-badge-domain">Marketing</span>

**Question:** Which marketing channels actually deserve credit for a conversion, when a customer touches several before buying?

**Data:** Google Analytics BigQuery sample — specifically `bigquery-public-data.ga4_obfuscated_sample_ecommerce` — see [Resources → Sales/Marketing](../resources/index.md#free-datasets-by-target-domain).

**Techniques:** SQL journey construction, Markov chain or Shapley-value attribution, logistic regression as a simpler baseline.

Job postings in marketing analytics explicitly name attribution modeling with SQL + Python as a wanted skill — this project demonstrates the full path from raw event logs to a defensible "credit" number per channel.

## Approach

1. In SQL, reconstruct each user's full touchpoint journey leading to a conversion (ordered sequence of channels/sources touched before purchase).
2. Implement **last-touch** and **first-touch** attribution first (simple, and useful as a baseline everyone already understands) — compute the % of conversions credited to each channel under each rule.
3. Implement a more principled model: either a **Markov chain** removal-effect model (remove each channel from all paths and see how much conversion probability drops) or a **Shapley-value** allocation across channels.
4. Compare all three models side by side — where do they agree, where do they diverge sharply, and why (which channels tend to appear early in journeys vs. right before conversion)?
5. As a simpler complementary baseline, fit a logistic regression predicting conversion from touchpoint counts per channel, and compare its implied channel importance to the Markov/Shapley results.

## Common pitfalls

- Treating last-touch attribution as ground truth instead of one modeling choice among several — the whole point of this project is showing you understand it's a choice with real consequences for budget decisions.
- Building journeys without deduplicating rapid repeated events from the same session (double-counting a single visit as multiple touches).
- Ignoring that a channel that never gets last-touch credit but always appears early (e.g., an awareness channel) can still be genuinely valuable — the removal-effect / Shapley view is specifically designed to catch this and is worth explaining clearly in your write-up.

## Connects to

[Month 2](../curriculum/month-02-sql-analytics.md) (journey-construction SQL), [Month 6](../curriculum/month-06-supervised-ml-1.md) (logistic regression baseline).

<p><label><input type="checkbox" class="vada-track" data-vada-id="project-03" data-vada-group="projects"> Mark this project shipped</label> — <span class="vada-muted">same record as the Progress Dashboard.</span></p>
