'use strict';

/**
 * @ngdoc function
 * @name ltkdbApp.controller:HeroCtrl
 * @description
 * # HeroCtrl
 * Controller of single hero view
 */
angular.module('ltkdbApp')
  .controller('HeroCtrl', function ($routeParams, $scope, Heroes) {
    $scope.allegianceMap = ['Neutral', 'Shu', 'Wei','Wu'];
    $scope.genderMap = ['♀', '♂'];
    $scope.heroes = Heroes.get({}, function(heroes){
      $scope.heroId = $routeParams.id;
      $scope.hero = heroes[$scope.heroId];
    });

    this.getLabel = function(allegiance) {
      switch(allegiance) {
        case 0:
          return 'label label-default';
        case 1:
          return 'label label-danger';
        case 2:
          return 'label label-primary';
        case 3:
          return 'label label-success';
      }
    };
  });
