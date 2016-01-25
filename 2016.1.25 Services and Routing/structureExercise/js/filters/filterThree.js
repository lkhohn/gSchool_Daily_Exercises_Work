angular.module('app')
.filter('camelCase', function(){
  return function(input){
    var output = input || '';
    output = output.replace(/-[a-zA-Z]/g, function(x){
      return x[1].toUpperCase();
    })
    return output.replace(/_[a-zA-Z]/g, function(x){
      return x[1].toUpperCase();
    })
  }
})
