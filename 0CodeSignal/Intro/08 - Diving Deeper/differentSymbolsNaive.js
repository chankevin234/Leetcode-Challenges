/**
 * 1) Ask: Given a string, find the number of different characters in it.
 * 1a) Examples:
 * s = "cabca", output = 3.
 * 
 * 2) Pattern: Freq Counter 
 * @param {String} s 
 */

function solution(s) {
    // create a freq counter obj
    let unique = {};
    let uniqueLen = 0;
    // loop thru
    for (let i = 0; i < s.length; i++) {
        // if value doesn't exist in the obj, add it
        if (!(s[i] in unique)) {
            console.log("Adding a new unique value");
            unique[s[i]] = 1;
        }
        console.log("Skipping");
    }
    console.log(unique);
    uniqueLen = Object.keys(unique).length;    
    // return length of unique obj
    return uniqueLen;
}

console.log(solution("cabca")); // 3