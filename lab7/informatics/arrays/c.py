n = int(input())
li = [int(x) for x in input().split()]
cnt = 0 
for x in li:
    if x>0:
        cnt+=1
print(cnt)