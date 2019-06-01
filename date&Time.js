//Dates are in american format (Month-Day-Year)
//Dates are 0 (Zero) based so Jan is 0
let val;

const today = new Date();
let birthday = new Date('10-21-1994 11:25:00');
birthday = new Date('october 21 1994');

val = birthday;
//epoc time
val = today.getTime();
val = today.getDate();
val = today.getDay();
val = today.getMonth();
val = today.getFullYear();

//set date and time
val = birthday.setFullYear(2019);

console.log(val);
