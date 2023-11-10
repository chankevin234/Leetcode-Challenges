/**
 * 1) Ask: Consider integer numbers from 0 to n - 1 written down along the circle in such a way 
 *      that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too). 
 * 
 * Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
 * 
 * n = A positive even integer.
 * 
 * 1a) Example: For n = 10 and firstNumber = 2, output = 7.
 * 
 * 2) Pattern?:
 *      find pos0 = 0 
 *      find pos0's halfway  = roundDown(n / 2)
 *      if firstNum > halfway, subtract from midpoint
 *      if firstNum < halfway, add from midpoint
 *      
 * 
 * 
 * @param {Number} n 
 * @param {Number} firstNumber 
 * @returns {Number} oppNum
 */

function solution(n, firstNumber) {
    // figure out the distance between pos0 and its midpoint 
    let start = 0;
    let midpoint = n / 2;
    let oppNum;
    
    // if firstNum > halfway, subtract from midpoint
    if (firstNumber > midpoint) {
        oppNum = firstNumber - midpoint;
    }
    // if firstNum < halfway, add from midpoint
    else if (firstNumber < midpoint) {
        oppNum = midpoint + firstNumber;
    }
    // else, output = start
    else {
        oppNum = start;
    }

    // return oppNum
    console.log(`Start: ${start}\nMidpoint: ${midpoint}\nOppNum: ${oppNum}`);

    return oppNum;
}

// solution(10, 2); //7
solution(10, 7); //7

