const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1, 2, 3, 4, 5]
let antes = []
let atu = []
let dobro = []

p_array.innerHTML = "[" + elementos_array + "]"

btnReduzir.addEventListener("click", (evento) => {

    dobro.push(elementos_array[0] * 2)

    resultado.innerHTML = elementos_array.reduce((anterior, atual, posicao) => {
        antes.push(anterior)
        atu.push(atual)
        dobro.push(atual * 2)
        return atual + anterior
    })
    
    resultado.innerHTML += "<br/> Anterior: " + antes + "<br/>Atual: " + atu
    resultado.innerHTML += "<br/> Dobro: " + dobro
})