"use strict";

const person1 = {};

console.log(typeof person1);

const person = {
    name: ['Bob', 'Smith'],
    age: 23,
    bio() {
        console.log(this.name[0])
    },
    greeting: () => {
        console.log('Hi');
    }
};

const bio = person.bio;

// bio();

function Persons2(name) {
    this.name = name;
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name + '.');
    };
}

let p = new Persons2('Berti');
p.greeting();

console.log(Object.keys(p));


// prototype-based language -> to provide inheritance, objects can have a prototype object
// which it acts as a template object that it inherits methods and properties from

function Teacher(first, last, age, gender, interests) {

    // property and method definitions
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    
}

let teacher1 = new Teacher('Bob', 'Smith', 32, 'male', ['music', 'skiing']);


// Arrays

// literal
// new Array()
// ...                                                     
// Array.of(), Array.from();

let letters = [..."Hello World"];

console.log(letters);

// Iterator methods loop over the elements of an array, 
// Stack and queue methods adda and remove array elements to and from the beginning and the end of an array
// Subarray methods are for extracting, deleting, inserting, filling, and copying contiguous regions of a larger array
// Searching and sorting methods are for locating elements within an array and for sorting the elements of an array.

// Array iterator Methods

//  