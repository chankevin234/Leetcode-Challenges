/**
 * 1) Ask: Write a function that reverses characters in (possibly nested) parentheses in the input string. 
 *      Constraint: Input strings will always be well-formed with matching ()s.
 * 
 * 1b) Examples: 
 * inputString = "(bar)", output = "rab";
 * inputString = "foo(bar)baz", output = "foorabbaz";
 * inputString = "foo(bar)baz(blim)", output = "foorabbazmilb";
 * 
 * 2b) Pattern: String Manipulation + Reverse a String
 *      1. Find the pairs of parentheses
 *      2. Find the part of the string we need to reverse
 *      3. Reverse the string
 *      4. Repeat until all parentheses are replaced
 *           
 * 
 */

// 1. Find the pairs of parentheses
function getStartandEndIndexes(inputString) {
    let startIdx = null;
    let endIdx = null;
    const charsArr = inputString.split(''); // split string into substrings

    for (let i = 0; i < charsArr.length; i++) {
        const char = charsArr[i];
        
        if (char === '(') { 
            startIdx = i;
        }   

        if (char === ')') {
            endIdx = i;
            break;
        }

        if (startIdx === null || endIdx === null) {
            return null;
        }
        return (startIdx, endIdx);
    }
}
// 2. Find the part of the string we need to reverse
function reverseParentheses(startIdx, endIdx, inputString) {
    // before paranthesis
    const startSegment = inputString.substring(0, startIdx);

    // the paranthesis
    const paranthesisSegment = inputString.substring(startIdx + 1, endIdx);

    // after the parenthesis
    const endSegment = inputString.substring(endIdx + 1, inputString.length);

    return startSegment + reverse(paranthesisSegment) + endSegment;
}

// 3. Reverse the string
function reverse(string) {
    return string.split('').reverse().join('');
} 

// reverseInParentheses
function solution(inputString) {
    let indexes = getStartandEndIndexes(inputString);

    while (indexes) {
        const {startIdx, endIdx} = indexes;
        const newString = reverseParentheses(startIdx, endIdx, inputString);

        inputString = solution(newString);
        indexes = getStartandEndIndexes(inputString);

    }

    return inputString;
}
