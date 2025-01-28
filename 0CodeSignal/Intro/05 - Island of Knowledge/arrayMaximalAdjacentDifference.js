/**
 * 1) Ask: Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
 * 2) Pattern: 2 Pointers
 * 
 * 3) Examples:
 *  inputArray = [2, 4, 1, 0], output = 3
 * 
 * @param {Integer[]} inputArray
 * @returns {Integer} difference 
 */

function solution(inputArray) {
    // create maximal diff
    let max = 0;
    let diff = 0;
    // for loop to compare adjacent elements
    for (let i = 0; i < inputArray.length - 1; i++) {
        diff = Math.abs(inputArray[i] - inputArray[i+1]);
        console.log("Diff of " + inputArray[i] + " and " + inputArray[i+1] + " = " + diff);
        
        if (diff > max) {
            max = diff;
        }

        console.log("Current MAX = " + max);

    }

    return max;
}

solution([2, 4, 1, 0]) // 3

