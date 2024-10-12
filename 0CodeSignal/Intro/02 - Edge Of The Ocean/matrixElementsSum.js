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
 *      array manipulation, map
 *       
 * @param {arr[[]]} matrix
 * @returns {integer} 
 */

function solution(matrix) {
    // create a variable for total
    let total = 0;

    // create a map of skippable columns
    let skip = new Map();

    // for loop to go through matrix[arr]
    for (let i = 0; i < matrix.length; i++) {
        // create a current floor var
        let currfloor = matrix[i];

        console.log("Curr Floor: " + currfloor); 

        // only check the indexes which haven't been flagged to be skipped
        // for loop to go through arr[j]
        for (let j = 0; j < currfloor.length; j++) {
            // if arr[j] contains a 0, add its index to the skip map (to skip this index from now on)
            if ((currfloor[j] === 0) || skip.has(j)) {
                skip.set(j);
                console.log("This index column is skipped: " + j);

            } else {
                // add the value to the total
                console.log("Adding this room: " + currfloor[j]);
                total += currfloor[j] 

            }
        }
        console.log("Skipped Indices: " + skip.toString());
        console.log("Current Total: " + total + "\n");

    }

    // return total
    console.log("Final Total: " + total);
    return total;
}

// solution(matrix = [[0, 1, 1, 2], 
                //    [0, 5, 0, 0], 
                //    [2, 0, 3, 3]]); // 9

solution(matrix = [[1,1,1,0], 
                   [0,5,0,1], 
                   [2,1,3,10]]); // 9
