// Create a Person object with firstName and lastName properties
// Create setter methods for firstName and lastName that verify that the input is:
// A string
// Shorter than 50 characters
// Create a getter method called getFullName that returns the first name and last name together
// (look out for spacing

var Person = function(firstName, lastName) {
  var _firstName = firstName;
  var _lastName = lastName;
  return {
    getFirstName: function() {
      return _firstName;
    },
    getLastName: function() {
      return _lastName;
    },
    getFullName: function(firstName, lastName) {
      if (typeof _firstName !== 'string' || typeof _lastName !== 'string') {
        return 'invalid name';
      } else {
        return _firstName + ' ' + _lastName;
      }
    }
  }
}

var newPerson = new Person('Lindsay', 'Hohn');
console.log(newPerson.getFullName());



var Chair = function(height, width, wheels) {
  var _height = height;
  var _width = width;
  var _wheels = wheels;
  return {
    comfort: function() {
      return 'this chair is comfy';
    },
    getHeight: function() {
      return _height;
    },
    getWidth: function() {
      return _width;
    },
    getWheels: function() {
      return _wheels * 4;
    }
  }
}
var newChair = Chair(10, 10, 1);
console.log(newChair.getWheels());
console.log(newChair.comfort());
