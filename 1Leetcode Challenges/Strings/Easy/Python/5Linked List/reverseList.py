'''
1) Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.
2) Examples
    Input: head = [0,1,2,3]; Output: [3,2,1,0]
3) Pattern: 
    Two Pointers 
'''
def reverseList():
    # set the left most value to prev
    prev = None
    # set the curr value to head
    curr = head

    # loop thru the head from lefthand side
    while curr:
        # set temp as the right hand value
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    
    return prev