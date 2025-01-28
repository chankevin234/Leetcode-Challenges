'''
1) Ask: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

2) Example:
Input: nums = [4,1,2,1,2]; Output: 4

3) Pattern: Dictionary
'''

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        # create a dict
        dupDict = {}
        
        # loop thru the list
        for num in nums:
            # if the value is new, insert into dict +1
            if num not in dupDict:
                dupDict[num] = 1
            # if value already exists, +1 it
            else:
                dupDict[num] += 1
        
        # return the value that is has pair value of 1
        for key in dupDict:
            if dupDict[key] == 1:
                return key
        
        