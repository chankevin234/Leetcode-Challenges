/**
 * 1) Ask: Given a string, your task is to replace each of its characters by the next one in the English alphabet; 
 * i.e. replace a with b, replace b with c, etc (z would be replaced by a).
 * 
 * 2) Example: inputString = "crazy", output  = "dsbaz".
 * 
 */

function solution(inputString) {
    // create a data bank of alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    // console.log(alphabet);

    // create finalString
    let finalString = "";
    
    // for of loop through the string
    for (let char of inputString) {
        // compare to the databank
        if (alphabet.includes(char)) {
            // console.log("Adding at alphabet spot: " + alphabet.indexOf(char));
            let nextAlpha = alphabet.indexOf(char) + 1;
            finalString += alphabet[nextAlpha] || "a";
        }
        // set the value at i to be the following char in the databank

    }

    console.log("Final String: " + finalString);
    return finalString;
}

solution("crazy");
