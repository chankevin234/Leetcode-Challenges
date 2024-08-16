'''
1) Ask: Valid Paran
- Given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
- Check if s is valid if and only if:
    - Every open bracket is closed by the same type of close bracket.
    Open brackets are closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

    Return true if s is a valid string, and false otherwise.

2) Example: Input: s = "[]"; Output: true
3) Pattern: Stack
'''

def isValid(self, s: str) -> bool:
    # create a stack arr

    # loop thru the string
        # if char = either {, (, or [, pop on

        # if char = ), }, ], pop off the last value in stack and check if it's the corresponding value

        # at any point, you don't, return False

        # else True
    

isValid("[]") # true