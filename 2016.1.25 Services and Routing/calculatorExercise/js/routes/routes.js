angular.module('app')
.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'mainController as MC'
  });
});

angular.module('app')
.config(function($routeProvider){
  $routeProvider
  .when('/add/:num1/:num2', {
    templateUrl: 'views/add.html',
    controller: 'addController as AC'
  });
});

angular.module('app')
.config(function($routeProvider){
  $routeProvider
  .when('/division/:num1/:num2', {
    templateUrl: 'views/division.html',
    controller: 'divisionController as DC'
  });
});
