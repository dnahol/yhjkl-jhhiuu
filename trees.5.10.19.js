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
//
//
let rootNode = node1;

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;
//
function inOrder(node) {
    var result = []
    function traverse(curr) {
      if(curr === null) return

      if(curr.left !== null) traverse(curr.left)
      result.push(curr.data)
      if(curr.right !== null) traverse(curr.right)
    }
    traverse(node)
    return result
}
//
// function preOrder(node) {
//     // implement here
//
// }
//
// function postOrder(node) {
//     // implement here
//
// }
//
// function bfs(node) {
//     // implement here
//
// }
//
console.log( inOrder(rootNode) )    //4, 2, 5,1, 6, 3, 7
// preOrder(rootNode); // 1, 2, 4, 5, 3, 6, 7
// postOrder(rootNode); //4, 5, 2,6 ,7, 3, 1
// bfs(rootNode); // 1, 2, 3, 4, 5, 6, 7
//
//
//
//
// 2)  Given a binary tree, check whether it is symmetric.
// A binary tree is symmetric if it is a mirror of itself (the root node's left subtree is the mirror image of the right subtree).
//
// Function interface:
// function isSymmetric(node){...}
//
//
//
// 3)  Write a program to find the second largest element in a given binary search tree (BST). Return the node's data value.



// Example:
// Should 15 for the following BST:
//
//           10
//          /      \
//       5         15
//       /  \       /  \
//    2    7    12    18
//   /
// 1
//
function Node(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}
//
// // test data
//
let n1 = new Node(1);
let n2 = new Node(2);
let n5 = new Node(5);
let n7 = new Node(7);
let n10 = new Node(10);
let n15 = new Node(15);
let n12 = new Node(12);
let n18 = new Node(18);

n10.left = n5;
n10.right = n15;

n5.left = n2;
n5.right = n7;

n15.left = n12;
n15.right = n18;

n2.left = n1;

let result = secondLargestElem(n10);

console.log(result); // 15

//dfs reverse in-order, use counter
function secondLargestElem(root) {
  var counter = 1
  var arr = []
  function traverse(curr) {
    if(curr === null) return

    if(curr.right !== null) traverse(curr.right)
    
    if(curr.left !== null) traverse(curr.left)
    if(counter === 0) return curr.data
    counter--
  }

  return traverse(root)


}


//
// **************
// * Solution (copy and paste your solution here with your name on it)
// **************
//
// //Oxana 2)
// function isSymmetric(node){
//
//   let helper= function(node1, node2){
//     if(!node1 && !node2){
//       return true;
//     }else if(node1 && node2){
//       return node1.data===node2.data && helper (node1.left, node2.right) && helper (node1.right, node2.left)
//     }
//     return false
//   }
//   return helper(node.left, node.right);
// }
//
// // Deepika Panda
// Problem 2: Check if symmetric
// public boolean isSymmetric(Node node) {
// 	if(node == null)
// 		return true;
// 	return isSymmetric(node.left, node.right);
// }
// private  boolean isSymmetric(Node left, Node right) {
// 	if(left == null && right == null)
// 		return true;
// 	if(left == null || right == null)
// 		return false;
// 	if(left.val != right.val)
// 		return false;
// 	return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left);
// }
//
//
// Problem 3: Second largest element
// public int secondLargestElem(Node node) {
// 	if(node == null)
// 		return -1;
// 	Queue<Node> queue = new LinkedList<>();
// 	int first = -1;
// 	int second = -1;
//
// 	queue.add(node);
// 	while(!queue.isEmpty()) {
// 		Node cur = queue.poll();
// 		if(first == -1)
// 			first = cur.val;
// 		else if(cur.val > first) {
// 			second = first;
// 			first = cur.val;
// 		}
// 		else if(cur.val > second)
// 			second = cur.val;
//
// 		if(cur.left != null)
// 		queue.add(cur.left);
// 		if(cur.right != null)
// 			queue.add(cur.right);
// 	}
// 	return second;
// }
//
//
//
//
// *Jack:
//
//
//
//
//
//
//
// 2) function isSymmetric(node) {
//   // your code here
//
//   let isSymmetricHelper = function(node1, node2) {
//     if (!node1 && !node2) {
//       return true;
//     } else if (node1 && node2) {
//       return (
//         node1.data === node2.data &&
//         isSymmetricHelper(node1.left, node2.right) &&
//         isSymmetricHelper(node1.right, node2.left)
//       )
//     }
//
//     return false;
//   }
//
//   return isSymmetricHelper(node.left, node.right);
// }
//
