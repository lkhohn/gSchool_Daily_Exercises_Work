angular.module('app')
.controller('MainController', ['teaService', MainController]);

function MainController(teaService){
  var vm = this;
  vm.teaInventory = teaService.teaInventoryData();
}
