const caixa = document.querySelector("#caixa")

let cores = ["Azul","Verde","Vermelho", ["claro", "escuro", "médio"]]
let cursos = ["HTML", "CSS", "Javascript", cores]

/*
// cursos[0] = 2024
// adiciona um elemento no array na ultima posição
cursos.push("C++") 
cursos.push("Python") 
// adiciona um elemento no array na primeira posição
cursos.unshift("Python") 

cursos.pop() // remove o ultimo elemento do array
cursos.shift() // remove o primeiro elemento do array

console.log(cursos[0])
*/

cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})

console.log(cursos)

console.log(cursos[3][3][2])