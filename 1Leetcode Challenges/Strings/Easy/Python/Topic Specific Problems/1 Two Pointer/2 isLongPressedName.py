'''
1) Ask: Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

2) Example:
Input: name = "alex", typed = "aaleex"; Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.

3) Pattern: Two Pointer or Counter?
'''

class Solution:
    def isLongPressedName(self, name: str, typed: str) -> bool:
        # create two pointers per name
        nameP = 0
        typedP = 0

        # loop while typePointer hasn't gone thru typed
        while typedP < len(typed):
            # if the value of namePointer < len() & check that the typed value is same as the one name value
            if nameP < len(name) and typed[typedP] == name[nameP]:
                # inc. namePointer 
                nameP += 1
                # inc. typePointer
                typedP += 1

            # if the value of typePointer & type[left] == typed[current]
            elif typedP > 0 and typed[typedP - 1] == typed[typedP]: 
                # inc. typePointer
                typedP += 1
            
            else:
                # return false, since neither
                return False
        # return whether namePointer has gone thru name   
        return nameP == len(name)