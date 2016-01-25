angular.module('app')
.filter('kebabCase', function(){
  return function(input){
    var output=input || '';

    return output.split('_').join('-');
  };
});
