# V.A.D.A.++ — the operating system for how you study

**Visual map → Apply → Discuss/teach-back → Audio reinforcement**, layered with spaced repetition, retrieval practice, interleaving, deliberate error practice, and portfolio shipping.

Every stage below maps to a peer-reviewed effect. But the four stages are **not equally weighted**, and getting the weighting wrong is the single easiest way to feel busy while retaining almost nothing.

!!! warning "The core correction this system makes"
    Deslauriers et al. (2019, *PNAS*, Harvard) ran the same physics class two ways — passive lecture vs. active, effortful problem-solving — and found students in the active condition **measured higher on objective tests but *felt* like they learned less**. Effortful methods feel worse and work better. If a study session feels easy and pleasant, that is a signal to make it harder, not a signal it's going well.

## How to weight your time

| Stage | What it is | Target share of study time | Why |
|---|---|---|---|
| **Visual map** | A one-page schema of the topic (pipeline, taxonomy, decision tree) | ~15% — fast scaffold, not the centerpiece | Karpicke & Blunt (2011, *Science*) found retrieval practice beats concept mapping on a one-week test (67% vs. 45%) — **even when the final test was building a concept map.** Maps organize; they don't encode durably on their own. |
| **Apply** | Solving problems, writing code, running analyses without notes | ~35% | This is where retrieval practice, interleaving, and deliberate practice all physically happen. |
| **Discuss / teach-back** | Explaining the concept aloud, from memory, to a person or an LLM, without notes | ~25% | The protégé effect (Chase et al., 2009) and self-explanation research (Chi et al., 1989) show explaining produces some of the largest, most reliable gains in the whole learning-science literature. |
| **Audio reinforcement** | Recording your own teach-back and re-listening during dead time (commute, chores) | ~10% | Turns unavoidable downtime into a second spaced-exposure channel, and the act of recording is itself a generation/retrieval event. |
| **Calibration + error log** | Predicting your own performance, then checking, then logging what actually went wrong | ~15% | Counters the Dunning-Kruger-style overconfidence gap and converts every mistake into a targeted, reusable retrieval card. |

That's roughly 100% redistributed away from "make it look pretty" and toward "prove you actually know it." If you only change one habit after reading this, make it this: **close the visual map and reproduce it from memory before moving on.** That single act converts a passive artifact into a retrieval event.

## The four supporting pages

- **[Retrieval & Spacing](retrieval-and-spacing.md)** — the testing effect, the forgetting curve, and the 10–20% spacing rule. Backs the "Apply" stage and the [spaced-repetition deck](../tools/spaced-repetition-deck.md).
- **[Interleaving & Desirable Difficulty](interleaving-and-desirable-difficulty.md)** — why mixed practice beats blocked practice, and where that backfires for true beginners. Backs the [interleaved drill bank](../tools/interleaved-drills.md).
- **[Teach-Back & Dual Coding](teach-back-and-dual-coding.md)** — the protégé effect, the Feynman Technique, and how visuals should (and shouldn't) be used. Backs the "Visual" and "Discuss" stages.
- **[Deliberate Practice & Calibration](deliberate-practice-and-calibration.md)** — purposeful practice, cognitive load management, mastery gates, and the [mistake library](../mistake-library/index.md).

## Where this plugs into the rest of the system

- The **[12-month curriculum](../curriculum/index.md)** is the content calendar this loop runs on top of.
- The **[8 project blueprints](../projects/index.md)** are where "Apply" graduates from drills to shipped, portfolio-grade work.
- The **[Progress Dashboard](../tools/progress-tracker.md)** tracks the accountability side (streaks, milestones) described in [Accountability](../accountability/index.md).

## Threshold checks — when to change course

- If a one-week retention check on a topic scores **below ~70%**, increase retrieval frequency before adding new content — don't just push forward.
- If an interleaved drill set's accuracy is **below ~50%** on first attempt, briefly re-block that sub-skill in isolation, then re-interleave.
- If your calibration log (predicted score vs. actual score) is consistently off by **more than ±10 points**, you're either under- or over-confident — tighten the loop with more frequent low-stakes self-tests.
- If a study session **feels effortless**, that's the fluency-illusion warning sign from the Deslauriers finding above — increase difficulty (close the notes, do it from memory, explain it out loud).

## Caveats, honestly stated

- The "learning pyramid" (the claim that you "retain 90% of what you teach others") has **no traceable empirical source** (Letrud & Hernes, 2016) and is not used as evidence anywhere in this system — the protégé effect and self-explanation research are cited instead, and they are real, replicated findings.
- Bloom's "2 sigma" tutoring result is likely overstated by modern standards; more recent meta-analyses of tutoring RCTs (Nickow, Oreopoulos & Quan, 2020) put the realistic effect closer to 0.37 SD. The underlying principle — mastery thresholds plus fast feedback help a lot — still holds; the magnitude just isn't 2 full standard deviations.
- Most of the specific retrieval/spacing/interleaving experiments cited throughout this section used verbal or mathematical material, not programming or statistics specifically. Treat the applications here as well-grounded best practice extended by analogy, not as domain-specific randomized-trial proof.
