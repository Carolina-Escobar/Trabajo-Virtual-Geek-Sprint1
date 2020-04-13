'use strict';

let años = 0;
const unAño = 15;
const dosAños = 9;
const mayorTresAños = 5;

años = parseInt(prompt('Ingrese los años de su perro'));

if(años === 1) {
    console.log(`Tiene ${unAño} años humanos.`)
}else if (años === 2) {
    console.log(`Tiene ${unAño + dosAños} años humanos.`)
}else if (años >= 3) {
    console.log(`Tiene ${(unAño+dosAños+(años-2)*mayorTresAños)} años humano.`)
}