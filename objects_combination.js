"use strict";

// objects inside of objects

const color = {
  hex: "#c0ffee",
  rgb: { r: 192, g: 255, b: 238 },
  hsl: { h: 164, s: 100, l: 88 },
};

let red = color.rgb.r;
console.log(`Red is: ${red}`);

// objects and prototype

const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

const animal = Object.create(Animal);
Animal.image = "image.jpg";

console.log(animal.image);
