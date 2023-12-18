/**
 * 1) Ask:
 * Given an array of the numbers of votes given to each of the candidates so far, 
 * and an integer k equal to the number of voters who haven't cast their vote yet, 
 * find the number of candidates who still have a chance to win the election.
 * 
 * The winner of the election must secure strictly more votes than any other candidate. 
 * If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.
 * 
 * 2) Examples:
 * votes = [2, 3, 5, 2] and k = 3, output = 2.
 * The first candidate got 2 votes. Even if all of the remaining 3 candidates vote for him, he will still have only 5 votes, 
 *      i.e. the same number as the third candidate, so there will be no winner.
 * The second candidate can win if all the remaining candidates vote for him (3 + 3 = 6 > 5).
 * The third candidate can win even if none of the remaining candidates vote for him. 
 *      For example, if each of the remaining voters cast their votes for each of his opponents, 
 *      he will still be the winner (the votes array will thus be [3, 4, 5, 3]).
 * The last candidate can't win no matter what (for the same reason as the first candidate).
 * Thus, only 2 candidates can win (the second and the third), which is the answer.
 * 
 * 
 * @param {*} votes 
 * @param {*} k 
 */

function solution(votes, k) {
    // add the max votes to each person to see if they are greater than the max

    // figure out the max votes before adding k
    let max = Math.max(...votes);
    let numOfMax = votes.filter(v => v === max).length;

    // console.log("Current Max: " + max);
    console.log("Current numOfMax candidates: " + numOfMax);

    // accumualate potential winners
    let winners = 0;

    // then loop through again and add k to each candidate other than the max
    for (let candidate of votes) {
        // if the current candidate = max, add them to the total count
        if (candidate === max && numOfMax === 1) {
            // console.log("This candidate already meets the max");
            winners++;
            // numOfMax++;
            continue;
        }
        // if the current candidate < max, add the k then check again 
        if (candidate <= max && (candidate + k) > max) {
            // console.log("This candidate, if they take all the add votes, is greater than the max");
            winners++;
        }
    }

    // console.log("Potential Winners: " + winners);
    return winners;

}

// solution([2, 3, 5, 2], 3); // 2