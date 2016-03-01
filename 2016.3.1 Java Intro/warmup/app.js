// function Teacher(isAwesome){
//   this.isAwesome = isAwesome;
// }
// Teacher.prototype.blahblahblah = function(){
//   if(this.isAwesome){
//     return 'Today we will be having an Arnold Schwarzenegger marathon instead of class';
//   }else{
//     return 'I am going to talk to you guys about Mary-Kate and Ashely ALL DAY';
//   }
// }
//
// var logan  = new Teacher(false);
// logan.blahblahblah();
//
// var eugene = new Teacher(true);
// eugene.blahblahblah();
// Now that review is over lets make a few objects ourselves,
//
// Create the following:
//
// create a prototype called Dog
// the constructor takes in a name, age and weight (number)
// the dog has a function called poop
// when the dog poops it loses weight
// the dog has a function called eat
// when the dog eats it gains weight
// the dog has a function called sleep
// when the dog sleeps nothing happens
// the dog has a function called act
// in the act function it either eats, poops, or sleeps.
// Think of other things you would like your dog to do.

function Dog(name, age, weight){
    this.name = name,
    this.poop = function(){
      weight = weight - 1;
      console.log(weight);
    },
    this.eat = function(){
      weight = weight + 1;
      console.log(weight);
    },
    this.sleep = function(){
      console.log('puppy is sleeping');
    }
}
var newDog = new Dog('Banjo', '3', 65);
newDog.poop();




// Create a Cat as well
//
// create a prototype called Cat
// the constructor takes in a name, and whether or not the cat is evil.
// jokes on you, the cat is always evil.
// the cat has a function called eatOwnersHomework
// the cat gains happiness.
// the cat has a function called poopOutsideLitterBox
// the cat gains happiness
// the cat has a function called obeyOwner
// that cat loses happiness
// That's it, you are all warmed up!

function Cat(name, happiness){
  this.name = name,
  this.eatOwnersHomework = function(){
    happiness = happiness + 1;
    console.log(happiness);
  },
  this.poopOutsideLitterBox = function(){
    happiness = happiness + 1;
    console.log(happiness);
  },
  this.obeyOwner = function(){
    happiness = happiness - 1;
    console.log(happiness);
  }
}

var newCat = new Cat("Bianca", 10);
newCat.eatOwnersHomework();
