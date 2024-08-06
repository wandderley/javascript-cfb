const caixa = document.querySelector("#caixa")

let musicas = new Set(["musica 1", "musica boa", "musica 10"])

musicas.add("musica muito legal")
// não permite adicionar elemento repetido
musicas.add("musica 1") 
musicas.add("musica 10")

musicas.delete("musica 1") // deleta a musica inserida
musicas.clear() // limpa toda a coleção

console.log(musicas)

// musicas.forEach((el)=>{
//     caixa.innerHTML += el + "<br/>"
// })

for(let m of musicas){
    caixa.innerHTML += m + "<br/>"
}