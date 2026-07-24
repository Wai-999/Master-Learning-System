# Progress Dashboard

This page is the single source of truth for where you are in the 12-month plan. Everything here is computed **client-side from your browser's `localStorage`** — nothing is uploaded anywhere, and it works the moment the site is live on GitHub Pages. Clearing your browser's site data resets it.

Check a box here, or check the equivalent "mark complete" box on a month/project page — they're the same underlying record, so they always agree.

<div class="vada-dashboard-grid">
  <div class="vada-stat-card">
    <div class="vada-stat-number" id="vada-stat-overall">0%</div>
    <div class="vada-stat-label">Overall complete</div>
  </div>
  <div class="vada-stat-card">
    <div class="vada-stat-number" id="vada-stat-months">0 / 12</div>
    <div class="vada-stat-label">Months done</div>
  </div>
  <div class="vada-stat-card">
    <div class="vada-stat-number" id="vada-stat-projects">0 / 8</div>
    <div class="vada-stat-label">Projects shipped</div>
  </div>
  <div class="vada-stat-card">
    <div class="vada-stat-number"><span class="vada-streak-flame">🔥</span><span id="vada-stat-streak">0</span></div>
    <div class="vada-stat-label">Current streak (days)</div>
  </div>
  <div class="vada-stat-card">
    <div class="vada-stat-number" id="vada-stat-longest">0</div>
    <div class="vada-stat-label">Longest streak</div>
  </div>
  <div class="vada-stat-card">
    <div class="vada-stat-number" id="vada-stat-days">0</div>
    <div class="vada-stat-label">Total sessions logged</div>
  </div>
</div>

## #100DaysOfData — log today

Following the [#100DaysOfCode](https://github.com/Kallaway/100-days-of-code) accountability model: log a session on any day you did focused work. Missing **one** day is forgiven once every 14 days (life happens); missing two in a row breaks the streak. See [Accountability](../accountability/index.md) for the full rationale.

<div>
  <button id="vada-log-session" class="vada-btn">Log today's study session</button>
  <span id="vada-log-status" class="vada-muted"></span>
</div>

## Months (12)

<div class="vada-progress-wrap">
  <div class="vada-progress-track">
    <div class="vada-progress-fill" data-vada-fill-for="months"></div>
    <div class="vada-progress-text" data-vada-text-for="months">0%</div>
  </div>
</div>

<div class="vada-checklist-group" data-vada-group-container="months">
<p>Check off each month once its milestone deliverable has actually shipped — not just "watched the videos."</p>
<ul style="list-style:none; padding-left:0;">
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-01" data-vada-group="months"> Month 1 — Python &amp; pandas fluency (EDA notebook shipped)</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-02" data-vada-group="months"> Month 2 — SQL for analytics (window-function project shipped)</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-03" data-vada-group="months"> Month 3 — Visualization &amp; BI (dashboard shipped)</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-04" data-vada-group="months"> Month 4 — Statistics for DS (hypothesis-testing notebook shipped)</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-05" data-vada-group="months"> Month 5 — Math for ML (from-scratch linear regression shipped)</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-06" data-vada-group="months"> Month 6 — Supervised ML I (classification project shipped)</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-07" data-vada-group="months"> Month 7 — Supervised ML II (Kaggle entry submitted)</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-08" data-vada-group="months"> Month 8 — Unsupervised + time series (clustering + forecast shipped)</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-09" data-vada-group="months"> Month 9 — Deep learning basics (one DL project shipped)</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-10" data-vada-group="months"> Month 10 — Domain specialization + group project contribution</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-11" data-vada-group="months"> Month 11 — End-to-end deployment / MLOps (deployed API shipped)</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="month-12" data-vada-group="months"> Month 12 — Capstone + portfolio polish (flagship project shipped)</label></li>
</ul>
</div>

## Projects (8)

<div class="vada-progress-wrap">
  <div class="vada-progress-track">
    <div class="vada-progress-fill" data-vada-fill-for="projects"></div>
    <div class="vada-progress-text" data-vada-text-for="projects">0%</div>
  </div>
</div>

<div class="vada-checklist-group" data-vada-group-container="projects">
<ul style="list-style:none; padding-left:0;">
<li><label><input type="checkbox" class="vada-track" data-vada-id="project-01" data-vada-group="projects"> 01 · Finance — Risk &amp; return dashboard</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="project-02" data-vada-group="projects"> 02 · Sales — Cohort &amp; retention analysis</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="project-03" data-vada-group="projects"> 03 · Marketing — Multi-touch attribution</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="project-04" data-vada-group="projects"> 04 · HR — Attrition &amp; survival analysis</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="project-05" data-vada-group="projects"> 05 · Politics — Democracy &amp; election analysis</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="project-06" data-vada-group="projects"> 06 · Gold — Regime &amp; driver analysis</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="project-07" data-vada-group="projects"> 07 · Oil &amp; Energy — Inventory/price forecasting</label></li>
<li><label><input type="checkbox" class="vada-track" data-vada-id="project-08" data-vada-group="projects"> 08 · Real Estate — Home value trends &amp; prediction</label></li>
</ul>
</div>

!!! danger "Reset"
    Only use this if you want to start completely over.

<button id="vada-reset-progress" class="vada-btn vada-btn-danger">Reset all progress</button>
