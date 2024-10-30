"""
1) Ask: Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
2) Examples:
    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
        Explanation:
            rotate 1 steps to the right: [7,1,2,3,4,5,6]
            rotate 2 steps to the right: [6,7,1,2,3,4,5]
            rotate 3 steps to the right: [5,6,7,1,2,3,4]

3) Pattern: Queue?
Pop off the last k items, insert at the beginning 

"""

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
    
        if len(nums) >= k:
            popAmount = k

            # pop off the last k items of the array
            # tailStartPos = len(nums) - k

            tail = []
            for i in range(popAmount):
                tail.append(nums.pop())

            print(f"Popped off array: {nums} {k}")
            tail.reverse()
            print(tail)

            # insert the k items at the front of the array
            for y in range(popAmount):
                nums.insert(0, tail.pop())
        else:
            nums.reverse()
        # print(nums)
