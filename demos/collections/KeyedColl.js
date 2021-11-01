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

//Set objects are collections of values. It is unique in the Set's collection.
let mySet = new Set();
mySet.add('1');
mySet.add(1);

let arrSet1 = Array.from(mySet);
let arrSet = [...mySet];

console.log(arrSet1);
console.log(mySet);