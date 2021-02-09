"use strict";

// 0. Find the unicode code for santa in this string: santa="🎅";

// .codepointAt ok

const santa = "🎅";
console.log(santa.codePointAt(0));

// 1.	Check if a filename ends in ".jpg" or not
// .endsWith ok

const imagejpg = "thisisanimage.jpg";
console.log(imagejpg.endsWith(".jpg"));

// 2.	Check if a name has a hyphen in it
// .includes ok

const nameWithHyphen = "Siw Mehlin-Hoejland Pedersen";
console.log(nameWithHyphen.includes("-"));

// 3.	Find the end of the first name in a full name
// indexOf ok

const firstNameEnds = "Siw Mehlin Hoejland Pedersen";
console.log(firstNameEnds.indexOf(" "));

// 4.	Find the beginning of the last name in a full name
// .lastIndexOf ok

const beginningOfLastname = "Siw Mehlin Hoejland Pedersen";
console.log(beginningOfLastname.lastIndexOf(" "));

// 5.	Check if "Aalborg" is sorted before or after "Alerup" in danish
// .localeCompare ??

const str1 = "Aalborg";
const str2 = "Alerup";
console.log(str1.localeCompare(str2));

// 6.	Add dots to a string, so the string becomes at least 20 characters long
// .padEnd ok

const dotEnd = "Where are you?";
console.log(dotEnd.padEnd(20, "."));

// 7.	Add spaces before a text, so the string will be at least 10 characters
// .padStart ok

const dotStart = "hey!";
console.log(dotStart.padStart(10, "."));

// 8.	Create a string of a specific number of * (e.g. the same number as the number of characters in another string)
//

// 9.	Change all "å" in a text to "aa"
// .replaceAll ok

const changeCharacterToAA =
  "this is a verry long string with å. å is used in words: måge, måtte, målebånd and many others";
console.log(changeCharacterToAA.replaceAll("å", "aa"));

// 10.	Remove any double- or triple- spaces inside a text
// .replaceAll ??

const removeExtraSpace =
  "My biggest dream is  to move to   Australia  and live   there for a   few years!";
const removeExtraSpace2 = removeExtraSpace.replaceAll("   ", " ");
console.log(removeExtraSpace2.replaceAll("  ", " "));

// 11.	Get the last 10 characters of a name
// .slice ok

const lastCharacters =
  "My biggest dream is to move to Australia and live there for a few years!";
console.log(lastCharacters.slice(-10));

// 12.	Separate a comma-separated list into an array of individual items
// .split ok
const splitString = "Horse, Mouse, Cat, Dog";
console.log(splitString.split(","));

// 13.	Check if an url begins with "http://" or "https://"
// .startsWith ok
const checkUrl1 = "https://www.google.com/";
const checkUrl2 = "http://google.com";
console.log(
  checkUrl1.startsWith("https://") || checkUrl1.startsWith("http://")
);

// 14.	Get the middle name of a full name string, such as “Harry James Potter”
// .substr ok

const middleName = "Siw Mehlin Højland Pedersen";

console.log(middleName.substr(4, 14));

// 14.b In addition, how might you find the parameter values to use – i.e. when the middle name starts and ends?
// .indexOf and .substr ??

const firstSpace = middleName.indexOf(" ");
const lastSpace2 = middleName.lastIndexOf(" ");

// 15.	Convert a string to only CAPITAL letters
// .toUpperCase ok

const capitalLetters = "hello!";
console.log(capitalLetters.toUpperCase());

// 16.	Convert a string to only non-capital letters
// .toLowerCase ok

const nonCapitalLetters = "Hey my name is Siw";
console.log(nonCapitalLetters.toLowerCase());

// 17.	Convert only the first character in a string to CAPITAL, and the rest to non-capital? You might need several different methods for this.
// [index] & .toUpperCase & .toLowerCase & .substring ok

const onlyFirstCapitalLetter = "heY, hOw arE You tOday?";
const firstLetter = onlyFirstCapitalLetter[0];
const firstLetterUppercase = firstLetter.toUpperCase();

const restToLowerCase = onlyFirstCapitalLetter.substring(1);
const restToLowerCaseDone = restToLowerCase.toLowerCase();

console.log(`${firstLetterUppercase}${restToLowerCaseDone}`);

// 18.	Convert a german word like “Goethestraße” correctly to “GOETHESTRASSE”
//

// 19.	Remove extra whitespace around a text
// .trim ok

const trimAll = "   Hey my name is Siw    ";
console.log(trimAll.trim());

// 20.	Remove extra whitespace before a text
// .trimStart ok

const trimInStart = "   Hey my name is Siw    ";
console.log(`_${trimInStart.trimStart()}_`);

// 21.	Remove extra whitespace after a text
// .trimEnd ok

const trimInEnd = "   Hey my name is Siw    ";
console.log(`_${trimInEnd.trimEnd()}_`);

// 22.	Remove extra whitespace inside a text
//
