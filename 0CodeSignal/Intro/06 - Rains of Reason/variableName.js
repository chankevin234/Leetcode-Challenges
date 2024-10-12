/**
 * 1) Ask: Correct variable names consist only of English letters, digits and underscores and 
 *      they can't start with a digit.
 * 
 * Check if the given string is a correct variable name.
 * 
 * 
 */

function solution(name) {
    let result = /^[a-zA-Z_]+[a-zA-Z0-9_]*$/.test(name);

    return result;
}

solution("var_1__Int");
