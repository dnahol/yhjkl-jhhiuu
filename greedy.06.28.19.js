// https://docs.google.com/document/d/1OHxK0zbxJurDaC9u2tog4E9UpCY38q78Fdy17wrS6AU/edit

/*
*****************************************************************************************
** You can work on these questions in your local environment
** and copy and paste your solution to the bottom of this page.
**
** We will do code review and discussion. Feel free to raise any questions you
** have throughout the session.
**
*******************************************************************************************
** Feedback:
** Kindly leave your feedback in this link - feedback page. 
Your feedback will help in promoting ** the group :) 
Link: https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/about/comments/?op=all
**********************************************************************************************
******************
* Introduction
*******************
A greedy algorithm is an algorithm that computes a solution in steps,
where at each step the algorithm makes a decision that is locally optimum,
and it never changes that decision during execution of a program.

A greedy algorithm does not necessarily produce the optimum solution.
An example is illustrated in the question 1) below.

Takeaway: Will be discussed at the end of the class.

******************
* Questions
*******************

1) Given a value V, if we want to make change for V cents, and we have 
infinite supply of each of C = { C1, C2, .. , Cm} valued coins, what is the minimum number
of coins to make the change?

Let’s say that we are solving this problem in US currency,
wherein coins take values 1, 5, 10, 25, 50, 100 cents,
the greedy algorithm for making change result in the minimum number of coins.


Changes to the question: 
What if we want to make change for 48 pence in the old
British currency where the coins came in 30, 24, 12, 6, 3, and 1 pence dominations?

makeChange(48);

function makeChange(cents) {
	let coins = [100, 50, 25, 10, 5, 1];
	
	// your code here
}

makeChange(85); // should return 3, i.e one 50 cents, one 25 cents, and one 10 cents.






2) We consider the problem of assigning tasks to worker.
Each worker must be assigned exactly two tasks.
Each task takes a fixed amount of time.

Tasks are independent, i.e., there are no constraints of the form 
"Task 4 cannot start before Task 3 is completed." Any task can be assigned to any worker.
We want to assign tasks to workers so as to minimize how long it takes before all tasks are completed.

For example, if there are 6 tasks whose durations are 5, 2, 1, 6, 4, 4 hours,
then an optimum assignment is to give the first two tasks (i.e, the tasks with duration 5 and 2)
to one worker, the next two (1 and 6) to another worker, and the last two tasks (4 and 4)
to the last work.

For this assignment, all tasks will finish after max(5 + 2, 1 + 6, 4 + 4) = 8 hours.
Design an algorithm that takes as input a set of tasks and returns an optimum assignment.
Hint: What additional task should be assigned to the worker who is assigned the longest task?

function assignOptimumTask(taskDurations) {
	// your code here	
}

assignOptimumTask([5, 2, 1, 6, 4, 4]); // should return [[5,2], [1,6], [4,4]]






3) Consider a foreman responsible for a number of tasks on the factory floor.
Each task starts at a fixed time and ends at a fixed time. 
The foreman wants to visit the floor to check on the tasks. 

Your job is to help him minimize the number of visits he makes. 
In each visit, he can check on all the tasks taking place at the time of the visit. 
A visit takes place at a fixed time, and he can only check on tasks taking place at exactly that time. 

For example, if there are tasks at times [0,3], [2,6], [3,4], [6,9], then visit times 0, 2, 3, 6 cover all tasks. 
A smaller set of visit times that also cover all tasks is 3, 6. 
In the abstract, you are to solve the following problem.

You are given a set of closed intervals. 
Design an efficient algorithm for finding a minimum sized set of numbers that covers all the intervals.
Hint: think about extremal points.

**************
* Solution (copy and paste your solution here with your name on it)
*************
*/


// Leetcode
// https://leetcode.com/problems/coin-change/

console.log("---makeChange---")
console.log(" ")

function makeChange(cents) {
  let count = 0;
  let coins = [100, 50, 25, 10, 5, 1];
  // your code here
  for (let i = 0; i < coins.length; i++) {
    if (cents % coins[i] === 0) {	  
      count++;
    } 
  }
  return count;
}

function makeBrit(cents) {
  let count = 0;
  let coins = [30, 24, 12, 6, 3, 1]

  for (let i = 0; i < coins.length; i++) {
    if (cents % coins[i] === 0) {	  
      count++;
    }
  }
  return count;
}

console.log(makeBrit(48))
console.log(makeChange(85), 3); 
// should return 3, i.e one 50 cents, one 25 cents, and one 10 cents.

console.log(" ")
console.log("---assignOptimumTask---")
console.log(" ")

function assignOptimumTask(tasks) {
let optimum = [];

  for (let i = 0; i < tasks.length; i++) {
    for (let j = i + 1; j < tasks.length; j++) {
      if (tasks[i] + tasks[j] === 8 || 7) {
        optimum.push([tasks[i],tasks[j]])	  
      }
    }
  }
  return optimum;
}

console.log(assignOptimumTask([5, 2, 1, 6, 4, 4])); 
console.log("output:[[5,2], [1,6], [4,4]]")
// should return [[5,2], [1,6], [4,4]]

console.log(" ")
console.log("---foreman---")
console.log(" ")

function foreman() {}

let before =  [[1,2], [2,3], [3,4], [2,3], [3,4], [4,5]];
let after = [[1,2], [2,3], [2,3], [3,4], [3,4], [4,5]];

console.log(foreman(before))
console.log(`output: ${after}`)
