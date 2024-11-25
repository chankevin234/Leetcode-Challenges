"""
1) Ask: Given an INT array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements in nums.

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.

2) Examples:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

3) Pattern: Two Pointer.. but set() could work too?
"""

# USING TWO POINTERS TO SPLICE THE ARRAY
def removeDuplicatesSol(nums):
     pass

# USING TWO POINTERS PATTERN
def removeDuplicates(nums):
        ''' modify the array in-place and the size of the final array would potentially be smaller than the size of the input array.'''
        # onePointer to track of the current element in the original array and another one for just the unique elements.
        
        # check if the prev (n-1) is the same as the current value (unique or not)
        
        # set current number of unique Values to 1 (first item in arr)
        uniqueVals = 1
        
        # for loop through from pos1 to end
        for n in range(1, len(nums)):
            # if the current num != prev (n-1), it must be unique
            if nums[n] != nums[n-1]:
                uniqueVals += 1
        
        # retrun uniqueVals
        return uniqueVals

# PYTHONIC METHOD USING SET
def removeDuplicatesPythonic(nums):
    # create empty set()
    noDups = set()

    # push in values since set only contains unique elements
    for num in nums:
        noDups.add(num)

    # print(noDups)
    # return length of set()
    nums = list(noDups)
    k = len(nums)

    print(nums)

    return k
