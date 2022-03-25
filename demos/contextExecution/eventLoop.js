// console.log('Message');

// setTimeout(function() {
//     console.log('Message 2');
// }, 100); // runs async 

// console.log('Message 3'); 


// Event loop
// Check the main stack if there is any frames to execute ->  if not check callback queue, pops message to main stack for the execution

// console.log('Message no.1 : Sync'); // pops to call stack then engine countines

// setTimeout(function() {
    
//    console.log('Message no. 2: setTimeout');
// }, 1); // is a callback func gets pushed to web API until it gets done. then it gets added to the macro task queue

// Promise.resolve('Simple Promise')
//    .then(res => console.log(res)); // proimse added to the call stack since it has a call back it will get added to microtask queue

// promise.then(function(res) {
//     console.log('Message no 3: 1st Promise')
// })
// .then(function(res){
//     console.log('Message no 3: 2nd Promise');
// });

// console.log('Message no. 5: Sync'); // engine goes to final console and add to the call stack immediately

// setTimeout(function() {
//     console.log('Message no. 6: setTimeout2');
// }, 0);

// checks the microtask queue, it has then chain of the promise

// sees call stack empty, check micro again , it is empty -> check macro task queue: setTimeout -> gets popped onto the call stack -> returns console log method -> popped off the call stack

// 2. Async/Await

// const one = () => Promise.resolve('One!');

// async function myFunc() {
//     console.log('In function');
//     const res = await one();
//     console.log(res);
// }

// console.log('Before function');
// myFunc();
// console.log('After function!');

// call stack first encounters . it gets popped onto the call stack
// invoke async func with console log first line
// await -> the value that gets awaited gets executed
// eventually returns a resolved promise
// promise has resolved and one returned a value, the engine encounters the await keyword

// async func get suspended.
// exe func body gets paused -> rest of the async func gets to run in a microtask instead of regular task!

// engine jumps out of the async func and countinues exe the code in the exe context in which the asyn func got called: 
// event loop checks to see if there are any microtasks queued up: 

// when call stack is empty -> check microtask queue 
// var gets its value -> cons log One and gets popped off the call stack



// function foo(){
//     throw new Error('Oops!');
// }

// function bar(){
//     foo();
// }

// function baz(){
//     bar();
// }

// baz();

// [1,2,3].forEach((i) => {
//     console.log(i);
// })

// console.log('-----------------------------------------------------------------------------------');

// const A = () => {
//     console.log("A");
// }

// const B = () => {
//     console.log("B");
// }
// const C = () => {
//     console.log("c");
// }

// A();
// B();
// C();



// console.log('-----------------------------------------------------------------------------------');


// hanleSubmit = event => {
//     event.preventDefault();
//     console.log('Before create event');
//     this.createEvent();
//     console.log('After createEvent');
// }

// createEvent = () => {
//     console.log('Making fetch request');
//     return fetch('https://api.github.com/', {
//         method: 'POST',
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({event:
//             {
//                 name: this.state.name,
//                 address: this.state.address
//             }
//         })
//     })
//     .then(res => {
//         if(res.ok) {
//             console.log('Succesful response');
//             return res.json();
//         }else {
//             return res.json().then(errors => Promise.reject(errors));
//         }
//     })
// }


// const result = true;
// const foo = (result === null) ? 'default value' : result;
// console.log(foo)

// //    quite obvious that it is not what we expect:lear that 
// console.log(1 == "1");
// console.log(1 == true);
// console.log(0 == false);
// console.log(0 == "");
// console.log(null == undefined);

// ✅ good way, using strict equality:
//    the same comparison will now yield a correct "false" result:
// console.log(1 === "1");
// console.log(1 === true);
// console.log(0 === false);
// console.log(0 === "");
// console.log(null === undefined);

// const italianToday = (() => {
//     const pad = (v) => String(v).padStart(2, 0);
//     const today = new Date();
//     const day = pad(today.getDate());
//     const month = pad(today.getMonth() + 1);
//     const year = today.getFullYear();
//     return `${day}/${month}/${year}`;
//   })();
  
//   console.log(italianToday + '--------------');

//   const doSomething = ({ a = 1, b = 2, c = 3} = {}) => a + b + c;


//   const jsStuff = [{
//     operator: 'switch',
//     isAnyGood: false
//   }, {
//     operator: 'var',
//     isAnyGood: false
//   }, {
//     operator: 'for',
//     isAnyGood: false
//   }, {
//     operator: 'const',
//     isAnyGood: true
//   }, {
//     operator: '...',
//     isAnyGood: true
//   }];

//   const isGood = (item) => (true === item.isAnyGood);;
//   const operatorOnly = (item) => item.operator;
//   const theGoodPart = jsStuff
//     .filter(isGood)
//     .map(operatorOnly);

// console.log(theGoodPart);

// const array = [1,2,3];

// const newArray = [...array, 4,5 ];

// console.log(newArray);

// const person = {
//     name: 'Max'
// };

// const newPerson = {
//     ...person,
//     age: 24
// };

// console.log(newPerson);

// const filter = (...args) => {
//     return args.filter(el => el === 1);
// }

// var filteredArrays = filter(1,2,3,2,1)

// console.log(filteredArrays)

// spread-> used to split up array elements OR object properties

// rest-> used to merge a list of function arg into an array
function sortArgs(...args){
    return args.sort();
}

// const numbers = [1,2,3];
// [num1, num2] = numbers;
// console.log("Array desct " + num1,num2);

// var objectEp

// const number = 1;
// const numb2 = number; // creates a real copy, copies value [obj and arrays are reference types]

// const Person2 = {
//     name: 'Marco'
// };

// var secondPerson = Person2; // copies the pointer and points to the exact same memory 
// secondPerson = {
//     ...Person2
// }

// Person2.name = 'Admin guy';

// console.log(secondPerson);

// const numbers = [1,2,3];

// const doubleNumArray = numbers.map((num) => {
//     return num * 2;
// });

// console.log(doubleNumArray);

// JS Event Loop more details
// console.log('\n --------- EVENT LOOP More Details ------------------- \n ')
// function main() {
//     console.log('A');
//     setTimeout(() => {
//         console.log('B');
//     });

//     console.log('C');
// }

// main();

// Deeper Understanding




function main() {
    console.log('A');
    setTimeout(
        function exec() { console.log('B'); }
    , 0); // 0 sec in Browser API

    runWhileLoopForNSeconds(3); // 3 sec delay

    console.log('C');
}



// main();

function runWhileLoopForNSeconds(sec) {
    let start = Date.now(), now = start;
    while (now - start < (sec * 1000)) {
        now = Date.now();
    }
}

// dangerous code :p

// function a() {
//     return a();
// }

// a();

[1,2,3,4].forEach((i) => {
    console.log(i + ' processing sync');
    
})

// Event Loop

// -> js one thing at a time
// -> single-threaded programming language
// -> one call stack

// the stack records where in the program we are

// Event Loop -> looks at the stack and the task queue.
// If the stack is empty, it takes the first thing on the queue and 
// pushesh it ontu the stack, which effectively runs it.

function f() {
    console.log("foo");
    setTimeout(g, 0);
    console.log("baz");
    h();
}

function g() {
    console.log("bar");
}

function h() {
    console.log("blix");
}

// f();

function changeHeaderDefferred() {
    var header = document.getElementById("header");

    setTimeout(function changeHeader() {
        header.style.color = "red";

        return false;
    }, 100);

    return false;
}

// changeHeaderDefferred();

function getName() {
    return 'Slim Shady';
}

function greet() {

    const userName = getName();

    console.log('Hello ' + userName);
}

greet();
