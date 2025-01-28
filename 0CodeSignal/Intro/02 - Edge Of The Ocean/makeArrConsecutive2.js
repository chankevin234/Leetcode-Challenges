/**
 * 1) Ask: Make Array Consecutive 2
 * Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. 
 * Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one 
 *      exactly by 1. 
 * He may need some additional statues to be able to accomplish that. 
 * Help him figure out the minimum number of additional statues needed.
 * 
 * Example: 
 * For statues = [6, 2, 3, 8], the output should be solution(statues) = 3. 
 * Ratiorg needs statues of sizes 4, 5 and 7.
 * 
 * 
 */

function solution(statues) {
    if (statues.length === 1) {
        return 0;
    }
    // sort the statues by smallest to largest
    let sorted = statues.sort();
    // console.log("Sorted statues: " + sorted);

    // create var to store total needed statues
    let needed = 0;
    // create a tempVar to store the diff between two adjacent statues
    let diff = null;

    // use a sliding window to determine the distance between 2 sets of statues
    // loop through the sorted statues
    for (let i = 0; i < sorted.length; i++) {
        // diff = (n+1) - n
        // if the diff between n and n+1 is > 1, add to the additional statues
        if ((sorted[i+1] - sorted[i]) > 1) {
            needed += (sorted[i+1] - sorted[i]) - 1;
        }
        console.log(sorted[i], sorted[i + 1]);
    }

    // return the neededStatues
    return needed;
}

console.log(solution([6, 2, 3, 8]));
