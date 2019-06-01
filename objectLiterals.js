//Object Literals

const person = {
	firstName: 'Nash',
	lastName: 'Nziboi',
	age: '24',
	email: 'nash@gmail.com',
	hobiles: [ 'photo', 'video' ],
	address: {
		city: 'Melbourne',
		state: 'VIC'
	},
	getBirthYear: function() {
		return 1994;
		// return new Date().getFullYear() - this.age;
	}
};
let val;

val = person;

//get a specific value
val = person.firstName; //Recommended
val = person['firstName'];
val = person.hobiles[1]; //calling array value
val = person.address.state;
val = person.getBirthYear(); //function call

console.log(val);

//------------------------------------------------------------
//Array of objects
const people = [
	{
		name: 'Nash',
		age: 24
	},
	{
		name: 'Tawanda',
		age: 22
	}
];

//loop whilst loop is the length of array iterate and get all the names
for (let i = 0; i < people.length; i++) {
	console.log(people[i].name);
}
