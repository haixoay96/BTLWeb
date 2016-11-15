/**
 * Created by nguye on 13/11/2016.
 */

var mainApp = angular.module('Faculty', ['ngRoute']);
mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/lecturer', {
            templateUrl: 'views/lecturer.html',
            controller: 'lecturerController'
        })
        .when('/course', {
            templateUrl: 'views/course.html',
            controller: 'courseController'
        })
        .when('/courseprogram', {
            templateUrl: 'views/courseprogram.html',
            controller: ''
        })
        .when('/students', {
            templateUrl: 'views/students.html',
            controller: ''
        })
        .when('/dissertation', {
            templateUrl: 'views/dissertation.html',
            controller: 'dissertationController'
        })
        .when('/register_dissertation', {
            templateUrl: 'views/register_dissertation.html',
            controller: 'registerController'
        })
}]);