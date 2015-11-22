'use strict';

angular.module('ltkdbApp')
.constant('HEROES_PATH', 'static/heroes.json')
.service('heroes', function($resource, HEROES_PATH) {

  var getHeroes = $resource(HEROES_PATH);

  return {
    getHeroes: getHeroes
  };

});
