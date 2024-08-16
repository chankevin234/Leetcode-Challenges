"""
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
"""

# imports here
# import re


def isPalindrome(s: str) -> bool:
    # create regex object
    # regex = re.compile('[^a-zA-Z]')

    # lowercase the string
    s = s.lower()
    print(s)

    # loop thru the string and remove non-alphanumerics
    # convert s into a string w/o spaces or uppercase
    for char in s:
        if char.isalnum() == False:
            s = s.replace(char, "")

    # print formatted string
    print(s)

    reversed = s[::-1]
    print(reversed)

    if reversed == s:
        print(True)
        return True

    print(False)
    return False
    
isPalindrome("A man, a plan, a canal: Panama")
isPalindrome("0P")
