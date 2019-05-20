/*
Given a positive number, write a program to check
if the number is prime or not. Prime numbers are
numbers that are only divisible by themselves and 1.

Examples of the first few prime numbers are
2, 3, 5, 7, 11 and etc.

Hint:

First work on a brute force solution.
Then see if you can optimize it
(using square root or The Sieve of Eratosthenes).


Input: 1
Output: false

Input: 4
Output: false

Input: 7
Output: true

Input: 13
Output: true

*/

// For Loop
/*const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}*/

// While Loop
/*const isPrime = (num) => {
  if (num < 2) return false;

  let i = 2;

  while (i < num) {
    if (num % i === 0) {
      return false
    }
  i++;
  }
  return true
}*/

// Recursion 
/*const isPrime = (num, i = 2) => {
  if (num === i) return true
  if (num < 2) return false
  if (num % i=== 0) return false
  return isPrime(num, i + 1)
}*/

// Jack's Solution
function isPrime(x) {
  if (x <= 1) {
    return false;
  }
  let sqrt = Math.ceil(Math.sqrt(x));
    for (let i = 2; i <= sqrt; i++) {
      if (x % i === 0) {
        return false;
      }
    }
  return true;
}

console.log(isPrime(1), false)
console.log(isPrime(4), false)
console.log(isPrime(7), true)
console.log(isPrime(13), true)

/* SOLUTION:
 
 A small but important improvement is to iterate
 only up through the square root of n.
 
 The square root is sufficient because for every number
 a which divides n evenly, there is a complement b,
 where a * b = n.

If a  > square root, then b < square root
(since square root * square root = n).

We therefore don't need a to check n's primality,
since we would have already checked with b.
*/
