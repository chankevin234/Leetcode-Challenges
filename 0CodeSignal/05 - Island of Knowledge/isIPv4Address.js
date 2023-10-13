/**
 * 1) Ask:
 * An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the 
 * Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. 
 * One of them is the IPv4 address.
 * 
 * a) Must have 4 numbers
 * b) Each number must be between 0-255
 * 
 * Given a string, find out if it satisfies the IPv4 address naming rules.
 * 
 * Example:
 *  inputString = "172.16.254.1", output = true;
 * 
 *   
 * @param {String} inputString 
 * @returns {Boolean} 
 * 
 * 2) Use Case:
 *  - Values are 0 < x > 255
 *  - String doesn't have 4 items
 *  - substring starts with 0 (ex. 01 or 001)
 * 
 * 3) Pattern: Array
 * 
 */

function solution(inputString) {
    // split string into 4 pieces based on "."
    let IPv4StringArr = inputString.split(".");

    console.log(IPv4StringArr);

    // check if arr len === 4
    if (IPv4StringArr.length !== 4) {
        console.log("This isn't IPv4 Compliant");
        return false;
    }

    // for each loop to convert substring into Int
    for (let substring of IPv4StringArr) {
        // check if the string is null
        if (substring === '') {
            return false;
        }
        
        // check the length/digits vs the produced number
        let substringLen = substring.length;
        
        // convert substring to Number
        let sub = Number(substring); 

        // get digits        
        let digits = sub.toString().length;
        
        // check if subString is between 0-255
        if ((sub >= 0 && sub <= 255) && (substringLen === digits)) {
            console.log("This is IPv4 Compliant");
            continue;
        } 
        else {
            return false;
        }
    }
    
    return true
}

console.log(solution("172.16.254.1")); // true
console.log(solution("172.316.254.1")); // false    
console.log(solution("01.233.161.131")); // false    


