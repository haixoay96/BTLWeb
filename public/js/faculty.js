/**
 * Created by nguye on 13/11/2016.
 */

var mainApp = angular.module('Faculty', ['ngRoute']);
mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/faculty/views/home'
        })
        .when('/lecturer', {
            templateUrl: '/faculty/views/lecturer'
        })
        .when('/course', {
            templateUrl: '/faculty/views/course'
        })
        .when('/courseprogram', {
            templateUrl: '/faculty/views/courseprogram'
        })
        .when('/students', {
            templateUrl: '/faculty/views/students'
        })
        .when('/dissertation', {
            templateUrl: '/faculty/views/dissertation'
        })
        .when('/register_dissertation', {
            templateUrl: '/faculty/views/register_dissertation'
        })
}]);
