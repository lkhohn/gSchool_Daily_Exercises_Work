angular.module('app')
.service('pokemon', ['http', 'q', function($http, $q){
  var deferred = $q.defer();
  var baseUrl = 'http://pokeapi.co/';
  var pokemonInfoPath = 'api/v1/pokemon/';
  var fullUrl = baseUrl + pokemonInfoPath + pokemonId + '/';

  $http.get(fullUrl)
  .then(function(data){

  });
}]);




// http://pokeapi.co/api/v1/pokemon/
