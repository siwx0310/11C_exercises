"use script";

// add property to object
const person1 = {
  firstName: "Peter",
  age: 29,
  atudent: false,
};

console.log(person1);
console.log(person1.lastName);

// add property
person1.lastName = "Lind";

console.log(person1.lastName);

// view entier object
console.log(person1);

// removing property
person1.lastName = undefined;
person1.lastName = null; // use this

// both
console.log(person1.lastName);
console.log(person1.middleName);

// delete person1
delete person1.lastName;
console.log(person1.lastName);
console.log(person1);

// modify age when object is a const instead of let
person1.age++;
console.log(person1);

// create person 2
const person2 = {
  firstName: "Siw",
  age: 26,
  student: true,
};

// Not possible when using const 
// almost always use const objects 
person1 = person2;
console.log(person2);
console.log(person1);

// Mutability (references and copies 4.2)



