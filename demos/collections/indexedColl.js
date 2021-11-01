//  

let obj = {};

obj.prop = [21,31,3,1];

console.log(obj.prop.length);

let arr1 = [42]       // Creates an array with only one element:
                     // the number 42.

let arr2 = Array(42)  // Creates an array with no elements
                     // and arr.length set to 42.
                     //
                     // This is equivalent to:
let arr3 = []
arr3.length = 42

let oneElArray = Array.of(23.24);

let cats = ['a','a'];
cats.length = 10;
console.log(cats);