'''
1) Ask: Given an integer n, return the largest number that contains exactly n digits.

2) Example
Input: n = 2
Output: 99.
'''

def solution(n):
    emptyString = ""
    
    for digit in range(n):
        emptyString += "9"
    
    # print(emptyString)   
    return int(emptyString) 
