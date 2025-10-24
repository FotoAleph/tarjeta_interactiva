const cuentaAtras = () => {
    const fechaEvento = new Date("2025-11-22 18:30").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas.toString().padStart(2, '0');
    document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');



    if (diferencia < 0) {
        clearInterval(intervalo);
        document.getElementById("cuentaAtras").innerText = "¡El evento ha comenzado!";
    }
}

const inicioAudio = () => {
    const audio = document.getElementById('birthday-song');
    audio.play();
    audio.volume = 0.8;
    audio.palyBackRate = 0.8;
}



document.addEventListener("DOMContentLoaded", cuentaAtras);
const intervalo = setInterval(cuentaAtras, 1000);