/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    // Pattern: 2 for loops
    // x = x-axis - 2
    // y = y-axis - 2
    // console.log(arr);
    
    // init maxHourglass = -infinity
    let maxHrglass = -Infinity;
            
    // for loop for x (row) -- uptill - 2
    for (let x = 0; x < arr.length - 2; x++) {
        // for loop for y (column)
        for (let y = 2; y < arr[x].length; y++) {
            // create top part of hour glass
            let currHrglass = arr[x][y-2] + arr[x][y-1] + arr[x][y];
            // create middle part
            currHrglass += arr[x+1][y-1];
            // create bottom part
            currHrglass += arr[x+2][y-2] + arr[x+2][y-1] + arr[x+2][y];
            
            console.log("Current Hrglass Total = " + currHrglass);
            console.log("Max Hrglass Total = " + maxHrglass);
            
            // check against current maxHourglass sum; if larger, switch
            maxHrglass = Math.max(maxHrglass, currHrglass);
            
            console.log("New Max = " + maxHrglass);            
        }
    }
                
    return maxHrglass;
    
}