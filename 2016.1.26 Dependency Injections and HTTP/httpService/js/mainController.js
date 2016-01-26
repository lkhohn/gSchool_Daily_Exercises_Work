angular.module('app')
.controller('mainController', ['$scope', '$http', mainController]);

function mainController($scope, $http){
  var vm = this;
  vm.search = search;
  vm.movieSearch = '';

function search($scope){
  var config = {
    method: 'GET',
    url: 'http://www.omdbapi.com/?s=' + vm.movieSearch
  };

  $http(config).then(onSuccess, onFailure);

  function onSuccess(response){
    // console.log(response.data.Search);
    // console.log(response);
    vm.display = response;
  }

  function onFailure(response){
    // console.log(response);
    vm.display = response;
  }
}
}


angular.module('app')
.controller('titleController', ['$scope', '$http', '$routeParams', titleController]);

function titleController($scope, $http, $routeParams){
  var vm = this;
  var config = {
    method: 'GET',
    url: 'http://www.omdbapi.com/?i=' + $routeParams.imdbID
  };

  $http(config).then(onSuccess, onFailure);

  function onSuccess(response){
    console.log(response.data);
    // console.log(response);
    vm.display = response;
  }

  function onFailure(response){
    // console.log(response);
    vm.display = response;
  }
}
