const objetos = document.getElementById("objetos")

const computador = {
    cpu: "",
    ram: "",
    hd: "",
    info: function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

computador["monitor"] = "22pol"
computador.placaVideo = "RTX"

//deletar
delete(computador.hd)

// clonar
const c1 = Object.assign({},computador)
console.log(computador)
c1.info()

const c2 = Object.create(computador)
c2.cpu = "i9"
c2.ram = "32gb"
c2.hd = "2tb"
c2.info()

// merge
const o1 = {obj1: '1'}
const o2 = {obj2: '1'}
const o3 = {obj3: '1'}
const o4 = Object.assign(o1,o2,o3)
console.log(o4)





//EXIBIR APENAS UMA PROPRIEDADE
// console.log(computador.cpu)
//OU
// console.log(computador["cpu"])

const computadores = [
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"
    },
    {
        cpu: "i7",
        ram: "32gb",
        hd: "2tb"
    },
    {
        cpu: "i5",
        ram: "16gb",
        hd: "1tb"
    }
]

computadores.forEach((comp)=>{
    const div = document.createElement("div")
    div.innerHTML = comp.cpu + "<br/>" + comp.ram + "<br/>" + comp.hd
    div.setAttribute("class", "computador")
    objetos.appendChild(div)
})

// computador.info()

// console.log(computadores)

// EXIBIR ELEMENTOS DO OBJETO NA DIV
// objetos.innerHTML= computador.cpu + " "+ computador.ram + " " +computador.hd

//OU 

// objetos.innerHTML = JSON.stringify(computadores)