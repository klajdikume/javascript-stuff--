// functions that can take a function as args, or that returns a function as result

// passing without (), it is passed object itself
// with it its is passed result of executing that function

var arr = [1, 2, 3];

var doubledArr = arr.map(function(num){
    return num * 2;
});

// create a function
function multiplyBy(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

var multiplyByTwo = multiplyBy(2);

var doubledArr = arr.map(multiplyByTwo);

console.log(doubledArr);

const peopleAbove18 = (collection) => {  
    const results = [];   
    for (let i = 0; i < collection.length; i++) {
        const person = collection[i];
        if (person.age >= 18) {      
            results.push(person);    
        }  
    }
}

const peopleAbove18H = (collection) => {
    return collection.filter(person => person.age >= 18);
}

const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];

const incrementAge = (collection) => {
    return collection.map((person) => {
        person.coffeeLover = coffeeLovers.includes(person.name);
        return person; //return person object with coffeLover prop mutaded
    }); // return brand new array
}

const collectionPeople = [
    {
        "name": "John Doe",
        "age": 21
    },
    {
        "name": "Liam Smith",
        "age": 25
    },
    {
        "name": "Will Smith",
        "age": 22
    },
    {
        "name": "Jessy Pinkman",
        "age": 29
    }
];

console.log(incrementAge(collectionPeople));

// reduce

const sumAge = (collection) => {
    
    return collection.reduce((sum, person, currIndex) => {
        console.log(sum);
        console.log(person);
        console.log(currIndex);
        return sum + person.age;
    }, 0);

}

sumAge(collectionPeople);

const map = (collection, fn) => {
    return collection.reduce((acc, item) => {
        return acc.concat(fn(item));
    }, []);
}

const filter = (collection, fn) => {
    return collection.reduce((acc, item) => {
        if(fn(item)) {
            return acc.concat(item);
        }
        return acc;
    }, []);
}
