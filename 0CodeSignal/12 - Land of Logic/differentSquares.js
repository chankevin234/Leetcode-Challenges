/**
 * 1) Ask: Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.
 * 1a) Examples:
 * matrix = [[1, 2, 1],
 *           [2, 2, 2],
 *           [2, 2, 2],
 *           [1, 2, 3],
 *           [2, 2, 1]]
 * output = 6.
 * 
 * Explanation: Here are all 6 different 2 × 2 squares:
 * 1 2
 * 2 2
 *  
 * 2 1
 * 2 2
 * 
 * 2 2
 * 2 2
 * 
 * 2 2
 * 1 2
 * 
 * 2 2
 * 2 3
 * 
 * 2 3
 * 2 1
 * 
 * 2) PATTERN TO LEARN!!! Use a SET() since all values inside are unique!s
 * 
 * @param {Array} matrix 
 * @returns {Number} diffSquares
 */

function solution(matrix) {
    // create comparing array of subarrays
    let diffSquares = [];

    // part 1: loop thru the matrix in 2x2 boxes
    
    // loop thru y axis
    for (let i = 0; i < matrix.length - 1; i++) {
        let subarray = matrix[i];
        // console.log("Subarray #" + i);
    
        for (let j = 0; j < subarray.length - 1; j++) {
            // console.log(matrix[i][j]);
            // part 2: store the 2x2 boxes in another array?

            // create a small square 2x2 
            let smallSquare = [
                                matrix[i][j], matrix[i][j+1], 
                                matrix[i+1][j], matrix[i+1][j+1]
                              ];
            // console.log(diffSquares);
            
            // if the subarray (smallSquare) is unique, append to the array 
            if (isUnique(smallSquare)) {
                // console.log("Adding a unique 2x2 Square! " + smallSquare);
                diffSquares.push(smallSquare);
            }
        }
    }

    // create function to check if subarray is unique
    function isUnique(smallSquare) {
        return diffSquares.every(
            c => {
                return c[0] !== smallSquare[0] ||
                c[1] !== smallSquare[1] || 
                c[2] !== smallSquare[2] ||
                c[3] !== smallSquare[3]  
            }
        );
    }

    // console.log("Diff Squares Array of Arrays: " + diffSquares);
    console.log("Total Diff Squares = " + diffSquares.length);
    return diffSquares.length;

}

matrix = [[1, 2, 1], 
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]];

solution(matrix); //6