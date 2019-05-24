/* In a daily share trading, a trader buys shares in the 
morning and sells it on the same day.

A trade transaction is said to be completed when the
stock is bought and sold at a later time.

Let's say the trader is only allowed to have two transactions
a day, where the second transaction can only start when the
first transaction has completed.

In other words, the two trades transactions invoke these
actions - buy -> sell -> buy -> sell.

Given a sequence of stock prices, find out the maximum profit
that a stock trader could have made.

Example:

1) Input: [90, 100, 81, 85, 99, 110, 70, 80]
Output: 39

Explanation: bought at 90, sold at 100 (profit is 10), then
bought again at 81, and sold at 110 (profit is 29). Total is 39.

2) Input: [2, 30, 15, 10, 8, 25, 80]
Output: 100

Explanation: bought at 2, sold at 30 (profit is 28), then
bought again at 8, and sold at 80 (profit is 72). Total is 100.
*/

function buyandSell(

1) Input: [90, 100, 81, 85, 99, 110, 70, 80]
Output: 39

2) Input: [2, 30, 15, 10, 8, 25, 80]
Output: 100
/* Solution:

In the buy sell stock once problem, we keep track of the
minimum price and maximum profit as we are traversing the
today price and calculate today (maximum) profit, which is
stockPrice[i] minus minimum price). 

Note that we traverse from left to right.

As for this question it is possible to have 2nd buy and sell
again after the 1st buy and sell, we want to compute max profit
that that is the combine of 1st and 2nd buy and sell actions
max profits.

We already know how to calculate the profit of 1st buy and sell.

To calculate the max profit of the 2nd buy and sell, we simply 
traverse the prices starting from the right, and moves towards 
the left.

We keep track of the maximum price seen so far in the 
traversal, and compute the possible maximum profit given the
particular day stock price, which is maxPrice minus 
stockPrices[i]. 

If the maximum profit is smaller than the day after maximum 
profit, we pick the latter one. 

The maximum profits array for the 2nd buy and sell action
should look like this, where the profits are incrementing 
from right to left.

profits = [36, 36, 24, 23, 21, 10, 0]

With this, we can use it to calculate the maximum profit for 
the 1st buy and sell action. 

Similarly, we traverse from left to right, keep track of the 
minimum price and compute the maximum profit for each day. 

This time, the maximum profit for each day is an equation of, 
profits[i] + stockPrices[i] - minPrice comparing to 
profits[i - 1] (the day before), whichever is larger. 

Once computed, the profits array should look like this, where 
the profits are incrementing from left to right.

profits = [36, 38, 42, 42, 50, 55, 60]

Note that the last element is the maximum profit that can be 
made from 2 sets of buy and sell actions.

The time complexity for this algorithm is O(2n) or O(n) since 
we are performing 2 traversals. 

Also, the space complexity is O(n) as we are using an extra 
array to keep track of the maximum profit achievable for each 
day.*/
