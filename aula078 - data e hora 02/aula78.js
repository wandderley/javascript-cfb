// FOPRMAS DE OBTER O "Date"
const data = new Date()
const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia
let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes
const data_resumida = dia + "/" + mes + "/"
    + data.getFullYear()
div_data.innerHTML = data_resumida
console.log(data_resumida)

const relogio = () => {
    const data = new Date()
    //tratamento das horas
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora

    //tratamento dos minutos
    let minuto = data.getMinutes()
    minuto = minuto < 10 ? "0" + minuto : minuto

    //tratamento dos segundos
    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos

    const horaCompleta = hora + ":" + minuto + ":" + segundos

    div_relogio.innerHTML = horaCompleta
}

const intervalo = setInterval(relogio, 1000)

relogio()

// getDate() = Dia do mês
// getDay() = Dia da Semana (número)
// getFullYear() = Ano com 4 dígitos
//getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos LO
// getTime() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC
// Date.now() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define Minutos
// setSeconds() = Define Segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somente a data