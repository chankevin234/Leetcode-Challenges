/**
 * 1) Ask:  * Given a rectangular matrix of characters, add a border of asterisks(*) to it.
 * 
 * 2) Example:
 * input = ["abc",
 *          "ded"]
 * output = ["*****",
 *           "*abc*",
 *           "*ded*",
 *           "*****"]
 * 
 * @param {Array} picture
 * @returns {Array} border
 * 
 * 3) Use Cases/Constraints:
 *    A non-empty array of non-empty equal-length strings.
 *    1 ≤ picture.length ≤ 100,
 *    1 ≤ picture[i].length ≤ 100.
 * 
 * 4) Pattern
 *  - string manipulation
 */

// star creating function1
function stars(width) {
    let stars = "";
    for (let i = 0; i < width; i++) {
        stars += "*";
    }
    return stars;
}
// side border creating function2
function border(inputString) {
    return "*" + inputString + "*";
}

// append values into array function3
function solution(picture) {
    // determine the dimensions of the picture
    // create width var = picture[0][j].length || determine new width (* + width + *)
    let width = picture[0].length + 2;
    // // create height var = picture.length || determine new height 
    // let height = picture.length + 2;

    // new pictureFramed 
    let pictureFramed = [];

    // create frames
    let topFrame = console.log(stars(width));
    let bottomFrame = console.log(stars(width));

    // add sides of pic
    for (let i = 0; i < picture.length; i++) {
        pictureFramed[i] = border(picture[i]);
    }

    pictureFramed.unshift(topFrame);
    pictureFramed.push(bottomFrame);

    return pictureFramed;
}
let input = ["abc","ded"];
console.log(solution(input));