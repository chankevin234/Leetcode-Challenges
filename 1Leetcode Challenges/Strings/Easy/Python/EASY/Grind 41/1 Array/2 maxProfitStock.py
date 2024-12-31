'''
1) Ask: You are given an array prices where prices[i] is the price of a given stock on the ith day.
    Maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit or return 0.
    
2) Examples:
Input: prices = [7,1,5,3,6,4]; Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

3) Pattern: Two Pointer?
'''
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # create 2 pointers, one slow, one fast
        leftP = 0
        rightP = 1
        
        # day one is always slowPointer, day 2, if it exists, is +1
        # store the difference
        maxProfit = 0
        
        # stop the loop if the rightpointer > len(prices)
        while (rightP < len(prices)):
            diff = prices[rightP] - prices[leftP] # curr diff
            
            # if leftP price < rightP price, means that there's profit
            if prices[leftP] < prices[rightP]:
                # check whether is it > MaxProfit
                maxProfit = max(maxProfit, diff)
            
            # else, means that no possible profit, move the pointers up
            else:
                leftP = rightP
        
            # move the rightP to following val
            rightP += 1    
        
            print(f"current Max is: {maxProfit}")
            
        return maxProfit
        
        