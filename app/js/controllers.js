'use strict';

/* Controllers */

var gdgControllers = angular.module('gdgControllers', []);

gdgControllers.controller('CategoriesListCtrl', ['$scope', 'Category',
  function($scope, Category) {
    $scope.categories = Category.query();    
  }]);

gdgControllers.controller('CoursesListCtrl', ['$scope', 'Category',
  function($scope, Category) {
    $scope.courses = Category.query();    
  }]);

