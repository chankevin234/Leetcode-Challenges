/**
 * 1) Ask: 
 * Figure out the total number of purchased items in string. Sum up all the numbers which appear in the given input.
 * Return the sum of numbers that appear in the given inputString.
 * 
 * 1a) Examples:
 * inputString = "2 apples, 12 oranges", output = 14.
 * 
 * 2) Pattern: accumulator
 * 
 * @param {String} inputString 
 * @returns {Integer} sumOfNumbers
 */

function solution(inputString) {
    // create sum 
    let sumOfNumbers = 0;
    // split the inputString into array
    let inputStringArray = inputString.match(/[0-9]+/g);
    // let inputStringArray = inputString.match(/\d+/g);

    console.log(inputStringArray);
    if (!inputStringArray) {
        return 0;
    }

    // for of loop 
    for (let number of inputStringArray) {
        // convert each string to num
        sumOfNumbers += Number(number);
    }
    console.log(sumOfNumbers);
    return sumOfNumbers
}

// solution("2 apples, 12 oranges"); // 14.
solution("Your payment method is invalid") // 0
