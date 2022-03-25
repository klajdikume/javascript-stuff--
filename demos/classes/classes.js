// js prototype-based 
// [[Prototype]] that extend object properties & methods
// https://www.digitalocean.com/community/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes

const x = function() {}

const y = class {} 

 console.log(Object.getPrototypeOf(x));
 console.log(Object.getPrototypeOf(y));

 function Herof(name, level) {
     this.name = name;
     this.level = level;
 }

 // adding functions
 Herof.prototype.greet = function() {
     return `${this.name} con selam`;
 }

 class Hero {
     constructor(name, level) {
         this.name = name;
         this.level = level;
     }

     greet() {
         return `${this.name} con selam`;
     }
 }

 const hero1 = new Hero('Varg', 1);

 console.log(hero1);

 // extend a class with f

 function Mage(name, level, spell) {
     Herof.call(this, name, level);

     this.spell = spell;
 }

 Mage.prototype = Object.create(Herof.prototype);

 Mage.prototype.constructor = Herof;

 const hero2 = new Mage('Lejon', 2, 'Magic Missle');

 console.log(hero2);

 // es6 -> super keyword replaces call to access the parent functions

 class Mage1 extends Hero {
     constructor(name, level, spell) {
         super(name, level);

         this.spell = spell;
     }
 }


 const hero3 = new Mage1('Lejon', 2, 'Magic Missile');

 console.log(hero3);

 // prototype props and methods are shared
 // between all the instances of the constructor f

 // changing the prototype will change only that instance

 // reference type properties are always shared among all instances

 // class methods are non-enumerable -> ability to performe operation on that property

 // empty constructor by default

 // always strict mode inside a class

 // class declarations are not hoisted

 // static methods are the ones not in prototype

 // instancds are linked with prototypes in class template
 
 // 

 function Food(name, protein, carbs, fat) {

    const obj = {};

    Object.setPrototypeOf(obj, Food.prototype);
    
    obj.name = name;
    obj.protein = protein;
    obj.carbs = carbs;
    obj.fat = fat;

    return obj;
 }

 const fish = Food('Halibut', 26, 0, 2);
 console.log(fish.protein);
 console.log(Object.getPrototypeOf(fish));

// js delegation -> looking for nonexistent properties to another object
