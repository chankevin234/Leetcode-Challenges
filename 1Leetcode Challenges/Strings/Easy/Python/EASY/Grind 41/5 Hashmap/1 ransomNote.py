'''
1) Ask: Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

2) Examples:
Input: ransomNote = "a", magazine = "b"; Output: false
Input: ransomNote = "aa", magazine = "ab"; Output: false
Input: ransomNote = "aa", magazine = "aab"; Output: true

3) Pattern: Hashmap/FreqCounter

'''

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        '''EDGE CASE'''
        # if magazine < ransomNote, return False
        if len(magazine) < len(ransomNote):
            return False

        # create counter of each string
        ransomNoteCount = {}
        magazineCount = {}

        for char in ransomNote:
            ransomNoteCount[char] = ransomNoteCount.get(char, 0) + 1

        for char in magazine:
            magazineCount[char] = magazineCount.get(char, 0) + 1
            
        # print(ransomNoteCount)
        # print(magazineCount)
        
        # compare the strings/keys of ransomNote
        for key in ransomNoteCount:
            # if the key's value < ransomNote's value or doesn't exist, return false
            if key not in magazineCount or magazineCount[key] < ransomNoteCount[key]:
                return False
        
        return True