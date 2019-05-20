/* Write a function to count the number of bits
that are set to 1 given a binary representation of a number.

Input: 5

Output: 2

Explanation: because 5 in binary is 0101,
and there are 2 bits that are set.
*/

/*
function countBits(x) {
  return x >> 1
}*/

// Jack's Solution
function countBits(x) {
  let counter = 0

  while(x > 0) {
    if (x & 1) {
      counter++;
    }
    x = x >> 1
  }
  return counter
}

console.log(countBits(5), 2) 
// Output: 2

/* SOLUTION:

The following implementation tests bits one at a time
starting with the least significant bit. It illustrates shifting and masking.

In each while loop iteration, we perform O(1) bit operation.
Therefore, the time complexity is O(n), where n is the number of

bits needed to represent the number. As an example,
3 bits are required to represent 11, which is 111 in binary.
*/
