const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((elemento, chave)=>{
    console.log(chave)
    const novoElemento = document.createElement("div") // criando um elemento div
    novoElemento.innerHTML = elemento // adicionando texto
    novoElemento.setAttribute("id", "c" + (chave+1)) // adicionando id
    novoElemento.setAttribute("class","curso c1") // adicionando classe
    caixa1.appendChild(novoElemento) // adiciona o elemento à caixa1
})


/* Criação de elemento e adicionar atributos à ele 
    const novoElemento = document.createElement("div") // criando um elemento div
    novoElemento.innerHTML = "ReactNative" // adicionando texto
    novoElemento.setAttribute("id","c7") // adicionando id
    novoElemento.setAttribute("class","curso c1") // adicionando classe
    caixa1.appendChild(novoElemento)// adiciona o elemento à caixa1 
*/
