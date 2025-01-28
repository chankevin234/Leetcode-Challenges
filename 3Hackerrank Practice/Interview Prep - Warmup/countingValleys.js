function countingValleys(steps, path) {
    // Write your code here
    
    // Possible Pattern: 2 pointer?
    // counter for valleys
    let valleys = 0;
    // sea level = 0 SO inital pos = 0
    let initialPos, currPos = 0;
    // 1 U = 1 step up; 1 D = 1 step down
    
    // for each loop thru path
    for (let step of path) {
        // if U, step up
        if (step === 'U') {
            currPos += 1;
            if (currPos == 0) { // Exiting valley
                valleys++; 
            }
        } 
        // if step down
        else {
            currPos -= 1;
        }
    }    
    // return valleys
    return valleys;
}