'''
1) Ask: Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

2) Examples:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

3) Pattern: HashSet checking for oddCount of characters
'''
class Solution:
    def longestPalindrome(self, s: str) -> int:
        # create oddCount and length
        oddCount = 0
        stringLen = len(s)

        # create FreqCounter
        freqCounter = {}

        for char in s:
            # increment the count of that character in the unordered map
            freqCounter[char] = freqCounter.get(char, 0) + 1

            # if current character count is odd, increment oddCount. If the count is even, decrement oddCount.
            if freqCounter[char] % 2 == 1:
                oddCount += 1
            else:
                oddCount -= 1

        # If oddCount is greater than 1, return s.length() - oddCount + 1, 
        # which is the maximum length of a palindrome that can be formed by using all but one character with an odd count of occurrences.
        if oddCount > 1:
            return stringLen - oddCount + 1

        # else, return length of string since whole thing can palindrome
        return stringLen