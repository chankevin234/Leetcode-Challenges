/**
 * 1) Ask: Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 *      Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 * 
 * 2) Use cases:
 *      - string is 1 char long, return 1
 *      - string contains 1 palindrome, return length
 *      - string contains 0 palindrome, return 0 
 * 
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function(s) {
    // if s is === 1
    if (s.length === 1) {
        // return 1
        return 1; 
    }

    // create a variable for the potential 'longest palindrome'
    let len = 0;

    // create a map to store the frequency of characters
    let freqMap = new Map(); // if the map's frequency contains a value divisible by 2, it is a palindrome
    
    // use for each loop to go through each char in the string
    for (let char of s) {
        let n = 0; // value to add to freq
        // if the value exists in the map
        if (freqMap.has(char)) {
            // check it's freq, if it is % 2, it is a palindrome value
            n = freqMap.get(char);
            if (n % 2) {
                // inc. the size of the returned length
                len += 2;
            }
        }
        // else, add the value to the map
        freqMap.set(char, n + 1);
    }
    // return the length
    return s.length > len ? len + 1 : len;
};

console.log(longestPalindrome("abccccdd"));