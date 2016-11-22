/**
 * Created by nguye on 22/11/2016.
 */
var mainApp = angular.module('admin_student', ['ngRoute']);
mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/profile_student.html'
        })
        .when('/register_dissertation', {
            templateUrl: 'views/register_dissertation.html'
        })
}]);
