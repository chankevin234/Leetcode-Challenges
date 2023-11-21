/**
 * 1) Ask: 
 * The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. 
 * What is the total maximum value of the items you can take with you, 
 * assuming that your max weight capacity is maxW and you can't come back for the items later?
 * 
 * Note that there are only two items and you can't bring more than one item of each type, 
 * i.e. you can't take two first items or two second items.
 * 
 * 1a) Examples:
 * value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, output (maxValue)= 10.
 * 
 * 2) Pattern?
 * 
 * 
 * @param {*} value1 
 * @param {*} weight1 
 * @param {*} value2 
 * @param {*} weight2 
 * @param {*} maxW 
 */

function solution(value1, weight1, value2, weight2, maxW) {
    // create var for combine weight
    let combined = weight1 + weight2;

    // check if combined weight <= maxW
    if (combined <= maxW) { // if true
        return value1 + value2; 
    }
    // if w1 < max, but w2 > max, return v1
    else if (weight1 <= maxW && weight2 > maxW) { 
        return value1;
    }
    // if w2 < max, but w1 > max, return v2
    else if (weight2 <= maxW && weight1 > maxW) {
        return value2;
    }
    // if both items > max, return 0
    else if (weight1 > maxW && weight2 > maxW) { 
        return 0;
    }        
    // assumes that both item1 and item2 < max, so check which value is greater and return
    else {
        return value1 > value2 ? value1 : value2;
    }
}

console.log(solution(10, 5, 6, 4, 8))// 10
console.log(solution(5,3,7,4,6)) // 7

