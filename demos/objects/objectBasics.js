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
