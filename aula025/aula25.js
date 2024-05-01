//const soma = function(v1, v2) {return v1+v2} // Função padrão

// Arrow Function
//const soma = (v1,v2)=>{return v1 + v2}
const soma = (v1,v2)=>v1 + v2
console.log(soma(10, 5))

const nome = n=> {return n}
//const nome = n=>n // não precisa do return, somente quando for uma linha
console.log(nome("Luiz"))

const add=n=>n+10 // não precisa do return
console.log(add(10))


