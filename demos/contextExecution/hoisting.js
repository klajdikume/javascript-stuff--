// js declare then initialize vars
// all vars and funcs are hoisted to the top of their scope, also vars declarations are processed before any code is executed.
"use strict";

var a;

function hoist() {
    a = 20;
    var b = 100;
}

hoist();


const myFunc = () => {
    const myFunc_a = 2;
    return () => console.log("a is ------------" + myFunc_a);
};

const myFunc_a = 1;

const test = myFunc();
test();

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { a: 10, d: 5 };

console.log({ ...object1, d: 4, ...object2, c: 30 });

const foo = [1,2,3];
const [n] = foo;

let vowel = "abcd";

for(var i = 0; i < vowel.length; i++){
    console.log(vowel[i])
}

console.log(n);
// console.log(b); -> reference error

// ES5
// scope of a var is its current execution context. That is either the enclosing function or global
hoistvar = {};
hoistvar = 2;
console.log(typeof hoistvar);

var hoistvar = 'The variable has been hoisted';

console.log(typeof hoistvar);


console.log(hoist1); // Output: ReferenceError: hoist is not defined
var hoist1 = 'Hoisted';


// ES6
// let are block scoped and not function scoped
// does not let undeclared vars
// const allows immutable vars and both uninitialised at the beginning of execution unlike var that is initialised with undefined


// Fucntion declarations
hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};

// expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};

// expression(); // Ouput: TypeError: expression is not a function

var expression = function hoisting() {
  console.log('Will this work?');
};

//Variable assignment takes precedence over function declaration
var double1 = 22;
function double1(num){
    return (num*2);
}

console.log(typeof double1);

//Function declarations take precedence over variable declarations
var double;
function double(num){
    return (num*2);
}

console.log(typeof double);

// Hoisting classes
// class declarations are hoisted

// var Frodo = new Hobbit();
// Frodo.height = 100;
// Frodo.weight = 300;

// console.log(Frodo);

class Hobbit {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}


// Class expressions
// Much like their function counterparts, class expressions are not hoisted.

//var Square = new Polygon();

//console.log(Square)

var Polygon = class {
    constructor(height, width) {
        this.height = height;
        this.width = this.width;
    }
}