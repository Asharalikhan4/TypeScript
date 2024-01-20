"use strict";
// type alias can be applied to more than just objects
// We can't do this with interfaces
// Literal Types in TypeScript
let myName;
myName = "Dave"; // no error
//myName = "David";       // error
let userName; // username can be only one of these three
// Function Types in TypeScript
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello World");
logMsg(add(5, 5));
//logMsg(add(5, "5"));  // error
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(5, 5));
// Optional Parameters in TypeScript
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") { // this is a type guard
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
// Default Parameters in TypeScript
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(1, 2));
logMsg(sumAll(undefined, 2));
// Rest Parameters in TypeScript
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
// Never Type in TypeScript
const createError = (message) => {
    throw new Error(message);
};
const infinite = () => {
    // Infinite loop
    let i = 1;
    while (true) {
        i++;
        if (i === 1000000000) {
            break;
        }
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
