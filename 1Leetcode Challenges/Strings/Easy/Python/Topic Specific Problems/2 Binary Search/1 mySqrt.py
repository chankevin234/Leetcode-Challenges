'''
1) Ask: Given a non-negative integer x, return the square root of x ROUNDED DOWN to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

2) Example:
Input: x = 4; Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Input: x = 8; Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

3) Pattern: Binary Search?
'''
class Solution:
    '''BINARY SEARCH SOLUTION'''
    def mySqrt(self, x: int) -> int:
        '''EDGE CASE 1 - if x = 0, return 0'''
        if x == 0:
            return 0
        
        '''SOL HERE - Binary Search'''
        first, last = 1, x
        while first <= last:
            mid = first + (last - first) // 2
            if mid == x // mid:
                return mid
            elif mid > x // mid:
                last = mid - 1
            else:
                first = mid + 1
        return last

    '''BRUTE FORCE'''
    def mySqrtBrute(self, x: int) -> int:
        # edge case 1
        if x == 0:
            return 0

        '''SOL STARTS HERE'''
        # for loop muliplying itself, until you are within range of desired number x?
        num = 0
        root = num * num

        while root <= x: 
            root = num * num
            
            # if the val is > than x, return prev val?
            if root > x:
                return num - 1
            
            # if val = x, return it
            if root == x:
                return num
            
            # inc. number each time
            num += 1
            
            # print(num, root)
    
    