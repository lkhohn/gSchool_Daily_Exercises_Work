// A promise can be written like this:

// function myFunFunFunction(stuff){
//     //we can have some logic here
//     //we want to return the promise
//     return new Promise(function(resolve, reject) { //we return a new promise
//       //we can have some more logic here
//       if (stuff==='hello') {
//         resolve('WOOO!'); // this is your success function
//       } else {
//         reject(new Error('goodbye')); //this is your failure function
//       }
//     });
// }

// And invoked like this:
// myFunFunFunction('hello') //invoke function
//     .then(function(response){ //this function gets called when the Promise resolve function is called.
//         console.log(response);
//     })
//     .catch(function(error){ //this function is called when the Promise reject function is called.
//         console.error(error);
//     });

// The problem:
// Now create a webpage with a button named callback.
// Add click listener that logs I'm a callback and I've been invoked whenever the button is clicked.
// Now add a second button named promise.
// Create a function called setPromiseButtonClick, it should return a new Promise.
// Inside the new Promise you should attach a click listener to the promise button.
// Inside the callback to the click listener you should invoke resolve and pass in the event.
// Invoke setPromiseButtonClick() and chain a .then that console logs I'm a promise and I've been invoked.


$("#callbackButton").click(function() {
  console.log("I'm a callback and I've been invoked");
});

function setPromiseButtonClick() {
  return new Promise(function(resolve, reject) { //we return a new promise
    $("#callbackButton").click(function() {
      resolve("I'm a promise and I've been invoked");
    });
  });
}

setPromiseButtonClick().then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.error(error);
});
