let a = 10;
let b = a;
a = 0;
function aa() {}
console.log(typeof aa.prototype);

var value = new Date();

console.log(typeof(typeof value));

if (typeof(value) === 'date') {
    console.log('This is a date, indeed!');
}

let reaction = 'yikes';
reaction[0] = 'l';
console.log(reaction); // string is immutable
// primitive values are immutable :D
//Variables are not values.

//Variables point to values.

for (let i = 0; i < 7; i++) {
    console.log(function() {});
}

let countDwarves = function() { return 7; };
let dwarves1 = countDwarves;
console.log(dwarves1);

// strinct equality: a === b (triple equals)
// loose equality: a == b (double equals)
// same value equality: Object.is(a, b)

console.log(Object.is(2, 2)); // point to the same value type
console.log(Object.is({}, {})); // point to different values

let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

console.log(Object.is(dwarves, continents)); // false
console.log(Object.is(continents, worldWonders)); // false
console.log(Object.is(worldWonders, dwarves)); // true


// strict Equality
console.log(2 === 2);
console.log({} === {});

// special cases
// NaN === NaN is false
// -0 === 0 and 0 === -0 are true


let ticket = { id: 0 };

// { id: 0 } on the left side creates completely new value!

if (ticket === { id: 0 }) {
  console.log('Bad ticket');
}

if (ticket.id === 0) {
    console.log('Bad ticket');
}


let tea = function() {
    return 0 / 0;
};

let coffee = function() {
    return 0 / 0;
};

let matcha = tea();
let latte = coffee();

console.log(tea === coffee); // points to diff value of f()
console.log(Object.is(tea, coffee));
console.log(matcha === latte); // NaN is not equal to itself :D
console.log(Object.is(matcha, latte)); // point to the same NaN number value

// Properties :D

let sherlock = {
    surname: 'Holmes',
    address: { city: 'London' }
};

let john = {
    surname: 'Watson',
    address: sherlock.address
};


john.surname = 'Lennon';
john.address.city = 'Malibu';

console.log(sherlock.surname); // ? Holmes
console.log(sherlock.address.city); // ? Malibu
console.log(john.surname); // ? Lennon
console.log(john.address.city); // ? Malibu

let ice = { taste: undefined };
let sand = {};
let answer = ice.taste === sand.taste;

console.log(answer);

let president = {
    name: 'Pooh',
    next: null,
  };
  
  president.next = {
    name: 'Paddington',
    next: president,
  };

  console.log(president.next.next.next.name);

  let station = {
    Owner: { name: 'Fred' },
  };
  let name = station.Owner.name;
  console.log(name === station.Owner.name);

const spreadsheet = { title: 'Sales' };
const copy = spreadsheet;
copy.title = copy.title + ' (Copy)';

console.log(spreadsheet.title); // ???

let rick = {
    address: { city: 'C-137' }
};
let morty = {
address: rick.address
};
rick.address = { city: '35C' };

console.log(morty.address.city); // ???

let walter = {
    address: { city: 'Albuquerque'}
};

let gustavo = {
    address: walter.address
};

walter = {
    address: { city: 'Crawford'}
};

console.log(gustavo.address.city);

let dipper = {
    address: {
      city: { name: 'Gravity Falls' }
    }
  };
  
  let mabel = {
    address: dipper.address
  };
  
  dipper.address = {
    city: { name: 'Land of Ooo' }
  };
  
  console.log(mabel.address.city.name); // ???

  let charlotte = {
      child: { age: 20 },
      
  }
let mother = {
    age: 20
}
  charlotte.mother = mother;

  console.log(charlotte.mother.age); // 20
console.log(charlotte.child.age); // 20


charlotte.mother.age = 21;

console.log(charlotte.mother.age); // 21
console.log(charlotte.child.age); // 21

console.log('##########################');

// properties stuff :D

// Object.prototype.taste = "pineapple";

let pizza = {};
console.log(pizza.taste);


// let human = {
//     teeth: 32
// };

// let gwen = {

//     __proto__: human,
//     age: 19
// };

// console.log(human.age); // ?
// console.log(gwen.age); // ?

// console.log(human.teeth); // ?
// console.log(gwen.teeth); // ?

// console.log(human.tail); // ?
// console.log(gwen.tail); // ?


// The Prototype Chain

let mammal = {
    brainy: true,
};

let human = {
    __proto__: mammal,
    teeth: 32
};

let gwen = {
    __proto__: human,
    age: 19
};

console.log(gwen.__proto__.__proto__.__proto__); // true

let obj = {};
console.log(obj.hasOwnProperty());

// new properties “appear” on all objects by mutating that prototype

function Donut() {
    return { shape: 'round' };
}

Donut.prototype = {
    eat() {
        console.log('Nom nom nom');
    }
};

let donout1 = new Donut();
let donout2 = new Donut();

// donout1.prototype.eat();

// a function’s prototype specifies the __proto__ 
// of the objects created by calling that function 
// with a new keyword.

let lie = {
    taste: "bitter"
};

let cake = {
    __proto__: lie
}

console.log(lie === cake);
console.log(lie.taste === cake.taste);
console.log(cake.hasOwnProperty('taste') === lie.hasOwnProperty('taste'));