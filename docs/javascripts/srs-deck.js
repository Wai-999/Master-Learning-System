/* ---------------------------------------------------------------
   V.A.D.A.++ spaced-repetition micro-problem deck.
   Implements the expanding-interval schedule described in the
   methodology docs: 1d -> 3d -> 1w(7d) -> 3w(21d) -> ~6w -> ~13w,
   doubling after that. Every card demands GENERATION (write a
   query, derive an answer) rather than recognition, per the
   testing-effect research the system is built on.
   Cards + scheduling state persist in localStorage only.
   --------------------------------------------------------------- */

(function () {
  var STORAGE_KEY = "vada_srs_v1";
  var STEP_DAYS = [1, 3, 7, 21, 45, 90];

  var SEED_CARDS = [
    // ---- SQL ----
    { id: "seed-sql-1", domain: "sql", front: "Write a query that ranks orders within each customer by order_date, most recent = 1, using a window function (no self-join).", back: "SELECT *, RANK() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn FROM orders;  -- RANK vs ROW_NUMBER vs DENSE_RANK: know the tie-handling difference." },
    { id: "seed-sql-2", domain: "sql", front: "What's the difference between a CTE and a subquery, and when would you reach for a CTE specifically?", back: "A CTE (WITH x AS (...)) is named, can be referenced multiple times in the outer query, and can be recursive. A subquery is inline and single-use. Reach for a CTE when you need to build a query in readable stages or reuse the same derived table twice (e.g., cohort_base used in both a numerator and denominator)." },
    { id: "seed-sql-3", domain: "sql", front: "Write SQL to compute month-over-month % change in revenue using only a window function (no self-join).", back: "SELECT month, revenue, (revenue - LAG(revenue) OVER (ORDER BY month)) / LAG(revenue) OVER (ORDER BY month) AS mom_pct FROM monthly_revenue;" },
    { id: "seed-sql-4", domain: "sql", front: "You need cohort retention: % of users active in month N who are still active in month N+k. Sketch the join/window logic in words.", back: "1) Build a cohort_base CTE: each user's first-activity month. 2) Join activity events back to cohort_base on user_id. 3) Compute month_number = months between activity month and cohort month. 4) GROUP BY cohort month, month_number, COUNT(DISTINCT user_id) / cohort size." },
    { id: "seed-sql-5", domain: "sql", front: "Why can adding an index sometimes make a query SLOWER, and where do you check to confirm it?", back: "Extra indexes cost the optimizer/writer: every INSERT/UPDATE must maintain the index, and the query planner can pick a suboptimal index over a full scan for low-selectivity columns. Confirm with EXPLAIN / EXPLAIN ANALYZE — compare planned vs actual row estimates and look for index scans that return most of the table anyway." },

    // ---- pandas / Python ----
    { id: "seed-pandas-1", domain: "pandas", front: "In pandas, what's the difference between .merge() and .join(), and when do you need pd.concat() instead of either?", back: ".merge() joins on column values (like SQL JOIN), can join on any column(s). .join() joins on the index by default (a convenience wrapper around merge). pd.concat() stacks DataFrames along an axis (rows or columns) without matching on keys — use it to append/stack, not to relate two tables by a key." },
    { id: "seed-pandas-2", domain: "pandas", front: "Write pandas code to compute total revenue per product per month from a transactions DataFrame with columns [date, product, revenue].", back: "df.groupby([pd.Grouper(key='date', freq='M'), 'product'])['revenue'].sum().reset_index()" },
    { id: "seed-pandas-3", domain: "pandas", front: "What does .pivot_table() give you that a plain .groupby() doesn't?", back: "pivot_table reshapes the grouped result into a wide matrix (one dimension as rows, another as columns) and has a built-in aggfunc + margins (subtotals) argument — groupby alone returns a long/tidy result; you'd need an extra .unstack() to get the same wide shape." },
    { id: "seed-pandas-4", domain: "pandas", front: "You have daily data but need weekly rolling volatility. What two pandas operations do you chain?", back: ".resample('W')  (or keep daily and use) .rolling(window=N).std() — e.g. df['ret'].rolling(30).std() for a 30-day rolling volatility, or df.resample('W').agg(...) first if you need calendar-week buckets before rolling further." },
    { id: "seed-pandas-5", domain: "pandas", front: "Why is chained indexing like df[df.a > 0]['b'] = 5 dangerous in pandas, and what's the fix?", back: "It can silently operate on a copy instead of the original DataFrame (SettingWithCopyWarning) — whether it works is undefined behavior. Fix: use .loc explicitly in one step: df.loc[df.a > 0, 'b'] = 5." },

    // ---- Statistics ----
    { id: "seed-stats-1", domain: "stats", front: "Derive, in words, why the Central Limit Theorem justifies using a normal approximation for a sample mean even when the underlying data isn't normal.", back: "The CLT states that the sampling distribution of the mean of i.i.d. random variables approaches a normal distribution as sample size grows, regardless of the population's original distribution (given finite variance) — because averaging cancels out individual-observation skew/quirks. This is why t-tests/CIs on means are broadly valid for 'large enough' n even on skewed raw data." },
    { id: "seed-stats-2", domain: "stats", front: "What exactly does a p-value of 0.03 mean? (State it precisely — not 'probability the null is true.')", back: "Assuming the null hypothesis is true, there is a 3% chance of observing a test statistic at least as extreme as the one observed, due to sampling variation alone. It is NOT the probability the null hypothesis is true, and it says nothing about effect size or practical significance." },
    { id: "seed-stats-3", domain: "stats", front: "You're A/B testing a new checkout flow. Name two ways the test could give you a 'significant' result that doesn't reflect a real effect, and how you'd guard against each.", back: "1) Multiple comparisons / repeated peeking — stopping the test as soon as p<0.05 inflates false positives; guard with a pre-registered sample size or sequential-testing correction. 2) Novelty effect / non-representative traffic window — the effect fades once users adjust; guard by running a full business-cycle (e.g., 1-2 weeks minimum) and checking effect stability over time." },
    { id: "seed-stats-4", domain: "stats", front: "Explain the bias-variance tradeoff in one or two sentences, using an example from regression.", back: "Bias is error from overly simple assumptions (underfitting, e.g. forcing a straight line through curved data); variance is error from being too sensitive to the training sample's noise (overfitting, e.g. a high-degree polynomial that wiggles through every point). Total expected error = bias^2 + variance + irreducible noise, so you must trade one against the other, not minimize either alone." },
    { id: "seed-stats-5", domain: "stats", front: "Why is correlation not causation? Give a concrete confounder example in a business-analytics context.", back: "Two variables can move together because a third variable drives both (confounding), because of reverse causation, or by chance. Example: ice-cream sales correlate with drowning deaths — both are driven by hot weather, not by each other. Business analogue: stores with higher marketing spend also tend to be in higher-traffic locations, so spend-vs-revenue correlation may really be a location effect." },

    // ---- Machine Learning ----
    { id: "seed-ml-1", domain: "ml", front: "Why must time-series train/validation splits be chronological (walk-forward) instead of random k-fold?", back: "Random splits let the model 'see the future' — rows near a test-set row can sit right next to it in time in the training set, leaking information the model wouldn't have at real prediction time. Walk-forward / rolling-origin validation trains only on data up to time t and tests on t+1...t+h, then rolls forward, mimicking real deployment." },
    { id: "seed-ml-2", domain: "ml", front: "You have 50 correlated macro features and 300 rows. Which model family would you reach for first, and why — Random Forest or Lasso regression?", back: "Lasso (or Elastic Net) first: with p close to or exceeding n and correlated features, linear regularized models often match or beat tree ensembles on small, high-dimensional, noisy data, and give interpretable, automatically-sparse coefficients. This mirrors the 'simplicity wins' nowcasting finding — try the simple regularized linear baseline before reaching for something more complex." },
    { id: "seed-ml-3", domain: "ml", front: "Explain what SHAP values tell you that a raw feature-importance ranking from Random Forest does not.", back: "Built-in RF feature importance gives a single global magnitude per feature (how much it reduced impurity/error on average) with no direction or per-prediction detail. SHAP gives a theoretically grounded (game-theory-based) contribution for EVERY individual prediction, including direction (pushed the prediction up or down) and magnitude, so you can explain one specific forecast, not just the model overall." },
    { id: "seed-ml-4", domain: "ml", front: "Your classifier has 95% accuracy on a fraud dataset that's 98% non-fraud. Is 95% accuracy good? What should you look at instead?", back: "No — a model that always predicts 'not fraud' would already score 98% accuracy, so 95% is actually worse than doing nothing. Look at precision/recall/F1 (or PR-AUC) for the minority (fraud) class specifically, and a confusion matrix, since accuracy is misleading under severe class imbalance." },
    { id: "seed-ml-5", domain: "ml", front: "What is concept drift, and name one concrete symptom you'd monitor for it in a deployed forecasting model.", back: "Concept drift is when the real-world relationship between features and target changes after deployment (e.g., gold's sensitivity to real yields shifts after a central-bank buying regime change), so a model accurate at launch quietly degrades. Symptom to monitor: a growing gap between predicted and actual values over time, or a shift in the distribution of input features relative to the training-time baseline, both of which should trigger a retraining review." }
  ];

  function todayStr() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  function addDays(dateStr, n) {
    var d = new Date(dateStr + "T00:00:00");
    d.setDate(d.getDate() + n);
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  function loadDeckState() {
    var raw;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      raw = null;
    }
    var state = raw ? JSON.parse(raw) : {};
    if (!state.progress) state.progress = {}; // id -> {stepIndex, dueDate, reps, lapses}
    if (!state.customCards) state.customCards = []; // user-added {id, domain, front, back}
    return state;
  }

  function saveDeckState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* ignore */
    }
  }

  function allCards(state) {
    return SEED_CARDS.concat(state.customCards);
  }

  function getProgress(state, id) {
    return state.progress[id] || { stepIndex: -1, dueDate: todayStr(), reps: 0, lapses: 0 };
  }

  function initSrsPage() {
    var root = document.getElementById("vada-srs-app");
    if (!root) return; // only run the deck on its own page

    var state = loadDeckState();
    var currentFilter = "all";
    var includeNotDue = false;
    var currentCardId = null;
    var showingBack = false;

    function dueCards() {
      var today = todayStr();
      return allCards(state).filter(function (c) {
        if (currentFilter !== "all" && c.domain !== currentFilter) return false;
        var p = getProgress(state, c.id);
        return includeNotDue || p.dueDate <= today;
      });
    }

    function pickNextCard() {
      var pool = dueCards();
      if (!pool.length) return null;
      // prefer cards never seen (stepIndex -1), then earliest due date, to
      // front-load fresh material without starving overdue reviews.
      pool.sort(function (a, b) {
        var pa = getProgress(state, a.id);
        var pb = getProgress(state, b.id);
        if (pa.stepIndex === -1 && pb.stepIndex !== -1) return -1;
        if (pb.stepIndex === -1 && pa.stepIndex !== -1) return 1;
        return pa.dueDate.localeCompare(pb.dueDate);
      });
      return pool[0];
    }

    function statusCounts() {
      var today = todayStr();
      var pool = allCards(state).filter(function (c) {
        return currentFilter === "all" || c.domain === currentFilter;
      });
      var due = pool.filter(function (c) {
        return getProgress(state, c.id).dueDate <= today;
      }).length;
      return { due: due, total: pool.length };
    }

    function render() {
      var counts = statusCounts();
      var card = pickNextCard();
      currentCardId = card ? card.id : null;
      showingBack = false;

      var filterBtns = ["all", "sql", "pandas", "stats", "ml"]
        .map(function (f) {
          var label = f === "all" ? "All (interleaved)" : f;
          var active = f === currentFilter ? " vada-btn" : " vada-btn vada-btn-ghost";
          return '<button class="vada-filter-btn' + active + '" data-filter="' + f + '">' + label + "</button>";
        })
        .join(" ");

      var html = "";
      html += '<div class="vada-deck-status">' + counts.due + " due now out of " + counts.total + " card(s) in this view. ";
      html += '<label style="margin-left:0.5rem;"><input type="checkbox" id="vada-include-not-due"' + (includeNotDue ? " checked" : "") + "> practice ahead (ignore due dates)</label></div>";
      html += '<div style="margin-bottom:0.75rem;">' + filterBtns + "</div>";

      if (!card) {
        html += '<div class="vada-flashcard"><p><strong>All caught up in this view.</strong> Nothing is due right now — check back tomorrow, switch domains above, or tick "practice ahead."</p></div>';
      } else {
        html += '<div class="vada-flashcard">';
        html += '<div class="vada-flashcard-meta">' + card.domain + " · card " + card.id + "</div>";
        html += '<div class="vada-flashcard-face" id="vada-card-front">' + card.front + "</div>";
        if (showingBack) {
          html += '<hr><div class="vada-flashcard-face" id="vada-card-back"><em>Answer:</em> ' + card.back + "</div>";
        }
        html += '<div class="vada-flashcard-controls">';
        if (!showingBack) {
          html += '<button id="vada-show-answer" class="vada-btn">Show answer</button>';
        } else {
          html += '<button class="vada-btn vada-rate-again" data-rate="again">Again</button>';
          html += '<button class="vada-btn vada-rate-hard" data-rate="hard">Hard</button>';
          html += '<button class="vada-btn vada-rate-good" data-rate="good">Good</button>';
          html += '<button class="vada-btn vada-rate-easy" data-rate="easy">Easy</button>';
        }
        html += "</div></div>";
      }

      root.innerHTML = html;
      wireEvents();
    }

    function wireEvents() {
      root.querySelectorAll(".vada-filter-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          currentFilter = btn.getAttribute("data-filter");
          render();
        });
      });
      var includeBox = document.getElementById("vada-include-not-due");
      if (includeBox) {
        includeBox.addEventListener("change", function () {
          includeNotDue = includeBox.checked;
          render();
        });
      }
      var showBtn = document.getElementById("vada-show-answer");
      if (showBtn) {
        showBtn.addEventListener("click", function () {
          showingBack = true;
          render();
        });
      }
      root.querySelectorAll("[data-rate]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          rateCard(btn.getAttribute("data-rate"));
        });
      });
    }

    function rateCard(rating) {
      if (!currentCardId) return;
      var p = getProgress(state, currentCardId);
      var today = todayStr();

      if (rating === "again") {
        p.stepIndex = 0;
        p.lapses = (p.lapses || 0) + 1;
        p.dueDate = addDays(today, STEP_DAYS[0]);
      } else if (rating === "hard") {
        p.stepIndex = Math.max(0, p.stepIndex);
        p.dueDate = addDays(today, STEP_DAYS[Math.min(p.stepIndex, STEP_DAYS.length - 1)]);
      } else if (rating === "good") {
        p.stepIndex = Math.min(p.stepIndex + 1, STEP_DAYS.length - 1);
        p.dueDate = addDays(today, STEP_DAYS[p.stepIndex]);
      } else if (rating === "easy") {
        p.stepIndex = Math.min(p.stepIndex + 2, STEP_DAYS.length - 1);
        p.dueDate = addDays(today, Math.round(STEP_DAYS[p.stepIndex] * 1.3));
      }
      p.reps = (p.reps || 0) + 1;
      state.progress[currentCardId] = p;
      saveDeckState(state);
      render();
    }

    // ---- Add-your-own-card form ----
    var form = document.getElementById("vada-add-card-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var domain = document.getElementById("vada-new-domain").value || "custom";
        var front = document.getElementById("vada-new-front").value.trim();
        var back = document.getElementById("vada-new-back").value.trim();
        if (!front || !back) return;
        var id = "custom-" + Date.now();
        state.customCards.push({ id: id, domain: domain, front: front, back: back });
        saveDeckState(state);
        document.getElementById("vada-new-front").value = "";
        document.getElementById("vada-new-back").value = "";
        render();
      });
    }

    render();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(initSrsPage);
  } else {
    document.addEventListener("DOMContentLoaded", initSrsPage);
  }
})();
