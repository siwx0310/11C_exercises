"use strict";

// references and copies (4.2)

let person1 = {
  firstName: "Peter",
  age: 27,
  student: false,
};

let person2 = {
  firstName: "Siw Mehlin",
  age: 26,
  student: true,
};

let person3 = person1;
/*
console.log("1");
console.log("person 1");
console.log(person1);
console.log("person 2");
console.log(person2);
console.log("person 3");
console.log(person3);
*/
console.log(
  "person 1 =" +
    person1.firstName +
    ", Person 2 =" +
    person2.firstName +
    ", Person 3 =" +
    person3.firstName
);
// result: 1 = Peter, 2 = Siw Mehlin, 3 = Peter

person3.firstName = "Nicklas Frandsen";
/*
console.log("2");
console.log("person 1");
console.log(person1);
console.log("person 2");
console.log(person2);
console.log("person 3");
console.log(person3);
*/
console.log(
  "person 1 =" +
    person1.firstName +
    ", Person 2 =" +
    person2.firstName +
    ", Person 3 =" +
    person3.firstName
);
// result: 2 = Nicklas Frandsen, 2 = Siw Mehlin, 3 = Nicklas Frandsen

person3 = person2;
/*
console.log("3");
console.log("person 1");
console.log(person1);
console.log("person 2");
console.log(person2);
console.log("person 3");
console.log(person3);
*/
console.log(
  "person 1 =" +
    person1.firstName +
    ", Person 2 =" +
    person2.firstName +
    ", Person 3 =" +
    person3.firstName
);
// result: 3 = Nicklas Frandsen, 2 = Siw Mehlin, 3 = Siw Mehlin

person2.firstName = "changed Siw Mehlin";
/*
console.log("4");
console.log("person 1");
console.log(person1);
console.log("person 2");
console.log(person2);
console.log("person 3");
console.log(person3);
*/
console.log(
  "person 1 =" +
    person1.firstName +
    ", Person 2 =" +
    person2.firstName +
    ", Person 3 =" +
    person3.firstName
);
// result: 4 = Nicklas Frandsen, 2 = Changed Siw Mehlin, 3 = Changed Siw Mehlin

person1 = person3;
/*
console.log("5");
console.log("person 1");
console.log(person1);
console.log("person 2");
console.log(person2);
console.log("person 3");
console.log(person3);
*/
console.log(
  "person 1 =" +
    person1.firstName +
    ", Person 2 =" +
    person2.firstName +
    ", Person 3 =" +
    person3.firstName
);
// result: 5 = Changed Siw Mehlin, 2 = Changed Siw Mehlin, 3 = Changed Siw Mehlin
