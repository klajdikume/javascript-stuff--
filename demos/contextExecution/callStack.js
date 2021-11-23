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