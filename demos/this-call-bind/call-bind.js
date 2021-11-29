const address = { city: 'Sonepur', state: 'Odisha' };

function print(name) {
    console.log('Name' + name + ', address: ' + this.city);
}


print.call(address, 'Tirana');

// call ataches address object to print and 
// f can access props using this

// apply

// invokes the function and allow to pass args as an array

print.apply(address, ['ABC', 23]);

// bind

// returns a new function with the value to bound it 
// then call it with required args

const bindAddress = print.bind(address);

bindAddress('ABC', 24);

// -------------------------- -----------------

function flip(func) {
    if (typeof func !== 'function') {
      throw new TypeError('Expected a function')
    }
    return function(...args) {
      return func.apply(this, args.reverse())
    }
}

const calcArea = {
    pi: 3.14,
    area: function(r) {
      return this.pi * r * r;
    }
}

calcArea.area(4);

calcArea.area.call({ pi: 3.14159 }, 4);

// call(context, arguments))

// context is an object that replaces this keyword 
// arguments are passed as function arguments

// bind return new function with this keyword updated context

const newCalcBind = calcArea.area.bind({ pi: 3.14159 }, 4);

newCalcBind();