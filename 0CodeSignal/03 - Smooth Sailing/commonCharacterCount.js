/**
 * 1) Ask: Given two strings, find the number of common characters between them. 
 *      inputs: string1, string2
 *      outputs: integer 
 * 1b) Examples:
 * s1 = "aabcc" and s2 = "adcaa", output = 3; Strings have 3 common characters - 2 "a"s and 1 "c".
 * 
 * 2) Use Cases:
 *      - 
 * 3) Pattern: Frequency Counter
 * 
 * @param {string} s1 
 * @param {string} s2 
 * 
 * @returns {integer} count
 */

function solution(s1, s2) {
    // create variable to store total count of common characters 
    let count = 0;

    // create 2 objs that serve as counters 
    // create obj1
    let freqObj1 = {};
    // create obj2
    let freqObj2 = {};

    // loop through string1 to find frequencies
    for (let char of s1) {
        freqObj1[char] = (freqObj1[char] || 0) + 1;
    }

    // loop through string2 to find frequencies
    for (let char of s2) {
        freqObj2[char] = (freqObj2[char] || 0) + 1;
    }

    console.log(freqObj1, freqObj2);

    // compare the freq counters, if same key, check freq. take the least of the same key frequencies
    for (let key in freqObj1) {
        if (freqObj2.hasOwnProperty(key)) { // if the key exists in freqObj2, take the lower freq
            count += (Math.min(freqObj1[key], freqObj2[key]));
        }
    }
    return count;
}

console.log("Final Count of common characters: " + solution("aabcc", "adcaa")); // 3