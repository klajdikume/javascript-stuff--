var worker;
console.log( "aaa");
function doSearch() {
  // Disable the button, so the user can't start more than one search
  // at the same time.
  // searchButton.disabled = true;
  console.log( "aaa");
  // Create the worker.
  worker = new Worker("PrimeWorker.js");

  // Hook up to the onMessage event, so you can receive messages
  // from the worker.
  worker.onmessage = receivedWorkerMessage;

  // Get the number range, and send it to the web worker.
  var fromNumber = 2 //document.getElementById("from").value;
  var toNumber = 10 //document.getElementById("to").value;

  worker.postMessage(
   { from: fromNumber,
     to: toNumber }
  );

  // Let the user know that things are on their way.
  console.log( "A web worker is on the job ("+
  fromNumber + " to " + toNumber + ") ...");
}
doSearch();