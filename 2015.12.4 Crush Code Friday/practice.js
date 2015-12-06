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



//Entity this is the parent class
function Entity() {
  return {
    energy: '0',
    direction: 'n',
    originChar: 'E',
    act: function() {
      return {
        type: 'move',
        direction: this.direction
      };
    }
  };
}

function Herbivore() {
  var self = new Entity();
  self.originChar = 'H';
  self.direction = 'se';
  self.energy = 50;
  self.act = function(view) {
    var returnObject;
    var food = view.find('P');
    var emptySpace = view.find(' ');
    var otherAnimal = view.find('H');
    var predator = view.find('C');
    if (predator) {
      self.direction = emptySpace;
      returnObject = {
        type: 'move',
        direction: this.direction
      };
    } else if (food) {
      returnObject = {
        type: 'eat',
        direction: food
      };
    } else if (emptySpace && otherAnimal && self.energy >= 100) {
      returnObject = {
        type: 'reproduce',
        direction: emptySpace
      };
    } else if (emptySpace) {
      self.direction = emptySpace;
      returnObject = {
        type: 'move',
        direction: this.direction
      };
    }
    return returnObject;
  };
  return self;
}

function Plant() {
  var self = new Entity();
  self.originChar = 'P';
  delete self.direction;
  self.energy = 5;
  self.act = function(view) {
    // grow is the default action
    var returnAction = {
      type: 'grow'
    };
    if (self.energy >= 40) {
      // try to find an empty space
      var emptySpace = view.find(' ');
      // if one exists
      if (emptySpace) {
        // reproduce at that empty space
        returnAction = {
          type: 'reproduce',
          direction: emptySpace
        };
      }
    }
    // return our action
    return returnAction;
  };
  // return our new entity plant
  return self;
}

function Carnivore() {
  var self = new Entity();
  self.originChar = 'C';
  self.direction = 's';
  self.energy = 50;
  self.act = function(view) {
    var returnObject;
    var food = view.find('H');
    var emptySpace = view.find(' ');
    var otherAnimal = view.find('C');
    if (food) {
      returnObject = {
        type: 'eat',
        direction: food
      };
    } else if (emptySpace && otherAnimal && self.energy >= 100) {
      returnObject = {
        type: 'reproduce',
        direction: emptySpace
      };
    } else if (emptySpace) {
      self.direction = emptySpace;
      returnObject = {
        type: 'move',
        direction: this.direction
      };
    }
    return returnObject;
  };
  return self;
}

function Tree() {
  var self = new Entity();
  self.originChar = 'T';
  delete self.direction;
  self.energy = 5;
  self.act = function(view) {
    // grow is the default action
    var returnAction = {
      type: 'grow'
    };
    if (self.energy >= 40) {
      // try to find an empty space
      var emptySpace = view.find(' ');
      // if one exists
      if (emptySpace) {
        // reproduce at that empty space
        returnAction = {
          type: 'reproduce',
          direction: emptySpace
        };
      }
    }
    // return our action
    return returnAction;
  };
  // return our new entity plant
  return self;
}
function Giraffe() {
  var self = new Entity();
  self.originChar = 'G';
  self.direction = 'ne';
  self.energy = 50;
  self.act = function(view) {
    var returnObject;
    var food = view.find('T');
    var emptySpace = view.find(' ');
    var otherAnimal = view.find('G');
    var predator = view.find('C');
    if (predator) {
      self.direction = emptySpace;
      returnObject = {
        type: 'move',
        direction: this.direction
      };
    } else if (food) {
      returnObject = {
        type: 'eat',
        direction: food
      };
    } else if (emptySpace && otherAnimal && self.energy >= 100) {
      returnObject = {
        type: 'reproduce',
        direction: emptySpace
      };
    } else if (emptySpace) {
      self.direction = emptySpace;
      returnObject = {
        type: 'move',
        direction: this.direction
      };
    }
    return returnObject;
  };
  return self;
}

//The wall element inherits from Entity
function Wall() {
  var self = new Entity();
  //override act
  self.act = false;
  return self;
}
// Your code here


//uncomment entities from the legend as you implement them
var legend = {
  "#": Wall,
  "E": Entity,
  "H": Herbivore,
  "P": Plant,
  "C": Carnivore,
  "T": Tree,
  "G": Giraffe
};

//to add an entity to the map replace an empty character with your entitycharacter
var map = ["############################",
  "#####      HP       P ######",
  "##   C  P    GT  P        ##",
  "#    ##   T H             ##",
  "#     P  T  G P   ##  P    #",
  "#  P   H   T      ##   P   #",
  "#     P        P  ##  C    #",
  "#  C        #   P   T    P #",
  "#  P  H    T#   C  P   H   #",
  "#           ##      P      #",
  "##    P    ###   P       ###",
  "############################"
];
var world = new LifelikeWorld(map, legend);

//Megaman EXECUTE! \o/
animateWorld(world);
