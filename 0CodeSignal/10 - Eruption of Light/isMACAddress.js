/**
 * 1) Ask: 
 * The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), 
 * separated by hyphens (e.g. 01-23-45-67-89-AB).
 * Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.
 * 
 * @param {String} inputString
 * @returns {Boolean}  
 */

function solution(inputString) {
    // check the length of inputString = 17
    if (inputString.length !=17) {
        return false;
    }

    // split the string by '-'
    let splitStringArr = inputString.split('-');
    console.log(splitStringArr);

    // check if the string produces 6 substrings
    if (splitStringArr.length != 6) {
       return false; 
    }
    // check strings against these two ranges
    let numericRange = '0123456789';
    let alphaRange = 'ABCDEF';

    // for loop through the substringArr
    for (let substring of splitStringArr) {
        console.log(substring);
        // check the substrings to see if their length = 2
        if (substring.length != 2) {
            return false;
        }
        // check if the first value of the substring[0] = 0-9 or A-F
        // check if the second value of the substring[1] = 0-9 or A-F
        if (
            (numericRange.includes(substring[0]) || alphaRange.includes(substring[0])) 
            &&
            (numericRange.includes(substring[1]) || alphaRange.includes(substring[1]))) {
                continue;
            }
        else {
            return false;
        }
    }
    console.log("This is a legit MAC address");
    return true;

}

console.log(solution("00-1B-63-84-45-E6")) // true
console.log(solution("Z1-1B-63-84-45-E6")) // false

