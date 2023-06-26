/**
 * 1) Ask: Given an array a that contains only numbers in the range from 1 to a.length, 
 *      find the first duplicate number for which the second occurrence has the minimal index. 
 *      In other words, if there are more than 1 duplicated numbers, 
 *      return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. 
 *      If there are no such elements, return -1
 * 
 * 2) Constraints:
 *      Input: 1 ≤ a.length ≤ 105; 1 ≤ a[i] ≤ a.length.
 * 
 * 2b) Pattern: Hash Map
 * 
 * @param {Array} a 
 * @return {Integer} element
 */

function solution(a) {
    // create a hashmap to store visited values and their index
    let seen = new Map();
    let index = 0;
    // for each loop through value in the array 
    for (let value of a) {
        // compare to the hashmap
        // if there is a value/key that repeats, 
        if (seen.has(value)) {
            // return its index
            return value;
        }
        // else, add the value to the hashmap + its index
        seen.set(value, index);
        index++;
    }
    console.log(seen);        
    // if loop ends return -1
    return -1;
}
a = [2, 1, 3, 5, 3, 2];
b = [2, 4, 3, 5, 1];

console.log(solution(a)); // ans: 3
console.log(solution(b)); // ans: -1

