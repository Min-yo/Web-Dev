def min(a, b, c, d):
    m=a
    if (b<m): m=b
    if (c<m): m=c
    if (d<m): m=d
    return m

li = [int(x) for x in input().split()]


print(min(li[0], li[1], li[2], li[3]))