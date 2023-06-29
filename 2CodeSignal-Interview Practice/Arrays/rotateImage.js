/**
 * 1) Ask: You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
 * Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview. 
 * 
 * Example: 
 * a = [[1, 2, 3],
 *      [4, 5, 6],
 *      [7, 8, 9]]
 * output = [[7, 4, 1],
 *           [8, 5, 2], 
 *           [9, 6, 3]]
 * 
 * 2) Pattern: move values in a circle, corner to corner
 * 
 * 
 */

function solution(a) {
    // create a left pointer = 0
    let leftPointer = 0;
    // create a right pointer = matrix's columns
    let rightPointer = a.length - 1;

    // while loop until left pointer = right
    while (leftPointer < rightPointer) {
        // for loop through in range (right - left)
        for (let i = 0; i < (rightPointer - leftPointer); i++) {
            // create top/bottom pointers (equal to left/right respectively)
            let top = leftPointer;
            let bottom = rightPointer;

            // save the topLeft value
            topLeft = a[top][leftPointer + i];

            // move bottomLeft into topLeft
            a[top][leftPointer + i] = a[bottom - i][leftPointer];

            // move bottomRight into bottomLeft
            a[bottom - i][leftPointer] = a[bottom][rightPointer - i];

            // move topRight into bottomRight
            a[bottom][rightPointer - i] = a[top + i][rightPointer];

            // move topLeft into topRight
            a[top + i][rightPointer] = topLeft;
            
        }
        // utilize the i to move the value inwards
        // dec. rightPointer
        rightPointer -= 1;
        // inc. leftPointer
        leftPointer += 1;
    }
    
    return a;
}
