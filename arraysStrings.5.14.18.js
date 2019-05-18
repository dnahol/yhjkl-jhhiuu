******************************************************************************************
** You can work on these questions in your local environment
** and copy and paste your solution to the bottom of this page.
**
** We will do code review and discussion. Feel free to raise any questions you
** have throughout the session.
**
** Also, take a look at our community Facebook page - https://www.facebook.com/jssquareio/
**
******************************************************************************************


1)
// --- Search in Rotated Array
// Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. // You may assume that the array was originally sorted in increasing order.
// EXAMPLE
// Input: find 5 in [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]
// Output: 8 (the index of 5 in the array)

// Case 0: above. able to perform binary search the same as with algo with nonrotated sorted arrays
// Case 1: find 16 in [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]. Summary: modified binary search. after checking midpoint, check rightmost/leftmost,
//         if needed compare midpoint with rightmost/leftmost.
//   Details: After binary search picks right or left side, before we go on to search that side,
//   check whether rightmost is greater than or equal to num, or leftmost is less than or equal to num.
//   if true, stick with side picked. if false,
//   compare midpoint to rightmost or leftmost,
//   if midpoint is greater than rightmost or midpoint is less than leftmost, stay on side picked (Case 1 a) below).
//   otherwise, pick the other side.
// Case 1 a): find 20 in [4, 5, 7, 10, 14, 15, 16, 19, 20, 25, 1, 3]. same as Case 1,
//         except junction point of sorted list is past midpoint.
//   Thus in the first calling of modified binary search, you end up staying with
//   originally picked side even though rightmost is less than num,
//   because midpoint is greater than rightmost, thus you can't expect to find
//   a greater number than midpoint by picking the left side

function rotatedArraySearch(num, arr, l, r) {
    if(r >= l) {
    var mid = l + (r-l)/2
    if(arr[mid] === num) return mid
    if(arr[l] === num) return l
    if(arr[r] === num) return r

    if(arr[mid] < num) {
      if(num < arr[r] || arr[r] < arr[mid]) return rotatedArraySearch(num, arr, mid+1, r)
      else return rotatedArraySearch(num, arr, l, mid-1)
    }

    if(num < arr[mid]) {
      if(arr[l] < num || arr[mid] < arr[l]) return rotatedArraySearch(num, arr, l, mid-1)
      else return rotatedArraySearch(num, arr, mid+1, r)
    }
  }
  return -1
}

2)
// Sorted Merge: You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order.
// Jack says: can solve question in constant space, becuase of buffer. you can solve it without declaring additional data structures.
// Start at the end of both arrays
// This way you can solve in O(n) time

function sortedMerge(A,B) {
  var apoint = A.length-1
  var bpoint = B.length-1
  var mergepoint = A.length-1

  while(A[apoint] === null) {
    apoint--
  }

  while(apoint > -1 && bpoint > -1) {
    if(A[apoint] > B[bpoint]) {
      A[mergepoint] = A[apoint]
      apoint--
      mergepoint-- }
    else if(B[bpoint] > A[apoint]) {
      A[mergepoint] = B[bpoint]
      bpoint--
      mergepoint-- }
    else {
      A[mergepoint] = A[apoint]
      apoint--
      mergepoint--
      A[mergepoint] = B[bpoint]
      bpoint--
      mergepoint--
    }
  }

  if(mergepoint === 0 || apoint > -1) return A

  while(bpoint > -1) {
    A[mergepoint] = B[bpoint]
    bpoint--
    mergepoint--
  }
  return A
}


3)
// Sparse Search:
Given a sorted array of strings that is interspersed with empty strings, write a method to find the location of a given string. EXAMPLE
Input: ball, ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '']
//hint: they are sorted. should be log(n) time. modified binary search.
// if mid is empty string, take pebble in pond rings approach, expanding out from mid with two pointers ll and rr (())
// check ll (start at mid-1) and rr (start at mid+1) pointers, compare to str
//   once you hit a nonempty string, use that to decide whether to call binary search with left or right next
function sparseSearch(arr, str, l, r) {
  if(l <= r) {
    var mid = l + (r - l)/2
    if(arr[mid] === str) return mid
    if(arr[l] === str) return l
    if(arr[r] === str) return r

    // pebble in pond approach (())
    if(arr[mid] === '') {
        var ll = mid-1
        var rr = mid+1
    }

    if(str < arr[mid]) {
      
    }
  }
  return -1
}

*********************
* Solution
*********************
**********
*** 1) ***
**********

**********
*** 2) ***
**********

**********
*** 3) ***
**********
