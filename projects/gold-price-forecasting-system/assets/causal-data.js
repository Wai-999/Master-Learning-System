/* ============================================================
   Gold Price Forecasting System — causal graph data
   Used by feature-causality.html (Page 2)

   IMPORTANT FRAMING (read before editing):
   This is a hypothesized, theory-driven causal DAG built from
   macro-finance literature and FRED series definitions — NOT a
   statistically discovered causal structure. It is a reasoning
   scaffold: a starting hypothesis to test against your own data
   (Granger tests, PC/FCI causal discovery, SHAP vs. theory
   comparisons), not a proven ground truth.
   ============================================================ */

const CATEGORIES = [
  { key: "latent",     label: "Latent Regimes" },
  { key: "macro",      label: "Macro & Rates" },
  { key: "inflation",  label: "Inflation" },
  { key: "stress",     label: "Financial Stress & Volatility" },
  { key: "crossasset", label: "Cross-Asset Markets" },
  { key: "technical",  label: "Gold Technical / Autoregressive" },
  { key: "target",     label: "Target" }
];

const JUNCTION_META = {
  chain:          { label: "Chain (mediation)",        badge: "badge-chain",   cls: "chain" },
  fork:           { label: "Fork (shared cause)",       badge: "badge-fork",    cls: "fork" },
  collider:       { label: "Collider (shared effect)",  badge: "badge-collider",cls: "collider" },
  definitional:   { label: "Definitional / identity",   badge: "badge-def",     cls: "definitional" },
  autoregressive: { label: "Autoregressive (self-derived)", badge: "badge-autoreg", cls: "autoregressive" },
  direct:         { label: "Direct effect",             badge: "badge-direct",  cls: "direct" },
  peer:           { label: "Correlated (no direct link)",badge: "badge-peer",   cls: "peer" }
};

// dir is relative to the node the connection is attached to:
//   'to'   -> this node causes / points to `to`
//   'from' -> `to` causes / points to this node
//   'peer' -> correlational only (fork-mediated), no arrow

