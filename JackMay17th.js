// All four traversals require O(n) time
// they visit every node exactly once
// tree questions are some variation of BFS/DFS

/* CONSTRUCTOR
function Node(val) {
  this.val = val;
  this.left = left;
  this.right = right;
}*/

// create nodes
const a = {val: 1}
const b = {val: 2}
const c = {val: 3}
const d = {val: 4}
const e = {val: 5}
const f = {val: 6}
const g = {val: 7}

// Link nodes
a.left = b
a.right = c

b.left = d
b.right = e

c.left = f
c.right = g

console.log('root node =', a)

/* Finished Tree
    1
   / \
  2   3
 / \ / \
4  5 6  7 */

// DFS
// Depth First Search/Traversal
// Search nodes furthest from the root

// O(h) space where h = height
// function call stack stores all 
// ancestors of the node

// inorder: left, root, right
// preorder: left, right, root
// postorder: root, left, right

const inorder = node => {
  if (!node) return
  inorder(node.left) // left
  console.log(node.val) // root
  inorder(node.right) // right
}

const preorder = node => {
  if (!node) return
  preorder(node.left)
  preorder(node.right)
  console.log(node.val)
}

const postorder = node => {
  if (!node) return
  console.log(node.val)
  postorder(node.left)
  postorder(node.right)
}

console.log(inorder(a), "inorder")
console.log(preorder(a), "preorder")
console.log(postorder(a), "postorder")

// BFS
// Breath First Search/Traversal
// Search nodes closest to the root

// O(w) space where w = width
// Queue stores nodes of the 
// different levels

// Queue data structure: F.I.F.O.
// First in First Out
// Like a line at the store

//                                      enqueue 
// shift() <-- [1, 2, 3, 4, 5, 6, 7] <-- push()
// dequeue

const BFS = (node, queue = [], current = null) => {
  queue.push(node)

  while(queue.length !== 0) {

  current = queue.shift()
  console.log(current.val)

  if (current.left) {queue.push(current.left)}
  if (current.right) {queue.push(current.right)}
  }
}

console.log(BFS(a), "BFS")















/* 2)Implement an iterator over a binary search tree (BST).
Your iterator will be initialized with the root node of a BST.
Calling next() will return the next smallest number in the BST.
*/

const node1 = {val: 7}
const node2 = {val: 3}
const node3 = {val: 16}
const node4 = {val: 9}
const node5 = {val: 20}

node1.left = node2;
node1.right = node3;

node3.left = node4;
node3.right = node5;

/*
  (7)
  /  \
(3)  (16)
     /  \
   (9)  (20)
*/

function BSTIterator(node) {
} 


const next = (node) => {
  if (!node) return
  next(node.left);
  console.log(node.val)
}

console.log(next(node1))

/*
BSTIterator.prototype.next = function () {
  if (!node) return;
  BSTIterator(node.left)
}*/

BSTIterator.prototype.hasNext = function () {} 

let iterator = new BSTIterator(root);

iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false












/*3)  Given a sorted array, write a program that build
a minimum height (balanced) binary search tree.
Note that the tree node constructor class.
Return the binary search tree root node. */


function TreeNode(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

function minHeightBst(array) {
  // your code here

}










/* 4) Given a sorted binary tree, return the vertical order
 * traversal of its nodes' values. (ie, column by column
 * from left to right, and within a column from top to bottom).
 * If two nodes are in the same row and column (in example below: 9 and 12),
 * the order should be from left to right (in example below: 9, then 12).

Example:
a)   input:
          10
        /    \
       5     15
      / \   /  \
     3   9 12  17
          /
         /
        11

output: [3, 5, 11, 10, 9, 12, 15, 17]

b) input:
     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2
output: [4,9,5,3,0,1,8,2,7] */
