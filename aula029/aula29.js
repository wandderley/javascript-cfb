function aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
    
    // usando arrow function
    this.dados_arrow = function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const aluno1 = new aluno("Luiz",100)

aluno1.dados_anonimo()
aluno1.dados_arrow()