// Given a string, write a program to replace patterns like "zip"
//and "zap" with "zp". Note that in both cases the middle character is removed.

/* In other words, the pattern of interest will always have a
length of 3, and its starting and ending character are "z"
and "p" respectively. The middle character can be of any character.

Assume that the input is all lowercase.
Example:

1) Input: "appleziporange"
Output: "applezporange"

2) Input: "zipwithzap"
Output: "zpwithzp"
*/


/*
This problem has a simple solution.
It tests you on how you could loop through a string, test it, and form a new string.

Since the patterns (like "zip" and "zap") we are testing
have a length of 3, we will loop through each character
in the string from the beginning till the string length - 2.

In each iteration, the program checks that whether the corresponding
first string is 'z' and the third string is 'p'.

If the condition is met, concat 'zp' to the new result string,
and increment the index by 3.

If the condition is not met, we simply increment the index by 1and continue to iterate.

At the end, the program returns the new formed string.
The time and space complexity are O(n).
*/

function zipZap(str) {
  let i = 0;
  let l = str.length - 2;
  let result = '';

  while(i < l) {
    if (str[i] === 'z' && str[i + 2] === 'p') {
      result += 'zp'
	 i += 3;
    } else {
       result += str[i]
       i++;
    }
  }
  return result;
}

console.log(zipZap("appleziporange"))
console.log("Output = applezporange")

console.log(zipZap("zipwithzap"))
console.log("Output = zpwithzp")
