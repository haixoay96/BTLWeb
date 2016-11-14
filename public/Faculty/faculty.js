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
        .when ('/lecturer',{
            templateUrl: 'lecturer.html',
            controller: 'lecturerController'
        })
        .when('/course', {
            templateUrl: 'views/course.html',
            controller: 'courseController'
        })
    .when('/courseprogram', {
        templateUrl: 'views/home.html',
        controller: ''
    })
        .when('/students', {
            templateUrl: 'views/home.html',
            controller: ''
        })
        .when('/dissertation', {
            templateUrl: 'views/home.html',
            controller: ''
        })
        .when('/register_dissertation', {
            templateUrl: 'views/home.html',
            controller: ''
        })
}]);