/**
 * 1) Ask: You found some binary code. 
 * After some thought, your first guess is that each consecutive 8 bits of the code stand for the 
 * character with the corresponding extended ASCII code.
 * 
 * 1a) Examples:
 * code = "010010000110010101101100011011000110111100100001", output = "Hello!"
 *      The first 8 characters of the code are 01001000, which is 72 in the binary numeral system. 
 *      72 stands for H in the ASCII-table, so the first letter is H.
 *      Other letters can be obtained in the same manner.
 * 
 * @param {String} code 
 */

function solution(code) {
    let arraySplitStrings = code.match(/.{1,8}/g);
    let decodedMessage = "";
    
    // console.log(splitStrings);
    for (let ascii of arraySplitStrings) {
        decodedMessage += String.fromCharCode(parseInt(ascii, 2));
    }
    console.log(decodedMessage);
    return decodedMessage;
}

solution("010010000110010101101100011011000110111100100001");
