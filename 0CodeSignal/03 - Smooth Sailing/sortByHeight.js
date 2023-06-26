/**
 * 1) Ask: Some people are standing in a row in a park. 
 *      There are trees between them which cannot be moved. 
 *      Your task is to rearrange the people by their heights in a non-descending order without moving the trees (tree = -1).
 *      
 *      Example:
 *          For a = [-1, 150, 190, 170, -1, -1, 160, 180], output = [-1, 150, 160, 170, -1, -1, 180, 190].
 * 2) 
 * 
 */

function solution(a) {
    let sfiltered = a.filter(tree => tree !== -1).sort((a,b) => { return a - b });
    console.log(sfiltered);

    for(let i = 0; i < a.length; i++) {
        console.log(a[i]);

            if(a[i] != -1) {
            a[i] = sfiltered.shift();
        }

    }


    return a;
}

// let a = [-1, 150, 190, 170, -1, -1, 160, 180];
let a = [4, 2, 9, 11, 2, 16]

solution(a);
/**
 * If the result is negative, a is sorted before b.
 * If the result is positive, b is sorted before a.
 * If the result is 0, no changes are done with the sort order of the two values.
 */