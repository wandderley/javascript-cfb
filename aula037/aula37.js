const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click",(event)=>{
    console.log("clicou")
    //console.log(event.target) // indica quem disparou o evento
    console.log(event)
})

cursos.map((el)=>{
    el.addEventListener("click",(event)=>{
        event.stopPropagation()
    })
})