//Lecture variables
/*
var name = "John";
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//Lecture variables 2

/*
var name = 'John';
var age = 26;

console.log(name + age);


var job, isMarried;
console.log(job,isMarried);

job = 'Teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' yealrs old ' + job + ' is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' yealrs old ' + job + ' is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last Name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' yealrs old ' + job + ' is he married? ' + isMarried + '.');
*/

//Lecture: operators

/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
// 2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;
console.log(ageJohn);
console.log(ageMark);
*/

/////////////////////////////////////////
//lecture: if/else statements

/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
	console.log(name + ' is married.');
}else {
	console.log(name + ' is not married')
}

if (23 == '23') {
	console.log('some text');
}else {
	console.log('some text 2');
}
*/

///////////////////////////////
// Lecture: booleans logic and switch

/*var age = 25;

if (age < 20) {
	console.log('John is a teenager');
}else if (age > 20 && age < 30){
	console.log('John is a young man');
}else {
	console.log('John is a man');
}

var sport = 'fudbaler';

	sport = prompt('cime se bavis?');
		
	switch (sport) {
		case 'fudbaler':
			console.log('Igra fudbal');
			break;
		case 'kuvar':
			console.log('radi u restoranu');
			break;
		case 'vozac':
			console.log('vozi kombi');
			break;
		default:
			console.log('necim se vec bavi!');	
	}*/


///////////////////////////////////////////////////////////////

//CODING CHALLENGE 1


/*
var johnHeight = 182;
var johnAge = 24;
var friendHeight = 184; 
var friendAge = 22;



var John = (johnHeight + (johnAge * 5));
console.log(John); 

var Friend = (friendHeight + (friendAge * 5));
console.log(Friend);
*/
/*
if (John > Friend) {
	console.log('John have ' + John + ' he is a viner!');
}else {
	console.log('Friend have' + Friend + ' he is a viner!');
}*/

/*
var maryHeight = 163;
var maryAge = 34;
var Mary = (maryHeight + (5*maryAge));

if (John > Friend && John > Mary) {
	console.log('John have ' + John + ' he is a viner!');
}else if (Friend > John && Friend > Mary) {
	console.log('Friend have' + Friend + ' he is a viner!');
}else if (Mary > John && Mary > Friend) {
	console.log('Mary have ' + Mary + ' he is a viner!')
}else {
	console.log('it\'s a draw');
}
*/
 
/*
 var Sanda = 'da';

 Sanda = prompt('Da li Sanda voli Comu? ' + ' odgovori sa: da,ne,ponekad');

 switch (Sanda) {
 	case 'da':
 		alert('I JA TEBE VOLIM NAJVISE NA SVETU!!!!');
 		break;
 	case 'ne':
 		alert('VRATI PRSTEN');
 		break;
 	case 'ponekad':
 		alert('VRATI PRSTEN ZADRZI BISER SAMO');
 		break;
 	default:
 		alert('dobila si ponudjene odgovore!')
 }


*/

////////////////////////////////////////
// lecture: functions


 
/*function calculateAge(yearOfBirth) {
	var age = 2017 - yearOfBirth;
	return age;
}

var Marko = calculateAge(1990);
var Sanda = calculateAge(1990);
var Mica = calculateAge(1992);

console.log(Mica);


function yearsUntilRetirement(name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	if (retirement >= 0){
		console.log('Mica ima ' + retirement + ' godina do penzije. ');
	} else {
		console.log(name + ' is already retired! ');
	}
	
}

yearsUntilRetirement('Mica', 1949);
*/
/*
function yearsOld(name, age) {
	var yearOfBirth = 2017 - age;
	console.log(name + ' was born ' + yearOfBirth + ' year. ');
}

yearsOld('Mica', 25);

*/
/*
function dogBark(name, kg) {
	if (kg >= 65 ){
		console.log('WOF,WOF');
	} else if (kg > 40 && kg < 60){
		console.log('Wof,Wof');
	}else {
		console.log('wof,wof');
	}
}

dogBark('Zorz', 10);
dogBark('Hogar', 59);
dogBark('Badza', 75);

*/

/////////////////////////////////////////
//Lecture: statements and expressions

/*
function someFun(par) {   
	//code
}
//statement

var someFun = function(par){
	//code
}

//expression



//statements
if (x === 5) {
	//do something
}



//expressions
3 + 4;
var x = 3;*/

//////////////////////////////////////////////
//Lecture: Arrays

