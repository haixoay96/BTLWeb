/**
 * Created by nguye on 13/11/2016.
 */

var mainApp = angular.module('Faculty', ['ngRoute']);
mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/admin/faculty/views/home.html'
        })
        .when('/lecturer', {
            templateUrl: '/admin/faculty/views/lecturer.html'
        })
        .when('/course', {
            templateUrl: '/admin/faculty/views/course.html'
        })
        .when('/courseprogram', {
            templateUrl: '/admin/faculty/views/courseprogram.html'
        })
        .when('/students', {
            templateUrl: '/admin/faculty/views/students.html'
        })
        .when('/dissertation', {
            templateUrl: '/admin/faculty/views/dissertation.html'
        })
        .when('/register_dissertation', {
            templateUrl: '/admin/faculty/views/register_dissertation.html'
        })
}]);
