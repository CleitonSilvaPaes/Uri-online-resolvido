// 1094 - Experiências
// https://www.beecrowd.com.br/judge/pt/problems/view/1094

let nVezes = parseInt(prompt("Digite a quantidade de casos de teste: "));
let dictA = {'C': 0, 'R': 0, 'S': 0}
for (let i = 0; i < nVezes; i++) {
    let qtaAnimal = prompt().split(' ')
    qtaAnimal[1] = qtaAnimal[1].toUpperCase()
    while (qtaAnimal[1] != 'C' && qtaAnimal[1] != 'R' && qtaAnimal[1] != 'S') {
        qtaAnimal = prompt().split(' ')
        qtaAnimal[1] = qtaAnimal[1].toUpperCase()
    }
    dictA[qtaAnimal[1]] += parseInt(qtaAnimal[0])
}
let total = dictA['C'] + dictA['R'] + dictA['S']
let totalC = dictA['C']
let totalR = dictA['R']
let totalS = dictA['S']
let percentualC = (totalC / total) * 100
let percentualR = (totalR / total) * 100
let percentualS = (totalS / total) * 100
console.log(`Total: ${total} cobaias.`)
console.log(`Total de coelhos: ${totalC}.`)
console.log(`Total de ratos: ${totalR}.`)
console.log(`Total de sapos: ${totalS}.`)
console.log(`Percentual de coelhos: ${percentualC.toFixed(2)} %`)
console.log(`Percentual de ratos: ${percentualR.toFixed(2)} %`)
console.log(`Percentual de sapos: ${percentualS.toFixed(2)} %`)
