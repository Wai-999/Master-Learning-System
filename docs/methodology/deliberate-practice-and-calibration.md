# Deliberate Practice, Calibration & Cognitive Load

This page covers the feedback-loop machinery underneath V.A.D.A.++: how to practice so ability actually moves, how to know whether you're fooling yourself, how much to take on in one sitting, and how to turn mistakes into an asset instead of a source of shame.

## Deliberate practice — three tiers, not one

Ericsson & Pool (2016, *Peak*) distinguish three levels of "practice" that get flattened into one word in everyday speech:

- **Naïve practice** — mere repetition. Produces a plateau; more hours stop helping.
- **Purposeful practice** — specific goals, feedback, working just past your comfort zone, self-directed correction.
- **Deliberate practice** (the full version) — purposeful practice *plus* established training methods *plus* an expert coach.

Most self-learners can realistically reach purposeful practice, plus a "proto-deliberate" version by importing expert feedback secondhand: rubrics, reference solutions, code review, and structured critique (including from an LLM). Ericsson's central warning is that **years of experience without deliberate effort to improve do not equal years of improvement** — this is the difference between someone who's written SQL for five years and someone who's spent five years getting *measurably better* at SQL.

**Application:** each study session should target a specific, named weakness surfaced by your error log (below), attempt something just beyond current ability, get feedback fast (test cases, expected output, a model solution), and diagnose the *type* of error before retrying — not just retry blindly.

## Metacognition and calibration

Kruger & Dunning (1999) found the least-skilled people most overestimate their own ability and lack the metacognitive insight to notice the gap — but their Study 4 also showed that *training the underlying skill improves calibration*. (Some later work, e.g. McIntosh et al. 2019, argues the classic effect is partly a statistical artifact — the practical takeaway that survives the debate either way is: **calibrate against objective criteria, not against how confident you feel.**)

Zimmerman's Self-Regulated Learning cycle gives this a repeatable structure:

1. **Forethought** — plan the session, set a specific goal.
2. **Performance** — do the work, monitor yourself while doing it.
3. **Self-reflection** — evaluate against real feedback (a test result, a working query, a model's actual accuracy), not against how it felt.

**Application:** before each problem or project milestone, write down a predicted outcome (a score, "I can do this in 20 minutes," "I expect ~80% accuracy"). Afterward, compare prediction to reality and log the gap. Run a short "exam wrapper" reflection after each shipped project: what worked, what didn't, what you'd do differently.

**Threshold to change course:** once your predicted-vs-actual gap consistently sits within roughly ±10 points, trust your self-assessment more and reduce how often you formally check it. Until then, keep checking — your gut feeling is not yet a reliable instrument.

## Cognitive load management

Sweller's Cognitive Load Theory (1988, 1998, 2010) models total mental load as three additive parts:

- **Intrinsic load** — the task's inherent complexity relative to your current expertise.
- **Extraneous load** — load created by poor explanation or presentation (fixable, should be minimized).
- **Germane load** — the effortful schema-building that's actually the point (should be maximized, within capacity).

The **worked-example effect** (Sweller & Cooper, 1985) shows novices learn more efficiently from studying worked examples than from unaided problem-solving — but the **expertise reversal effect** (Kalyuga, Ayres, Chandler & Sweller, 2003) shows that the same scaffolding becomes redundant, even actively unhelpful, once you're no longer a novice at that specific skill. The fix is "guidance fading": worked examples first, progressively removed as competence grows.

**Application (session design):** work in ~90-minute sessions broken into about three focused blocks (Pomodoro-style), alternating focused effort with brief breaks — Oakley & Sejnowski's focused/diffuse-mode alternation from *Learning How to Learn* describes the same rhythm. Front-load worked examples on a genuinely new topic; fade them out as you gain competence. Avoid stacking several brand-new, high-interactivity ideas into one sitting — that's the fastest route to overload, and it's exactly the situation where interleaving (see [Interleaving & Desirable Difficulty](interleaving-and-desirable-difficulty.md)) would backfire if introduced too early.

## Mastery learning — the sequencing principle

Bloom's widely-cited "2 sigma" result (1984) found one-to-one tutoring with mastery learning produced achievement two standard deviations above conventional instruction. That exact figure is now considered inflated by modern standards — Kulik et al. put mastery-learning's effect closer to ~0.52 SD, and Nickow, Oreopoulos & Quan's 2020 meta-analysis of 96 tutoring RCTs found an average of 0.37 SD. **The underlying principle survives the correction:** mastery thresholds combined with fast feedback substantially boost learning, even if the number isn't literally "2 sigma."

CMU's Open Learning Initiative studies (Lovett, Meyer & Thille) found students using an adaptive, "learn by doing" statistics course reached the same outcomes in roughly **half the time** of a conventional course — evidence for structuring a curriculum around doing and immediate feedback rather than passive content consumption.

**Application:** the [12-month curriculum](../curriculum/index.md) is sequenced as statistics fundamentals → SQL → Python/pandas → visualization → ML on purpose, with each month expected to reach a real mastery bar (a shipped, working deliverable) before the next begins — not just "watched the material."

## The mistake library — deliberate error practice as a system

Keep a running, classified log of every real error: syntax, conceptual, statistical-assumption violation, data leakage, an off-by-one in a join. This operationalizes Kapur's "productive failure" idea — that attempting and failing *before* consolidation deepens both understanding and transfer, more than being shown the right answer first.

The [Mistake Library](../mistake-library/index.md) is where this lives in the system, with a template for logging errors and turning recurring ones into new [spaced-repetition cards](../tools/spaced-repetition-deck.md) — closing the loop between "I got this wrong" and "I will now be tested on this again until it sticks."

## Assessment design — formative vs. summative

CMU's Eberly Center distinguishes **formative assessment** (ongoing, low-stakes, meant to surface strengths/weaknesses early) from **summative assessment** (a final, graded checkpoint). World-class technical courses — MIT problem sets, Stanford CS229/CS231n, CMU's ML sequence — lean heavily on frequent, effortful, formative work that demands derivation and implementation, not recognition.

**Application:** treat each month's milestone deliverable in the curriculum as the summative checkpoint, but build in frequent, low-stakes formative checks along the way — the spaced-repetition deck, the interleaved drill sets, and weekly self-explanation sessions are all formative by design.
