const olhos = [...document.getElementsByClassName("olho")]

let posx_mouse = 0
let posy_mouse = 0

window.addEventListener("mousemove", (evt) => {
    posx_mouse = evt.clientX
    posy_mouse = evt.clientY

    const rotacao = Math.atan2(posy_mouse, posx_mouse) * 180/Math.PI

    //grau = rotacao * 57,2958

    olhos.forEach((olho) => {
        olho.style.transform = "rotate(" + rotacao + "deg)"
    })



})

