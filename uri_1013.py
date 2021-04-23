linha = input().split()
a, b, c = linha
a = int(a)
b = int(b)
c = int(c)
maiorAb = (a+b+abs(a-b))/2
maior = (maiorAb+c+abs(maiorAb-c))/2
print('%.0f eh o maior' %maior)
