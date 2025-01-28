/**
 * 1) Ask: Determine if the given character is a digit or not.
 * 1a) Examples:
 *  symbol = '0', output = true
 *  symbol = '-', output = false.
 * 
 * 2) Pattern: for loop with parseInt?
 * 
 * @param {String} symbol
 * @returns {Boolean} 
 */

function solution(symbol) {
    // if char parseInt = true or '0'
    if (parseInt(symbol) || symbol === '0') {
        return true;
    }
    return false; 
}
