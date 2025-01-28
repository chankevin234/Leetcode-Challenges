/**
 * 1) Ask: 
 * Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. 
 * In other words, find the element x in a, which minimizes the following sum:
 *      abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
 * 
 * If there are several possible answers, output the smallest one.
 * 
 * 1a) Example
 *      for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
 *      for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
 *      for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
 *      The lowest possible value is when x = 4, so the answer is 4.
 * 
 * 2) Pattern: Math
 * 
 * @param {Array} a 
 */
function solution(a) {
    // lowestsum 
    let lowestSum;
    // lowest
    let lowest = a[0];

    // for to go through each value of arr a
    for (let x of a) {
        let sum = 0;
        // for loop to find the sum based on x
        for (let i = 0; i < a.length; i++) {
            sum += Math.abs(a[i] - x);
        }
        console.log("Curr Sum = " + sum);
        let tempLowestSum = sum;

        if (lowestSum === undefined) {
            lowestSum = tempLowestSum;
            console.log("First time setting lowestsum");
        }

        // if sum < lowestSum
        if (sum > lowestSum) {
            break;
        }   
        lowestSum = sum;
        console.log("New Lowest Sum Found : " + lowestSum);

        lowest = Math.min(x, lowest);
        console.log(lowest);     
    }

    console.log("Lowest x = " + lowest);
    return lowest;
}

solution([2, 4, 7]); // 4