function jumpingOnClouds(c) {
    // Write your code here
    // Pattern: queue?
    // total jumps
    // player can jump 1 or 2 && only touch 0 or 1 in c[i]
    // init queue
    
    let jumps = 0;
    let queue = [];
    let begArr = 0;
    
    // while c.length > 0
    while (c.length > 1) {
        // if c[beginArr+2] === 0 (check if 2 jump works first)
        if (c[begArr + 2] === 0) {
            // shift off 2 values
            c.shift();
            c.shift();
            // jumps++
            jumps++;
            // beginArr = 0
            begArr = 0;
            console.log(c);            
        } else {
            // shift off 1 value
            c.shift();
            // jumps++
            jumps++;
            // begArr = 0            
            begArr = 0;
            console.log(c);
        }
        
    }
    
    console.log(jumps)
    return jumps;
}