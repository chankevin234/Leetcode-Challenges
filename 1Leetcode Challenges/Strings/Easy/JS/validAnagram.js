/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 1) Ask: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * 
 * 1a) Pattern: Frequency Counter
 * 
 * 2) Use cases:
 *  - two strings --> have same letters, same order = true
 *  - two strings --> have same letters, diff order = true
 *  - two strings --> have diff number of letters = false
 *  - two strings --> same number of letters + diff number of frequencies = false     
 */
var isAnagram = function(s, t) {
    // 3) Breakdown the problem

    // check string1.length vs. string2.length
    if (s.length != t.length) {
        return false;
    } 

    // create 2 objs per string to check the frequency of the letters
    let freqCounter1 = {};
    let freqCounter2 = {};
    // then loop through each string and add each char as a key 
    for (let letter of s) { // forEach loop
        freqCounter1[letter] = (freqCounter1[letter] || 0) + 1;
    }

    for (let letter of t) {
        freqCounter2[letter] = (freqCounter2[letter] || 0) + 1;
    }

    console.log(freqCounter1);
    console.log(freqCounter2);
    
    // then compare the two obj to see:
    for (let key in freqCounter1) {
        // if both obj contain the key
        if (!freqCounter2.hasOwnProperty(key)) {
            return false;
        }
        // if both obj's keys have the same counter
        if (freqCounter2[key] !== freqCounter1[key]) {
            return false;
        }
        // return false if any check fails

    }
    // return true if it passes all these checks
    return true;
};

console.log(isAnagram("anagram", "nagaram"));