'use strict';

/**
 * @ngdoc function
 * @name simpleTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleTodoApp
 */
angular.module('simpleTodoApp')
  .controller('MainCtrl', function ($log, $scope) {
	  $scope.todos = [];
	  $scope.todo = '';
	  $scope.addTodo = function () {
		  if ($scope.todo) {
			  $log.log('Adding todo: ' + $scope.todo);
			  $scope.todos.push($scope.todo);
			  $scope.todo = '';
		  }
	  };
	  $scope.removeTodo = function (index) {
		  $scope.todos.splice(index, 1);
	  };
  });
