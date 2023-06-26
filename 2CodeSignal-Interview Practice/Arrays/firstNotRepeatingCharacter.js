/**
 * 1) Ask: Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. 
 *      If there is no such character, return '_'.
 * 1b) Examples
 *      s = "abacabad", output = 'c'
 *      Explain: There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
 *      
 *      s = "abacabaabacaba", output = '_'
 * 
 * 2) Pattern: Hashmap/Frequency Counter
 * 
 * @param {string} s
 * @return {string} char 
 * 
 */

function solution(s) {
    // create an freq counter for the values in order of scene and frequency
    let freqCounter = {};
    // for loop through the s arr to pull values
    for (let i = 0; i < s.length; i++) {
        // loop through the freq counter and grab first value that has a freq = 1
        freqCounter[s[i]] = (freqCounter[s[i]] || 0) + 1;
    }
    console.log(freqCounter);

    for (let key in freqCounter) {
        console.log("starting loop");

        // if there is a key with a value of 1, return it
        if (freqCounter[key] === 1) {
            return key;
        }
    }
    // else, return '_'
    return "_";
}

console.log(solution("abacabad")); // 'c'
