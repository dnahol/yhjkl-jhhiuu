// RECURSION AND DYNAMIC PROGRAMMING

// https://docs.google.com/document/d/1qXt3gdZ4CpAFsw2PrOyVRNBAM5ZhpQAS54gok483jjk/edit 
// https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/events/261933261/

/******************************************************************************************
** You can work on these questions in your local environment.
** Once completed, please copy and paste your solution to the bottom of this page.
**
** We will do code review and discussion. Feel free to raise any question you
** have throughout the session.
**
*******************************************************************************************
** Feedback:
** Kindly leave your feedback in this link - feedback page. Your feedback will help in promoting ** the group :)
** Link: https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/about/comments/?op=all
**********************************************************************************************

************************
Introduction
************************
The purpose of applying dynamic programming is to avoid re-calculation of duplicate work.
These usually happen to subproblems that overlap.
The following describes the two popular forms of dynamic programming.

➤ Top-down dynamic programming (memoization)
In solving a problem using the top-down approach, subproblems are computed and some of
the work may have been repeated. To avoid re-computations, memoization keeps a record
of the results for computed subproblems. Generally, the results are saved in a hash object or array.


➤ Bottom-up dynamic programming
Unlike the recursive algorithm, the smallest size problem is solved first using the bottom-up approach.

The results are then used for building larger size problems.

This approach avoids recursion, and it keeps a record of the results for the solved problems in a
one-dimensional or multidimensional array. Another term that best describes this approach is tabulation (table-filling).

Like all things that avoid recursion, the function can avoid building up the call stack and therefore saving memory cost.
******************
* Questions
*******************






1)A child is running up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time.

Implement a method to count how many possible ways the child can run up the stairs.
Can you come up with three approaches -

recursion (brute force), 
Recursion - function countWays(n){...}

top-down dynamic programming (memoization),
Top-down - function countWays(n, cache) {...}

bottom-up dynamic programming?
Bottom-up - function countWays(n) {...}
*/

// Good path when n = 0


// a) Recursion - function countWays(n){...}
/*function countWays (n) {

}*/
var countWays1 = function(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return countWays1(n - 1) + countWays1(n - 2) + countWays1(n - 3)
}

console.log(countWays1(0))
console.log(countWays1(1))
console.log(countWays1(2))
console.log(countWays1(3))
console.log(countWays1(4))
console.log(countWays1(5))
console.log(countWays1(6))
console.log(countWays1(7))
console.log(countWays1(8))
console.log(countWays1(9))
console.log(countWays1(10))

// b) Top-down - function countWays(n, cache) {...}
/*const countWays = (n, cache) => {
}*/

// c) Bottom-up - function countWays(n) {...}

function countWays3(n) {
  if (n === 0) return 1;

  var a = 0;
  var b = 0;
  var c = 0;

  if (n-1 >= 0) a = countWays3(n - 1)
  if (n-2 >= 0) b = countWays3(n - 2)
  if (n-3 >= 0) c = countWays3(n - 3)

  return a + b + c
}

console.log(" ")
console.log(countWays3(0))
console.log(countWays3(1))
console.log(countWays3(2))
console.log(countWays3(3))
console.log(countWays3(4))
console.log(countWays3(5))
console.log(countWays3(6))
console.log(countWays3(7))
console.log(countWays3(8))
console.log(countWays3(9))
console.log(countWays3(10))


// Cracking the Coding Interview 

// Question 8.1 

// Triple Step:
// A child is running up a staircase with n steps and can hop
// either 1 step, 2 steps, or 3 steps at a time.

// Implement a method to count how many possible ways the child can run up the stairs.



















/*
2) Given a rod of length n inches and an array of prices that contains prices of all pieces of size smaller than n.
Determine the maximum value obtainable by cutting up the rod and selling the pieces.

For example, if length of the rod is 8 and the values of different pieces are given as following,
then the maximum obtainable value is 22 (by cutting in two pieces of lengths 2 and 6)

length   | 1   2   3   4   5   6   7   8  
--------------------------------------------
price    | 1   5   8   9  10  17  17  20

Can you come up with three approaches - recursion (brute force), top-down dynamic 
programming (memoization), bottom-up dynamic programming?


[ 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ]

8 individual pieces or whole rod => $20
1, 7 => $1 + $17 => $18
2, 6 => $5 + $17 => $22 max profit
3, 5
4, 4
5, 3 ...
*/

// Recursion/Memomization/Top Down



// Looping/Bottom Up 



// max value is 22
// two pieces at length 2 and 6






// 15.1 Intro to algorithms MIT


const prices = [1, 5, 8, 9, 10, 17, 17, 20];

// Attempt 1
function cutRod1(array, n) {
  if (n === 0) return 0
  let maxProfit = -Infinity 
  for (let i = 1; i <= n; i++) {
    maxProfit = Math.max(maxProfit, array[i -1] + cutRod1(array, n - i))
  }
  return maxProfit
}

console.log(cutRod1(prices, 0))
console.log("=========")
console.log(cutRod1(prices, 8), 22)
// 22

















