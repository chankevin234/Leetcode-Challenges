/**
 * 1) Ask:  
 * Given array of file names sorted in order of file creation, such that names[i] represents the name of a file created before names[i+1] and after names[i-1] 
 * (assume 0-based indexing). 
 * Because all files must have unique names, files created later with the same name as a file created earlier 
 * should have an additional (k) suffix in their names, where k is the smallest positive integer (starting from 1) that does not appear in previous file names.
 * 
 * Your task is to iterate through all elements of names (from left to right) and update all filenames based on the above. 
 * Return an array of proper filenames.
 * 
 * 1a) Examples:
 * names = ["doc", "doc", "image", "doc(1)", "doc"], output = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].
 *      - Since names[0] = "doc" and names[1] = "doc", update names[1] = "doc(1)"
 *      - Since names[1] = "doc(1)" and names[3] = "doc(1)", update names[3] = "doc(1)(1)"
 *      - Since names[0] = "doc", names[1] = "doc(1)", and names[4] = "doc", update names[4] = "doc(2)"
 * 
 * 
 * 2) Pattern: Set() --> unique keys in object
 * 
 * 
 * 
 * @param {Array} names 
 */


function solution(names) {
    // 1. go through the names array and add values to the set()

    // initialize the set()
    let uniqueValuesSet = new Set();     
    
    // for of loop
    for (let filename of names) {
        // add the names[i] to the set() + print out if the value was unique + added or not! 
        if (!uniqueValuesSet.has(filename)) {
            uniqueValuesSet.add(filename);
            console.log("Adding a unique value!");
        }
        else {
            console.log("This filename already exists!");
            // add loop thru filename + (n) until it returns true
            
            uniqueValuesSet.add(duplicateFileName(filename, uniqueValuesSet));
        }
    }
    console.log(uniqueValuesSet);
    return uniqueValuesSet;
}

function duplicateFileName(filename, set) {
    let counter = 1;
    let newFileName = `${filename}(${counter})`;

    while(set.has(newFileName)) {
        counter++;
        newFileName = `${filename}(${counter})`;
    }
    console.log("Added newFileName = " + newFileName);
    return newFileName;
}


let names = ["doc", "doc", "image", "doc(1)", "doc"];
solution(names);
