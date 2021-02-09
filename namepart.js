"use strict";

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
