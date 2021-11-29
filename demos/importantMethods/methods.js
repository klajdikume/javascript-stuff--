const numbers = [2, 4, 8, 10];
const halves = numbers.map(x => x / 2);

// maps each element of arr and returns a new array

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = words.filter(word => word.length > 6);

// filter creates a new array with all elements with given condition

// reduce applieas a function against an accumulator and each element in the array

const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);

// it passes the result of one callback function invocation to the next one

// -> compose functions

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
