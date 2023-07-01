/**
 * 1) Ask: Given a string s, which is supposed to be a sentence. 
 *      However, someone forgot to put spaces between the different words, 
 *      and for some reason they capitalized the first letter of every word. 
 *      
 *      Return the sentence after making the following amendments:
 *      
 *      Put a single space between the words.
 *      Convert the uppercase letters to lowercase.
 * 
 * 1b) Examples:
 *      s = "CodesignalIsAwesome", output = "codesignal is awesome";
 *      s = "Hello", output = "hello"
 * 
 * 2) Pattern? 
 *      Pointer
 * 
 * 2b) Use Cases
 * 
 */

function solution(s) {
    // 1) if you encounter uppercase value, insert a space in between
    // create finalString
    let finalString = s.replace(/[A-Z][^A-Z]*/g, char => ' ' + char).trim(); // slice behind the uppercase          
        
    // 2) convert all letters to lowercase .lowercase() 
    return finalString.toLowerCase();
}