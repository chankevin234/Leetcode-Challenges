'''
1) Ask: Given two integer arrays nums1 and nums2, return an array of their 
intersection. 
Each element in the result must be unique and you may return the result in any order.

2) Examples:
Input: nums1 = [1,2,2,1], nums2 = [2,2]; Output: [2]

3) Pattern: Hashmap
'''

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # create a hashmap to track the count of values thru nums1
        hashmap = {}

        # create an arr to store the results (intersections)
        results = []

        # loop thru nums1 to count
        for num in nums1:
            hashmap[num] = hashmap.get(num, 0) + 1
        
        print(hashmap)
        
        # loop thru nums2 to check if the value in nums2 exists in nums1
        for num in nums2:
            # if it does, you can remove it from the hashmap and add it to the final results arr
            if num in hashmap:
                results.append(num)
                del hashmap[num]

        # return results
        return results