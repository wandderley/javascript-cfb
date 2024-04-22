const objs = document.getElementsByTagName("div")

for (o of objs) {
    console.log(o.innerHTML = "Curso")
}

for (o in objs) {
    console.log(objs[o].innerHTML)
}


//let num = [10,20,30,40,50]

//FOR OF
// for(n of num){ // n = elements
//     console.log(n)
// }

// FOR IN
// for(n in num){ // n = index
//     console.log(num[n])
// }

// FOR
// for(let i = 0; i < num.length; i++){
//     console.log(num[i])
// }