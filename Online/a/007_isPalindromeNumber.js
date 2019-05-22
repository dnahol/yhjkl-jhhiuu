/* Write a program to determine if a number is
a palindromic string.

For example, the program returns true for these inputs:
1, 2, 9, 22, 242, 1331, 45677654.

The output is false for these inputs:
- 1, 17, 104,91199119.
*/

function isPalindromeNumber(x) {
  if (x <= 0) {
    return x === 0;
  }

  let numberOfDigits = Math.floor(Math.log10(x)) + 1;
  let msbMask = Math.pow(10, (numberOfDigits - 1));
  let range = Math.floor(numberOfDigits / 2);
  let i = 0;

  for ( ; i < range; i++) {
    if (Math.floor(x / msbMask) != (x % 10)) {
      return false;
    }
    x %= msbMask;
    x = Math.floor(x / 100);
    msbMask = Math.floor(msbMask / 100);
  }
  return true;
}

console.log(isPalindromeNumber([1, 2, 9, 22, 242, 1331, 45677654]), true); 
// true

console.log(isPalindromeNumber([1, 17, 104, 91199119]), false);
// false

/* If the input number is negative, it cannot be palindromic
since it starts with a negative sign, -. A simple method
for this problem is to first reverse digits of x, then
compare the reverse of x with x. If both are equal, then
the input number is palindromic. In this case, both time
and space complexity are O(n).

A space efficient approach is by extracting the digits
from the input. The idea is to comparing the most and
least significant digits. The number of digits, n, in
the input's string representation is the log (base 10)
of the input value, x. To be precise, 
n = Math.floor(Math.log10(x)) + 1. Therefore, the least
significant digit is x mod 10, and the most significant
digit is x / (10^(n-1)).

Using a while loop in the program below, we iteratively
compare the most and least significant digits, and then
remove them from both ends. As an example, consider the
input 125521. We would compare the most and least
significant digits, 1 and 1. Since they are equal,
we discard them and x is updated to 2552. Again, 2 and
and 2 are the same. x is updated to 55. 5 and 5 are
the same, and we return true.

Now the time and space complexity are both O(n).
*/
