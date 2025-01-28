'''
1) Ask: Convert Roman Numerals to Integer
    For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Instances of subtraction:
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

2) Examples:
Input: s = "MCMXCIV"; Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

3) Pattern: Hash Map
'''

class Solution:
    def romanToInt(self, s: str) -> int:
        # create map of substraction
        numeralsMap = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100, 
            "D": 500,
            "M": 1000
        }
        
        # create total var
        total = 0
        
        # loop thru the roman numerals but not till the end to avoid out of range 
        for i in range(len(s)):
            char = s[i]
            # print(numeralsMap[char])
            
            # Conditions: 
            
            # if IV or IX == 4, 9 
            # if XL or XC == 40, 90
            # if CD or CM == 400, 900
            
            # check if the following val is < curr value, it if is, it means it subtracts
            if i < len(s) - 1 and numeralsMap[s[i]] < numeralsMap[s[i+1]]:
                # print(f"Subtract since: {[s[i]], s[i+1]}")
                total -= numeralsMap[s[i]]
            # else, it will be addition
            else:
                # print(f"Add since: {s[i], s[i+1]}")
                total += numeralsMap[s[i]] 
        
        print(total)
        
        return total