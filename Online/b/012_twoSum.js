/* Given an unsorted array of integers and a target,
check if there are two integers sum up to the target.

Example:

Input: [2, 3, -1, 9, -4, 8, 12], 10
Output: true

Explanation: Because 2 + 8 = 10 */

function twoSum(nums, target) {
  let elemSet = new Set();
  let diff = 0;

  for (let i = 0; l = nums.length, i < l; i++) {
    diff = target - nums[i];

    if (elemSet.has(diff)) {
      return true;
    }
  elemSet.add(nums[i])
  }
  return true;
}

console.log(twoSum([2, 3, -1, 9, -4, 8, 12], 10))
console.log("Output: true")

/*
The brute-force solution would be using two for loops.
The first loop is to traverse each element, say x.
The second for loop then check if there is another element
that equals to target - x. 

This approach will incur time complexity of O(n^2).

An insight is that while traversing each element, x, we know
what value we are searching for next, which is target - x,
say we call the difference y. 


What if we calculate and store y in a Set (or Object) when
traversing each element for later reference?

After all, for the elements that followed after x, if that
element appears in the set (y === element), don't we already
find what we are looking for? 


This approach is often called as one-pass (single traversal) 
hash table.

The time and space complexity is both O(n).
Note that the Set (or Object) contributes to the O(n) 
space complexity.*/
