from math import sqrt
linha = input().split()
linha1 = input().split()
x,y = linha
x1, y1 = linha1
x = float(x)
x1 = float(x1)
y = float(y)
y1 = float(y1)
dis = sqrt((((x1 - x)**2) + (y1 - y)**2))
print('%.4f' %dis)
