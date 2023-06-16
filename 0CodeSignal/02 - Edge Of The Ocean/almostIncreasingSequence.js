/**
 * 1) Ask: Given a sequence of integers as an array, 
 * determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
 * Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
 * 
 * 1a) Example: 
 *      For sequence = [1, 3, 2, 1], the output = false. 
 *      For sequence = [1, 3, 2], the output = true
 *
 * 2a) Guaranteed constraints:
 *      2 ≤ sequence.length ≤ 105,
 *      -105 ≤ sequence[i] ≤ 105
 * 2b) Use Cases
 *      - if count of times where sequence[i] > sequence[i-1] is > 1, return false
 *      - if count of times where sequence[i] > sequence[i-1] is === 1.
 *          - check if sequence[i+1] > sequence[i-1], if true, return true
 *          - otherwise, return false
 *      - if sequence.length === 2, and, seq[i] > seq[i-1], return false
 * 
 * 2c) Pattern: Frequency counter?
 *  
 * @param {integer[]} sequence 
 * @return {boolean} 
 */

function solution(sequence) {
    // create count of invalids 
    let count = 0; 

    // 1) loop through the sequence to gather counts where sequence[1] > sequence[i-1]
    for (let i = 1; i < sequence.length; i++) {
        // if there is seq[i] , seq[i-1]
        if (sequence[i] <= sequence[i - 1]) {
            // inc. count
            count++;
            // 2) compare the count to the use cases
            // if count > 1, return false
            if (count > 1) {
                return false;
            }
            // if count === 1
            if ((sequence[i] <= sequence[i-2]) && (sequence[i+1] <= sequence[i-1])) {
                return false;
            }
        }
    }
    // if count === 0, return true
    return true;
}