'use strict';

/* Services */

var gdgServices = angular.module('gdgServices', ['ngResource']);

gdgServices.factory('Category', ['$resource',
  function($resource){
    return $resource('data/:catId.json', {}, {
      query: {method:'GET', params:{catId:'categories'}, isArray:true}
    });
  }]);


