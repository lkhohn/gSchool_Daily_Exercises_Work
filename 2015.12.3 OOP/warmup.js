// We're going to create an object using what we learned yesterday.
// Create a constructor function and call it Vector2.
// It should take x and y as parameters.
// It should assign the parameters as properties to itself using the this keyword.
// Give the Vector2 object 2 methods, subtract and add
// subtract and add each take one parameter and will assume it is another vector2. E.g. myVector.subtract(otherVector)
// subtract should return a new Vector2 with its x set to this.x - otherVector.x and its y set to this.y - otherVector.y
// add should return a new Vector2 with its x set to this.x + otherVector.x and its y set to this.y + otherVector.y
'use strict';


// var Vector2 = function(x, y) {
//   this.x = x;
//   this.y = y;
//   return {
//     subtract: function() {
//       var difference = this.x - this.y
//       return difference;
//     },
//     add: function() {
//       var sum = this.x + this.y
//       return sum;
//     }
//   }
// }
// console.log(Vector2);
// var myVector = new Vector2(2, 3);
// console.log(myVector);



var Vector2 = function(x1, y1) {
  return {
    x: x1,
    y: y1,
    subtract: function(newVector1) {
      var vector1 = Vector2();
      vector1.x = (this.x - newVector1.x);
      vector1.y = (this.y - newVector1.y);
      return vector1;
    },
    add: function(newVector2) {
      var vector2 = Vector2();
      vector2.x = (this.x + newVector2.x);
      vector2.y = (this.y + newVector2.y);
      return vector2;
    }
  }
}



var myVector = new Vector2(10, 20);
 var otherVector = new Vector2(5, 10);

 var subtractedVector = myVector.subtract(otherVector);
 console.log(subtractedVector.x); // prints 5
 console.log(subtractedVector.y); // prints 10

 var addedVector = myVector.add(otherVector);
 console.log(addedVector.x); //prints 15
 console.log(addedVector.y); //prints 30



 // Stretch:
// Add a multiply and divide methods to your Vector2 object.
// Add a flip method that reverses the vector direction.
