'use strict';

/**
 * @ngdoc function
 * @name simpleTodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleTodoApp
 */
angular.module('simpleTodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
