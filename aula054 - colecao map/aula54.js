const caixa = document.querySelector("#caixa")

let mapa = new Map ()

mapa.set("curso","JavaScript")
mapa.set(10,"CBF Cursos")
mapa.set(1,100)
mapa.set("canal",100)

mapa.delete(1) //deleta atraves da chave

console.log(mapa)

let pes  = "teste" // recebe a chave a ser pesquisada
let res = ""

if(mapa.has(pes)){
    res = caixa.innerHTML = "A chave existe na coleção com o valor: " + mapa.get(pes)

}else{
    res = caixa.innerHTML = "A chave não está na coleção"
}
res += "<br/> O tamanho da coleção é " + mapa.size

caixa.innerHTML = res 
// caixa.innerHTML = mapa.get("curso") // recebe o valor atraver da chave

// percorre toda a coleção
mapa.forEach((el)=>{
    console.log(el)
})