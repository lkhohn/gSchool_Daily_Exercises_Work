angular.module('app')
.service('bookService', ['$http', '$q', bookService])
.service('addBookService', ['$http', '$q', addBookService])
.service('bookDetailsService', ['$http', '$q', bookDetailsService]);


function bookService($http, $q){
  return {
    getBooks: function(){
      return $q(function(resolve, reject){
        $http.get('http://localhost:3000/api/books')
        .then(function success(response){
          resolve(response);
        }, function error(response){
          console.error(response);
        });
      });
    }
  };
}

function addBookService($http, $q){
  return {
    addBook: function(newBook){
      return $q(function(resolve, reject){
        $http.post('http://localhost:3000/api/books', newBook)
        .then(function success(response){
          resolve(response);
        }, function error(response){
          console.error(response);
        });
      });
    }
  };
}

function bookDetailsService($http, $q){
  return{
    bookDetails: function(bookDetails){
      return $q(function(resolve, reject){
        $http.get('http://localhost:3000/api/books', bookDetails)
        .then(function success(response){
          resolve(response);
        }, function error(response){
          console.error(response);
        });
      });
    }
  };
}
