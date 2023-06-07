/**
 * 1) Ask: A phrase is a palindrome if, 
 *      after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
 *      it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *      
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * @param {string} s
 * @return {boolean}
 * 
 * 2) Use Cases
 *      - empty string after removing non-alphanumeric chars, return false
 *      - string is length = 1, return true
 *      - when reversed, the string is equal to reversedString, return true
 *      - when reversed, the string is not equal to reversedString, return false
 */
var isPalindrome = function(s) {    
    // remove the non-alphanumeric characters in the string
    const cleanString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // check the length of the string
    // if string.length <= 1, return true
    if (cleanString.length <= 1) {
        console.log("This is a palindrome");
        return true;
    }
    // else, continue
    // reverse the string
    let reverseString = "";
    
    function reverse(cleanString) {
        // base case to return
        if (cleanString.length <= 1) {
            return cleanString;
        }
        return reverse(cleanString.slice(1)) + cleanString[0];
    }

    reverseString = reverse(cleanString);

    console.log("Reversed String: " + reverseString);

    // compare the reversed string to the cleaned string
    for (let i = 0; i < cleanString.length; i++) {
        // if the reverseString's chars don't match cleanString, return false
        if (reverseString[i] !== cleanString[i]) {
            return false;
        }
    }

    return true;

};

console.log(isPalindrome(" ")); // true
console.log(isPalindrome(".,")); //expected = true
console.log(isPalindrome("ab_a")); //expected = true

