"""
1) Ask: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

2) Examples:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

3) Pattern: Hash Map

"""
def twoSum(nums, target):
    # create a hashmap
    checkedNums = {}

    # loop thru the array
    for idx, num in enumerate(nums):
        # take your curr num and check what the diff is between target and it
        diff = target - num
        # if the value exists in the checkedNums hash map, return it
        if diff in checkedNums:
            print([checkedNums[diff], idx])
            return [checkedNums[diff], idx]

        # else, add the num to the hashmap with its position
        checkedNums[num] = idx

print(twoSum([-3, 4, 3, 90], 0))
