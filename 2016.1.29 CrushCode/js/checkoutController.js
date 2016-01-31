angular.module('app')
.controller('CheckoutController', ['checkoutServices', CheckoutController]);

function CheckoutController(checkoutServices){
  var vm = this;
  vm.addItem = checkoutServices.checkoutInformation();

}
