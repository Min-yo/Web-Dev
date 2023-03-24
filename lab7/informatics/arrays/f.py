n = int(input())
li = [int(x) for x in input().split()]
cnt = 0 
last = li[0]
for x in range(1,n-1):
    next = li[x+1]
    if (last<li[x] and next<li[x]):
        cnt+=1
    last = li[x]
print(cnt)