angular.module('angularCustomFilters')
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainController as MC'
    })
    .when('/dogs', {
      templateUrl: 'views/dogs.html',
      controller: 'dogController as DC'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'projectsController as PC'
    })
    .when('/bio', {
      templateUrl: 'views/bio.html',
      controller: 'bioController as BC'
    })
    .when('/resume', {
      templateUrl: 'views/resume.html',
      controller: 'resumeController as RC'
    })
})


/// use the route at the end of everything. This is incase there was an error:
// .otherwise ({
//   redirectTo:'views/main.html'
// })
