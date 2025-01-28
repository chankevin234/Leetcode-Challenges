/**
 * URL: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 * 
 * 1) Ask: Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. 
 * The function should return an integer indicating the index in s of the first occurrence of x. 
 * If there are no occurrences of x in s, return -1.
 * 
 * @param {String} s
 * @param {String} x
 * 
 * @returns {Integer} index
 * 
 * Exaample:
 * - s = "CodefightsIsAwesome"; x = "IA", solution(s, x) = -1;
 * - s = "CodefightsIsAwesome"; x = "IsA", solution(s, x) = 10.
 * 
 * 2) Pattern? Sliding Window Array (queue) --> length = len(x)
 * 
 */

function solution(s, x) {
    // OPTION 1: BRUTE FORCE

    if (x.length > s.length) {
        return -1;
    }

    // Loop through the haystack's letters
    for (let i = 0; i <= s.length - x.length; i++) {
        console.log("Index: " + i + "\nNeedle: " + x + "\nStack: " + s);
        // Check if the current letter matches the start of the needle
        if (s[i] == x[0]) {
            console.log("Starting Check, since first key Slot was found!");
            // Loop through the needle
            for (let j = 0; j <= x.length; j++) {
                // Reached the end of the needle (and thus fully found it at i)
                if (j == x.length) {
                    return i;
                }
                // Letters not matched (needle not found at i)
                if (s[i+j] !== x[j]) { 
                    break;
                }
            }
        }
    }
    return -1;
}

console.log(solution("CodefightsIsAwesome", "IsA"));