/**
 * 1) Ask: Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
 * 2) Examples:
 * - inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, output = [3, 2, 3].
 * 
 * 
 * @param {*} inputArray 
 * @param {*} elemToReplace 
 * @param {*} substitutionElem 
 */

function solution(inputArray, elemToReplace, substitutionElem) {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}

console.log(solution([1, 2, 1], 1, 3));