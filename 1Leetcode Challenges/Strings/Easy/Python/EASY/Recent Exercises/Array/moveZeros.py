'''
1) Ask: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

2) Examples:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

3) Pattern: Two Pointer

4) Algorithm complexity:
Time complexity: O(n). Our fast pointer does not visit the same spot twice.
Space complexity: O(1). All operations are made in-place
'''

def moveZeroes(nums):
    """
    Do not return anything, modify nums in-place instead.
    """
    # loop thru the array and use 2 pointers to swap non-zeros with zeros
    # pointer1 is i
    # pointer2 is checking for zeros
    p2 = 0
    
    for p1 in range(len(nums)):
        # check if the curr value is non-zero, then compare to p2 if it is o (swap)
        if nums[p1] != 0 and nums[p2] == 0:
            # flip
            nums[p2], nums[p1] = nums[p1], nums[p2]
        
        # check if the curr value at the pointer2 is zero, if not, move it up
        if nums[p2] != 0:
            p2 += 1
    
        # print(nums)

def additionalSpaceMoveZeroes(nums):
    """
    Do not return anything, modify nums in-place instead.
    """
    
    # loop thru and create a new array without zeros
    noZeros = []
    counter = 0
    
    for num in nums:
        if num != 0:
            noZeros.append(num)
        else:
            counter += 1
    # print(noZeros)
    
    for i in range(counter):
        noZeros.append(0)
    
    print(noZeros)
    return noZeros
