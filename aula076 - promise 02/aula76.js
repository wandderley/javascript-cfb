const numero = document.getElementById("numero")
const btnPromessa = document.getElementById("btnPromessa")

btnPromessa.addEventListener("click", (evt) => {
    numero.innerHTML = "Processando..."
    console.log(promessa())
        // .then((retorno) => {
        //     numero.innerHTML = retorno
        //     numero.classList.remove("erro")
        //     numero.classList.add("ok")
        // })

        // .catch((retorno) => {
        //     numero.innerHTML = retorno
        //     numero.classList.add("erro")
        //     numero.classList.remove("ok")
        // })
})

const promessa = () => {
    let p = new Promise((resolve, reject) => {
        let resultado = false
        let tempo = 3000

        setTimeout(() => {
            if (resultado) {
                resolve("Deu tudo certo")
                numero.innerHTML = "Deu tudo certo"
                numero.classList.remove("erro")
                numero.classList.add("ok")
            } else {
                reject("Deu tudo errado")
                numero.innerHTML = "Deu tudo errado"
                numero.classList.remove("erro")
                numero.classList.add("ok")
            }
        }, tempo)
    })
    return p
}

numero.innerHTML = "Esperando..."


