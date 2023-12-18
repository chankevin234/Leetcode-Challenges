/**
 * 1) Ask: 
 * Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
 * 
 * 1a) Examples:
 * st = "abcdc", output = "abcdcba".
 * 
 * 2) Pattern?
 * 
 * 
 * @param {String} st 
 */

function solution(st) {
    var i = 0;
    var aux;

    // check if the string is equal to a reversed version of the string
    while(st != st.split('').reverse().join('')) {
        // add the value of the furtherest left sequentially to the middle
        aux = st.split('')
        aux.splice(st.length-i, 0 ,st[i])
        st = aux.join('');
        i++;

        console.log(aux);
        console.log(st);
    }
    return st;
}

solution("abcdc");
solution("abc");

