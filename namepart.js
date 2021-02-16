"use strict";

/*
const givenName = "Siw Mehlin Højland Pedersen";

const firstNameStart = givenName[0];
const firstNameEnd = givenName.indexOf(" ");
const firstName = givenName.substring(firstNameStart, firstNameEnd);

const middleNameStart = firstNameEnd + 1;
const middleNameEnd = givenName.lastIndexOf(" ");
const middleName = givenName.substring(middleNameStart, middleNameEnd);

const lastNameStart = middleNameEnd + 1;
const lastName = givenName.substring(lastNameStart);

console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(`${firstName} ${middleName} ${lastName}`);
*/

function capitalize(str) {
  console.log(str);

  const firstSpace = str.indexOf(" ");
  const lastSpace = str.lastIndexOf(" ");

  const firstName = str.substring(0, firstSpace);
  const middleName = str.substring(firstSpace + 1, lastSpace);
  const lastName = str.substring(lastSpace + 1);
  const fullName = `${firstName} ${middleName} ${lastName}`;

  console.log(`Hello my name is ${fullName}`);
}

const str = "Siw Mehlin Højland Pedersen";
capitalize(str);

function theFullName(lastName, firstName, middleName = "") {
  const result = firstName + " " + middleName + " " + lastName;

  console.log(result);
}

theFullName("Potter", "Harry", "James");
