'use strict';

var arcoiris = document.querySelector('#contenido');

if (arcoiris.classList.contains('success')) {
    arcoiris.innerHTML = '<h1>CORRECTO</h1> <p>Los datos son correctos</p>';
} else if (arcoiris.classList.contains('error')) {
    arcoiris.innerHTML = '<h1>ERROR</h1> <p>Ha surgido un error</p>';
} else if (arcoiris.classList.contains('warning')) {
    arcoiris.innerHTML = '<h1>AVISO</h1> <p>Tenga cuidado</p>';
} else {
    arcoiris;
}
