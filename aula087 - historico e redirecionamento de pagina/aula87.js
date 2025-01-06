const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click", (evt)=>{
    
    // Redireciona e deleta a url corrente do historico
    // window.location.replace("https://www.google.com.br")
    
    // Redireciona para a url sem deletar a url corrente do historico
    // window.location.assign("https://www.google.com.br")
    
    // Recarrega a página
    // window.location.reload()
    
    // Avança ou Retorna a página baseada no histórico
    // window.history.back()
    // window.history.forward()
    // window.history.go(1)
    
    // console.log(window.history.length)
    
    // console.log(url.value)
    window.location = url.value
})
