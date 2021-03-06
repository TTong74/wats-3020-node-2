/*
Description: Program that looks for an int argument, else display a message showing the format of the command
Input: Integer
Output: List of values from 1 to the value of the integer
Value / 3 = "fizz"
Value / 5 = "buzz"
Value / 15 = "fizzbuzz" 
Usage: node 1-fizzbuzz <integer>
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()

// test that input is a number and exit with error
if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 1-fizzbuzz <integer>");
}
else {
  // iterate from 1 to the value of input
  for (let i = 1; i <= input; i++) {
    if (i % 15 == 0) {
      console.log(`${i} fizzbuzz`);
    } else if (i % 3 == 0 ) {
      console.log(`${i} fizz`);
    } else if (i % 5 == 0 ) {
      console.log(`${i} buzz`);
    } else {
      console.log(`${i}`);
    }

  }
}


