// We're going to create an object using what we learned yesterday.
// Create a constructor function and call it Vector2.
// It should take x and y as parameters.
// It should assign the parameters as properties to itself using the this keyword.
// Give the Vector2 object 2 methods, subtract and add
// subtract and add each take one parameter and will assume it is another vector2. E.g. myVector.subtract(otherVector)
// subtract should return a new Vector2 with its x set to this.x - otherVector.x and its y set to this.y - otherVector.y
// add should return a new Vector2 with its x set to this.x + otherVector.x and its y set to this.y + otherVector.y

// Stretch:
// Add a multiply and divide methods to your Vector2 object.
// Add a flip method that reverses the vector direction.

'use strict';


var Vector2 = function(xInput, yInput) {
  return {
    x: xInput,
    y: yInput,
    subtract: function(otherVec) {
      return new Vector2(this.x - otherVec.x, this.y - otherVec.y);
    },
    add: function(otherVec) {
      return new Vector2(this.x + otherVec.x, this.y + otherVec.y);
    }
  }
}

var myVector = new Vector2(10, 20);
// console.log(myVector.x);
// console.log(myVector.y);

var otherVector = new Vector2(5, 10);
// console.log(otherVector.x);
// console.log(otherVector.y);


var subtractedVector = myVector.subtract(otherVector);
console.log(subtractedVector.x); // prints 5
console.log(subtractedVector.y); // prints 10

var addedVector = myVector.add(otherVector);
console.log(addedVector.x); //prints 15
console.log(addedVector.y); //prints 30







// var Vector2 = function(x1, y1) {
//   return {
//     x: x1,
//     y: y1,
//     subtract: function(newVector1) {
//       var vector1 = Vector2();
//       vector1.x = (this.x - newVector1.x);
//       vector1.y = (this.y - newVector1.y);
//       return vector1;
//     },
//     add: function(newVector2) {
//       var vector2 = Vector2();
//       vector2.x = (this.x + newVector2.x);
//       vector2.y = (this.y + newVector2.y);
//       return vector2;
//     },
//     multiply: function(newVector3){
//       var vector3 = Vector2();
//       vector3.x = (this.x * newVector3.x);
//       vector3.y= (this.y * newVector3.y);
//       return vector3;
//     },
//     divide: function(newVector4){
//       var vector4 = Vector2();
//       vector4.x = (this.x / newVector4.x);
//       vector4.y = (this.y / newVector4.y);
//       return vector4;
//     }
//   }
// }
//
//
//
// var myVector = new Vector2(10, 20);
//  var otherVector = new Vector2(5, 10);
//
//  var subtractedVector = myVector.subtract(otherVector);
//  console.log(subtractedVector.x); // prints 5
//  console.log(subtractedVector.y); // prints 10
//
//  var addedVector = myVector.add(otherVector);
//  console.log(addedVector.x); //prints 15
//  console.log(addedVector.y); //prints 30
//
//  var multiplyVector = myVector.multiply(otherVector);
//  console.log(multiplyVector.x); //prints 50
//  console.log(multiplyVector.y); //prints 200
//
//  var divideVector = myVector.divide(otherVector);
//  console.log(divideVector.x); //prints 2
//  console.log(divideVector.y); //prints 2
