function* contador (){
    let i = 0
    // impede o loop infinito quando chamado no for abaixo, fazendo a iteração chegando até o 5
    while(true){
        yield i++
        if(i>5)
            break
    }
}

const itc = contador()
for (c of itc) {
    console.log(c)        
}



/* EXEMPLO 2
function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome +', seu esporte favorito é ' + esporte
}
const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Luiz').value)
console.log(itp.next('Skate').value)
*/

/* EXEMPLO 1
function* cores() {
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
}

const itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/