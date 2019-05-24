/*
Given two positive numbers, x and y, write a program
to divide x by y and return the quotient (discard the remainder if there is any).

The program should not use any multiplication, division and mod operator.

Example:
1) Input : a = 4, b = 2
    Output : 2

2) Input : a = 12, b = 3
    Output :  4

3) Input : a = 13, b = 2
    Output :  6
*/

function divide(x, y) {
  // calculate sign of divisor
  let sign = !!((x < 0) ^ (y < 0)) ? -1 : 1;

  // remove sign of operand
  x = Math.abs(x);
  y = Math.abs(y);

  // initialize the quotient
  let quotient = 0;
  let origY = y;
  let i = 0;

  // this is to reduce the x (divident) by y (divisor)
  while(x > (y << i)) {
    x = x - (y << i);
    quotient = quotient + (1 << i);
    i++;
  }

  // deduct the remaining x value one at a time
  while (x >= origY) {
    x = x - origY;
    quotient++;
  }
  return sign * quotient;
}

console.log(divide(4, 2), 2)
console.log(divide(12, 3), 4)
console.log(divide(13, 2), 6)

/* SOLUTION

A brute-force approach is to iteratively subtract y
(dividend) from x (divisor) until when y becomes less than x.
The y then becomes the remainder, and the number of times

subtraction is applied becomes the quotient. The complexity
of this brute-force approach is very high. If x = 2^31 - 1,
and y = 1, the program takes 2^31 - 1 iterations.

A more efficient approach is to get more done in each
iteration through bit manipulation. The divisor and
dividend can be written as dividend = quotient * divisor + remainder.

As every number can be represented in base 2(0 or 1),
represent the quotient in binary form by using shift
operator as given below :

1) Determine the most significant bit in the quotient.
This can easily be calculated by iterating on the
bit position i from 31 to 1.

2) Find the first bit for which divisor << i is less than
dividend and keep updating the ith bit position for which it is true.

3) Add the result in temp variable for checking the
next position such that (temp + (divisor << i) ) is less than dividend.

4) Return the final answer of quotient after updating with
corresponding sign. Assuming bit shifting, addition and
subtraction takes O(1) time, the time complexity is O(n).
*/
