'''
1) Ask: Given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
    1. Merge nums1 and nums2 into a single array sorted in non-decreasing order.
    2. The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
        - To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

2) Examples:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3; Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

3) Pattern: Two Pointers?
'''

'''TWO-POINTER METHOD'''
def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    """
    Do not return anything, modify nums1 in-place instead.
    """
    '''EDGE CASES'''
    # if n is 0, return nums1
    if (n == 0):
        return nums1
    
    '''SOLUTION STARTS HERE'''
    # sets the max index in the num1 list (pointer1)
    i = m - 1
    # sets the max index in the num2 list (pointer2)
    j = n - 1
    
    # set the max index when num1 and num2 are combine
    k = m + n - 1
    
    # loop through while num2 list still exists
    while j >= 0:
        # check that num1 still has space to add values and the value of nums2 < num1[k] (largest to smallest)
        if i >= 0 and nums1[i] > nums2[j]:
            # replace the current value of nums1
            nums1[k] = nums1[i]
            i -= 1
        else:
            # nums2 > nums2, replace it
            nums1[k] = nums2[j]
            j -= 1
        k -= 1
        
        print(nums1)

'''PYTHONIC METHOD - USING SORT()'''
def builtInMerge(self, nums1, m, nums2, n):
      for j in range(n):
          nums1[m+j] = nums2[j]
      nums1.sort()