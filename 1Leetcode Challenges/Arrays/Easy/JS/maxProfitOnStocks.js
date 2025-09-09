/**
 * 1) Ask: You are given an array 'prices' where prices[i] is the price of a given stock on the ith day.
 *  You want to maximize your profit by choosing a single day to:
 *      - buy one stock 
 *  and choosing a different day in the future to:
 *      - sell that stock.
 *  
 *  Return the maximum profit you can achieve from this transaction. 
 *  If you cannot achieve any profit, return 0.
 *    
 * Constraint: 
 *      1 <= prices.length <= 105
 *      0 <= prices[i] <= 104
 * 
 * @param {number[]} prices
 * @return {number}
 * 
 * 2) Use Cases
 *  - prices.len < 2, return false
 *  - prices.len >= 2 && futureDay - currDay > 0, return true
 *  - prices.len >= 2 && futureDay - currDay <= 0, return false
 *  - 
 * 
 * Pattern: Sliding Window or Two Pointers
 * 
 */

var maxProfit = function(prices) {
    // if prices.len < 2, return false
    if (prices.length < 2) {
        // not enough days to find a profit
        return 0;
    }

    // set initial buyDay = 0
    let leftPointer = 0;
    // set initial sellDay = 1
    let rightPointer = 1;

    // create a maxProfit value
    let maxProfit = 0;
    
    // create a sliding window of pointers 
    // while the right pointer hasn't reached the end of the array, loop
    while (rightPointer < prices.length) {
        // if the tempProfit > maxProfit, it becomes the new max
        let tempProfit = prices[rightPointer] - prices[leftPointer]; 
        
        // if the value @ leftPointer is > value @ rightPointer, leftPointer++
        if (prices[leftPointer] > prices[rightPointer]) {
            leftPointer = rightPointer;
        }
        
        // rightPointer++ every time 
        rightPointer++;

        maxProfit = Math.max(tempProfit, maxProfit);
        console.log("Temp vs. Max: " + tempProfit, maxProfit);
    }
    
    return maxProfit;
};

console.log(maxProfit([2,1,2,1,0,1,2])); // 2

var maxProfitBrute = function(prices) {
    // if prices.len < 2, return false
    if (prices.length < 2) {
        // not enough days to find a profit
        return 0;
    }

    // set initial profit = 0
    let currProfit = 0;
    // set final profit = 0
    let finalProfit = 0;

    // loop through prices to set currDate value
    for (let i = 0; i < prices.length - 1; i++) {
        // loop through prices infront of currDate value
        for (let j = i+1; j < prices.length; j++) {
            currProfit = prices[j] - prices[i];
            // if new Profit > initial profit, replace it
            if (currProfit > finalProfit) {
                finalProfit = currProfit;
            }
        }
    }
    // return profit
    return finalProfit;
};

// console.log(maxProfitBrute([7,1,5,3,6,4])); //5
// console.log(maxProfitBrute([7,6,4,3,1])); //0
