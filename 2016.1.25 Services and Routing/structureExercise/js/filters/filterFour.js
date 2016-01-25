angular.module('app')
.filter('redact', function(){
  return function(input, param){
    var output = input || '';
    output = output.replace(/banjo/g,"REDACTED");
    return output;
  };
});
