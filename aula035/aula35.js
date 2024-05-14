const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((e)=>{
    e.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")

    })
})

btn.addEventListener("click",()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })

    //DESAFIO
    const naoSelecinados = [...caixa2.querySelectorAll(".curso")]
    naoSelecinados.map((el)=>{
        if (!el.classList.contains("selecionado")) {
            caixa1.appendChild(el)
        }
    })
})