// https://medium.com/@happymishra66/inheritance-in-javascript-21d2b82ffa6f

// object's proto will point to proto of another object
// Prototype chaining
function SuperType() {
    this.name = "Super Type"
}

SuperType.prototype.getSuperName = function() {
    return this.name
}

function SubType() {
    this.age = 21
}

// has a const f which points to the 
// constructor func itself
// and proto property which inherits 
// the default object properties

// all props and mehtods that exists on an
// instance of SuperType will exist on 
// SubType.prototype

SubType.prototype = new SuperType();

// 
SubType.prototype.getSubAge = function() {
    return this.age
}

var subTypeObj = new SubType();

console.log(subTypeObj.name);
console.log(subTypeObj.age); 
console.log(subTypeObj.getSuperName()); 
console.log(subTypeObj.getSubAge());

// all super type prototype are shared among
// the child objects
// if one child modifies the prop of the supertype prototype
// other children also get affected

