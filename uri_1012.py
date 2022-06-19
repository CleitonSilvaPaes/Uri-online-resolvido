valores = input().split(' ')
a, b, c = valores
pi = 3.14159
triangulo = (float(a) * float(c))/2
circulo = pi * (float(c)* float(c))
trapezio = float(c) *(float(a) + float(b)) / 2
quadrado = float(b) * float(b)
retangulo = float(a) * float(b)
print('TRIANGULO: %.3f' %(triangulo))
print('CIRCULO: %.3f' %(circulo))
print('TRAPEZIO: %.3f' %(trapezio))
print('QUADRADO: %.3f' %(quadrado))
print('RETANGULO: %.3f' %(retangulo))
