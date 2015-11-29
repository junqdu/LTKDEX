'use strict';

/**
 * @ngdoc function
 * @name ltkdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ltkdbApp
 */
angular.module('ltkdbApp')
  .controller('MainCtrl', function (Heroes) {
    this.allegianceMap = ['Shu', 'Wei', 'Wu', 'Neutral'];
    this.heroes = Heroes.get();

    this.getLabel = function(allegiance) {
      switch(allegiance) {
        case 1:
          return 'label label-danger';
        case 2:
          return 'label label-primary';
        case 3:
          return 'label label-success';
        case 0:
          return 'label label-default';
      }
    };
  });
