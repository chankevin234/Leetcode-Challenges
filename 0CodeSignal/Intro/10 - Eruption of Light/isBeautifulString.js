/**
 * 1) Ask: A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet 
 * within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.
 * Given a string, check whether it is beautiful.
 * 
 * 1a) Examples:
 * inputString = "bbbaacdafe", output = true
 * This string contains 3 a's, 3 b's, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), 
 * so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.
 * 
 * 2) Pattern: Frequency Counter?
 * 
 * @param {String} inputString 
 * @returns {Boolean}
 */

function solution(inputString) {
    // sorted inputString
    // let sorted = inputString.split('').sort().join('');

    // // alphabet string
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'; 

    // create freq counter obj
    let freqObj = new Object();

    // creates alphabet dictionary
    for (let char of alphabet) {
        freqObj[char] = 0;
    }
    
    // go thru inputstring and add to freq counter
    for (let char of inputString) {
        freqObj[char]++;
    } 

    // console.log(freqObj);

    // loop through the obj and compare
    let prevValue = Object.keys(freqObj)[0];

    for (let key in freqObj) {
        if (freqObj[key] > prevValue) {
            return false;
        }
        prevValue = freqObj[key];
    }

    return true;    
}

console.log(solution('bbc')); // false
console.log(solution('bbbaacdafe')); // true    
