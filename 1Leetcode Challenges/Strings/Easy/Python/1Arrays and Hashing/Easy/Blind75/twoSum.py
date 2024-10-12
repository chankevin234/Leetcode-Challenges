'''
Ask: 
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.
Example 1: 
Input: 
    nums = [3,4,5,6], target = 7
Output: [0,1]

Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
'''

def twoSum(self, nums: List[int], target: int) -> List[int]:
    # create an dict of checked numbers + their position to compare
    checkedNums = {}
    diff = nums[0]  # initial diff

    # take the diff between current num vs. the target
    for idx, num in enumerate(nums):
        diff = target - num
        # if the diff exists in the arr, true
        if diff in checkedNums:
            return [checkedNums[diff], idx]

        # insert the value into the dict
        checkedNums[num] = idx

    # return False
