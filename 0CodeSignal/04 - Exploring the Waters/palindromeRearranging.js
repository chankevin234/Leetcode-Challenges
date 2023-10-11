/**
 * 1) Ask: Given a string, find out if its characters can be rearranged to form a palindrome.
 * 
 * Example: 
 *  inputString = "aabb", output = true.
 *      Explanation: We can rearrange "aabb" to make "abba", which is a palindrome.
 * 
 * @param {String} inputString
 * @returns {Boolean} 
 * 
 * 2) Use Cases:
 *      A string consisting of lowercase English letters. 1 ≤ inputString.length ≤ 50.
 * 
 * 3) Pattern: reverse the string first to check? then use obj?
 *        
 */

// function reverseString(inputString) {
//     let reverse = "";
//     let stack = [];
//     // check if the initial inputString when reversed (use a stack)
//     for (let char of inputString) {
//         stack.push(char);
//         console.log(stack);
//     }

//     while (stack.length > 0) {
//         reverse += stack.pop();
//     }

//     console.log(reverse);

//     if (inputString === reverse) {
//         return true;
//     }

//     return false;
// }

function solution(inputString) {
    let charArray = inputString.split("");

    let letterObj = {}; 
    
    // append keys into obj
    for (let i = 0; i < charArray.length; i++) {
        // check if the char appears in the charArray
        if (!letterObj.hasOwnProperty(charArray[i])) {
            letterObj[charArray[i]] = 1;
        }
        else {
            letterObj[charArray[i]]++;
        }
    }

    console.log(letterObj);

    let oddCount = 0;

    for (let char in letterObj) {
        if (letterObj[char] % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount > 1 ? false : true;

}

console.log(solution("IHIHI")); // true

// function palindromeRearranging(inputString) {
//     // PATTERN: MAP

//     let charArray = inputString.split("");
//     let letterMap = new Map();

//     for (let i = 0; i < charArray.length; i++) {
//         if (!letterMap.has(charArray[i])) {
//             letterMap.set(charArray[i], 1); 
//         }
//         else {
//             letterMap.set(charArray[i], letterMap.get(charArray[i]) + 1);
//         }
//     }

//     console.log(letterMap);

//     let oddCount = 0;
//     console.log(oddCount);

//     console.log(letterMap.keys());


// }

// palindromeRearranging("HIHIHIHIHI");