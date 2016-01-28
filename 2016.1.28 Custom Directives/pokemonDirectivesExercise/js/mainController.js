angular.module('app')
.controller('MainController', ['$http', MainController]);

function MainController($http){
  var vm = this;
  vm.getPokemon = getPokemon;
  vm.pokeName = '';
  vm.pokeTypes = '';
  vm.sprite = '';

  function getPokemon(){
    function randNum() {
       return Math.floor(Math.random(1) * 151).toString();
     }
     var num = randNum();
     var url = "http://pokeapi.co/api/v1/pokemon/"+num;
  $http.get(url)
    .then(function(pokemonData){
      console.log(pokemonData);
      vm.pokeName = pokemonData.data.name;
      vm.pokeTypes = pokemonData.data.types[0].name;
      vm.sprite = pokemonData.data.sprites[0].resource_uri;

    });
    }
}
