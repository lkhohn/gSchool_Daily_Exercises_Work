angular.module('app')
.service('taskService', function(){
  this.addTask = function(){
    var individualTask = {
      task: vm.task
    };
    vm.posts.push(individualTask);
    vm.task='';
    };
});
