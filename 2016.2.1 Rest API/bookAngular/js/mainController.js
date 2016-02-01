angular.module('app')
.controller('MainController', ['$scope', '$http', 'bookService', 'individualBookService', MainController]);

function MainController($scope, $http, bookService, individualBookService){
  var vm = this;

  function getBooks(){
    bookService.getBooks().then(function(bookData){
      vm.data = bookData;
    });
  }

  vm.getIndividualBooks = function(id){
    individualBookService.getIndividualBooks(id).then(function(bookData){
      vm.individualBookData = bookData;
    });
  };


  function init(){
    getBooks();
  }
  init();
}
