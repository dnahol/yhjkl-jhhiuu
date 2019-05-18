'use strict'
//
// ******************************************************************************************
// ** You can work on these questions in your local environment
// ** and copy and paste your solution to the bottom of this page.
// **
// ** We will do code review and discussion. Feel free to raise any questions you
// ** have throughout the session.
// **
// *******************************************************************************************
// ** Feedback:
// ** Kindly leave your feedback in this link - feedback page. Your feedback will help in promoting ** the group :) Link: https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/about/comments/?op=all
// **********************************************************************************************
// 1) sortReindeer
// Write a function called sortReindeer that accepts an array of Reindeer names, and returns an array with the Reindeer names sorted by their last names.
//
console.log(
  'Problem 1 Output 1:\n',
  sortReindeer([
    "Dasher Tonoyan",
    "Dancer Moore",
    "Prancer Chua",
    "Vixen Hall",
    "Comet Karavani",
    "Cupid Foroutan",
     "Donder Jonker",
     "Blitzen Claus"
])
)
//
// Returns =>
// [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan",
//   "Vixen Hall",
//   "Donder Jonker",
//   "Comet Karavani",
//   "Dancer Moore",
//   "Dasher Tonoyan",
// ]
//
//Dalia
//Time O(n log n), Space O(1)
function sortReindeer(arr) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(' ')
  }

  arr.sort(
    function(a,b) { return a[1] > b[1] }
  )

  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join(' ')
  }

  return arr
}
// Hint: compare function - https://www.w3schools.com/js/js_array_sort.asp
//
// // Natalia  JAva solution1
//  // create list of arrays size of 2
//  // sort by second value
//
//     List<String[]> list =  new ArrayList<>();
//     for (String n : names) {
//       list.add(n.split(" "));
//     }
// // sort
//     list.sort((a,b) -> {
//       return a[1].compareTo(b[1]);
//     });
//
//     for (String[] name : list) {
//       System.out.println(name[0] + " " + name[1]);
//     }
//
//
// var str = [
// "Dasher Tonoyan",
// "Dancer Moore",
// "Prancer Chua",
// "Vixen Hall",
// "Comet Karavani",
// "Cupid Foroutan",
// "Donder Jonker",
// "Blitzen Claus"
// ]
// var final_array = []
// for(var i=0; i<str.length; i++){
// var a = str[i].split(' ')
// final_array.push(a)
// }
// var final_result = final_array.sort(function (a, b) {
// return a[1] > b[1] });
//
//
// 2)  matchingParentheses
// Write a function that, given a sentence like the one below,
// along with the position of an opening parentheses, finds the corresponding
// closing parenthesis.
//
// Input:
var str = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
var open = 10

console.log(
  'Problem 2 Output 1:\n',
  matchingParentheses(str, open)
)
//
// Output:
// Closing bracket index - 79
//
// Dalia's Solution
// Time O(n), Space O(1)
function matchingParentheses(str, num) {
  var open = 1
  for(var i = num + 1; i < str.length; i++) {
      if( str[i] === '(' ) open++
      if( str[i] === ')' ) open--
      if( open === 0 ) return i
  }
}
//
// function matchingParentheses(str,n){
// var counter = 1
// for(var i=n+1; i<str.length; i++){
// if(str[i] == '('){
// Counter++
// }
// if(str[i] == ')'){
// Counter--
// if(counter == 0){
// return i
// }
// }
// }
// }
//
//
//
// 3) mergeMeeting
// Write a function condense_meeting_times() that takes an array of meeting time
// ranges and returns an array of condensed ranges.
//
var meetings = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(
  'Problem 3: \n',
  mergeMeeting(meetings) )
// Output: [[0, 1], [3, 8], [9, 12]]
//

function mergeMeeting(meetings) {
  if(meetings.length < 2) return meetings
  meetings.sort(
    function(a,b) { return a[1] - b[1] })
  var result = []
  var prev = 0
  var curr = 1
  while(curr < meetings.length) {
    let start = meetings[curr][0]
    let end = meetings[curr][1]
    let prevS = meetings[prev][0]
    let prevE = meetings[prev][1]
    if(start <= prevS)
    {
      console.log('true')
      meetings[prev][1] = Math.max(end, prevE)
    }
    else {
      result.push(meetings[prev])
      prev = curr
    }
    curr++
  }
  result.push(meetings[prev])
  return result
}

/*

meetings= [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
sort
[[0, 1], [3, 5], [4, 8], [9, 10], [10, 12]]

result = []
prev = 0
iterate through meetings, start at curr = 1
  start = meetings[curr][0]
  end = meetings[curr][1]
  //if curr fits into prev, don't push or move prev yet
  if start <= meetings[prev][1], meetings[prev][1] = greater of end or prev end
  else push prev into result and prev = curr
  curr++
push prev into result
return result
*/

//
// 4) canReachEnd
// Write a program that takes an array of integers where A[i] denotes the maximum
// you can advance from index i, and returns true if it is possible to advance to
// the last index in the array, starting at the first index in the array.
//
// Example:
// can_reach_end([3,3,1,0,2,0,1]) #=> true
// can_reach_end([3,2,0,0,2,0,1]) #=> false
//
// function canReachEnd(arr) {...}
//
//
//
//
//
//
// /************ Solution ************/
// /* Feel free to copy and paste your solution here */
// /* Please add your name and question number to your solution*/
// /***********************************/
// sort_reindeer([
//   "Dasher Tonoyan",
//   "Dancer Moore",
//   "Prancer Chua",
//   "Vixen Hall",
//   "Comet Karavani",
//   "Cupid Foroutan",
//    "Donder Jonker",
//    "Blitzen Claus"
// ])
//
// Creence Lin
// Python solution: arr.sort(key=lambda name: name.split()[1])
//
//
//
//
// // Natalia  JAva solution1
//  // create list of arrays size of 2
//  // sort by second value
//
//     List<String[]> list =  new ArrayList<>();
//     for (String n : names) {
//       list.add(n.split(" "));
//     }
// // sort
//     list.sort((a,b) -> {
//       return a[1].compareTo(b[1]);
//     });
//
//     for (String[] name : list) {
//       System.out.println(name[0] + " " + name[1]);
//     }
//
// Jack #1
// function sortReindeer(arr) {
//  arr = arr.map(function(item){
//    return item.split(' ');
//  });
//
//  arr = arr.sort(function(itemA, itemB){
//    // item - [first name, last name];
//    if (itemA[1] > itemB[1]) {
//      return 1;
//    } else if (itemA[1] < itemB[1]) {
//      return -1;
//    } else {
//      return 0;
//    }
//  })
//
//  return arr.map(function(item){
//    return item.join(' ');
//  })
// }
//
//
// #2 Natalia
// private static int findMatch(String s, int n) {
//     int count = 0;
//
//     for (int i = 10; i < s.length(); i++) {
//       if (s.charAt(i) == '(') {
//         count++;
//       } else if (s.charAt(i) == ')') {
//         count--;
//       }
//       if (count == 0) {
//         return i;
//       }
//     }
//
//     return -1;
//
//   }
//
// //Oxana  #2
// function matchingParentheses(str, num) {
//   let count=0
//   for(let i=num; i<str.length; i++){
//     if(str[i]==="("){
//       count ++
//     }
//     if(str[i]===")"){
//       count--
//     }
//     if(count===0){
//       return i
//     }
//   }
//   return -1;
// }
