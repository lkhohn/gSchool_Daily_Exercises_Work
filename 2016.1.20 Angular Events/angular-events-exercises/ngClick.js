var app = angular.module('firstApp', []);

app.controller("MyFirstController", function($scope){
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random()*10+1);
  };
});

app.controller('ReverseController', function($scope){
  $scope.word = "";
  $scope.wordReverser = function(){
    // return $scope.word.split('').reverse.join('');
  $scope.wordReversed = $scope.word.split('').reverse().join('');
  };
});

app.controller("PingPong", function($scope){
  $scope.addPlayerOnePoint = function(){
    $scope.playerOnePoints = $scope.playerOnePoints + 1;
    // if($scope.playerOnePoints != 11){
    //   console.log('hey')
    // }
  };
  $scope.addPlayerTwoPoint = function(){
    $scope.playerTwoPoints = $scope.playerTwoPoints + 1;
  };
  $scope.reset = function(){
    $scope.playerOnePoints = 0;
    $scope.playerTwoPoints = 0;
  };
});

app.controller("ContactApp", function($scope){

});
