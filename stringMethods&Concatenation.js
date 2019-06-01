const firstName = 'Nash';
const lastName = 'Nziboi';
const line = 'Hi my name is nash';
const tags = 'dev,engineer,data';

//Concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;

//Append
val = 'Nash';
val += 'Nziboi';

//Escaping "\"
val = "Welcom to Nash's home";

//concat
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//Using arrays to get letters of the word
val = firstName[2];

//Array index of
val = firstName.indexOf('1');
val = firstName.lastIndexOf('1');

//Character at
val = firstName.charAt('2');

//Get Last character
val = firstName.charAt(firstName.length - 1);

//substring to get first two characters
val = firstName.substring(0, 2);

//get last two characters
val = firstName.slice(-3);

// create an array based on the spaces in line
val = line.split(' ');

//Create an array based on commas
val = tags.split(',');

//Replace dev with developer
val = tags.replace('dev', 'developer');

//includes dev in tags variable
val = tags.includes('dev');

console.log(val);
