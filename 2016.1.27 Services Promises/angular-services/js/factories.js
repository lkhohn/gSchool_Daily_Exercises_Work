angular.module('app')
.factory('square', function(){
  return function(i){
    return i*i;
  };
});
