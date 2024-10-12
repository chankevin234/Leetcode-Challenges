/**
 * 1) Ask: Given a string, return its encoding defined as follows:
 *  - First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
 *      Ex: "aabbbc" is divided into ["aa", "bbb", "c"]
 *  - Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
 *      Ex: substring "bbb" is replaced by "3b"
 *  - Finally, all the new strings are concatenated together in the same order and a new string is returned.
 * 
 * 1a) Examples:
 * s = "aabbbc", output = "2a3bc"
 * 
 * 2) Pattern: stack/array?
 * 
 * @param {String} s
 * @returns {String} newString 
 */
function solution(s) {
    // create newString arr
    let stack = [s[0]];
    
    // create newString var
    let newString = "";

    // for loop thru s (start at pos1?)
    for (let i = 1; i < s.length; i++) {
        // print(curr pos value)
        console.log("What is currently in the stack: " + stack);
        console.log("Looking at: " + s[i]);
        // console.log(s[i-1]);

        // if s[i] != s[i-1] or s[0], add to the newString 
        if (s[i] != s[i-1]) {
            newString += (stack.length > 1 ? stack.length : "") + stack[0];
            // console.log("Removing from the stack and adding to the newString: " + stack);
            // console.log("newString = " + newString);
            stack = [s[i]];

        }
        // else add to the stack
        else {
            // add to the stack
            stack.push(s[i]);
        }
    }
    newString += (stack.length > 1 ? stack.length : "") + stack[0];
    // print newString
    // console.log(newString);  
    return newString;
}

solution("abc"); // 2a2b2c
