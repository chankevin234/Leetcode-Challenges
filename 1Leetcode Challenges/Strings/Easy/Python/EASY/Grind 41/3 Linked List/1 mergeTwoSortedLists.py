'''
1) Ask: Given the heads of two sorted linked lists list1 and list2.
    Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

    Return the head of the merged linked list.

2) Examples:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

3) Pattern: Two Pointers to compare the heads

'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # make sure your currentNode points at the same object as the merged list, allows you to update at the same time
        
        # this allows you to update the merged list too
        currentNode = merged = ListNode()
              
        # whichever pointer has a value that is larger, disconnect the head of list1/2 and then attach
        while list1 and list2:          
            # compare the head's values of each list while both have values
            if list1.val < list2.val:
                # pop off values as a node
                currentNode.next = list1              
                # create a new head for List1 (removes the currHead)
                # then set currentNode so that it can be checked in the next loop around
                list1, currentNode =  list1.next, list1               
                
                print("List1's head is <= List2's head")
                
            else:
                currentNode.next = list2

                # create a new head for List1
                list2, currentNode = list2.next, list2
                print("List2's head is <= List1's head")
        
        # attach the remaining values in the non-empty list
        if list1 or list2:
            currentNode.next = list1 if list1 else list2 
        
        # return the merged List
        print(merged)
        return merged.next