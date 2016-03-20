angular.module('app')
.controller('mainController', ['$scope', mainController]);
function mainController($scope){
  var vm = this;
  vm.pageTitle = "Calculator";
}

angular.module('app')
.controller('addController', ['$scope', '$routeParams', addController]);
function addController($scope, $routeParams){
  var vm = this;
  vm.pageTitle = "Add";
  vm.sum = {
    num1: $routeParams.num1,
    num2: $routeParams.num2
  };
}

angular.module('app')
.controller('divisionController', ['$scope', '$routeParams', divisionController]);
function divisionController($scope, $routeParams){
  var vm = this;
  vm.division = {
    num1: $routeParams.num1,
    num2: $routeParams.num2
  };
}
