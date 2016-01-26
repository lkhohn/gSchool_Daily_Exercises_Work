angular.module('app')
.config(function($routeProvider){
  $routeProvider
  .when('/title/:imdbID', {
    templateUrl: 'views/title.html',
    controller: 'titleController as TC'
  });
});
