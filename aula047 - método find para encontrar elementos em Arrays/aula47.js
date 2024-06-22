const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos_array = ["html", "css", "javascript"]

p_array.innerHTML = "[" + elementos_array + "]"

btnPesquisar.addEventListener("click", (evt)=>{
    resultado.innerHTML = "Valor não encontado"
    const retorno = elementos_array.find((elemento, index)=>{
        if(elemento.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML = "Valor " + elemento + " encontado na posição " + index
            return elemento
        }
    })
    console.log(retorno)
})