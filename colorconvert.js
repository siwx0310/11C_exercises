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
