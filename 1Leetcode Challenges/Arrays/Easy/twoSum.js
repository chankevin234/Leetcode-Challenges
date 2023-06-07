/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * 1) Take in an array of integers (nums) and an integer target (target)
 *      see if there are any 2 numbers that add up to the target, then return their indices
 * 2) Uses cases:
 *      - return 2 indices for values that equal the target
 *  
 * Pattern: Hashmap to store the diffs and compare to the target
 */

var twoSum = function(nums, target) {
    // take in nums array and target int
    // create a hashmap to store the searched through values of the array
    let prevMap = new Map();

    // set diff
    let diff = null;

    // loop through the nums array and check the difference
    for (i = 0; i < nums.length; i++) {
        // check the diff
        diff = target - nums[i];
        // if the diff exists as a key in the hashmap, return the map index and return the current array index
        if (prevMap.has(diff)) {
            return [prevMap.get(diff), i];
        }
        // else, add the found num to the map
        prevMap.set(nums[i], i);
    }
    
    return null;
};

console.log(twoSum([2,7,11,15], 9)); // [0, 1]