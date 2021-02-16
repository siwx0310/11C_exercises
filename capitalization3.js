"use strict";

/*
const simpleName = "siw Mehlin Højland Pedersen";

const nameToLowerCase = simpleName.toLowerCase();
const firstThirdCharacter = simpleName[2];
const firstThirdCharacterUpperCase = firstThirdCharacter.toUpperCase();
const firstLowerChase = nameToLowerCase.substring(0, 2);
const lastCharacters = nameToLowerCase.substring(3);

console.log(
  `${firstLowerChase}${firstThirdCharacterUpperCase}${lastCharacters}`
);

const firstCharacter = nameToLowerCase[0];
const firstCharacterUpperCase = firstCharacter.toUpperCase();
const restOfName = nameToLowerCase.substring(1);

console.log(`${firstCharacterUpperCase}${restOfName}`);
*/

function capitalize(str) {
  console.log(str);

  // third letter to uppercase
  const nameToLowerCase = str.toLowerCase();
  const firstThirdCharacter = str[2];
  const firstThirdCharacterUpperCase = firstThirdCharacter.toUpperCase();
  const firstLowerChase = nameToLowerCase.substring(0, 2);
  const lastCharacters = nameToLowerCase.substring(3);

  console.log(
    `${firstLowerChase}${firstThirdCharacterUpperCase}${lastCharacters}`
  );

  // first letter to uppercase
  const firstCharacter = nameToLowerCase[0];
  const firstCharacterUpperCase = firstCharacter.toUpperCase();
  const restOfName = nameToLowerCase.substring(1);

  console.log(`${firstCharacterUpperCase}${restOfName}`);
}

const str = "siw mehlin højland pedersen";

capitalize(str);
