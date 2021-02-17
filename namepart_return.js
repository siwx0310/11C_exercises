"use strict";

/*
let name = "siw mehlin pedersen";
const cap = capitalize(name);
console.log(cap);

function capitalize(str) {
  const strSplit = str.split(" ");

  const firstName =
    strSplit[0].substring(0, 1).toUpperCase() +
    strSplit[0].substring(1).toLowerCase();
  const middleName =
    strSplit[1].substring(0, 1).toUpperCase() +
    strSplit[1].substring(1).toLowerCase();
  const lastName =
    strSplit[2].substring(0, 1).toUpperCase() +
    strSplit[2].substring(1).toLowerCase();
  const fullName = `${firstName} ${middleName} ${lastName}`;

  const result = `Hello my name is ${fullName}`;
  return result;
}
*/

const theFullName = nameParts("siW MEhlin HøJLanD PEDERsen");
console.log(theFullName);

function nameParts(fullName) {
  let firstSpace = fullName.indexOf(" ");
  let lastSpace = fullName.lastIndexOf(" ");

  let firstName = fullName.substring(0, firstSpace);
  firstName = capitalize(firstName);
  let middleName = fullName.substring(firstSpace + 1, lastSpace);
  middleName = capitalize(middleName);
  let lastName = fullName.substring(lastSpace + 1);
  lastName = capitalize(lastName);

  return { firstName, middleName, lastName };
}

function capitalize(str) {
  str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  return `${str}`;
}
