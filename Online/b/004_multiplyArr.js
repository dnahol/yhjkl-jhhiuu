/* Given two arrays of numbers, where each array is a
representation of decimal number. Multiply them and
return the result in an array.

Example:

1) console.log(multiplyArr([-1,2,3], [4,5,6]));
// [ -5, 6, 0, 8, 8 ]

2) console.log(multiplyArr([-1,2,3], [-4,5,6]));
// [ 5, 6, 0, 8, 8 ]

3) console.log(multiplyArr([1,2,3], [-4,5,6]));
// [ -5, 6, 0, 8, 8 ]

4) console.log(multiplyArr([1,2,3], [4,5,6]));
// [ 5, 6, 0, 8, 8 ]

5) console.log(multiplyArr([1,2,3], [6]));
// [ 7,3,8 ] */

function multiplyArr(arr1, arr2) {
  let tempVal = 0;
  let result = [];
  let resultIndex = 0;
  let isNegative = (arr1[0] * arr2[0]) < 0;

  arr1[0] = Math.abs(arr1[0]);	
  arr2[0] = Math.abs(arr2[0]);	

  arr1.reverse();
  arr2.reverse();

  for (let i = 0, l = arr2.length; i < l; i++) {
    for (let j = 0, m = arr1.length; j < m; j++) {
      resultIndex = j + i;
      tempVal = arr1[j] * arr2[i];
      tempVal = (result[resultIndex] || 0) + tempVal;

      if (tempVal >= 10) {
        result[resultIndex] = tempVal % 10;
        result[resultIndex + 1] = (result[resultIndex + 1] || 0) + Math.floor(tempVal / 10);
      }	else {
        result[resultIndex] = tempVal;
      }    
    }
  }	
  result.reverse()

// remove the leading zeros
  let i = 0;
  for (let l = result.length - 1; i < l; i++) {
    if (result[i] !== 0) {
      break;
    }
  }

// return the non-zero elements starting from i
  result = result.slice(i);

  if (isNegative) {
    result[0] = result[0] * -1;
  }

  return result;
}


console.log(multiplyArr([-1,2,3], [4,5,6]));
console.log([ -5, 6, 0, 8, 8 ], 'solution')
console.log(multiplyArr([-1,2,3], [-4,5,6]));
console.log([ 5, 6, 0, 8, 8 ], 'solution')
console.log(multiplyArr([1,2,3], [-4,5,6]));
console.log([ -5, 6, 0, 8, 8 ], 'solution');
console.log(multiplyArr([1,2,3], [4,5,6]));
console.log([ 5, 6, 0, 8, 8 ], 'solution')
console.log(multiplyArr([1,2,3], [6]));
console.log([ 7,3,8 ], 'solution')


/* We can use the grade-school algorithm for multiplication.

To comprehend the approach, you can write down on notepad
on how you would multiply 123 by 234.

The approach consists of multiplying the first number by
each digit of the second array, and then adding all the
resulting terms.

The following implementation has a time complexity of O(mn),
where m is the arr1 length, and n is the arr2 length.

Space complexity is O(m + n). */
