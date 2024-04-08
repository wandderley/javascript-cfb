

// defer executa em paralelo o html e js

/* USO DE MEMORIA
let nome = "luiz"

{
    let siglacurso = "JS"
    console.log(siglacurso)
}

const curso = () => {
    let curso = "Javascript"
    console.log(curso)
}

curso()
*/

/* COMO SABER QUAL O APARELHO
if(navigator.userAgent.match(/Android/i) 
|| navigator.userAgent.match(/webOS/i) 
|| navigator.userAgent.match(/iPhone | iPad | iPod/i) 
|| navigator.userAgent.match(/BlackBarry/i) 
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
) {
    console.log("Celular")
}else {
    console.log("PC")
}
*/

/* INPUT ATRAVÉS DO HTML
let nome = prompt("Digite seu nome")
console.log(nome)
*/

/* COMPARAÇÃO DE OBJETOS
let v1={nome:"Bruno"}
let v2={nome:"Bruno"}
// v2 = v2 tornaria o resultado true de vido a referencia da posição da memoria ser a mesma
console.log(v1 === v2) // retorna false devido a que cada um está em uma posição da memória
*/

/* COMPARAÇÃO DE DIFERENTES TIPOS COM MESMO CONTEÚDO
let n1 = 1 // number
let n2 = "1" // string
console.log(n1 === n2) // Compara também o tipo de dados
*/