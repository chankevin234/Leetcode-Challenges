/**
 * 1) Ask: Given array of integers, find the maximal possible sum of some of its k consecutive elements.
 * 1a) Example:
 *      inputArray = [2, 3, 5, 1, 6] and k = 2, output = 8.
 *      All possible sums of 2 consecutive elements are:
 *          2 + 3 = 5;
 *          3 + 5 = 8;
 *          5 + 1 = 6;
 *          1 + 6 = 7.
 *      Thus, the answer is 8.
 * 
 * 2) Pattern: Sliding Window
 * 
 * 
 * @param {Array} inputArray 
 * @param {Number} k 
 

*/

function solution(inputArray, k) {
    // create var for initial largest sum
    let largestSum = 0;
    // loop through based on k to find this
    for (let i = 0; i < k; i++) {
        largestSum += inputArray[i];
    }

    console.log("This is the initial largestSum = " + largestSum);

    // create tempsum value
    let tempSum = 0;
    // make it equal to inital largest sum
    tempSum = largestSum;

    // loop through the array starting from the end of the initial subarray
    for (let j = k; j < inputArray.length; j++) {
        // tempsum = tempsum + (current element - 1st element in subarray)
        tempSum = tempSum + (inputArray[j] - inputArray[j - k]);
        // if the tempsum > largestsum 
        if (tempSum > largestSum) {
            // set largestsum = tempsum
            largestSum = tempSum;
        }
    }
    
    // return largestsum
    return largestSum;
}

console.log(solution([2, 3, 5, 1, 6], 2)); //8
