/**
 * 1) Ask: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if: 
 *      Open brackets must be closed by the same type of brackets.
 *      Open brackets must be closed in the correct order.
 *      Every close bracket has a corresponding open bracket of the same type.
 * 
 * Pattern: use a stack: O(n)
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // create a stack 
    let stack = [];
    // create a var to store the size of the stack
    let count = 0;

    // loop through the string s
    for (let i = 0; i < s.length; i++) {
        // if you encounter an opening bracket '(', '{', '[' push it to the top of the stack (end of the arr)
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') { 
            stack.push(s[i]);
            //inc. size of stack
            count++;
        }
        else { // if you encounter a close bracket, check if the top of the stack was the opening for it. 
            // check if the stack is already empty
            if (stack.length === 0) {
                return false;
            }
            let ch = stack.pop();
            // If yes, pop it from the stack. 
            if ((s[i] === ')' && ch === '(') || (s[i] === '}' && ch === '{') || (s[i] === ']' && ch === '[')) {
                console.log("Found close bracket: " + s[i] + " & it has a open bracket: "+ ch);
            }
            else {
                // Otherwise, return false. 
                return false;
            }
            count--; 
        }
    } // end the loop when you reach the end of the string

    // if the stack isn't empty, return false
    // else return true 
    return count === 0;
};