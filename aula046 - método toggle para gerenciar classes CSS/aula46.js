const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")
let indice = 0

const tirarSelecao = ()=>{
    const cursoSelecionados = [...document.querySelectorAll(".selecioando")]
    cursoSelecionados.map((el)=>{
        el.classList.remove("selecioando")
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso    

    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecioando")
    })
    return novoElemento
}


cursos.map((elemento, index) => {
    const novoElemento = criarNovoCurso(elemento)
    caixaCursos.appendChild(novoElemento)
    indice++
})


const cursoSelecionado = () => {
    const cursoSelecionados = [...document.querySelectorAll(".selecioando")]    
    return cursoSelecionados[0]
}

// tratamento usando try e catch
btnCursoSelecionado.addEventListener("click", (evento) => {
    try{
        alert("Curso selecionado " + cursoSelecionado().innerHTML)
    }catch(ex){
        alert("Selecione um curso")
    }
})

// tratamento usando if e else
btnRemoverCurso.addEventListener("click", (evento) => {
    const cs = cursoSelecionado()
    if (cs != undefined) {
        cs.remove()
        // console.log(cursoSelecionado)        
    } else {
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evento)=>{
    try{
        if(nomeCurso.value != ""){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
        }else{
            alert("Digite o nome do Curso")
        }
        
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evento)=>{
    try{
        if(nomeCurso.value != ""){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        }else{
            alert("Digite o nome do Curso")
        }
        
    }catch(ex){
        alert("Selecione um curso")
    }
})