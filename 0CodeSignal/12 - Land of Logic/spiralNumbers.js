/**
 * 1) Ask: 
 * Construct a square matrix with a size N × N containing integers from 1 to (N * N) in a spiral order, 
 * starting from top-left and in clockwise direction.
 * 
 * 1a) Examples:
 * input n = 3, solution(n) = [[1, 2, 3],
 *                             [8, 9, 4],
 *                             [7, 6, 5]]
 * @param {Integer} n 
 * @return {Array} matrix
 */

function solution(n) {
    var res = Array(n*n).fill(null).map((el,i)=>i+1);
    console.log(res)
}

solution(3)