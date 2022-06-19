linha = input().split(' ')
linha1 = input().split(' ')
cod, quant, valor = linha
cod1, quant1, valor1 = linha1
print('VALOR A PAGAR: R$ %.2f' %(int(quant) * float(valor) + int(quant1) * float(valor1)))
