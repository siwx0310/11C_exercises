"use strict";

// true
// value=true, guess=true, answer=true

// false
// value=false, guess=false, answer=false

// null
// value=false, guess=false, answer=false

// undefined
// value=undefined, guess=false, answer=false

// 0
// value= 0, guess=false, answer=false

// "0"
// value = "0", guess=true, answer=true

// ""
// value = "", guess = false , answer = false

// "true"
// value = "true" , guess = true, answer = true

//
// value = "false", guess = false , answer = true

//
// value = 2, guess = true, answer = true

// {}
// value = {} , guess = true, answer = true

// []
// value =[] , guess = true, answer = true

// NaN
// value = NaN , guess = false , answer = false

// infinity
// value = infinity, guess =false , answer = true

// 3.14
// value = 3.14, guess = true, answer = true

// -0
// value = -0, guess = false, answer = false

// " "
// value = " ", guess = true, answer = true

const value = "";
if (value) {
  console.log("value is truthy");
} else {
  console.log("value is falsy");
}
