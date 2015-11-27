'use strict';

angular.module('ltkdbApp')
.constant('HEROES_PATH', 'static/heroes.json')
.factory('Heroes', function($resource, HEROES_PATH) {
  return $resource(HEROES_PATH, {}, {
    query: {method:'GET', isArray:false}
  });
});
