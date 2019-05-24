/*Write a function which takes in a sorted array of numbers,
and updates it so that all duplicates have been removed, with
the remaining elements shifted left to fill the emptied indices. 
There are no requirements on the values stored beyond the last 
valid element.
The function shall return the number of valid (unique) elements.

For example, the array [3, 6, 6, 6, 9, 10, 10, 15, 16, 16] 
can be proccessed and stored as 
[3, 6, 9, 10, 15, 16, 10, 15, 16, 16], or 
[3, 6, 9, 10, 15, 16, 0, 0, 0, 0]. 

Remember, the values beyond the last valid element can be 
stored in other ways. In both outcomes, 6 
(number of valid elements) is return.

Hint: Can you implement it with O(n) time complexity 
and O(1) space complexity?

Example:
1) Input: [1,1,2,3,4,5,5]
Output: 5

2) Input: [5,6,7,11,11,11,20,21,21,21,22,23]
Output: 8
*/

function deleteDuplicate(nums) {
  if (nums.length === 0) return 0;

  let writeIndex = 1;

  for (let i = 0, l = nums.length; i < l; i++) {
    if (nums[writeIndex - 1] != nums[i]) {
      nums[writeIndex] = nums[i];
      writeIndex += 1;	    
    }
  }	
  return writeIndex;
}

console.log(deleteDuplicate([1,1,2,3,4,5,5]))
console.log("Output: 5")

console.log(deleteDuplicate([5,6,7,11,11,11,20,21,21,21,22,23]))
console.log("Output: 8")

/*
A simple approach is by traversing the array and store the elements in a set. A set will store only unique elements. At the

end of the traversal, return the size of the set. Since we are traversing linearly and the operation is constant, the time

complexity is O(n). However, the algorithm uses additional memory, which is a set, so the space complexity is O(n).

To improve space complexity to constant time, i.e O(1), we can traverse the array linearly with two indices, one for write and another one for read. The element at the write index gets updated accordingly when unique elements are encountered. At the end, the write index tells you how many unique elements are in the array. Simply return the write index.*/
