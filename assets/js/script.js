

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

document.getElementById("confirmar").addEventListener("click", 
    () => {
        window.location.href = "https://api.whatsapp.com/send?phone=573122948040&text=Hola%2C%20confirmo%20mi%20asistencia%20a%20tu%20fiesta%20de%20cumplea%C3%B1os.%20%C2%A1Nos%20vemos%20all%C3%AD%21";
    }       
    )

document.getElementById("stop").addEventListener("click", 
    () => {
        const audio = document.getElementById('birthday-song');
        audio.pause();
    }       
    )   

document.addEventListener("DOMContentLoaded", cuentaAtras);
const intervalo = setInterval(cuentaAtras, 1000);

const isabeela = document.getElementById("isabella");
