// possible ways to create objects 

import { func } from "prop-types";

// var object1 = new Object();

// var object2 = Object.create(null);

// var object3 = {};

// function Person(name) {
//     var object = {};
//     object.name = name;
//     object.age = 21;
//     return object;
// }

// var object4 = new Person("name");

// function Person1(){}
// Person1.prototype.name = "filan";
// var object5 = new Person1();

// console.log(object5.name);

// var newInstance = Object.create(Person1.prototype);

// var result = Person1.call(newInstance);

// var emp1 = { fristName: 'John', lastName: 'Rodson'};
// var emp1 = { fristName: 'John1', lastName: 'Rodson1'};

// function invite(greeting1, greeting2){
//     console.log(greeting1+ ' ' + this.fristName);
// }

// invite.call(emp1, 'hi', 'there');

// Objects vs Map
// strict operators take type of variable in consideration
// non-strict operators make type correction based upon values of variables

// high order func

// const firstOrderFunc = () => console.log('Hello, I am a First order func');
// const higherOrder = RetrunFirstOrderFunc => RetrunFirstOrderFunc();
// higherOrder(firstOrderFunc);

// function Welcome(name){
//     var greetingInfo = function(message){
//         console.log(message + ' ' + name);
//     }
//     return greetingInfo;
// }

// var myFunction = Welcome('John');
// myFunction('Welcome');

// console.log(...[...[..."..."]]);
// console.log([..."..."]);
// console.log(["..."]);
// console.log("a",...["..."]);

function makeFunc() {
    var name = "JS Nuggets";
    function displayName() {
        console.log(name);
        return name;
    }
    // return displayName;
}

var myFunc = makeFunc();
myFunc();

console.log(myFunc()())
console.log(typeof makeFunc)