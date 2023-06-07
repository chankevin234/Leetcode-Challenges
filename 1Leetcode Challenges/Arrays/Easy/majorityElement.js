/**
 * 1) Ask: Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. 
 *      You may assume that the majority element always exists in the array.
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 */

var majorityElement = function(nums) {
    // find the avg of the array, floored
    let average = Math.floor(nums.length / 2);
    
    // frequency counter obj 
    let freq = {};

    // majority element
    let mElement = null;

    // loop through the freq to see if any values > avg of array
    for (let value of nums) {
        freq[value] = (freq[value] || 0) + 1;
    }

    for (let key in freq) {
        if (freq[key] > average) {
            mElement = key;
        }
    }

    return mElement;
};

console.log(majorityElement([3,2,3]));