/*
3) There are n houses built in a line, each of which contains some value in it.
A thief is going to steal the maximal value in these houses, but he cannot steal in two adjacent houses because the owner
of a stolen house will tell his two neighbors on the left and right side. What is the maximal stolen value?

For example, if there are four houses with values [6, 1, 2, 7], the maximal stolen value is 13 when the first and fourth
houses are stolen.

Can you come up with three approaches - recursion (brute force),
top-down dynamic programming (memoization), bottom-up dynamic programming?

recursion (brute force)

function getMax(n, values) {
   ...
}

values = [6, 1, 2, 7];
getMax(values.length - 1, values);


b)   top-down dynamic programming (hint: use recursion)
  function getMax(n, values, cache) {
  ...
}

values = [6, 1, 2, 7];
getMax(values.length - 1, values, {});

c) bottom-up dynamic programming (hint: use iteration, i.e for loop)
  function getMax(values) {
          ...
}

values = [6, 1, 2, 7];
getMax(values); */

const values = [6, 1, 2, 7];

function getMax(prices) {
  if (prices.length === 0) return 0
  if (prices.length === 1) return prices[0]
  if (prices.length === 2) return Math.max(prices[0], prices[1])

  const dp = []

  dp[0] = prices[0]
  dp[1] = Math.max(prices[0], prices[1])
 
  for (let i = 2; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + prices[i])
  }
  return dp[prices.length - 1];
}

console.log(getMax(values));





/*
**************
* Solution (copy and paste your solution here with your name on it)
**************
*/


// JACK'S SOLUTIONS

/*
// #1

// a)
function countWays(n) {
  var countWaysUtil = function(n) {

    if (n === 0) return 1;
    if (n < 0) return 0;

    return countWaysUtil(n - 1) + countWayUtil(n - 2) + countWaysUtil(n - 3)
  }
}

// b
function countWays(n, memo) {
  memo = memo || {}

  if (n === 0) return 1;
  if (n < 0) return 0;
  if (!memo.hasOwnProperty(n)) {
    memo[n] = countWays(n - 1, memo) + countWays(n - 2, memo) + countWays(n - 3, memo)
  }
  return memo[n]
}

// c
function countWays(nStairs, step) {
  var result = [];

  result[0] = 1;
  result[1] = 1;

  for (let i = 2; i <= nStairs; i++) {
    result[i] = 0;
    if (i >= 1) { result[i] += result[i - 1]}
    if (i >= 2) { result[i] += result[i - 2]}
    if (i >= 3) { result[i] += result[i - 3]}
  }
  return result[nStairs]
}

console.log(countWays(5, 3), 13); 
// 13


*/


//
// OTHER SOLUTIONS


/*
Henry
(a)
if (n<=0) 
     return 0;
else if (n==1)
    return 1;
else
    return f(n-1)+f(n-2)+f(n-3)

(b) 
if (n<0) 
   error
else if (n==1)
     return 1;
else if (n==2)
     return 1;
else
{
     cache[0]=0;
     cache[1]=1;
     cache[2]=1;
     for (int i=3; i<n; i++) {
              cache[i]=cache[i-1]+cache[i-2]+cache[i-3];
     }
    return cache[n];
}

Natasha
private static int f(int n) {
    if (n < 0) {
      return 0;
    }
    if (n == 0) {
      return 1;
    }
    return f(n - 1) + f(n - 2) + f(n - 3);
  }
Memo:
private static int ountWays(int n) {
    int[] memo = new int[n + 1];
    int res = f(n, memo);
    return res;
  }


  private static int f(int n, int[] memo) {
    if (n < 0) {
      return 0;
    }
    if (n == 0) {
      memo[n] = 1;
      return memo[n];
    }
    if (memo[n] > 0) {
      return memo[n];
    }
    memo[n] = f(n - 1, memo) + f(n - 2, memo) + f(n - 3, memo);
    return memo[n];
  }
Bottom-up:
  private static int ountWaysDP(int n) {
    int[] table = new int[n + 1];
    table[0] = 1;
    table[1] = 1;
    table[2] = 2;
    int sum = table[0] + table[1] + table[2];
    for (int i = 3; i <= n; i++) {
      table[i] = sum;
      sum -= table[i - 3];
      sum += table[i];
    }
    return table[n];
  }

Sunny
public static int recursion(int n) {
        if (n < 0) return 0;
        
        if (n == 0) return 1;
        if (n == 1) return 1;

        return recursion(n - 1) + recursion(n - 2) + recursion(n - 3);
    }
   
    
    public static int topDown(int n) {
        Map<Integer, Integer> cache = new HashMap<>();
        cache.put(0, 1);
        cache.put(1, 1);
        return topDown(n, cache);
    }
    
    public static int topDown(int n, Map<Integer, Integer> cache) {
        if (n < 0) return 0;
        if (n <= 1) return cache.get(n); 
        
        int ans = topDown(n - 1, cache) + topDown(n - 2, cache) + topDown(n - 3, cache);
        cache.put(n, ans);
        
        return cache.get(n);
    }
    


Aysun 
let countWays = function(n) {
 if (n < 0) {
   return 0;
 }
 if (n === 0) {
   return 1;
 }
 return ((countWays(n -1) +
         countWays(n - 2) +
         countWays(n - 3)));
}

let countWays = function(n) {
 let cache = {};
 if (n < 0) {
   return 0;
 }
 if (n === 0) {
   return 1;
 }
 if (!cache[n]) {
   cache[n] = countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
 }
 return cache[n];
}

*/
