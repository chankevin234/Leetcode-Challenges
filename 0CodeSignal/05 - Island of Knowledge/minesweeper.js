/**
 * 1) Ask: In the popular Minesweeper game you have a board with some mines and those cells that don't 
 * contain a mine have a number in it that indicates the total number of mines in the neighboring cells. 
 * Starting off with some arrangement of mines we want to create a Minesweeper game setup.
 * 
 * 
 * 
 * @param {Array[Boolean]} matrix
 * @returns {Array[Number]} outputMatrix 
 */

function solution(matrix) {
    // create x, y chart based on height/width
    // x axis
    let width = matrix[0].length;
    // y axis 
    let height = matrix.length;

    // create outputMatrix
    let outputMatrix = Array.from(Array(height), () => new Array(width));

    // console.log(outputMatrix);

    // for loop to go through each value in each y column
    for (let y = 0; y < height; y++) {
        // for loop to go through each value in each x row
        for (let x = 0; x < width; x++) {
            // print the values in the correct order 
            // let currSlot = matrix[x][y];
            // console.log(currSlot);

            // total mines
            let mines = 0;

            // check if there is a mine above  
            // check if there is a mine to the right
            // check if there is a mine to the left
            // check if there is a mine below

            // use cases:
            if (y > 0) { // if no row above, only check below and left right
                if (matrix[y-1][x-1]) { mines += 1; }
                if (matrix[y-1][x]) { mines += 1; }
                if (matrix[y-1][x+1]) { mines += 1; }
            }

            if (y < height - 1) {
                if(matrix[y+1][x-1]) { mines += 1; }
                if(matrix[y+1][x]) { mines += 1; }
                if(matrix[y+1][x+1]) { mines += 1; }
            }
            // if no column to the left, only check below, up, right
            if(matrix[y][x-1]) mines += 1;
            if(matrix[y][x+1]) mines += 1;
            // if no column to the right, only check below, up, left
            
            // currSlot = mines;
            outputMatrix[y][x] = mines;
        }
    }

    return outputMatrix;
}

let matrix =

[[true,false,false], 
 [false,true,false], 
 [false,false,false]]

console.log(solution(matrix));