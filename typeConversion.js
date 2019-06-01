//Push in an array adds a value to the array

// let addNumber = 6;
// const numbers = [ 1, 2, 3, 4 ];
// numbers.push(5);
// numbers.push(addNumber);
// console.log(numbers);

////------------------------------------------------------------------------
////TYPE CONVERSION
// let val;
// //converts Number into a string
// val = String(555);
// //date to a string
// val = String(new Date());

// //toString method
// val = (5).toString();

// console.log(val);
// //type of varibale
// console.log(typeof val);
// //length on the string
// console.log(val.length);

//String to numbers
let string;
//converts string into a number
string = Number('5');
//converts string into an integer
string = parseInt('100');
//converts string into float with decimal points
string = parseFloat('100.5');

console.log(typeof string);
console.log(string);
console.log(string.toFixed(2));
