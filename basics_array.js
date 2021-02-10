"use strict";

// Basics arrays (5.4)

// first item is index[0].
// last item is array.length-1
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

let someLetter = letters[4];
// = letter e
let anotherLetter = letters[7];
// = letter h

console.log(someLetter);
console.log(anotherLetter);

// cool things with arrays - they can be modified!

let newArray = letters;
newArray[4] = "*";

console.log(letters[4]);

// array methods (5.5)
const people = ["Harry", "Ron", "Hermione"];
let result;
result = people.push("Draco");

console.log(result);
// = 4
console.log(people);
// = (4) ["Harry", "Ron", "Hermione", "Draco"]

// Try all array methods

console.log("Try All Array Methods");

// result = people.pop();
result = people.pop();
console.log(result);
// = Draco

// result = people.push("Neville");
result = people.push("Neville");
console.log(people);
// = (4) ["Harry", "Ron", "Hermione", "Neville"]

// result = people.push("Neville");
result = people.push("Luna");
console.log(people);
// = (5) ["Harry", "Ron", "Hermione", "Neville", "Luna"]

// result = people.slice(0,3);
result = people.slice(0, 3);
console.log(people);
// = (5) ["Harry", "Ron", "Hermione", "Neville", "Luna"]

// result = people.splice(1, 0, "Cho");
result = people.splice(1, 0, "Cho");
console.log(people);
// = (6) ["Harry", "Cho", "Ron", "Hermione", "Neville", "Luna"]

// people[1] = "Ginny"
people[1] = "Ginny";
console.log(people);
// = (6) ["Harry", "Ginny", "Ron", "Hermione", "Neville", "Luna"]

// result = people.push("Fred","George");
result = people.push("Fred", "George");
console.log(people);
// = (8) ["Harry", "Ginny", "Ron", "Hermione", "Neville", "Luna", "Fred", "George"]

// result = people.indexOf("Fred");
result = people.indexOf("Fred");
console.log(people);
// (8) ["Harry", "Ginny", "Ron", "Hermione", "Neville", "Luna", "Fred", "George"]

// result = people.splice(result,1);
result = people.splice(result, 1);
console.log(people);
// = (7) ["Harry", "Ginny", "Ron", "Hermione", "Neville", "Luna", "George"]

// converting to array

const alphabet = Array.from("abcdefghijklmnopqrstuvxyzæøå");

const str = "abcdefghijklmnopqrstuvxyzæøå";
const array1 = str.split();
const array2 = Array.from(str);

console.log(array1);
console.log(array2);
