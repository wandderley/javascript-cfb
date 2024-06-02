//const filtroMaior18 = (value, index, array) => {
const filtroMaior18 = (value) => { // posso trabalhar só com o valor
    if (value >= 18)
        return value 
}

const idades = [15, 21, 30, 17, 18, 44, 12, 50]
const maior = idades.filter((value, index, array)=>{
    if (value >= 18)
        return value 
})

const menor = idades.filter((value, index, array)=>{
    if (value < 18)
        return value 
})


console.log(idades)
console.log(maior)
console.log(menor)