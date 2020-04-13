'use strict';

var arcoiris = document.querySelector('#contenido');

(arcoiris.classList.contains('success')) ? arcoiris.innerHTML = '<h1>CORRECTO</h1> <p>Los datos son correctos</p>' : arcoiris;    ;
(arcoiris.classList.contains('error')) ? arcoiris.innerHTML = '<h1>ERROR</h1> <p>Ha surgido un error</p>' : arcoiris;
(arcoiris.classList.contains('warning')) ? arcoiris.innerHTML = '<h1>AVISO</h1> <p>Tenga cuidado</p>' : arcoiris;
