'''
1) Ask: Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

2) Example: 
    Input: s = "leetcode"; Output: 0
        Explanation:
            The character 'l' at index 0 is the first character that does not occur at any other index.
            
3) Pattern: Hashmap or Frequency Counter?
'''
from collections import Counter

'''FREQUENCY COUNTER APPROACH'''
def firstUniqChar(s):
    # create a Counter object 
    count = Counter(s)
    print(count)

    # loop thru the string and if you bump into something that has > 1 reoccurance, skip it, else return it       
    for idx, char in enumerate(s):
        print(idx, char)
        if count[char] == 1:
            return idx
    
    return -1

