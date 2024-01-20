"use strict";
// Arrays in TypeScript
let stringArr = ["one", "two", "three"];
let guitars = ["Gibson", "Fender", 5150];
let mixedData = ["EVH", 1984, true];
stringArr.push("four"); // no error
//stringArr.push(5);          // error
guitars.push("Strat"); // no error
guitars.push(1984); // no error
mixedData.push("Van Halen"); // no error
mixedData.push(5150); // no error
mixedData.push(false); // no error
// Tuples in TypeScript
let guitarTuple = ["Strat", 1960];
// Objects in TypeScript
let myObj = {
    name: "Van Halen",
    bestAlbum: "1984"
};
// OR
let myObj2 = {
    name: "Van Halen",
    bestAlbum: "1984"
};
myObj2.name = "Van Hagar"; // no error
let evh = {
    name: "Eddie Van Halen",
    active: true,
    albums: ["Van Halen", "1984", 5150]
};
let sammy = {
    name: "Sammy Hagar",
    albums: ["Standing Hampton", "VOA", "Three Lock Box"]
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(sammy));
// Enums in TypeScript
// Enums are used to create a set of named constants i.e. a collection of related values that can be numeric or string values.
// "Use enums when you have values that you know aren't going to change, like month days, days, colors, deck of cards, etc."
// "Unlike most typescript features, enums are not a type, they are values."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); // 0
