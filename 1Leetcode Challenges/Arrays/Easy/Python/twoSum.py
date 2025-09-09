def twoSum(nums, target):
    # create a hashmap
    checkedNums = {}

    # loop thru array of int
    for idx, num in enumerate(nums):
        # check diff and see if diff equals any value in hashmap
        diff = target - num

        # if equals, return its position + current position as array
        if diff in checkedNums: 
            return [idx, checkedNums[diff]]

        # if not in the hashmap, add it in + its position
        if num not in checkedNums:
            checkedNums.update({num: idx})