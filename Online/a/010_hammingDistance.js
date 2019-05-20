/* Write a program to find the hamming distance of two
strings of equal length.

Hamming distance between two strings is the number of
positions at which the corresponding character differ.

Example:
1) Input : str1 = "car", str2 = "cab"
Output : 1

2) Input : str1 = "100000", str2 = "100101"
Output : 2

Explanation: character at position 3 and 5 mismatch */

// Brute Force
/*function hammingDistance(str1, str2) {
  let counter = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      counter++;
    }
  }
  return counter;
}*/

// Jack's Solution
function hammingDistance(str1, str2) {
  let counter = 0;
  let length = str1.length;
  let i = 0;

  while(i < length) {
    if (str1[i] !== str2[i]) {
      counter++;
    }
    i++;
  }
  return counter;
}

// Recursion
/*const hammingDistance = (str1, str2, counter = 0, i = 0) => {
  if (i === str1.length) return counter;
  if (str1[i] !== str2[i]) {counter++;}
  return hammingDistance(str1, str2, counter, i + 1);
} */

console.log(hammingDistance("car", "cab"), 1)
console.log(hammingDistance("100000", "100101"), 2)

/*
A simple approach is to traverse and compare the two
strings character by character. When characters don't
match at a corresponding position, increment the counter
that counts the mismatch (hamming distance). Since the
comparison operation is constant, the time complexity is O(n).*/
