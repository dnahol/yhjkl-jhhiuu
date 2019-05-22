/* Given an array of positive numbers, each element represents the maximum number of steps that can be made forward from that element towards the end of the array.

If an element is 0, it means no move can be done through that element.

If an element is 3, the options to move forward are 1, 2, or 3 steps.

Write a function to return whether it is possible to advance to the last index starting from the beginning of the array.

Hint: can you do it in linear time complexity?



Example:

1) Input: [2,3,0,1,2,0,1]
Output: true

Explanation: take one step from input[0] to input[1],
take three steps from input[1] to input[4], take two
steps from input[4] to input[6]

2) Input: [1,3,0,0,1,0,0]
Output: false
*/

function jumpToEnd(nums) {
  let soFar = 0;
  let i = 0;
  lastIndex = nums.length - 1;

  while(i <= soFar && (soFar < lastIndex)) {
    soFar = Math.max(soFar, nums[i] + i);
    i += 1;
  }
  return soFar >= lastIndex;
}

console.log(jumpToEnd([2, 3, 0, 1, 2, 0, 1]), true)
console.log(jumpToEnd([1, 3, 0, 0, 1, 0, 0]), false)
console.log(jumpToEnd([2, 4, 1, 1, 0, 2, 3]), true)
console.log(jumpToEnd([3, 3, 1, 0, 2, 0, 1]), true)

/*
It is natural to try advancing as far as possible in each step.
This approach does not always work, because it potentially
skips indices containing large entries.

For example, if A = [2,4,1,1,0,2,3], then it advances to
index 2, which contains a 1, which leads to index3,
after which it cannot progress.

However, advancing to index 1,
which contains a 4 allows us proceed to index 5,
from which we can advance to index 6.

The above example suggests iterating through all entries in A.

As we iterate through the array, we track the furthest
index we know we can advance to. The furthest we can advance
from index i is i + A[i]. 

If, for some i before the end of the array, i is the
furthest index that we have demonstrated that we can
advance to, we cannot reach the last index.

Otherwise, we reach the end.

For example, if A = [3,3,1,0,2,0,1], we iteratively compute
the furthest we can advance to as 0,3,4,4,4,6,6,7,
which reaches the last index, 6. 

If A = [3,2,0,0,2,0,1], we iteratively update the
furthest we can advance to as 0,3,3,3,3, after which we
cannot advance, so it is not possible to reach the last index.

The code below implements this algorithm.

Note that it is robust with respect to negative entries,
since we track the maximum of how far we proved we can
advance to and i + A[i].

The time complexity is O(n) and the additional space
complexity (beyond what is used for A) is three integer
variables, i.e., O(1).*/
