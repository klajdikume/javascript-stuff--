// ----------------- Maps -------------
var map_ = new Map([["c", 'one'], ["b", 'two']]);
const sortedMap = new Map([...map_.entries()].push(entry => entry[0]).sort);


// iterable key value pair -> acts like object
var map1 = new Map([[1, 'one'], [2, 'two']]);
map1.get(1);

// Maps - key/value map and can iterate its elements in insertion order.

let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('dog', 'woofwedfgtyhuj');
sayings.set('dog2', 'woof');
sayings.set('dog3', 'woof');


for(let [key, value] of sayings) {
    console.log(key + ' goes ' + value);
}

console.log(sayings.size);

sayings.clear();
sayings.size;

// The WeakMap object is a collection of key/value pairs in which the keys are objects only and the values can be arbitrary values.

// ---------------- Set -------------

// https://hacks.mozilla.org/2015/06/es6-in-depth-collections/
// Set objects are collections of values. It is unique in the Set's collection.
let mySet = new Set();
mySet.add('1');
mySet.add(1);

let arrSet1 = Array.from(mySet);
let arrSet = [...mySet];

console.log(arrSet1);
console.log(mySet);

// Sets -> no built-in f to find the index of its items
// even-though its an iterable
// convert it to array
const mySet2 = new Set(['4', '2', '3']);
[...mySet2].indexOf('2');

mySet2.forEach((key, val) => console.log('--' + key +" -- " + val));

console.log('###########');

const sortedSet = new Set(
    [...mySet2.entries()]
        .map((entry) => entry[0])
        .sort()
    );

sortedSet.forEach((key, val) => console.log('--' + key +" -- " + val));


const mySet1 = new Set([{ 1: 'one'}, { 2: 'two'}, { 3: 'three' }]);
[...mySet1].find(object => object[2] === 'two');
// returns { 2: 'two' }

//----------------------- Object ----------------

// object with numeric/numeric-string keys are sorted
const obj = { 30: 'dad', '4': 'kid', 19: 'teen', '100': 'grams'};
console.log(obj) // returns {4: "kid", 19: "teen", 30: "dad", 100: "grams"} with sorted keys

// object with key-values as alpha-strings are not sorted
const obj1 = { "b": "two", "a": "one", "c": "three" };
console.log(obj1) // returns {b: "two", a: "one", c: "three"}

// object with numeric, numeric-string and alpha keys are partially sorted. (i.e only numeric keys are sorted)
const obj2 = { b: "one", 4: "kid", "30": "dad", 9: "son", a: "two" };
console.log(obj2) // returns {4: "kid", 9: "son", 30: "dad", b: "one", a: "two"}


