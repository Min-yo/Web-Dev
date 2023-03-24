def Xor(a, b):
    if a != b:
        return 1
    else: return 0
li = [int(x) for x in input().split()]
print(Xor(li[0], li[1]))