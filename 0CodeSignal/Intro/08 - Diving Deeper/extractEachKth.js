/**
 * 1) Ask: Given array of integers, remove each kth element from it.
 * 1b) Examples:
 *      For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, output = [1, 2, 4, 5, 7, 8, 10].
 * 
 * @param {Array} inputArray 
 * @param {Number} k
 * 
 * @returns {Array} outputArray 
 */
function solution(inputArray, k) {
    let outputArray = [];
    // let counter = 1;

    for (let i = 0; i < inputArray.length; i++) {
        if ((i+1) % k !== 0) {
            outputArray.push(inputArray[i]);
        }
        console.log("Skipping: " + inputArray[i]);
    }
    return outputArray;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [1, 2, 4, 5, 7, 8, 10]


