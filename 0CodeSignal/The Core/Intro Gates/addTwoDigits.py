'''
1) Ask: You are given a two-digit integer n. Return the sum of its digits.

2) Example
Input: n = 29
Output = 11
'''

def solution(n):
    sum = 0
    
    stringNum = str(n)
    
    sum = int(stringNum[0]) + int(stringNum[1])
    
    print(sum)
    
    return sum
    
    
    
        

