/* ---------------------------------------------------------------
   V.A.D.A.++ progress tracker
   - Persists named "milestone" checkboxes (months / projects) across
     every page via localStorage, grouped so any page can show a
     live progress bar for a group.
   - Persists generic ad-hoc task-list checkboxes (```- [ ] ...```)
     per page, so week-by-week checklists remember their state too.
   - Implements a #100DaysOfData style streak counter with a
     "one missed day allowed per 14 days" grace rule.
   All state lives client-side in localStorage. Nothing is sent
   anywhere. Clearing browser storage resets progress.
   --------------------------------------------------------------- */

(function () {
  var STORAGE_KEY = "vada_progress_v1";

  function todayStr() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  function daysBetween(a, b) {
    var da = new Date(a + "T00:00:00");
    var db = new Date(b + "T00:00:00");
    return Math.round((db - da) / 86400000);
  }

  function loadState() {
    var raw;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      raw = null;
    }
    var state = raw ? JSON.parse(raw) : {};
    if (!state.milestones) state.milestones = {};
    if (!state.tasklist) state.tasklist = {};
    if (!state.log) {
      state.log = { streak: 0, longest: 0, lastDate: null, totalDays: 0, graceUsedOn: null, history: [] };
    }
    return state;
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* storage unavailable — fail silently, tracker just won't persist */
    }
  }

  var state = loadState();

  function wireMilestoneCheckboxes() {
    var boxes = document.querySelectorAll("input.vada-track");
    boxes.forEach(function (cb) {
      var id = cb.getAttribute("data-vada-id");
      if (!id) return;
      cb.checked = !!state.milestones[id];
      cb.addEventListener("change", function () {
        state.milestones[id] = cb.checked;
        saveState(state);
        renderGroupProgress();
        renderDashboardStats();
      });
    });
  }

  function wireGenericTasklist() {
    var boxes = document.querySelectorAll(
      ".md-typeset .task-list-control input[type='checkbox']:not(.vada-track)"
    );
    var path = location.pathname;
    boxes.forEach(function (cb, idx) {
      var li = cb.closest("li");
      var text = li ? li.textContent.trim().slice(0, 50) : String(idx);
      var id = path + "::" + idx + "::" + text;
      if (state.tasklist[id] !== undefined) {
        cb.checked = state.tasklist[id];
        if (cb.checked) cb.setAttribute("checked", "checked");
      }
      cb.addEventListener("change", function () {
        state.tasklist[id] = cb.checked;
        saveState(state);
      });
    });
  }

  function groupCounts(group) {
    var boxes = document.querySelectorAll(
      'input.vada-track[data-vada-group="' + group + '"]'
    );
    var total = boxes.length;
    var done = 0;
    boxes.forEach(function (cb) {
      if (cb.checked) done += 1;
    });
    return { done: done, total: total };
  }

  function renderGroupProgress() {
    var fills = document.querySelectorAll("[data-vada-fill-for]");
    fills.forEach(function (fillEl) {
      var group = fillEl.getAttribute("data-vada-fill-for");
      var c = groupCounts(group);
      var pct = c.total ? Math.round((c.done / c.total) * 100) : 0;
      fillEl.style.width = pct + "%";
      var textEl = document.querySelector('[data-vada-text-for="' + group + '"]');
      if (textEl) textEl.textContent = pct + "% (" + c.done + "/" + c.total + ")";
    });
  }

  function renderDashboardStats() {
    var monthsEl = document.getElementById("vada-stat-months");
    var projectsEl = document.getElementById("vada-stat-projects");
    var overallEl = document.getElementById("vada-stat-overall");
    var streakEl = document.getElementById("vada-stat-streak");
    var longestEl = document.getElementById("vada-stat-longest");
    var daysEl = document.getElementById("vada-stat-days");

    if (monthsEl || projectsEl || overallEl) {
      var months = groupCounts("months");
      var projects = groupCounts("projects");
      if (monthsEl) monthsEl.textContent = months.done + " / " + (months.total || 12);
      if (projectsEl) projectsEl.textContent = projects.done + " / " + (projects.total || 8);
      if (overallEl) {
        var totalDone = months.done + projects.done;
        var totalAll = (months.total || 12) + (projects.total || 8);
        var pct = totalAll ? Math.round((totalDone / totalAll) * 100) : 0;
        overallEl.textContent = pct + "%";
      }
    }
    if (streakEl) streakEl.textContent = state.log.streak;
    if (longestEl) longestEl.textContent = state.log.longest;
    if (daysEl) daysEl.textContent = state.log.totalDays;
  }

  function logSessionMessage(msg) {
    var el = document.getElementById("vada-log-status");
    if (el) el.textContent = msg;
  }

  function handleLogSession() {
    var today = todayStr();
    var log = state.log;

    if (log.lastDate === today) {
      logSessionMessage("Already logged for today (" + today + ") — nice, come back tomorrow.");
      return;
    }

    if (!log.lastDate) {
      log.streak = 1;
    } else {
      var gap = daysBetween(log.lastDate, today);
      if (gap === 1) {
        log.streak += 1;
      } else if (gap === 2) {
        var graceRecently =
          log.graceUsedOn && daysBetween(log.graceUsedOn, today) <= 14;
        if (!graceRecently) {
          log.streak += 1;
          log.graceUsedOn = today;
          logSessionMessage(
            "Missed a day, but your once-per-14-days grace kept the streak alive."
          );
        } else {
          log.streak = 1;
        }
      } else if (gap > 2 || gap < 0) {
        log.streak = 1;
      }
    }

    log.longest = Math.max(log.longest || 0, log.streak);
    log.totalDays = (log.totalDays || 0) + 1;
    log.lastDate = today;
    log.history = (log.history || []).concat([today]).slice(-200);

    saveState(state);
    renderDashboardStats();
    if (!document.getElementById("vada-log-status").textContent) {
      logSessionMessage("Logged for " + today + " — streak: " + log.streak + " day(s).");
    }
  }

  function handleResetProgress() {
    if (!window.confirm("Reset ALL V.A.D.A.++ progress (milestones, checklists, streak)? This cannot be undone.")) {
      return;
    }
    state = { milestones: {}, tasklist: {}, log: { streak: 0, longest: 0, lastDate: null, totalDays: 0, graceUsedOn: null, history: [] } };
    saveState(state);
    location.reload();
  }

  function wireButtons() {
    var logBtn = document.getElementById("vada-log-session");
    if (logBtn) logBtn.addEventListener("click", handleLogSession);

    var resetBtn = document.getElementById("vada-reset-progress");
    if (resetBtn) resetBtn.addEventListener("click", handleResetProgress);
  }

  function initPage() {
    state = loadState();
    wireMilestoneCheckboxes();
    wireGenericTasklist();
    renderGroupProgress();
    renderDashboardStats();
    wireButtons();
  }

  // Material for MkDocs uses instant navigation (XHR page swaps), so a
  // one-time DOMContentLoaded won't rerun on internal link clicks.
  // document$ is Material's documented hook that fires on every page render.
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(initPage);
  } else {
    document.addEventListener("DOMContentLoaded", initPage);
  }
})();
