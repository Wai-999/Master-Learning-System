# Teach-Back & Dual Coding

This page covers three of the four V.A.D.A.++ letters at once — **Visual**, **Discuss**, and **Audio** — because the research behind them is genuinely one connected idea: encoding a concept through more than one channel, then generating it back out in your own words, sticks far better than reading it once and moving on.

## Visual: dual coding, done right

Paivio's Dual Coding Theory (1971, 1986) holds that verbal and visual information are processed through separate but interconnected systems, and that encoding through both channels builds a stronger, more retrievable memory than either alone. Mayer's Cognitive Theory of Multimedia Learning (2001, 2009) operationalized this into validated design principles (coherence, signaling, redundancy, spatial/temporal contiguity) across more than 100 experiments.

The critical caveat, easy to miss: dual coding only helps when the words and the image are **conceptually integrated**. A decorative diagram that doesn't map tightly to the explanation next to it adds *extraneous* cognitive load instead of removing it (Mayer & Moreno, 2003, "Nine Ways to Reduce Cognitive Load").

Concept mapping (Novak, 1970s, building on Ausubel) is the practical tool here, and it does have real evidence behind it — Wang et al. (2025, *International Journal of STEM Education*) synthesized 37 studies (2004–2023) and found a moderate overall effect on STEM achievement (ES = 0.630), strongest in science/technology and at the secondary level. But recall from [Retrieval & Spacing](retrieval-and-spacing.md): Karpicke & Blunt (2011) found plain retrieval practice beats concept mapping on a delayed test, even when the test *was* mapping. **Use a map to organize a topic once, then close it and reproduce it from memory** — that turns a passive diagram into a retrieval event, which is the whole reason "Visual" gets ~15% of your time budget rather than being the main event.

**A good visual map for this curriculum:** the SQL query execution order (FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY), or the seven-stage ML pipeline (problem framing → data collection → preparation → feature engineering → estimation → prediction → evaluation/deployment/monitoring). One page, hand-drawn or in any tool, then rebuilt from memory with the original hidden.

## Discuss: the protégé effect and the Feynman Technique

Chase, Chin, Oppezzo & Schwartz (2009, Stanford — the "Betty's Brain" study) found students who taught a simulated agent exerted more effort and learned more than students learning purely for themselves — an effect strongest for lower-performing learners. Even just *expecting* to teach changes how you study (Bargh & Schul, 1980; Nestojko et al., 2014), and Fiorella & Mayer (2013, 2016) found the generative act of explaining produces measurable gains, strongest when done **without notes**.

The **Feynman Technique** operationalizes this as a simple loop:

1. Pick one concept.
2. Explain it out loud, from memory, as if to someone with no background — no jargon you can't also define.
3. Notice exactly where you hesitate, hand-wave, or reach for a term you can't unpack. That gap *is* the thing to go study next.
4. Go simplify it further with a concrete analogy, then re-explain.

This is a practical bundle of self-explanation research (Chi et al., 1989, 1994 — "eliciting self-explanations improves understanding," meta-analytic g ≈ 0.55 per Bisra et al., 2018) plus retrieval practice, wrapped into one repeatable habit.

**Application:** after every topic in the [curriculum](../curriculum/index.md), explain it out loud to an AI assistant or a peer, without notes, and ask them to probe the gaps. Explaining to an LLM operationalizes the protégé effect on demand, at any hour, with no dependency on someone else's schedule.

## Audio: turning dead time into a review channel

Self-explanation and verbal elaboration strengthen encoding on their own; audio adds the phonological loop (Baddeley & Hitch, 1974) and dual coding's verbal channel as a second, distinct exposure to material you already generated once.

**Application:** record yourself doing a Feynman-style teach-back — a two-to-five-minute personal voice memo — then re-listen during a commute, workout, or chores. Recording is a generation event; re-listening is a free, low-effort spaced-exposure event. This is a genuinely good way to convert time you weren't going to spend studying anyway into another retrieval pass, without opening a laptop.

## Bringing it together

A full V.A.D.A.++ pass on one topic looks like: sketch a one-page map (Visual, ~15 min) → close it and rebuild it from memory → solve problems on the topic (Apply, see [Retrieval & Spacing](retrieval-and-spacing.md) and [Interleaving](interleaving-and-desirable-difficulty.md)) → explain the whole thing out loud without notes to a person or an LLM (Discuss) → record that explanation and re-listen once during a commute (Audio) → log anything you fumbled in the [Mistake Library](../mistake-library/index.md).
