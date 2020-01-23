/*
Description: a program that takes a string as input and reverses it using JS string methods.
Input: String
Output: String, but reversed
Usage: node 3-reverse-string <string>
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()


//test that it is a string
if (!input) {
    console.log('usage: node 3-reverse-string <string>');
}
else {
    // uses string methods to reverse the string
    console.log(input.split('').reverse().join(''));
}




