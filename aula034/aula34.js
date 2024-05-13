//const c1 = document.getElementById("c1")
//const c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const elemento = evt.target
        elemento.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado")
    })
})

// c1.addEventListener("click", (evento)=>{
//     const elemento = evento.target
//     elemento.classList.add("destaque")
//     //evento.target.classList.add("destaque")
// })