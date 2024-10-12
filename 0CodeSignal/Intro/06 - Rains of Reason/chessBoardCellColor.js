/**
 * 1) Ask: Given two cells on the standard chess board, determine whether they have the same color or not.
 * 
 * 2) Example: 
 *      cell1 = "A1" and cell2 = "C3", output = true.
 * 
 * 
 * 
 * @param {String} cell1 
 * @param {String} cell2
 * 
 * @returns {Boolean}  
 */

function solution(cell1, cell2) {
    // a-h = 1-8
    let letters = ['A','B','C','D','E','F','G','H'];

    // convert cell1 to a string
    let cell1Split = cell1.split('');

    // convert cell2 to a string
    let cell2Split = cell2.split('');

    // cell1 number
    // console.log((x.indexOf(cell1Split[0])));
    let cell1Num = (letters.indexOf(cell1Split[0])) + Number.parseInt(cell1Split[1]);
    // console.log(cell1Num);
    // cell2 number
    let cell2Num = (letters.indexOf(cell2Split[0])) + Number.parseInt(cell2Split[1]);
    // console.log(cell1Num, cell2Num);

    if (cell1Num % 2 === cell2Num % 2) {
        return true;
    }

    return false;

}

// console.log(solution("A1", "C3"));