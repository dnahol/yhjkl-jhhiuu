/////////////////////////////////////////////////////////////////////////////
// You can work on these questions in your local environment
// and copy and paste your solution to the bottom of this page.
//
// Recommended code editor: https://repl.it/languages/javascript
//
// Also, take a look at our community Facebook page - https://www.facebook.com/jssquareio/
/////////////////////////////////////////////////////////////////////////////

// 1 Check Tree is Balanced:
// Implement a function to check if a binary tree is balanced. For the purposes
// of this question, a balanced tree is defined to be a tree such that the heights
// of the two subtrees of any node never differ by more than one.
//
// If you are programming in JS, you can use the template below. Design and
// implement the functions following, isBalanced and getHeight, in the below code template.

// --------------------
// - Code Template
// --------------------
function TreeNode( value ){
  this.data = value;
  this.left = null;
  this.right = null;
  this.size = 1;
}

TreeNode.prototype.isBalanced = function(){
  if(!this) return true;

  function check(leftTree, rightTree) {
    if(!leftTree && !rightTree) return true;
    else if(!leftTree) return rightTree.getHeight() === 1;
    else if(!rightTree) return leftTree.getHeight() === 1;

    return (leftTree.getHeight() === rightTree.getHeight() || leftTree.getHeight()+1 === rightTree.getHeight() || leftTree.getHeight() === rightTree.getHeight()+1)
  }

  return check(this.left, this.right)
}

TreeNode.prototype.getHeight = function( node ) {
  var max = 0;
  var len = 0
  function rootToLeaf(curr) {
    if(!curr) {return;}

    len += 1;

    if(!curr.left && !curr.right) {
      max = Math.max(max, len);
      len -= 1;
      return;
    }

    rootToLeaf(curr.left)
    rootToLeaf(curr.right)

    len -= 1;

  }
  rootToLeaf(this)
  console.log('val:', this.data, 'max:', max)
  return max;
}

TreeNode.prototype.getSize = function(){
  return this.size;
}

TreeNode.prototype.getData = function(){
  return this.data;
}

TreeNode.prototype.insertInOrder = function( value ) {
  if ( value <= this.data ) {
    if ( this.left === null ) {
      this.left = new TreeNode( value );
    } else {
      this.left.insertInOrder( value );
    }
  } else {
    if ( this.right === null ) {
      this.right = new TreeNode( value );
    } else {
      this.right.insertInOrder( value );
    }
  }
  this.size++;
}

TreeNode.prototype.find = function( value ) {
  if ( this.data === value ) {
    return this;
  } else if ( value <= this.data ) {
    return this.left !== null ? this.left.find( value ) : null;
  } else if ( d > data ) {
    return this.right !== null ? this.right.find(d) : null;
  }
  return null;
}

var tree = new TreeNode( 20 );
tree.insertInOrder(10);
tree.insertInOrder(15);
tree.insertInOrder(17);
tree.insertInOrder(5);
tree.insertInOrder(3);
tree.insertInOrder(7);
tree.insertInOrder(30);
tree.insertInOrder(35);

var tree1 = new TreeNode( 20 );
tree1.insertInOrder(10);
tree1.insertInOrder(15);
tree1.insertInOrder(17);
tree1.insertInOrder(5);
tree1.insertInOrder(3);
tree1.insertInOrder(7);
tree1.insertInOrder(30);
tree1.insertInOrder(35);
tree1.insertInOrder(31);
tree1.insertInOrder(36);
tree1.insertInOrder(36);
tree1.insertInOrder(36);


console.log(tree1.right)

console.log(tree.isBalanced())
console.log(tree1.isBalanced())


// 2) Given a binary tree, find the length of the longest path where each node in
// the path has the same value. This path may or may not pass through the root.
//
// Note: The length of path between two nodes is represented by the number of edges between them.
//
// input:
// 5
// / \
// 4   5
// / \   \
// 1   1   5
///////////////
// Solution
///////////////

