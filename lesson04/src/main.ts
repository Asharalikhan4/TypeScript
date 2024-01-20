// type alias can be applied to more than just objects

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray,
}

type userId = stringOrNumber;
// We can't do this with interfaces


// Literal Types in TypeScript
let myName: "Dave";

myName = "Dave";        // no error
//myName = "David";       // error

let userName: "Dave" | "Reggie" | "John";   // username can be only one of these three


// Function Types in TypeScript
const add = (a: number, b: number): number => {
    return a + b;
}


const logMsg = (message: any): void => {
    console.log(message);
}

logMsg("Hello World");
logMsg(add(5, 5));
//logMsg(add(5, "5"));  // error

let subtract = function (c: number, d: number): number {
    return c - d;
}

// Both of these are valid
type mathFunction = (a: number, b: number) => number;
interface mathFunctionInterface {
    (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(5, 5));

// Optional Parameters in TypeScript
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {     // this is a type guard
        return a + b + c;
    }
    return a + b;
}

logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));

// Default Parameters in TypeScript
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}

logMsg(sumAll(1, 2));
logMsg(sumAll(undefined, 2));


// Rest Parameters in TypeScript
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(10, 2, 3));


// Never Type in TypeScript
const createError = (message: string): never => {
    throw new Error(message);
}

const infinite = (): void => {
    // Infinite loop
    let i: number = 1
    while (true) {
        i++;
        if(i === 1000000000) {
            break;
        }
    }
}

// Custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
}

const numberOrString = (value: number | string): string => {
    if(typeof value === "string") return "string";
    if(isNumber(value)) return "number";
    return createError("This should never happen");
}