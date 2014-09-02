'use strict';

/**
 * @ngdoc function
 * @name simpleTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleTodoApp
 */
angular.module('simpleTodoApp')
    .controller('MainCtrl', function ($log, $scope, localStorageService) {
        $scope.todos = [];
        $scope.todo = {};
        
        localStorageService.bind($scope, 'todos', $scope.todos);

        $scope.addTodo = function () {
            if ($scope.todo.title) {
                $log.log('Adding todo: ' + $scope.todo.title);
                $scope.todo.timestamp = new Date();
				$scope.todos.push($scope.todo);
                $scope.todo = {};
            }
        };
        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };
    });