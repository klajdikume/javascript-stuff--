/*
    https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d/
*/

const fs = require('fs');
const { EventEmitter } = require('stream');

const readFileAsArray = function(file, cb = () => {}) {
   return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
        if(err){
            reject(err);
            return cb(err);
        }
        const lines = data.toString().trim().split('\n');
        resolve(lines);
        cb(null, lines);
    });
   })
};

readFileAsArray('./numbers.txt', (err, lines) => {
    if(err) throw err;
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(n => n % 2 === 1);
    console.log('Odd numbers count: ' + oddNumbers.length);
});

readFileAsArray('./numbers.txt')
    .then(lines => {
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(n => n % 2 === 1);
        console.log('Odd numbers count: ' + oddNumbers.length);
    })
    .catch(console.error);

async function countOdd () {
    try {
        const lines = await readFileAsArray('./numbers');
        const numbers = lines.map(Number);
        const oddCount = numbers.filter(n => n % 2 === 1).length;
        console.log('Odd Numbers count: ' + oddCount);
    } catch (err) {
        console.log(err);
    }
}

// EventEmitter -> facilitates communication between objects in Node\

// emitter objects emit named events
// that cause previously registered listeners to be called.

// emitter object
// Emitting name events
// Registering and unregistering listener functions

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.emit('smth-happened'); // named event emitted

// some condition has occurred, state changed in the emitting object

class WithLog extends EventEmitter {
    execute(taskFunc) {
        console.log('Before executing');
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log('After executing');
    }
}

const withLog = new WithLog();


withLog.on('begin', () => console.log('About to execute'));
withLog.on('end', () => console.log('Done with execute'));

withLog.execute(() => console.log('*** Executing task ***'));

// react to the same signal multiple times by defining multiple listeners


// Async Events

class WithTime extends EventEmitter {
    execute(asyncFunc, ...args){
        this.emit('begin');
        console.time('execute');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }
            this.emit('data', err);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));

withTime.execute(fs.readFile, __filename);

async function getJSON(url){
    let response = await fetch(url);
    let body = await response.json();
    return body;
}

// async iterators 

function clock(interval, max = Infinity) {
    function until(time){
        return new Promise(resolve => setTimeout(resolve, time - Date.now()));
    }

    return {
        startTime: Data.now(),
        count: 1,
        async next() {
            if(this.count > max) {
                return { done: true };
            }

            let targetTime = this.startTime + this.count * interval;

            await until(targetTime);

            return { value: this.count++ };
        },

        [Symbol.asyncIterator]() { return this; }
    };
}