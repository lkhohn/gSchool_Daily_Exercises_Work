(function() {
  "use strict";

  var active = null;

  function Animated(world) {
    this.world = world;
    var outer = (window.__sandbox ? window.__sandbox.output.div : document.body), doc = outer.ownerDocument;
    var node = outer.appendChild(doc.createElement("div"));
    node.style.cssText = "position: relative; width: intrinsic; width: fit-content;";
    this.pre = node.appendChild(doc.createElement("pre"));
    this.pre.appendChild(doc.createTextNode(world.toString()));
    this.button = node.appendChild(doc.createElement("div"));
    this.button.style.cssText = "position: absolute; bottom: 8px; right: -4.5em; color: white; font-family: tahoma, arial; " +
      "background: #4ab; cursor: pointer; border-radius: 18px; font-size: 70%; width: 3.5em; text-align: center;";
    this.button.innerHTML = "stop";
    var self = this;
    this.button.addEventListener("click", function() { self.clicked(); });
    this.disabled = false;
    if (active) active.disable();
    active = this;
    this.interval = setInterval(function() { self.tick(); }, 333);
  }

  Animated.prototype.clicked = function() {
    if (this.disabled) return;
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
      this.button.innerHTML = "start";
    } else {
      var self = this;
      this.interval = setInterval(function() { self.tick(); }, 333);
      this.button.innerHTML = "stop";
    }
  };

  Animated.prototype.tick = function() {
    this.world.turn();
    this.pre.removeChild(this.pre.firstChild);
    this.pre.appendChild(this.pre.ownerDocument.createTextNode(this.world.toString()));
  };

  Animated.prototype.disable = function() {
    this.disabled = true;
    clearInterval(this.interval);
    this.button.innerHTML = "Disabled";
    this.button.style.color = "red";
  };

  window.animateWorld = function(world) { new Animated(world); };
})();



//Vectors represents position and movement in the grid
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

//This is an example map
//It is array of characters
//Each character represents an entity in the world
var mapExample = ["############################",
  "#      #    #      o      ##",
  "#                          #",
  "#          #####           #",
  "##         #   #    ##     #",
  "###           ##     #     #",
  "#           ###      #     #",
  "#   ####                   #",
  "#   ##       o             #",
  "# o  #         o       ### #",
  "#    #                     #",
  "############################"
];

//This is the Grid constructor
//The Grid object is manages the map data and the contents of each space
//isInside: returns true if a vector is inside the map.
//get: gets the entity at vector
//set: sets the entity at vector
//forEach: invoke a function on each space in the grid
function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}
Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width &&
    vector.y >= 0 && vector.y < this.height;
};
Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
};
Grid.prototype.forEach = function(f, context) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var value = this.space[x + y * this.width];
      if (value != null)
        f.call(context, value, new Vector(x, y));
    }
  }
};


//array of human readable directions
var directionNames = "n ne e se s sw w nw".split(" ");

//a map used to convert human readable directions to vectors
var directions = {
  "n": new Vector(0, -1),
  "ne": new Vector(1, -1),
  "e": new Vector(1, 0),
  "se": new Vector(1, 1),
  "s": new Vector(0, 1),
  "sw": new Vector(-1, 1),
  "w": new Vector(-1, 0),
  "nw": new Vector(-1, -1)
};

//get random element from an array
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}


//get the element from the legend for the given character
//the legend is just a map of characters like '@' & 'O' that gives them what
// Object their value is
function elementFromChar(legend, ch) {
  if (ch == " " || !ch)
    return null;
  var element = legend[ch]();
  element.originChar = ch;
  return element;
}

//get character from an element
function charFromElement(element) {
  if (element == null)
    return " ";
  else
    return element.originChar;
}

