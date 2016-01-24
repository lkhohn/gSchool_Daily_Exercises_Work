angular.module("app")
		.controller("FormController", [FormController]);

function FormController(){
  var vm = this;
  vm.users = [];
  vm.displayUsers = displayUsers;


  function displayUsers(){
    var userDetails = {
    username:vm.username,
    password: vm.password,
    email: vm.email,
    zipCode: vm.zipCode
	};
    vm.users.push(userDetails);
    vm.username='';
    vm.password='';
    vm.email='';
    vm.zipCode='';
  }
	}
