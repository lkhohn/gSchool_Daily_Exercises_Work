var app = angular.module('mouseOverDirectiveApp', [])

app.directive('gsChangeBackground', function() {
  return {
    restrict: 'A'
    link: function(scope, element, attrs) {

      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', 'yellow');
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      })
    }
  };
});
function changeClass(){
  var oldColor = element.css('background-color');
}
