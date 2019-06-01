// console.log(process);

//Simple Math with numbers
const num1 = 100;
const num2 = 50;
let val;

// Addition
val = num1 + num2;
// Subtraction
val = num1 - num2;
// Multiplication
val = num1 * num2;
//Division
val = num1 / num2;
//Modulus
val = num1 % num2;

//Math Object
val = Math.PI;
//Rounding a number
val = Math.round(2.8);
//Rounding a number up
val = Math.ceil(2.8);
//Rounding a number down
val = Math.floor(2.8);
//Square Roote
val = Math.sqrt(12);
//Return minimum number
val = Math.min(12, 13, 14, 2, 1, 4);
//Return max number
val = Math.max(12, 13, 14, 2, 1, 4);
//Random decimal number
val = Math.random();

//Random whole number between 1 to 10
val = Math.ceil(Math.random() * 10 + 1);

console.log(val);
