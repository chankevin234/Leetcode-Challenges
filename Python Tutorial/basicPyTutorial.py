# Part 1: vars
n = 0
# - None is null
n = None
# ==============================================================================================

# Part 2: if statements (no parantheses or curly braces); multi-line conditions need parantheses
# and = &&
# or = ||
n = 1
if n > 2:
    n -= 1
elif n == 2:
    n *= 2
elif n == 1 and n == 3:
    n *= 3
else:
    n = 3
# ==============================================================================================

# Part 3: While Loops and For Loops
n = 0
while n < 5:
    print(n)
    n += 1
# loop from i = 0 to i = 4
for i in range(5):
    print(i)
# loop from i = 2 to i = 5
for i in range(2, 6):
    print(i)
# loop in reverse
for i in range(5, 1, -1):
    print(i)
# ==============================================================================================

# Part 4: Math
# DIVISION - decimal by default
print(5 / 2)
print(10 % 3) # but modding with neg nums, produces a pos value

# To be consistent with other languages 
import math
print(math.fmod(-10, 3))

# other math helpers
print(math.floor( 3 / 2))
print(math.ceil(3/2))
print(math.sqrt(2))
print(math.pow(2, 3))
# ==============================================================================================

# Part 5: Arrays/List
arr = [1,2,3]

# arr can be used as stacks
arr.append(4) # push()
arr.pop() # pop()

# insert value at index
arr.insert(1, 7)

# index insert
arr[0] = 10

# initialize arr with a specific size
n = 5
arr = [1] * n

# sublists (slicing)
arr = [1,2,3,4]
print(arr[1:3])

# unpacking (assign each index value to a single var)
a, b, c = [1,2,3]

# looping through an arr
nums = [1,2,3]

# for index
for i in range(len(nums)):
    print(nums[i])

# for each loop
for i in nums:
    print(i)

# print both index and value
for index, val in enumerate(nums):
    print(index, val)

# loop through multi arrs w/o unpacking
nums1 = [1,2,3]
nums2 = [2,3,4]

for n1, n2 in zip(nums1, nums2):
    print(n1, n2)

# reverse arr
nums.reverse();
# =========================================================

# Part 6: Sorting
# sort arr
arr = [9,3,5,6,2,4,5]
arr.sort() # sorts ascending
print(arr)

arr.sort(reverse=True) # sorts from descending
print(arr)

# sort alpha
arr = ['blob', 'abc', 'jane'].sort() # a-z

# sort by custom (ex. len of string)
# maps each value in arr (x) to it's length
# then sorts it
arr.sort(key=lambda x: len(x))
# # ==============================================================================================

# Part 7: strings
# similar to arrays
s = 'abc'
print(s[0:2])

# strings are immutable (can't reassign indexes of the string)
# if you += to a string, it creates a new one

# convert numeric strings to ints
print(int('123') + int('123'))
print(str(123) + str(123))

# if you want the ASCII value of a char
print(ord('a'))

# combine an arr of strings (use empty string delimitor)
strings = ['abc', 'sd', 'qw']
print(''.join(strings))
