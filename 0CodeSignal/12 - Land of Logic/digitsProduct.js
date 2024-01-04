/**
 * 1) Ask: 
 * Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. 
 * If there is no such integer, return -1 instead.
 * 
 * 
 * 
 * @param {Number} product 
 */


function solution(product) {
    for(var i = 1; i<5000; i++) {
        if(p(i) === product)return i;
    }
    function p (k) {
        return String(k).split('').map(Number).reduce((a,b)=>a*b,1)
    }
    return -1;
}
