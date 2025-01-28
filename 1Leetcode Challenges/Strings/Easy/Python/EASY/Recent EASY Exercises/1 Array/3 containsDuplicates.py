'''
1) Ask: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Return Boolean

2) Example:
Input: nums = [1,1,1,3,3,4,3,2,4,2]; Output: true

3) Use Case:
    1. has Dup = true
    2. has no Dups = false

4) Pattern: Set() or Dictionary?
'''
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # create a dict or set
        valuesDict = {}
        
        # add to the dict if the value is not a pre-existing key
        for num in nums:
            print(f'Current num: {num}')
            # if key already exists, return true
            if num in valuesDict:
                print("This is a dup")
                return True
            
            # if key doesn't exist, add it to the dict
            valuesDict[num] = 1
        
        # print(valuesDict)
        # else, return false
        print("No Dups")
        return False
        