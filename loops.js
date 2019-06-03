// FOR LOOP (Use when you know how many times its gonna run)

// for (let i = 0; i <= 10; i++) {
// 	console.log('Number: ' + i);
// }

// //Continue and Break
// for (let i = 0; i <= 10; i++) {
// 	if (i === 2) {
// 		console.log('my fav number is 2');
// 		continue; //continues looping after number 2 is passed
// 	}
// 	if (i === 5) {
// 		console.log('Stop the loop');
// 		break; // stops loop when 5 is reached
// 	}
// 	console.log('Number: ' + i);
// }

//WHILE LOOP (Use when its unclear how many times its going to loop)

// let i = 0;
// while (i < 10) {
// 	console.log('Number: ' + i);
// 	i++;
// }

// // DO WHILE
// let i = 0;
// do {
// 	// the do section is always going to run, even if the while condition isnt met
// 	console.log('Number: ' + i);
// 	i++;
// } while (i < 10);

//LOOP THROUGH ARRAYS

const cars = [ 'ford', 'honda', 'bmw', 'merc', 'toyota' ];
//counts the number of values in the array using length
// for (let i = 0; i < cars.length; i++) {
// 	console.log(cars[i]);
// }

//FOREACH
cars.forEach(function(car) {
	console.log(car);
});

//MAP
const users = [ { id: 1, name: 'John' }, { id: 2, name: 'Sara' }, { id: 3, name: 'Karen' } ];

const ids = users.map(function(user) {
	// return user.id;
	console.log(user.id);
});

// FOR IN LOOP
const user = {
	firstName: 'Nash',
	lastName: 'Nziboi',
	age: 40
};

for (let x in user) {
	console.log(`${x} : ${user[x]}`);
}
