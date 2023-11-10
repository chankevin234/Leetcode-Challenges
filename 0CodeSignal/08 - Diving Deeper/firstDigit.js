/**
 * 1) Ask: Find the leftmost digit that occurs in a given string.
 * 1a) Example:
 *      inputString = "var_1__Int", output = '1'
 *      inputString = "q2q-q", output = '2'
 *      inputString = "0ss", output = '0'
 * 
 * 2) Pattern: split then for loop to first digit?
 *      
 * 
 * @param {String} inputString 
 * 
 */
function solution(inputString) {
    let inputArray = inputString.split("");
    console.log(inputArray);
    for (let char of inputArray) {
        // console.log(char);
        if (Number(char) || char === '0') {
            console.log("Found the leftmost digit --> " + char);
            return char;
        }
    }
    
}

solution("0ss");
