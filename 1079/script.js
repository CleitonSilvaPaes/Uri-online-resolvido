// 1079 - Médias Ponderadas
// https://www.beecrowd.com.br/judge/pt/problems/view/1079

// Fazer a media ponderada de um aluno.

let nVezes = parseInt(prompt("Digite a quantidade de casos de teste: "));
for (let i = 0; i < nVezes; i++) {
    action = prompt()
    let notas = action.split(" ")
    media = parseFloat(notas[0]) * 0.2 + parseFloat(notas[1]) * 0.3 + parseFloat(notas[2]) * 0.5
    console.log(media.toFixed(1))
}