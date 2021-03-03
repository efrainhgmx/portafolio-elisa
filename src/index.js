//Cambio de saludo dependiendo la hora del día.
const hora = new Date().getHours();
let saludo;

if( hora >= 0 && hora < 13) {
    saludo = '¡Buenos días a todos!';
} else if (hora >= 13 && hora < 19) {
    saludo = '¡Buenas tardes a todos!';
} else if (hora >= 19 && hora <= 23) {
    saludo = '¡Buenas noches a todos!';
} else saludo = '¡Hola a todos!';

document.getElementById('saludo').innerHTML = saludo;

//Sharer web API, permite compatir de manera nativa.
const button = document.getElementById('button');

button.addEventListener("click", () => {
    navigator.share({
        title: "Portafolio Elisa",
        text: "Conoce a Elisa una Diseñadora Web muy profesional con diseños muy inspiradores",
        url: "https://efrainhgmx.github.io/portafolio-elisa/"
    })
    .then (() => console.log("Se compartio con exito!"))
    .catch(() => console.error("Hubo un error!"));
})