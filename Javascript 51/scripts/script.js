console.log("Hello World Danielle")

// Creating String Variables
// keyword variableName = value ;
let myName = "Bruce";
let lastName = "Wayne";

console.log(myName)
console.log(lastName)
console.log(myName + " " + lastName)

// Creating Numerical Variables
let myAge = 42;
console.log(myAge)

let grade = 9.5;
console.log(grade)

// Creating Boolean Variable
let isAProfessor = true;
let isAStudent = false;
let isAdmin = true;
console.log(isAProfessor)

// My name is Bruce Wayne and I am 42 years old
console.log(" My name is " +  myName + " " + lastName + " and I am " + myAge + " years old" )

let number1 = 7;
let number2 = 3;
let addition = number1 + number2;
console.log(number1 + " + " + number2 + " = " + addition)

let subtraction = number1 - number2;
console.log(number1 + " - " + number2 + " = " + subtraction)

// let multiplication = number1 * number2;
console.log(number1 + " * " + number2 + " = " + (number1 * number2) )

let division = number1 / number2
console.log(number1 + " divided by " + number2 + " equals " + (number1 / number2) )

// keyword variableName = value;
const pi = 3.1416;
// pi = 4.50 // we cannot modify a constant like this
console.log(pi)

// Challenge
// WHat is the area of a circle with the radius of 3 cm?
// 1. Create the variables to store the necessary values
let radius = 3
let area = pi * (radius * radius);

// The area of a circle with a radius value is the are value.
console.log(" The area of the circle with a radius of " + radius + " is the area: " + area)


// Story Variables

let subject = "mustang";
let question = "What do you";
let action = "call";
let object = "phonky car";
let response = "waist of time";

// Using "const"
const occasion = "drumroll please...";

// A Funny Story
console.log("---Funny Story---");
console.log(question + " " + action  + " a " + object + " ? ");
console.log(occasion);
console.log(" A " + subject);

// Different Values
console.log("---Different Version of the Story---");

// Change values

subject = " belt ";
object = " watch ";

console.log(question + " " + action + " a " + subject + " with a " + object + " on it ? ");
console.log(occasion);
console.log(" A " + response);


// Prompt
let pet = prompt("Insert you pet");
console.log("Your pet is: " + pet)

let theNumber = prompt("Insert a number"); 
console.log("Your number is: " + theNumber);

// default is taking a "string"
let newNumber = Number(prompt("Give me a new number"));
console.log(newNumber);

// Use Propmt
// ask number1
number1 = Number(prompt("Insert number 1"));
console.log(number1)

// ask number2
number2 = Number(prompt("Insert number 2"));
console.log(number2)

// create myaddition between number1 and number2
let myaddition = number1 + number2;
console.log("Your addition is: " + myaddition);

// show in console this: "The addition between x and x is = x"
console.log("The addition between" + " " + number1 + " and " + number2 + " = " + myaddition);