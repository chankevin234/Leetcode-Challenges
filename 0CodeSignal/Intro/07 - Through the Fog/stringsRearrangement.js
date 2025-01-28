/**
 * 1) Ask: 
 * Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that 
 * each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.
 * Note: You're only rearranging the order of the strings, not the order of the letters within the strings!
 * 
 * 
 * 
 * 
 * @param {*} inputArray 
 */

function solution(inputArray) {
    var ret = false;
    var solution = [];
    
    function bt () {
        for (var i = 0; i<inputArray.length; i++) {
            if(ret) break;
            solution.push(inputArray.splice(i,1)[0]);
            if (inputArray.length === 0) {
                ret = ret || checkSolution();
            }
            else{
                bt();
            }
            inputArray.splice(i,0,solution.pop());
        }
        
    }
    function checkSolution () {
        for (var i = 0; i < solution.length - 1; i++){
            var diff =0;
            for (var j = 0; j<solution[i].length; j++) {
                if (solution[i][j] !== solution[i+1][j]){
                    diff++;
                }
            }
            if(diff !== 1){
                return false;
            }
        }
        return true;
    }
    bt();
    return ret;
}