//the World object manages everything in the world
//toString: print human readable form of the world
//turn: go through every entity in the world and have the entity perform its action
//letAct: perform the action of the entity
//checkDestination: checks to see that the destination is valid in the grid
function World(map, legend) {

  //create a grid from the given map
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  //loop through the map and its lines
  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++)
    //for every space in the map, get what character
    //is there and look up what element it belongs to
    //set the element in the grid.
      grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
  });
}
World.prototype.toString = function() {
  var output = "";
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += charFromElement(element);
    }
    output += "\n";
  }
  return output;
};
World.prototype.turn = function() {
  var acted = [];
  this.grid.forEach(function(entity, vector) {
    if (entity.act && acted.indexOf(entity) == -1) {
      acted.push(entity);
      this.letAct(entity, vector);
    }
  }, this);
};
World.prototype.letAct = function(entity, vector) {
  var action = entity.act(new View(this, vector));
  if (action && action.type == "move") {
    var dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) == null) {
      this.grid.set(vector, null);
      this.grid.set(dest, entity);
    }
  }
};
World.prototype.checkDestination = function(action, vector) {
  if (directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(directions[action.direction]);
    if (this.grid.isInside(dest))
      return dest;
  }
};

//The view object is what we can use to look around the world programatically.
//look: check to see what entity is in a given direction
//findAll: look in every direction!
//find: returns a random element returned from findAll
function View(world, vector) {
  this.world = world;
  this.vector = vector;
}
View.prototype.look = function(dir) {
  var target = this.vector.plus(directions[dir]);
  if (this.world.grid.isInside(target))
    return charFromElement(this.world.grid.get(target));
  else
    return "#";
};
View.prototype.findAll = function(ch) {
  var found = [];
  for (var dir in directions)
    if (this.look(dir) == ch)
      found.push(dir);
  return found;
};
View.prototype.find = function(ch) {
  var found = this.findAll(ch);
  if (found.length == 0) return null;
  return randomElement(found);
};

//returns a direction with n offset
function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}


//This defines a list of actions that an animal or plant can do
//grow: increase entities energy
//move: decrease entities energy and move it into target direction
//eat: eat the entity at target location and gain its energy
//reproduce: create another entity of the same type and give it energy
var actionTypes = Object.create(null);
actionTypes.grow = function(entity) {
  entity.energy += 0.5;
  return true;
};
actionTypes.move = function(entity, vector, action) {
  var dest = this.checkDestination(action, vector);
  if (dest == null ||
    entity.energy <= 1 ||
    this.grid.get(dest) != null)
    return false;
  entity.energy -= 1;
  this.grid.set(vector, null);
  this.grid.set(dest, entity);
  return true;
};
actionTypes.eat = function(entity, vector, action) {
  var dest = this.checkDestination(action, vector);
  var atDest = dest != null && this.grid.get(dest);
  if (!atDest || atDest.energy == null)
    return false;
  entity.energy += atDest.energy;
  this.grid.set(dest, null);
  return true;
};
actionTypes.reproduce = function(entity, vector, action) {
  var baby = elementFromChar(this.legend,
    entity.originChar);
  var dest = this.checkDestination(action, vector);
  if (dest == null ||
    entity.energy <= 2 * baby.energy ||
    this.grid.get(dest) != null)
    return false;
  entity.energy -= 2 * baby.energy;
  this.grid.set(dest, baby);
  return true;
};

//LifelikeWorld is a child of World
//It works the same way but overrides the letAct function
//It allows for animals and plants to do more advanced actions
//It also manages the energy of animals and plants
//If they run out of energy they die
//If they eat or grow they gain energy
function LifelikeWorld(map, legend) {
  World.call(this, map, legend);
}
LifelikeWorld.prototype = Object.create(World.prototype);
LifelikeWorld.prototype.letAct = function(entity, vector) {
  var action = entity.act(new View(this, vector));
  var handled = action &&
    action.type in actionTypes &&
    actionTypes[action.type].call(this, entity,
      vector, action);
  if (!handled) {
    entity.energy -= 0.2;
    if (entity.energy <= 0)
      this.grid.set(vector, null);
  }
};
