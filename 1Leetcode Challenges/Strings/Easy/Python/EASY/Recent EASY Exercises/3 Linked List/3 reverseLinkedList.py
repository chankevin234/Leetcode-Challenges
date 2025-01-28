'''
1) Ask: Given the head of a singly linked list, reverse the list, and return the reversed list.

2) Examples:
Input: head = [1,2]; Output: [2,1]
Input: head = []; Output: []

'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # set prevNode as None
        prevNode = None
                
        # loop thru the list until head is null
        while (head):
            # set the currNode = head (list) you are viewing
            currentNode = head
            
            # set the head to the next val in it (removes the head from leftside)
            head = head.next
            
            # set currentNode as the head's next (creates new chain)
            currentNode.next = prevNode
            
            # set the prevNode as the currentNode (new head/LinkedList)
            prevNode = currentNode
            
            print(prevNode)
        
        # return head
        return prevNode