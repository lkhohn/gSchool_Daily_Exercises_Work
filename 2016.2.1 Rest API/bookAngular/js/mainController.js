angular.module('app')
.controller('MainController', ['$scope', '$http', 'bookService','addBookService', MainController]);

function MainController($scope, $http, bookService, addBookService){
  var vm = this;
  vm.addBook = addBook;
  vm.bookDetails = bookDetails;

  function getBooks(){
    bookService.getBooks().then(function(bookData){
      vm.data = bookData;
    });
  }

  function addBook(newBook){
    addBookService.addBook(newBook).then(function(response){
      getBooks();
    });
}

  function bookDetails(){
    bookDetailsService.bookDetails(bookDetails).then(function(){
      
    })
  }


  function init(){
    getBooks();
  }
  init();
}
