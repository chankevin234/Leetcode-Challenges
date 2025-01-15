'''
1) Ask: Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
    Note that after backspacing an empty text, the text will continue empty.

2) Examples:
Input: s = "ab#c", t = "ad#c"; Output: true
Explanation: Both s and t become "ac".

3) Pattern: Stack
Constraints: 1 <= s.length, t.length <= 200; s and t only contain lowercase letters and '#' characters.
'''

class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        # create a stack for string1
        stack1 = []

        # create a stack for string2
        stack2 = []

        # loop thru s
        for char in s:
            # if encounter '#'
            if char == '#':
                # pop value off stack1
                if len(stack1) > 0:
                    stack1.pop()
            else:
                stack1.append(char)

        # loop thru t
        for char in t:
            # if encounter '#'
            if char == '#':
                # pop value off stack1
                if len(stack2) > 0:
                    stack2.pop()
            else:
                stack2.append(char)

        # print(stack1)
        # print(stack2)

        # check if len(stack1 and stack2) are equal
        if len(stack1) != len(stack2):
            return False

        # check if values in stack1 and stack2 are equal
        for i in range(len(stack1)):
            if stack1[i] != stack2[i]:
                return False
        
        return True