'''
1) Ask: Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

2) Examples:
Input: head = [3,2,0,-4], pos = 1; Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

3) Pattern: Singly Linked List and HASH MAP
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        # initialize the hash map to check if a node has been visited
        visitedNodes = set()
        
        # initialize the placeholder
        node = head

        # edge case:
        if not head:
            return False
        
        # loop while there is a 'next value', if it loops forever, it's true
        while node.next != None:
            # if there is an end, break out and return FALSE (not a cycle)
            if node.next == None:
                break

            # if node has been visited already, it must be a LOOP (return TRUE)
            if node in visitedNodes:
                return True

            visitedNodes.add(node)
            node = node.next

        return False

# CLEANER SOLUTION!
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        visited_nodes = set()
        current_node = head
        while current_node:
            if current_node in visited_nodes:
                return True
            visited_nodes.add(current_node)
            current_node = current_node.next
        return False                                                                 