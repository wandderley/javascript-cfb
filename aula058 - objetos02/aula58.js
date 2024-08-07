class Carro {
    canal = "CFB Cursos"
    constructor(pnome, tipo) {
        this.nome = pnome
        this.canal = "Youtube"
        if (tipo == 1) {
            this.tipo = "Esportivo"
            this.velmax = 300
        } else if (tipo == 2) {
            this.tipo = "Utilitário"
            this.velmax = 100
        } else if (tipo == 3) {
            this.tipo = "Passeio"
            this.velmax = 160
        } else {
            this.tipo = "Militar"
            this.velmax = 180
        }

    }

    getNome(){
        return this.nome;
    }

    getTipo(){
        return this.tipo;
    }

    getVelMax(){
        return this.velmax;
    }

    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }

    setNome(nome){
        this.nome = nome;
    }

    setTipo(tipo){
        this.tipo = tipo;
    }

    setVelMax(vel){
        this.velmax = vel;
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Máxima: ${this.velmax}`)
        console.log(`Canal: ${this.canal}`)
        console.log("---------------------------------")
    }
}

let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Super Luxo", 3)
let c3 = new Carro("Bombadão", 4)
let c4 = new Carro("Carrego tudo", 2)

c1.setNome("Super Veloz")
c1.setVelMax(500)
c1.info()


// c1.info()
// c2.info()
// c3.info()

