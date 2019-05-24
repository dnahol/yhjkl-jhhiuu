/* Given an array of numbers, write a function to move
all 0's to the end of it while maintaining the
relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

function moveZeros(nums) {
  let nonZeroWriteIndex = 0;
  let l = nums.length;

// traverse the array and check the element
  for (let i = 0; i < l; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroWriteIndex] = nums[i];
      nonZeroWriteIndex++;
    }
  }

// At this point, all non-zero elements have been
// shifted to the head of the array

  while (nonZeroWriteIndex < l) {
    nums[nonZeroWriteIndex] = 0;
    nonZeroWriteIndex++;
  }
  return nums;
}

console.log(moveZeros([0,1,0,3,12]), [1,3,12,0,0])

/*
We can use two pointers to traverse the given array.
The first pointer is used as the write index for non
zero element, and the second pointer is used as the
read pointer. For every non-zero element nums[i], put
the element at  num[nonZeroWriteIndex] and increment
'nonZeroWriteIndex'.

After completing the nums array traversal, all non-zero
elements have already been shifted to the head of the
array and 'nonZeroWriteIndex' is pointed at index of
the first 0.As such, run a loop starting from
'nonZeroWriteIndex' to make all elements 0 till
end of the array.
*/
