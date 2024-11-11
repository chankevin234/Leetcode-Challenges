def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
    ans=[]
    # Create a Counter (hash map) from nums1 to count occurrences of each element
    hash_map=Counter(nums1)
    for num in nums2:
        # Check if the current number is in the hash_map and has a count greater than 0
        if num in hash_map and hash_map[num]>0:
            # If so, append the number to the result list
            ans.append(num)
            # Decrease the count of this number in the hash_map by 1
            hash_map[num]-=1
    print(ans)
    return ans
        

    