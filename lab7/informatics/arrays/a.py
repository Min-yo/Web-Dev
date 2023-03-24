n = int(input())
li = [int(x) for x in input().split()]
for x in range(0, n, 2):
    print(li[x], end=" ")