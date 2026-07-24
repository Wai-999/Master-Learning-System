# Retrieval Practice & Spaced Repetition

The single highest-leverage technique in this entire system. If you adopt nothing else from this page, adopt this: **generate the answer from memory before you check it, every time, for everything.**

## The forgetting curve

Hermann Ebbinghaus (1885) found memory decays roughly exponentially without reinforcement: about 42% forgotten within 20 minutes, ~56% within an hour, up to ~79% within 31 days. Murre & Dros (2015, *PLOS ONE*) replicated the curve on modern data and even found a plausible upward "jump" in retention after 24 hours, consistent with sleep consolidation.

**Implication:** anything you don't deliberately review is mostly gone within a month. Review has to be scheduled, not left to whenever you happen to think of it.

## The testing effect

Roediger & Karpicke (2006, *Psychological Science*) had undergraduates study prose under three conditions: study four times (SSSS), study three times and test once (SSST), or study once and test three times (STTT).

- At a **5-minute test**, more studying won: SSSS 83% > STTT 71%.
- At a **one-week delayed test, the pattern completely reversed**: STTT 61% > SSST 56% > SSSS 40%.

In the companion paper, the repeated-study group had forgotten 56% of what they could originally recall a week later — the repeated-test group had forgotten only 13%. Restudying built *confidence*, not *retention*, and that gap is invisible to the learner in the moment, which is exactly why it's dangerous.

**Retrieval beats even good elaborative study.** Karpicke & Blunt (2011, *Science*) compared four conditions on a one-week-delayed test: retrieval practice scored 67%, repeated study 49%, concept mapping 45%, and studying once 27%. Retrieval won *even when the final test required building a concept map* — students predicted concept mapping would win, and were wrong. That metacognitive illusion is precisely why "Visual map" is capped at ~15% of your time in this system (see [the V.A.D.A.++ overview](index.md)) rather than being the centerpiece.

## Optimal spacing

Cepeda et al. (2006, *Psychological Bulletin*) meta-analyzed 839 assessments across 317 experiments: spaced practice beat massed (cramming) practice consistently. Cepeda et al. (2008, *Psychological Science*) then mapped the "temporal ridgeline" — the optimal gap between study sessions — across more than 1,350 learners:

| Target retention interval | Optimal review gap |
|---|---|
| 7 days | ~1 day |
| 35 days | ~11 days |
| 70 days | ~21 days |
| 1 year | ~21 days |

**The practical rule: the optimal review gap is roughly 10–20% of how long you need to remember the material**, tapering toward ~5% for very long horizons. There's an inverted-U at every retention interval — waiting *too* long between reviews hurts as much as reviewing *too* soon, which is a genuinely counter-intuitive and useful finding: longer spacing is not automatically better spacing.

## Applying this to SQL, Python, and statistics

Don't build a spaced-repetition deck of trivia (definitions, syntax to recognize). Build one of **micro-problems that demand generation**:

- "Write a window function that ranks rows within a partition."
- "Derive the bias–variance decomposition in one sentence."
- "Explain what a p-value of 0.03 actually means, precisely."

This system ships a working version of exactly this: the **[Spaced-Repetition Deck](../tools/spaced-repetition-deck.md)**, pre-loaded with 20 generation-style cards across SQL, pandas, statistics, and ML, using an expanding schedule (1 day → 3 days → 1 week → 3 weeks → ~6 weeks → ~13 weeks) that lengthens or resets based on how you rate each card. Add your own cards as you go — especially ones pulled straight from your [Mistake Library](../mistake-library/index.md), since a documented real error is the highest-value flashcard you can write.

## Threshold to change course

If a one-week retention check on a topic scores below roughly 70% (the retrieval-practice benchmark from Karpicke & Blunt), that's a signal to increase testing frequency on that topic *before* adding new material — don't outrun material you haven't actually retained.
