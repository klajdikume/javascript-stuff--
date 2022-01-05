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

const foo = ['one', 'two'];

const [ one ] = foo;

console.log(one);

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));

// Arrow function with this

var person = {
    first: "Alex",
    actions: ["bike", "hike", "ski", "surf"],
    printActions: function() {
        var _this = this;
        this.actions.forEach((action) => {
            var str = _this.first + " likes to " + action;
            console.log(str);
        });
    }
};

person.printActions();

// Destructing Assignment
var phone = {
    title: "iPhone",
    price: 800,
    description: "The iPhone is a smartphone developed by Apple"
};

console.log(phone.title);

// ES-6
var { title, price, description } = {
    title: "iPhone",
    price: 800,
    description: "This iPhone is a smartphone developed by Apple"
};

console.log(title);

function* generator(num) {
    yield num + 1;
    yield num + 1;
    yield num + 1;
    yield num + 2;
}

var gen = generator(10);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


function* naturalNumbers() {
    let num = 1;
    while(true) {
        yield num;
        num = num + 1
    }
}

const numberss = naturalNumbers();
console.log(numberss.next().value);
console.log(numberss.next().value);

const Person = function(firstName) {
    this.firstName = firstName;
    this.sayName1 = function() { console.log(this.firstName); };
    this.satName2 = () => { console.log(this.firstName); };
};

const john = new Person('John');
const dave = new Person('Dave');

john.sayName1();
// john.sayName2();

//john.sayName1().bind(dave)(); // Dave (this has changed object context);
// john.sayName2().bind(dave)();

// arrow syntax 

// -> does not have its own this, arguments, super or new.target

const delay = seconds => {
    return new Promise(
        resolve => setTimeout(resolve, seconds * 1000)
    )
};

const countToFive = async() => {
    console.log('zero seconds wait');
    await delay(2);
    console.log('zero seconds wait');
    await delay(5);
    console.log('zero seconds wait');
}

// countToFive();

const githubRequest = async(loginName) => {
    try {
        var response = fetch(`http://api.github.com/users/${loginName}/followers`);
        var json = await response.json();
        var followersList = json.map(user => user.login);
        console.log(followersList);
    } catch(e) {
        console.log("Data did not load", e);
    }
};

// githubRequest("klajdikume")

console.log(aVar); // undefined
// console.log(aLet); // causes ReferenceError: aLet is not defined
var aVar = 1;
let aLet = 2;