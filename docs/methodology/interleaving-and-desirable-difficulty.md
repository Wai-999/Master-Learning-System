# Interleaving & Desirable Difficulties

## Interleaving beats blocking — but only once you can do each piece alone

Kornell & Bjork (2008, *Psychological Science*, "Is spacing the enemy of induction?") had learners study painters' styles either blocked (all of painter A, then all of painter B) or interleaved (mixed). Interleaved study produced better ability to identify a *new* painting's artist — yet 78% of participants believed blocked study had worked better. The mechanism is **discriminative contrast** (Kang & Pashler, 2012): putting categories side by side highlights what actually distinguishes them, which is often the part that matters for real transfer.

Rohrer & Taylor (2007, *Instructional Science*) applied this to mathematics: blocked practice produced higher accuracy *during* practice (the fluency illusion again), but interleaving roughly tripled scores on a delayed test (an effect size around d ≈ 1.34 in later summaries). Rohrer, Dedrick & Stershic (2015) found 7th graders scored **72% (interleaved) vs. 38% (blocked)** on an unannounced test two weeks later. That's not a subtle effect.

**Application:** don't drill "10 window-function problems in a row." Build a mixed set that forces you to first decide *which* SQL tool applies — join, window function, aggregation, or CTE — before writing any code. The [Interleaved Drill Bank](../tools/interleaved-drills.md) has ready-made mixed sets for SQL, pandas, statistics, and model selection, plus a recipe for building your own.

## The cognitive-load caveat — sequence matters

Interleaving helps once you can already execute each component skill and the challenge is *discriminating* between them. For genuinely new, high-element-interactivity material, mixing too early just overloads working memory — this is the boundary condition Kalyuga, Sweller and colleagues describe.

**Sequence, always:** master each skill in a small block first, *then* interleave. If an interleaved set's accuracy is below ~50% on a first attempt, that's the signal you interleaved too early — step back, re-block the weak sub-skill for a session or two, then return to the mixed set.

## Desirable difficulties — the unifying idea

Robert & Elizabeth Bjork's theory of desirable difficulties (1992 theory of disuse; coined 1994; popularized in "Making Things Hard on Yourself, But in a Good Way," 2011) is the umbrella that spacing, interleaving, testing, and varied practice all sit under: **conditions that depress performance *during* practice but improve long-term retention and transfer.**

The key theoretical move is the **storage-strength vs. retrieval-strength** distinction. Rereading spikes retrieval strength temporarily (things feel fluent and familiar) without building storage strength (durable, reconstructable memory). That's the fluency illusion in a sentence, and it's why "this feels easy" is not a reliable signal that a study method is working.

The boundary condition is the same one as above: a difficulty is only *desirable* if it challenges retrieval without exceeding working-memory capacity. Past that point it becomes an *undesirable* difficulty — the same manipulation that helps a near-competent learner can actively hurt a true novice. MIT OpenCourseWare-style problem sets and Stanford CS229/CS231n assignments work precisely because they demand derivation and implementation from principles, at a difficulty level calibrated to students who've already had the lectures — not cold.

## Practical checklist

- Learn a skill in isolation until you can do it without notes.
- Then mix it with 2-3 related skills in one drill set, forcing a "which tool?" decision before each problem.
- If accuracy craters, re-block briefly — that's not failure, that's the system working as designed.
- Treat "this feels harder than review" as a *good* sign, not a signal something's wrong — see the Deslauriers finding on the [methodology overview](index.md).