const CAUSAL_NODES = [

  // ---------------- Latent regimes ----------------
  {
    id: "lat_mon", label: "Monetary Policy Stance", shortLabel: "Fed Policy Stance",
    category: "latent", kind: "latent", tier: "latent", direction: null, score: null, scoreType: null,
    summary: "Not a single column — a latent regime for how tight or loose U.S. monetary policy is, current and expected.",
    mechanism: "Tighter policy raises real yields and attracts foreign capital via rate differentials, lifting the dollar. Both channels raise the opportunity cost of holding non-yielding gold.",
    connections: [
      { to: "FEDFUNDS", dir: "to", junction: "direct", note: "Sets the policy rate directly." },
      { to: "DGS2", dir: "to", junction: "chain", note: "Short yields price in the expected policy path." },
      { to: "DXY", dir: "to", junction: "chain", note: "Rate differentials attract capital and strengthen the dollar, which then weighs on Gold_Price (chain)." },
      { to: "DFII10", dir: "to", junction: "chain", note: "Combines with inflation expectations (Fisher relation) into the real yield that drives gold." },
      { to: "T10Y2Y", dir: "to", junction: "chain", note: "Aggressive tightening tends to flatten or invert the curve." },
      { to: "Gold_Price", dir: "to", junction: "collider", note: "One of gold's two largely independent drivers, paired with the Risk-Off Shock — see the flagship collider example." }
    ]
  },
  {
    id: "lat_inf", label: "Inflation Shock / Expectations Regime", shortLabel: "Inflation Regime",
    category: "latent", kind: "latent", tier: "latent", direction: null, score: null, scoreType: null,
    summary: "A latent regime for how worried markets are about inflation — drives breakevens, CPI, and the daily CPI proxy together.",
    mechanism: "Rising money supply and energy costs feed inflation expectations; gold has a long, imperfect-but-real track record of preserving purchasing power, so inflation scares increase demand for it.",
    connections: [
      { to: "T10YIE", dir: "to", junction: "fork", note: "A direct, timely observable manifestation of this regime." },
      { to: "CPIAUCSL", dir: "to", junction: "fork", note: "The lagged, official confirmation of the same regime." },
      { to: "CPI_Proxy", dir: "to", junction: "fork", note: "A timelier, noisier daily stand-in for the same regime." },
      { to: "Gold_Price", dir: "to", junction: "direct", note: "Inflation scares support gold's role as a store of purchasing power." },
      { to: "M2SL", dir: "from", junction: "chain", note: "Sustained money-supply growth is a classic driver of inflation expectations." },
      { to: "Crude_Oil", dir: "from", junction: "chain", note: "Energy costs feed directly into headline inflation." }
    ]
  },
  {
    id: "lat_risk", label: "Risk-Off / Financial Stress Shock", shortLabel: "Risk-Off Shock",
    category: "latent", kind: "latent", tier: "latent", direction: null, score: null, scoreType: null,
    summary: "A latent 'risk-off' regime — geopolitical shocks, banking stress, sudden growth scares. Drives volatility and stress indices up, equities down, gold up.",
    mechanism: "When confidence in other assets drops, gold's lack of counterparty/credit risk makes it a preferred store of value during acute stress — though this 'safe haven' property is real but short-lived, not a permanent hedge (Baur & Lucey).",
    connections: [
      { to: "VIXCLS", dir: "to", junction: "fork", note: "The fastest-moving, most direct manifestation of the regime." },
      { to: "NFCI", dir: "to", junction: "fork", note: "A broader weekly stress composite responding to the same shocks." },
      { to: "STLFSI4", dir: "to", junction: "fork", note: "An independently constructed stress index responding to the same shocks." },
      { to: "SP500", dir: "to", junction: "collider", note: "Pulls equities down while Gold is pulled up — the same regime, opposite sign." },
      { to: "Gold_Price", dir: "to", junction: "collider", note: "Safe-haven demand; paired with the Monetary Policy Stance as gold's other independent driver." },
      { to: "Silver", dir: "to", junction: "fork", note: "Partial safe-haven demand, weaker and less consistent than gold's." },
      { to: "RECPROUSM156N", dir: "from", junction: "chain", note: "Rising modeled recession odds often precede or accompany risk-off episodes." }
    ]
  },
  {
    id: "lat_growth", label: "Global Growth & Industrial Demand", shortLabel: "Growth Regime",
    category: "latent", kind: "latent", tier: "latent", direction: null, score: null, scoreType: null,
    summary: "A latent global-growth regime — drives industrial commodity demand (oil, platinum, part of silver) and corporate earnings (equities).",
    mechanism: "Stronger growth raises demand for energy and industrial metals and supports equity earnings, pulling Crude Oil, Platinum, and SP500 up together — largely independent of gold's monetary/safe-haven drivers.",
    connections: [
      { to: "SP500", dir: "to", junction: "collider", note: "Earnings optimism lifts equities — the opposite force to the Risk-Off Shock acting on the same variable." },
      { to: "Crude_Oil", dir: "to", junction: "fork", note: "Stronger growth lifts energy demand." },
      { to: "Platinum", dir: "to", junction: "fork", note: "Platinum's demand is dominated by industrial and autocatalyst use." },
      { to: "Silver", dir: "to", junction: "fork", note: "Silver's industrial-use component, distinct from its safe-haven component." }
    ]
  },

  // ---------------- Macro & rates ----------------
  {
    id: "FEDFUNDS", label: "FEDFUNDS — Effective Fed Funds Rate", shortLabel: "FEDFUNDS",
    category: "macro", kind: "observed", tier: 2, direction: "down", score: 68, scoreType: "fundamental",
    summary: "The Fed's primary policy lever.",
    mechanism: "Directly sets short-term borrowing costs; changes ripple into DGS2, DXY, and eventually real yields.",
    dataNote: "Published monthly on FRED (a monthly average), so daily rows are typically forward-filled between FOMC-driven changes — check *_is_filled before treating daily moves as new information.",
    connections: [
      { to: "lat_mon", dir: "from", junction: "direct", note: "FEDFUNDS is essentially the observable instrument of this regime." },
      { to: "DGS2", dir: "to", junction: "chain", note: "Anchors the short end of the yield curve." },
      { to: "DXY", dir: "to", junction: "chain", note: "Higher policy rates typically support the dollar." }
    ]
  },
  {
    id: "DGS2", label: "DGS2 — 2-Year Treasury Yield", shortLabel: "DGS2",
    category: "macro", kind: "observed", tier: 2, direction: "down", score: 58, scoreType: "fundamental",
    summary: "The market's read on the near-term path of Fed policy.",
    mechanism: "Moves ahead of actual Fed decisions as markets price in expected changes — a fast-moving barometer of the monetary policy regime.",
    connections: [
      { to: "FEDFUNDS", dir: "from", junction: "chain", note: "Prices in the expected path of the policy rate." },
      { to: "T10Y2Y", dir: "to", junction: "definitional", note: "T10Y2Y is literally DGS10 minus DGS2." },
      { to: "lat_mon", dir: "from", junction: "direct", note: "A fast-moving barometer of the policy regime." }
    ]
  },
  {
    id: "DGS10", label: "DGS10 — 10-Year Treasury Yield", shortLabel: "DGS10",
    category: "macro", kind: "observed", tier: 2, direction: "down", score: 64, scoreType: "fundamental",
    summary: "The benchmark long-term nominal Treasury yield.",
    mechanism: "Blends near-term policy expectations with longer-run growth and inflation expectations — approximately nominal ≈ real yield + expected inflation (Fisher equation).",
    connections: [
      { to: "lat_mon", dir: "from", junction: "fork", note: "Reflects policy expectations..." },
      { to: "lat_inf", dir: "from", junction: "fork", note: "...blended with inflation expectations (Fisher equation)." },
      { to: "T10Y2Y", dir: "to", junction: "definitional", note: "T10Y2Y = DGS10 − DGS2." },
      { to: "T10YIE", dir: "to", junction: "definitional", note: "T10YIE = DGS10 − DFII10 (FRED's standard breakeven construction)." }
    ]
  },
  {
    id: "T10Y2Y", label: "T10Y2Y — 10Y minus 2Y Spread", shortLabel: "T10Y2Y",
    category: "macro", kind: "observed", tier: 4, direction: "mixed", score: 28, scoreType: "fundamental",
    summary: "The classic yield-curve slope — a slow-moving recession signal, not a fast gold driver.",
    mechanism: "Definitional: T10Y2Y = DGS10 − DGS2. An inverted (negative) spread has historically preceded recessions, feeding into recession-probability estimates and, eventually, risk sentiment.",
    connections: [
      { to: "DGS10", dir: "from", junction: "definitional", note: "T10Y2Y = DGS10 − DGS2 (arithmetic identity)." },
      { to: "DGS2", dir: "from", junction: "definitional", note: "T10Y2Y = DGS10 − DGS2 (arithmetic identity)." },
      { to: "RECPROUSM156N", dir: "to", junction: "chain", note: "An inverted curve is a classic leading indicator of recession." }
    ]
  },
  {
    id: "DFII10", label: "DFII10 — 10-Year TIPS Real Yield", shortLabel: "DFII10",
    category: "macro", kind: "observed", tier: 1, direction: "down", score: 90, scoreType: "fundamental",
    summary: "A directly market-observed real (inflation-adjusted) yield — gold's single most theory-supported driver.",
    mechanism: "Gold pays no coupon, so as real yields rise, the opportunity cost of holding it rises, and vice versa. Erb & Harvey document a correlation near −0.8 between real rates and gold over 1997–2012.",
    connections: [
      { to: "lat_mon", dir: "from", junction: "chain", note: "Real yields rise when policy tightens faster than inflation expectations." },
      { to: "lat_inf", dir: "from", junction: "chain", note: "Real yields fall when inflation expectations rise faster than nominal yields." },
      { to: "T10YIE", dir: "to", junction: "definitional", note: "T10YIE = DGS10 − DFII10." },
      { to: "Gold_Price", dir: "to", junction: "direct", note: "Gold's single most theory-supported driver — the opportunity-cost channel (Erb & Harvey, 2013)." }
    ]
  },
  {
    id: "T10YIE", label: "T10YIE — 10-Year Breakeven Inflation", shortLabel: "T10YIE",
    category: "inflation", kind: "observed", tier: 1, direction: "up", score: 80, scoreType: "fundamental",
    summary: "Defined as DGS10 − DFII10 — the market's implied average inflation expectation over 10 years.",
    mechanism: "The most direct, timely market-based read on the inflation regime; rising breakevens typically support gold demand as an inflation hedge.",
    connections: [
      { to: "DGS10", dir: "from", junction: "definitional", note: "T10YIE = DGS10 − DFII10." },
      { to: "DFII10", dir: "from", junction: "definitional", note: "T10YIE = DGS10 − DFII10." },
      { to: "lat_inf", dir: "from", junction: "fork", note: "The most direct market-based read on the inflation regime." },
      { to: "Gold_Price", dir: "to", junction: "direct", note: "Rising breakeven inflation typically supports inflation-hedge demand for gold." }
    ]
  },
  {
    id: "CPIAUCSL", label: "CPIAUCSL — Headline CPI", shortLabel: "CPIAUCSL",
    category: "inflation", kind: "observed", tier: 3, direction: "up", score: 40, scoreType: "fundamental",
    summary: "The official, realized inflation measure (all urban consumers).",
    mechanism: "Confirms — with a lag — what breakevens and CPI_Proxy already signaled; more a check on the inflation regime than a fast-moving driver of daily gold moves.",
    dataNote: "Published monthly, roughly two weeks after month-end. Verify your *_is_filled flag reflects the true release date, not the reference month — this is a classic look-ahead leak.",
    connections: [
      { to: "lat_inf", dir: "from", junction: "fork", note: "The lagged, official confirmation of the inflation regime." },
      { to: "Crude_Oil", dir: "from", junction: "chain", note: "Energy prices are a direct input to headline CPI." },
      { to: "lat_mon", dir: "to", junction: "chain", note: "Sustained CPI surprises are a primary input to Fed policy decisions." }
    ]
  },
  {
    id: "M2SL", label: "M2SL — M2 Money Stock", shortLabel: "M2SL",
    category: "inflation", kind: "observed", tier: 2, direction: "up", score: 56, scoreType: "fundamental",
    summary: "The M2 money supply — a slow-moving, multi-quarter driver of inflation expectations.",
    mechanism: "Sustained M2 growth is the classic monetarist channel into inflation expectations ('too much money chasing too few goods'), supporting gold via the inflation regime with a lag of quarters, not days.",
    dataNote: "Monthly series; daily rows are forward-filled. Treat as a slow regime signal, not a daily driver.",
    connections: [
      { to: "lat_inf", dir: "to", junction: "chain", note: "Money-supply growth is the classic monetarist channel into inflation expectations, with a multi-quarter lag." }
    ]
  },
  {
    id: "RECPROUSM156N", label: "RECPROUSM156N — Recession Probability", shortLabel: "RECPROUSM156N",
    category: "macro", kind: "observed", tier: 4, direction: "up", score: 24, scoreType: "fundamental",
    summary: "Smoothed U.S. recession probability — a slow monthly regime signal.",
    mechanism: "Rises when the yield curve inverts and growth data weakens; elevated recession odds often precede or accompany risk-off episodes that support gold, but this is an indirect, lagging channel.",
    dataNote: "Monthly series; forward-filled daily. Useful as a regime filter, not a fast-moving predictor.",
    connections: [
      { to: "T10Y2Y", dir: "from", junction: "chain", note: "Yield-curve inversion is one of its key leading inputs." },
      { to: "lat_risk", dir: "to", junction: "chain", note: "Rising modeled recession odds often precede or accompany risk-off episodes." }
    ]
  },

  // ---------------- Financial stress & volatility ----------------
  {
    id: "VIXCLS", label: "VIXCLS — CBOE Volatility Index", shortLabel: "VIXCLS",
    category: "stress", kind: "observed", tier: 1, direction: "up", score: 82, scoreType: "fundamental",
    summary: "Options-implied 30-day equity volatility — the standard 'fear gauge'.",
    mechanism: "The fastest-moving, most direct manifestation of the risk-off regime; spikes coincide with safe-haven gold buying.",
    connections: [
      { to: "lat_risk", dir: "from", junction: "fork", note: "The fastest-moving, most direct manifestation of the regime — gold's 'fear gauge' counterpart." },
      { to: "NFCI", dir: "peer", junction: "fork", note: "Correlates with NFCI / ANFCI / STLFSI4 because all four share the same latent driver, not because one causes another." },
      { to: "Gold_Price", dir: "to", junction: "direct", note: "Spikes typically coincide with safe-haven gold buying." }
    ]
  },
  {
    id: "NFCI", label: "NFCI — Chicago Fed Financial Conditions Index", shortLabel: "NFCI",
    category: "stress", kind: "observed", tier: 2, direction: "up", score: 66, scoreType: "fundamental",
    summary: "A weekly composite of ~105 risk, credit, and leverage indicators (Brave & Butters, 2012).",
    mechanism: "Positive = tighter-than-average financial conditions. A broader, slower-moving stress gauge than VIX, sharing the same latent risk-off driver.",
    dataNote: "Weekly series; forward-filled daily.",
    connections: [
      { to: "lat_risk", dir: "from", junction: "fork", note: "A broader, slower-moving weekly composite of ~105 risk/credit/leverage indicators." },
      { to: "ANFCI", dir: "to", junction: "definitional", note: "ANFCI is NFCI with the business-cycle-explained component statistically removed." },
      { to: "VIXCLS", dir: "peer", junction: "fork", note: "Shares the same latent stress driver as VIX / ANFCI / STLFSI4." }
    ]
  },
  {
    id: "ANFCI", label: "ANFCI — Adjusted NFCI", shortLabel: "ANFCI",
    category: "stress", kind: "observed", tier: 2, direction: "up", score: 62, scoreType: "fundamental",
    summary: "NFCI with the portion explained by current economic conditions removed (Chicago Fed, 2017).",
    mechanism: "Isolates 'unusual' financial tightness not explained by the business cycle. Derived directly from NFCI — treat the two as one signal, not two independent ones.",
    dataNote: "Weekly series; forward-filled daily.",
    connections: [
      { to: "NFCI", dir: "from", junction: "definitional", note: "Derived directly from NFCI — treat the two as one signal, not two independent ones." },
      { to: "lat_risk", dir: "from", junction: "fork", note: "Isolates 'unusual' financial tightness not explained by the business cycle." }
    ]
  },
  {
    id: "STLFSI4", label: "STLFSI4 — St. Louis Fed Financial Stress Index", shortLabel: "STLFSI4",
    category: "stress", kind: "observed", tier: 2, direction: "up", score: 60, scoreType: "fundamental",
    summary: "An independently constructed (~18-variable) weekly stress composite from the St. Louis Fed.",
    mechanism: "Methodologically distinct from NFCI/ANFCI but responds to the same risk-off shocks — expect high correlation with VIXCLS/NFCI/ANFCI, not because one causes another.",
    dataNote: "Weekly series; forward-filled daily.",
    connections: [
      { to: "lat_risk", dir: "from", junction: "fork", note: "A methodologically distinct stress composite responding to the same shocks as NFCI/VIX." },
      { to: "VIXCLS", dir: "peer", junction: "fork", note: "Expect high correlation with VIX/NFCI/ANFCI — shared driver, not mutual causation." }
    ]
  },

  // ---------------- Cross-asset markets ----------------
  {
    id: "DXY", label: "DXY — U.S. Dollar Index", shortLabel: "DXY",
    category: "crossasset", kind: "observed", tier: 1, direction: "down", score: 85, scoreType: "fundamental",
    summary: "The dollar's value against a basket of major currencies.",
    mechanism: "Gold is priced in USD globally, so a stronger dollar mechanically makes gold more expensive in other currencies, damping demand — a fairly direct, fast-acting negative driver rooted in the monetary policy regime.",
    connections: [
      { to: "lat_mon", dir: "from", junction: "chain", note: "Rate differentials from the policy regime are a primary driver of the dollar." },
      { to: "Gold_Price", dir: "to", junction: "direct", note: "Gold is priced in USD globally, so dollar strength mechanically raises gold's price in other currencies, damping demand." }
    ]
  },
  {
    id: "SP500", label: "SP500 — S&P 500 Index", shortLabel: "SP500",
    category: "crossasset", kind: "observed", tier: 3, direction: "mixed", score: 48, scoreType: "fundamental",
    summary: "The main U.S. equity benchmark.",
    mechanism: "Pulled up by the growth regime (earnings) and down by the risk-off regime (flight from equities) — structurally similar to gold in that it's a collider of two largely independent shocks.",
    connections: [
      { to: "lat_growth", dir: "from", junction: "collider", note: "Lifted by earnings and growth optimism." },
      { to: "lat_risk", dir: "from", junction: "collider", note: "Hit by risk-off shocks — the same collider structure as Gold_Price, with opposite sign." },
      { to: "Gold_Price", dir: "peer", junction: "fork", note: "The common 'stocks fall, gold rises' narrative is usually both variables independently responding to the same Risk-Off Shock, not one causing the other." }
    ]
  },
  {
    id: "Crude_Oil", label: "Crude Oil (WTI)", shortLabel: "Crude Oil",
    category: "crossasset", kind: "observed", tier: 3, direction: "mixed", score: 45, scoreType: "fundamental",
    summary: "WTI/Brent crude oil price.",
    mechanism: "Driven by the growth regime (demand) and geopolitical supply shocks that overlap with risk-off episodes; also a direct input to headline inflation, creating a slower multi-hop chain into gold via CPI and policy.",
    connections: [
      { to: "lat_growth", dir: "from", junction: "fork", note: "The demand-driven leg of oil prices." },
      { to: "CPIAUCSL", dir: "to", junction: "chain", note: "A direct input to headline inflation." },
      { to: "lat_inf", dir: "to", junction: "chain", note: "Sustained oil shocks feed the inflation regime." }
    ]
  },
  {
    id: "Silver", label: "Silver", shortLabel: "Silver",
    category: "crossasset", kind: "observed", tier: 3, direction: "up", score: 50, scoreType: "fundamental",
    summary: "Sits between gold and platinum: part safe-haven, part industrial metal.",
    mechanism: "Shares gold's safe-haven demand (risk-off regime) but, unlike gold, also has meaningful industrial demand (growth regime) — explaining why the gold-silver ratio isn't stable and silver is typically more volatile than gold.",
    connections: [
      { to: "lat_risk", dir: "from", junction: "fork", note: "Shares gold's safe-haven demand, less consistently." },
      { to: "lat_growth", dir: "from", junction: "fork", note: "Also has real industrial demand, unlike gold — this dual exposure is why the gold-silver ratio isn't stable." },
      { to: "Gold_Price", dir: "peer", junction: "fork", note: "Correlated mainly through the shared Risk-Off driver." }
    ]
  },
  {
    id: "Platinum", label: "Platinum", shortLabel: "Platinum",
    category: "crossasset", kind: "observed", tier: 3, direction: "mixed", score: 38, scoreType: "fundamental",
    summary: "Dominated by industrial and autocatalyst demand, unlike gold.",
    mechanism: "Its price is dominated by industrial/autocatalyst demand from the growth regime; it has a much weaker safe-haven role than gold or silver, so its correlation with gold is looser and less reliable.",
    connections: [
      { to: "lat_growth", dir: "from", junction: "fork", note: "Dominated by industrial and autocatalyst demand." },
      { to: "Gold_Price", dir: "peer", junction: "fork", note: "Looser, less reliable correlation with gold than silver has — weaker safe-haven role." }
    ]
  },
  {
    id: "CPI_Proxy", label: "CPI Proxy (daily, market-based)", shortLabel: "CPI_Proxy",
    category: "inflation", kind: "observed", tier: 3, direction: "up", score: 46, scoreType: "fundamental",
    summary: "A daily, market-based stand-in for inflation trends.",
    mechanism: "Exists mainly because official CPI (CPIAUCSL) is monthly and lagged; gives a timelier read on the inflation regime, at the cost of being noisier.",
    connections: [
      { to: "lat_inf", dir: "from", junction: "fork", note: "A timelier, noisier daily stand-in for the same inflation regime as T10YIE/CPIAUCSL." }
    ]
  },

  // ---------------- Target ----------------
  {
    id: "Gold_Price", label: "Gold_Price / Gold_Close (target)", shortLabel: "Gold Price",
    category: "target", kind: "target", tier: "target", direction: null, score: null, scoreType: null,
    summary: "The forecast target. Structurally a collider of at least two largely independent shocks.",
    mechanism: "Monetary tightening (via DFII10/DXY) pulls gold down; a risk-off shock pulls it up. Filtering your data to 'days Gold moved >2%' to study the relationship between rate surprises and geopolitical events can manufacture a spurious correlation between the two that doesn't exist in the full data — classic collider / selection bias.",
    connections: [
      { to: "lat_mon", dir: "from", junction: "collider", note: "Independent driver #1 — pulls gold down when policy tightens (via DFII10/DXY)." },
      { to: "lat_risk", dir: "from", junction: "collider", note: "Independent driver #2 — pulls gold up in stress episodes. This is the flagship collider example: don't condition on big Gold-move days to study the relationship between these two shocks." },
      { to: "DFII10", dir: "from", junction: "direct", note: "The single strongest, most literature-supported driver." },
      { to: "DXY", dir: "from", junction: "chain", note: "Mechanical inverse pricing relationship, transmitted from the policy regime." },
      { to: "Silver", dir: "peer", junction: "fork", note: "Correlated via the shared Risk-Off driver." },
      { to: "SP500", dir: "peer", junction: "fork", note: "The common inverse relationship is fork-mediated, not direct causation." },
      { to: "Volatility", dir: "to", junction: "autoregressive", note: "Own-price history feeds every technical indicator — must be lagged to avoid leakage." }
    ]
  },

  // ---------------- Gold technical / autoregressive ----------------
  {
    id: "Gold_OHLV", label: "Gold_Open / Gold_High / Gold_Low / Gold_Volume", shortLabel: "Gold OHLV",
    category: "technical", kind: "observed", tier: "technical", direction: "mixed", score: 55, scoreType: "technical",
    summary: "Gold's own same-day Open, High, Low, and traded Volume (Gold_Open, Gold_High, Gold_Low, Gold_Volume).",
    mechanism: "High−Low range is a same-day realized-volatility proxy; Volume can indicate conviction behind a move. Both are only usable if lagged — same-day values aren't known at a genuine forecast origin.",
    connections: [
      { to: "Gold_Price", dir: "peer", junction: "autoregressive", note: "Co-determined on the same trading day — contemporaneous, not predictive, unless lagged by at least one day." }
    ]
  },
  {
    id: "daily_return", label: "daily_return", shortLabel: "daily_return",
    category: "technical", kind: "observed", tier: "technical", direction: "mixed", score: 72, scoreType: "technical",
    summary: "Day-over-day percentage change in Gold_Price.",
    mechanism: "The basic building block for momentum and volatility features; noisy at daily frequency on its own.",
    connections: [ { to: "Gold_Price", dir: "from", junction: "autoregressive", note: "Simple day-over-day percentage change in Gold_Price." } ]
  },
  {
    id: "Volatility", label: "volatility", shortLabel: "volatility",
    category: "technical", kind: "observed", tier: "technical", direction: "mixed", score: 78, scoreType: "technical",
    summary: "Rolling standard deviation of daily_return — a volatility-regime indicator.",
    mechanism: "Captures clustering (calm vs. turbulent regimes) and connects naturally to GARCH-family modeling; volatility regimes and risk-off shocks tend to coincide.",
    connections: [
      { to: "Gold_Price", dir: "from", junction: "autoregressive", note: "Rolling standard deviation of the return series." },
      { to: "lat_risk", dir: "peer", junction: "fork", note: "Volatility regimes tend to coincide with risk-off shocks, though it is computed purely from Gold's own returns." }
    ]
  },
  {
    id: "MA7", label: "ma_7", shortLabel: "ma_7",
    category: "technical", kind: "observed", tier: "technical", direction: "mixed", score: 68, scoreType: "technical",
    summary: "7-day moving average of Gold_Price.",
    mechanism: "Short window — reacts quickly to recent price moves (fast trend signal).",
    connections: [ { to: "Gold_Price", dir: "from", junction: "autoregressive", note: "A smoothed transform of Gold_Price's own recent history." } ]
  },
  {
    id: "MA30", label: "ma_30", shortLabel: "ma_30",
    category: "technical", kind: "observed", tier: "technical", direction: "mixed", score: 66, scoreType: "technical",
    summary: "30-day moving average of Gold_Price.",
    mechanism: "Medium window — the classic 'monthly trend' anchor; the gap between ma_7 and ma_30 is a common momentum signal.",
    connections: [ { to: "Gold_Price", dir: "from", junction: "autoregressive", note: "A smoothed transform of Gold_Price's own recent history." } ]
  },
  {
    id: "MA90", label: "ma_90", shortLabel: "ma_90",
    category: "technical", kind: "observed", tier: "technical", direction: "mixed", score: 58, scoreType: "technical",
    summary: "90-day moving average of Gold_Price.",
    mechanism: "Long window — smoother and slower; acts as a mean-reversion anchor rather than a reactive signal.",
    connections: [ { to: "Gold_Price", dir: "from", junction: "autoregressive", note: "A smoothed transform of Gold_Price's own recent history." } ]
  },
  {
    id: "RSI", label: "rsi", shortLabel: "rsi",
    category: "technical", kind: "observed", tier: "technical", direction: "mixed", score: 60, scoreType: "technical",
    summary: "Relative Strength Index (0–100) — a momentum oscillator.",
    mechanism: "Classically >70 reads 'overbought' and <30 'oversold'; measures the speed and magnitude of recent price changes, not an external cause.",
    connections: [ { to: "Gold_Price", dir: "from", junction: "autoregressive", note: "Computed purely from Gold_Price's own recent up/down moves." } ]
  },
  {
    id: "MACD", label: "macd", shortLabel: "macd",
    category: "technical", kind: "observed", tier: "technical", direction: "mixed", score: 62, scoreType: "technical",
    summary: "Difference between a fast and slow EMA of Gold_Price.",
    mechanism: "A trend-momentum indicator; crossovers with macd_signal are a classic (heuristic) momentum-shift signal.",
    connections: [
      { to: "Gold_Price", dir: "from", junction: "autoregressive", note: "Built from two exponential moving averages of Gold_Price." },
      { to: "MACD_Signal", dir: "to", junction: "definitional", note: "macd_signal is an EMA of this line." }
    ]
  },
  {
    id: "MACD_Signal", label: "macd_signal", shortLabel: "macd_signal",
    category: "technical", kind: "observed", tier: "technical", direction: "mixed", score: 58, scoreType: "technical",
    summary: "An EMA (smoothed transform) of the macd line.",
    mechanism: "Exists purely to be crossed against macd for a smoother momentum-shift signal.",
    connections: [ { to: "MACD", dir: "from", junction: "definitional", note: "A smoothed transform of the macd line itself." } ]
  },
  {
    id: "BB_Upper", label: "bb_upper", shortLabel: "bb_upper",
    category: "technical", kind: "observed", tier: "technical", direction: "mixed", score: 52, scoreType: "technical",
    summary: "Bollinger upper band — moving average + k standard deviations.",
    mechanism: "Band width tracks the same volatility regime as the volatility feature; price touching the band is a classic (noisy) breakout/reversal heuristic.",
    connections: [
      { to: "Gold_Price", dir: "from", junction: "autoregressive", note: "A moving average of Gold_Price plus a multiple of its rolling standard deviation." },
      { to: "Volatility", dir: "from", junction: "definitional", note: "Band width is directly a function of the same rolling volatility." }
    ]
  },
  {
    id: "BB_Lower", label: "bb_lower", shortLabel: "bb_lower",
    category: "technical", kind: "observed", tier: "technical", direction: "mixed", score: 52, scoreType: "technical",
    summary: "Bollinger lower band — moving average − k standard deviations.",
    mechanism: "Mirrors bb_upper on the downside; the two bands together summarize the same rolling volatility.",
    connections: [
      { to: "Gold_Price", dir: "from", junction: "autoregressive", note: "A moving average of Gold_Price minus a multiple of its rolling standard deviation." },
      { to: "Volatility", dir: "from", junction: "definitional", note: "Band width is directly a function of the same rolling volatility." }
    ]
  }
];

// Convenience lookups used by feature-causality.html
const CAUSAL_NODES_BY_ID = Object.fromEntries(CAUSAL_NODES.map(n => [n.id, n]));
