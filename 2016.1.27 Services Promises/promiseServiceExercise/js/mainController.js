angular.module('app', [])
.controller('MainController', ['pokemon', MainController]);

function MainController(pokemon){
  var vm = this;
  vm.promise = pokemon.getPokemon();
promise.then(function(data){
  console.log(vm.data);
});
}
