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

def isValid(s):
    # create a stack arr (will contain the open pair)
    myStack = []
    # create a map of the parantheses pairs
    closeToOpen = {
        "}": "{",
        ")": "(",
        "]": "[" 
    }

    # loop thru the string
    for char in s:
        # if char = ), }, ], pop off the last value in stack and check if it's the corresponding value
        if (char == "}" or char == ")" or char == "]"):
            if (myStack and (myStack[-1] == closeToOpen[char])):
                myStack.pop()
            else: 
                return False
        # if char = either {, (, or [, pop onto stack
        else: 
            myStack.append(char)
        
    # else True
    if (not myStack):
        return True
    else: 
        return False 


print(isValid("[]")) # true