/*
var names = ['mica', 'marko', 'sanda'];
var age = [25, 27, 27];

console.log(names[1]);
names[1] = 'zorica';
age[1] = 25;

console.log(names[1] + ' ima ' + age[1] + ' godina');


var mica = ['mica', 'djordjevic', 25, true];

mica.push(87);

mica.push('zorz');

mica[4] = 92;

mica.unshift('mr.'); // ubacuje vrednost na pocetak array-a;
mica.pop(); // brise zadnji unos u array-u;
mica.shift(); // brse prvi unos u arayy-u;c 

console.log(mica);
console.log(mica[0] + ' je tezak ' + mica[4] + ' kg.');
console.log(mica.length);
console.log(mica[0] + ' ima psa koji se zove ' + mica[5]);

alert(mica.indexOf('djordjevic'));// vraca broj indexa elementa! 


*/
/////////////////////////////////////////
//Lecture: Object and Properties.


/*
var John = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'Teacher',
	isMarried: false,
};

console.log(John);
console.log(John.lastName);
console.log(John['yearOfBirth']);

John.job = 'driver';
John['lastName'] = 'Miller';

console.log(John);

var Mery = new Object();

Mery.name = 'Mery';
Mery.lastName = 'Jane';
Mery['yearOfBirth'] = 1975;
Mery.dother = 'Suzee';
Mery['job'] = 'teacher';

console.log(Mery);
console.log(Mery.yearOfBirth);
console.log(Mery['dother']); 

Mery.job = 'Ners';
Mery['dother'] = 'Olga';

console.log(Mery);
*/
//////////////////////////////////
//Lecture: Objects and Methods

/////////////////////////////////
// v1.0

/*
var John = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		return 2016 - this.yearOfBirth;
	}
};*/

/*console.log(John.calculateAge());

var age = John.calculateAge();
John.age = age;

console.log(John);*/

///////////////////////////////
// v2.0

/*
var John = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		this.age = 2016 - this.yearOfBirth;
	},
	sport: 'football',
};

John.dog = 'zorz';

John.calculateAge();
console.log(John);
*/
/////////////////////////////////////////
// My object:

/*
var Milivoje = {
	name: 'Milivoje',
	lastName: 'Djordjevic',
	yearOfBirth: 1992,
	married: true,
	family: ['Marko', 'Dragana', 'Sanda'],
	dog: 'zorz',
	height: 179,
	isMarried: function(married){
		if (this.married === true) {
			console.log(this.name + ' is married!');
		} else {
			console.log(this.name + ' is not married!');
		}
	},
	calculateAge: function(){
		this.age = 2017 - this.yearOfBirth;
	}
};

Milivoje.married = false;

console.log(Milivoje);
Milivoje.isMarried();
console.log(Milivoje.family[1])

Milivoje.yearOfBirth = 1990;

Milivoje.calculateAge();
console.log(Milivoje.age);
*/

///////////////////////////////////////////////
//Lecture: loops and iteration

//for loops

/*
for (var i = 0; i < 10; i++) {
	console.log(i);
}


var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

//unazad:

for (var i = names.length - 1; i >= 0; i--) {
	console.log(names[i]);
}
*/

//while loops

/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
var i = 0;

while (i < names.length) {
	console.log(names[i]);
	i++;
}

 */

//break statement in loop

/*
for (var i = 1; i <= 5; i++) {
	console.log(i);

	if (i === 3) {
		break;
	}
}

//continue statement in loop]

for (var i = 1; i <= 5; i++) {
 
	if (i === 3) {
		continue;
	}
	console.log(i);
}
*/

////////////////////////////////
//Code challenge 0.2


//2.step array to be filled.

/*

var ages = [];

//loop 1 to fill in the empty array

for (var i = 0; i < yearOfBirth.length; i++) {
	ages[i] = 2017 - yearOfBirth[i];
}
 

//loop full ages

for (i = 0; i < ages.length; i ++) {
	if (ages[i] >= 18) {
		console.log('the ' + (i + 1) + ' person have' + ' ' + ages[i] + ' years and he is old inaph');
	}else {
		console.log('the ' + (i + 1) + ' person have' + ' ' + ages[i] + ' years and he is NOT old inaph');
	}
}
*/


/*
var yearOfBirth = [1992, 1987, 2001, 1975, 2012,];

function printFullAge (yearOfBirth) {
var ages = [];
var fullAges = [];

//loop 1 to fill in the empty array

for (var i = 0; i < yearOfBirth.length; i++) {
	ages[i] = 2017 - yearOfBirth[i];
}
 

//loop full ages

for (i = 0; i < ages.length; i ++) {
	if (ages[i] >= 18) {
		console.log('the ' + (i + 1) + ' person have' + ' ' + ages[i] + ' years and he is old inaph');
		fullAges.push(true);
	}else {
		console.log('the ' + (i + 1) + ' person have' + ' ' + ages[i] + ' years and he is NOT old inaph');
		fullAges.push(false);
   	}
  }

  return fullAges;

}

var full_1 = printFullAge(yearOfBirth);
var full_2 = printFullAge([2012, 1934, 1999]);

*/








































































