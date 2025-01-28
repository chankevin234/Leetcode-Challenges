/**
 * 1) Ask: Ticket numbers usually consist of an even number of digits. 
 * A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
 * Given a ticket number n, determine if it's lucky or not.
 * Example
 *      For n = 1230, the output = true; For n = 239017, the output = false.
 * 1b) 
 * @param {integer} n
 * @return {boolean} 
 * 
 * 2) Use Cases
 *      - if n.len is odd, return false
 *      - if n.len is even
 *          & 1st half === second half, return true
 *          & 2nd half !== second half, return false
 * 
 * Pattern: 2 pointers
 * 
 */

function solution(n) {
    // create a stringNumber (convert)
    let sNumber = n.toString(); 
    console.log(sNumber);

    // create a count for 1st half
    let count1 = 0;
    // create a count for 2ns half
    let count2 = 0;

    // create start pointer
    let start = 0;
    // create second half start pointer
    let half = sNumber.length/2;

    // loop through the string number's first half
    for (let i = start; i < half; i++) {
        console.log("Index: " + i);
        count1 += Number(sNumber[i]);
    }
    console.log("\n");
    // loop through the string number's second half
    for (let j = half; j < sNumber.length; j++) {
        console.log("Index: " + j);
        count2 += Number(sNumber[j]);
    }
    console.log(count1, count2);

    // compare the two counts together
    if (count1 === count2) {
        // return true, if same sums
        return true; 
    }
    // return false, if diff sums 
    return false;
}

console.log(solution(123456));
