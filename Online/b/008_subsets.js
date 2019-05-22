/* Given a set of distinct numbers, return all possible subsets.
Note: The solution set must not contain duplicate subsets.

Example:
1) Input: [1,2,3]

Output: [
[]
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2]
]

2) Input: ['a', 'b', 'c', 'd']

Output: [
[], [a] , [b], [c], [d], [a,b], [a,c],
[a,d], [b,c], [b,d], [c,d], [a,b,c],
[a,b,d], [a,c,d], [b,c,d], [a,b,c,d]
]
*/

function subsets(nums) {
  let length = nums.length
  let result = []

  for (let i = 0; i < (1 << length); i++) {
    let currentSet = []

    for (let j = 0; j < length; j++) {
      if ((i & (1 << j)) > 0) {
        currentSet.push(nums[j])
      }	    
    }
  result.push(currentSet)	  
  }
  return result	
}

console.log(subsets([1,2,3]))
/*Output: [
[]
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2]
]*/

console.log('-------')
console.log(subsets([1,2,3,4,5]))
console.log('-------')

console.log(subsets(['a', 'b', 'c', 'd']))
/*Output: [
[], [a] , [b], [c], [d], [a,b], [a,c],
[a,d], [b,c], [b,d], [c,d], [a,b,c],
[a,b,d], [a,c,d], [b,c,d], [a,b,c,d]
]*/

/*
It may be intimidating to start by thinking about how to
implement loop structures to produce all the subsets.

Since we are returning all the subsets, one clue is that it 
can be described in binary number starting from 0 up to 2^(n), 
where n is the array length. Note that 2^(n) is the number of
subsets in the set.

Say given the numbers in an array, [1,2,3], 
we can match binary number to each set as:

000	- []
001	- [1]
010	- [2]
011	- [1,2]
100	- [3]
101	- [1,3]
110	- [2,3]
111	- [1,2,3]

The binary numbers above are represented as number,
0 to 7 in the above example.

With this, we can implement a program that generates
the binary numbers from 0 to 2^n – 1.

To implement this, it involves two steps process.

First, generate the numbers, say 0 to 7 if the input
array length is 3.

Second, map the set bits of the number to the input
array index to extract the values into array.

Starting from right, 1 at ith position shows that the ith
element of the set is present, while 0 shows that the ith
element is absent.

The outer loop time complexity is O(2^n) while the internal
loop time complexity is O(n).

So the final time complexity becomes O(n * 2^n).

The following code implements the algorithm.
*/
