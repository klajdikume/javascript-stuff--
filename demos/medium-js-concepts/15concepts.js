// https://madasamy.medium.com/15-javascript-concepts-that-every-nodejs-programmer-must-to-know-6894f5157cb7
// 1. JavaScript Prototype

// __proto__ points to the prototype object of the const function

// 2. js class
// prototype based inheritance (special functions)

// 3. IIFE
// (function () { // write code here })();

// 4. scope

// 5. js closures
// inner function that has access to an outer(enclosing) f vars - scope chain
// access to its own scope
// outer funcs vars
// global vars


// 6. The Module Pattern
var myModule = (function() {
    'use strict';

    var _privateProperty = 'Hello World';

    function _privateMethod() {
        console.log(_privateProperty);
    }

    return {
        publicMethod: function() {
            _privateMethod();
        }
    };

})();

myModule.publicMethod();
console.log(myModule._privateProperty);
// console.log(myModule._privateMethod());

// 7. Hoisting
// variables and function declarations 
// are moved to the top of their scope
// before code execution

// 8. Currying
// evaluate function with multiple args 
// into a sequance of function with
// a single argument

function createObject() {
    console.log('Inside `createObject` :', this.foo);
    return {
        foo: 42,
        bar: function() {
            // this refers to object created here
            console.log('Inside `bar` :', this.foo);
        },
    };
}

createObject.call({ foo: 21 }).bar(); // override `this` inside createObject

function createObjectArrow() {
    console.log('Inside `createObject` :', this.foo);
    return {
        foo: 42,
        // this refers to createObjectArrow
        bar: () => console.log('Inside `bar` :', this.foo),
    };
}

createObjectArrow.call({ foo: 21 }).bar();

// arrow functions useful if you need 
// to access the this of the current environment

// this keyword may be different each time is called
// ES5 bind() set the value of a function's this regardless of how it's called
// arrow functions don't provide their own this binding, it retains the this value of the enclosing lexical context

// Global context
// this refers to the global object 

// Function context
function f1() {
    return this;
}

// In a browser:
// f1() === window; // true

// In Node:
// f1() === globalThis;

class Example {
    constructor() {
        const proto = Object.getPrototypeOf(this);
        console.log(Object.getOwnPropertyNames(proto));
    }

    first() {}
    second() {}
    static third() {}
}

var exe = new Example();
console.log(Object.getPrototypeOf(exe));