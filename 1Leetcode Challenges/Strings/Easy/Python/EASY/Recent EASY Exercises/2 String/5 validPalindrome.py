'''
1) Ask: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

2) Examples:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

3) Pattern: remove spaces, then reverse?
'''
import re

def isPalindrome(self, s: str) -> bool:
    '''EDGE CASES'''
    if len(s) == 1 or s == " ":
        return True
    
    '''SOLUTION STARTS'''
    dictionary = 'abcdefghijklmnopqrstuvwxyz'
    
    # create new string w/o non-alphanumeric
    newString = ''
    lowerString = s.lower()
    for char in lowerString:
        if char in dictionary:
            newString += char
    
    print(newString)

    # reverse and check
    reversedString = newString[::-1] 
    # print(reversedString)
    
    return True if reversedString == newString else False
    