# -*- coding: utf-8 -*-

nVez = int(input())
cobaias = {'C':0,'R':0,'S':0}
for i in range(nVez):
    nQAnimal = input().split(" ")
    nQAnimal[0] = int(nQAnimal[0])
    nQAnimal[1] = nQAnimal[1].upper()
    if nQAnimal[1] == 'C' or nQAnimal[1] == 'R' or nQAnimal[1] == 'S':
        cobaias[nQAnimal[1]] += nQAnimal[0]
print(f'Total: {sum(cobaias.values())} cobaias')
print(f'Total de coelhos: {cobaias["C"]}')
print(f'Total de ratos: {cobaias["R"]}')
print(f'Total de sapos: {cobaias["S"]}')
print(f'Percentual de coelhos: {((cobaias["C"]) / sum(cobaias.values())) * 100:.2f} %')
print(f'Percentual de ratos: {((cobaias["R"]) / sum(cobaias.values())) * 100:.2f} %')
print(f'Percentual de sapos: {((cobaias["S"]) / sum(cobaias.values())) * 100:.2f} %')