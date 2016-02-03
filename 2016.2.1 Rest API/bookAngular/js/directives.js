angular.module('app')
.directive('listBooks', ['$http', listBooks]);

function listBooks(http){
  return {
    templateUrl: '../views/home.html'
  };
}
