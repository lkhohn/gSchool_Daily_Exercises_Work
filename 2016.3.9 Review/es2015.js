"use strict";
// array destructuring
let foo;
let bar;
let spread;
// [foo, bar] = ["firstValue", "secondValue"];

[foo, bar, ...spread] = doStuff();

// you can swap the variables
[bar, foo] = [foo, bar]

console.log(foo);
console.log(bar);
console.log(spread);

function doStuff(){
  return ["hello", "world", "other", 'stuff'];
}


// object destructuring
let myObject = {
  something: 'someValue',
  otherThing: 'otherValue'
};

let { something:a, otherThing:b } = myObject;
console.log(a);
console.log(b);

function doTheThing(){
  return {
    someting: "someValue",
    otherThing: function(){
      return 0;
    }
  };
}
  // destructuring will be used alot when you require

  // default rest and spread
  // rest example -- rest is used when writing a function
  function myFunc(x, y=12) {
    return x + y;
  }
  console.log(myFunc(1,false));
  console.log(myFunc(1,undefined));

// rest example -- anything you pass in becomes an array
// function myOtherFunc(...x){
//   return x.reduce( (item, prev) => prev + item);
// }
// let returnValue = myOtherFunc(10, 11, 12, 166);
// console.log(returnValue);


// spread example
// let returnValue = myOtherFunc(10, 11, 12, 166, ...[1,2,3]);
let myArray = [1,2,3];
let returnValue = anotherFunc(...myArray);
function anotherFunc(x, y, z){
  return x + y + z;
}
console.log(returnValue);



// arrow function

() => {
  return false;
}

// for a one line function
() => false;

function newFunc(){
  this.hello = "something";
  // setInterval( () => {
  //   console.log(this);
  // }, 1000);

  // setInterval(function(){
  //   console.log(this);
  // }.bind(this), 1000);
}

let myThing = new newFunc();


// ** apply, bind, call are BIG interview questions. make sure you know the difference
// ** understanding how to use this and how it is used in different actions is another
// big interview question!!
// invokes immediately passing in context and arg array
myFunc.apply(this, [1,2,3]);


// generators
let myGen = myGenFunc();
myGen.next();
myGen.next();
console.log(myGen.next());
function * myGenFunc(){
  console.log('hello');
  yield;
  console.log('part two');
  yield 2;
  console.log('part three');
  return 3;
}

var newArray = [1, 2, 3, 4, 5, 6, 7];
function * iterate(newArray){
  let index = 0;
  while(true){
    yield newArray[index];
    index ++;
    if(index >= newArray.length){
      index = 0;
    }
  }
}
let myGenIterator = iterate(newArray);
console.log(myGenIterator.next());
console.log(myGenIterator.next());
console.log(myGenIterator.next());
console.log(myGenIterator.next());
console.log(myGenIterator.next());
console.log(myGenIterator.next());
console.log(myGenIterator.next());
console.log(myGenIterator.next());
console.log(myGenIterator.next());


function * fib (){
  // used in a for loop when you are initializing anothing, no conditions like
  // (var i=0, condition, ...)
  // to stop this, you'd have to use a break
  // for(;;){

  // }
  let [x, y] = [0,1];
  while(true){
    [x,y] = [x + y, x];
    yield x;
  }
}
let myFibGen = fib();
console.log(myFibGen.next());
console.log(myFibGen.next());
console.log(myFibGen.next());
console.log(myFibGen.next());
console.log(myFibGen.next());
console.log(myFibGen.next());
