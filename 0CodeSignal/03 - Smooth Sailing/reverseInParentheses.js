/**
 * 1) Ask: Write a function that reverses characters in (possibly nested) parentheses in the input string. 
 *      Constraint: Input strings will always be well-formed with matching ()s.
 * 
 * 1b) Examples: 
 * inputString = "(bar)", output = "rab";
 * inputString = "foo(bar)baz", output = "foorabbaz";
 * inputString = "foo(bar)baz(blim)", output = "foorabbazmilb";
 * 
 * 2b) Pattern: String Manipulation + Reverse a String
 *      1. Find the pairs of parentheses
 *      2. Find the part of the string we need to reverse
 *      3. Reverse the string
 *      4. Repeat until all parentheses are replaced
 *           
 * 
 */

function reverse(string) {
    // create a stack
    let stack = [];
    // create a reverseString
    let reverseString = "";
    // push each char into the stack, then pop off into reverseString
    for (let char of string) {
        stack.push(char);
    }
    // pop into reverseString
    while (stack.length) {
        reverseString = reverseString + stack.pop();
    }
    console.log("Reverse String: " + reverseString);
    return reverseString;
}

function solution(inputString) {
    // create  



}
