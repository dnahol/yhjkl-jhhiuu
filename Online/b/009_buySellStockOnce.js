/* The cost of a stock on each day is given in an array,
 find the maximum profit that you can make by buying and
 selling once in those days.

Consider the given sequence of stock prices,
[102, 90, 100, 95, 94, 101, 105, 85, 99].

The maximum profit that can be earned with one buy and one
sell is 15, which is buying at 90 and selling at 105.

Note that 90 is not the lowest price, and 105 is not the
highest price.

Hint:
a) Since the prices are given in chronological order, that
means maximum price may appear before the minimum price.

Therefore it is not sufficient to just identifying those
two prices.

b) Can you implement this with O(n) time complexity and O(1)
space complexity? */

function buySell(stockPrices) {
  let minPrice = stockPrices[0]
  let todayMaxProfit = 0;
  let maxProfit = 0;

  for (let i = 0, l = stockPrices.length; i < l; i++) {
    todayMaxProfit = stockPrices[i] - minPrice;
    maxProfit = Math.max(maxProfit, todayMaxProfit)
    minPrice = Math.min(minPrice, stockPrices[i]);	  
  }
  return maxProfit	
}

console.log(buySell([102, 90, 100, 95, 94, 101, 105, 85, 99]), 15)

/*
A brute force solution uses two for loops with indices i, and j
(j is larger than i) to check for S[j] - S[i].

If S[j] - S[i] is greater than the largest difference seen so
far, update the largest difference seen so far variable.

This approach has a time complexity of O(n^2).

By traversing the elements one at a time, you may have flash
of insight.

You may notice that the maximum profit that can be made by
selling on a specific day is determined by the minimum of the
stock prices on other previous days.

Since the maximum profit corresponds to selling on some day,
the following algorithm correctly computes the maximum profit.

By iterating through S, keeping track of the minimum element
m seen thus far.

If the difference of the current element and m is greater than
the maximum profit recorded so far, update the maximum profit.

This algorithm just needs to iterate through S once, and
perform a constant amount of work per element.

Therefore, the time complexity is O(n).
Also, since there is only a number of variables used
regardless of the input size, the space complexity is O(1).*/
