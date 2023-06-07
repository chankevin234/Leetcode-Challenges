/**
 * 1) Ask: Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
 * Example:
 *  For n = 2, the output should be solution(n) = 5; For n = 3, the output should be solution(n) = 13.
 * @param {integer} n 
 * 
 * 2) Use Cases
 * 
 * 3) Math
 * n1 = 1 
 * 4
 * n2 = 5
 * 8
 * n3 = 13
 * 12
 * n4 = 25
 * 16
 * n5 = 41
 * 
 */

function solution(n) {
    // create a var called 'area' to calculate the area per n-interesting polygon = 1
    let area = 1;

    // loop through until you have reached nth time
    for (let i = 0; i < n; i++) {
        // area = area + 4n
        area = area + (4*i);
    }

    return area;
}

console.log(solution(3));