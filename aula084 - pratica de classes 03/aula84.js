const palco = document.getElementById("palco")
const num_objetos = document.getElementById("num_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBolas = 0

class Bola {
    constructor(arrayBolas, palco) {
        //tamanhdo da bolinha
        this.tam = Math.floor(Math.random() * 10) + 10
        // cor aleatoria da bolinha RGB
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)
        this.b = Math.floor(Math.random() * 255)
        // local da tela que irá spawnar
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam))
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam))
        // velocidade
        this.valx = Math.floor(Math.random() * 2) + 0.5
        this.valy = Math.floor(Math.random() * 2) + 0.5
        //direção
        this.dirx = (Math.random() * 10) > 5 ? 1 : -1
        this.diry = (Math.random() * 10) > 5 ? 1 : -1

        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now() + "_" + Math.floor(Math.random() * 1000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar, 10)
        this.eu = document.getElementById(this.id)
    }

    minhaPos = () => {

    }

    remover = () => {

    }

    desenhar = () => {

    }

    controlar = () => {

    }
}

window.addEventListener("resize", (evt) => {
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
    console.log(larguraPalco)
})

btn_add.addEventListener("click", (evt) => {
    const qtde = txt_qtde.value
    for (let i = 0; i < qtde; i++) {
        //instanciar novas bolinhas
    }
})

btn_remover.addEventListener("click", (evt) => {
    bolas.map((bolas) => {
        //Remover as bolinhas
    })
})  