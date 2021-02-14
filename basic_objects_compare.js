"use strict";

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = {
  firstName: "Herry",
  lastName: "Potter",
};

if (student1 == student2) {
  console.log("the students are the same!");
} else {
  console.log("the students are not the same...");
}

student1.firstName = "siw";
console.log(student1);
console.log(student2);

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

console.log(student1);
console.log(student2);
if (student1 == student2) {
  console.log("the students are the same!");
} else {
  console.log("the students are not the same...");
}
