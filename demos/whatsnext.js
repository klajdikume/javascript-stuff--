// What's next concepts
// https://medium.com/@stephenthecurt/33-fundamentals-every-javascript-developer-should-know-13dd720a90d1

// Arrow Function
// Destructuring Assignment
// Import - Export Syntax
// Spread Syntax
// Flat
// FlatMap
// Object.entries
// Object.fromEntries
// Nullish Coalescing 
// Optional Chaining
// Select
// Reject

// Enhanced Object literals

// pure functions

// only access local variables
// No side effects
// Given same input, always yeilds same output


// (One Store, Reduced Boilerplate, Isomorphic/ Universal Friendly, Immutable Store, Hot Reloading, Time-travel debugging, Small)
// Actions, Stores, Reducers
// Connectiong React to Redux
// Redux Flow
// Async in Redux
// Async Writes in Redux
// Async Status
// Testing React and Redux
// Production Build

// build development evniroment

// Node, Webpack, Babel, ESLint, npm Scripts


// Fundamentals
// 	- Variables, scope, hoisting
// 	- DataTypes, Data Structures
// 	- Type Conversions, Loops, Control FLow, Expressions & Operators, Functions
// Web APIs
// 	- DOM
// 	- Fetch
// 	- Video and Audio
// 	- Drawing Graphics
// Advanced
// 	- Advanced Scope
// 	- Closure
// 	- this
// 	- Prototype
// 	- Prototype Inheritance
// 	- Class
// 	- Iterators
// 	- Generators
// 	- Event Loop
// 	- Async JS (setTimeout, setInterval, callbacks, Promises, async await)
// 	- Module system (Import Export, Default and Named Exports, ESM, CJS)



// js engines 
// Bitwise operators, type arrays and Array Buffers
// DOM and Layout Trees
// Factories and Classes
// this, call, apply and bind
// new, Constructor, instanceof and Instances
// Prototype Inheritance and Prototype Chain
// Object.create() and Object.assign()
// map, reduce, filter
// Pure Functions, Side Effects, State Mutation, Event Propagation
// Closures
// High Order Functions
// Recursion
// Collection and Generators
// Promises
// async / await
// DS
// Big O
// Algorithms
// Inheritance, Polimorphism, Code Reuse
// Design Patterns
// Partial Applications, Currying, Compose and Pipe
// Clean Code

// This object

// dynamic object that take its value from the execution context.

const person = {
    name: `Edwin`,
    greet: () => {
        console.log(`Hello ${this.name}`); 
    }
}

person.greet();

// set function to global context
const greet = person.greet;
greet();

console.log(Object.entries(person));

// Lexical binding (Arrow functions)

// New binding (When creating an instance with the 'new' reserved word)

// Explicit binding (Indirect invocation)

// Implicit binding (Method invocation)

// Default binding (Direct invocation)

// async iterator
function asyncIterator() {
    const array = [1, 2];

    return {
        next: function() {
            if (array.length) {
                return Promise.resolve({
                    value: array.shift(),
                    done: false
                });
            } else {
                return Promise.resolve({
                    done: true
                });
            }
        }
    }
}

var iterator = asyncIterator();

(async function() {
    await iterator.next().then(console.log);
    await iterator.next().then(console.log);
    await iterator.next().then(console.log);
    await iterator.next().then(console.log);
})();

// js the hard parts

// js principles, callbacks & HOC, Closure, Classes/ Prototypes & Asynchronicity

// closures 
// function with 

function createFunction() {
    function multiplyBy2(num) {
        return num * 2;
    }
    return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);

// nested function scope

function outer(){
    let counter = 0;
    function incrementCounter() {
        counter ++;
    }
    incrementCounter();
}

outer();

const obj = { foo: 1, baz: { bar: 100 } };

const obj1 = JSON.parse(JSON.stringify(obj));

obj1.baz.bar = 200;

console.log(obj.baz.bar);

async function timer() {
    let result;
    setTimeout(() => { result = 100 }, 500);
    console.log(`result: ${ result }`);
    return result
}

// timer();

console.log(`The result is: ${ await timer() }`);

// inside a f
// a new Lexical Enviroment is created to store local vars and parameters 

 
