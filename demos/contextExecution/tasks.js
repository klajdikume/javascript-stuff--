// Event Loop we meet again

// endless loop, js engine waits for taskas executes them and then sleeps, waiting for more baby.

// execute them, starting with the oldest task.
// Sleep unitl a task appears, then go to 1

let i = 0;
let start = Date.now();

function count() {
    for (let j = 0; j < 1e9; j++){
        i++
    }

    console.log("Done in" + (Date.now() - start) + "ms");
}


function count() {

  // do a piece of the heavy job (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    console.log("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count); // schedule the new call (**)
  }

}


function count() {

  // move the scheduling to the beginning
  if (i < 1e9 - 1e6) {
    setTimeout(count); // schedule the new call
  }

  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    console.log("Done in " + (Date.now() - start) + 'ms');
  }

}



function count() {

  
  do {
    i++;
    // some inner html = i
  } while (i % 1e3 != 0);

  if (i == 1e6) {
    queueMicrotask(count);
  }

}



count();

setTimeout(() => alert("timeout"));

Promise.resolve()
  .then(() => alert("promise"));

alert("code");


console.log(1);
// The first line executes immediately, it outputs `1`.
// Macrotask and microtask queues are empty, as of now.

setTimeout(() => console.log(2));
// `setTimeout` appends the callback to the macrotask queue.
// - macrotask queue content:
//   `console.log(2)`

Promise.resolve().then(() => console.log(3));
// The callback is appended to the microtask queue.
// - microtask queue content:
//   `console.log(3)`

Promise.resolve().then(() => setTimeout(() => console.log(4)));
// The callback with `setTimeout(...4)` is appended to microtasks
// - microtask queue content:
//   `console.log(3); setTimeout(...4)`

Promise.resolve().then(() => console.log(5));
// The callback is appended to the microtask queue
// - microtask queue content:
//   `console.log(3); setTimeout(...4); console.log(5)`

setTimeout(() => console.log(6));
// `setTimeout` appends the callback to macrotasks
// - macrotask queue content:
//   `console.log(2); console.log(6)`

console.log(7);
// Outputs 7 immediately.

