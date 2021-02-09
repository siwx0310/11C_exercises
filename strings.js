"use strict";

// dubble quotes
let string1 = "this is a text";

// single quotes astropopies
let string2 = "this is also a string";

// new version
let string3 = `and even this is a string`;

const longline =
  "this is a very, very, very, very, VERY! long line of text,\n \
that spand across the width of the editor!";

// Strings 5.3 "Template literals"
const name = "Siw Mehlin";
const drink = "Coca-Cola";

// Able to add linebreaks whitout problems
const text = `Hello ${name}, 
would you like a ${drink}?`;

console.log(text);

//Strings 5.3 small "template literals" exercise
const nameExercise1 = "Peter";
const animalExercise1 = "cat";
const animalNameExercise1 = "Mandu";

const textExercise1 = `My name is ${nameExercise1}.
I have a ${animalExercise1} called ${animalNameExercise1}.`;

console.log(textExercise1);

//strings 5.3 .length and [index]
const len = name.length;
console.log(`${name} is ${len} characters long`);

const letter = name[0];
console.log(`The first letter of the name is ${letter}`);

// exercise with .lenght and [index]

const nameExercise2 = "Albus Percival Wulfric Brian Dumbledore";

// 1 What is the total number of characters, including spaces?
const lenExercise2 = nameExercise2.length;
console.log(
  `The total number of characters (including spaces) is ${lenExercise2}`
);

// 2 What is the character at index 2?
const letterExercise22 = nameExercise2[2];
console.log(`The character at index 2 is ${letterExercise22}`);

// 3 Which character is at index 6?
const letterExercise26 = nameExercise2[6];
console.log(`The character at index 6 is ${letterExercise26}`);

//4 What is the index of yhe first D in Dumbledore?
//5 What is the index of the last d in dumbledore?
const lastnameExercise2 = "Dumbledore";
const totalLen = lastnameExercise2.length;
console.log(`The total numer of characters is: ${totalLen}`);
const letterD = lastnameExercise2[0];
const letterd = lastnameExercise2[6];
console.log(`The letter ${letterD} is at index 0`);
console.log(`The letter ${letterd} is at index 6`);

// string 5.3 Methods
// trim removes the spaces at the start and end
const str1 = "    There is     Space here \n  ";
const str2 = str1.trim();
console.log(str2);

// how to test if there is space. Use "_"
console.log(`_${str2}_`);

const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 5);
const lastName = fullName.substring(17);

console.log(`firstname is: _${firstName}_`);
console.log(`lastname is _${lastName}_`);

// Quick exercise with .substring
const fullnameExercise3 = "Albus Percival Wulfric Brian Dumbledore";

// 1. "Albus"
const nameExercise31 = fullnameExercise3.substring(0, 5);
console.log(`This is the lastname _${nameExercise31}_`);

// 2. "Dumbledore"
const nameExercise32 = fullnameExercise3.substring(29);
console.log(`This is the lastname _${nameExercise32}_`);

// 3. "Wulfric"
const nameExercise33 = fullnameExercise3.substring(15, 22);
console.log(`This is the lastname _${nameExercise33}_`);
// 4. " Wulfric "
const nameExercise34 = fullnameExercise3.substring(14, 23);
console.log(`This is the lastname _${nameExercise34}_`);

// 5. "ian"
const nameExercise35 = fullnameExercise3.substring(25, 28);
console.log(`This is the lastname _${nameExercise35}_`);

// 6. "bus"
const nameExercise36 = fullnameExercise3.substring(2, 5);
console.log(`This is the lastname _${nameExercise36}_`);
