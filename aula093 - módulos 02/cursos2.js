const cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspberry", "C++", "Python", "Java", "C#"]

// const getTodosCursos = () =>{
//     return cursos
// }

export default function  getTodosCursos(){
    return cursos
}

function  getCurso(indice_curso){
    return cursos[indice_curso]
}

export {cursos, getCurso}
//exportar como padrão
// export default getTodosCursos

