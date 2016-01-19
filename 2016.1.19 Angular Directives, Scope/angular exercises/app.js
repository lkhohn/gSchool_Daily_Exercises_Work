var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
})

app.controller('ExercisesController', function($scope){
  $scope.favColor = 'green';
  $scope.secondsInACentury = '3,155,760,000';
  $scope.rightNow = new Date().toString();

})
