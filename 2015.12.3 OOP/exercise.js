// var Name = function() {
//   var _firstName = 'Lindsay';
//   var _lastName = 'Hohn';
//   return {
//     getfirstName: function() {
//       return _firstName;
//     },
//     getLastName: function() {
//       return _lastName;
//     },
//     setFirstName: function(newFirstName){
//       _firstName = newFirstName;
//     },
//     setLastName: function(newLastName){
//       _lastName = newLastName;
//     }
//   }
// }
// var myName = new Name();
// console.log(myName.getfirstName());

// var Name = function(inputFirstName, inputLastName) {
//   var _firstName = inputFirstName;
//   var _lastName = inputLastName;
//   return {
//     getFirstName: function() {
//       return _firstName;
//     },
//     getLastName: function() {
//       return _lastName;
//     },
//     getFullName: function() {
//       console.log('ERR: not implemented');
//     }
//   };
// };
//
// var NewName = function(inputFirstName, inputLastName) {
//   //invoke parent constructor to get interface and assign it to var input
//   var input = Name(inputFirstName, inputLastName);
//
//   //override interface property getFullName with a another function
//   input.getFullName = function() {
//     return input.getFirstName() + ' ' + input.getLastName();
//   };
//
//   //return interface
//   return input;
// }
//
// var myNewName = NewName('Lindsay', 'Hohn');
// console.log(myNewName.getFullName());


// polymorphorism
// var Shape = function(newSize, newColor) {
//   var _size = newSize;
//   var _color = newColor;
//   return {
//     getArea: function() {
//       console.log('ERR: not implemented');
//     },
//     getSize: function() {
//       return _size;
//     },
//     getColor: function() {
//       return _color;
//     }
//   };
// };
//
// var Circle = function(newSize, newColor) {
//   // call super constructor
//   var self = Shape(newSize, newColor);
//   self.getArea = function() {
//     return 3.14 * self.getSize() * self.getSize();
//   }
//   return self;
// };
//
// var myCircle = Circle(5, 'white');
// // calling getArea on a child of Shape Object but get output for circle
// console.log(myCircle.getArea());
//
//
// var Square = function(newSize, newColor) {
//   // call super constructor
//   var self = Shape(newSize, newColor);
//   self.getArea = function() {
//     return self.getSize() * self.getSize();
//   }
//   return self;
// };
//
// var mySquare = Square(5, 'white');
// // calling getArea on a child of Shape Object but get output for square
// console.log(mySquare.getArea());



// polymorphorism -- one function that has different actions based on the input
// function multiply(x, z){
//   if(typeof x === 'number' && typeof z === 'number'){
//     return x*z;
//   }
//   else if(x instanceof Vector2 && z instanceof Vector2){
//     return x.multply(z);
//   }
// }
// console.log(multiply(4,4));



var Animals = function(type, color, sound, size) {
  var _type = type;
  var _color= color;
  var _sound = sound;
  var _size = size;
  return {
    getType: function() {
      return _type;
    },
    getColor: function(){
      return _color;
    },
    getSound: function() {
        return 'this animal says ' + _sound;
      },
      getSize: function(){
        return _size;
      }
  };
};

// var myAnimal = Animals('dog', 'yellow', 'ruff', 'medium');
// console.log(myAnimal.getSound());

var newAnimal = function(type, color, sound, size) {
  var self = Animals(type, color, sound, size);
  self.getSound = function() {
    return 'this crazy ' + myAnimal.getType() + ' says ' + sound;
  }
  return self;
}
var myAnimal = newAnimal('dog', 'yellow', 'ruff', 'medium');
console.log(myAnimal.getSound());
