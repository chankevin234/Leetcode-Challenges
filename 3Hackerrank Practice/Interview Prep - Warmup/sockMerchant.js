function sockMerchant(n, ar) {
    // Write your code here
    let pairs = {};
    let count = 0;
    for (let sock of ar) {
        if (!pairs.hasOwnProperty(sock)) {
            pairs[sock] = 1;
        } else {
            pairs[sock]++;            
        }
    }
    
    for (let sock in pairs) {
        console.log(pairs[sock]);
        count += Math.floor(pairs[sock] / 2);
    }
    console.log(pairs);
    return count;
}