TreeNode.prototype.longestIdPath = function( node ) {
  var max = 0;
  var len = 0
  function rootToLeaf(curr, parent) {
    if(!curr) {return;}

    if(!parent || parent.data === curr.data) len += 1;

    if(!curr.left && !curr.right) {
      max = Math.max(max, len);
      len -= 1;
      return;
    }

    rootToLeaf(curr.left, curr)
    rootToLeaf(curr.right, curr)

    len -= 1;

  }
  rootToLeaf(this, null)
  console.log('val:', this.data, 'max:', max)
  return max;
}



// 3) // Write a function to print spiral order traversal of a tree. For below tree, function should print 1, 2, 3, 4, 5, 6, 7.
//
// // test data
// var tree = {
//   value: 1,
//   left: {
//     value: 2,
//     left: {
//       value: 7,
//       left: null,
//       right: null
//     },
//     right: {
//       value: 6,
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     value: 3,
//     left: {
//       value: 5,
//       left: null,
//       right: null
//     },
//     right: {
//       value: 4,
//       left: null,
//       right: null
//     }
//   }
// }












// OTHERS' SOLUTIONS
/////////////////////////////////////////////////////////////////////////////
// ///////////////
// // Solution
// ///////////////
// **************************************************************
// (varks) Problem 2
// int longest_path(Node* root, int &max_count) {
//         if (!root)
//             return 0;
//
//         int lval = longest_path(root->left, max_count);
//         int rval = longest_path(root->right, max_count);
//
//         int l_path = 0, r_path = 0;
//         if (root->left && root->left->val == root->val)
//             l_path = 1 + lval;
//         if (root->right && root->right->val == root->val)
//             r_path = 1 + rval;
//         max_count = max(max_count, l_path + r_path);
//         return max(l_path, r_path);
//
//     }
//
// int longestUnivaluePath(Node* root) {
//          int max_count = 0;
//          longest_path(root, max_count);
//          return max_count;
//
// }
//
// (varks) Problem 1
//
// int is_balance_helper(Node* root, bool &ans) {
//         if (!root)
//             return 0;
//
//         int lheight = is_balance_helper(root->left, ans);
//         int rheight = is_balance_helper(root->right, ans);
//
//         if (ans)
//             ans = (abs(lheight - rheight) <= 1);
//         return 1 + max(lheight, rheight);
// }
//
// bool isBalanced(Node* root) {
//         bool ans = true;
//         is_balance_helper(root, ans);
//         return ans;
// }
//
// (varks) Problem 3
//
// void print_spiral_order(Node* root) {
//   deque<Node*> q;
//   int flag = 1;
//   if (!root)
//     return;
//   q.push(root);
//   q.push(NULL);
//   cout << root->val << " ";
//
//   while (!q.empty()) {
//     Node *temp = q.back();
//     q.pop();
//     if (!temp && !q.empty()) {
//         if (flag) { // print normal order
//           for (auto it = q.begin(); it != q.end(); it++)
//               cout<< (*it)->val;
//
//         }
//         else { // print reverse order
//           for (auto it = q.rbegin(); it != q.rend(); it++)
//               cout<< (*it)->val;
//
//         }
//         q.push(NULL);
//         flag = 1 - flag;
//     }
//     else {
//       if (temp->left)
//           q.push(temp->left);
//       if (temp->right)
//           q.push(temp->right);
//     }
//   }
// }
//
// **************************************************************
// // Jack
// 1) (not efficient implementation)
// TreeNode.prototype.isBalanced = function(){
//   // Your Code Here
//   var leftIsBalanced = 0;
//   var rightIsBalanced = 0;
//   var heightDiff = 0;
//
//   heightDiff = this.getHeight(this.left) - this.getHeight(this.right);
//
//   if ( Math.abs(heightDiff) <= 1 ) {
//     leftIsBalanced = this.left ? this.left.isBalanced() : true;
//     rightIsBalanced = this.right ? this.right.isBalanced() : true;
//     return leftIsBalanced && rightIsBalanced;
//   }
//   else {
//     return false;
//   }
// }
//
// TreeNode.prototype.getHeight = function( node ) {
//   if (node === null) {
//     return 0;
//   }
//
//   return Math.max(this.getHeight(node.left), this.getHeight(node.right) ) + 1;
// }
//
// 2)function calLongestPath( tree ) {
//   var maxCounter = 0;
//
//   function calLongestPathUtil(node, counter) {
//     if ( node.left ) {
//       if (node.left.value === node.value ) {
//         calLongestPathUtil(node.left, counter + 1);
//       }
//       else {
//         calLongestPathUtil(node.left, 0);
//       }
//     }
//
//     if ( node.right ) {
//       if (node.right.value === node.value ) {
//         calLongestPathUtil(node.right, counter + 1);
//       }
//       else {
//         calLongestPathUtil(node.right, 0);
//       }
//     }
//
//     if ( counter > maxCounter ) {
//       maxCounter = counter;
//     }
//   }
//
//   calLongestPathUtil(tree, 0);
//
//   return maxCounter;
// }
//
// 3)
// function zigZagTraversal( tree ){
//   var currentQ = [];
//   var nextQ = [];
//   var hasFlipped = true;
//   var result = [];
//   var currentNode = null;
//
//   currentQ.push(tree);
//
//   while(currentQ.length) {
//
//     currentNode = hasFlipped ? currentQ.pop() : currentQ.shift();
//     result.push(currentNode.value);
//
//     if (currentNode.left) {
//       nextQ.push(currentNode.left);
//     }
//
//     if (currentNode.right) {
//       nextQ.push(currentNode.right);
//     }
//
//     if (!currentQ.length){
//       hasFlipped = !hasFlipped;
//       currentQ = [].concat(nextQ);
//       nextQ = [];
//     }
//   }
//
//   return result;
//
// }
//
// // Kevin's code
//
// TreeNode.prototype.isBalanced = function () {
//   console.log(this.data);
//
//   // left balanced, right balanced
//   // left and right heights within one
//   if (this.left == null && this.right == null) {
//     return true;
//   }
//   if (this.left == null && this.right.size == 1) {
//     return true;
//   }
//   if (this.right == null && this.left.size == 1) {
//     return true;
//   }
//   const leftHeight = this.left.getHeight();
//   const rightHeight = this.right.getHeight();
//
//   if (Math.abs(leftHeight - rightHeight) > 1) {
//     return false;
//   }
//
//   if (this.left.isBalanced() && this.right.isBalanced()) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// TreeNode.prototype.getHeight = function (node) {
//   if (node == null) {
//     return 0;
//   }
//   if (node.left == null && node.right == null) {
//     return 1;
//   }
//
//   const leftHeight = node.left.getHeight();
//   const rightHeight = node.right.getHeight();
//
//   return 1 + Math.max(leftHeight, rightHeight);
// }
//
//
// //Dalia's solution problem 1
//
// TreeNode.prototype.isBalanced = function(){
//   if(!this) return true;
//
//   function check(leftTree, rightTree) {
//     if(!leftTree && !rightTree) return true;
//     else if(!leftTree) return rightTree.getHeight() === 1;
//     else if(!rightTree) return leftTree.getHeight() === 1;
//
//     return (leftTree.getHeight() === rightTree.getHeight() || leftTree.getHeight()+1 === rightTree.getHeight() || leftTree.getHeight() === rightTree.getHeight()+1)
//     && check(leftTree.left, leftTree.right)
//     && check(rightTree.left, rightTree.right);
//   }
//
//   return check(this.left, this.right)
// }
//
// TreeNode.prototype.getHeight = function( node ) {
//   var max = 0;
//   var len = 0
//   function rootToLeaf(curr) {
//     if(!curr) {return;}
//
//     len += 1;
//
//     if(!curr.left && !curr.right) {
//       max = Math.max(max, len);
//       len -= 1;
//       return;
//     }
//
//     rootToLeaf(curr.left)
//     rootToLeaf(curr.right)
//
//     len -= 1;
//
//   }
//   rootToLeaf(this)
//   return max;
// }
