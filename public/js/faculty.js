/**
 * Created by nguye on 13/11/2016.
 */

var mainApp = angular.module('Faculty', ['ngRoute']);
mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/faculty/views/home',
            controller: 'HomeController'
        })
        .when('/lecturer', {
            templateUrl: '/faculty/views/lecturer',
            controller: 'lecturerController'
        })
        .when('/course', {
            templateUrl: '/faculty/views/course',
            controller: 'courseController'
        })
        .when('/courseprogram', {
            templateUrl: '/faculty/views/courseprogram',
            controller: ''
        })
        .when('/students', {
            templateUrl: '/faculty/views/students',
            controller: ''
        })
        .when('/dissertation', {
            templateUrl: '/faculty/views/dissertation',
            controller: 'dissertationController'
        })
        .when('/register_dissertation', {
            templateUrl: '/faculty/views/register_dissertation',
            controller: 'registerController'
        })
}]);
