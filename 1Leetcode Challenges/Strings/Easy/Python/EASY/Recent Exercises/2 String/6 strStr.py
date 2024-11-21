'''
1) Ask: Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

2) Examples:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

3) Pattern: Sliding Window/2 Pointer
'''

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        '''EDGE CASES'''
        # if length of needle > haystack, return -1
        if len(needle) > len(haystack):
            return -1
        # if needle == haystack, return 0
        if needle == haystack:
            return 0
        
        '''SOLUTION STARTS HERE'''
        # create the brute force method
        # leftSide = 0
        # rightSide = len(needle)
                
        # loop thru the haystack, check if the curr value = first idx of the needle
        for idx, char in enumerate(haystack): 
            window = ""
            
            # if char == the first value of the needle, check...
            if char == needle[0]:
                # loop thru next few values to see
                for i in range(len(needle)):
                    window += haystack[idx + i]
                
                print(window)
                
                # if your window == needle, then return the idx
                if window == needle:
                    return idx
            
            # break if the loop at the idx, will overflow
            if idx + len(needle) >= len(haystack):
                break
                
        return -1