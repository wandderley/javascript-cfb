const f = new Function ("v1", "v2","v3", "return v1+v2+v3") // Função Contrutor Anônima

/* FUNÇÃO ANÔNIMA ATRAVÉS DE VARIÁVEL
const f = function (...valores){
    let res = 0
    for (v of valores) {
        res += v
    }
    return res
}
*/
console.log(f(2,10,8))