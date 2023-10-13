/**
 * 1) Ask: 
 *  You are given an array of integers representing coordinates of obstacles situated on a straight line.
 *      Assume that you are jumping from the point with coordinate 0 to the right. 
 *  You are allowed only to make jumps of the same length represented by some integer.
 *  
 *  Find the minimal length of the jump enough to avoid all the obstacles.
 * 
 * 2) Pattern: Pointer
 * 
 * Example: inputArray = [5, 3, 6, 7, 9], output = 4. 
 * 
 *  */

function solution(inputArray) {
    // sort the array by size
    let obstacles = inputArray.sort(
        function(a, b) { 
            return a - b; 
        });

    // console.log(obstacles);

    // create moves int, minimal is always 1 move 
    let moves = 1;

    // set the max value as the end of the obstacles
    let max = obstacles[obstacles.length - 1];

    // check length of hop to clear 1st obstacle
    for (let i = 1; i < max; i++) {
        if (obstacles.every((element) => {    
            return element % i !== 0
        })) {
            console.log("It took: " + i + " moves!");
            return i;
        } 
    } 
}

solution([5, 3, 6, 7, 9]); // 4
solution([1,2]); // 1

