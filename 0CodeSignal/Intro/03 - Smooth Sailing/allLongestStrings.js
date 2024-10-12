/**
 * 1) Ask: Given an array of strings, return another array containing all of its longest strings.
 * 
 * 1b) Examples:
 *      inputArray = ["aba", "aa", "ad", "vcd", "aba"], output = ["aba", "vcd", "aba"].
 * 
 * 1c) Constraints:
 *      1 ≤ inputArray.length ≤ 10; 1 ≤ inputArray[i].length ≤ 10
 * 
 * 2) Pattern: Counter of max length + arr/stack of indices 
 *      
 * 
 * @param {Array} inputArray
 * @returns {Array} longestStrings 
 */

function solution(inputArray) {
    // create a longestStringLength int
    let longestStringLength = 0;
    // create currStringLength int
    let maxLength = 0;

    // create an empty arr of longestStrings
    let longestStrings = [];
    // create empty

    // for each loop over inputArray
    for (let current of inputArray) {
        // currStringLength = inputArray[i].length 
        currentStringLength = current.length;
        
        // if longestStrings.length === 0 
        if (current.length > maxLength) {
            console.log("New Max Length! " + maxLength);
            maxLength = current.length;
            longestStrings = [];
            longestStrings.push(current);
        } 
        else if (current.length === maxLength) {
            console.log("Adding to Longest Strings List!");
            longestStrings.push(current);
        } 
        else {
            console.log("Skipping!");
        }
        console.log(`Current Max Length: ${maxLength}\nCurrent LongestString List: ${longestStrings}`);
    }
    // return longestStringsArray
    return longestStrings;
}

solution(["aba", "aa", "ad", "vcd", "aba"]); // ["aba", "vcd", "aba"]
