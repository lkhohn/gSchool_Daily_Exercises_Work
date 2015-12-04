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

function Animal() {
  var self = new Entity();
  self.originChar = 'A';
  self.direction = 's';
  self.energy = 20;
  self.act = function(view) {
    var emptySpace = view.find(' ');
    if(emptySpace){
      self.direction=emptySpace;
    }
    return {
      type: 'move',
      direction: this.direction
    };
  };
return self;
}

function Plant() {
  var self = new Entity();
  self.originChar = 'P';
  delete self.direction;
  self.energy = 1;
  self.act = function(view) {
    var returnAction = {
      type: 'grow'
    };
    if(self.energy > 30){
      var emptySpace = view.find(' ');
      if(emptySpace){
      returnAction={
        type:'reproduce',
        direction: emptySpace
      };
    }
  }
    return returnAction;
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
  "A": Animal,
  "P": Plant
};

//to add an entity to the map replace an empty character with your entitycharacter
var map = ["############################",
  "#####                 ######",
  "##      P        P        ##",
  "#    ##     A             ##",
  "#        P        ##       #",
  "#                 ##       #",
  "#     P           ##       #",
  "#           #              #",
  "#           #              #",
  "#           ##             #",
  "##         ###           ###",
  "############################"
];
var world = new LifelikeWorld(map, legend);

//Megaman EXECUTE! \o/
animateWorld(world);
