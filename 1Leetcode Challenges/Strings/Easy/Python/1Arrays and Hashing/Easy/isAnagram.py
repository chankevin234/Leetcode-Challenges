'''
Ask: 
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
Example 1:
Input: s = "racecar", t = "carrace"
Output: true
s and t consist of lowercase English letters.

'''

def isAnagram(self, s: str, t: str) -> bool:
    # edge case
    if len(s) != len(t):
        return False

    # Pattern: Frequency Counter

    # create 2 counters and collect the values of the two strings
    # if the keys have the same values, it is an anagram

    freqCounter1 = {}
    freqCounter2 = {}

    # collect values into counters
    for char in s:
        freqCounter1[char] = 1 + freqCounter1.get(char, 0)

    for char in t:
        freqCounter2[char] = 1 + freqCounter2.get(char, 0)

    print(freqCounter1)
    print(freqCounter2)

    return freqCounter1 == freqCounter2
