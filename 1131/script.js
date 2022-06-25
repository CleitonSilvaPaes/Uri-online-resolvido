let grenais = 0
let vInter = 0
let vGremio = 0
let vEmpate = 0
while(true){
    grenais++
    let action = prompt()
    action = action.split(' ')
    let n1 = Number(action[0]);
    let n2 = Number(action[1]);
    let yesOrNo = parseInt(prompt('Novo grenal (1-sim 2-nao)'))
    if (yesOrNo == 2){
        console.log(`${grenais} grenais`)
        console.log(`Inter: ${vInter}`)
        console.log(`Gremio: ${vGremio}`)
        console.log(`Empates: ${vEmpate}`)
        if (vInter > vGremio){
            console.log('Inter venceu mais')
        } else if (vInter < vGremio){
            console.log('Gremio venceu mais')
        } else {
            console.log('Nao houve vencedor')
        }
        break
    }
    if (n1 > n2){
        vInter++
    } else if (n1 < n2){
        vGremio++
    }
    else{
        vEmpate++
    }

}