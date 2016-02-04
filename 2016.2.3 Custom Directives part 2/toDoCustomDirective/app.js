var app = angular.module('app', []);

app.directive('toDoDirective', function(){
  return {
    restrict: 'E',
    templateUrl:'./toDoList.html',
    controller: ['$scope', function($scope) {
      $scope.tasks= [];
      $scope.addTask = function(newTask) {
          $scope.tasks.push(newTask);
          console.log($scope.tasks);
          $scope.newTask = '';
      };
    }],
  };
});
