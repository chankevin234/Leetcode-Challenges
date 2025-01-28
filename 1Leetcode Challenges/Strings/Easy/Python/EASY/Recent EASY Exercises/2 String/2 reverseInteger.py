'''
1) Ask: Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

2) Example: 
    Input: x = 123
    Output: 321
    
    Input: x = 120
    Output: 21
    
    Input: x = -123
    Output: -321

3) Pattern: Math/Remainders?
'''
def reverse(self, x: int) -> int:
    # check if x is negative
    is_negative = False
    if x < 0:
        is_negative = True
        x *= -1
    
    # (1) Initialize rev_num = 0
    reversedNum = 0
    # (2) Loop while num > 0
    while (x > 0):
        # (a) Multiply rev_num by 10 and add remainder of num divide by 10 to rev_num
        remainder = x % 10
        reversedNum = (reversedNum * 10) + remainder # rev_num = rev_num*10 + num%10;
        # (b) Divide num by 10
        
        x = x // 10
        
    # (2b) if value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. 
    if reversedNum > 232 or reversedNum < -231:
        return 0
    
    #(3) Return rev_num
    return -reversedNum if is_negative else reversedNum         
        