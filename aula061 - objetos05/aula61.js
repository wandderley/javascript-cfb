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

const p2 = Pessoa
const p3 = Pessoa

// alterando a propriedade "nome"
p3.nome = "Cladisvardon"
p2["nome"] = "Bridgertrudsmelda"
Pessoa.setNome("Patricscrerdison")

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)