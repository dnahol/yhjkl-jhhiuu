/*Given two numbers, num1 and num2,
write a function to determine the number of
bits you would need to flip to convert num1 to num2.

Example:
1) Input: num1 = 15 (1111 in binary) , num2 = 4 (0100 in binary)
 
Output: 3
 
 Explanation: 3 bits flipped at bit position 0, 1, and 3.
*/

function conversion(num1, num2) {
  let resultMask = num1 ^ num2;
  let counter = 0;

  while (resultMask !== 0) {
    counter = counter + (resultMask & 1);
    resultMask = resultMask >> 1;
  }
  return counter;
}


console.log(conversion(15, 4), 3)

/*
This seemingly complex number is actually rather straightforward. To approach this, think about how you would figure out which bits in two numbers are different. The answer is, through XOR operation.

Each 1 in the XOP represents a bit that is different between num1 and num2. Therefore, to check the number of bits that are different between num1 and num2, we simply need to count the number of bits in  num1^num2 that are 1.

This problem is one of those bit manipulation problems that comes up sometimes in interviews. Though it'd be hard to come up with it on the spot if you've never seen it before, it is useful to remember the trick for your interviews.*/
