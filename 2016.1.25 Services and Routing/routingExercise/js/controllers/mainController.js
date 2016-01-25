angular.module("angularCustomFilters")
.controller('mainController', ['$scope', mainController]);

function mainController($scope){
  var vm = this;
  vm.pageTitle = "Angular Custom Filters";
}

angular.module("angularCustomFilters")
.controller('dogController', ['$scope', dogController]);
function dogController($scope){
  var vm=this;
  vm.pageTitle='Dogs';
}

angular.module("angularCustomFilters")
.controller('projectsController', ['$scope', projectsController]);
function projectsController($scope){
  var vm = this;
  vm.pageTitle='Projects';
}

angular.module("angularCustomFilters")
.controller('bioController', ['$scope', bioController]);
function bioController($scope){
  var vm = this;
  vm.pageTitle='Bio';
}

angular.module("angularCustomFilters")
.controller('resumeController', ['$scope', resumeController]);
function resumeController($scope){
  var vm = this;
  vm.pageTitle='Resume'
}
