/* Given an array which represents a number, add 1 to
 the array and return the result in an array.

Let's say given this input, [9, 9], which is 99 in decimal
number. By adding 1 to it, it becomes 100 but the program
would return it in an array as [1,0,0].

Example:
1) console.log(plusOne([1,2,9])); // [1,3,0]
2) console.log(plusOne([9,9,9])); // [1,0,0,0]
*/

// Brute Force
function plusOne(arr) {
  let num = arr.join('')
  let newNum = parseInt(num)
  let newArr = [];

  newNum++;
  newNum += ''

  for (let i = 0; i < newNum.length; i++) {
    newArr.push(parseInt(newNum[i]));
  }
 return newArr;
}

// Jack's Solution
/* function plusOne(numbers) {
  let lastIndex = numbers.length - 1;
  numbers[lastIndex]++;

  for (i = lastIndex; i> 0; i--) {
    if (numbers[i] !== 10) {
      break;
    }
	
  numbers[i] = 0;
  numbers[i - 1]++;	
  }

  if (numbers[0] === 10) {
    numbers[0] = 0;
    numbers.unshift(1);	  
  }

  return numbers;
}*/

console.log(plusOne([1,2,9]), [1, 3, 0]); // [1,3,0]
console.log(plusOne([9,9,9]), [1, 0, 0, 0]); // [1,0,0,0]

/* Note that the digits are stored such that the most
significant digit is at the head (index 0) of the array.
Therefore, we will want to add 1 to the tail
(right most element) of the array.

There are two situations we want to take care as a
result of adding 1 to the corresponding digit:

1) result < 10
2) result is 10

We can iterate each digit (starting from the tail) and
update them accordingly. If the result is < 10, we update
the corresponding digit with new value. If the result is 10,
we update the corresponding digit to 0 and add 1 to the
next element (current index - 1). */
