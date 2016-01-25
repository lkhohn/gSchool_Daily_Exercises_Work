angular.module('app')
  .controller('ToDoController', [ToDoController])

function ToDoController (){
  var vm = this;
  vm.addPost = addPost;
  vm.deletePost = deletePost;
  vm.currentDate = currentDate;
  vm.completedDate = completedDate;

  vm.posts = [{
    task: 'grocery store',
    date: '01/22/2016 at 10:00AM',
    current: ""
  },
  {
    task: 'laundry',
    date: '01/22/2016 at 8:24AM',
    current: ""
  }];

  function addPost(){
    var individualTask = {
      task: vm.task,
      date: Date.now(),

    }
    vm.posts.push(individualTask);
    vm.task='';
  }

  function deletePost($index){
    vm.posts.splice($index, 1)
  }

  function currentDate(){
    vm.current = Date.now();

  }

  function completedDate(){
    vm.complete = Date.now();
  }

}
