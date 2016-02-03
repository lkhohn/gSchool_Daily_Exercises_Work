var app = angular.module('app', []);

app.directive('toDoDirective', function(){
  return {
    controller: ['$scope', function($scope){
      // $scope.
    }]
    // template:
    link: function(scope, element, attrs){
      element.on('click', function(){

      })
    }

  };
});
