const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")

cursos.map((elemento, index) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + index)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = elemento

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})
const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((elemento, index, array) => {
        return elemento.checked
    })
    return radioSelecionado[0]
}

// tratamento usando try e catch
btnCursoSelecionado.addEventListener("click", (evento) => {
    const rs = radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert("Curso selecionado " + cursoSelecionado)
    }catch(ex){
        alert("Selecione um curso")
    }
})

// tratamento usando if e else
btnRemoverCurso.addEventListener("click", (evento) => {
    const rs = radioSelecionado()
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
        // console.log(cursoSelecionado)        
    } else {
        alert("Selecione um curso")
    }
})