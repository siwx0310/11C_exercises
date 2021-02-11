"use strict";

//Example
console.log(`Example`);
let counter;
for (counter = 0; counter < 10; counter++) {
  console.log(counter);
}
console.log(`after the loop, counter id ${counter}`);

// 1. From 0 to 9
console.log(`Loop exercise 1`);
let counter1;
for (counter1 = 0; counter1 < 10; counter1++) {
  console.log(counter1);
}
console.log(`Ok 1. done`);

// 2. From 1 to 10
console.log(`Loop exercise 2`);
let counter2;
for (counter2 = 1; counter2 < 11; counter2++) {
  console.log(counter2);
}
console.log(`Ok 2. done`);

// 3. From 10 to 0, and after 0 it console.logs the text: "liftoff"
// ok
console.log(`Loop exercise 3`);
let counter3;
for (counter3 = 10; counter3 > -1; counter3--) {
  console.log(counter3);
}
console.log(`liftoff`);
console.log(`Ok 3. done`);

// 4. From 1 to 19, but only counts odd numbers
console.log(`Loop exercise4`);
let counter4;
for (counter4 = 0; counter4 < 20; counter4 += 2) {
  console.log(counter4);
}
console.log(`Ok 4. done`);

// 5. From 1 to 16777216, but doubling each time (2,4,8,16)
console.log(`Loop exercise5`);
let counter5;
for (counter5 = 1; counter5 <= 16777216; counter5 += counter5) {
  console.log(counter5);
}
console.log(`Ok 5. done`);

// 6. From 111 to 138, in steps of 3 (meaning the second numver is 114 (111+3))
console.log(`Loop exercise6`);
let counter6;
for (counter6 = 111; counter6 <= 138; counter6 += 3) {
  console.log(counter6);
}
console.log(`Ok 6. done`);

// 7. From 100 down to 0 in 10 steps
console.log(`Loop exercise7`);
let counter7;
for (counter7 = 100; counter7 > -1; counter7 -= 10) {
  console.log(counter7);
}
console.log(`ok 7. done`);
