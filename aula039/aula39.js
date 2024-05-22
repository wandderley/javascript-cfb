const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")

console.log(c1_2.parentNode.parentNode.children[4]) // pai do pai, e o 4 filho dele

// console.log(caixa1.hasChildNodes()) // posui filhos?
// console.log(btn_c[0].hasChildNodes()) // posui filhos na primeira posição?
// console.log(btn_c[0].childNodes)

// console.log(btn_c[0].children.length > 0 ? "possui filhos" : "não possui filhos") // ternário

// console.log(caixa1.children[1].innerHTML = "teste")