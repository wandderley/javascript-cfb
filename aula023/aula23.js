function soma (...valores){
    let res = 0

    //FOR OF
    for (const v of valores) {
        res += v
    }

    // FOR TRADICIONAL
    // for (let i = 0; i < valores.length; i++) {
    //     res += valores[i]        
    // }
    return res
}

//pode-se enviar quantos valores quiser
console.log(soma(2,3,10,70))