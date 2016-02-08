// var app = angular.module('app', []);
//
// app.directive('toDoDirective', function(){
//   return {
//     restrict: 'E',
//     templateUrl:'./toDoList.html',
//     controller: ['$scope', function($scope) {
//       $scope.tasks= [];
//       $scope.addTask = function(newTask) {
//           $scope.tasks.push(newTask);
//           // console.log($scope.tasks);
//           $scope.newTask = '';
//       };
//     }],
//   };
// });
//
//
// app.directive('schoolDirective', function(){
//   return {
//     restrict:'E',
//     templateUrl:'./schoolTaskList.html',
//     controller: ['$scope', function($scope){
//       $scope.schoolTasks = [];
//       $scope.addSchoolTask = function(newSchoolTask){
//         $scope.schoolTasks.push(newSchoolTask);
//         // console.log($scope.schoolTasks)
//         $scope.newSchoolTask = '';
//       };
//
//       this.edit = function(newItem, oldItem){
//         var index = $scope.schoolTasks.indexOf(oldItem);
//         console.log(index);
//         $scope.schoolTasks[index] = newItem;
//       };
//     }]
//   };
// });
//
//
// app.directive('editDirective', function(){
//   return {
//     restrict:'E',
//     templateUrl:'./updateItem.html',
//     require:'^schoolDirective',
//     link: function(scope, element, attrs, ctrl){
//       scope.edit = function(editItem){
//         console.log(attrs.listItem)
//         ctrl.editItem(editItem, attrs.listItem);
//       };
//     }
//   };
// });
var app = angular.module('app', []);

//Parent directive
app.directive('swList', function() {
  return {
    restrict: 'E',
    templateUrl:'./toDoList.html',
    controller: ['$scope', function($scope) {
      $scope.list = [];
      $scope.addToList = function(item) {
        $scope.list.push(item);
        $scope.taskInput = '';
      };

      this.editItem = function(newItem, old){
        var index = $scope.list.indexOf(old);
        $scope.list[index] = newItem;
        // console.log('the new item is' + newItem + 'the old item is ' + old);
      };
    }],
  };
});

// Child directive
app.directive('swItemUpdate', function() {
  return {
    restrict: 'E',
    templateUrl:'./updateItem.html',
    require: '^swList',
    link: function(scope, element, attrs, ctrl) {
      scope.edit = function(item) {
        ctrl.editItem(item, attrs.listItem);
      };
    }
  };
});
