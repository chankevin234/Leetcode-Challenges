'''
1) Ask: Given the head of a linked list, remove the nth node from the end of the list and return its head.

2) Examples:
Input: head = [1,2,3,4,5], n = 2; Output: [1,2,3,5]
Input: head = [1], n = 1; Output: []
Input: head = [1,2], n = 1; Output: [1]

3) Pattern: Singly Linked List and Two Pointer
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        '''
        SOLUTION STARTS HERE
        '''
        # set the currNode and removeNode as head
        currentNode = head
        removeNode = head

        # get the currNode to n difference
        for i in range(n):
            currentNode = currentNode.next

        '''
        EDGE CASE 1
        '''
        if currentNode == None:
            # removeNode.val = None
            # removeNode.next = None
            return head.next
            
        # now curr and remove nodes will be at difference n
               
        print(currentNode.val)
        print(removeNode.val)
                
        print("Starting loop...")
        
        # find the location of the node
        # loop thru the head until you hit that value
        while (currentNode.next != None):
            currentNode = currentNode.next
            removeNode = removeNode.next                    
                  
        
        
        # REMOVAL
        # removeNode.val = removeNode.next.val
        removeNode.next = removeNode.next.next
        
        # print(head)
        return head
        