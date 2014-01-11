'use strict';

/* App Module */

var gdgApp = angular.module('gdgApp', [
  'ngRoute',
  'gdgControllers',
  'gdgServices'
]);

gdgApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/categories', {
        templateUrl: 'partials/categories-list.html',
        controller: 'CategoriesListCtrl'
      }).
      when('/categories/:catId', {
        templateUrl: 'partials/courses-list.html',
        controller: 'CoursesListCtrl'
      }).
      otherwise({
        redirectTo: '/categories'
      });
  }]);
