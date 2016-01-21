angular.module("groceryApp")
		.controller("GroceryController", [GroceryController]);

function GroceryController(){

var vm = this;
vm.addItem = addItem;
vm.removeItem = removeItem;
vm.groceries= [];

vm.addItem('one');
vm.addItem('two');
vm.addItem('three');

function addItem(arg){
  var item = {
    name: arg || vm.itemName,
    checked: false
  };
  vm.groceries.push(item);
  vm.itemName='';
}

function removeItem(index){
  vm.groceries.forEach(function(item, index, arr){
    if(item.name === name){
      arr.splice(index, 1);
    }
  });
}

}
