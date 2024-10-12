/**
 * 1) Ask: Define a word as a sequence of consecutive English letters. Find the longest word from the given string.
 * 1a) Examples:
 * text = "Ready, steady, go!", output = "steady"
 *  
 * @param {String} text 
 * @returns {String} longestWord
 */

function solution(text) {
    // creates an array of strings
    let words = text.match(/[a-zA-Z]+/g); 
    console.log(words);
    
    // counter of length
    let longestWord;
    let maxCounter = 0;

    // for of loop through text
    for (let word of words) {
        let currWord = word;
        console.log(word);
        let currLen = word.length;
        console.log(currLen);
        
        if (currLen > maxCounter) {
            longestWord = word;
            maxCounter = currLen;
        }
    }

    console.log("LongestWord: " + longestWord, maxCounter);

    return longestWord;

}
solution("Ready, _ steady, go!");