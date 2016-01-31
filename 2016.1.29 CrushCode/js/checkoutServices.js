angular.module('app')
.service('checkoutServices', function(){
  var vm = this;
  this.checkoutInformation = function(name, price, quantity){
    console.log('hey')
    vm.cartTotalItem = []

    var checkoutItem = {
      name: vm.name,
      price: vm.price,
      quantity: vm.quantity
    }
    vm.cartTotalItem.push(checkoutItem)
    console.log(vm.cartTotalItem);
  }

})
