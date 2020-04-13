'use strcit';
const age = document.querySelector('.age');
const hoursDay = 24;
const hoursYear = 365*hoursDay;

const total_hours = hoursYear*parseInt(age.innerHTML); 
console.log(`Usted ha vivido ${total_hours} horas`);

//Cuando se usa document.querySelector('') trae la etiqueta y no el contenido que hay en ella.
