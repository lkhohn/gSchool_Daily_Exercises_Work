// var globalScope = "GS";
// function myFunction (){
//     var localScope1 = "LS";
//     console.log(globalScope);
// }
// myFunction();
// //console.log(localScope1);
//
// var george = 'george';
// function localScope(){
//     var george='freddie';
//     console.log(george);
// }
// localScope();
// console.log(george);
//
// myFirstFunction();
// mySecondFunction();
//
//
// function myFirstFunction() {
//     console.log("firstFunction");
// }
// var mySecondFunction = function() {
//     console.log("secondFunction");
// }
//
// var myVar = "myVar";
// function myfunction(){
//     console.log('blah');
// }
// var myFunc = function (){
//     console.log('rawr');
// }
//
// // AFTER HOISTING
// var myVar;
// function myfunction(){
//     sonole.log('blah');
// }
// var myFunc;
//
//
// myVar="myVar";
// myFunc=function(){
//     console.log('rawr');
// }
//
//
// function returnAFunction() {
//     return function(){
//         console.log("I'm an inner function!");
//     }
// }
// var returnedFunction = returnAFunction();
// returnedFunction();
//
// function outerFunc(){
//     console.log('outer function');
//     return function(){
//         console.log('I am the rturned function');
//     }
// }
// var returnedFunction=outerFunc();
// returnedFunction();
// outerFunc()();
//
//
// function addGenerator (x){
//     return function(){
//         console.log(x)
//     }
// }
// var newFunction=addGenerator(10);
// newFunction();
//
//
// function helloHigherOrder (){
//     console.log('hello');
//     return function(){
//         console.log('Goodbye');
//     }
// }
// var newFunction=helloHigherOrder();
// newFunction();
//
//
// function add(x){
//     return function(y){
//         console.log(x+y);
//     }
// }
// var newFunction=add(5);
// newFunction(5);
//
//
// function closure (){
//     var x=10;
//     var anything = ['1','2','3'];
//     return function(){
//         console.log(anything + x);
//     }
// }
// var getX=closure();
// getX();

// function closure (){
//     var x=10;
//     var anything = ['1','2','3'];
//     return function(){
//     return x
//     }
// }
// var getX=closure();
// console.log(getX());

// function numberOne(){
//   var myArray = [1,2,3,4,5,6,7,8,9,10];
//   return function(y){
//     return myArray[y];
//   }
// }
// var newFunction = numberOne();
// console.log(newFunction(2));

// function closeMe(){
//   var count =0;
//   return function(){
//     return count++;
//   }
// }
// var count=closeMe();
// var secondCounter = closeMe();

// function closeMe(startingNum){
//   var count = startingNum;
//   return function(){
//     return count++;
//   }
// }
// var counter=closeMe(10);
// var secondCounter = closeMe(1);
// console.log(secondCounter());
// console.log(counter());
// console.log(secondCounter());
// console.log(counter());
// console.log(secondCounter());

// function callEbay(onSuccess, onFailure){
//   //if result ===Goodbye
//     // onSucces()
//   //else
//     //onFailure()
// }

// function exampleCallBack(bool, success, failure){
//   if(bool){
//     success();
//   }
//   else{
//     failure();
//   }
// }
// var suc = function(){
//   console.log('succes');
// };
// var fail = function(){
//   console.log('fail');
// };
// exampleCallBack(false, suc, fail);


// function oneFunction(number, twoFunction, threeFunction){
//   if(number%2===0){
//       twoFunction();
//   }
//   else{
//      threeFunction();
//   }
// }
// function twoFunction(){
//   console.log('even');
// }
// function threeFunction (){
//   console.log('odd');
// }
// oneFunction(2, twoFunction, threeFunction);
//

// var array = [1,2,3,4,5,6,7];
// var myFunc=function(element){
//   console.log(element);
// }
// array.forEach(myFunc);

// var array = [1,2,3,4,5,6,7];
// var myFunc=function(element, index){
//   console.log(element);
// };
// array.forEach(function(element, index){
//   console.log(element);
// });


// Write a function that takes in a boolean and two functions as arguments.
// the first function takes in string message as an argument and console logs "success: " + message
// the second function takes in a string error as an argument and console logs "error: " + error
// if the boolean is true call the first function with message = "true".
// if the boolean is false call the second function with error = " false".
// What is this technique called?

// function myFunction = (boolean, twoFunction, threeFunction){
//   }


// Write a function
// takes in x as an argument.
// returns a function that takes in y as an argument
// the returned function should return x + y
// what kind of function is this?
// function sum(x){
//   return function(y){
//     console.log(x+y);
//   }
// }
// newFunction=sum(5);
// newFunction(10);















//
