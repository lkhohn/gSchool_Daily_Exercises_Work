angular.module('app')
.controller('MainController', [MainController]);

function MainController(){
  var vm = this;
  vm.success = success;

  function success(){
    alert('Form Submitted!')
  }
}
