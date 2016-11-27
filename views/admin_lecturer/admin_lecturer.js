var mainApp = angular.module('admin_lecturer', ['ngRoute']);
mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/profile_lecturer.html'
        })
        .when('/research', {
            templateUrl: 'views/research.html'
        })
        .when('/field', {
            templateUrl: 'views/field.html'
        })
}]);
