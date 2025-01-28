'''
1) Ask: Implement (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:
    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.
'''

class MyQueue:
    # initialize the two stacks/arrays that will allow for FIFO
    def __init__(self):
        # self = this
        self.in_stack = []
        self.out_stack = []

    # push element to back of queue
    def push(self, x: int) -> None:
        self.in_stack.append(x)

    # remove element from front of the queue
    def pop(self) -> int:
        self.peek()
        return self.out_stack.pop()                

    # get first item in queue
    def peek(self) -> int:
        # check if the out stack is empty
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())
        return self.out_stack[-1]
    
    # check if queue is empty
    def empty(self) -> bool:
        # check if either stack is empty
        return not self.in_stack and not self.out_stack
        


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()