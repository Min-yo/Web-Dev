def array_front9(nums):
    if len(nums) < 4:
        for x in nums:
            if x == 9:
                return True
    else:
        for x in range(0, 4):
            if nums[x] == 9:
                return True
    return False