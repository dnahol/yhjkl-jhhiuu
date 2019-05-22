/* Pascal’s triangle is a triangular array of the binomial
coefficients.

Write a program that takes a number, n that represents the
number of triangle levels and build out the Pascal's triangle.

The following is a Pascal's triangle example given n = 5:

// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

Return the triangle in an array.

Example:
Input: 5

Output: [
[1],
[1,1],
[1,2,1],
[1,3,3,1],
[1,4,6,4,1]
] */

function pascal(n) {
  let result = [[1], [1,1]];
  let currentLevel = []

  if (n < 0) return []
  if (n === 0) return [[1]]
  if (n === 1) return result

  for (let i = 2; i < n; i++) {
    currentLevel = [1]

    for (let j = 1, m = i; j < m; j++) {
      currentLevel[j] = result[i - 1][j] + result[i - 1][j - 1]
    }	
  currentLevel.push(1)
  result.push(currentLevel);	  
  }	
  return result;
}

console.log(pascal(5))
console.log("------")
console.log(pascal(10))
console.log("------")
console.log(pascal(15))

/*
This problem can be solved by formulating an equation
based on the given fact.

These facts are:

- The jth entry in the ith row is 1 if j = 0 or j = i

- Otherwise, the jth entry is the sum of the (j-1)th
and jth entries in the (i-1)th row.

For illustration:

R0:            [1]

R1:            [1, 1]

R3:        [1,R1[0] + R1[1] = 2, 1]

4th row: [1, R2[0] + R2[1] = 3, R2[1] + R2[2] = 3, 1]

Since each element takes O(1) time to compute, the time
complexity is O(1 + 2 + 3 + ... + n) = O(n(n+1)/2) = O(n^2).

The space complexity is also O(n^2). */
