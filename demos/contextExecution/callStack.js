// call stack mechanism
// what f is being run and 
// what f is called within that f

function greeting() {
    sayHi();
}

function sayHi() {
    console.log("Hi!");
}

greeting();

// call stack list - greeting

// inside greeting find Hi() call
// call stack list: - sayHi - greeting

// exe sayHi 
// return exe to the rest of greeting f

// delete sayHi: -greeting

// return to js code that called greeting

// call stack list: EMPTY

// 1. Call Stack -> keep track of f to be executed
// 2. Heap -> where are allocated Objects, unstructured region of memory. Also vars
// 3. Queue -> Js runtime, messages to be processed and associated callback queues f to exe
// 4. Event Loop -> 

// When js runs it creates
// Global execution context
// Global Memory
// call stack

// -> Scope, Closures and stuff


// primitive types (undefined, null, string boolean, number)

// "abc".length; primitive str is coerced to str obj

// Primitive types
//  immutable, because they have no methods attached that can mutate it.
// stored as a value

true instanceof Object; // false
null instanceof Object; // false
undefined instanceof Object; // false
0 instanceof Object; // false
'bar' instanceof Object; // false

// Non-primitive types
// stored as a reference
const foo = function () {}
foo instanceof Object; // true

// function -> call, constructor

const Boo = function() {
    this.bar = "bar";
};

//const qux = new Boo();
//qux; // { bar: "bar" }
//qux instanceof Boo;
//qux instanceof Object;

// without new -> normal f
// this inside f correspond to execution context

const pet = new String("dog")
typeof pet; // "object"
pet === "dog"; // false

// Auto-Boxing

// calling a prop or method on primitive types
// js will convert it into a temporary wrapper object
// access the prop/method on it, without affecting the original
// assignment is done on tempoarary wrapper object

// Object.freeze(object) // immutable object
// const obj = {} // mutable object 

// Objects are copied by reference instead of by value

var obj = { first: 'reference' };
obj = { second: 'ref2' }

// Passing Parameters through Functions
// passing parameters, f copies the values into its parameters

console.log([]);

// implicit coercion
// coerce unexpected value type to the expected type

// modules vs IIFS