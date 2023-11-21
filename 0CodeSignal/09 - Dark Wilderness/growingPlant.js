/**
 * 1) Ask: Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, 
 * the plant decreases in height every night, by an amount represented by downSpeed.
 * 
 * Since you grew the plant from a seed, it started at height 0 initially. 
 * Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.
 * 
 * 1a) Example: upSpeed = 100, downSpeed = 10, and desiredHeight = 910, output = 10.
 * 
 * @param {*} upSpeed 
 * @param {*} downSpeed 
 * @param {*} desiredHeight 
 * 
 * @returns {Number} days
 */
function solution(upSpeed, downSpeed, desiredHeight) {
    // var for currHeight = 0
    let currHeight = 0;
    // var for total days = 0
    let days = 0;

    // while loop 
    while(currHeight < desiredHeight) {
        days++;

        // add the upSpeed for morning
        currHeight += upSpeed;
        console.log(`Day ${days}\nMorning Height: ${currHeight}`);

        // check if desiredHeight has been reached in the morning, if not, check night
        if (currHeight < desiredHeight) {
            currHeight -= downSpeed;
        }
    }    
    // return days
    return days;


}

// console.log(solution(100,10,910)) // 10 days
console.log(solution(10,9,4)) // 10 days

