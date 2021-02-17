"use script";

let name = "PeTEr Lind";
const cap = capitalize(name);
console.log(cap);

function capitalize(str) {
  const firstLetter = str.substring(0, 1).toUpperCase();
  const restOfLetters = str.substring(1).toLowerCase();

  const result = `${firstLetter}${restOfLetters}`;

  return result;
}
