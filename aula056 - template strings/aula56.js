const caixa = document.querySelector("#caixa")

const carros = ["Polo","Golf","T-Cross","HRV"]

let ul = `<ul>`
carros.map((el)=>{
    ul+=`<li>${el}</li>`
})
ul += `</ul>`

const curso = "Javascript"
const canal = "CFB Cursos"

// METODO ANTIGO
// const frase = "Este é o curso de " + curso + " do canal" + canal +
// " teste"

//NOVO MÉTODO
// /n quebra linha no console log e <br/> no DOM
const frase = `Este é o <br/>\ncurso de ${curso} do <br/>\ncanal ${canal}`


console.log(frase)
caixa.innerHTML = ul
