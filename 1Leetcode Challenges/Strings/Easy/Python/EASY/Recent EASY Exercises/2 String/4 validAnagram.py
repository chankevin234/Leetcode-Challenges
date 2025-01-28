'''
1) Ask: Given two strings s and t, return true if t is an anagram of s, and false otherwise.

2) Examples:
Input: s = "anagram", t = "nagaram"
Output: true

3) Pattern: Frequency Counter
'''
def isAnagram(self, s: str, t: str) -> bool:
    '''EDGE CASES'''
    # if the len of s or t aren't the same, return False
    if len(s) != len(t):
        return False
    # if the len of s & t are 1, check if same right away
    if len(s) == 1 and len(t) == 1:
        return s == t
    
    '''SOLUTION STARTS HERE'''
    # 2 Frq Counter        
    freqCounter1 = {}
    freqCounter2 = {} 
    
    # create counter1
    for char in s:
        freqCounter1[char] = freqCounter1.get(char, 0) + 1
    # create counter2
    for char in t:
        freqCounter2[char] = freqCounter2.get(char, 0) + 1
    
    print(freqCounter1, freqCounter2) 
    
    # loop thru counter2 and check if the keys' have the same values
    for key in freqCounter2:
        if key not in freqCounter1 or freqCounter2[key] != freqCounter1[key]:
            return False
    
    return True