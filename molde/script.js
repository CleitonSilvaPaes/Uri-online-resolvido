// 1071 - Soma de Impares Consecutivos I
// https://www.beecrowd.com.br/judge/pt/problems/view/1071

// Somar os numero impares consecutivos de um numero inteiro como entrada e imprimir o resultado.

let n1 = parseInt(prompt("Digite um número: "));
let n2 = parseInt(prompt("Digite outro número: "));

if (n1 > n2) {
    document.write(`A soma dos impares entre ${n2} e ${n1} é: ${pegarImpar(n1, n2)}`);
}
else {
    document.write(`A soma dos impares entre ${n1} e ${n2} é: ${pegarImpar(n2, n1)}`);
}


function pegarImpar(n1, n2) {
    let somaN = 0;
    for (let i = n2+1; i < n1; i++) {
        if (i % 2 != 0) {
            somaN += i;
        }
    }
    return somaN;
}
