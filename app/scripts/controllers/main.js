'use strict';

/**
 * @ngdoc function
 * @name simpleTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleTodoApp
 */
angular.module('simpleTodoApp')
    .controller('MainCtrl', function ($log, $scope, localStorageService, $modal) {
        $scope.todos = [];
        $scope.todo = {};
        $scope.isCollapsed = true;

        localStorageService.bind($scope, 'todos', $scope.todos);

        $scope.addTodo = function () {
            if ($scope.todo.title) {
                $log.info('Adding todo: ' + $scope.todo.title);
                $scope.todo.timestamp = new Date();
                $scope.todos.push($scope.todo);
                $scope.todo = {};
            }
        };

        $scope.removeTodo = function (index) {
            $log.info('Removing todo at index: ' + index);
            $scope.todos.splice(index, 1);
        };

        $scope.confirmRemove = function (index) {
            var modalInstance = $modal.open({
                templateUrl: 'modalContent.html',
                controller: function ($scope, $modalInstance) {
                    $scope.confirmOk = function () {
                        $modalInstance.close();
                    };

                    $scope.confirmCancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
            });

            modalInstance.result.then(function () {
                $log.info('Confirmed');
                $scope.removeTodo(index);
            }, function () {
                $log.info('Cancelled');
            });
        };
    });