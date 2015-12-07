// examples of this.prototype

// in an object
var Car = function() {
  return {
    make: 'Subaru',
    model: 'Outback',
    getType: function() {
      // console.log(this.make + ' ' + this.model);
    }
  }
}


// to refer to the global scope
// normal binding
var setValue = function(key, value) {
  this[key] = value;
}
setValue('cohort', 'g17');
// console.log(cohort);


var Car = {
  make: 'Subaru',
  model: 'Outback',
  getType: function() {
    // console.log(this.make + ' ' + this.model);
  }
}


var otherObject = {
  data: [],
  make: 'Epson',
  model: 'v1232',
  getType: Car.getType
}
Car.getType();
otherObject.getType();


// explicit binding

var thirdMachine = {
  make: 'Osterizer',
  model: 'BlendWhiz'
}

// setTimeout(otherObject.getType(), 0);
// setTimeout(Car.getType(), 0);

// function setTimeout(callback, ms){
//  if(timeElapsed >= ms){
// then do callback();
// }
// }


otherObject.getType.call(thirdMachine);

// .call
var wrapper = function() {
    return otherObject.getType.call(thirdMachine);
  }
  // setTimeout(wrapper, 0);

// .apply
var wrapper = function() {
    return otherObject.getType.apply(thirdMachine);
  }
  // setTimeout(wrapper, 0);

// in a constructor
var Car = function() {
  this.make = 'Subaru';
  this.model = 'Outback';
  this.getType = function() {
    // console.log(this.make + ' ' + this.model);
  };
}



// new binding
var Value = function(value) {
  this.foo = value;
}

var otherThing = {
  value: Value
}
var myValue = new otherThing.value('test');
// console.log(otherThing.foo);
// console.log(myValue.foo);





var object1 = {
  foo: 'a',
  bar: '1'
}
var object2 = {
  foo: 'b',
  bar: '2'
}

function fooBar() {
  console.log(this.foo + this.bar);
}

function FooBar(foo, bar) {
  this.foo = foo;
  this.bar = bar;
  this.output = fooBar;
}
object1.output = fooBar;
object2.fooBar = fooBar;

// object1.output();  // a1
// fooBar(); // undefined or NaN
// object2.fooBar();  // b2
// object1.output.call(object2);  // b2
// fooBar.call(object2);  // b2
// object1.output.apply(object1);   // a1
// var object3 = new FooBar('c', 3);
// object3.output();   // c3  implicit binding
// new FooBar('d', 4).output();  // d4  new binding
// new FooBar('d', 4).output.call(object1);   // a1  new binding


// instanceof
// var color = [];
// console.log(typeof color);
// console.log(color instanceof Array);
// console.log(color instanceof String);


// var Car = function(model, make) {
//   // private vars enclosed here
//   return {
//     model: model,
//     make: make,
//     fillTank: function(){
//       // do stuff here
//     }
//   }
// }
//
// var Subaru = function(make){
//   var self = Car('Subaru', make);
//   return self;
// }
// var myCar = Subaru('Outback');
// Car.drive = function(){
//   // do something
// };
// console.log(myCar);
// // var myCar = Car();
// console.log(myCar instanceof Car);




var Car = function(model, make) {
  // private vars enclosed here
  this.tank = 0;
  this.model = model;
  this.make = make;
  this.fillTank = function(gas) {
     this.tank += gas;
  };
  this.getGas = function(){
    return this.tank;
  }
}

Car.prototype.drive = function(miles){
  this.tank = this.tank - miles/20;
  return 'The car is driving';
  };

var myCar = new Car('Subaru', 'Outback');
// console.log(myCar);
// console.log(myCar instanceof Car);
// console.log(myCar.drive());
// console.log(myCar.__proto__);
myCar.drive(20);
myCar.fillTank(20);
console.log(myCar.getGas());
