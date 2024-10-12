/**
 * 1) Ask: 
 * Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
 * 
 * Knight moves: 
 * 2 squares horizontally and 1 square vertically, 
 * or 2 squares vertically and 1 square horizontally away from it. 
 * The complete move therefore looks like the letter L.
 * 
 * 1a) Examples:
 * cell = "a1", output = 2.
 * cell = "c2", output = 6.
 * 
 * 2) Pattern: 
 * 
 * @param {String} cell
 * @returns {Number} possibleMoves 
 */

function solution(cell) {
    // create alphabet = 'abcdefgh'
    let xRow = 'abcdefgh';
    // create number = '12345678'
    let yCol = '12345678';
    // create possibleMoves counter
    let possibleMoves = 0;

    // determine initial position of knight
    let initialKnightPos = [xRow.indexOf(cell[0]), yCol.indexOf(cell[1])];
    console.log(initialKnightPos);

    // for loop to try 8 possible moves?
    let movement = [[1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1,2]];
    
    for (let i = 0; i < 8; i++) {
        // top to bottom, find the position of possible moves
        let newPos = initialKnightPos;
        // if x coor or y coor > or < alphabet/number arr, 
        if ((newPos[0] + movement[i][0]) > 7 || (newPos[0] + movement[i][0] < 0)) {
            // skip
            console.log("This move is invalid, because x coordinate is off the board");
            continue;
        }
        else if ((newPos[1] + movement[i][1]) > 7 || (newPos[1] + movement[i][1] < 0)) {
            console.log("This move is invalid, because y coordinate is off the board");
            continue;
        }
        else {
            console.log("This is a possible move!");
            possibleMoves++;
        }
    }

    console.log("This is the possible moves: " + possibleMoves);
    return possibleMoves;
}

solution("a1"); // 2
solution("c2"); // 6
