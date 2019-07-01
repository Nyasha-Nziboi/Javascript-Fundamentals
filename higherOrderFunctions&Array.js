const companies = [
	{ name: 'company one', category: 'Finance', start: 1998, end: 2008 },
	{ name: 'company two', category: 'Retail', start: 2003, end: 2010 },
	{ name: 'company three', category: 'Auto', start: 2000, end: 2018 },
	{ name: 'company four', category: 'Technology', start: 1898, end: 2003 }
];
const ages = [ 32, 21, 43, 6, 24, 52, 63, 12, 41, 12, 3, 25 ];

//FOR LOOP
for (i = 0; i < companies.length; i++) {
	console.log(companies[i]);
}

//---------------------------------------------------------------------------------------------------------------
//FOR EACH
companies.forEach(function(company) {
	console.log(company.name);
});

//---------------------------------------------------------------------------------------------------------------
//FILTER - filter items out of an array
//Get 21 or older
//Using for loop
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
	if (ages[i] >= 21) {
		canDrink.push(ages[i]);
	}
}
console.log(canDrink);

//filter
const canDrink = ages.filter(function(age) {
	if (age >= 21) {
		return true;
	}
});
console.log(canDrink);

//using arrow functions
const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

// Filter retail companies
const retailCompanies = companies.filter(function(company) {
	if (company.category === 'Retail') {
		return true;
	}
});
console.log(retailCompanies);

// // ES6 arrow functions
const retailCompanies = companies.filter((company) => company.category === 'Retail');
console.log(retailCompanies);

//Filter companies from the 80s
const nintiesCompanies = companies.filter((company) => company.start >= 1990 && company.start < 2000);
console.log(nintiesCompanies);

//get companies that lasted 10 years or more
const lastedTenYears = companies.filter((company) => company.end - company.start >= 10);
console.log(lastedTenYears);

//---------------------------------------------------------------------------------------------------------------
//MAP - creat new arrays of anything

// create array of company names
companyNames = companies.map(function(company) {
	return company.name;
});

// //ES5
companyNames = companies.map(function(company) {
	return `${company.name} [${company.start} -${company.end}]`;
});
// //ES6
companyNames = companies.map((company) => `${company.name} [${company.start} -${company.end}]`);
console.log(companyNames);

const agesSquare = ages.map((age) => Math.sqrt(age));
console.log(agesSquare);

const agesSquare = ages
.map((age) => Math.sqrt(age))
.map((age) => age * 2);
console.log(agesSquare);

//---------------------------------------------------------------------------------------------------------------
//SORT
//Sort companies by the start year
//ES5
const sortCompanies = companies.sort(function(company1, company2) {
	if (company1.start > company2.start) {
		return 1;
	} else {
		return -1;
	}
});

//ES6 (using a tenerary function
const sortCompanies = companies.sort((company1, company2) => (company1.start > company2.start ? 1 : -1));

console.log(sortCompanies);

// a - b (ascending order), b - a (descending order)
const sortAges = companies.sort((a, b) => a - b);

//---------------------------------------------------------------------------------------------------------------
//REDUCE

//add all ages together
using for loop
let ageSum = 0;
for (y = 0; y < ages.length; y++) {
	ageSum += ages[y];
}
console.log(ageSum);

//with reduce
//ES5
const ageSum = ages.reduce(function(total, age) {
	return total + age;
}, 0);

//ES6
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// combine methods

const combine = ages
	.map((age) => age * 2) //multiple all ages by 2
	.filter((age) => age >= 40) //All ages above 40
	.sort((a, b) => a - b) //sort by ascending number
	.reduce((a, b) => a + b, 0); //add up all the ages
console.log(combine);
