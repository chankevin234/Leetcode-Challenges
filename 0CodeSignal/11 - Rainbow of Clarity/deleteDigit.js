/**
 * 1) Ask: Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
 * 1a) Examples:
 * n = 152, output = 52;
 * n = 1001, output = 101.
 * 
 * 2) Pattern
 * 
 * @param {Integer} n 
 * @returns {Integer} max
 */

function solution(n) {
    // split the integer into array of numbers
    let digits = String(n).split('').map(Number);
    console.log("Initial Digits: " + digits);

    let tempMax = 0;
    // create a max
    let max = tempMax;
    
    // for of loop thru array per digit 
    for (let i = 0; i < digits.length; i++) {
        // splice out the value at the index
        let index = i;
        console.log("Checking current digit: " + digits[i] + " at Index: " + index);
        
        let tempArray = [];

        for (let digit of digits) {
            tempArray.push(digit);
        }
        tempArray.splice(i, 1);
        tempMax = Number(tempArray.join(""));
        // console.log(tempMax);
        if (tempMax > max) {
            max = tempMax;

        }
    }
    console.log("MAX: " + max);
    return max;
   
}

solution(152);
