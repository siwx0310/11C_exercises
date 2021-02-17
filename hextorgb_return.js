"use strict";

const hex = "#c0ffee";
const rgb = hexToRGB(hex);
console.log(rgb);

function hexToRGB(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}
