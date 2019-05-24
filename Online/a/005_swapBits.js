/* Given a number, x, and 2 bit positions, i and j
 * to represent the bits we want to swap, return the
 * result of the swapped number.

Note that bit position 0 starts from the least
significant (rightmost) bit.

Example:

Input:
x = 47 (binary is 101111)

i = 3,

j = 4

Output: 55 (binary is 110111)
*/

function swapBits(x, i, j) {
  let bitMask = 0;

// if the value at bit positions i and j differ
  if (((x >> i) & 1) !== ((x >> j) & 1)) {
    bitMask = 1 << i | 1 << j;
    x ^= bitMask;
  }
  return x;
}

console.log(swapBits(47, 3, 4), 55)
// 110111

/*
A brute-force solution would be to use bitmasks to
extract the ith and jth bits, saving them to local variables.
Consequently, write the saved jth bit to index i and the
saved ith bit to index j, using a combination of bitmasks
and bitwise operations.

To do better, an insight is that since a bit can only take
two values. Particularly, we first test if the bits to be
swapped differ. If they do not, no operations are needed
as the swap does not change the number. If the bits are
different, we take advantage of the fact that they store
only two values, 0 or 1, therefore we simply flip their
existing value, which is the same as swapping two bits.

The following implements the above algorithm and the
time complexity is O(1), as the operation always deal
with two bits only.
*/
