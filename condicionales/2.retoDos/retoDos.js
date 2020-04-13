'use strict';

const nameOne = 'Carolina Escobar';
const nameTwo = 'Laura Florez';
let name = '';

name = prompt('Ingrese su nombre y apellido');

if (name === nameOne || name === nameTwo) {
    console.log (`Bienvenida ${name}.`)
} else {
    console.log ( "Lo siento pero el usuario que has introducido no está registrado");
}