const valores = [10, 8, 9, 2]
const it_valores = valores[Symbol.iterator]()


const texto = "youtube"
const it_texto = texto[Symbol.iterator]()


//iterador de string
console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())

//iterador de string de valotes numericos
// console.log(valores)
// console.log(it_valores.next().value)
// console.log(it_valores.next().value)
// console.log(it_valores.next().value)
// console.log(it_valores.next().value)
// console.log(it_valores.next().value)