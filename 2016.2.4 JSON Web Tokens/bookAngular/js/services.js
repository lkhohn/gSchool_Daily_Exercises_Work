angular.module('app')
.service('bookService', ['$http', '$q', bookService]);

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
