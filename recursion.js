// ******************************************************************************************
// ** You can work on these questions in your local environment
// ** and copy and paste your solution to the bottom of this page.
// **
// ** We will do code review and discussion. Feel free to raise any questions you
// ** have throughout the session.
// **
// *******************************************************************************************
// ** Feedback:
// ** Kindly leave your feedback in this link - feedback page. Your feedback will help in promoting ** the group
// :) Link: https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/about/comments/?op=all
// **********************************************************************************************
//
// Background:
// A recursive algorithm is an algorithm which calls itself with "smaller (or simpler)" input values,
// and which obtains the result for the current input by applying simple operations to the returned value for the smaller
// (or simpler) input.
//
// Questions:
//
// 1)   Given a non-negative int n, and a target single digit, return the count of the occurrences of the target single digit.
// So for example when n is 8218, and target digit is 8, the program shall return 2. Do not use iterative (loop) approach but
// recursive algorithm.
//
// // Hint: mod (%) by 10 yields the rightmost digit ( 912 % 10 is 2), while divide (/) by 10 and apply parseInt on its result
// removes the rightmost digit ( parseInt(587 / 10) is 58 ).
// x
// function countDigit (n, targetDigit) {
//    ...
// }
//
// countDigit(8218, 8) // 2
//
// *NOTE: should be Math.floor, not parseInt (at least to prevent TS complaining about types :), although parseInt also work)
//
//
//
// 2) Compute the value of power function power(x, n), given two integers x (base) and n (exponent, which is non-negative).
// Use recursion.
//
// // Next, see if you can improve this with branching recursion
//
// function power(x, n) {
//    ...
// }
//
// power(2, 3) // 8
// power(2, 4) // 16
//
// 3)  A magic index in an array[0...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers,
// write a method to find a magic index. Assume there is always one that exists in array A.
//
// function findMagicIndex(array, startIndex, endIndex) {
//      ...
// }
//
// let arr = [-40, -20, -1, 1, 2 ,3 ,5, 7, 9, 12, 13];
// let startIndex = 0;
// let endIndex = arr.length - 1;
// findMagicIndex(arr, startIndex, endIndex); // 7
//
// 4)  Given a string, compute recursively (no loops) the number of times lowercase "th" appears in the string.
//
// function countTh(str) {
//   ...
// }
//
// countTh('thapple') // 1
// countTh('thappthle') // 2
//
//
// 5) A child is running up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time.
// Implement a method using recursion to count how many possible ways the child can run up the stairs.
//
// Hint: branching recursion
//
//
// start at end
// branching recursion: 3 branches:
// countWays(n-1) + countWays(n-2) + countWays(n-3)

function countWays( n ) {
  if(n === 0) return 1

  var a = 0
  var b = 0
  var c = 0

  if(n-1 >= 0) a = countWays(n-1)
  if(n-2 >= 0) b = countWays(n-2)
  if(n-3 >= 0) c = countWays(n-3)

  return a + b + c
}

countWays(0)
countWays(1)
countWays(2)
countWays(3)
countWays(4)
countWays(5)





//
//
// /************ Solution ************/
// /* Feel free to copy and paste your solution here */
// /* Please add your name and question number to your solution*/
//
//
// - Joseph, I used Java for No1.
//
//
// 	private static int countDigit(int number, int target) {
// 		if (number == 0) return 0;
//
// 		if (number % 10 == target) {
// 			return 1 + countDigit(number / 10, target);
// 		} else {
// 			return countDigit(number / 10, target);
// 		}
// 	}
//
// 	public static void main(String[] args) {
// 		System.out.println(countDigit(8218, 8));
// 	}
//
// }
//
// Noel Yap:
//
// ```javascript
// function countDigit(n, targetDigit) {
//  function countDigitHelper(n, count) {
//    if (n === 0) {
//      return count;
//    } else {
//      const nextN = Math.floor(n / 10);
//      const ones = n - nextN * 10;
//
//      return countDigitHelper(nextN, count + (ones === targetDigit ? 1 : 0));
//    }
//  }
//
//  return countDigitHelper(n, 0);
// }
//
// test('countDigit', t => {
//  const observed = Functions.countDigit(8218, 8);
//  const expected = 2;
//
//  t.is(observed, expected);
// });
// ```
//
// ```javascript
// ```
//
//
// Carlos Green:
//
// #1 ----------------------
//
// function countDigit(n, targetDigit, i = 0) {
//   if (n % targetDigit === i) return i;
//   return countDigit(n, targetDigit, i + 1);
// }
//
// console.log(countDigit(8218, 8)) // 2
// console.log(countDigit(912, 10)) // 2
//
// # 2 ----------------------
//
//
//
//
// Phil:
//
// function countDigit (n, targetDigit) {
//     let firstDigit = n % 10;
//     let theRest = parseInt(n/10);
//     if (theRest === 0 && firstDigit === 0) {
//         return 0;
//     }
//
//     return ((firstDigit === targetDigit) ? 1 : 0 )
//     + countDigit(theRest, targetDigit);
// }
//
// function power(x, n) {
//     if(n === 0) return 1;
//
//     return x * power(x, n-1);
// }
//
// function findMagicIndex(array, startIndex, endIndex) {
//     let lastElement = array.pop();
//     if (lastElement === endIndex){
//         return endIndex;
//     }
//     return findMagicIndex(array, startIndex, endIndex-1);
// }
//
//
//
// // Jack
// Question 2)
//
// // straight forward
//
//
//
//
// function power(x,n){
//
//
//  console.log( '--');
//
//
//  if (n == 0) {
//
//
//    return x;
//
//
//  }
//
//
//
//
//
//
//
//  return x * power(x, n - 1);
//
//
// }
//
//
//
//
//
//
//
// console.log(power(2,10));
//
//
//
//
//
//
//
// // breakdown half and half
//
//
// function power(x,n){
//
//
//  var subProblemN;
//
//
//
//
//
//
//
//  if (n === 0) {
//
//
//    return 1;
//
//
//  }
//
//
//  //   is odd
//
//
//  if ( n & 1 ) {
//
//
//    subProblemN = Math.floor(n/2);
//
//
//    return x*power(x,subProblemN)*power(x,subProblemN);
//
//
//  }
//
//
//  //   is even
//
//
//  return power(x,n/2)*power(x,n/2);
//
//
// }
//
//
// Jeff #3:
//
