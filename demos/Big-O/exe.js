//

function reverse(str) {
    console.log(str.split('').reverse().join('')); 
}

// f that takes a string and removes duplicate
function duplicate(str){

    // take string, convert to array, push to that array
    const arr = str.split(' ');

    const set = new Set(arr);
    console.log(set);
    const newString = [...set].join(' ');
    console.log(newString);
    return  newString;
}
// exe a user-supplied "reducer" callback f
// on each element of the array
// 
function flatten(arr) {

    arr.reduce((acc, item) => {

        console.log('accumulator -> ' + acc);
        console.log('Is Array -> ' + Array.isArray(item));
        console.log('item -> ' + item);

        if(Array.isArray(item)) {
            acc = arr.concat(flatten(item));
        }       
        else {
            acc.push(item);
        }
        return acc;
    }, []);

    console.log(`${arr} -> flatten array`);

    return arr;
}

// var arrFlatten = flatten([1,2,3, [2,4,5,[2,4,5]]]);

// console.log(arrFlatten);
// console.log([1,2,3, [2,4,5,[2,4,5]]].flat(1));

const foo = function() {
    console.log(this.bar);
}

let baz = foo.bind({ bar: 'hello' });

// baz(); //

Function.prototype.bind = function(context) {
    const fn = this; // function itself
    return function() {
        fn.call(context);
    }

}

// Implement debounce
// debouncedFn();

function debounce(fn, time) {
    let setTimeoutId;

    return function() {

        if(setTimeoutId) {
            return;
        }

        setTimeoutId = setTimeout(() => {
            fn.apply(this, arguments);
            setTimeoutId = null;
        }, time)
    }
}

// We have two indentical DOM trees,
// A and B. For DOM tree A,
// we have the location of an element. 
// Create a function to find that same
// element in tree B.

function reversePath(element, root) {
    const path = [];
    let pointer = element;
    
    while(pointer.parent) {
        const index = pointer.parent.children.indexOf(pointer);
        path.push(index); // array of indexes while we traveling through tree until root

        pointer = pointer.parent;
    }

    pointer = root;

    while (path.length) {
        pointer = children[path.pop()];
    }
}

// rendering
// create a function to move an element
// With args distance, duration, the element to move.

// function moveElement(duration, distance, element) {}

function moveElement(duration, distance, element) {
    const start = performance.now();

    function move(currentTime) {

        const elapsed = currentTime - start;
        const progress = elapsed / duration;
        const amountToMove = progress * distance;

        element.style.transform = 'translateX(${ amountToMove }px)';

       if(amountToMove < distance) {
        requestAnimationFrame(move); // keep reference your self
       }
    }

    requestAnimationFrame(move);
}

// create sleep function that takes one parameter (time) and
// will wait "time" ms

/*
    async function run() {
        await sleep(500);
        console.log('hi');
        await sleep(500);
    }
*/

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

async function run() {
    await sleep(1000);
    console.log('hi');
    //await sleep(1000);
    console.log('hwre');
}

// run();
// console.log('hwre');


// 

var text = "Outside";

function logText(){
    console.log(text);
    var text = "Inside";
}
console.log(text);
logText();