/* Write a program to convert a positive number to
 a string given a specified base.

For example, convert the integer 10 to its string
representation in decimal as "10", or to its string
representation in binary as "1010".

Note that the base is limited to between 2 and 16.

Hint: may be more intuitive to use recursion.
Otherwise, a loop structure works too.

Example:

1) toString(5, 10) // '5'
2) toString(5, 2) // '0101'
3) toString(10, 16) // 'a'
4) toString(15, 16) // 'f'
5) toString(20, 16) // '14'
*/

function toString(n, base) {

  let convertString = "0123456789abcdef";

  if (n < base) {
    return convertString[n];
  } else {
    return toString(Math.floor(n/base, base), base) + convertString[n%base];
  }

}

console.log(toString(5, 10), '5');
console.log(toString(5, 2), '0101');
console.log(toString(10, 16), 'a');
console.log(toString(15, 16), 'f');
console.log(toString(20, 16), '14');


/*
Since the base number is limited to between 2 to 16,
these digits can be represented using 0 to 9 and a to f.
Value of a is 10, value of b is 11 and so on.

In this case, we define a string, convertString
to represent these characters, i.e "0123456789abcdef",
so that they can be easily accessed through indexing.

There are two cases to handle:

1) n < base (remember the base is limited up to 16)

Simply return the character at the index n of convertString.

2) n >= base

Extract the least significant digit and gets its character,
i.e convertString[n%base]. This character is then concatenated
with the return value of a recursive call. The recursive call
passes in an updated input number where its least significant
digit is discarded (through this - Math.floor(n/base, base)).

This approach has a time complexity of O(n). */
