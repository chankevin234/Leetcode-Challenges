/**
 * 1) Ask:
 * Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until 
 * we get to a one digit number.
 * 
 * Given an integer, find its digit degree
 * 
 * 1a) Examples:
 * n = 5, output = 0;
 * n = 100, output = 1.
 *      Explanation: 1 + 0 + 0 = 1.
 * 
 * n = 91, the output = 2.
 *      Explanation: 9 + 1 = 10 -> 1 + 0 = 1.
 * 
 * 2) Pattern? for loop and convert?
 * 
 * @param {Number} n 
 * @returns {Number} digitDegree
 */

function solution(n) {
    // if n < 10, return 0
    if (n < 10) {
        return 0;
    }

    // create var for final value
    let total = 0;
    // create var for digit degree 
    let digitDegree = 0;
    // create var for number
    let number = n.toString().split("");
    // console.log(number);
      
    // for of loop
    while (number.length > 1) {
        total = number.reduce(
            (accumulator, currentValue) => accumulator + Number(currentValue),
            0,
          );
        console.log(total);

        digitDegree++;

        // else, add to digit degree
        console.log(digitDegree);
        number = total.toString().split("");
        console.log(digitDegree);
    }
    // return digit degree
    console.log(digitDegree);
    return digitDegree;
}

solution(91); // 1 