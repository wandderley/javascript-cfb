const converterInt = (e)=>parseInt(e)
const dobrar = (e)=>e*2
let num = ['1','2','3','4','5'].map(dobrar)
//let num = ['1','2','3','4','5'].map(converterInt)
console.log(num)

// const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el, ({innerHTML})=>innerHTML)
// console.log(val)


// let el = document.getElementsByTagName('div')
// el = [...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML = "CFB Cursos"
// })
// console.log(el)


// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
// let c = cursos.map((elemento,indice) => {
//     return elemento
//     //console.log("Curso: " + elemento + " - Posição do curso: " + indice)
// })
// console.log(c)