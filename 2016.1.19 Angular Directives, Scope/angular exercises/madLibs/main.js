var app = angular.module('madLibs', []);

app.controller('madLibsController', function($scope){
  $scope.words = {
    name: ' ',
    adjective: ' ',
    pluralNoun1: ' ',
    pluralNoun2: ' ',
    insectPlural: ' ',
    pluralNoun3: ' ',
    verbEndingS: ' '
  }
});
