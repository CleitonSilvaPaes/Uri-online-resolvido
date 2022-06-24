// 1099
// Soma de Ímpares Consecutivos II
// https://www.beecrowd.com.br/judge/pt/problems/view/1099

let n = parseFloat(prompt())
for (let i = 0; i < n; i++) {
    let numeros = prompt().split(" ")
    n1 = parseInt(numeros[0])
    n2 = parseInt(numeros[1])
    if (n1 > n2) {
        console.log(pegarImpar(n1, n2))
    } else {
        console.log(pegarImpar(n2, n1))
    }

}

function pegarImpar(n1, n2) {
    somaN = 0
    for (let i = n2 + 1; i < n1; i++) {
        if (i % 2 != 0){
            somaN += i
        }
    }
    return somaN
}