"""
1) Ask: Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

2) Examples:
Input: nums = [2,0,2,1,1,0]; Output: [0,0,1,1,2,2]

3) Pattern: Two/Three Pointer
"""
class Solution:
    """THREE POINTERS APPROACH (Best)"""

    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        # two pointers (zeros, ones, twos)
        leftP = 0  # zeros boundary
        midP = 0  # ones boundary
        rightP = len(nums) - 1  # twos boundary

        # loop while, rightP < len(nums)
        while midP <= rightP:
            # check for 0s and swap if needed
            if nums[midP] == 0:
                # swap
                nums[leftP], nums[midP] = nums[midP], nums[leftP]
                leftP += 1
                midP += 1
            # if the value is 1 move mid pointer
            elif nums[midP] == 1:
                midP += 1

            # check for 2s
            else:
                nums[midP], nums[rightP] = nums[rightP], nums[midP]
                rightP -= 1

            print(nums)

    '''COUNT SORT APPROACH'''
    def countSortColors(self, nums):
        count_map = {0: 0, 1: 0, 2: 0}

        # Count occurrences of each color
        for num in nums:
            count_map[num] += 1

        # Overwrite nums with sorted values
        index = 0
        for color in range(3):
            while count_map[color] > 0:
                nums[index] = color
                index += 1
                count_map[color] -= 1

    '''BRUTE FORCE'''
    def bruteSortColors(self, nums):
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] > nums[j]:
                    # Swap nums[i] and nums[j]
                    nums[i], nums[j] = nums[j], nums[i]