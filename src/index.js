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