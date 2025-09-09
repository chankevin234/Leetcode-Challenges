# Codibility Test: Task 1

"""
1) Ask: 
Given string S (consists of decimal digits)
Create a palindrome with the largest possible decimal value
    ex. 7, 44, 83238
    - You cannot have leading 0's (ex. 0990)
Return the largest palindrome using these digits

2) Examples:
S = "8199"; return "989"

3) Possible strategies: Hashmap?
"""
from collections import Counter

def solution(S):
    # Implement your solution here
    # count the frequency of the digits
    count = Counter(S)
    possibleDigits = '9876543210'
    
    # check for pairs of each digit across 0-9
        # if you have one pair of a digit, tip = 9
        # if you have 2 pairs of a digit, tip = 99
    
    tip = ''.join(count[i] // 2 * i for i in possibleDigits).lstrip('0') # find # of pairs (round down) + remove any leading 0s from tips

    # find the maximum figit left which can be used for middle digit
    mid = max(count[i] % 2 * i for i in count)

    # add your tail tips (reversed tip)
    final = tip + mid + tip[::-1]

    if (final == '0' or not final):
        return '0'
    else:
        return final


# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

'''
1) Ask:
A word machine will return the topmost item in the stack

Operations are:
if Integer X, push onto the stack
if 'POP', remove topmost number in stack
if 'DUP', push a duplicate of topmost number onto the stack
if '+', pop off the two topmost elements, add together, then push sum onto stack
if '-', pop off the two topmost elements, subtract 2nd from the 1st, then push diff onto the stack

return topmost item at the end

2) Strategy: stack
'''

def solution(S):
    # Implement your solution here
    # create an empty stack array
    stack = []

    # covert S into an array of strings separated by space
    operations = S.split()

    try: 
        # loop through the array of strings and complete operations
        for operation in operations:
            if (operation == 'POP'): # if POP, .pop
                stack.pop()
            
            elif (operation == 'DUP'): # if 'DUP', push a duplicate of topmost number onto the stack
                val = stack[-1] # last val
                stack.append(val)
            
            elif (operation == '+'): # if + (.pop * 2, then append sum)
                sum = 0
                for _ in range(2):
                    sum += int(stack.pop())
                if (len(stack) == 0):
                    return -1 
                stack.append(sum)

            # if - (.pop * 2, then append diff)
            elif (operation == '-'):
                num1 = int(stack.pop())
                num2 = int(stack.pop())
                if (len(stack) == 0):
                    return -1
                diff = num1 - num2
                stack.append(diff)
            # if num, .append
            else:
                stack.append(operation)
    except:
        return -1

    # pop off the topmost item, if stack empty, return -1
    if (len(stack) > 0):
        return int(stack.pop())
    return -1
