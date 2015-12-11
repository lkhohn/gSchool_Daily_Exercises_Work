// Previously when working with objects that inherited from other objects we'd do code similar to the following:
//
// var Parent = function(name, type) {
//   return {
//     this.name = name;
//     this.type = type;
//   }
// }
//
// var Child = function(name, type, childTrait) {
//   var self = Parent(name, type);
//   var self.childTrait = childTrait;
//   return self;
// }

// var myChild = Child();
// Using Prototypical inheritance, we inherit objects in the following manner:

// define constructor with properties
var Parent = function(name, type) {
  this.name = name;
  this.type = type;
};
// define prototype methods
Parent.prototype.getClass = function() {
  return "Parent";
};

// define constructor with properties
var Child = function(name, type, childTrait) {
  Parent.call(this, name, type);
  this.childTrait = childTrait;
};

// specifies the inheritance
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;


var myChild = new Child("bob", "boy", "blonde");

// console.log(myChild);
// console.log(myChild.getClass());

// Use this method of prototypical inheritance to create three different objects that inherit from each other.


// Plant -- type
// section...either edibles, ornamentals, houseplants
// name -- Tree
// variety -- fig

var Plant = function(type) {
  this.type = type;
};

Plant.prototype.getClass = function() {
  return "Plant";
};

var Section = function(type, section){
  Plant.call(this, type);
  this.section = section;
};

Section.prototype = Object.create(Plant.prototype);
Section.prototype.constructor = Section;

var mySection = new Section('plant', 'edibles');
// console.log(mySection);
// console.log(mySection.getClass());

var Name = function(type, section, name){
  Section.call(this, type, section);
  this.name=name;
};
Name.prototype = Object.create(Section.prototype);
Name.prototype.constructor = Name;

var myName = new Name('plant', 'edibles', 'tree');
// console.log(myName);
// console.log(myName.getClass());

var Variety = function(type, section, name, variety){
  Name.call(this, type, section, name);
  this.variety = variety;
};

Variety.prototype = Object.create(Name.prototype);
Variety.prototype.constructor = Variety;

var myVariety = new Variety('plant', 'edibles', 'tree', 'fig');
console.log(myVariety);
console.log(myVariety.getClass());
