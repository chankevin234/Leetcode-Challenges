/**
 * 1) Ask:
 * An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").
 * The domain name part of an email address may only consist of letters, digits, hyphens and dots. 
 * The local part, however, also allows a lot of different special characters. 
 * Here you can look at several examples of correct and incorrect email addresses.
 * 
 * Given a valid email address, find its domain part
 * 
 * 1b) Examples:
 * address = "prettyandsimple@example.com", output = "example.com"
 * address = "fully-qualified-domain@codesignal.com", output = "codesignal.com".
 * 
 * 2) Pattern: Array Collection
 * 
 * 
 * @param {String} address
 * @returns {String} domain 
 */

function solution(address) {
    // create domain string
    let domain = "";

    // split the string at @
    let arr = address.split('@');
    console.log(address, arr);

    domain = arr[arr.length-1];

    // console.log(domain);
    
    // return domain
    return domain;
    
}

console.log(solution('prettyandsimple@example.com'));
