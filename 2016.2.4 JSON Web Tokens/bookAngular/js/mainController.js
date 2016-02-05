angular.module('app')
.controller('MainController', ['$scope', '$http', 'bookService', MainController]);

function MainController($scope, $http, bookService){
  var vm = this;
  vm.login = login;
  vm.logout = logout;
  vm.checkApi = checkApi;

  function getBooks(){
    bookService.getBooks().then(function(bookData){
      vm.data = bookData;
    });
  }
  function init(){
    getBooks();
  }
  init();

  function login(){
    $http.post('/auth', vm.user)
    .then(function(response){
      $window.sessionStorage.token = response.data.token;
      console.log(response.data.token);
    }).catch(function(){
      console.error('login error');
    });
  }

  function logout(){
    delete $window.sessionStorage.token;
  }

  function checkApi(){
    $http.get('/api/resource', vm.user)
    .then(function(){

    });
  }


}
