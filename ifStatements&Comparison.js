// if (something){
//   doSomething
// } else {
//   doSomthingElse
// }

const id = 100;

// //Equal to
// if (id == 100) {
// 	console.log('correct');
// } else {
// 	console.log('incorrect');
// }

// //Not equal to
// if (id != 100) {
// 	console.log('correct');
// } else {
// 	console.log('incorrect');
// }

// //Equal to value and type
// if (id === 100) {
// 	console.log('correct');
// } else {
// 	console.log('incorrect');
// }

// //Not equal to value and type
// if (id !== 100) {
// 	console.log('correct');
// } else {
// 	console.log('incorrect');
// }

//Test if Undefined
if (typeof id !== 'undefined') {
	console.log(`This ID is ${id}`);
} else {
	console.log('No ID');
}

//Greter than or equal to
if (id >= 100) {
	console.log('correct');
} else {
	console.log('incorrect');
}

//Else if
const color = 'red';
if (color === 'red') {
	console.log(`The color is ${color}`);
} else if (colour === 'blue') {
	console.log(`The color is ${color}`);
} else {
	console.log(`There is no color`);
}

//Logical operators

const name = 'Steve';
const age = '20';

// AND && , OR ||
if (age > 0 && age < 12) {
	console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
	console.log(`${name} is a Teenager`);
} else {
	console.log(`${name} is a Adult`);
}

if (age < 18 || age > 65) {
	console.log(`${name} is too old or young to participate`);
} else {
	console.log(`${name} is registered`);
}

//Ternary operator
//? - if true, : - else
console.log(id === 100 ? 'Correct' : 'incorrect');
