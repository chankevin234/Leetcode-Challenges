'''
1) Ask: Given an integer n, return a string array answer (1-indexed) where:
    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.
    
2) Examples:
Input: n = 3; Output: ["1","2","Fizz"]
'''
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        # create empty string array
        arr = []
        
        # loop, and replace the value if it meets certain if conditions
        for i in range(1, n+1):
            # if i / 3 & 5
            if i % 3 == 0 and i % 5 != 0:
                arr.append("Fizz")
            # elif i / 3 not 5
            elif i % 5 == 0 and i % 3 != 0:
                arr.append("Buzz")
            # elif i / 5 not 3
            elif i % 3 == 0 and i % 5 == 0:
                arr.append("FizzBuzz")
            else:
                arr.append(str(i))
                
            # print(arr)
        return arr
            
        