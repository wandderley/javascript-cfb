let n = 0
let max = 100
let pares = 0

// CONTINUE
for(let i=n; i < max; i++){
    console.log("Curso js - " + i)
    if (i%2 != 0) {
        continue
    }
    pares ++
}
console.log("Fim do programa")
console.log("Quantidade de pares: " + pares)


// BREAK
// while (n < max) {
//     console.log("Curso js - " + n)
//     if (n > 10) {
//         break
//     }
//     n++
// }
// console.log("Fim do programa")