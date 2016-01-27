// angular.module('app')
// .service('person', function(){
//     this.name = 'Ellie';
//     this.favoriteColor = 'Purple';
//     var _favoriteTree = 'Oak';
//     this.getTree = function(){
//       return _favoriteTree;
//     };
// });

angular.module('app')
.service('calculator', function(){
  this.add = function(firstNumber, secondNumber){
    return firstNumber + secondNumber;
  };
  this.substract = function(firstNumber, secondNumber){
    return firstNumber - secondNumber;
  };
  this.multiply = function(firstNumber, secondNumber){
    return firstNumber * secondNumber;
  };
  this.divide = function(firstNumber, secondNumber){
    return firstNumber / secondNumber;
  };
});
