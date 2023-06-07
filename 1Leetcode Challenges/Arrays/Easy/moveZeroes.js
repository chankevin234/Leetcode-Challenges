/**
 * 1) Ask: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *      Note that you must do this in-place without making a copy of the array.
 * 
 * 2a) Use Case:
 *      Input: nums = [0,1,0,3,12]; Output: [1,3,12,0,0]
 * 
 * 2b) Pattern: Two Pointers
 *  
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length === 1) {
        return;
    }
    // create a pointer for 0 values (left)
    let zeroPointer = 0;
    // create a pointer for non-0 values (right) --> this is equivalent to i since it constantly moves
    // let nonZeroPointer = 0;
    
    // loop through the nums arr 
    for (let i = 0; i < nums.length; i++) {
        // if you reach a 0, move the non-0 pointer up by 1
        if (nums[i] !== 0) {
            [nums[i], nums[zeroPointer]] = [nums[zeroPointer], nums[i]]; // swap the 0 with the non-zero
            zeroPointer++; // push the zeroPointer up
        } 
        // nonZeroPointer++;

        console.log(nums, zeroPointer, i);
    }
};

console.log(moveZeroes([0,1,0,3,12])); //[1,3,12,0,0]
console.log(moveZeroes([0, 0, 1, 0])); //[1,0,0
console.log(moveZeroes([1,0])); //[1,0,0
