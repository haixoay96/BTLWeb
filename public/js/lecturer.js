var mainApp = angular.module('admin_lecturer', ['ngRoute']);
mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/admin/lecturer/views/profile_lecturer.html'
        })
        .when('/research', {
            templateUrl: '/admin/lecturer/views/research.html'
        })
        .when('/field', {
            templateUrl: '/admin/lecturer/views/field.html'
        })
}]);
