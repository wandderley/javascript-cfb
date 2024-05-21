const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(btn_c[0].getRootNode()) // nó raiz
console.log(btn_c[0].ownerDocument) // proprietário

// console.log(caixa1.firstElementChild) // primeiro elemento filho
// console.log(caixa1.lastElementChild) // ultimo elemento filho
// console.log(caixa1.children) // todos os elementos filhos