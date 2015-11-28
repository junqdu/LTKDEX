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
    'ngResource',
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
      .when('/heroes/:id', {
        templateUrl: 'views/hero.html',
        controller: 'HeroCtrl',
        controllerAs: 'hero'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
