/**
 * 1) Ask: Check if all digits of the given integer are even.
 * 2) Examples:
 * n = 248622, output = true
 * 
 * @param {Number} n 
 */
function solution(n) {
    let numString = n.toString().split('');

    for (let digit of numString) {
        if (parseInt(digit) % 2 !== 0) {
            return false;
        }
    }

    return true;

    // console.log(numString);
}

console.log(solution(248622));
