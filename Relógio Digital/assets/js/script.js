//criando variáveis para chamar os ID's "hora", "minutos" e "segundos"
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

//função para puxar as horas em tempo real
const relogio = setInterval(function time() {

    //criando o objeto data
    let dateToday = new Date();

    //variaveis de hora, minuto e segundo
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    //adiciona um "zero à esquerda" se o valor for menor que 10
    if ( hr < 10 ) hr = "0" + hr;
    if (min < 10 ) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    //atribuindo o valor das variáveis aos ID's do html
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

})