# Spaced-Repetition Micro-Problem Deck

Every card below demands **generation** — write a query, derive an answer, explain a mechanism — never simple recognition. That distinction is the whole point: Roediger & Karpicke (2006) and Karpicke & Blunt (2011) both found generation-based retrieval beats rereading and even concept mapping on delayed tests. See [Retrieval & Spacing](../methodology/retrieval-and-spacing.md) for the research this is built on.

Scheduling follows the expanding-interval rule from that page: **1d → 3d → 1w → 3w → ~6w → ~13w**, adjusted by your self-rating after each card (Again / Hard / Good / Easy). State lives in your browser's `localStorage` — no account, no server, works offline once the page has loaded once.

**How to use this deck well:**

1. Default to **"All (interleaved)"** — mixing SQL / pandas / stats / ML forces you to first *decide which tool applies*, which is the actually-hard, actually-useful part (see [Interleaving](../methodology/interleaving-and-desirable-difficulty.md)).
2. If you're brand new to a topic and every card in it feels impossible, filter to that one domain and drill it alone for a few days first — interleave once you can do each piece in isolation.
3. Rate honestly. "Good" means you produced the right answer with real effort, not that you recognized it once you saw it.
4. Add your own cards as you hit real errors in projects — pull failures straight from your [Mistake Library](../mistake-library/index.md) into new cards here. That's the highest-value source of cards in the whole deck.

<div id="vada-srs-app">
  <p class="vada-muted">Loading deck…</p>
</div>

## Add a card

<form id="vada-add-card-form">
  <div class="vada-form-row">
    <label for="vada-new-domain">Domain</label>
    <select id="vada-new-domain">
      <option value="sql">SQL</option>
      <option value="pandas">pandas</option>
      <option value="stats">Statistics</option>
      <option value="ml">Machine Learning</option>
      <option value="custom">Other</option>
    </select>
  </div>
  <div class="vada-form-row">
    <label for="vada-new-front">Question / prompt (must require generating an answer, not just recognizing it)</label>
    <textarea id="vada-new-front" rows="3" placeholder="e.g. Write a query that..."></textarea>
  </div>
  <div class="vada-form-row">
    <label for="vada-new-back">Answer / model solution</label>
    <textarea id="vada-new-back" rows="3" placeholder="The answer, plus a one-line 'why'"></textarea>
  </div>
  <button type="submit" class="vada-btn">Add card to deck</button>
</form>

!!! note "Seed deck size"
    The deck ships with 20 starter cards (5 each across SQL, pandas, statistics, and ML) so the mechanism works on day one. It is meant to be **outgrown** — by month 3 your own cards, pulled from real errors, should outnumber the seed cards.
