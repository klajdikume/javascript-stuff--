const numbers = [2, 4, 8, 10];
const halves = numbers.map(x => x / 2);

// maps each element of arr and returns a new array

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = words.filter(word => word.length > 6);

// filter creates a new array with all elements with given condition

// reduce applieas a function against an accumulator and each element in the array

const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);

// it passes the result of one callback function invocation to the next one

// -> compose functions

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// chaining promises

let itemIDs = [1,2,3,4,5];

itemIDs.reduce((promise, itemID) => {
    return promise.then(_ => api.deleteItem(itemID));
}, Promise.resolve());

// translates to

Promise.resolve()
.then(_ => api.deleteItem(1))
.then(_ => api.deleteItem(2))
.then(_ => api.deleteItem(3))
.then(_ => api.deleteItem(4))
.then(_ => api.deleteItem(5));


// proxy 

const target = {};

const handler = {
    get: (target, property, value) => {
        console.log(`Accessing property '${property}' with value '${value}'`);
        target[property] = value;

        return true;
    }
};

const proxy = new Proxy(target, handler);

proxy.a;
//

