'''
1) Ask: There is a singly-linked list 'head' and we want to delete a node 'node' in it.

You are given the 'node' to be deleted node. You will not be given access to the first node of head.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:
    The value of the given node should not exist in the linked list.
    The number of nodes in the linked list should decrease by one.
    All the values before node should be in the same order.
    All the values after node should be in the same order.

2) Example: Input: head = [4,5,1,9], node = 5; Output: [4,1,9]
    Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        @param: node
        """
        print(f'Original Node: {node}')    
        
        # find the followingNode
        followingNode = node.next

        # replace the .next of the currNode with the .next of followingNode
        node.val = followingNode.val
        
        # replace the value of the currNode's with the value of the folloingNode
        node.next = followingNode.next