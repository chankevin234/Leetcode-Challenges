'''
1) Ask: Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

2) Examples
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

3) Pattern: Two Pointer
'''

def reverseString(s):
    """
    Do not return anything, modify s in-place instead.
    """
    
    # Pythonic Way
    s.reverse()
    
    # Two Pointer Approach
    i = 0    
    j = len(s) - 1 

    while i<j:
        s[i],s[j] = s[j],s[i]
        i+=1
        j-=1

    return s