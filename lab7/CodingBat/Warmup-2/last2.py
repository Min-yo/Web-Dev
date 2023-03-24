def last2(str):
    if len(str) < 3:
        return 0
    cnt = 0
    ptrn = str[-2:]
    for x in range(0,len(str)-2):
        if ptrn == str[x:x+2]:
            cnt+=1
    return cnt