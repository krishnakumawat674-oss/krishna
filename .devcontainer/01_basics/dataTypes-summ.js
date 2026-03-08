// Primitive

// 7types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100;
const scoreValue  = 200.3;

const isLoggedIn = false;
const temp = null;
let userEmail;

const Id = Symbol('123');
const anotherId  = Symbol('123');

console.log(Id === anotherId);

const bigNumber = 34343243523434435n;


// Reference (Non Primitive)

// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "krishna",
    age: 18,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof anotherId);


