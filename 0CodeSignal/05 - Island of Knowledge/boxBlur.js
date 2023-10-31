/**
 * 1) Ask: The pixels in the input image are represented as integers. 
 * The algorithm distorts the input image in the following way: 
 *      - Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that 
 *          has its center at x, including x itself. 
 *      - All the pixels on the border of x are then removed.
 * 
 * Return the blurred image as an integer, with the fractions rounded down.
 * 
 * 2) Pattern: matrix
 * 
 */

function solution(image) {
    // create a var to return the final array of arrays
    let croppedImage = [];

    // for loop to go through the arrays i
    for (let i = 0; i < image.length - 2; i++) {
        // create an empty subarray
        let subarray = [];

        // for loop to go through the subarrays j  
        for (let j = 0; j < image[i].length - 2; j++) {
            // add together
            let sum = 0;
            for (let a = i; a < i + 3; a++) {
                for (let b = j; b < j + 3; b++) {
                    sum += image[a][b];
                }
            }
            subarray.push(Math.floor(sum/9));
        }
        
        // place into subarray
        croppedImage.push(subarray);
    }

    return croppedImage;
}

let image = [[1, 1, 1], 
             [1, 7, 1], 
             [1, 1, 1]];

console.log(solution(image)); // solution(image) = [[1]] 