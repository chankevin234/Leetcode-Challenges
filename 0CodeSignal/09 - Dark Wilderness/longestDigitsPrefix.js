/**
 * 1) Ask: Given a string, output its longest prefix which contains only digits.
 * 1a) Examples:
 * inputString = "123aa1", output = "123".
 * 
 * 2) Pattern?
 * Split string, then check if when converted, it produces NaN
 * 
 * @param {String} inputString 
 * @returns {String} numberPrefix
 */

function solution(inputString) {
    // split string into array
    let stringArr = inputString.split("");
    // create prefix string
    let prefix = "";

    // loop through each value
    for (let char of stringArr) {
        // convert to integer
        if (Number(char) || char === '0') {
            // append to prefix if it is a num
            prefix += char;
            console.log(prefix);
        }
        // else,
        else {
            // nan, breaks the loop
            console.log("This is not a number, breaking out");
            break;
        }
    }
    // return prefix
    return prefix;
}

console.log(solution("123aa1")) // "123"
