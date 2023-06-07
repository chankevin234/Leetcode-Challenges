/**
 * 1) Ask: Given an integer array nums, return true if any value appears at least twice in the array, 
 *          and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 2) Use Cases
 * Example 1: Input: nums = [1,2,3,1], Output: true
 * Example 2: Input: nums = [1,2,3,4], Output: false
 * Example 3: Input: nums = [1,1,1,3,3,4,3,2,4,2] Output: true
 * 
 * Potential Pattern: Frequency Counter/Hashmap comparison
 * 
 */
var containsDuplicate = function(nums) {
    // create a hashmap to store the previously visited items as keys
    let prevVisited = new Map();

    // loop through the nums arr 
    for (let i = 0; i < nums.length; i++) {
        // if the value returned is found in the hashmap, return true
        if (prevVisited.has(nums[i])) {
            console.log("There is a duplicate...return: true");
            return true;
        }
        // else, add the value to hashmap
        prevVisited.set(nums[i], i);
    }
    // return false, if no duplicates
    console.log("There are no duplicates...return: false");
    return false;
};

console.log(containsDuplicate([1,2,3,1])); // true