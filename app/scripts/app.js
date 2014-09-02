'use strict';

/**
 * @ngdoc overview
 * @name simpleTodoApp
 * @description
 * # simpleTodoApp
 *
 * Main module of the application.
 */
angular
    .module('simpleTodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
  ])
    .controller('NavCtrl', function ($scope, $route) {
        $scope.$route = $route;
    })
    .config(['localStorageServiceProvider',
        function (localStorageServiceProvider) {
            localStorageServiceProvider.setPrefix('ls');
        }])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                activeTab: 'Home'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                activeTab: 'About'
            })
            .otherwise({
                redirectTo: '/'
            });
    });