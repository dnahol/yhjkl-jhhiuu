'use strict'

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
//
// ******************
// * Questions
// *******************
//
// *** Note: For beginner to trees problem, start with question 1. Otherwise, you can skip to question 2.
//
// Implement in-order, pre-order, post-order, and breadth first search traversals of a tree.
//
// * Background on graph traversals: https://docs.google.com/document/d/1sAVhtLIwt9wZaeiro20DJBhxSfCSH0m0bZ5ePveYMwk/edit?usp=sharing
//
// Use this tree for testing:
//             1
//          /     \
//        2       3
//     /  \      /    \
//    4   5     6   7
//
/***
Advice from attendee, Len Lattanzi,
Senior Software Engineer
last worked at a self driving helicopter startup
Worked for a long time at Apple

See Sedgewick's book on algorithms
***/

function Node(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);


let rootNode = node1;

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;
//

//Dalia's Solutions
function inOrder(node) {
  console.log('In-Order Traversal:')
  function traverse(curr) {
    if(curr === null) return

    if(curr.left !== null) traverse(curr.left)
    console.log(curr.data)
    if(curr.right !== null) traverse(curr.right)
  }

  traverse(node)

}

function preOrder(node) {
  console.log('Pre-Order Traversal:')
  var result = []
  function traverse(curr) {
    if(curr === null) return
    result.push(curr.data)
    if(curr.left !== null) traverse(curr.left)
    if(curr.right !== null) traverse(curr.right)
  }
  traverse(node)
  return result
}

function postOrder(node) {
  console.log('Post-Order Traversal:')
  function traverse(curr) {
    if(curr === null) return

    if(curr.left !== null) traverse(curr.left)
    if(curr.right !== null) traverse(curr.right)
    console.log(curr.data)
  }
  traverse(node)

}

function bfs(node) {
  console.log('BFS:')
  var queue = []
  queue.push(node)

  while(queue.length !== 0) {
    let curr = queue.shift()

    console.log(curr.data)

    if(curr.left !== null) queue.push(curr.left)
    if(curr.right !== null) queue.push(curr.right)
  }
}

console.log( inOrder(rootNode) );    //4, 2, 5,1, 6, 3, 7
console.log( preOrder(rootNode) ); // 1, 2, 4, 5, 3, 6, 7
postOrder(rootNode); //4, 5, 2,6 ,7, 3, 1
bfs(rootNode); // 1, 2, 3, 4, 5, 6, 7
//
//
//
//
// 2)  Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
// Calling next() will return the next smallest number in the BST.

/*
For testing see LeetCode #173 Binary Search Tree
Passed test on Fri 5/17/19 :)
*/
function BSTIterator(root) {
  //do in order traversal, have result queue
  //keep track of current index in i
  //each time you call next, you will increase index i

  this.result = []
  this.i = 0
  var traverse = (curr) => {
    if(!curr) return

    if(curr.left !== null) traverse(curr.left)
    this.result.push(curr.data)
    if(curr.right !== null) traverse(curr.right)
  }

  traverse(root)
} // implement this

BSTIterator.prototype.next = function () {
  if(!this.hasNext) return null
  this.i++
  return this.result[this.i - 1]
} // implement this
BSTIterator.prototype.hasNext = function () {
  return this.result.length > this.i
} // implement this
//
// Example:
/*
                  7
                /  \
              3     15
                    / \
                  9   20



*/
let iterator = new BSTIterator(rootNode);
console.log( iterator.next(),    // return 3
iterator.next(),    // return 7
iterator.hasNext(), // return true
iterator.next(),    // return 9
iterator.hasNext(), // return true
iterator.next(),    // return 15
iterator.hasNext(), // return true
iterator.next(),    // return 20
iterator.hasNext() // return false
)
//
//
// 3)  Given a sorted array, write a program that build a minimum height (balanced) binary search tree.
//
// Note that the tree node constructor class. Return the binary search tree root node.
//
// function TreeNode(value) {
//   this.data = value;
//   this.left = null;
//   this.right = null;
// }
//
function balancedBst(nums) {
  var start = 0
  var end = nums.length - 1
  var result = null

  function traverse(start, end) {
      if(start > end) return null
      var mid = Math.floor(start + (end - start) / 2)
      var root = new TreeNode(nums[mid])
      root.left = traverse(start, mid-1)
      root.right = traverse(mid+1, end)

      return root

  }
  return traverse(start, end)
}
//
// 4) Given a sorted binary tree, return the vertical order traversal of its nodes' values.
//   (ie, column by column from left to right, and within a column from top to bottom).
//    If two nodes are in the same row and column (in example below: 9 and 12),
//    the order should be from left to right (in example below: 9, then 12).
//
//    Example:
//    input:
//           10
//         /    \
//        5     15
//       / \   /  \
//      3   9 12  17
//           /
//          /
//         11
//
//    output: [3, 5, 11, 10, 9, 12, 15, 17]
//
//
// LeetCode 987. Vertical Order Traversal of a Binary Tree
// This solution fails some tests in the case where two nodes are the same
// height and vertical level
var verticalTraversal = function(root) {
    var queue = []
    queue.push([root, 0, 0])
    var results = {}
    var min = 0
    var max = 0

    while(queue.length !== 0) {
        let tuple = queue.shift()
        let curr = tuple[0]
        let x = tuple[1]
        let y = tuple[2]

        if(!results[x]) results[x] = []
        let newTuple = [curr.val, y]

        var len = results[x].length
        let last = results[x][len - 1]
        if(last && newTuple[1] === last[1] && newTuple[0] < last[0]) {
            results[x].pop()
            results[x].push(newTuple)
            newTuple = last
        }
        results[x].push(newTuple)

        if(x < min) min = x
        if(x > max) max = x

        if(curr.left) queue.push([curr.left, x-1, y-1])
        if(curr.right) queue.push([curr.right, x+1, y-1])
    }

    var final = []
    for(var i = min; i <= max; i++) {
        let len = results[i].length
        for(var j = 0; j < len; j++){
            results[i][j] = results[i][j][0]
        }
        final.push(results[i])
    }

    return final
};


// **************
// * Solution (copy and paste your solution here with your name on it)
// **************
//
