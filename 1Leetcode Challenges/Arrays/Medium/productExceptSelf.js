/**
 * 1) Ask: Given an integer array nums, 
 *      return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * Example:
 *      Input: nums = [1,2,3,4], Output: [24,12,8,6]
 *                  24 = 2*3*4 
 *                  12 = 1*3*4
 * 
 * 2) Use Cases:
 *      - at least 2 values in the nums array
 * 
 * Pattern = separate the array into 2 sides based on which value is exempted each time
 * 
 * @param {number[]} nums
 * @return {number[]} answers
 */

var productExceptSelf = function(nums) {
    // create a left side arr (of the exempted value)
    let leftArr = [];
    // create a right side arr (of the exempted value)
    let rightArr = [];

    // create an answers[] --> return @ end
    let answers = [];

    // loop, for length of nums on left side, multiply left side values togther, before exempted value
    for (let i = 0; i < nums.length; i++) {
        

    } 

    // loop, for length of nums on right side, multiply right side values together, after exempted value



    // multiply left arr * right arr

        // push into index i of answers arr   
    
    
    // return answers[]
};