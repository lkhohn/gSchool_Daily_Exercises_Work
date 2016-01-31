angular.module('app')
.controller('MainController', [MainController]);

function MainController(){
  var vm = this;
  vm.addTask = addTask;

  vm.posts = [{
    task: 'grocery store'
  },
  {
    task: 'laundry'
  }];
}
