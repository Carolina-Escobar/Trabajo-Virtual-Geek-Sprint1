'use strict';
const precioTotal = 128;
const consumoAna = 2;
const totalPersonas = 9;

// Dinero que tiene que pagar cada persona

valorUnitario = ((precioTotal-consumoAna)/totalPersonas)
console.log(valorUnitario);

//Dinero que tiene que pagar Ana
valorAna = (valorUnitario+consumoAna);
console.log(valorAna);