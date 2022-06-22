nVezes = int(input())
dictA = {'C': 0, 'R': 0, 'S': 0}
for i in range(nVezes):
    qtaAnimal = input().split(' ')
    qtaAnimal[1] = qtaAnimal[1].upper()
    while (qtaAnimal[1] != 'C' and qtaAnimal[1] != 'R' and qtaAnimal[1] != 'S'):
        qtaAnimal = input().split(' ').upper()
    dictA[qtaAnimal[1]] += int(qtaAnimal[0])
total = dictA['C'] + dictA['R'] + dictA['S']
totalC = dictA['C']
totalR = dictA['R']
totalS = dictA['S']
percentualC = (totalC / total) * 100
percentualR = (totalR / total) * 100
percentualS = (totalS / total) * 100
print(f'Total: {total} cobaias')
print(f'Total de coelhos: {totalC}')
print(f'Total de ratos: {totalR}')
print(f'Percentual de coelhos: {percentualC:.2f} %')
print(f'Percentual de ratos: {percentualR:.2f} %')
print(f'Percentual de sapos: {percentualS:.2f} %')
