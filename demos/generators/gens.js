function* generatorFunc(){
    yield 1 + 1;
    yield 2 + 2;  // pauses exe
    return 1 + 1; // ends exe
}

const iterator = {
    next: () => ({
        value: any,
        done: boolean
    })
}
// type of iterator -> objects that define a sequence
// 1.
const generatorObj = generatorFunc();

// 2.
console.log(generatorObj.next());
// returns { value: 2, done: false };

// 3.
console.log(generatorObj.next());

// returns { value: 4, done: false };

console.log(generatorObj.next());
// returns { value: 8, done: true };

// the generator object has been consumed

// seq of values using spread operators

const [a, b, c] = generatorFunc();

const values = [...generatorFunc()];

console.log(values); // takes only yeild expressions

function *generatorFunction(){
    console.log(`Generator function is running`);

    let x = 5;
    yield x;

    x++;
    return x;
}

let iterator1 = generatorFunction();

console.log(iterator1.next());
console.log(iterator1.next());
console.log(`All done`);