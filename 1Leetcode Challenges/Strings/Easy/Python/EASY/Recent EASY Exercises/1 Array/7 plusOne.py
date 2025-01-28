'''
1) Ask: Given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

2) Example:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

3) Pattern: Math
'''

def plusOne(self, digits: List[int]) -> List[int]:
    # convert the array into an int
    
    # get len of array
    arrLen = len(digits)
    result = 0
    
    # loop thru, and multiply each index by descending multiple of 100, 10, 1
    for i in range(arrLen):
        result = result*10 + digits[i]
    
    # print(result)
    
    plusOne = result + 1
    
    finalArr = []
    
    for value in str(plusOne):
        finalArr.append(int(value))
    
    # print(finalArr)
    return(finalArr)

    