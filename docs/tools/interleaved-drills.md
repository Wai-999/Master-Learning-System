# Interleaved Drill Bank

The [spaced-repetition deck](spaced-repetition-deck.md) handles long-horizon review. This page is for a different, complementary format: a **single-sitting mixed set** of problems that forces you to *choose the right tool* before applying it — the mechanism Kornell & Bjork (2008) and Rohrer & Taylor (2007) trace to "discriminative contrast." Read the full research on [Interleaving & Desirable Difficulty](../methodology/interleaving-and-desirable-difficulty.md) first if you haven't.

**Rule of sequence:** block first, interleave second. If you cannot yet do a single window-function query in isolation, drilling it mixed with three other SQL concepts will just overload working memory — that is the *undesirable*-difficulty failure mode. Interleaving pays off once each component skill works alone.

## SQL drill set — joins vs. window functions vs. aggregation vs. CTEs

Do these **in the randomized order given**, not grouped by type — that's the whole exercise. Before writing any code, first write one word naming which of the four tools the problem needs.

1. Find each customer's total lifetime spend. *(aggregation)*
2. Rank products within each category by revenue, highest first. *(window function)*
3. Build a query that first filters to orders from the last 90 days, then joins to customer region, using a named intermediate step. *(CTE)*
4. List every customer who has never placed an order. *(join — LEFT JOIN ... WHERE right side IS NULL)*
5. For each order, show the days elapsed since that customer's previous order. *(window function — LAG)*
6. Count distinct customers per region per month. *(aggregation + GROUP BY on two dimensions)*
7. Build a query with two CTEs — one computing monthly revenue, one computing monthly active users — then join them into a single revenue-per-user metric. *(CTE + join)*
8. Find the top 3 highest-value orders per customer. *(window function — ROW_NUMBER + filter)*
9. Join a transactions table to a product-category lookup table, then aggregate revenue by category. *(join + aggregation)*
10. Compute a 7-day trailing average of daily revenue. *(window function — AVG ... OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)*
11. Find customers whose total spend this month exceeds their average monthly spend over the trailing 6 months. *(CTE + window function + aggregation, combined)*
12. Return one row per customer with their first order date and last order date side by side. *(aggregation — MIN/MAX, no self-join needed)*

## pandas drill set — groupby vs. merge vs. pivot vs. reshape

1. Combine a `customers` DataFrame and an `orders` DataFrame into one table with customer name next to each order. *(merge)*
2. Compute total revenue per product. *(groupby)*
3. Turn a long-format table (`date, region, revenue`) into a wide table with one column per region. *(pivot)*
4. Stack three monthly CSVs (same columns) into a single DataFrame. *(concat, not merge — a common confusion point)*
5. Compute each product's revenue as a % of that month's total revenue. *(groupby + transform)*
6. Reshape a wide table (`region` as columns) back into long format for plotting. *(melt)*
7. Join a transactions table to a product-lookup table on `product_id`, keeping all transactions even if a product is missing from the lookup. *(merge, how='left')*
8. Build a pivot table showing average order value by region (rows) and quarter (columns), with row/column subtotals. *(pivot_table with margins=True)*
9. For each customer, compute the number of days since their previous purchase. *(groupby + shift, mirrors the SQL LAG problem above — notice the parallel)*
10. Merge two DataFrames that share a column with different names (`cust_id` vs `customer_id`). *(merge with left_on / right_on)*

## Statistics drill set — description vs. inference vs. assumption-checking

Mix these; do not do all "testing" questions back to back.

1. Compute the mean and standard deviation of a sample, then state the difference between the sample standard deviation and the standard error of the mean. *(description)*
2. Given two groups' conversion rates, decide which test applies and state its assumptions. *(inference — proportions, not means)*
3. Explain what a 95% confidence interval means without using the word "probability" incorrectly. *(inference / precise language)*
4. A distribution is heavily right-skewed with n=15. Is a t-test still appropriate? What would you check or do instead? *(assumption-checking)*
5. Two variables have a correlation of 0.82. List two non-causal explanations before considering a causal one. *(inference discipline)*
6. You ran 20 statistical tests on the same dataset and 1 came back p<0.05. How suspicious should you be, and why? *(multiple comparisons)*

## Machine learning drill set — model family selection under constraints

Before modeling, state which family you'd try first and why — the choice is the point, not just the fit call.

1. n=200, p=40, features highly correlated, need interpretable coefficients for a stakeholder report. *(regularized linear — Ridge/Lasso)*
2. n=500,000, mostly categorical features, no interpretability requirement, accuracy is everything. *(gradient boosting — XGBoost/LightGBM/CatBoost)*
3. Time series with a clear trend and yearly seasonality, need a fast baseline today. *(exponential smoothing or SARIMA, not a neural net)*
4. Need calibrated uncertainty intervals on a small (n=60) physical-sensor dataset. *(Gaussian Process or Bayesian regression)*
5. Millions of rows of multivariate financial time series with long history, nonlinear regime changes, and you have compute budget. *(LSTM/GRU or a hybrid econometric+ML stack)*
6. A single decision tree gets 71% accuracy; a random forest gets 84%. Explain why the ensemble wins using the bagging mechanism, not just "more trees = better." *(variance reduction via averaging)*

## Building your own interleaved set

A reliable recipe once you have 3-4 categories you can each do in isolation:

1. Write 3 problems per category, worded so the category isn't obvious from phrasing alone.
2. Shuffle them into one list (a coin flip or `random.shuffle` in a scratch Python cell is fine).
3. Before solving each one, write down one word for which tool/category it needs — this single step is where the interleaving benefit actually lives.
4. Solve it, check the answer, and if you mis-categorized it, that's a mistake-library entry (see [Mistake Library](../mistake-library/index.md)) — the confusion is the useful signal, not the coding error.
