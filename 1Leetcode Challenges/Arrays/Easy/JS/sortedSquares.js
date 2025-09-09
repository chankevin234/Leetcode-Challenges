/**
 * 1) Ask: Given an integer array nums sorted in non-decreasing order, 
 *      return an array of the squares of each number sorted in non-decreasing order.
 * 
 * 2) Use cases:
 *  - 1 <= nums.length <= 104; -104 <= nums[i] <= 104; nums is sorted in non-decreasing order.
 * 
 * Pattern: 2 Arrays 
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // create an empty array to store the squared values in nums
    let squaredArr = [];

    // for each loop through nums
    for (let value of nums) {
        // push onto empty array's end
        squaredArr.push(value ** 2);
    }

    console.log("Squared Arr: " + squaredArr);
    
    // sort the values in the squaredArr
    let sorted = squaredArr.sort(function(a, b) {
        return a-b
    });

    // return squaredArr sorted
    return sorted;
};

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]