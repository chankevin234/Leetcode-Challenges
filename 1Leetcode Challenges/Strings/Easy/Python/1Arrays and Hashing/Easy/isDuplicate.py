'''
Ask: Given an integer array nums, return true if any value appears more than once in the array, 
otherwise return false.

Example 1: Input: nums = [1, 2, 3, 3], Output: true
'''

def hasDuplicate(self, nums: List[int]) -> bool:
    # create a set() --> only takes unique values
    mySet = set()

    # loop thru and add the nums into a set()
    for num in nums:
        mySet.add(num)

    # check if the len of set = nums
    if len(mySet) == len(nums):
        return False
    return True
