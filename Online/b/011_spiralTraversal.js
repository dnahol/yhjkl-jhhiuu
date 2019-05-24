/*When traversing 2D array, we usually visit each element 
row by row, or column by column.

In this problem, we will traverse the 2D array in spiral order.
For example, given the following array:

[
[10, 12, 14],
[16, 18, 20],
[22, 24, 26]
]

Its spiral ordering is [10, 12, 14, 20, 26, 24, 22, 16, 18].
Write a program which takes an N x N 2D array and returns 
the spiral ordering of the array. */

function spiralTraversal(arr, result = []) {
  if (arr.length === 0) {
    return result;
  }
 
  // add the first row to result
  result = result.concat(arr.shift())

  // add the last element of each row
  arr.forEach(function(rightEnd) {
    result.push(rightEnd.pop())
  })

  // add the last row in reverse order
  if (arr.length === 0) return result;
  result = result.concat(arr.pop().reverse())

  let tmp = [];

  // add the first element in each row
  arr.forEach(function(leftEnd) {
    tmp.push(leftEnd.shift());
  });
  result = result.concat(tmp.reverse());

  return spiralTraversal(arr, result)
}

const arr1 = [
[10, 12, 14],
[16, 18, 20],
[22, 24, 26]
]

console.log(spiralTraversal(arr1))
console.log("Output: [10, 12, 14, 20, 26, 24, 22, 16, 18]")
