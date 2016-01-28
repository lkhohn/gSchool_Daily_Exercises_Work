angular.module('app')
.directive('pokemonDirective', ['$http', pokemonDirective]);

function pokemonDirective(http){
  return {
    template: '<img src={{MC.sprite}}><h2>{{MC.pokeName}}</h2><h2>{{MC.pokeTypes}}</h2>'
  };
}
