// angular.module('app')
// .filter('upper', function(){
//   return function(input){
//     // the || mean if input is undefined, then initalize an empty string
//     var output = input || '';
//     output = output.split('').map(function(i){
//       return i.toUpperCase();
//     });
//     return output.join('');
//   };
// });



angular.module('app')
.filter('upper', function(){
  return function(input, param){
    var output = input || '';
     output = output.split('').map(function(i){
       if(param.search(i) != -1){
         return i.toUpperCase();
       }
       else {
         return i;
       }
     }).join('');
     return output;
  };
});
