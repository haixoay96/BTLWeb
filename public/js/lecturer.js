var mainApp = angular.module('admin_lecturer', ['ui.router']);

mainApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/admin/lecturer/profile_lecturer',
            controller: 'HomeController'
        })
        .state('research', {
            url: '/research',
            templateUrl: '/admin/lecturer/views/research.html',
            controller: 'researchController'
        })
        .state('field', {
            url: '/field',
            templateUrl: '/admin/lecturer/field',
            controller: 'fieldController'
        })
});
mainApp.controller('HomeController', function ($scope, $location) {
    $scope.user = {
        name: "Lê Đình Thanh",
        id: "",
        faculty: "Công nghệ thông tin",
        lab: "lab",
        mail: ""

    };
    $scope.edit_research = function (user) {
        // $scope.modify_research = true;
        $scope.view_research = true ;
    };
    $scope.editField = function () {
        $location.path = '/field';
    }
    $scope.update = function (user) {
        //$scope.modify_research = false;
        $scope.view_research = false;
    }
});
mainApp.controller('researchController', function () {

});

mainApp.controller('fieldController', function ($scope) {


});
