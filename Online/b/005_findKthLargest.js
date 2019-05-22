/*Find the kth largest element in an unsorted array.

Note that it is the kth largest element in the sorted order,
not the kth distinct element.

You may assume k is always valid, 1 ≤ k ≤ array's length.

Example:
1) Input: arr = [3,2,1,5,6,4], k = 2
Output: 5

2) Input: arr = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

*/

function findKthLargest(arr, k) {
  
  if (arr.length === 0) {
    return -1;
  }

  let pivot = Math.floor(arr.length / 2);
  let lowerArr = []
  let equalArr = []
  let upperArr = []

  arr.forEach(function(item) {
    if (item < arr[pivot]) {
      lowerArr.push(item)
    } else if (item > arr[pivot]) {
      upperArr.push(item)
    } else {
      equalArr.push(item)
    }
  });

  if (k <= upperArr.length) {
    return findKthLargest(upperArr, k);
  } else if ((k - upperArr.length) <= equalArr.length) {
    return equalArr[0];
  } else {
    return findKthLargest(lowerArr, k - upperArr.length - equalArr.length);
  }
}

console.log(findKthLargest([3,2,1,5,6,4], 2), 5)
// Output: 5

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4), 4)
// Output: 4

/*
A simple solution is to sort the given array first, 
then return the element at index k - 1.

The time complexity is then O(n log n), i.e the time complexity to sort the array.

Notice that we are interested in finding the kth largest
element and we may not required to sort every element
to get to the solution.

This is the time to do quick sort.

The idea is to not to do complete quicksort but to stop
at the point where pivot itself is k'th largest element.

In simplicity, quicksort picks a pivot
(usually the middle element), 
and compares corresponding elements against it and put the
element into one of three groups: smaller than pivot, 
equal to pivot, and larger than pivot.

From here, find out in which array the kth largest element
is located in and recur for one of them. If kth is:

upperArr.length < k <= (equalArr.length + upperArr.length),
then we have found kth largest element in the equalArr.

The following implementation has the worst case time complexity 
of O(n^2) but it has O(n) average time complexity.
*/
