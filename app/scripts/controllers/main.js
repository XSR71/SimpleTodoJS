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
				$log.info('Adding Todo: ' + $scope.todo.title);
				$log.info('Due Date: ' + $scope.todo.duedate);
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

		$scope.datepickToggle = function ($event) {
			$log.info('Toggling datepick');
			$event.preventDefault();
			$event.stopPropagation();

			$scope.showDatepick = !$scope.showDatepick;
		};

		$scope.orderBy = function (predicate) {
			$log.info('Ordering Todos by: ' + predicate);
			$log.info($scope.todos.length);

			if (predicate === 'timestamp') {
				$scope.todos.sort(function (a, b) {
					if ($scope.reverseOrder) {
						var c = a;
						a = b;
						b = c;
					}
					if (a.timestamp > b.timestamp) {
						return 1;
					}
					if (a.timestamp < b.timestamp) {
						return -1;
					}
					return 0;
				});
			} else if (predicate === 'duedate') {
				$scope.todos.sort(function (a, b) {
					if ($scope.reverseOrder) {
						var c = a;
						a = b;
						b = c;
					}
					if (a.duedate > b.duedate) {
						return 1;
					}
					if (a.duedate < b.duedate) {
						return -1;
					}
					return 0;
				});
			}

			$scope.reverseOrder = !$scope.reverseOrder;
		};


	});