/**
 * 1) Ask: Given the positions of a white bishop and a black pawn on the standard chess board, 
 * determine whether the bishop can capture the pawn in one move.
 * 
 * The bishop has no restrictions in distance for each move, but is limited to diagonal movement. 
 * 
 * 1a) Examples
 * bishop = "a1" and pawn = "c3", output = true.
 *  
 * 
 * @param {String} bishop 
 * @param {String} pawn 
 */

function solution(bishop, pawn) {
    // Figure out the position of the bishop and pawn

    // a-h = 1-8
    let letters = 'abcdefgh';

    // convert cell1 to a string
    let bishopSplit = bishop.split('');

    // convert cell2 to a string
    let pawnSplit = pawn.split('');

    // cell1 as a cartesian arr
    let bishopLocation = [letters.indexOf(bishopSplit[0]), Number.parseInt(bishopSplit[1])];
    
    // cell2 as a cartesian arr
    let pawnLocation = [letters.indexOf(pawnSplit[0]), + Number.parseInt(pawnSplit[1])];

    console.log(`Bishop: ${bishopLocation}\nPawn: ${pawnLocation}`);

    // Check to see if pawn is reachable
    // Is pawn in same row or column? if true,
    if (bishopLocation[0] === pawnLocation[0] || bishopLocation[1] === pawnLocation[1]) {
        // same row or column so
        return false;
    }
    
    // s slope +/-1.0?
    let m = ((bishopLocation[1] - pawnLocation[1]) / (bishopLocation[0] - pawnLocation[0]));
    console.log(m);
    // if true, then the pawn falls in the range of the bishop
    if (m === 1 || m === -1) {
        console.log("The pawn can be reached by the bishop!")
        return true;
    }

    console.log("The pawn can't be reached by the bishop!");
    return false;
}

solution("a1", "c3"); // true