/* Write a program to reverse digits of a number.
Note that the sign bit is preserved.
Example:

1) Input: 13
Output: 31

2) Input: -109
Output: -901 */

function reverseDigits(x) {
  let result = 0;
  let absX = Math.abs(x)

  while(absX) {
    result = result * 10 + absX % 10;
    absX = Math.floor(absX / 10);
  }

  if (x < 0) {
    return -1 * result;
  } else {
    return result;
  }
}

console.log(reverseDigits(13), 31)
console.log(reverseDigits(-109), -901)

/* A brute-force approach is to convert the number to a
 string, traverse it backward to build the reversed string,
 and convert it back to number. An optimized approach is to
 skip converting the number to a string. Consider the input 456
 The first digit of the result is 6, which can extract it
 through taking the input mod 10. The remaining of the digits
 to process is then 456 / 10 = 45. By iteratively applying
 these, the result and input are updated as 65 and 4, and
 then 654.

Approach:

(1) Initialize result = 0

(2) Make the input x, absolute and save it in a
new variable, absX

(3) Loop while num > 0

  (a) Multiply result by 10 and add absX mod 10 (remainder)

  (b) Update absX by discarding the least significant bit

(4) Return the result with the sign bit preserved

The time complexity is O(n), where n is the
number of digits in x.
*/
