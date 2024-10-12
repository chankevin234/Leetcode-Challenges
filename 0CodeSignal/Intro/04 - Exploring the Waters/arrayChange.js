/**
 * 1) Ask: Given an array of integers. On each move you are allowed to increase exactly one of its element by one. 
 * Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
 * Example
 *      inputArray = [1, 1, 1], output = 3.
 */

function solution(inputArray) {
    let moves = 0;

    let current = inputArray[0];

    for (let i = 1; i < inputArray.length; i++) {
        if (current >= inputArray[i]) {
            moves += current - inputArray[i] + 1; 
            console.log("Takes " + moves + " moves, to get to element+1");
            inputArray[i] = current + 1;
        }
        console.log("Skipping since curr < inputArray[i]");
        current = inputArray[i];    

    }

    return moves;
}

console.log(solution([-1000, 0, -2, 0])) // 3