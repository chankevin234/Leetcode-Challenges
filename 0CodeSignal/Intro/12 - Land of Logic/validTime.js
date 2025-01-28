/**
 * 1) Ask:
 * Check if the given string is a correct time representation of the 24-hour clock.
 * 
 * 1) Examples:
 * time = "13:58", output = true;
 * time = "25:51", output = false;
 * time = "02:76", output = false.
 * 
 * 
 * @param {String} time 
 * @returns {Boolean}
 */

function solution(time) {
    // split by colon
    let clock = time.split(":");
    console.log("Time = " + clock[0], clock[1]);

    let hour = Number(clock[0]);
    let min = Number(clock[1]);

    // check if first element falls between 00-23
    if (hour > 23 || hour < 0) {
        return false;
    }
    // check if second element falls between 00-59
    if (min < 0 || min > 59) {
        return false;
    }

    return true;
}

console.log(solution("13:58")) //true
console.log(solution("00:00")) //true

