// Objeto literal
const Pessoa = {
    nome: "",
    idade: "",

    getNome: function () {
        return this.nome
    },
    getIdade: function () {
        return this.idade
    },

    setNome: function (nome) {
        this.nome = nome
    },
    setIdade: function(idade) {
        this.idade = idade
    }
}

//             DESAFIO
const nome = document.querySelector("#f_nome")
const idade = document.querySelector("#f_idade")
const add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

add.addEventListener("click", () => {
    Pessoa.setNome(nome.value)
    Pessoa.setIdade(idade.value)

    let div = document.createElement("div")
    div.setAttribute("class", "pessoa")
    div.innerHTML = (`Nome: ${Pessoa.getNome()}<br/> Idade: ${Pessoa.getIdade()}`)

    res.appendChild(div)
})

//                 CONTEUDO DA AULA
// const p2 = Pessoa
// const p3 = Pessoa

// // alterando a propriedade "nome"
// p3.nome = "Cladisvardon"
// p2["nome"] = "Bridgertrudsmelda"
// Pessoa.setNome("Patricscrerdison")

// console.log(Pessoa.nome)
// console.log(p2.getNome())
// console.log(p3.nome)