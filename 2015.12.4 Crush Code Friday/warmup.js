// You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.
// The function should contain at least 1 argument per set.
// calculate(1)(1) // should return 2
// calculate(1,1)(1) // should return 3
// calculate(1,1)(1,-1) // should return 2
// calculate(2,4)(3,7,1) // should return 17
function calculate(input) {
  var firstNumber = 0;
  for (var i = 0; i < arguments.length; i++) {
    firstNumber = arguments[i] + firstNumber;
  }
  return function() {
    var secondNumber = 0;
    for (var j = 0; j < arguments.length; j++) {
      secondNumber = arguments[j] + secondNumber;
    }
    return firstNumber + secondNumber;
  }
}
// Test.assertEquals(calculate(1)(1), 2);
// Test.assertEquals(calculate(1,1)(1) , 3);
// Test.assertEquals(calculate(1,1)(1,-1), 2);
// Test.assertEquals(calculate(2,4)(3,7,1), 17);


// We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:
// var callbacks = createFunctions(5); // create an array, containing 5 functions
// callbacks[0](); // must return 0
// callbacks[3](); // must return 3
// function createFunctions(n) {
//   var callbacks = [];
//
//   for (var i=0; i<n; i++) {
//     callbacks.push(function() {
//       return i;
//     });
//   }
//
//   return callbacks;
// }
function createFunctions(n) {
  var callbacks = [];

  var fx = function(x){
    return function(){
      return x;
      }
    };
  for (var i=0; i<n; i++) {
    callbacks.push(fx(i));
    }
  return callbacks;
}



// Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.
// var three = always(3);
// three(); // returns 3
// return a function that returns n
function always(n) {
  return function() {
    return n
  }
  return n
};
// Test.expect(always(true)(), 'A function that is always true will return true')




// You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.
// Subsequent calls to the resulting function should have no effect (and should return undefined).
// For example:
// logOnce = once(console.log)
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect
function once(fn) {
  var didRun = false;
  return function(args) {
  if(didRun!=true){
       didRun = true;
      return fn(args);
      }
      return undefined;
    }
}
// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message)
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message)
