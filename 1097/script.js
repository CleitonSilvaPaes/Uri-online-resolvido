// let i = 0
// let j = 1
// acrecimo = (0.2)
// while (i<=2) {
//     for (let c = 1; c < 4; c++) {
//         if (i > 2.19) {
//             console.log(`I=${2} J=${j.toFixed(0)}`)
//         }
//         else if (i == 1.0 || i ==0.0 || i > 1.8){
//             console.log(`I=${i.toFixed(0)} J=${j.toFixed(0)}`)
//         } else {
//             console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}`)
//         }
//     }
//     i += acrecimo
//     j = 1+i
// }
let j = 1
i = 0
while(i < 2) {
    for (let c = 1; c < 4; c++) {
        if (i > 2){
            console.log(2, j)
        } else if (i == 1.0 || i == 0.0 || i > 1.8) {
            console.log(i.toFixed(0), j.toFixed(0))
        } else {
            console.log(i.toFixed(1), j.toFixed(1))
        }
        j++
    }
    i += (0.2)
    j = 1 + i
}