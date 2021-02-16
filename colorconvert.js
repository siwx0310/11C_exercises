"use strict";

// Exercise - hexToRGB
/*
Create a function that converts a color in hex-format 
like #c0ffee - to r, g, and b values (numbers) 
in this case: 192, 255, and 238 respectively.
The function must receive a single string, 
that will always start with a # symbol, 
followed by six hex-digits.*/

function hexToRGB(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  console.log(`rbg(${r},${g},${b})`);
}

hexToRGB("#c0ffee");
hexToRGB("#bada55");
hexToRGB("#facade");
hexToRGB("#c0ffee");
hexToRGB("#f00b42");
hexToRGB("#c0de25");
hexToRGB("#010203");

// Exercise - RGBToHex
/*
Create a function just opposite of the hexToRGB you just made.
A function that takes a parameter for r, g, and b,
and builds a hex-color code from the three values.

- The function must receive an object with r, 
  g and b values as numbers.
- he function must then create a hex-string, starting with a # symbol,
  followed by exactly six digits, and log it to the console.
*/

function rgbToHex(r, g, b) {
  const r2 = r.toString(16).padStart(2, "0");
  const g2 = g.toString(16).padStart(2, "0");
  const b2 = b.toString(16).padStart(2, "0");

  console.log(`#${r2}${g2}${b2}`);
}

rgbToHex(186, 218, 85);
rgbToHex(250, 202, 222);
rgbToHex(192, 255, 238);
rgbToHex(240, 11, 66);
rgbToHex(192, 222, 37);
rgbToHex(1, 2, 3);

// exercise - cssToRGB
/*
Create a function to convert from a CSS color-definition string,
like "rgb(192, 13, 1)" to r, g, and b values (numbers),
in this case: 192, 13 and 1 respectively.
- The function must receive a single string.
- The function must create three variables, r, g, and b
  set their values correctly, and log them to the console.
*/
function cssToRGB(css) {
  const rgbSplit = css.split(",");
  const r = rgbSplit[0].substring(4).trim();
  const g = rgbSplit[1].trim();
  const b = rgbSplit[2].substring(0, rgbSplit[2].lastIndexOf(")")).trim();

  console.log(r, g, b);
}

cssToRGB("rgb(12, 56, 133)");
