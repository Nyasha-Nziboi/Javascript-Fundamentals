//FUNCTION DECLARATIONS, with 2 parameters

function greet(firstName, lastName) {
	return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet('Nash', 'Nziboi'));

//FUNCTION EXPRESSSION (0 is the default)
const square = function(x = 0) {
	return x * x;
};
console.log(square(8));

//IMMIDIETLY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function() {
	console.log('IFFE Ran');
})();

(function(name) {
	console.log('IFFE Ran ' + name);
})('Nash');

//PROPERTY METHOD

const todo = {
	add: function() {
		console.log('Add todo..');
	},
	edit: function(id = 0) {
		console.log(`Edit todo + ${id}`);
	}
};

todo.delete = function() {
	console.log('Delete done');
};

todo.add();
todo.edit(22);
todo.delete();
