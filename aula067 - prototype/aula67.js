const Nave = function(energia){
    this.energia = energia
    this.disparos = 100
}

const n1 = new Nave(100)

// incrementa propriedades ou métodos nos objetos
Nave.prototype.vidas = 3
Nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos--
    }
}

n1.disparar()
n1.disparar()

console.log(Nave)
console.log(n1)
console.log(n1.energia)

console.log(n1.disparos)