function repeatedString(s, n) {
    // Write your code here
    // Logic = take n / s.length to find number of possible repeated substrings     
    let finalA = 0;
    
    // use case 1: if n chars only searching in the initial substring
    // if n <= s.len
    if (n <= s.length) {
        for (let j = 0; j < n; j++) {
            if (s[j] === 'a') finalA++;
        }           
        return finalA;
    } 

    
    // use case 2: substring needs to be repeated  

    let arr = s.split('');
    let aInSubstring = arr.filter(char => char == "a").length;
    let currTotalA = 0;
    
    // multiples = n / s.length floored
    let multiples = Math.floor(n/s.length); 
    // left over substring = n % s.length
    let leftover = n % s.length;
    
    let leftoverA = 0;
    
    if (leftover > 0) {
        for (let j = 0; j < leftover; j++) {
            if (s[j] === 'a') leftoverA++;
        }       
    }
   
    finalA = leftoverA + (aInSubstring * multiples);

    return finalA;

}