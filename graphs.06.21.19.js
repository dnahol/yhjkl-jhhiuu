// https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/events/262328106/

// https://docs.google.com/document/d/1gsGnjk0ZXMpS2KfTUD_sR9l6DqerM1xRH0q3xtTAiVw/edit

/*
******************************************************************************************
** You can work on these questions in your local environment
** and copy and paste your solution to the bottom of this page.
**
** We will do code review and discussion. Feel free to raise any questions you
** have throughout the session.
**
*******************************************************************************************
** Feedback:
** Kindly leave your feedback in this link - feedback page. Your feedback will help in promoting
** the group :) Link: https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/about/comments/?op=all
**********************************************************************************************

******************
* Questions
*******************
1) Given a directed graph node (vertex), return all the nodes' (vertices) key in an array
by performing breadth first search (BFS) traversal.

Assume that all nodes are reachable from the input node and the nodes' key is unique.

BFS traversal for a graph is similar to BFS traversal in a tree.

A major difference is a graph may contain cycles, i.e a node pointing to a visited node.

To avoid traversing in these cycles, a boolean visited array or object is often used.

Consider a node type for a directed graph in which there are two fields:
an integer key, and a list of references to other vertices:

function GraphNode(key) {
    this.key = key;
    this.adjacent = []; // references to other vertices
}


function graphBFS(node) {
  // your code here
  
}
*/

function GraphNode(key) {
  this.key = key;
  this.adjacent = [];
}

var graphNode1 = new GraphNode(1);
var graphNode2 = new GraphNode(2);
var graphNode3 = new GraphNode(3);
var graphNode4 = new GraphNode(4);
var graphNode5 = new GraphNode(5);

graphNode1.adjacent.push(graphNode2);
graphNode1.adjacent.push(graphNode3);
graphNode3.adjacent.push(graphNode4);
graphNode4.adjacent.push(graphNode5);
graphNode5.adjacent.push(graphNode2);

/*
function graphBFS(node, queue = [], current = null) {
  queue.push(node)
  console.log(node)

  while (queue.length !== 0) {
    current = queue.shift()
    console.log(current.key)

  if (current.adjacent) {queue.push(current.adjacent)}
  }
}*/

function graphBFS(node) {
  let queue = [];
  let hasVisited = new Set();
  let currentNode = null;
  let result = [];

  queue.push(node);

  while(queue.length) {
    currentNode = queue.shift();

    result.push(currentNode.key);
    hasVisited.add(currentNode.key);

    currentNode.adjacent.forEach((node) => {
      if (!hasVisited.has(node.key)) {
        queue.push(node);
      }
    });
  }
  return result;
}

let result = graphBFS(graphNode1); // [1,2,3,4,5]

console.log(result)

/*
2) Given two words, let's say "cat" and "dog" from a list of dictionary words
["cat", "cop", "dog", "dat", "cap", "dop", "pod", "dot"]. 

Find the minimum number of hops (transformation) needed to go from start word,
lets say - "cat", to end word, lets say - "dog",  The conditions to hop from one word to another are:
Only one letter can be changed at a time.

Each transformed word must exist in the dictionary words.
Note that the initial word  (like "cat" in the example) doesn't count as transformed word.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.

The program should return the sequence length.

Example:
beginWord = "cat", endWord = "dog"
words = ["cat", "cop", "dog", "dat", "cap", "dop", "pod", "dot"]

"cat" -> "cap"-> "cop" -> "dop" -> "dog", sequence length = 5
"cat"->"dat" -> "dot" -> "dog",  sequence length = 4

Therefore, the minimum number of hops is 4.

**************
* Solution (copy and paste your solution here with your name on it)
**************
*/

const beginWord = "cat";
const endWord = "dog";
const words = ["cat", "cop", "dog", "dat", "cap", "dop", "pod", "dot"]

function transformed(word1, word2, array) {
  if (word1 === word2) return 0;

}

console.log(transformed(beginWord, endWord, words))
// Therefore, the minimum number of hops is 4.
