var app = angular.module('diceApp', []);

app.directive('diceDirective', function() {
  return {
    scope: {'num' : '=numInput'},
    controller: ['$scope', function($scope) {
      $scope.rollDice = function() {
        var num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        return num;
      };
    }],
    template: "<div class='square'>{{ scope.num }}</div>",
    link: function(scope, element, attrs) {
      element.on('click', function() {
        scope.num = scope.rollDice();
        console.log(scope.num);
        console.log(element.children());
        element.children().text(scope.num);
      });
    }
  };
});


// var app = angular.module('diceApp', []);
//
// app.directive('diceDirective', function() {
//   return {
//     scope: {'num' : '=numInput'},
//     controller: ['$scope', function($scope) {
//       $scope.rollDice = function() {
//         $scope.num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
//         // return num;
//       };
//     }],
//     template: "<div class='square' ng-click='rollDice()'>{{ num }}</div>",
    // link: function(scope, element, attrs) {
      // scope.num = parseInt(scope.num, 10);
      // element.on('click', function() {
        // scope.$apply(function(){
      //     console.log(scope.num);
          // scope.num = scope.rollDice();
      //   });
        // element.children.text(scope.num);
      // });
//
//       /// or you can remove this from controller and put in the link section
//       // scope.rollDice = function() {
//       //   scope.num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
//       //   // return num;
//       // };
//     }
//   };
// });
