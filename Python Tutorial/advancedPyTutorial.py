# Part 1: Queues (double ended)
from collections import deque

myQueue = deque()
myQueue.append(1)
myQueue.append(2)
print(myQueue)

myQueue.popleft() # remove value at beginning of queue
myQueue.appendleft(1)
myQueue.pop()
# ==============================================================================================

# Part 2: HashSet (search in constant time) --> no duplicates
mySet = set()
mySet.add(1)
mySet.add(3)
print(mySet)
print(len(mySet))

# check if a value exists in a HashSet
print(1 in mySet) # bool = true

mySet.remove(3) # remove in constant time

# initialize Set with values
print(set([1,2,3]))

# you can use a loop to manually initialize the set
mySet2 = { i for i in range(5) }
# ==============================================================================================

# Part 3: HashMaps (dictionary)
myMap = {}
# no duplicate keys
myMap['kevin'] = 88
myMap['alice'] = 77

# check # of keys
hashKeys = len(myMap)

# change value of a key pair
myMap['kevin'] = 900

# use 'in' to check if key exists in HashMap
print('alice' in myMap)

# remove key value pair
myMap.pop('alice')

# manually initialize 
myMap2 = {
    'andy': 40,
    'bob': 90
}

# dict comprehension (used for graph problems)
myManualMap = { i: 2*i for i in range(3) }

# loop through a dict
myNewMap = { 'hehe': 2, 'hoho': 5}

# loop thru keys
for key in myNewMap:
    print(key, myNewMap[key])

# loop thru values (.value)
for value in myNewMap.values():
    print(value)

# loop thru key + value
for key, value in myNewMap.items():
    print(key, value)
# ==============================================================================================

# Part 4: Tuples (immutable arrs) --> can't be modded
tup = (1,2,3)

# used mainly as key for hashmap/set
myMap = { (1,2): 3}
print(myMap[(1,2)])

# used for sets
mySet = set()
mySet.add((1,2))
print((1,2) in mySet)

# lists can't be used as keys!
# ==============================================================================================

# Part 6: Heaps (used to find min/max of set of value)
import heapq

# in py, they are implemented with arrays (by default, they are min heaps)
minHeap = []
heapq.heappush(minHeap, 3)
heapq.heappush(minHeap, 2)
heapq.heappush(minHeap, 4)

# min value is ALWAYS at index 0
print(minHeap)

while len(minHeap):
    print(heapq.heappop(minHeap)) # pops the largest value (end of the heap?)

# Max Heap
# use min heap and multiply by -1 when push/pop
maxHeap = []
heapq.heappush(maxHeap, -3)
heapq.heappush(maxHeap, -2)
heapq.heappush(maxHeap, -4)

# max is at index 0, but multiply by -1 first
print(-1 * maxHeap[0])

while len(maxHeap):
    print(-1 * heapq.heappop(maxHeap))

# build heap from initial values
arr = [2,1,8,4,5]
heapq.heapify(arr) # changes arr into a heap
while arr:
    print(heapq.heappop(arr))
# ==============================================================================================

# Part 7: Functions
def myFunc(n,m):
    return n * m

print(myFunc(1,2))

# NESTED Functions -> can access outer variables (will come back)
def outer(a,b):
    c = 'c'

    def inner():
        return a + b + c

    return inner()
print(outer('a', 'b'))
# ==============================================================================================

# Part 8: Classes 
class MyClass:
    # constructor
    # self = this
    def __init__(self, nums):
        # create member vars
        self.nums = nums
        self.size = len(nums)
    
    # class methods (require self to access constructor vars)
    def getLength(self):
        return self.size
    
    # call another member function
    def getDoubleLength(self):
        return self.getLength() * 2