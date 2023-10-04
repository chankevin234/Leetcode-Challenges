/**
 * 1) Ask: Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements 
 *      in one of the arrays. Given two arrays a and b, check whether they are similar.
 * 1b) Examples:
 * a = [1, 2, 3] and b = [2, 1, 3], output = true. We can obtain b from a by swapping 2 and 1 in b.
 * a = [1, 2, 2] and b = [2, 1, 1], output = false. Any swap of any two elements either in a or in b won't make a and b equal.
 * 
 * 1c) Use Cases
 *  - if a.len !== b.len === False
 *  - 
 * 2) Patterns?
 *  
 */

function solution(a, b) {
    // Use Case 1:  check if the a and b are the same with .toString()
    if (a.toString() === b.toString()) {
        return true;
    }

    // Use Case 2: compare the values at index i for a[i] and b[i]
    // create 2 empty arrays (this will compare 2 values if sqapped, do they equate)
    let c = [];
    let d = [];

    // for loop through string
    for (let i = 0; i < a.length; i++) {
        // if the value is same, move to next value
        // if the value is not the same,
        if (a[i] !== b[i]) {
            // push a[i] into arr1
            c.push(a[i]);
            // push b[i] into arr2
            d.push(b[i]);
        }
    }
    // reverse arr2 (if identical, means that the swap works)
    d = d.reverse();

    // if arr1 len = 2 (more means fail) AND two arrays are equal
    if (c.length === 2 && (c.toString() === d.toString())) {
        return true;
    }    
    // Use Case 3: Fail
    return false;
}

// console.log(solution("hahaha", "hahha"));
