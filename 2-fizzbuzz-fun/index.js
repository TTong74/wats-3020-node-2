/*
Description: Program that looks for an int argument using a function, else display a message showing the format of the command
Input: Integer
Output: List of values from 1 to the value of the integer
Value / 3 = "fizz"
Value / 5 = "buzz"
Value / 15 = "fizzbuzz" 
Usage: node 2-fizzbuzz-fun <integer> 
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()


function fizzbuzz(n) {
  if (n % 15 == 0) {
    return 'fizzbuzz';
  } else if (n % 3 == 0) {
    return 'fizz';
  } else if (n % 5 == 0) {
    return 'buzz';
  } else {
    return '';
  }
}

if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 2-fizzbuzz-fun <integer>");
}
else {
  for (let i = 1; i <= input; i++) {
    console.log(`${i} ${fizzbuzz(i)}`);
  }
}


