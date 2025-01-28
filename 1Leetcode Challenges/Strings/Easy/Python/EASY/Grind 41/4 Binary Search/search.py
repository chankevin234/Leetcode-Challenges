'''
1) Ask: Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

2) Examples:
Input: nums = [-1,0,3,5,9,12], target = 9; Output: 4
Explanation: 9 exists in nums and its index is 4

3) Pattern: Binary Search Algo
'''

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # define start (left), mid, end (right)
        left = 0
        right = len(nums) - 1

        # keep looping while left and right don't equal
        while left <= right:           
            mid = math.floor((right - left) / 2)

            # if the value is found at mid, return pos        
            if nums[mid] == target:
                return mid

            # if the value is < mid, move left to mid
            elif nums[mid] < target:
                left = mid + 1
                
            # if the value is > mid, move right to mid
            else:
                right = mid - 1
        # if left and right equal, end? 
        return -1        