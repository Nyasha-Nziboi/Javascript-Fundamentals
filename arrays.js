//normal array (Recommended way to create an array)
const numbers = [ 43, 56, 22, 3, 4, 5 ];
//object array
const numbers2 = new Array(43, 56, 22, 3, 4, 5);
//string array
const fruit = [ 'banna', 'orange', 'apple', 'eye' ];
//mixed arry
const mixed = [ 22, 'apple', true, null, undefined, { a: 1, b: 2 }, new Date() ];

let val;

//get array length
val = numbers.length;

//check if is array
val = Array.isArray(numbers);

//get a single value
val = numbers[0];

//insert into array
numbers[0] = 100;

//find the index of a number/item
val = numbers.indexOf(56);

//MUTATING ARRAYS
//Adding onto end
numbers.push(200);
//adding onto front
numbers.unshift(1);
//taking off the end
numbers.pop();
//taking off the front
numbers.shift();
//splice values (1,1) where we want to start and end removing
numbers.splice(2, 1);
//reverse the array
numbers.reverse();

//CONCAT ARRAYS
//combining 2 arrays
val = numbers.concat(numbers2);

//sorting string array
val = fruit.sort();
//sorting numbers L - H
val = numbers.sort(function(x, y) {
	return x - y;
});
//sorting numbers H - L
val = numbers.sort(function(x, y) {
	return y - x;
});

//Find (find the first number over 50)
function over50(num) {
	return num > 50;
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);
