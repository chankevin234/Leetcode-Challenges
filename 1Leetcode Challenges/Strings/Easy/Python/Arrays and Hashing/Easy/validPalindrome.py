'''
1) Ask: 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

2) Examples:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

3) Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
'''

# imports here
import re

def isPalindrome(self, s: str) -> bool:
    re.sub(r'[^a-z]', '', s)        