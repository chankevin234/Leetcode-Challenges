/**
 * 1) Ask: Given matrix of arr[integers], where each value represents the cost of the room
 *      Return the total sum of all rooms
 * 
 * 1a) Restrictions:
 *      They refuse to stay in any of the free rooms, 
 *      or any of the rooms below any of the free rooms.
 * 
 * 1c) Examples:
 *      matrix = [[0, 1*, 1*, 2*],
 *                [0, 5*, 0, 0], 
 *                [2, 0, 3, 3]
 *               ]
 *      the output should be = 9; Thus, the answer is 1 + 5 + 1 + 2 = 9.
 * 
 * 2a) Constraints:
 *      - each matrix.length >= 1
 *      - each matrix[i].length >= 1
 *      - each value is 0-10
 * 2b) Use Cases:
 *      - if matrix[i][j] !== 0, 
 *          if matrix[i-1][j] !== 0, add to total
 *          else, skip it
 * 
 * 2c) Pattern?
 *      array manipulation
 *       
 * @param {arr[[]]} matrix
 * @returns {integer} 
 */

function solution(matrix) {
    // create a variable for total
    let total = 0;

    // create a prevFloor var
    let prevFloor = null;

    // for loop to go through matrix[arr]
    for (let i = 1; i < matrix.length; i++) {
        // create a floor var
        let floor = matrix[i];
        prevFloor = matrix[i-1];

        console.log("Floor Level: " + floor + "\nPrevFloor Level: " + prevFloor); 

        // for loop to go through arr[j]
        for (let j = 0; j < floor.length; j++) {
            // if arr[j] != 0 && prevFloor[j] != 0
            if ((floor[j] !== 0) && (prevFloor[j])) {
                // total += value
                console.log("Valid Room -- Adding room cost: " + floor[j]);
                total += floor[j];
            } 
        }
    }

    // return total
    console.log("Final Total: " + total);
    return total;
}

solution(matrix = [[0, 1, 1, 2], 
                   [0, 5, 0, 0], 
                   [2, 0, 3, 3]]);
