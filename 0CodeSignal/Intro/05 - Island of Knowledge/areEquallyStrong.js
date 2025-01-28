/**
 * 1) Ask: 
 * Call two arms equally strong if the heaviest weights they each are able to lift are equal.
 * Call two people equally strong if their strongest arms are equally strong 
 *      (the strongest arm can be both the right and the left), and so are their weakest arms.
 * 
 * Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
 * 
 *  
 * 2a) Inputs
 * @param {Number} yourLeft 
 * @param {Number} yourRight 
 * @param {Number} friendsLeft 
 * @param {Number} friendsRight
 * 
 * @return {Boolean} true = equally strong, false = otherwise
 */

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    // create a var for your MAX weight
    let myMaxWeight = yourLeft >= yourRight ? yourLeft : yourRight;
    let myMinWeight = yourLeft <= yourRight ? yourLeft : yourRight;
    console.log("My Max Weight: " + myMaxWeight);
    console.log("My Max Weight: " + myMinWeight);

    // create a var for friend's MAX weight
    let friendMaxWeight = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    let friendMinWeight = friendsLeft <= friendsRight ? friendsLeft : friendsRight;

    console.log("Friend's Max Weight: " + friendMaxWeight);
    console.log("Friend's Min Weight: " + friendMinWeight);
    
    // if equal, return true
    return (myMaxWeight === friendMaxWeight) && (myMinWeight === friendMinWeight) ? true : false
    // else return false
}
