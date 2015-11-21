'use strict';

/**
 * @ngdoc overview
 * @name ltkdbApp
 * @description
 * # ltkdbApp
 *
 * Main module of the application.
 */
angular
  .module('ltkdbApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
