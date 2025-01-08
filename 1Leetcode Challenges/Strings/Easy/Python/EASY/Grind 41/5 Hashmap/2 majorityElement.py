'''
1) Ask: Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

2) Examples:
Input: nums = [3,2,3]; Output: 3
Input: nums = [2,2,1,1,1,2,2]; Output: 2

3) Pattern: Hashmap/freqCounter
'''

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # use a counter
        freqCount = {}

        for num in nums:
            freqCount[num] = freqCount.get(num, 0) + 1
        
        # print(freqCount)

        n = len(nums) // 2

        for key, value in freqCount.items():
            if value > n:
                return key

        return 0 

        