/**
 * 1) Ask: 
 * Several people are standing in a row and need to be divided into two teams. 
 * The first person goes into team 1, the second goes into team 2, 
 *      the third goes into team 1 again, the fourth into team 2, and so on.
 * 
 * You are given an array of positive integers - the weights of the people. 
 * 
 * Return an array of two integers, where the first element is the total weight of team 1, 
 * and the second element is the total weight of team 2 after the division is complete.
 * 
 * @param {number[]} people
 * @return {number[]} [grp1, grp2] 
 * 
 * 2) Examples
 *      Input: a = [50, 60, 60, 45, 70], output = [180, 105].
 * 
 * 3) Use Cases
 *           
 * 4) Patterns?
 *      - Stack?
 *      - Add based on index (remainder or not?)
 * 
 * 5) Breakdown code steps
 */

function solution(people) {
    // create a total value for grp1
    let grp1 = 0;
    // create a total value for grp2
    let grp2 = 0;

    // loop through the people array until the length === 0
    for (let i = 0; i < people.length; i++) {
        // if the index has a remainder when div by 2, add to grp2
        if (i % 2 !== 0) {
            console.log("Adding to grp2...");
            grp2 += people[i];
        }
        // else add to grp1
        else {
            console.log("Adding to grp1...");
            grp1 += people[i];
        }
    }
    // return [grp1, grp2]
    return [grp1, grp2];
}

a = [50, 60, 60, 45, 70]
console.log(solution(a)) // output = [180, 105].