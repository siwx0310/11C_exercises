"use strict";

sayHello("Peter");
function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

const MyName = "also Peter";
sayHello(MyName);

//const lastName = "Lind"
const lastName = "Lind";
const firstName = "Peter";

sayHello();

sayHello(firstName, lastName);
sayHello(lastName, firstName);
