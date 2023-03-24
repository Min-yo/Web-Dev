n = int(input())
li = [int(x) for x in input().split()]
for x in li:
    if x%2==0:
        print(x, end=" ")