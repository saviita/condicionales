//false
console.log(Boolean(''));

//true
console.log(Boolean('Hola'));

//true
console.log(Boolean(6));

//false
console.log(Boolean(0));

//true
console.log(Boolean(true));

const number = 6;

if (number > 0) {
  console.log('Es mayor que 0');
}

const numberA = 6;
const numberB = 50;

if (numberA === numberB) {
  console.log('Son iguales');
} else {
  console.log('No son iguales');
}

const a = 1;
const b = 10;
const c = 5;
const d = 8;

if (a < b && c < d) {
  console.log('Todo ok');
}

if ((d < a && b > c) || c < d) {
  console.log('Todo ok');
}

// TERNARIO
const number1 = 8;
const number2 = 5;

if (number1 > number2) {
  console.log('A es mayor que B');
} else {
  console.log('B es mayor que A');
}

//condición ? true : false MISMA FORMA DE DECIRLO

numberA > numberB ? console.log('A es mayor que B') : console.log('B es mayor que A');

// OBJETO -- Siempre empiezan con mayúscula

console.log(Math.PI);

//número 1 elevado al número 2
console.log(Math.pow(2, 3));

//redondeo normal
console.log(Math.round(4.3));

//redondeo hacia abajo
console.log(Math.floor(3.3));

//redoondeo hacia arriba
console.log(Math.ceil(4.3));

//random entre 0 y 10
console.log(Math.random() * 11);

//Números enteros aleatorios menores de 5
console.log(Math.floor(Math.random() * 5));
