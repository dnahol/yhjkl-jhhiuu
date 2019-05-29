/* Given a string, and a frequency value, n, write a program to repeat a string n number of times.
Hint: use either while loop or recursion approach to creating the repeated string.

Example:

1) Input: "app", 3
Output: "appappapp"

2) Input: "*", 5
Output: "*****"

Solution:

There are two common ways of solving this problem, which are through iteration or recursion.

Through iteration, the program uses a while loop.

In each iteration, n is decremented by one, and the string is
concatenated to a result string variable.
The while loop stops when n becomes 0.

function repeatString(str, n) {
   // your code here
   let result = '';
   if (n <= 0 ) return '';
   while(n > 0) {
    result += str;
    n--;
   }
   return result;
}

If recursion is used, concatenate the string with the return value of the
recursive call to repeatString function, when string and n-1
are passed to the argument.

Note that the recursion stops when n becomes 0 (base case).
The following implements the recursive approach and its time complexity is O(n).
*/

const repeat = (str, n) => {
  if (n < 1) return '';
  return str + repeat(str, --n)
}

console.log(repeat("app", 3))
console.log("Output: appappapp")

console.log(repeat("*", 5))
console.log("Output: *****")
