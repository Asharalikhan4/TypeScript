let myName: string;
let myNumber: number;
let isLoading: boolean;
let album: any;
let myheight: number | string;  // this is union type

myName = "Ashar Ali Khan";
myName = "Hamza Ali Khan";

myNumber = 12;

isLoading = false;

album = "Van halen";
album = 1984;
album = true;

myheight = "22";
myheight = 12;

const sum = (a: number, b: string): string => {
    return a + b;
}

let postId: string | number;
let isActive: number | boolean;

let regulerExpression: RegExp = /foo/;