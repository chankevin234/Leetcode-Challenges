'''
1) Ask: Buy and Sell Crypto
Given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
- Choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
- Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

2) Examples
Input: prices = [10,1,5,6,7,1], Output: 6

3) Constraints/Use Cases
1 <= prices.length <= 100
0 <= prices[i] <= 100

4) Pattern: Sliding Window / 2 Pointer
'''

def maxProfit(prices) -> int:
    # create left (buy) and right (sell) pointers
    leftP = 0
    rightP = 1

    # set the initial maxProfit 
    maxProfit = 0

    # loop thru prices
    while rightP < len(prices):
        # check if the profit of right (sell) > left (buy)
        if prices[rightP] > prices[leftP]:
            profit = prices[rightP] - prices[leftP]
            maxProfit = max(profit, maxProfit)
        # if left < right
        else: 
            leftP = rightP
        
        # inc. the right pointer
        rightP += 1
    print(f'The max profit = {maxProfit}')
    return maxProfit

maxProfit([10,1,5,6,7,1]) # 6