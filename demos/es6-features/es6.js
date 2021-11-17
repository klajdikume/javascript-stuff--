//1. const vs let

// const -> immutable variable, except when is used with objects
// can't be reassigned

// let and const are blocked-scoped, avilable within its scope

//2. Arrow functions

//3. Template Literals -> `${}`

// 4. Defalt parameters

// 5. Array and object destucting, retreiving props

// 6. import & export

// 7. Promises -> async code

// const myPromise = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Hi the Promise execute successfully');
//     })
// }

// console.log(myPromise());

// Rest parameter and Spread operator
// rest parameters get the argument of an array, return a new array

const arr = ['said', 20, 'JavaScript enthusiast', 'Hi', 'Said', 'How are you'];

const [v1, v2, v3, ...rest] = arr;

const Func = (restOfArr) => {
    return restOfArr.filter(item => { return item }).join(" ");
}

//console.log(Func(rest));

// spread operator takes Array itself not just the arguments

// 8. classes OOP, encapsulates behaviours
class myClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hi ${this.name} your age is ${this.age}`);
    }
}

class UserProfile extends myClass {
    username() {
        console.log(this.name);
    }
}

const profile = new UserProfile("ABC", 22);
// profile.sayHello();



// maped

// let arrm = [1,2,3];

// let byTwo = function(x, index) { return x * 2 + index; }

// let mapped = arrm.map(byTwo);

// let [,,a] = arrm;

// console.log(a);

//flat an array 

let arrc = [1,2,[3,4,[5,6]]];
// apply calls a function ex. concat, this keyword [] and arrc passed as argument
let flat = arrc.flat(2); //[].concat.apply([], arrc);

console.log(flat);

let objEntries = {a: 1, b:2, c: 3};

let arrEntries = Object.entries(objEntries);

console.log(arrEntries);

let mappedEntries = arrEntries.map(([key, value]) => [key, value + 1]);

console.log(mappedEntries);

let newObjEntries = Object.fromEntries(mappedEntries);
let ArrayProps = [ [ 'a', 2 ], [ 'b', 3 ], [ 'c', 4 ] ]; 
console.log(Object.fromEntries(ArrayProps));

let obj = {
    node: {
        thing: 1
    }
}

let node = obj.node.thing ?? 2;


// given an int array and target
// find two numbers whose sum is the target
const sumArray = (array, target) => {
    let arrComplement = [];
    let complement = 0;
    for(let i = 0; i < array.length; i++){
        complement = target - array[i];

        

        console.log(complement + "a adadad");
    }
}

console.log(sumArray([1,3,4,5], 6));