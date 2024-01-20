// Arrays in TypeScript
let stringArr: string[] = ["one", "two", "three"];

let guitars: (string | number)[] = ["Gibson", "Fender", 5150];

let mixedData: (string | number | boolean)[] = ["EVH", 1984, true];

stringArr.push("four");     // no error
//stringArr.push(5);          // error

guitars.push("Strat");      // no error
guitars.push(1984);         // no error

mixedData.push("Van Halen");    // no error
mixedData.push(5150);           // no error
mixedData.push(false);          // no error


// Tuples in TypeScript
let guitarTuple: [string, number] = ["Strat", 1960];


// Objects in TypeScript
let myObj: object = {
    name: "Van Halen",
    bestAlbum: "1984"
};

// OR

let myObj2: { name: string, bestAlbum: string } = {
    name: "Van Halen",
    bestAlbum: "1984"
}

myObj2.name = "Van Hagar";      // no error
//myObj2.name = 5150;             // error

type Guitarist = {      // it is used to create a custom type
    name: string,
    active?: boolean,       // here the ? means optional means this property is not required
    albums: (string | number)[]
}

// for the above thing we can also use interface ofcourse there are some differences
interface Guitarist2 {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie Van Halen",
    active: true,
    albums: ["Van Halen", "1984", 5150]
}

let sammy: Guitarist = {
    name: "Sammy Hagar",
    albums: ["Standing Hampton", "VOA", "Three Lock Box"]
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}`;
}

console.log(greetGuitarist(sammy));

// Enums in TypeScript
// Enums are used to create a set of named constants i.e. a collection of related values that can be numeric or string values.
// "Use enums when you have values that you know aren't going to change, like month days, days, colors, deck of cards, etc."
// "Unlike most typescript features, enums are not a type, they are values."

enum Grade {
    U = 1,      // by default it starts from 0 but we can change it and now it will start from 1
    D,
    C,
    B,
    A,
}

console.log(Grade.U);       // 0