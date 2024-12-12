'''
1) Ask: Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.

2) Example: 
Input: n = 27; Output: true
Explanation: 27 = 33

3) Pattern: Looping remainders
''' 

class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        # loop method
        
        # EDGE CASE
        if n <= 0:
            return False 
        
        # divide by 3 until you either get remainder or n = 1
        while (n % 3 == 0):
            n = n / 3
            
        # if n = 1, return True
        if n == 1:
            return True
        
        return False