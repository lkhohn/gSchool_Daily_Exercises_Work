var app = angular.module('mouseOverDirectiveApp', []);

app.directive('gsChangeBackground', function() {
  return {
    link: function(scope, element, attrs) {
      // console.log(attrs);

      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', 'yellow');
      });

      element.on('mouseenter', function(event) {
        element.css('background-color', attrs.id);
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      });
    }
  };
});
