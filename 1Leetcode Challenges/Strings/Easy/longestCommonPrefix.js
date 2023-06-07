/**
 * 1) Ask: Write a function to find the longest common prefix string amongst an array of strings. 
 *      If there is no common prefix, return an empty string "".
 * 
 * 2a) Example:
 *      Input: strs = ["flower","flow","flight"]; Output: "fl"
 * 
 * 2b) Use Cases/Constraints
 *      1 <= strs.length <= 200
 *      0 <= strs[i].length <= 200
 *      strs[i] consists of only lowercase English letters.
 * 
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // create a variable to store the potential longest common prefix = ""
    let longest = "";

    // create a variable storing the first string, you will use this to compare to the following strings
    let firstString = strs[0]; 

    // if there is only 1 string in the arr
    if (strs.length === 1) {
        return strs[0];
    }

    // for loop through the first string in strs
    for (let i = 0; i < firstString.length; i++) {
        for (let str of strs) {
            // if the str1[0] === str2[0] === strN[0]
            if (str[i] !== firstString[i]) {
                longest = firstString.slice(0, i) 
                return longest;
            }        
        } // else (not same char)
    }
    // return longest common prefix
    return firstString;

};

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"