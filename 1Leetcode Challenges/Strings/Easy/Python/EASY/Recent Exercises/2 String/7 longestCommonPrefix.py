'''
1) Ask: Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

2) Examples:
Input: strs = ["flower","flow","flight"]; Output: "fl"

Input: strs = ["dog","racecar","car"]; Output: ""
Explanation: There is no common prefix among the input strings.

3) Pattern: loop thru each value at the same time
'''

'''SOLUTION 1: USE SHORTEST ITEM AS THE KEY'''
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        '''EDGE CASES'''
        # single value in arr
        if strs[0] == "" or len(strs) < 2:
             return strs[0]
        
        '''SOLUTION STARTS HERE'''
        # create longest prefix var
        longestPrefix = ""
        
        # sort the strs array by length
        strs.sort(key=lambda x: len(x))
        print(strs)
        
        shortestString = strs[0] # main comparator
        print("The key: " + shortestString)
        
        # loop thru each char in the shortest string (the key)
        for charIdx, char in enumerate(shortestString):
            print("Checking char: " + char)
            
            # then loop thru the char's curr idx through every item in the list
            for stringIdx in range(1, len(strs)):
                currChar = strs[stringIdx][charIdx]
                print(strs[stringIdx])
                print(currChar)
                
                # if currentChar doesn't equal across all items, break totally
                if currChar != shortestString[charIdx]:
                    return longestPrefix
                    
                # while the chars in each string are same, add it to the longest prefix
            longestPrefix += currChar
        return longestPrefix
    
'''SOLUTION 2: USING 2D ARRAY'''

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        '''EDGE CASES'''
        # single value in arr
        if strs[0] == "" or len(strs) < 2:
             return strs[0]
        
        '''SOLUTION STARTS HERE'''
        # create longest prefix var
        longestPrefix = ""
        
        # sort the strs array by length
        strs.sort(key=lambda x: len(x))
        print(strs)
        
        # shortestString = strs[0] # main comparator
        # print("The key: " + shortestString)
        
        # loop thru each string in the y axis
        for x in range(len(strs[0])):
            keyChar = strs[0][x]
            print("Key char: " + keyChar)
            
            # then loop thru the char's at the x axis
            for y in range(1, len(strs)):
                currChar = strs[y][x]
                print("Checking: " + strs[y])
                print(currChar)
                
                # if currentChar doesn't equal across all items, break totally
                if currChar != keyChar:
                    print("DONE: " + longestPrefix)
                    return longestPrefix
                    
            # print("Common Char exists: " + currChar)
            
            # while the chars in each string are same, add it to the longest prefix
            longestPrefix += currChar
        
        return longestPrefix
