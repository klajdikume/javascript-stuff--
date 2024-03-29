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

let spider = {
    legs: 8
  };
  
  let miles = {
    __proto__: spider
  };
  
  let gwen1 = {
    __proto__: spider
  };
  
  miles.legs = 2;
  spider.legs = gwen1.legs * 2;
  
  console.log(gwen1.legs) // ???

  let goose = {location: 'heaven'};
let cheese = { __proto__: goose };
// >>> Diagram this moment! <<<

console.log(cheese === goose); // false
console.log(cheese.location); // "heaven"

goose.location = 'hell';
console.log(cheese.location); // "hell"

// second iteration

var state = {
  name: 'cory house',
  role: 'author'
}

state.role = 'admin'; // -> Mutating state

// react depends on immutable state for performance reasons

var imObj = Object.assign({}, state, { newProp: 'pro val' });

console.log(imObj);

console.log({ ...state, role: 'abc'})

const user = {
  name: 'abc',
  address: {
    state: 'def'
  }
}

const userCopy = { ...user };
const userCopy1 = { ...user, address: { ...user.address } };

console.log(userCopy);
console.log(userCopy1);



// -> second wave :D


var twoSum = function(nums, target) {
  for(var i = 0; i < nums.length; i++) {
      
    let currentNumb = nums[i];
    
    for(var j = i + 1; j < nums.length; j++){
        if(currentNumb + nums[j] === target){
            if(currentNumb != undefined && nums[j] != undefined) {
              console.log([currentNumb, nums[j]]);
            }
            break;
        }
    }
  }
};

console.log(twoSum([2,7,11,15], 9));


// matrics that can be unequally in height and width

// 0 represents land
// 1 represents part of a river

// river = any number of 1s -> horizontally or vertically adjacent

// sizr of a river = number of 1s

// river can twist (straigh or L or any other adjacent but not diagonally)

// return an array of the sizes of all rivers. Order doesn't matter


/*
  matric = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
  ]

  // we have 5 rivers with sizes below
  output: [1, 2, 2, 2, 5]
*/

/*

let matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 0]
]

function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map(row => row.map(value => false)); // 1s visited

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if (visited[i][j]) continue;
      
      traverseNode(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0; // ??

  const nodesToExplore = [[i, j]];

  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if(visited[i][j]) continue;
      visited[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentRiverSize++;

    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for(const neighbor of unvisitedNeighbors){
      nodesToExplore.push(neighbor);
    }
  }

  if (currentRiverSize > 0) sizes.push(currentRiverSize);7
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1]) unvisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);

  return unvisitedNeighbors;
}

var sizesOfAllRivers = riverSizes(matrix);

console.log(sizesOfAllRivers);

*/
// every time alg sees a 1 -> start for searching other 1s near it with DFS or BFS and set new 1s with a flag and number those flags in the end :D 

