// handles async or blocking code API calls, DB calls, IO calls
// eventual completon or failure of an async operation and its resulting value

var keepHisWord;
keepHisWord = true;

var promise = new Promise(function(resolve, reject) {
    if(keepHisWord){
        resolve("ABC");
    } else {
        reject("YZZH");
    }
});

console.log(promise);

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            message: "I am a pinky promise resolved",
            code: ""
        });
    }, 10 * 1000);
})
.then(function(value) {
    console.log("Then chain", JSON.stringify(value));
})
.catch(function(reason) {
    console.log("catch error: ", reason);
})
.finally(function(){
    console.log("finally no matter what :D")
});

console.log(promise2);

// Promise.all(iterable)
// 1. returns a signle Promise
// 2. resolves when all of the promises in the iterable args hav resolved
// 3. iterable args contains no promises
// 4. Rejects with the reason of the first promise that rejects

// Promise.all(3)

var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function(
    n = 0
  ) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({
          resolvedAfterNSeconds: n
        });
      }, n * 1000);
    });
  });
  var promiseTRJANSG = (promiseThatRejectsAfterNSecondsGenerator = function(
    n = 0
  ) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject({
          rejectedAfterNSeconds: n
        });
      }, n * 1000);
    });
  });


  console.time("Promise.All");
var promisesArray = [];
promisesArray.push(promiseTRSANSG(1));
promisesArray.push(promiseTRSANSG(4));
promisesArray.push(promiseTRSANSG(2));
var handleAllPromises = Promise.all(promisesArray);
handleAllPromises.then(function(values) {
  console.timeEnd("Promise.All");
  console.log("All the promises are resolved", values);
});
handleAllPromises.catch(function(reason) {
  console.log("One of the promises failed with the following reason", reason);
});

// Promise.race([]) -> returns a promise that resolves or rejects 
// as soon as one of the promises in the iterable resolves or rejects
// with the value or reason from that promise.

// One of the promises resolves first.
