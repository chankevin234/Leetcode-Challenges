'''
1) Ask: n children have got m pieces of candy. They want to eat as much candy as they can, 
but each child must eat exactly the same amount of candy as any other child. 
Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.

Example
Input: n = 3 and m = 10, output = 9.
'''

def solution(n, m):
    # remainder minus the total
    remainder = m % n
    return m - remainder
    # print(m % n)

