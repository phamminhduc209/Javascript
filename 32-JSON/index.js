// JSON object
// 1. Stringify - Convert an object to a JSON string
// 2. Parse - Convert a JSON string to an object

// var myDog = {name: 'Milu', age: 1, dead: false};
// var myDogString = JSON.stringify(myDog);

// console.log(typeof myDog);


// Excercise
// 1. Show all students
// 2. Create a new student
//. 3. Save & Exit

var fs = require('fs');
var content = fs.readFileSync('./data.json');
var newContet = JSON.parse(content);
console.log(newContet);

var readlineSync = require('readline-sync');
var members = {};
var name = readlineSync.question('May I have your name? ');
var age = readlineSync.question('How old are you? ');
var gender = readlineSync.question('Your Gender(Male/Female)? ');
var weight = readlineSync.question('Your Weight? ');

members.name = name;
members.age = age;
members.gender = gender;
members.weight = weight;
console.log(members);